"use client";
import { motion } from "framer-motion";

// SVG Logo Components
const NextJSLogo = () => (
  <svg viewBox="0 0 180 180" className="w-6 h-6" fill="none">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black"/>
    </mask>
    <g mask="url(#mask0)">
      <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6"/>
      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
    </g>
    <defs>
      <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="10" ry="4"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M3 3h18v18H3V3zm13.5 11.5c0-.8-.4-1.3-1.3-1.7l-.8-.3c-.6-.2-.8-.5-.8-.9 0-.5.4-.9 1.1-.9.6 0 1 .3 1.2.8l1.3-.7c-.3-.8-1.1-1.3-2.5-1.3-1.5 0-2.5.9-2.5 2.1 0 1 .7 1.6 1.6 1.9l.8.3c.5.2.7.5.7.9 0 .5-.5.9-1.2.9-.8 0-1.3-.4-1.6-1l-1.3.7c.4 1 1.4 1.6 2.9 1.6 1.7 0 2.8-.9 2.8-2.3h-.4zM7 14.5h1.5v-1H7V11h-1v5h1v-1.5z"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const FramerMotionLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h6v16H4zM14 4h6v16h-6z"/>
    <path d="M10 4l4 8-4 8"/>
  </svg>
);

const ThreeJSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="black">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const NodeJSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19.5 8 12 11.5 4.5 8 12 4.5zM4 9.5l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2c-1.5 0-2.5.5-2.5 1.5V5h3v.5c0 1.5-1 2.5-2.5 2.5H7v3h3c1.5 0 2.5 1 2.5 2.5v3h3v-1.5c0-1.5-1-2.5-2.5-2.5h-3v-3h3c1.5 0 2.5-1 2.5-2.5V3.5C14.5 2 13.5 2 12 2z"/>
    <path d="M12 22c1.5 0 2.5-.5 2.5-1.5V19h-3v-.5c0-1.5 1-2.5 2.5-2.5h3v-3h-3c-1.5 0-2.5-1-2.5-2.5v-3h-3v1.5c0 1.5 1 2.5 2.5 2.5h3v3h-3c-1.5 0-2.5 1-2.5 2.5v1.5c0 1.5 1 1.5 2.5 1.5z"/>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M13 10h3.5v3H13zM9 10h3v3H9zM5 10h3v3H5zM1 10h3v3H1zM17 10h3v3h-3zM5 6h3v3H5zM9 6h3v3H9zM13 6h3.5v3H13zM17 6h3v3h-3zM1 14h19v3H1z"/>
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M6.763 16.036c0 .356.04.641.114.848.076.207.176.369.307.483.132.114.284.172.46.172.27 0 .505-.135.707-.405.202-.27.379-.606.53-1.009l1.33 4.866h2.369l3.924-12.459h-2.414l-2.83 9.343-2.089-9.343H6.763v1.504zm10.02 2.533c0 .694.186 1.215.558 1.563.372.348.913.522 1.622.522.29 0 .606-.038.947-.114.342-.076.653-.174.935-.293v-1.761c-.27.114-.556.207-.86.281-.304.074-.586.11-.844.11-.413 0-.72-.074-.922-.221-.202-.147-.303-.364-.303-.65 0-.195.045-.364.134-.506.09-.142.213-.265.371-.367.158-.102.338-.192.54-.27.202-.077.417-.147.644-.209.33-.094.628-.193.895-.297.267-.104.497-.233.69-.387.193-.154.343-.343.45-.566.107-.223.16-.493.16-.81 0-.654-.194-1.145-.582-1.472-.388-.327-.925-.49-1.61-.49-.342 0-.695.038-1.059.114-.364.076-.701.177-1.012.303v1.625c.33-.114.658-.207.985-.281.327-.074.638-.11.935-.11.354 0 .631.065.832.195.201.13.302.325.302.585 0 .18-.047.337-.14.473-.094.136-.223.254-.388.354-.165.1-.355.19-.57.27-.215.08-.447.155-.695.225-.33.094-.628.193-.895.297-.267.104-.497.233-.69.387-.193.154-.343.343-.45.566-.107.223-.16.493-.16.81z"/>
  </svg>
);

const VercelLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 2L2 19h20L12 2zm0 3.5L18.5 17H5.5L12 5.5z"/>
  </svg>
);

const techStack = [
  { name: "Next.js", icon: <NextJSLogo />, color: "#000000" },
  { name: "React", icon: <ReactLogo />, color: "#61DAFB" },
  { name: "TypeScript", icon: <TypeScriptLogo />, color: "#3178C6" },
  { name: "Tailwind CSS", icon: <TailwindLogo />, color: "#06B6D4" },
  { name: "Framer Motion", icon: <FramerMotionLogo />, color: "#FF6B35" },
  { name: "Three.js", icon: <ThreeJSLogo />, color: "#000000" },
  { name: "PostgreSQL", icon: <PostgreSQLLogo />, color: "#336791" },
  { name: "Node.js", icon: <NodeJSLogo />, color: "#339933" },
  { name: "Python", icon: <PythonLogo />, color: "#3776AB" },
  { name: "Docker", icon: <DockerLogo />, color: "#2496ED" },
  { name: "AWS", icon: <AWSLogo />, color: "#FF9900" },
  { name: "Vercel", icon: <VercelLogo />, color: "#000000" },
];

export default function LogoLoop() {
  return (
    <section className="py-16 px-6 overflow-hidden bg-dark-900/30 border-white/5">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Built With <span className="text-accent">Modern Tech</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Technologies & tools used to build this portfolio
        </p>
      </div>

      {/* Logo Loop Container */}
      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10" />

        {/* Animated Loop */}
        <div className="flex gap-8 animate-loop">
          {/* Duplicate array for seamless loop */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-dark-800/50 border border-white/10 rounded-xl backdrop-blur-sm hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
              style={{ color: tech.color }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-loop {
          display: flex;
          animation: loop 30s linear infinite;
          width: fit-content;
        }
        .animate-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}