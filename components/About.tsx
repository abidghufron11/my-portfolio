"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Code, Server, Brain, Cloud } from "lucide-react";

const skills = [
  { name: "Frontend", icon: <Code />, items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
  { name: "Backend", icon: <Server />, items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST/GraphQL"] },
  { name: "AI & Data", icon: <Brain />, items: ["Python", "LangChain", "RAG", "Pandas", "TensorFlow"] },
  { name: "DevOps", icon: <Cloud />, items: ["Docker", "AWS", "CI/CD", "Linux", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm Abid Ghufron F., a 23-year-old Computer Science student passionate about bridging the gap between complex algorithms and user-centric design. I thrive on building scalable systems and exploring the frontiers of AI.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ y: -6, borderColor: "#FF6B35", boxShadow: "0 10px 30px rgba(255,107,53,0.12)" }}
            className="p-6 bg-dark-800/30 border border-white/10 rounded-xl transition-all duration-300"
          >
            <div className="text-accent mb-4">{skill.icon}</div>
            <h3 className="text-lg font-bold mb-3">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-gray-300">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}