"use client";
import { motion } from "framer-motion";

interface SkeletonProps {
  variant?: "text" | "title" | "card" | "circle" | "button" | "tag";
  className?: string;
  count?: number;
}

export default function Skeleton({ variant = "text", className = "", count = 1 }: SkeletonProps) {
  const baseClasses = "bg-white/5 relative overflow-hidden rounded-md";
  
  // Variant styles
  const variants = {
    text: "h-4 w-full",
    title: "h-6 w-2/3",
    card: "h-40 w-full rounded-xl",
    circle: "rounded-full",
    button: "h-10 w-32 rounded-lg",
    tag: "h-6 w-20 rounded-full",
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`${baseClasses} ${variants[variant]} ${className}`}
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)",
            backgroundSize: "200% 100%",
            animation: "skeleton-shimmer 1.5s ease-in-out infinite",
          }}
        />
      ))}
    </>
  );
}