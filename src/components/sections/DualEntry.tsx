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
    featured: true,
  },
  {
    href: "/services#it",
    icon: Code2,
    tag: "IT & Development",
    title: "We Build Your Backbone",
    description:
      "Custom web development, IT infrastructure consulting, and digital project management. Scalable systems that grow with your business.",
    cta: "Explore IT Services",
    featured: false,
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
        <p
          className="text-xs font-semibold uppercase tracking-[1.4px] mb-3"
          style={{ color: "#faff69" }}
        >
          Two Disciplines. One Agency.
        </p>
        <h2
          className="font-black leading-none"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 900 }}
        >
          What We Do
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {entries.map(({ href, icon: Icon, tag, title, description, cta, featured }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link
              href={href}
              className="group block h-full p-8 rounded-[8px] transition-all duration-300"
              style={{
                backgroundColor: "#000000",
                border: featured ? "1px solid #faff69" : "1px solid rgba(65,65,65,0.8)",
                boxShadow: featured
                  ? "rgba(0,0,0,0.06) 0px 4px 4px, rgba(0,0,0,0.14) 0px 4px 25px inset"
                  : "rgba(0,0,0,0.1) 0px 1px 3px, rgba(0,0,0,0.1) 0px 1px 2px -1px",
              }}
              onMouseEnter={(e) => {
                if (!featured) {
                  (e.currentTarget as HTMLElement).style.borderColor = "#faff69";
                }
              }}
              onMouseLeave={(e) => {
                if (!featured) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
                }
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-[4px] flex items-center justify-center mb-6"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid rgba(65,65,65,0.8)",
                  color: "#faff69",
                }}
              >
                <Icon size={22} />
              </div>

              {/* Tag */}
              <p
                className="text-xs font-semibold uppercase tracking-[1.4px] mb-2"
                style={{ color: "#a0a0a0" }}
              >
                {tag}
              </p>

              {/* Title */}
              <h3
                className="font-bold mb-4 text-white"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}
              >
                {title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mb-8 text-base" style={{ color: "#a0a0a0" }}>
                {description}
              </p>

              {/* CTA */}
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                style={{ color: "#faff69" }}
              >
                {cta} <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
