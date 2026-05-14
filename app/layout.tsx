import type { Metadata, Viewport } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import GradientBackground from "@/components/GradientBackground";
import ScrollProgress from "@/components/ScrollProgress";

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: {
    default: "Abid Ghufron F. | Fullstack Developer & AI Enthusiast",
    template: "%s | Abid Ghufron F.",
},
  description: "Portfolio of Abid Ghufron F., a Computer Science student specializing in scalable web applications, AI automation, and modern frontend/backend architectures.",
  keywords: ["portfolio", "fullstack developer", "AI engineer", "Next.js", "React", "TypeScript", "web development", "computer science student", "Indonesia"],
  authors: [{ name: "Abid Ghufron F.", url: "https://abid.dev" }],
  creator: "Abid Ghufron F.",
  publisher: "Abid Ghufron F.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#FF6B35",
  metadataBase: new URL("https://abid.dev"), // ⚠️ Ganti nanti setelah deploy
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="id" className="dark">
      <body className={`${courier.variable} font-mono antialiased text-white relative`}>
        <ScrollProgress />
        <GradientBackground />
        
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}