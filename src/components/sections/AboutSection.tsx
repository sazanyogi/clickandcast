"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WordReveal from "@/components/ui/WordReveal";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-3" style={{ color: "#E8174D" }}>
          In The Field
        </p>
        <h2
          className="font-black leading-none text-white"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 900 }}
        >
          <WordReveal text="Real People. Real Work." />
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "#a0a0a0" }}>
          We don&apos;t just talk about production — we show up, set up, and deliver. Here&apos;s
          us in action.
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Cameraman — large left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[8px]"
          style={{ border: "1px solid rgba(65,65,65,0.8)", aspectRatio: "3/2" }}
        >
          <Image
            src="/cameraman.jpg"
            alt="Click & Cast cameraman at work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center 20%" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Crimson accent line */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-[#E8174D]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
          {/* Label */}
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-1" style={{ color: "#E8174D" }}>
              Behind The Lens
            </p>
            <p className="text-white font-bold text-xl">Production in Action</p>
          </div>
        </motion.div>

        {/* Founders — right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[8px]"
          style={{ border: "1px solid rgba(65,65,65,0.8)", aspectRatio: "3/2" }}
        >
          <Image
            src="/founders.jpg"
            alt="Click & Cast founders"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-[#E8174D]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute bottom-6 left-6">
            <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-1" style={{ color: "#E8174D" }}>
              The Team
            </p>
            <p className="text-white font-bold text-xl">The People Behind It All</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
