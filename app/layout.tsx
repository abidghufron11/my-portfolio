import type { Metadata, Viewport } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import CustomCursor from "@/components/CustomCursor";
import PixelBlast from "@/components/PixelBlast";
import ScrollProgress from "@/components/ScrollProgress";
import TerminalOverlay from "@/components/TerminalOverlay";
import CommandPalette from "@/components/CommandPalette";
import LighthouseBadge from "@/components/LighthouseBadge";
import Preloader from "@/components/Preloader";
import { Analytics } from "@vercel/analytics/next"

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
  authors: [{ name: "Abid Ghufron F.", url: "https://abidghufron.my.id" }],
  creator: "Abid Ghufron F.",
  publisher: "Abid Ghufron F.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#FF6B35",
  metadataBase: new URL("https://abidghufron.my.id"), // ⚠️ Ganti nanti setelah deploy
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Theme is initialized on the client before hydration using the script below.
  // Avoid setting a server-side class on <html> to prevent hydration mismatches.
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${courier.variable} font-mono antialiased bg-[var(--bg)] text-[var(--text)]`}>
        <Preloader>
          <ScrollProgress />
          </Preloader>
          
          {/* ✅ GANTI GradientBackground DENGAN PixelBlast */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <PixelBlast
              variant="square"
              pixelSize={4}
              color="#FF6B35"  // ✅ Warna accent Anda
              patternScale={2}
              patternDensity={0.5}
              pixelSizeJitter={0}
              enableRipples={true}
              rippleSpeed={0.4}
              rippleThickness={0.12}
              rippleIntensityScale={1.5}
              liquid={false}
              liquidStrength={0.12}
              liquidRadius={1.2}
              liquidWobbleSpeed={5}
              speed={1}
              edgeFade={0.25}
              transparent={true}
            />
          </div>

          <CustomCursor />
          <CommandPalette />
          <LighthouseBadge />
          <Script id="theme-init" strategy="beforeInteractive">
            {`(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.classList.add(t)}}catch(e){}})();`}
          </Script>
          {children}
          <TerminalOverlay />
        
        <Analytics />
      </body>
    </html>
  );
}