"use client";
import { createContext, useState } from "react";

export const TimelineContext = createContext();

export default function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (entry) => {
    setTimeline((prev) => [...prev, entry]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}