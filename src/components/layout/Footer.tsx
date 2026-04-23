import Link from "next/link";
import Image from "next/image";

const socials = [
  { href: "https://www.instagram.com/clickandcastinc/", label: "Instagram" },
  { href: "https://www.facebook.com/clickandcastinc", label: "Facebook" },
  { href: "https://www.tiktok.com/@clickandcastinc", label: "TikTok" },
  { href: "https://www.youtube.com/@ClickAndCast", label: "YouTube" },
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
    <footer
      className="border-t"
      style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "#000000" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-horizontal-white.png"
                alt="Click & Cast Inc"
                width={180}
                height={41}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs" style={{ color: "#a0a0a0" }}>
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
                  className="text-xs font-semibold uppercase tracking-[1.4px] transition-colors hover:text-[#E8174D]"
                  style={{ color: "#a0a0a0" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4
                className="text-xs font-semibold uppercase tracking-[1.4px] mb-4"
                style={{ color: "#a0a0a0" }}
              >
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm transition-colors hover:text-[#E8174D]"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: "rgba(65,65,65,0.8)", color: "#a0a0a0" }}
        >
          <span>© {new Date().getFullYear()} Click & Cast Inc. All rights reserved.</span>
          <span>Built with precision. Delivered with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
