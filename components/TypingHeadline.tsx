"use client";
import { useEffect, useState, useRef } from "react";

export default function TypingHeadline() {
  const fullText = "Try to be a better programmer, not a more productive programmer.";
  const [typed, setTyped] = useState("");
  const hasStarted = useRef(false);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTyped(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  // Split warna: 3 kata pertama putih, sisanya gradient
  const words = typed.split(" ");
  const firstPart = words.slice(0, 3).join(" ");
  const secondPart = words.slice(3).join(" ");

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-[1.15] mb-6 tracking-tight min-h-auto sm:min-h-[120px] md:min-h-[160px] relative">
      <span className="text-white">{firstPart}{firstPart && " "}</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-200">
        {secondPart}
      </span>
      {/* Cursor tanpa Framer Motion = Zero Layout Shift */}
      <span className="typing-cursor" />
    </h1>
  );
}