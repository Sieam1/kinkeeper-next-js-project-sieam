"use client";
import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
    { name: "Meetup", value: timeline.filter((t) => t.type === "Meetup").length },
  ].filter(item => item.value > 0); // শুধুমাত্র যেগুলোর ডেটা আছে সেগুলো দেখাবে

  const COLORS = ["#2d4a53", "#4f46e5", "#22c55e", "#f59e0b"];

  return (
    <div className="bg-slate-50 p-4 md:p-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Title - সাইজ একটু কমানো হয়েছে */}
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Friendship Analytics
        </h1>

        {/* Main Card - প্যাডিং কমানো হয়েছে */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 md:p-6 shadow-sm">
          <p className="text-slate-500 text-xs font-medium mb-2">By Interaction Type</p>
          
          {/* Chart Container - উচ্চতা ২৫০px থেকে ৩০০px এর মধ্যে রাখা হয়েছে */}
          <div className="w-full h-[250px] md:h-[300px] flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60} // সাইজ ছোট করা হয়েছে
                  outerRadius={85} // সাইজ ছোট করা হয়েছে
                  paddingAngle={4}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                  iconType="circle"
                  iconSize={6}
                  wrapperStyle={{ paddingTop: "10px", fontSize: "11px" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
    </div>
  );
}