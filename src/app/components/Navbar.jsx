"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaHome, FaClock, FaChartPie, FaBars } from "react-icons/fa";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Timeline", path: "/timeline", icon: <FaClock /> },
    { name: "Stats", path: "/stats", icon: <FaChartPie /> },
  ];

  return (
    <div className="navbar bg-base-100 shadow px-4 md:px-6">
      {/* Left side */}
      <div className="flex-1">
        <h1 className="text-emerald-900 font-bold text-lg md:text-xl">
          KeenKeeper
        </h1>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex gap-3">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`btn btn-sm md:btn-md gap-2 border-none transition-all duration-300 ${
              path === link.path
                ? "bg-[#064e3b] text-white shadow-lg"
                : "btn-ghost hover:bg-[#064e3b]/10 text-gray-700 hover:text-[#064e3b]"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>

    
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 right-4 w-52 bg-base-100 shadow-lg rounded-lg p-2 flex flex-col gap-2 md:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                path === link.path
                  ? "bg-[#064e3b] text-white"
                  : "hover:bg-[#064e3b]/10 text-gray-700"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}