"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Terminal } from "lucide-react";
import VisitorCount from "./VisitorCount";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 mt-12 bg-dark-900/30 backdrop-blur-md backdrop-saturate-150">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400">
          <Terminal size={18} className="text-accent" />
          <span className="text-sm">© 2026 Abid Ghufron F.</span>
          <a href="https://github.com/abidghufron11/my-portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden className="inline-block">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1 .09-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-. 135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91  1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z" />
            </svg>
            Source
          </a>
          <span className="text-gray-400">|</span>
          <VisitorCount />
        </div>
        <div className="flex gap-6 text-sm text-gray-500 items-center">
          <a href="#" className="hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="hover:text-accent transition-colors">Terms</a>
          <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
          <img
            src="https://img.shields.io/github/stars/abidghufron11/my-portfolio?style=flat&label=stars&logo=github"
            alt="GitHub stars"
            className="h-5"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>
      </motion.div>
    </footer>
  );
}