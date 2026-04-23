"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    href: "https://www.instagram.com/clickandcastinc/",
    label: "Instagram",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/clickandcastinc",
    label: "Facebook",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@clickandcastinc",
    label: "TikTok",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@ClickAndCast",
    label: "YouTube",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
  },
];

const links = {
  Company: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms & Conditions" },
    { href: "/legal/wedding-addendum", label: "Wedding Addendum" },
    { href: "/legal/event-addendum", label: "Event Addendum" },
    { href: "/legal", label: "All Documents →" },
  ],
};

function HoverLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <Link
        href={href}
        className="relative inline-block px-2 py-1 rounded-[4px] text-sm transition-colors duration-200"
        style={{ color: hovered ? "#ffffff" : "rgba(255,255,255,0.7)" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.span
              layoutId={`footer-hover-${href}`}
              className="absolute inset-0 rounded-[4px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(65,65,65,0.8)",
              }}
            />
          )}
        </AnimatePresence>
        <span className="relative z-10">{label}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-horizontal-white.png"
                alt="Click & Cast Inc"
                width={600}
                height={138}
                style={{ height: "36px", width: "auto" }}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#a0a0a0" }}>
              Rebranded. Recharged. Ready to create. Where creative storytelling meets technical
              precision.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {socials.map(({ href, label, icon }) => (
                <SocialLink key={label} href={href} label={label} icon={icon} />
              ))}
            </div>
          </div>

          {/* Link columns — 2 cols on mobile, 1 each on md */}
          <div className="grid grid-cols-2 md:contents gap-10">
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-xs font-semibold uppercase tracking-[1.4px] mb-3 px-2"
                style={{ color: "#a0a0a0" }}
              >
                {heading}
              </h4>
              <ul className="space-y-0.5">
                {items.map(({ href, label }) => (
                  <HoverLink key={label} href={href} label={label} />
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t text-center text-xs"
          style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0" }}
        >
          © {new Date().getFullYear()} Click & Cast Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative px-2.5 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-[1.4px] transition-colors duration-200"
      style={{ color: hovered ? "#E8174D" : "#a0a0a0" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="absolute inset-0 rounded-[4px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{
              backgroundColor: "rgba(232,23,77,0.08)",
              border: "1px solid rgba(232,23,77,0.25)",
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10 flex items-center gap-1.5">{icon}{label}</span>
    </a>
  );
}
