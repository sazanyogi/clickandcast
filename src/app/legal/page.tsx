"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const documents = [
  {
    href: "/legal/privacy",
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information in accordance with PIPEDA.",
    audience: "All Clients",
  },
  {
    href: "/legal/terms",
    title: "Terms & Conditions",
    description: "The rules and expectations governing all services provided by Click & Cast Inc.",
    audience: "All Clients",
  },
  {
    href: "/legal/service-agreement",
    title: "Service Agreement",
    description: "Detailed agreement covering booking, payment, deliverables, and intellectual property.",
    audience: "All Clients",
  },
  {
    href: "/legal/wedding-addendum",
    title: "Wedding Services Addendum",
    description: "Specific terms for wedding photography and videography coverage.",
    audience: "Wedding Clients",
  },
  {
    href: "/legal/event-addendum",
    title: "Event & Live Streaming Addendum",
    description: "Terms covering event videography, live streaming, and sports productions.",
    audience: "Event Clients",
  },
  {
    href: "/legal/consent-rights",
    title: "Consent & Rights Authorization",
    description: "Client authorization for recording, distribution, and commercial use of captured content.",
    audience: "All Clients",
  },
  {
    href: "/legal/exclusive-rights",
    title: "Exclusive Rights Buyout Clause",
    description: "Optional clause for corporate clients seeking exclusive usage rights over delivered content.",
    audience: "Corporate Clients",
  },
  {
    href: "/legal/client-intake",
    title: "Client Intake Form",
    description: "Information collected at booking and the legal acknowledgements required to proceed.",
    audience: "New Clients",
  },
  {
    href: "/legal/notice-recording",
    title: "Notice of Recording & Live Streaming",
    description: "Public notice displayed at events where Click & Cast Inc. is filming or streaming.",
    audience: "Event Attendees",
  },
  {
    href: "/legal/freelancer-agreement",
    title: "Freelancer / Second Shooter Agreement",
    description: "Terms for contractors and second shooters engaged by Click & Cast Inc.",
    audience: "Contractors",
  },
];

export default function LegalHubPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b" style={{ borderColor: "rgba(65,65,65,0.8)" }}>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] mb-6"
            style={{ borderColor: "rgba(232,23,77,0.25)", backgroundColor: "rgba(232,23,77,0.06)", color: "#E8174D" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8174D]" />
            Legal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black tracking-tight leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900 }}
          >
            Legal Documents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base max-w-xl leading-relaxed"
            style={{ color: "#a0a0a0" }}
          >
            All agreements, policies, and notices governing our services. Each document is readable online and printable as a PDF.
          </motion.p>
        </div>
      </div>

      {/* Document grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map(({ href, title, description, audience }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={href}
                className="group block h-full border rounded-[4px] p-6 transition-colors duration-200"
                style={{
                  borderColor: "rgba(65,65,65,0.8)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.3)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(232,23,77,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-sm font-bold leading-snug text-white group-hover:text-[#E8174D] transition-colors duration-200">
                    {title}
                  </h2>
                  <svg
                    className="shrink-0 mt-0.5 opacity-30 group-hover:opacity-100 group-hover:text-[#E8174D] transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#a0a0a0" }}>
                  {description}
                </p>
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-[1.2px] px-2 py-0.5 rounded-full border"
                  style={{ borderColor: "rgba(232,23,77,0.2)", color: "#E8174D", backgroundColor: "rgba(232,23,77,0.06)" }}
                >
                  {audience}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-xs text-center"
          style={{ color: "#606060" }}
        >
          Questions? Contact us at{" "}
          <a href="mailto:clickandcast25@gmail.com" style={{ color: "#E8174D" }}>
            clickandcast25@gmail.com
          </a>
        </motion.p>
      </div>
    </div>
  );
}
