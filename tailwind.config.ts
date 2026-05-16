import type { Config } from "tailwindcss";

const config: Config = {
  // ✅ TAMBAHKAN BARIS INI:
  darkMode: 'class',
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier Prime"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        dark: {
          900: '#050505',
          800: '#0d0d0d',
          700: '#141414',
        },
        accent: {
          DEFAULT: '#FF6B35',
          hover: '#E85A2A',
          glow: 'rgba(255,107,53,0.4)',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;