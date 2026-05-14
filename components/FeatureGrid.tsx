"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Web Development", desc: "React, Next.js, Tailwind, TypeScript", icon: "💻" },
  { title: "Backend & API", desc: "Node.js, Express, PostgreSQL, REST/GraphQL", icon: "🔧" },
  { title: "AI & Automation", desc: "Python, LangChain, RAG, Fine-tuning", icon: "🤖" },
  { title: "DevOps & Cloud", desc: "Docker, AWS, CI/CD, Linux", icon: "☁️" },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Technical <span className="text-accent">Expertise</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, borderColor: "#FF6B35", boxShadow: "0 10px 30px rgba(255,107,53,0.15)" }}
            className="p-6 bg-dark-800/50 border border-white/10 rounded-xl cursor-pointer group"
          >
            <div className="text-3xl mb-3">{feat.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{feat.title}</h3>
            <p className="text-gray-400 text-sm">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}