"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface SweetPackProps {
  onOpen: () => void;
}

export default function SweetPack({ onOpen }: SweetPackProps) {
  return (
    <motion.div
      className="relative cursor-pointer flex flex-col items-center justify-center p-4 md:p-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onOpen}
    >
      {/* Animated Envelope / Gift Box Representation */}
      <motion.div
        className="relative text-rose-500"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-40 h-28 md:w-48 md:h-32 bg-rose-200 rounded-lg shadow-xl relative flex items-center justify-center border-4 border-rose-300">
          <div className="absolute -top-10 md:-top-12">
            <Heart
              size={56} // slightly smaller on mobile (default was 64, making 56 mobile base)
              className="text-rose-600 drop-shadow-md md:w-16 md:h-16"
            />
          </div>
          <p className="font-dancing text-xl md:text-2xl text-rose-800 mt-4">
            For You
          </p>
        </div>
      </motion.div>

      <motion.p
        className="mt-8 text-xl text-rose-700 font-dancing"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Click to open 💌
      </motion.p>
    </motion.div>
  );
}
