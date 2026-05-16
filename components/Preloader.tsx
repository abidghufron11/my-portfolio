"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);

      // Progress Bar 0% -> 100%
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2.5;
        });
      }, 100);

      // Durasi minimal 2 detik
      const startTime = Date.now();
      const minDuration = 2000;

      const finishLoading = () => {
        const timeElapsed = Date.now() - startTime;
        const timeRemaining = Math.max(0, minDuration - timeElapsed);
        
        setTimeout(() => {
          setIsLoading(false);
        }, timeRemaining);
      };

      if (document.readyState === "complete") {
        finishLoading();
      } else {
        window.addEventListener("load", finishLoading);
        return () => window.removeEventListener("load", finishLoading);
      }

      return () => clearInterval(interval);
    }
  }, []);

  const prefersReducedMotion = hasWindow && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
            className="fixed inset-0 z-[10000] bg-dark-900 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* 🌌 ORBITAL TECH LOGO AREA */}
            <div className="relative flex items-center justify-center mb-8">
              
              {/* Cincin Orbit Luar (Berputar Kiri) */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute w-32 h-32 md:w-36 md:h-36 border border-dashed border-accent/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Cincin Orbit Dalam (Berputar Kanan) */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute w-24 h-24 md:w-28 md:h-28 border border-accent/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Logo Favicon dengan Efek Breathing + Glow */}
              <motion.img
                src="/favicon.ico"
                alt="Logo"
                className="w-18 h-18 md:w-20 md:h-20 relative z-10 object-contain"
                animate={!prefersReducedMotion ? {
                  scale: [1, 1.08, 1],
                  opacity: [0.85, 1, 0.85],
                  filter: [
                    "drop-shadow(0 0 6px rgba(255, 107, 53, 0.4))",
                    "drop-shadow(0 0 14px rgba(255, 107, 53, 0.8))",
                    "drop-shadow(0 0 6px rgba(255, 107, 53, 0.4))"
                  ]
                } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <p className="text-gray-300 text-sm font-mono mb-8 relative z-10 tracking-wider">SYSTEM INITIALIZING</p>

            {/* Progress Bar */}
            <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 relative z-10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-orange-400 shadow-[0_0_10px_#FF6B35]"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              className="text-gray-500 text-xs font-mono relative z-10 tabular-nums"
              animate={!prefersReducedMotion ? { opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress < 100 ? `Loading modules... ${Math.round(progress)}%` : "Access Granted"}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}