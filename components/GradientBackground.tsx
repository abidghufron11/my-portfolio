"use client";

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Blob 1 - Kiri Atas */}
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

      {/* Blob 2 - Kanan Bawah */}
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