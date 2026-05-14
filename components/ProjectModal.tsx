"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, GitBranch, Calendar, Tag } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-dark-800 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overscroll-contain p-4 sm:p-6"
        >
          {/* Header */}
          <div className="sticky top-0 bg-dark-800 border-b border-white/10 p-6 flex items-center justify-between z-10">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{project.date}</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2 text-gray-300"
                  >
                    <span className="text-accent mt-1">▹</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-dark-900 border border-white/10 rounded-full text-sm text-gray-300 flex items-center gap-1"
                  >
                    <Tag size={12} className="text-accent" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-accent text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 border border-white/20 rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                >
                  <GitBranch size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}