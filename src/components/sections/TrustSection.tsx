"use client";

import { motion } from "framer-motion";
import { Users, Zap, Eye, MessageSquare, Package } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import WordReveal from "@/components/ui/WordReveal";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Professional production and IT specialists with years of hands-on experience.",
  },
  {
    icon: Zap,
    title: "Elite Gear",
    description: "Sony FX series cameras, Apple M3 Pro workflows, and professional-grade audio.",
  },
  {
    icon: Eye,
    title: "Detail Obsessed",
    description: "Creative storytelling with a relentless focus on the 'little things' that matter.",
  },
  {
    icon: MessageSquare,
    title: "Organized Execution",
    description: "Clear communication from the first email to the final delivery. No surprises.",
  },
  {
    icon: Package,
    title: "Tailored Solutions",
    description: "Flexible packages for weddings, small businesses, or corporate giants. We scale with you.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-3" style={{ color: "#E8174D" }}>
          Why Choose Us
        </p>
        <h2 className="font-black leading-none text-white max-w-2xl mx-auto" style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 900 }}>
          <WordReveal text="The Click & Cast Difference" />
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <TiltCard
              className="group relative h-full overflow-hidden"
              intensity={8}
              style={{
                backgroundColor: "#000000",
                border: "1px solid rgba(65,65,65,0.8)",
                borderRadius: "8px",
                boxShadow: "rgba(0,0,0,0.1) 0px 1px 3px",
              }}
            >
              <div className="flex gap-4 p-6 h-full">
                <div
                  className="shrink-0 w-10 h-10 rounded-[4px] flex items-center justify-center"
                  style={{ backgroundColor: "#141414", border: "1px solid rgba(65,65,65,0.8)", color: "#E8174D" }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#a0a0a0" }}>{description}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
