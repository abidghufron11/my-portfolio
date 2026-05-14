"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Code2, Database } from "lucide-react";
import { fadeInUp, staggerContainer, buttonHover } from "@/lib/animations";
import TypingHeadline from "./TypingHeadline";
import { Download } from "lucide-react";

export default function Hero() {
  const icons = [
    { Icon: Cpu, delay: 5, pos: "left-[8%] top-[25%]" },
    { Icon: Code2, delay: 1.2, pos: "right-[12%] top-[35%]" },
    { Icon: Database, delay: 0.6, pos: "left-[15%] bottom-[30%]" },
    { Icon: Terminal, delay: 1.8, pos: "right-[8%] bottom-[20%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 rounded-full text-xs text-gray-400 bg-dark-800/60 backdrop-blur-sm">
          <Terminal size={14} className="text-accent" />
          Computer Science Student & Developer
        </motion.div>

        {/* ✅ TYPING HEADLINE BARU */}
        <TypingHeadline />

        <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          I design and develop high-performance web applications, automate workflows, and integrate AI solutions. Let's turn complex problems into elegant interfaces.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden px-7 py-3.5 bg-accent text-black font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            {/* Background sweep effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-accent z-0"
              variants={{ hover: { scaleX: 1 } }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
            
            <span className="relative z-10">View Projects</span>
            <motion.span
              className="relative z-10"
              variants={{ hover: { x: 4 } }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>

          <motion.a
            href="/resume-abid-ghufron.pdf"
            download="Abid_Ghufron_CV.pdf" // Nama file saat didownload
            variants={buttonHover}
            whileHover= {{ scale: 1.05, borderColor: "#FF6B35" }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 border border-white/20 rounded-lg hover:bg-white/5 flex items-center justify-center gap-2"
          >
            Download CV <Download size={18} />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: "#FF6B35" }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 border border-white/20 rounded-lg hover:bg-white/5"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {icons.map(({ Icon, delay, pos }, i) => (
        <motion.div
          key={i}
          className={`hidden sm:block absolute ${pos} p-4 bg-accent rounded-xl pointer-events-none shadow-lg shadow-accent/40`}
          animate={{ y: [5, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon size={28} className="text-black" />
        </motion.div>
      ))}
    </section>
  );
}