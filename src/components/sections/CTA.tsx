"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const whatsappManager =
  process.env.NEXT_PUBLIC_WHATSAPP_MANAGER
    ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_MANAGER}?text=Hi%2C%20I%27m%20interested%20in%20Click%20%26%20Cast%20services.`
    : "https://wa.me/1XXXXXXXXXX?text=Hi%2C%20I%27m%20interested%20in%20Click%20%26%20Cast%20services.";

export default function CTA() {
  return (
    <section className="py-24" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[1.4px] mb-10"
            style={{
              borderColor: "rgba(232,23,77,0.25)",
              backgroundColor: "rgba(232,23,77,0.06)",
              color: "#E8174D",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for New Projects
          </div>

          {/* Headline */}
          <h2
            className="font-black leading-none text-white mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 900 }}
          >
            Ready to Bring Your Vision to Life?
          </h2>

          {/* Body */}
          <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: "#a0a0a0" }}>
            Let&apos;s talk about your next event, production, or digital project. Quick-connect via
            WhatsApp or send us a message.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Dark Solid primary */}
            <a
              href={whatsappManager}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-[4px] transition-all duration-200 text-base"
              style={{ backgroundColor: "#141414", border: "1px solid #141414" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#3a3a3a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#141414";
              }}
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>

            {/* Ghost button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium px-8 py-3 rounded-[4px] transition-all duration-200 text-base text-white"
              style={{ border: "1px solid #5c0a1e" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#1d1d1d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Send a Message <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
