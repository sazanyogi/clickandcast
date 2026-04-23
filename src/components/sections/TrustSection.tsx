"use client";

import { motion } from "framer-motion";
import { Users, Zap, Eye, MessageSquare, Package } from "lucide-react";

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
    description:
      "Flexible packages for weddings, small businesses, or corporate giants. We scale with you.",
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
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
          The Click & Cast Difference
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Icon size={18} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
