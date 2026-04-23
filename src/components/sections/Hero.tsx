"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video placeholder / gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,oklch(0.82_0.16_85/0.08),transparent)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.82 0.16 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.16 85) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Now Open for Business
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
        >
          Rebranded.
          <br />
          <span className="text-primary">Recharged.</span>
          <br />
          Ready to Create.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
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
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-base"
          >
            Explore Services <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors text-base"
          >
            <Play size={16} /> View Our Work
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "4K", label: "Resolution Delivery" },
            { value: "Multi-Cam", label: "Live Production" },
            { value: "Zero", label: "Compromise" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
