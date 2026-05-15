"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ArrowRight, Layout, Code2, Mail, GitBranch, Terminal, 
  Globe, CircleDot, ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";

type Command = {
  id: string;
  label: string;
  icon: React.ReactNode;
  category: string;
  shortcut?: string;
  action: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closePalette = () => {
    setIsOpen(false);
    setSearch("");
    setSelectedIndex(0);
  };

  const scrollToSelected = (index: number) => {
    const container = listRef.current;
    const item = container?.children[index] as HTMLElement;
    if (item && container) {
      const containerRect = container.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      if (itemRect.bottom > containerRect.bottom) {
        container.scrollTop += itemRect.bottom - containerRect.bottom;
      } else if (itemRect.top < containerRect.top) {
        container.scrollTop -= containerRect.top - itemRect.top;
      }
    }
  };

  // 1. DEFINE STATIC COMMANDS (Navigasi Internal)
  const staticCommands: Command[] = useMemo(() => [
    {
      id: "nav-home", label: "Go to Home", icon: <Layout size={18} />, category: "Navigation",
      action: () => { router.push("/"); closePalette(); }
    },
    {
      id: "nav-about", label: "Go to About", icon: <Layout size={18} />, category: "Navigation",
      action: () => { router.push("/#about"); closePalette(); }
    },
    {
      id: "nav-projects", label: "Go to Projects", icon: <Code2 size={18} />, category: "Navigation",
      action: () => { router.push("/#projects"); closePalette(); }
    },
    {
      id: "nav-contact", label: "Go to Contact", icon: <Mail size={18} />, category: "Navigation",
      action: () => { router.push("/#contact"); closePalette(); }
    },
    {
      id: "action-terminal", label: "Open Terminal", icon: <Terminal size={18} />, category: "Actions", shortcut: "Ctrl+Shift+K",
      action: () => { window.dispatchEvent(new KeyboardEvent("keydown", { ctrlKey: true, shiftKey: true, code: "KeyK" })); closePalette(); }
    },
    {
      id: "action-github", label: "Visit GitHub Profile", icon: <GitBranch size={18} />, category: "Actions",
      action: () => { window.open("https://github.com/abidghufron11", "_blank"); closePalette(); }
    },
    {
      id: "action-copy-email", label: "Copy Email Address", icon: <Mail size={18} />, category: "Actions",
      action: () => { navigator.clipboard.writeText("abidghufron11@gmail.com"); closePalette(); }
    }
  ], [router]);

  // 2. DEFINE DYNAMIC EXTERNAL COMMANDS (Google, Github, StackOverflow)
  const externalCommands: Command[] = useMemo(() => {
    if (!search) return [];
    const query = encodeURIComponent(search);
    return [
      {
        id: "ext-google",
        label: `Search Google: "${search}"`,
        icon: <Globe size={18} />,
        category: "External Search",
        action: () => { window.open(`https://www.google.com/search?q=${query}`, "_blank"); closePalette(); }
      },
      {
        id: "ext-github",
        label: `Search GitHub: "${search}"`,
        icon: <GitBranch size={18} />,
        category: "External Search",
        action: () => { window.open(`https://github.com/search?q=${query}&type=repositories`, "_blank"); closePalette(); }
      },
      {
        id: "ext-sof",
        label: `Search Stack Overflow: "${search}"`,
        icon: <CircleDot size={18} />,
        category: "External Search",
        action: () => { window.open(`https://stackoverflow.com/search?q=${query}`, "_blank"); closePalette(); }
      }
    ];
  }, [search]);

  // 3. COMBINE & FILTER
  const filteredCommands = useMemo(() => {
    // Filter static commands
    const filteredStatic = staticCommands.filter(cmd => 
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.category.toLowerCase().includes(search.toLowerCase())
    );

    // Gabungkan: Static (yang difilter) + External (jika ada ketikan)
    return [...filteredStatic, ...externalCommands];
  }, [search, staticCommands, externalCommands]);

  // Global Shortcut Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        closePalette();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  useEffect(() => setSelectedIndex(0), [search]);
  useEffect(() => { if (isOpen) scrollToSelected(selectedIndex); }, [selectedIndex, isOpen]);
  useEffect(() => { if (isOpen && inputRef.current) inputRef.current.focus(); }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]"
        onClick={closePalette}
      >
        <motion.div
          initial={{ scale: 0.95, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-lg bg-dark-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <Search size={18} className="text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search external..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500 text-sm"
            />
            <kbd className="px-2 py-1 bg-white/10 rounded text-xs text-gray-400 font-mono">ESC</kbd>
          </div>

          {/* Command List */}
          <div ref={listRef} className="max-h-[320px] overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">No commands found</div>
            ) : (
              filteredCommands.map((cmd, index) => {
                const isExternal = cmd.category === "External Search";
                return (
                  <button
                    key={cmd.id}
                    onClick={() => cmd.action()}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-colors ${
                      index === selectedIndex ? "bg-accent/20 text-white" : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={isExternal ? "text-blue-400" : (index === selectedIndex ? "text-accent" : "text-gray-400")}>
                        {cmd.icon}
                      </span>
                      <span className="text-sm font-medium">{cmd.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">{cmd.category}</span>
                      {cmd.shortcut && (
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-gray-400 font-mono">
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Hint */}
          <div className="px-4 py-2 border-t border-white/10 bg-dark-900/50 flex justify-between items-center text-xs text-gray-500">
            <span>↑↓ to navigate</span>
            <span>Enter to select</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}