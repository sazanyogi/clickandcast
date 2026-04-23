"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/connect", label: "Connect" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.instagram.com/clickandcastinc/", label: "IG" },
  { href: "https://www.tiktok.com/@clickandcastinc", label: "TT" },
  { href: "https://www.youtube.com/@ClickAndCast", label: "YT" },
  { href: "https://www.facebook.com/clickandcastinc", label: "FB" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-black/95 backdrop-blur-md border-b border-[rgba(65,65,65,0.8)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-horizontal-white.png"
                alt="Click & Cast Inc"
                width={600}
                height={138}
                priority
                style={{ height: "40px", width: "auto" }}
              />
            </Link>
          </motion.div>

          {/* Desktop links */}
          <motion.ul
            className="hidden md:flex items-center gap-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
            }}
            onMouseLeave={() => setHovered(null)}
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              const isHovered = hovered === href;
              return (
                <motion.li
                  key={href}
                  className="relative"
                  variants={{
                    hidden: { opacity: 0, y: -12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  onMouseEnter={() => setHovered(href)}
                >
                  {isHovered && (
                    <motion.div
                      layoutId="nav-highlight"
                      className="absolute inset-0 rounded-[4px]"
                      style={{
                        backgroundColor: isActive ? "rgba(232,23,77,0.15)" : "rgba(255,255,255,0.06)",
                        border: isActive ? "1px solid rgba(232,23,77,0.3)" : "1px solid rgba(65,65,65,0.6)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Link
                    href={href}
                    className="relative z-10 block px-3 py-1.5 text-sm font-semibold uppercase tracking-[1.4px] transition-colors duration-200"
                    style={{ color: isActive ? "#E8174D" : isHovered ? "#ffffff" : "#a0a0a0" }}
                  >
                    {label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-[4px] transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: "#141414", border: "1px solid rgba(65,65,65,0.8)" }}
            >
              Get a Quote
            </Link>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative z-[60] text-white p-2 -mr-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "#000000" }}
          >
            {/* Crimson top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8174D]" />

            {/* Top glow */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: "#E8174D" }} />

            <div className="flex flex-col h-full pt-24 pb-12 px-8 justify-between">

              {/* Nav links */}
              <nav>
                <motion.ul className="space-y-1">
                  {links.map(({ href, label }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={href}
                        className="group flex items-center justify-between py-4 border-b"
                        style={{ borderColor: "rgba(65,65,65,0.5)" }}
                      >
                        <span
                          className="font-black uppercase tracking-tight transition-colors duration-200"
                          style={{
                            fontSize: "clamp(2rem, 8vw, 3rem)",
                            color: pathname === href ? "#E8174D" : "#ffffff",
                          }}
                        >
                          {label}
                        </span>
                        <span
                          className="text-sm font-semibold uppercase tracking-[1.4px] transition-colors duration-200"
                          style={{ color: pathname === href ? "#E8174D" : "rgba(65,65,65,0.8)" }}
                        >
                          0{links.findIndex(l => l.href === href) + 1}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full py-4 rounded-[4px] font-bold text-base uppercase tracking-[1.4px] transition-all duration-200"
                    style={{ backgroundColor: "#E8174D", color: "#000000" }}
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom: socials + tagline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55 }}
              >
                <p className="text-xs font-semibold uppercase tracking-[1.6px] mb-5" style={{ color: "#404040" }}>
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socials.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-[1.4px] border px-3 py-1.5 rounded-[4px] transition-colors duration-200"
                      style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0" }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
                <p className="mt-6 text-xs" style={{ color: "#333333" }}>
                  © {new Date().getFullYear()} Click & Cast Inc. · Brampton, Ontario
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
