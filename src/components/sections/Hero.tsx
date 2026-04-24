"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrambleText from "@/components/ui/ScrambleText";
import MagneticButton from "@/components/ui/MagneticButton";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1.8, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionVal.set(target);
  }, [inView, motionVal, target]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v).toString()));
  }, [spring]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const stats = [
  { display: "4K", label: "Resolution Delivery", isText: true },
  { display: "Multi-Cam", label: "Live Production", isText: true },
  { display: "Zero", label: "Compromise", isText: true },
];

export default function Hero() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const x = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const gridMask = useMotionTemplate`radial-gradient(350px circle at ${x}px ${y}px, black 0%, transparent 80%)`;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Grid — revealed only under spotlight via mask */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(#E8174D 1px, transparent 1px), linear-gradient(90deg, #E8174D 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.5,
          WebkitMaskImage: gridMask,
          maskImage: gridMask,
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,#000_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-32 sm:py-40 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[1.4px] mb-10"
          style={{
            borderColor: "rgba(74,222,128,0.3)",
            backgroundColor: "rgba(74,222,128,0.08)",
            color: "#4ade80",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          Now Open for Business
        </motion.div>

        {/* Headline with scramble */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="font-black leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 1.0 }}
        >
          <ScrambleText text="Rebranded." delay={300} speed={25} className="block" />
          <ScrambleText
            text="Recharged."
            delay={600}
            speed={25}
            className="block"
            style={{ color: "#E8174D" }}
          />
          <ScrambleText text="Ready to Create." delay={900} speed={25} className="block" />
        </motion.h1>

        {/* Subheading — slides up */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
        >
          <MagneticButton
            as="a"
            href="/services"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-[4px] transition-all duration-200 text-base"
            style={{ backgroundColor: "#E8174D", color: "#151515", border: "1px solid #E8174D" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
              (e.currentTarget as HTMLElement).style.color = "#E8174D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#E8174D";
              (e.currentTarget as HTMLElement).style.color = "#151515";
            }}
          >
            Explore Services <ArrowRight size={16} />
          </MagneticButton>

          <MagneticButton
            as="a"
            href="/portfolio"
            className="inline-flex items-center gap-2 font-medium px-8 py-3 rounded-[4px] transition-all duration-200 text-base text-white"
            style={{ border: "1px solid #5c0a1e" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            <Play size={16} /> View Our Work
          </MagneticButton>
        </motion.div>

        {/* Stats row with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-24"
        >
          {stats.map(({ display, label }, i) => (
            <motion.div
              key={label}
              className="text-center"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="font-black leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 4.5rem)", fontWeight: 900, color: "#ffffff" }}
              >
                <ScrambleText text={display} delay={2200 + i * 200} speed={35} />
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-[1.4px] mt-2"
                style={{ color: "#a0a0a0" }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
