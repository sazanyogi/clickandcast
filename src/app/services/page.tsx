"use client";

import { motion } from "framer-motion";
import { Radio, Camera, Mic, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

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
      "Web-optimized exports via Cloudinary",
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
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Our Services</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Four pillars of excellence — from pixel-perfect photography to bulletproof IT
            infrastructure. Each service is delivered with the same standard: organized execution
            with zero compromise on creativity.
          </p>
        </motion.div>
      </div>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {services.map(({ id, icon: Icon, tag, title, subtitle, description, features, cta }, i) => (
          <motion.div
            id={id}
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="grid md:grid-cols-2 gap-10 bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-primary/20 transition-colors"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-2.5 py-1">
                  {tag}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
              <p className="text-primary font-medium mb-4">{subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors text-sm"
              >
                {cta} <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — features */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
