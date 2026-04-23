"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Code2, ArrowRight } from "lucide-react";

const entries = [
  {
    href: "/services#media",
    icon: Camera,
    tag: "Media & Production",
    title: "We Tell Your Story",
    description:
      "Live streaming, photography, podcast production. Professional-grade storytelling with Sony FX series equipment and multi-cam workflows.",
    cta: "Explore Media Services",
    accent: "from-amber-500/10 to-orange-500/5",
    border: "hover:border-amber-500/40",
    iconColor: "text-amber-400",
  },
  {
    href: "/services#it",
    icon: Code2,
    tag: "IT & Development",
    title: "We Build Your Backbone",
    description:
      "Custom web development, IT infrastructure consulting, and digital project management. Scalable systems that grow with your business.",
    cta: "Explore IT Services",
    accent: "from-blue-500/10 to-cyan-500/5",
    border: "hover:border-blue-500/40",
    iconColor: "text-blue-400",
  },
];

export default function DualEntry() {
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
          Two Disciplines. One Agency.
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">What We Do</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {entries.map(({ href, icon: Icon, tag, title, description, cta, accent, border, iconColor }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link
              href={href}
              className={`group block h-full bg-card border border-border rounded-2xl p-8 bg-gradient-to-br ${accent} transition-all duration-300 ${border} hover:scale-[1.01]`}
            >
              <div className={`w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center mb-6 ${iconColor}`}>
                <Icon size={22} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {tag}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                {cta} <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
