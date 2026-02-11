"use client";

import { motion } from "framer-motion";
import { Coffee, MapPin, Utensils, Stars } from "lucide-react";
import Link from "next/link";

const activities = [
  {
    time: "10:00 AM",
    title: "Morning Coffee Date",
    description:
      "Starting the day with your favorite latte and pastries at our favorite cafe.",
    icon: <Coffee className="text-amber-700" size={32} />,
    color: "bg-amber-100",
    border: "border-amber-300",
  },
  {
    time: "05:00 PM",
    title: "Romantic Stroll",
    description: "A hand-in-hand walk through the estate and view sunset.",
    icon: <MapPin className="text-emerald-700" size={32} />,
    color: "bg-emerald-100",
    border: "border-emerald-300",
  },
  {
    time: "07:00 PM",
    title: "Candlelight Dinner",
    description:
      "A special reserved dinner at The our House. Dress code: Anything sexy! ✨",
    icon: <Utensils className="text-rose-700" size={32} />,
    color: "bg-rose-100",
    border: "border-rose-300",
  },
  {
    time: "09:00 PM",
    title: "Stargazing",
    description: "Ending the night watching the stars and making wishes.",
    icon: <Stars className="text-indigo-700" size={32} />,
    color: "bg-indigo-100",
    border: "border-indigo-300",
  },
];

export default function Itinerary() {
  return (
    <main className="min-h-screen p-8 pb-24 md:p-16 flex flex-col items-center">
      <motion.h1
        className="text-5xl md:text-7xl font-dancing text-rose-600 mb-16 text-center drop-shadow-sm"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Valentine's Day ❤️
      </motion.h1>

      <div className="w-full max-w-2xl flex flex-col gap-8 relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-4 bottom-4 w-1 bg-rose-200 rounded-full md:left-1/2 md:-ml-0.5 opacity-50" />

        {activities.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 ${item.color.replace("bg-", "bg-")}`}
              style={{ left: "calc(2rem - 3px)" }}
            >
              {/* Mobile dot positioning adjustment via inline style logic is complex, sticking to responsive classes logic below for dot */}
            </div>
            {/* Redoing Dot logic for proper responsiveness */}
            <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-rose-400 border-2 border-white shadow-md z-10" />

            {/* Content Card */}
            <div
              className={`w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 p-6 rounded-2xl shadow-lg border-2 ${item.color} ${item.border} backdrop-blur-sm bg-white/60 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-full shadow-sm">
                  {item.icon}
                </div>
                <span className="font-dancing text-xl font-bold text-gray-600">
                  {item.time}
                </span>
              </div>
              <h3 className="text-2xl font-dancing font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/"
          className="px-8 py-3 bg-white text-rose-500 rounded-full font-bold shadow-md hover:bg-rose-50 transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/"
          className="px-8 py-3 bg-white text-rose-500 rounded-full font-bold shadow-md hover:bg-rose-50 transition-colors"
        >
          Go Back Home
        </Link>
      </motion.div>
    </main>
  );
}
