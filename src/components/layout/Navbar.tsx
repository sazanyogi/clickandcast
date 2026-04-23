"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
        <Link
          href="/"
          className="flex items-center gap-2 group"
          style={{ color: "inherit" }}
        >
          <span className="text-[#faff69] font-black text-xl tracking-tight">
            Click<span className="text-white">&</span>Cast
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-[1.4px] hidden sm:block"
            style={{ color: "#a0a0a0" }}
          >
            Inc
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-semibold uppercase tracking-[1.4px] transition-colors ${
                  pathname === href
                    ? "text-[#faff69]"
                    : "text-[#a0a0a0] hover:text-[#faff69]"
                }`}
                style={{ color: pathname === href ? "#faff69" : undefined }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — Forest Green */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-[4px] transition-all duration-200 hover:opacity-90"
          style={{
            backgroundColor: "#166534",
            border: "1px solid #141414",
          }}
        >
          Get a Quote
        </Link>

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
      {open && (
        <div
          className="md:hidden backdrop-blur-md border-b px-6 pb-6"
          style={{
            backgroundColor: "rgba(0,0,0,0.98)",
            borderColor: "rgba(65,65,65,0.8)",
          }}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-semibold uppercase tracking-[1.4px] transition-colors block ${
                    pathname === href ? "text-[#faff69]" : "text-white hover:text-[#faff69]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 w-full flex items-center justify-center text-white text-sm font-semibold px-4 py-2.5 rounded-[4px] transition-all hover:opacity-90"
            style={{ backgroundColor: "#166534", border: "1px solid #141414" }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
