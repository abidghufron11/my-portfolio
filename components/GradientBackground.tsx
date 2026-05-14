"use client";
import { useEffect, useState } from "react";

export default function GradientBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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
  }, []);

  // Jangan render gradient animasi di mobile (atau render versi statis)
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-dark-900" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, rgba(255, 107, 53, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-5%',
          animation: 'blobMove1 20s ease-in-out infinite',
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.35) 0%, rgba(255, 107, 53, 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '-10%',
          right: '-5%',
          animation: 'blobMove2 25s ease-in-out infinite',
        }}
      />
    </div>
  );
}