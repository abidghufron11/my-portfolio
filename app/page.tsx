import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import LogoLoop from "@/components/LogoLoop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (

    <><script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Abid Ghufron F.",
          "jobTitle": "Computer Science Student & Fullstack Developer",
          "url": "https://abid.dev",
          "image": "https://abid.dev/og-image.png",
          "sameAs": [
            "https://github.com/abidghufron11",
            "https://instagram.com/a.ghufron_",
            "https://linkedin.com/in/abidghufron"
          ],
          "knowsAbout": ["Web Development", "Artificial Intelligence", "Next.js", "React", "TypeScript", "Python"],
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universitas [Muhammadiyah] Ponorogo",
            "sameAs": "https://www.umpo.ac.id"
          }
        }),
      }} /><main className="min-h-screen bg-dark-900 text-white selection:bg-accent selection:text-black">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <GitHubStats />
        <LogoLoop />
        <Contact />
        <Footer />
      </main></>
  );
}