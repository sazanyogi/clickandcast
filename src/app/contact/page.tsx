"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import WordReveal from "@/components/ui/WordReveal";

const services = [
  "Live Streaming & Event Production",
  "Professional Photography",
  "Podcast & Studio Production",
  "IT Projects & Development",
  "Other / Not Sure Yet",
];

const whatsappManager = "https://wa.me/14379874806?text=Hi%2C%20I%27m%20interested%20in%20Click%20%26%20Cast%20services.";
const whatsappProduction = "https://wa.me/14374300348?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20production%20project.";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I found you via your website!\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Service:* ${form.service || "Not specified"}\n\n` +
      `*Message:*\n${form.message}`
    );
    window.open(`https://wa.me/14379874806?text=${text}`, "_blank");
    setStatus("success");
    setForm({ name: "", email: "", service: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <div className="border-b" style={{ borderColor: "rgba(65,65,65,0.8)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] mb-6"
            style={{ borderColor: "rgba(232,23,77,0.25)", backgroundColor: "rgba(232,23,77,0.06)", color: "#E8174D" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8174D] animate-pulse" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900 }}
          >
            <WordReveal text="Let's Talk." />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "#a0a0a0" }}
          >
            Ready to bring your vision to life? Fill out the form or connect instantly on WhatsApp — we respond within 24 hours.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            {status === "success" ? (
              <div
                className="flex flex-col items-center justify-center h-72 text-center gap-4 border rounded-[8px]"
                style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(232,23,77,0.1)", border: "1px solid rgba(232,23,77,0.3)" }}
                >
                  <CheckCircle2 size={28} style={{ color: "#E8174D" }} />
                </div>
                <h3 className="text-xl font-black text-white">Message Sent!</h3>
                <p className="text-sm" style={{ color: "#a0a0a0" }}>
                  WhatsApp opened with your message pre-filled. Just hit send!
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold uppercase tracking-[1.4px] mt-2 transition-colors"
                  style={{ color: "#E8174D" }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[1.4px] mb-2" style={{ color: "#a0a0a0" }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-[4px] text-sm text-white placeholder:text-[#404040] focus:outline-none transition-colors duration-200"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(65,65,65,0.8)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,23,77,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(65,65,65,0.8)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-[1.4px] mb-2" style={{ color: "#a0a0a0" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-[4px] text-sm text-white placeholder:text-[#404040] focus:outline-none transition-colors duration-200"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(65,65,65,0.8)" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,23,77,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(65,65,65,0.8)")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[1.4px] mb-2" style={{ color: "#a0a0a0" }}>
                    Service Interested In
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-[4px] text-sm focus:outline-none transition-colors duration-200 appearance-none"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(65,65,65,0.8)",
                      color: form.service ? "#ffffff" : "#404040",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,23,77,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(65,65,65,0.8)")}
                  >
                    <option value="" style={{ backgroundColor: "#111" }}>Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: "#111" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[1.4px] mb-2" style={{ color: "#a0a0a0" }}>
                    Tell Us About Your Project
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your event, project, or what you have in mind..."
                    className="w-full px-4 py-3 rounded-[4px] text-sm text-white placeholder:text-[#404040] focus:outline-none transition-colors duration-200 resize-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(65,65,65,0.8)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,23,77,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(65,65,65,0.8)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 font-bold px-6 py-3 rounded-[4px] text-sm uppercase tracking-[1.4px] transition-all duration-200 disabled:opacity-50"
                  style={{ backgroundColor: "#E8174D", color: "#000000" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
                    (e.currentTarget as HTMLElement).style.color = "#E8174D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#E8174D";
                    (e.currentTarget as HTMLElement).style.color = "#000000";
                  }}
                >
                  <MessageCircle size={14} /> Send via WhatsApp
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-2 space-y-4"
          >
            {/* WhatsApp */}
            <div
              className="border rounded-[8px] p-6"
              style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              <h3 className="font-black text-white mb-1">Quick Connect</h3>
              <p className="text-sm mb-5" style={{ color: "#a0a0a0" }}>
                Prefer a faster response? Reach us directly on WhatsApp.
              </p>
              <div className="space-y-3">
                <a
                  href={whatsappManager}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-[4px] border text-sm font-semibold transition-all duration-200"
                  style={{ borderColor: "rgba(37,211,102,0.25)", backgroundColor: "rgba(37,211,102,0.06)", color: "#25D366" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(37,211,102,0.12)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(37,211,102,0.06)"}
                >
                  <MessageCircle size={16} />
                  <div className="flex-1">
                    <div>Amit Dhakal</div>
                    <div className="text-xs font-normal opacity-70">Manager — General Inquiries</div>
                  </div>
                  <ArrowRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href={whatsappProduction}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-4 py-3 rounded-[4px] border text-sm font-semibold transition-all duration-200"
                  style={{ borderColor: "rgba(37,211,102,0.25)", backgroundColor: "rgba(37,211,102,0.06)", color: "#25D366" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(37,211,102,0.12)"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(37,211,102,0.06)"}
                >
                  <MessageCircle size={16} />
                  <div className="flex-1">
                    <div>Sazan Yogi</div>
                    <div className="text-xs font-normal opacity-70">Production Lead — Project Briefs</div>
                  </div>
                  <ArrowRight size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Info */}
            <div
              className="border rounded-[8px] p-6 space-y-5"
              style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)" }}
            >
              {[
                { label: "Response Time", value: "Within 24 hours on business days" },
                { label: "Based In", value: "Brampton, Ontario — local & remote projects" },
                { label: "Project Types", value: "One-time events, retainers, long-term partnerships" },
                { label: "Email", value: "clickandcast25@gmail.com" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-1" style={{ color: "#a0a0a0" }}>
                    {label}
                  </p>
                  <p className="text-sm text-white">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
