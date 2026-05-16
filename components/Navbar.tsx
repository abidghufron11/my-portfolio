"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import GitHubProfileModal from "./GitHubProfileModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Projects", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-dark-900/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LEFT SIDE: Logo + Search (Grouped Together) */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent transition-colors">
              abid<span className="text-accent">.Ghufron</span>
            </Link>

            {/* Search Button - Right Next to Logo */}
            <button 
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { ctrlKey: true, key: "k" }))}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400 hover:text-white hover:border-accent/50 transition-colors"
            >
              <Search size={14} />
              <span className="font-mono">Ctrl+K</span>
            </button>
          </div>

          {/* RIGHT SIDE: Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowProfileModal(true)}
              className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-md text-sm hover:bg-accent hover:text-black transition-colors"
            >
              Resume
            </motion.button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-800 border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link} href={`#${link.toLowerCase()}`} onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-accent">
                    {link}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ✅ LETAKKAN MODAL DI LUAR <motion.nav>, SEBELUM TUTUP KOMPONEN */}
      <GitHubProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
    </>
  );
}