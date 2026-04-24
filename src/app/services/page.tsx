"use client";

import { motion } from "framer-motion";
import { Radio, Camera, Mic, Cpu, Trophy, ArrowRight } from "lucide-react";
import Link from "next/link";
import WordReveal from "@/components/ui/WordReveal";

const services = [
  {
    id: "media",
    icon: Radio,
    tag: "Media",
    title: "Live Streaming & Event Production",
    subtitle: "High-reliability broadcasts for the digital age.",
    description:
      "We use professional-grade technical workflows to ensure your stream never drops, no matter the scale. From intimate corporate briefings to large-scale hybrid conferences, we handle every layer of the broadcast.",
    features: [
      "Multi-camera live streaming",
      "Hybrid event support",
      "Real-time technical directing",
      "Professional encoding & delivery",
      "Post-event VOD processing",
      "Platform integration (YouTube, Zoom, custom RTMP)",
    ],
    cta: "Book a Stream",
  },
  {
    id: "photography",
    icon: Camera,
    tag: "Media",
    title: "Professional Photography",
    subtitle: "Capturing moments with an editorial eye.",
    description:
      "High-resolution delivery optimized for both print and high-speed web display. Shot on Sony FX series equipment and processed with Apple M3 Pro workflows for the fastest turnaround without sacrificing quality.",
    features: [
      "Corporate headshots & team portraits",
      "Commercial product photography",
      "Wedding & engagement coverage",
      "Live event documentation",
      "4K image delivery",
      "Web-optimized exports",
    ],
    cta: "Book a Shoot",
  },
  {
    id: "podcast",
    icon: Mic,
    tag: "Media",
    title: "Podcast & Studio Production",
    subtitle: "Your voice, amplified.",
    description:
      "A professional studio environment with high-end acoustics, lighting, and multi-track recording. Whether you need a polished audio podcast or a full video vodcast, we have the setup and the expertise.",
    features: [
      "Full-service podcast recording",
      "Professional audio engineering & mixing",
      "Video podcast (Vodcast) production",
      "Intro/outro sound design",
      "Episode editing & publishing",
      "Remote guest integration",
    ],
    cta: "Book Studio Time",
  },
  {
    id: "sports",
    icon: Trophy,
    tag: "Media",
    title: "Sports Broadcast",
    subtitle: "Bringing the game to life.",
    description:
      "Professional live sports broadcast production for games, tournaments, and sporting events of any scale. From local leagues to large-scale competitions, we deliver high-energy, broadcast-quality coverage.",
    features: [
      "Multi-camera sports coverage",
      "Live switching & technical directing",
      "Real-time graphics & scoreboards",
      "Platform streaming (YouTube, Facebook, custom RTMP)",
      "Post-event highlight packages",
      "Remote commentary integration",
    ],
    cta: "Book a Broadcast",
  },
  {
    id: "it",
    icon: Cpu,
    tag: "IT",
    title: "IT Projects & Development",
    subtitle: "Building the backbone of your business.",
    description:
      "We don't just build websites — we build scalable digital systems that grow with you. From custom web applications to IT infrastructure consulting, our solutions are engineered for performance and longevity.",
    features: [
      "Custom web development (Next.js, React)",
      "IT infrastructure consulting",
      "Digital project management",
      "API integrations & automation",
      "Network setup & administration",
      "Ongoing maintenance & support",
    ],
    cta: "Start a Project",
  },
];

export default function ServicesPage() {
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
            What We Offer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900 }}
          >
            <WordReveal text="Our Services" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "#a0a0a0" }}
          >
            Five pillars of excellence — from pixel-perfect photography to bulletproof IT
            infrastructure. Organized execution with zero compromise on creativity.
          </motion.p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24 space-y-6">
        {services.map(({ id, icon: Icon, tag, title, subtitle, description, features, cta }, i) => (
          <motion.div
            id={id}
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="grid md:grid-cols-2 gap-0 border rounded-[8px] overflow-hidden"
            style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "#000" }}
          >
            {/* Left — info */}
            <div className="p-7 sm:p-10 border-b md:border-b-0 md:border-r" style={{ borderColor: "rgba(65,65,65,0.8)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-11 h-11 rounded-[4px] flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#141414", border: "1px solid rgba(65,65,65,0.8)", color: "#E8174D" }}
                >
                  <Icon size={20} />
                </div>
                <span
                  className="text-xs font-semibold uppercase tracking-[1.4px] border rounded-full px-2.5 py-0.5"
                  style={{ color: "#a0a0a0", borderColor: "rgba(65,65,65,0.8)" }}
                >
                  {tag}
                </span>
              </div>

              <h2 className="font-black leading-tight mb-2 text-white" style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 900 }}>
                {title}
              </h2>
              <p className="text-sm font-semibold mb-5" style={{ color: "#E8174D" }}>{subtitle}</p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#a0a0a0" }}>{description}</p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-[4px] text-sm transition-all duration-200 group"
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
                {cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Right — features */}
            <div className="p-7 sm:p-10" style={{ backgroundColor: "rgba(255,255,255,0.015)" }}>
              <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-5" style={{ color: "#a0a0a0" }}>
                What&apos;s Included
              </p>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "#c0c0c0" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#E8174D" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t" style={{ borderColor: "rgba(65,65,65,0.8)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-4" style={{ color: "#a0a0a0" }}>
              Not sure where to start?
            </p>
            <h2 className="font-black text-white mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900 }}>
              Let&apos;s Figure It Out Together.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-[4px] text-sm transition-all duration-200"
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
              Get a Free Quote <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
