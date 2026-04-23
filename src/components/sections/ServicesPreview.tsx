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
    <section className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Four Pillars of Excellence</h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 text-sm font-semibold text-primary hover:text-primary/80 underline underline-offset-4"
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
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                  {tag}
                </span>
              </div>
              <h3 className="font-bold text-base leading-snug mb-1">{title}</h3>
              <p className="text-primary text-xs font-medium mb-3">{subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
