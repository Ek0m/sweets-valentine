"use client";

import { motion } from "framer-motion";
import { Heart, Flower } from "lucide-react";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

export default function Proposal() {
  const router = useRouter();
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Initial position for the "No" button isn't needed as it flows naturally,
  // but we'll use absolute positioning when it starts moving.
  const [hasMoved, setHasMoved] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleNoHover = () => {
    // Calculate random position within viewport, keeping some padding
    const btnWidth = 150; // approximate width
    const btnHeight = 60; // approximate height
    const padding = 20;

    // Ensure we don't place button off-screen
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    const x = Math.max(padding, Math.random() * maxX);
    const y = Math.max(padding, Math.random() * maxY);

    setNoBtnPosition({ x, y });
    setHasMoved(true);
  };

  const handleYesClick = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        shapes: ["heart"] as any,
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        shapes: ["heart"] as any,
      });
    }, 250);

    setTimeout(() => {
      router.push("/itinerary");
    }, 2000);
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4 mb-6 text-rose-500">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Flower size={48} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Heart size={48} fill="#e11d48" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Flower size={48} />
        </motion.div>
      </div>

      {/* Mobile-friendly Typography */}
      <h1 className="text-3xl md:text-6xl font-dancing font-bold text-rose-600 mb-8 md:mb-12 drop-shadow-sm px-4">
        Will you be my Valentine?
      </h1>

      {/* Mobile-friendly Button Layout */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center relative w-full h-40 md:h-24">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-rose-500 text-white rounded-full text-xl md:text-2xl font-dancing shadow-lg hover:bg-rose-600 transition-colors z-10 w-full md:w-auto"
          onClick={handleYesClick}
        >
          Yes! 💖
        </motion.button>

        <motion.button
          className="px-8 py-3 bg-zinc-400 text-white rounded-full text-xl md:text-2xl font-dancing shadow-lg hover:bg-zinc-500 transition-colors z-50"
          style={{
            position: hasMoved ? "fixed" : "static",
            left: hasMoved ? noBtnPosition.x : "auto",
            top: hasMoved ? noBtnPosition.y : "auto",
          }}
          initial={false}
          onMouseEnter={!noClicked ? handleNoHover : undefined}
          onClick={() => setNoClicked(true)}
        >
          {noClicked ? "😛" : "No 😢"}
        </motion.button>
      </div>
    </motion.div>
  );
}
