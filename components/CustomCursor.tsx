"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorHint = { text: string; color: string } | null;

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hint, setHint] = useState<CursorHint>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Deteksi mobile di awal
    const checkMobile = () => {
      const isTouchDevice = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isTouchDevice);
    };

    checkMobile();

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Jangan jalankan di mobile

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a[href]')) {
        setHint({ text: 'Visit', color: '#22c55e' });
        setIsHovering(true);
      } else if (target.closest('button')) {
        setHint({ text: 'Click', color: '#FF6B35' });
        setIsHovering(true);
      } else if (target.closest('input, textarea')) {
        setHint({ text: 'Fill', color: '#ef4444' });
        setIsHovering(true);
      } else {
        setHint(null);
        setIsHovering(false);
      }
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isMobile]);

  // Jangan render apapun di mobile
  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ left: mousePosition.x - 6, top: mousePosition.y - 6 }}
        animate={{ scale: isHovering ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-[9998]"
            style={{ left: mousePosition.x + 20, top: mousePosition.y + 20 }}
          >
            <span
              className="text-xs font-bold px-2 py-1 rounded bg-dark-900/90 border border-white/10 whitespace-nowrap"
              style={{ color: hint.color }}
            >
              {hint.text}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="fixed w-10 h-10 border border-accent/50 rounded-full pointer-events-none z-[9997]"
        style={{ left: mousePosition.x - 20, top: mousePosition.y - 20 }}
        animate={{ scale: isHovering ? 1.2 : 1, opacity: isHovering ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}