"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ─── types ─── */
interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}

/* ─── icons ─── */
const icons = {
  globe: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  whatsapp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.124 1.533 5.855L.057 23.494a.5.5 0 0 0 .609.61l5.717-1.499A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 0 1-5.192-1.452l-.374-.222-3.89 1.02 1.02-3.79-.244-.39A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  ),
  phone: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.1-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  youtube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  tiktok: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
    </svg>
  ),
};

/* ─── data ─── */
const companyLinks: LinkItem[] = [
  { href: "https://clickandcast.com", label: "Main Website", icon: icons.globe, external: true },
  { href: "https://www.youtube.com/@ClickAndCast", label: "YouTube Channel", icon: icons.youtube, external: true },
  { href: "https://www.facebook.com/clickandcastinc", label: "Facebook", icon: icons.facebook, external: true },
  { href: "https://www.instagram.com/clickandcastinc/", label: "Instagram", icon: icons.instagram, external: true },
  { href: "https://www.tiktok.com/@clickandcastinc", label: "TikTok", icon: icons.tiktok, external: true },
];

const amitLinks: LinkItem[] = [
  { href: "https://wa.me/14379874806", label: "Chat on WhatsApp", icon: icons.whatsapp, external: true },
  { href: "tel:+14379874806", label: "Call", icon: icons.phone },
  { href: "https://www.facebook.com/amit.dhakal.897177", label: "Facebook", icon: icons.facebook, external: true },
  { href: "https://www.instagram.com/amit_dhakal1/", label: "Instagram", icon: icons.instagram, external: true },
];

const sazanLinks: LinkItem[] = [
  { href: "https://wa.me/14374300348", label: "Chat on WhatsApp", icon: icons.whatsapp, external: true },
  { href: "tel:+14374300348", label: "Call", icon: icons.phone },
  { href: "https://sazan.com.np", label: "Personal Website", icon: icons.globe, external: true },
  { href: "https://www.facebook.com/real.sa2an/", label: "Facebook", icon: icons.facebook, external: true },
  { href: "https://www.instagram.com/real.sa2an/", label: "Instagram", icon: icons.instagram, external: true },
  { href: "https://www.youtube.com/@sazan-yogi", label: "YouTube", icon: icons.youtube, external: true },
];

/* ─── sub-components ─── */
function LinkButton({ href, label, icon, external, delay }: LinkItem & { delay: number }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 w-full px-4 py-3 rounded-[4px] border text-sm font-medium transition-all duration-200 group"
      style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.02)", color: "#c0c0c0" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,23,77,0.35)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(232,23,77,0.06)";
        (e.currentTarget as HTMLElement).style.color = "#ffffff";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(65,65,65,0.8)";
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.02)";
        (e.currentTarget as HTMLElement).style.color = "#c0c0c0";
      }}
    >
      <span className="text-[#E8174D]">{icon}</span>
      {label}
      <svg className="ml-auto opacity-30 group-hover:opacity-70 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </motion.a>
  );
}

function Section({ title, badge, links, baseDelay }: { title: string; badge: string; links: LinkItem[]; baseDelay: number }) {
  return (
    <div className="border rounded-[4px] p-5" style={{ borderColor: "rgba(65,65,65,0.8)", backgroundColor: "rgba(255,255,255,0.015)" }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-base">{badge}</span>
        <h2 className="text-sm font-black uppercase tracking-[1.4px] text-white">{title}</h2>
      </div>
      <div className="space-y-2">
        {links.map((link, i) => (
          <LinkButton key={link.label} {...link} delay={baseDelay + i * 0.06} />
        ))}
      </div>
    </div>
  );
}

/* ─── page ─── */
export default function ConnectPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link href="/">
          <Image
            src="/logo-horizontal-white.png"
            alt="Click & Cast Inc"
            width={600}
            height={138}
            style={{ height: "32px", width: "auto" }}
            priority
          />
        </Link>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-xs font-semibold uppercase tracking-[1.6px] mb-10"
        style={{ color: "#a0a0a0" }}
      >
        Rebranded. Recharged. Ready to Create.
      </motion.p>

      {/* Cards */}
      <div className="w-full max-w-sm space-y-4">
        {/* Company */}
        <Section
          title="Click & Cast Inc."
          badge="🎬"
          links={companyLinks}
          baseDelay={0.2}
        />

        {/* Manager */}
        <Section
          title="Amit Dhakal — Manager"
          badge="💼"
          links={amitLinks}
          baseDelay={0.45}
        />

        {/* Production Lead */}
        <Section
          title="Sazan Yogi — Production Lead"
          badge="🎥"
          links={sazanLinks}
          baseDelay={0.7}
        />
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="mt-10 text-xs"
        style={{ color: "#404040" }}
      >
        © {new Date().getFullYear()} Click & Cast Inc. · Brampton, Ontario
      </motion.p>
    </div>
  );
}
