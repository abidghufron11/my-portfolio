"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 mt-12">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-gray-400">
          <Terminal size={18} className="text-accent" />
          <span className="text-sm">© 2026 Abid Ghufron F. All rights reserved.</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
        </div>
      </motion.div>
    </footer>
  );
}