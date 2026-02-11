"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SweetPack from "@/components/SweetPack";
import Proposal from "@/components/Proposal";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Home() {
  const [step, setStep] = useState<"pack" | "proposal">("pack");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 md:top-20 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-rose-300 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {step === "pack" ? (
          <motion.div
            key="pack"
            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <SweetPack onOpen={() => setStep("proposal")} />
          </motion.div>
        ) : (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Proposal />
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundMusic />
    </main>
  );
}
