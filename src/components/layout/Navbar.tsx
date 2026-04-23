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
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-primary font-bold text-xl tracking-tight">
            Click<span className="text-foreground">&</span>Cast
          </span>
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest hidden sm:block">
            Inc
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Get a Quote
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-base font-medium transition-colors hover:text-primary block ${
                    pathname === href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 w-full flex items-center justify-center bg-primary text-primary-foreground text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
