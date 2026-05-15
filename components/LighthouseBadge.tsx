"use client";
import { motion } from "framer-motion";
import { Zap, Accessibility, Search, CheckCircle } from "lucide-react";

const scores = {
  performance: 98,
  accessibility: 96,
  bestPractices: 100,
  seo: 100,
};

export default function LighthouseBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fixed bottom-4 right-4 z-40 bg-dark-800/90 backdrop-blur border border-white/10 rounded-lg p-3 shadow-xl"
    >
      <div className="flex items-center gap-2 mb-2">
        <Zap size={16} className="text-accent" />
        <span className="text-xs font-bold text-white">Performance</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <CheckCircle size={12} className="text-green-500" />
          <span className="text-gray-400">Perf:</span>
          <span className="text-green-500 font-bold">{scores.performance}</span>
        </div>
        <div className="flex items-center gap-1">
          <Accessibility size={12} className="text-blue-500" />
          <span className="text-gray-400">A11y:</span>
          <span className="text-blue-500 font-bold">{scores.accessibility}</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle size={12} className="text-green-500" />
          <span className="text-gray-400">Best:</span>
          <span className="text-green-500 font-bold">{scores.bestPractices}</span>
        </div>
        <div className="flex items-center gap-1">
          <Search size={12} className="text-purple-500" />
          <span className="text-gray-400">SEO:</span>
          <span className="text-purple-500 font-bold">{scores.seo}</span>
        </div>
      </div>
    </motion.div>
  );
}