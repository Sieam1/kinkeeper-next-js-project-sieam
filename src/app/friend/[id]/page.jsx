"use client";

import { useParams } from "next/navigation";
import friends from "@/data/friends.json";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import toast from "react-hot-toast";
import { FaPhone, FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FiArchive } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((f) => f.id == id);
  const { addEntry } = useContext(TimelineContext);

  if (!friend) return <p className="text-center mt-10">Friend not found</p>;

  const handleClick = (type) => {
    addEntry({
      date: new Date().toLocaleDateString(),
      title: `${type} with ${friend.name}`,
      type,
    });
    toast.success(`${type} added!`);
  };

  const statusColor =
    friend.status === "overdue"
      ? "bg-red-100 text-red-600"
      : friend.status === "soon"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-green-100 text-green-600";

  return (
    <div className="bg-base-200 min-h-screen p-4 md:p-10">

      {/* MAIN CARD */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 border">

        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="space-y-4">

            {/* Profile Card */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm text-center">
              <img
                src={friend.picture}
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />

              <h2 className="font-semibold mt-2">{friend.name}</h2>

              <div className={`text-xs px-3 py-1 rounded-full inline-block mt-2 ${statusColor}`}>
                {friend.status}
              </div>

              <div className="mt-2 flex justify-center gap-1 flex-wrap">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-xs italic text-gray-500 mt-2">
                "{friend.bio}"
              </p>

              <p className="text-xs text-gray-400">
                Preferred: email
              </p>
            </div>

            {/* Action Card */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm space-y-3 text-sm">
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                🔔 Snooze 2 Weeks
              </button>

              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <FiArchive /> Archive
              </button>

              <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
                <MdDelete /> Delete
              </button>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {/* Stats Card */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm grid grid-cols-3 text-center">

              <div>
                <h2 className="text-2xl font-bold">
                  {friend.days_since_contact}
                </h2>
                <p className="text-xs text-gray-500">
                  Days Since Contact
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  {friend.goal}
                </h2>
                <p className="text-xs text-gray-500">
                  Goal (Days)
                </p>
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  {new Date(friend.next_due_date).toDateString()}
                </h2>
                <p className="text-xs text-gray-500">
                  Next Due
                </p>
              </div>

            </div>

            {/* Goal Card */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold">
                  Relationship Goal
                </h3>
                <p className="text-sm text-gray-500">
                  Connect every{" "}
                  <span className="font-bold">
                    {friend.goal} days
                  </span>
                </p>
              </div>

              <button className="text-sm text-blue-500 hover:underline">
                Edit
              </button>
            </div>

            {/* Quick Check Card */}
            <div className="bg-base-100 rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-4">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">

                {/* Call */}
                <button
                  onClick={() => handleClick("Call")}
                  className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-base-200 hover:scale-105 active:scale-95 transition"
                >
                  <FaPhone className="text-xl mb-2" />
                  <span className="text-sm">Call</span>
                </button>

                {/* Text */}
                <button
                  onClick={() => handleClick("Text")}
                  className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-base-200 hover:scale-105 active:scale-95 transition"
                >
                  <IoChatbubbleEllipses className="text-xl mb-2" />
                  <span className="text-sm">Text</span>
                </button>

                {/* Video */}
                <button
                  onClick={() => handleClick("Video")}
                  className="flex flex-col items-center justify-center border rounded-lg p-4 hover:bg-base-200 hover:scale-105 active:scale-95 transition"
                >
                  <FaVideo className="text-xl mb-2" />
                  <span className="text-sm">Video</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}