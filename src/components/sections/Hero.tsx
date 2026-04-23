"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const stats = [
  { value: "4K", label: "Resolution Delivery" },
  { value: "Multi-Cam", label: "Live Production" },
  { value: "Zero", label: "Compromise" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#faff69 1px, transparent 1px), linear-gradient(90deg, #faff69 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-40 text-center">
        {/* Overline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[1.4px] mb-10"
          style={{
            borderColor: "rgba(250,255,105,0.25)",
            backgroundColor: "rgba(250,255,105,0.06)",
            color: "#faff69",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#faff69] animate-pulse" />
          Now Open for Business
        </motion.div>

        {/* Hero headline — 96px Inter Black */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 1.0 }}
        >
          Rebranded.
          <br />
          <span style={{ color: "#faff69" }}>Recharged.</span>
          <br />
          Ready to Create.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#a0a0a0" }}
        >
          A dual-force agency where creative storytelling meets technical precision. Live streaming,
          photography, podcast production, and IT development — organized execution with zero
          compromise on creativity.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Neon Primary CTA */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-[4px] transition-all duration-200 text-base group"
            style={{
              backgroundColor: "#faff69",
              color: "#151515",
              border: "1px solid #faff69",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
              (e.currentTarget as HTMLElement).style.color = "#faff69";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#faff69";
              (e.currentTarget as HTMLElement).style.color = "#151515";
            }}
          >
            Explore Services <ArrowRight size={16} />
          </Link>

          {/* Ghost Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-medium px-8 py-3 rounded-[4px] transition-all duration-200 text-base text-white"
            style={{ border: "1px solid #4f5100" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            <Play size={16} /> View Our Work
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-24 flex flex-wrap items-center justify-center gap-12 md:gap-24"
        >
          {stats.map(({ value, label }, i) => (
            <div key={label} className="text-center">
              {i > 0 && (
                <div
                  className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-px h-8"
                  style={{ backgroundColor: "rgba(65,65,65,0.8)" }}
                />
              )}
              <div
                className="font-black leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 900, color: "#ffffff" }}
              >
                {value}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-[1.4px] mt-2"
                style={{ color: "#a0a0a0" }}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
