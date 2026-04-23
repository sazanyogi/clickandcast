"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Photography" | "Live Streaming" | "IT Projects";

const categories: Category[] = ["All", "Photography", "Live Streaming", "IT Projects"];

// Placeholder items — replace with Sanity data once CMS is set up
const items = [
  { id: 1, title: "Corporate Event Coverage", category: "Photography", aspect: "landscape" },
  { id: 2, title: "Wedding Day Highlights", category: "Photography", aspect: "portrait" },
  { id: 3, title: "Product Commercial Shoot", category: "Photography", aspect: "square" },
  { id: 4, title: "Annual Conference Stream", category: "Live Streaming", aspect: "landscape" },
  { id: 5, title: "Hybrid Town Hall", category: "Live Streaming", aspect: "landscape" },
  { id: 6, title: "Artist Launch Event", category: "Live Streaming", aspect: "portrait" },
  { id: 7, title: "E-Commerce Platform Build", category: "IT Projects", aspect: "square" },
  { id: 8, title: "Corporate Network Setup", category: "IT Projects", aspect: "landscape" },
  { id: 9, title: "Brand Website Redesign", category: "IT Projects", aspect: "portrait" },
];

const aspectClasses: Record<string, string> = {
  landscape: "aspect-video",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="pt-24 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-5">Portfolio</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            A selection of our finest work across media production, live streaming, and IT
            development.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <div className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <div
                    className={`${aspectClasses[item.aspect]} bg-gradient-to-br from-card to-muted/20 w-full`}
                  >
                    {/* Placeholder — replace with actual images via Sanity/Cloudinary */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                      <span className="text-xs font-mono">[ {item.title} ]</span>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
