import Link from "next/link";

const socials = [
  { href: "https://youtube.com/@clickandcast", label: "YouTube" },
  { href: "https://instagram.com/clickandcast", label: "Instagram" },
  { href: "https://facebook.com/clickandcast", label: "Facebook" },
  { href: "https://tiktok.com/@clickandcast", label: "TikTok" },
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
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/wedding-addendum", label: "Wedding Addendum" },
    { href: "/legal/event-addendum", label: "Event Addendum" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-primary font-bold text-xl tracking-tight">
              Click<span className="text-foreground">&</span>Cast{" "}
              <span className="text-muted-foreground text-sm font-normal">Inc</span>
            </Link>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-xs">
              Rebranded. Recharged. Ready to create. Where creative storytelling meets technical
              precision.
            </p>
            <div className="flex gap-4 mt-5">
              {socials.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Click & Cast Inc. All rights reserved.</span>
          <span>Built with precision. Delivered with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
