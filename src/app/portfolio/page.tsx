"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import WordReveal from "@/components/ui/WordReveal";

type Category = "All" | "Live Streaming" | "Photography" | "IT & Web";

const projects = [
  {
    id: "nepal-cup",
    title: "Nepal Cup",
    category: "Live Streaming" as Category,
    tag: "Sports · Live Coverage",
    year: "2024",
    description: "Full event photography and live streaming coverage of the Nepal Cup — a major community sports event.",
    cover: "/portfolio/nepal-cup/2J9A7237.jpg",
    images: [
      "/portfolio/nepal-cup/2J9A7237.jpg",
      "/portfolio/nepal-cup/2J9A7343.jpg",
      "/portfolio/nepal-cup/2J9A7386.jpg",
      "/portfolio/nepal-cup/2J9A7571.jpg",
      "/portfolio/nepal-cup/2J9A7719.jpg",
      "/portfolio/nepal-cup/2J9A7805.jpg",
      "/portfolio/nepal-cup/2J9A8057.jpg",
      "/portfolio/nepal-cup/2J9A9505.jpg",
    ],
  },
  {
    id: "dashain-cup",
    title: "4th Dashain Cup",
    category: "Photography" as Category,
    tag: "Sports · Event Photography",
    year: "2024",
    description: "Professional photography coverage of the 4th annual Dashain Cup community tournament.",
    cover: "/portfolio/dashain-cup/dc_1903939648776725890.jpg",
    images: [
      "/portfolio/dashain-cup/dc_1903939648776725890.jpg",
      "/portfolio/dashain-cup/dc_6667458596067350457.jpg",
      "/portfolio/dashain-cup/dc_2839227539514692675.jpg",
      "/portfolio/dashain-cup/dc_4470549100060716042.jpg",
      "/portfolio/dashain-cup/dc_3806922042534433039.jpg",
      "/portfolio/dashain-cup/dc_6092007873594113515.jpg",
      "/portfolio/dashain-cup/dc_4788172996671562928.jpg",
      "/portfolio/dashain-cup/dc_5459690801429296762.jpg",
    ],
  },
  {
    id: "bbq-party",
    title: "BBQ Party 2025",
    category: "Photography" as Category,
    tag: "Social Event · Photography",
    year: "2025",
    description: "Candid and editorial photography coverage of a community BBQ celebration.",
    cover: "/portfolio/bbq-party/2J9A1124.jpg",
    images: [
      "/portfolio/bbq-party/2J9A1124.jpg",
      "/portfolio/bbq-party/2J9A1125.jpg",
      "/portfolio/bbq-party/2J9A1126.jpg",
      "/portfolio/bbq-party/2J9A1128.jpg",
      "/portfolio/bbq-party/2J9A1132.jpg",
      "/portfolio/bbq-party/2J9A1138.jpg",
      "/portfolio/bbq-party/2J9A1140.jpg",
      "/portfolio/bbq-party/2J9A1142.jpg",
      "/portfolio/bbq-party/2J9A1143.jpg",
      "/portfolio/bbq-party/2J9A1144.jpg",
      "/portfolio/bbq-party/2J9A1146.jpg",
      "/portfolio/bbq-party/2J9A1147.jpg",
    ],
  },
  {
    id: "maple-everest",
    title: "Maple Everest",
    category: "IT & Web" as Category,
    tag: "Web Development",
    year: "2025",
    description: "Full website design and development for Maple Everest — built with Next.js and a modern design system.",
    cover: null,
    url: "https://mapleverest.com",
    images: [],
  },
];

const categories: Category[] = ["All", "Live Streaming", "Photography", "IT & Web"];

interface LightboxProps {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}

function Lightbox({ images, startIndex, title, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  function prev() { setIndex((i) => (i - 1 + images.length) % images.length); }
  function next() { setIndex((i) => (i + 1) % images.length); }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 z-10 p-2 rounded-full border transition-colors"
        style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0" }}
        onClick={onClose}
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-xs font-semibold uppercase tracking-[1.4px]" style={{ color: "#a0a0a0" }}>
        {title} · {index + 1} / {images.length}
      </div>

      {/* Image */}
      <div className="relative w-full h-full flex items-center justify-center px-16" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-5xl max-h-[80vh]"
          >
            <Image
              src={images[index]}
              alt={`${title} ${index + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-3 p-3 rounded-full border transition-colors"
          style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0", backgroundColor: "rgba(0,0,0,0.6)" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.5)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)"}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-3 p-3 rounded-full border transition-colors"
          style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0", backgroundColor: "rgba(0,0,0,0.6)" }}
          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.5)"}
          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)"}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 px-6 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className="relative shrink-0 w-12 h-12 rounded-[4px] overflow-hidden transition-all"
            style={{ opacity: i === index ? 1 : 0.4, outline: i === index ? "2px solid #E8174D" : "none" }}
          >
            <Image src={img} alt="" fill className="object-cover" sizes="48px" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<{ project: typeof projects[0]; index: number } | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && lightbox.project.images.length > 0 && (
          <Lightbox
            images={lightbox.project.images}
            startIndex={lightbox.index}
            title={lightbox.project.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

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
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8174D]" />
            Our Work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black leading-none tracking-tight mb-5"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900 }}
          >
            <WordReveal text="Portfolio" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "#a0a0a0" }}
          >
            A selection of our work across live events, sports photography, and web development.
          </motion.p>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[1.4px] border transition-all duration-200"
                style={{
                  borderColor: active === cat ? "#E8174D" : "rgba(65,65,65,0.8)",
                  backgroundColor: active === cat ? "rgba(232,23,77,0.1)" : "transparent",
                  color: active === cat ? "#E8174D" : "#a0a0a0",
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20 space-y-20">
        <AnimatePresence>
          {filtered.map((project, pi) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: pi * 0.08 }}
            >
              {/* Project header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-1" style={{ color: "#E8174D" }}>
                    {project.tag} · {project.year}
                  </p>
                  <h2 className="font-black text-white" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900 }}>
                    {project.title}
                  </h2>
                  <p className="text-sm mt-1 max-w-lg" style={{ color: "#a0a0a0" }}>{project.description}</p>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-[4px] border text-xs font-bold uppercase tracking-[1.4px] transition-all duration-200"
                    style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.4)";
                      (e.currentTarget as HTMLElement).style.color = "#E8174D";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
                      (e.currentTarget as HTMLElement).style.color = "#a0a0a0";
                    }}
                  >
                    Visit Site →
                  </a>
                )}
              </div>

              {/* Photo grid */}
              {project.images.length > 0 && (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    {(expanded === project.id ? project.images : project.images.slice(0, 8)).map((img, i) => (
                      <motion.button
                        key={img}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        onClick={() => setLightbox({ project, index: i })}
                        className="group relative overflow-hidden rounded-[4px] aspect-square"
                        style={{ border: "1px solid rgba(65,65,65,0.6)" }}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                            </svg>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {project.images.length > 8 && (
                    <button
                      onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                      className="mt-4 text-xs font-bold uppercase tracking-[1.4px] transition-colors"
                      style={{ color: "#E8174D" }}
                    >
                      {expanded === project.id
                        ? "Show less ↑"
                        : `Show all ${project.images.length} photos ↓`}
                    </button>
                  )}
                </>
              )}

              {/* IT project — no photos, show card */}
              {project.images.length === 0 && (
                <div
                  className="flex items-center justify-between border rounded-[8px] p-8"
                  style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)" }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[1.4px] mb-2" style={{ color: "#a0a0a0" }}>Web Development Project</p>
                    <p className="font-black text-white text-xl">{project.title}</p>
                    <p className="text-sm mt-1" style={{ color: "#a0a0a0" }}>Visit the live site to see the work.</p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 font-bold px-6 py-3 rounded-[4px] text-sm uppercase tracking-[1.4px] transition-all duration-200"
                      style={{ backgroundColor: "#E8174D", color: "#000" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
                        (e.currentTarget as HTMLElement).style.color = "#E8174D";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = "#E8174D";
                        (e.currentTarget as HTMLElement).style.color = "#000";
                      }}
                    >
                      Visit Site →
                    </a>
                  )}
                </div>
              )}

              {/* Divider */}
              {pi < filtered.length - 1 && (
                <div className="mt-20 h-px" style={{ backgroundColor: "rgba(65,65,65,0.4)" }} />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
