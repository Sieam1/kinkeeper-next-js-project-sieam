"use client";
import { useContext, useState } from "react";
import { TimelineContext } from "@/context/TimelineContext";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const data =
    filter === "All"
      ? timeline
      : timeline.filter((t) => t.type === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      <div className="flex gap-2 mb-4">
        {["All", "Call", "Text", "Video"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} className="btn btn-sm">
            {f}
          </button>
        ))}
      </div>

      {data.map((item, i) => (
        <div key={i} className="card p-4 mb-3 shadow">
          <p className="text-sm">{item.date}</p>
          <p className="font-semibold">{item.title}</p>
        </div>
      ))}
    </div>
  );
}