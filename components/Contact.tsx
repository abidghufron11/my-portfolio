"use client";
import { motion } from "framer-motion";
import { buttonHover, fadeInUp } from "@/lib/animations";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, GitBranch, Phone, ArrowRight } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    check(); window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setLoading(true); setStatus({ type: null, message: " " });
    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get("name"), email: formData.get("email"), message: formData.get("message") };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await res.json();
      if (res.ok) { setStatus({ type: "success", message: "Message sent successfully! I'll reply soon." }); (e.target as HTMLFormElement).reset(); }
      else { setStatus({ type: "error", message: result.error || "Failed to send message." }); }
    } catch { setStatus({ type: "error", message: "Network error. Please check your connection." }); }
    finally { setLoading(false); }
  };

  const animProps = isMobile ? { initial: false } : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.2 } };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <motion.h2 variants={fadeInUp} {...animProps} className="text-3xl md:text-4xl font-bold mb-4" style={{ opacity: 1 }}>
          Let's <span className="text-accent">Connect</span>
        </motion.h2>
        <motion.p variants={fadeInUp} {...animProps} className="text-gray-400 max-w-2xl mx-auto" style={{ opacity: 1 }}>
          Have a project in mind or want to collaborate? Drop me a message.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <motion.div variants={fadeInUp} {...animProps} className="space-y-6 md:space-y-8" style={{ opacity: 1 }}>
          <div className="p-6 bg-dark-800/30 border border-white/10 rounded-xl backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg text-accent backdrop-blur-sm"><Mail size={24} /></div>
              <div><h3 className="font-bold mb-1">Email</h3><p className="text-gray-400 text-sm">abidghufron11@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg text-accent backdrop-blur-sm"><MapPin size={24} /></div>
              <div><h3 className="font-bold mb-1">Location</h3><p className="text-gray-400 text-sm">Ponorogo, Indonesia</p></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              { Icon: GitBranch, href: "https://github.com/abidghufron11", label: "GitHub" },
              { Icon: Mail, href: "https://instagram.com/a.ghufron_", label: "Instagram" },
              { Icon: Phone, href: "https://wa.me/6285776043904", label: "WhatsApp" }
            ].map((social, i) => (
              <motion.a
                key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                whileHover={!isMobile ? { y: -5, borderColor: "#FF6B35", backgroundColor: "rgba(255, 107, 53, 0.1)" } : {}}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-dark-800/50 border border-white/10 rounded-xl backdrop-blur-md backdrop-saturate-150 shadow-lg shadow-black/20"
              >
                <social.Icon size={24} className="text-gray-400" />
                <span className="text-xs font-bold text-gray-300">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {status.type && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-lg flex items-center gap-3 text-sm backdrop-blur-md backdrop-saturate-150 shadow-lg ${status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
              {status.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
              {status.message}
            </motion.div>
          )}
        </motion.div>

        <motion.form variants={fadeInUp} {...animProps} className="space-y-5" onSubmit={handleSubmit} style={{ opacity: 1 }}>
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input name={field} type={field === "email" ? "email" : "text"} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} required onFocus={() => setFocused(field)} onBlur={() => setFocused(null)} disabled={loading} className={`w-full bg-dark-800/50 border ${focused === field ? "border-accent" : "border-white/10"} rounded-lg px-4 py-3 text-sm focus:outline-none text-white backdrop-blur-md`} />
            </div>
          ))}
          <div className="relative">
            <textarea name="message" placeholder="Message" required rows={6} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} disabled={loading} className={`w-full bg-dark-800/50 border ${focused === "message" ? "border-accent" : "border-white/10"} rounded-lg px-4 py-3 text-sm focus:outline-none text-white resize-none backdrop-blur-md`} />
          </div>
          <motion.button
            type="submit"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="relative overflow-hidden w-full px-6 py-3.5 bg-accent/90 text-black font-semibold rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base backdrop-blur-md shadow-lg shadow-accent/20"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-accent z-0"
              variants={{ hover: { scaleX: 1 } }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />

            <span className="relative z-10">
              {loading ? (
                <>
                  <Loader2 className="animate-spin inline mr-2" size={16} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </span>
            {!loading && (
              <motion.span
                className="relative z-10"
                variants={{ hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}