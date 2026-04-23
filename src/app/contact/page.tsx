"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

const services = [
  "Live Streaming & Event Production",
  "Professional Photography",
  "Podcast & Studio Production",
  "IT Projects & Development",
  "Other / Not Sure Yet",
];

const whatsappManager =
  "https://wa.me/1XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20Click%20%26%20Cast%20services.";
const whatsappProduction =
  "https://wa.me/1YYYYYYYYYY?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20production%20project.";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Let&apos;s Talk</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Ready to bring your vision to life? Reach out via the form below or connect instantly on
            WhatsApp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-64 text-center gap-4">
                <CheckCircle2 size={48} className="text-primary" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-primary underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors text-foreground"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your event, project, or what you have in mind..."
                    className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : <>Send Message <Send size={14} /></>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {/* WhatsApp cards */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-bold mb-1">Quick Connect</h3>
              <p className="text-muted-foreground text-sm mb-5">
                Prefer a faster response? Reach us directly on WhatsApp.
              </p>
              <div className="space-y-3">
                <a
                  href={whatsappManager}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg px-4 py-3 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={16} />
                  Manager — General Inquiries
                </a>
                <a
                  href={whatsappProduction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg px-4 py-3 text-sm font-medium text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <MessageCircle size={16} />
                  Production Lead — Project Briefs
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Response Time
                </p>
                <p className="text-sm">Within 24 hours on business days</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Based In
                </p>
                <p className="text-sm">Available for local & remote projects</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Project Types
                </p>
                <p className="text-sm">One-time events, retainer packages, long-term partnerships</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
