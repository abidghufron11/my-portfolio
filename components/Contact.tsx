"use client";
import { motion } from "framer-motion";
import { buttonHover, fadeInUp } from "@/lib/animations";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, GitBranch, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll reply soon." });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="text-accent">Connect</span></h2>
        <p className="text-gray-400">Have a project in mind or want to collaborate? Drop me a message.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT COLUMN */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
          
          {/* Info Box */}
          <div className="p-6 bg-dark-800/30 border border-white/10 rounded-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg text-accent"><Mail size={24} /></div>
              <div><h3 className="font-bold">Email</h3><p className="text-gray-400 text-sm">abidghufron11@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg text-accent"><MapPin size={24} /></div>
              <div><h3 className="font-bold">Location</h3><p className="text-gray-400 text-sm">Ponorogo, Indonesia</p></div>
            </div>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { Icon: GitBranch, href: "https://github.com/abidghufron11", label: "GitHub" },
              { Icon: Mail, href: "https://instagram.com/a.ghufron_", label: "Instagram" },
              { Icon: Phone, href: "https://wa.me/6285776043904", label: "WhatsApp" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: "#FF6B35", backgroundColor: "rgba(255, 107, 53, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-dark-800/50 border border-white/10 rounded-xl cursor-pointer group"
              >
                <social.Icon size={24} className="text-gray-400 group-hover:text-accent transition-colors" />
                <span className="text-xs font-bold text-gray-300 group-hover:text-accent">{social.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Status Feedback */}
          {status.type && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-center gap-3 text-sm ${
                status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}
            >
              {status.type === "success" ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
              {status.message}
            </motion.div>
          )}
        </motion.div>

        {/* RIGHT COLUMN (Form) */}
        <motion.form 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          className="space-y-5" 
          onSubmit={handleSubmit}
        >
          {/* Hanya Name dan Email */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required
                onFocus={() => setFocused(field)}
                onBlur={() => setFocused(null)}
                disabled={loading}
                className={`w-full bg-dark-800/50 border ${focused === field ? "border-accent" : "border-white/10"} rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-gray-500 text-white disabled:opacity-50`}
              />
              <motion.div className="absolute bottom-0 left-0 h-0.5 bg-accent" initial={{ width: 0 }} animate={{ width: focused === field ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
            </div>
          ))}

          {/* Message Textarea Besar */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={6}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              disabled={loading}
              className={`w-full bg-dark-800/50 border ${focused === "message" ? "border-accent" : "border-white/10"} rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-gray-500 text-white resize-none disabled:opacity-50`}
            />
            <motion.div className="absolute bottom-0 left-0 h-0.5 bg-accent" initial={{ width: 0 }} animate={{ width: focused === "message" ? "100%" : "0%" }} transition={{ duration: 0.3 }} />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={buttonHover}
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            className="relative overflow-hidden w-full px-6 py-3.5 bg-accent text-black font-semibold rounded-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-accent z-0"
              variants={{ hover: { scaleX: 1 } }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10">Send Message</span>
            <motion.span
              className="relative z-10"
              variants={{ hover: { x: 4 } }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Send size={16} />
            </motion.span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}