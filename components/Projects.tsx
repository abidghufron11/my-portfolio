"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, GitBranch, ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI Task Automation Platform",
    description: "SaaS dashboard automating data processing using LLMs & custom workflows.",
    longDescription: "A comprehensive SaaS platform that leverages Large Language Models to automate repetitive tasks and data processing workflows. The system includes a visual workflow builder, real-time monitoring dashboard, and integration with popular tools like Slack, Notion, and Google Workspace.",
    tags: ["Next.js", "Python", "LangChain", "Supabase", "OpenAI API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ai-automation",
    date: "Jan 2024 - Mar 2024",
    
    // ✅ CASE STUDY FIELDS (TAMBAHAN BARU)
    challenge: "Client mengalami bottleneck dalam pemrosesan data manual yang memakan waktu 4-5 jam per hari dengan tingkat error 15%.",
    solution: "Membangun sistem otomatisasi berbasis AI dengan visual workflow builder, integrasi 10+ tools, dan real-time monitoring dashboard.",
    metrics: [
      { icon: <Clock size={16} />, label: "Time Saved", value: "85%", desc: "4.5 jam → 30 menit/hari" },
      { icon: <TrendingUp size={16} />, label: "Accuracy", value: "98%", desc: "Error rate turun drastis" },
      { icon: <Users size={16} />, label: "Users", value: "500+", desc: "Active users bulan pertama" }
    ],
    
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "AI-powered data extraction and classification",
      "Real-time task monitoring and analytics",
      "Integration with 10+ third-party services",
      "Automated reporting and notifications"
    ]
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "High-performance data visualization with WebSockets & role-based access.",
    longDescription: "An enterprise-grade analytics dashboard that processes and visualizes millions of data points in real-time. Built with scalability in mind, featuring WebSocket connections for live updates, role-based access control, and customizable widgets.",
    tags: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/analytics-dashboard",
    date: "Sep 2023 - Dec 2023",
    
    // ✅ CASE STUDY FIELDS
    challenge: "Perusahaan kesulitan memonitor KPI secara real-time karena data tersebar di 5 database berbeda dengan latency >30 detik.",
    solution: "Arsitektur event-driven dengan WebSocket untuk push notifications, Redis caching layer, dan role-based access control.",
    metrics: [
      { icon: <Clock size={16} />, label: "Latency", value: "<1s", desc: "Real-time updates" },
      { icon: <TrendingUp size={16} />, label: "Performance", value: "10x", desc: "Lebih cepat dari sistem lama" },
      { icon: <Users size={16} />, label: "Concurrency", value: "10k+", desc: "Simultaneous users" }
    ],
    
    features: [
      "Real-time data streaming with WebSockets",
      "Interactive charts and graphs using D3.js",
      "Role-based access control (RBAC)",
      "Customizable dashboard widgets",
      "Export reports in PDF/Excel format"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "Scalable backend handling 10k+ concurrent users with event-driven design.",
    longDescription: "A microservices-based e-commerce backend architecture designed to handle high traffic and ensure scalability. Implements event-driven architecture with message queues, distributed caching, and database sharding for optimal performance.",
    tags: ["Docker", "Kafka", "PostgreSQL", "Go", "Kubernetes"],
    liveUrl: undefined,
    githubUrl: "https://github.com/username/ecommerce-microservices",
    date: "Jun 2023 - Aug 2023",
    
    // ✅ CASE STUDY FIELDS
    challenge: "Monolithic architecture menyebabkan downtime saat flash sale dan sulit untuk scaling horizontal.",
    solution: "Refactor ke microservices dengan event-driven architecture, message queue (Kafka), dan container orchestration (Kubernetes).",
    metrics: [
      { icon: <Clock size={16} />, label: "Uptime", value: "99.9%", desc: "Zero downtime deployment" },
      { icon: <TrendingUp size={16} />, label: "Scalability", value: "10k+", desc: "Concurrent users" },
      { icon: <Users size={16} />, label: "Services", value: "8", desc: "Independent microservices" }
    ],
    
    features: [
      "Microservices architecture with 8 independent services",
      "Event-driven communication using Apache Kafka",
      "Horizontal scaling with Kubernetes",
      "Distributed caching with Redis",
      "CI/CD pipeline with automated testing"
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-gray-400">A selection of work that combines technical depth with product thinking.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10, borderColor: "#FF6B35" }}
              onClick={() => setSelectedProject(p)}
              data-cursor="open"
              className="group relative p-6 bg-dark-800/30 border border-white/10 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{p.description}</p>
                
                {/* Metrics Preview (Top 1) */}
                {p.metrics && p.metrics.length > 0 && (
                  <div className="mb-4 flex items-center gap-2 text-xs">
                    <span className="text-accent font-bold">{p.metrics[0].value}</span>
                    <span className="text-gray-500">{p.metrics[0].label}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="px-2 py-1 text-xs bg-dark-900 border border-white/10 rounded text-gray-300">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">+{p.tags.length - 3}</span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <motion.a whileHover={{ scale: 1.05 }} href="#" className="flex items-center gap-2 text-sm text-accent hover:text-orange-400 duration-300">
                    <ExternalLink size={16} /> Live
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.05 }} href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                    <GitBranch size={16} /> Code
                  </motion.a>
                </div>
              </div>
              
              <motion.div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-accent" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}