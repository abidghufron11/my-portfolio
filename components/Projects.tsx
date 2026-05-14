"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "AI Task Automation Platform",
    description: "SaaS dashboard automating data processing using LLMs & custom workflows.",
    longDescription: "A comprehensive SaaS platform that leverages Large Language Models to automate repetitive tasks and data processing workflows.",
    tags: ["Next.js", "Python", "LangChain", "Supabase", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ai-automation",
    date: "Jan 2024 - Mar 2024",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "AI-powered data extraction and classification",
      "Real-time task monitoring and analytics",
    ]
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "High-performance data visualization with WebSockets & role-based access.",
    longDescription: "An enterprise-grade analytics dashboard that processes and visualizes millions of data points in real-time.",
    tags: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/analytics-dashboard",
    date: "Sep 2023 - Dec 2023",
    features: [
      "Real-time data streaming with WebSockets",
      "Interactive charts and graphs using D3.js",
      "Role-based access control (RBAC)",
    ]
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "Scalable backend handling 10k+ concurrent users with event-driven design.",
    longDescription: "A microservices-based e-commerce backend architecture designed to handle high traffic and ensure scalability.",
    tags: ["Docker", "Kafka", "PostgreSQL", "Go", "Kubernetes"],
    liveUrl: undefined,
    githubUrl: "https://github.com/username/ecommerce-microservices",
    date: "Jun 2023 - Aug 2023",
    features: [
      "Microservices architecture with 8 independent services",
      "Event-driven communication using Apache Kafka",
      "Horizontal scaling with Kubernetes",
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-gray-400">A selection of work that combines technical depth with product thinking.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeInUp}
              whileHover={{ y: -8, borderColor: "#FF6B35" }}
              onClick={() => setSelectedProject(p)}
              className="group relative p-6 bg-dark-800/30 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-dark-900 border border-white/10 rounded text-gray-300">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">+{p.tags.length - 3}</span>
                  )}
                </div>
                <div className="flex gap-4">
                  <span className="flex items-center gap-2 text-sm text-accent">
                    View Details <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}