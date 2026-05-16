"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useState, useEffect } from "react";

type LocalProject = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  lastUpdated?: string;
  status?: "live" | "archived" | "deprecated";
  features: string[];
  challenge?: string;
  solution?: string;
  metrics?: { icon: string; label: string; value: string; desc: string }[];
};

const projects: LocalProject[] = [
  {
    id: 1,
    title: "AI Task Automation Platform",
    description: "SaaS dashboard automating data processing using LLMs & custom workflows.",
    longDescription:
      "A comprehensive SaaS platform that leverages Large Language Models to automate repetitive tasks and data processing workflows. The system includes a visual workflow builder, real-time monitoring dashboard, and integration with popular tools like Slack, Notion, and Google Workspace.",
    tags: ["Next.js", "Python", "LangChain", "Supabase", "OpenAI API"],
    liveUrl: "https://ai-automation-platform.vercel.app",
    githubUrl: "https://github.com/abidghufron11/ai-automation-platform",
    date: "Jan 2024 - Mar 2024",
    lastUpdated: "May 2024",
    status: "live",
    features: ["Visual workflow builder", "AI-powered extraction", "Real-time monitoring", "Slack integration", "Multi-user collaboration"],
    challenge: "Manual data processing was consuming 40+ hours per week per team member, causing bottlenecks and errors.",
    solution: "Built an intelligent workflow automation system using LangChain + GPT-4, with a drag-and-drop builder interface and real-time execution monitoring.",
    metrics: [
      { icon: "⏱️", label: "Time Saved", value: "↓ 87%", desc: "from 40h to 5h/week" },
      { icon: "✅", label: "Accuracy", value: "↑ 99.2%", desc: "up from 85% manual" },
    ],
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description: "High-performance data visualization with WebSockets & role-based access.",
    longDescription: "An enterprise-grade analytics dashboard that processes and visualizes millions of data points in real-time. Features WebSocket-based live updates, interactive D3.js visualizations, and granular RBAC.",
    tags: ["React", "D3.js", "Node.js", "Redis", "PostgreSQL"],
    liveUrl: "https://analytics-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/abidghufron11/analytics-dashboard",
    date: "Sep 2023 - Dec 2023",
    lastUpdated: "Apr 2024",
    status: "live",
    features: ["Real-time streaming", "Interactive D3.js charts", "Role-based access control", "Custom dashboards", "Data export"],
    challenge: "Legacy dashboard couldn't handle >1000 concurrent users and had 5-10s latency, causing delayed decision-making.",
    solution: "Redesigned with WebSocket architecture, Redis caching, and optimized D3.js rendering using virtual scrolling and memoization.",
    metrics: [
      { icon: "📊", label: "Throughput", value: "↑ 10k", desc: "concurrent users" },
      { icon: "⚡", label: "Latency", value: "↓ 92ms", desc: "from 8-10s" },
    ],
  },
  {
    id: 3,
    title: "E-Commerce Microservices",
    description: "Scalable backend handling 10k+ concurrent users with event-driven design.",
    longDescription: "A microservices-based e-commerce backend architecture designed for high traffic and independent service scaling. Implements event sourcing, CQRS, and distributed tracing.",
    tags: ["Docker", "Kafka", "PostgreSQL", "Go", "Kubernetes"],
    liveUrl: undefined,
    githubUrl: "https://github.com/abidghufron11/ecommerce-microservices",
    date: "Jun 2023 - Aug 2023",
    lastUpdated: "Mar 2024",
    status: "archived",
    features: ["Microservices architecture", "Event-driven with Kafka", "Kubernetes scaling", "Distributed tracing", "Circuit breakers"],
    challenge: "Monolithic backend couldn't scale independently, causing one service failure to crash the entire platform.",
    solution: "Migrated to microservices with Kafka event streaming, implemented circuit breakers, and deployed to Kubernetes for auto-scaling.",
    metrics: [
      { icon: "📈", label: "Scalability", value: "↑ 8x", desc: "independent service scaling" },
      { icon: "💰", label: "Cost", value: "↓ 45%", desc: "via efficient resource allocation" },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<LocalProject | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial={isMobile ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
          <p className="text-gray-100">A selection of work that combines technical depth with product thinking.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial={isMobile ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
            key={p.id}
            variants={fadeInUp}
            whileHover={!isMobile ? { y: -10, borderColor: "#FF6B35" } : {}}
            onClick={() => setSelectedProject(p)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedProject(p);
              }
            }}
            tabIndex={0}
            role="button"
            // ✅ GLASSMORPHISM: Tambah backdrop-blur & shadow
            className="group relative p-6 bg-dark-800/60 border border-white/10 rounded-xl backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/30 overflow-hidden cursor-pointer focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t) => (
                  // ✅ GLASSMORPHISM: Tambah backdrop-blur pada tags
                  <span 
                    key={t} 
                    className="px-2 py-1 text-xs bg-dark-900/60 border border-white/10 rounded text-gray-300 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                {p.liveUrl ? (
                  <motion.a
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:text-orange-400 duration-300"
                  >
                    <ExternalLink size={16} /> Live
                  </motion.a>
                ) : (
                  <span className="text-sm text-gray-500">No Live</span>
                )}

                {p.githubUrl ? (
                  <motion.a
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                  >
                    <GitBranch size={16} /> Code
                  </motion.a>
                ) : null}

                <div className="ml-auto text-xs flex items-center gap-2">
                  {/* ✅ GLASSMORPHISM: Tambah backdrop-blur pada status badge */}
                  <span
                    className={`px-2 py-1 rounded-full text-[11px] backdrop-blur-sm ${
                      p.status === "live"
                        ? "bg-green-500/10 text-green-300 border border-green-500/20"
                        : p.status === "archived"
                        ? "bg-yellow-500/10 text-yellow-300 border border-yellow-500/20"
                        : "bg-gray-700/10 text-gray-300 border border-gray-500/20"
                    }`}
                  >
                    {(p.status ?? "archived").toUpperCase()}
                  </span>
                  <span className="text-gray-400">Last: {p.lastUpdated}</span>
                </div>
              </div>
            </div>

            <motion.div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 flex flex-col items-end gap-2">
              <ArrowUpRight className="text-accent" size={20} />
              {p.metrics && p.metrics[0] && (
                // ✅ GLASSMORPHISM: Tambah backdrop-blur pada metrics badge
                <span className="mt-1 px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium backdrop-blur-sm border border-accent/30">
                  {p.metrics[0].label}: {p.metrics[0].value}
                </span>
              )}
            </motion.div>
          </motion.div>
          ))}
        </motion.div>
      </section>

      {selectedProject && (
        // cast to any to avoid cross-file interface mismatch; shape is compatible
        <ProjectModal project={selectedProject as any} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
