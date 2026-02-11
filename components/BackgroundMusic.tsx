"use client";

import { Music, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useAudio } from "@/app/context/AudioContext";

export default function BackgroundMusic() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <motion.button
      className="fixed bottom-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-rose-500 hover:bg-white transition-colors"
      onClick={togglePlay}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? <Music size={24} /> : <VolumeX size={24} />}
    </motion.button>
  );
}
