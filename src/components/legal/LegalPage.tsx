"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface Section {
  heading?: string;
  body: string | string[];
  list?: string[];
  subSections?: { heading: string; body?: string; list?: string[] }[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  effectiveDate?: string;
  badge?: string;
  sections: Section[];
  contact?: { company: string; address: string; email: string };
}

export default function LegalPage({ title, subtitle, effectiveDate, badge, sections, contact }: LegalPageProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="border-b" style={{ borderColor: "rgba(65,65,65,0.8)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] mb-6"
              style={{ borderColor: "rgba(232,23,77,0.25)", backgroundColor: "rgba(232,23,77,0.06)", color: "#E8174D" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8174D]" />
              {badge}
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-black tracking-tight leading-none mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base max-w-2xl leading-relaxed"
              style={{ color: "#a0a0a0" }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            {effectiveDate && (
              <span className="text-xs font-semibold uppercase tracking-[1.4px]" style={{ color: "#a0a0a0" }}>
                Effective: {effectiveDate}
              </span>
            )}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] text-xs font-semibold uppercase tracking-[1.4px] border transition-colors duration-200 print:hidden"
              style={{
                borderColor: "rgba(65,65,65,0.8)",
                color: "#a0a0a0",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#E8174D";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
                (e.currentTarget as HTMLElement).style.color = "#a0a0a0";
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
              </svg>
              Print / Save as PDF
            </button>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.03 }}
          >
            {section.heading && (
              <h2 className="text-base font-black uppercase tracking-[1.4px] mb-4 flex items-center gap-3" style={{ color: "#E8174D" }}>
                <span className="w-5 h-px bg-[#E8174D]" />
                {section.heading}
              </h2>
            )}
            {typeof section.body === "string" ? (
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#c0c0c0" }}>{section.body}</p>
            ) : (
              section.body.map((p, j) => (
                <p key={j} className="text-sm leading-relaxed mb-3" style={{ color: "#c0c0c0" }}>{p}</p>
              ))
            )}
            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm" style={{ color: "#c0c0c0" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#E8174D" }} />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.subSections && (
              <div className="mt-4 space-y-6 pl-4 border-l" style={{ borderColor: "rgba(65,65,65,0.6)" }}>
                {section.subSections.map((sub, j) => (
                  <div key={j}>
                    <h3 className="text-xs font-bold uppercase tracking-[1.4px] mb-2" style={{ color: "#ffffff" }}>{sub.heading}</h3>
                    {sub.body && <p className="text-sm leading-relaxed mb-2" style={{ color: "#c0c0c0" }}>{sub.body}</p>}
                    {sub.list && (
                      <ul className="space-y-2">
                        {sub.list.map((item, k) => (
                          <li key={k} className="flex items-start gap-3 text-sm" style={{ color: "#c0c0c0" }}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#E8174D" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        {contact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border rounded-[4px] p-6"
            style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            <h2 className="text-xs font-black uppercase tracking-[1.4px] mb-3" style={{ color: "#E8174D" }}>Contact</h2>
            <p className="text-sm font-semibold text-white">{contact.company}</p>
            <p className="text-sm" style={{ color: "#a0a0a0" }}>{contact.address}</p>
            <a href={`mailto:${contact.email}`} className="text-sm" style={{ color: "#E8174D" }}>{contact.email}</a>
          </motion.div>
        )}
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          nav, footer { display: none !important; }
        }
      `}</style>
    </div>
  );
}
