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
  { href: "/contact", label: "Contact" },
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

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[rgba(65,65,65,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

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
              style={{ height: "44px", width: "auto" }}
            />
          </Link>
        </motion.div>

        {/* Desktop links with sliding box highlight */}
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
                {/* Sliding box highlight */}
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

        {/* CTA */}
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

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden backdrop-blur-md border-b px-6"
            style={{ backgroundColor: "rgba(0,0,0,0.98)", borderColor: "rgba(65,65,65,0.8)" }}
          >
            <motion.ul
              className="flex flex-col gap-1 pt-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {links.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                >
                  <Link
                    href={href}
                    className={`block px-3 py-2.5 rounded-[4px] text-base font-semibold uppercase tracking-[1.4px] transition-colors ${
                      pathname === href
                        ? "text-[#E8174D] bg-[rgba(232,23,77,0.08)]"
                        : "text-white hover:text-[#E8174D] hover:bg-[rgba(255,255,255,0.04)]"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="pb-6 mt-4"
            >
              <Link
                href="/contact"
                className="w-full flex items-center justify-center text-white text-sm font-semibold px-4 py-2.5 rounded-[4px] transition-all hover:opacity-80"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(65,65,65,0.8)" }}
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
