// components/TechStack.tsx
"use client";

import LogoLoop from "./LogoLoop";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiPostgresql,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiVercel,
} from "react-icons/si";

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
    <path d="M6.763 16.036c0 .356.04.641.114.848.076.207.176.369.307.483.132.114.284.172.46.172.27 0 .505-.135.707-.405.202-.27.379-.606.53-1.009l1.33 4.866h2.369l3.924-12.459h-2.414l-2.83 9.343-2.089-9.343H6.763v1.504zm10.02 2.533c0 .694.186 1.215.558 1.563.372.348.913.522 1.622.522.29 0 .606-.038.947-.114.342-.076.653-.174.935-.293v-1.761c-.27.114-.556.207-.86.281-.304.074-.586.11-.844.11-.413 0-.72-.074-.922-.221-.202-.147-.303-.364-.303-.65 0-.195.045-.364.134-.506.09-.142.213-.265.371-.367.158-.102.338-.192.54-.27.202-.077.417-.147.644-.209.33-.094.628-.193.895-.297.267-.104.497-.233.69-.387.193-.154.343-.343.45-.566.107-.223.16-.493.16-.81 0-.654-.194-1.145-.582-1.472-.388-.327-.925-.49-1.61-.49-.342 0-.695.038-1.059.114-.364.076-.701.177-1.012.303v1.625c.33-.114.658-.207.985-.281.327-.074.638-.11.935-.11.354 0 .631.065.832.195.201.13.302.325.302.585 0 .18-.047.337-.14.473-.094.136-.223.254-.388.354-.165.1-.355.19-.57.27-.215.08-.447.155-.695.225-.33.094-.628.193-.895.297-.267.104-.497.233-.69.387-.193.154-.343.343-.45.566-.107.223-.16.493-.16.81z"/>
  </svg>
);

const techLogos = [
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact className="text-[#61DAFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#06B6D4]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFramer className="text-[#FF6B35]" />, title: "Framer Motion", href: "https://www.framer.com" },
  { node: <SiThreedotjs className="text-black dark:text-white" />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiPostgresql className="text-[#336791]" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiNodedotjs className="text-[#339933]" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython className="text-[#3776AB]" />, title: "Python", href: "https://www.python.org" },
  { node: <SiDocker className="text-[#2496ED]" />, title: "Docker", href: "https://www.docker.com" },
  { node: <AWSIcon />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiVercel className="text-black dark:text-white" />, title: "Vercel", href: "https://vercel.com" },
];

export default function TechStack() {
  return (
    <section className="py-12 px-6 border-white/5">
      <div className="max-w-6xl mx-auto mb-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-1">
          Built With <span className="text-accent">Modern Tech</span>
        </h2>
        <p className="text-gray-400 text-sm">
          Technologies & tools used to build this portfolio
        </p>
      </div>

      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={42}
        gap={45}
        hoverSpeed={10}
        scaleOnHover
        fadeOut={false}
        ariaLabel="Technology stack used in this portfolio"
        className="max-w-5xl mx-auto"
      />
    </section>
  );
}