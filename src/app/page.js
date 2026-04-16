import Banner from "./components/Banner";
import FriendCard from "./components/FriendCard";
import friends from "@/data/friends.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200">

      <Banner />

      {/* ✅ Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 mt-6">
        <div className="card bg-base-100 shadow text-center p-4">
          <h2 className="text-3xl font-bold text-base-content">{friends.length}</h2>
          <p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>

        <div className="card bg-base-100 shadow text-center p-4">
          <h2 className="text-3xl font-bold text-base-content">
            {friends.filter(f => f.status === "on-track").length}
          </h2>
          <p className="text-sm text-gray-500 mt-1">On Track</p>
        </div>

        <div className="card bg-base-100 shadow text-center p-4">
          <h2 className="text-3xl font-bold text-base-content">
            {friends.filter(f => f.status === "overdue").length}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Need Attention</p>
        </div>

        <div className="card bg-base-100 shadow text-center p-4">
          <h2 className="text-3xl font-bold text-base-content">12</h2>
<p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>
      </div>

      {/* ✅ Title */}
      <h2 className="px-6 mt-10 text-xl font-semibold">
        Your Friends
      </h2>

      {/* ✅ Friends Grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>

    </div>
  );
}