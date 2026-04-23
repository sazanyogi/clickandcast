"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Radio, Camera, Mic, Cpu } from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Live Streaming & Event Production",
    subtitle: "High-reliability broadcasts for the digital age.",
    description:
      "Multi-cam live streaming, hybrid event support, and real-time technical directing. We ensure your stream never drops, no matter the scale.",
    tag: "Media",
  },
  {
    icon: Camera,
    title: "Professional Photography",
    subtitle: "Capturing moments with an editorial eye.",
    description:
      "Corporate headshots, commercial products, weddings, and event coverage. High-resolution delivery optimized for print and high-speed web display.",
    tag: "Media",
  },
  {
    icon: Mic,
    title: "Podcast & Studio Production",
    subtitle: "Your voice, amplified.",
    description:
      "Full-service podcast recording, audio engineering, and Vodcast setups. Professional studio environment with high-end acoustics and lighting.",
    tag: "Media",
  },
  {
    icon: Cpu,
    title: "IT Projects & Development",
    subtitle: "Building the backbone of your business.",
    description:
      "Custom web development, IT infrastructure consulting, and digital project management. Scalable systems that grow with you.",
    tag: "IT",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-[1.4px] mb-3"
              style={{ color: "#E8174D" }}
            >
              Our Services
            </p>
            <h2
              className="font-black leading-none text-white"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 900 }}
            >
              Four Pillars of Excellence
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold transition-colors hover:text-[#E8174D]"
            style={{ color: "#a0a0a0" }}
          >
            View all services →
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, subtitle, description, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-[8px] transition-all duration-300 group"
              style={{
                backgroundColor: "#000000",
                border: "1px solid rgba(65,65,65,0.8)",
                boxShadow: "rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#E8174D";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
              }}
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-[4px] flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: "#141414",
                    border: "1px solid rgba(65,65,65,0.8)",
                    color: "#E8174D",
                  }}
                >
                  <Icon size={18} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-[1.4px] border rounded-full px-2.5 py-0.5"
                  style={{ color: "#a0a0a0", borderColor: "rgba(65,65,65,0.8)" }}
                >
                  {tag}
                </span>
              </div>

              <h3 className="font-bold text-base leading-snug mb-1 text-white">{title}</h3>
              <p className="text-xs font-semibold mb-3" style={{ color: "#E8174D" }}>
                {subtitle}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#a0a0a0" }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
