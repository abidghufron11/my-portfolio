"use client";
import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | null>(null);
  const [mounted, setMounted] = useState(false);

  // ✅ FIX 1: Pindahkan applyTheme ke useCallback agar stabil & aman diakses use case manapun
  const applyTheme = useCallback((t: 'dark' | 'light') => {
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', t);
      document.cookie = `theme=${t}; path=/; max-age=31536000`;
    } catch (e) {
      // Silent fail untuk privacy mode / strict storage policy
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      let initialTheme: 'dark' | 'light' = 'light';
      const stored = localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') {
        initialTheme = stored;
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        initialTheme = 'dark';
      }
      setTheme(initialTheme);
      applyTheme(initialTheme);
    } catch {
      setTheme('dark');
      applyTheme('dark');
    }
  }, [applyTheme]);

  // ✅ FIX 2: Toggle logic murni dari state React (tidak baca DOM saat klik)
  const toggleTheme = () => {
    if (!theme) return;
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  // ✅ FIX 3: Guard hydration mismatch
  if (!mounted) {
    return <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative p-2 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-white/5 transition-all cursor-pointer"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 transition-transform" />
      )}
    </button>
  );
}