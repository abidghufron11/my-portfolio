"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>(["Welcome to Abid's Terminal. Type 'help' for commands."]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Shortcut Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.code === "KeyK") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input saat terbuka
  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const executeCommand = (cmd: string) => {
    const newHistory = [...history, `> ${cmd}`];
    
    const lowerCmd = cmd.toLowerCase().trim();
    if (lowerCmd === "help") {
      newHistory.push("Available commands: help, clear, about, contact, github");
    } else if (lowerCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (lowerCmd === "about") {
      newHistory.push("Abid Ghufron F. | CS Student | Fullstack Dev");
    } else if (lowerCmd === "contact") {
      newHistory.push("Email: abidghufron11@gmail.com");
    } else if (lowerCmd === "github") {
      newHistory.push("github.com/abidghufron11");
    } else {
      newHistory.push(`Command not found: ${cmd}`);
    }

    setHistory(newHistory);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-2xl bg-dark-900 border border-green-500/30 rounded-lg shadow-2xl overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-dark-800 px-4 py-2 flex items-center gap-2 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-gray-400 text-xs">bash — 80x24</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-64 overflow-y-auto flex flex-col gap-1 text-green-400" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-blue-400">abid@portfolio:~$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") executeCommand(input);
              }}
              className="bg-transparent outline-none flex-1 text-green-400"
              autoFocus
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}