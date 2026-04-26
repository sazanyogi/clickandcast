import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import ChatBot from "@/components/ui/ChatBot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Click & Cast Inc — Rebranded. Recharged. Ready to Create.",
  description:
    "Click & Cast is a dual-force agency where creative storytelling meets technical precision. Live streaming, photography, podcast production, and IT development.",
  openGraph: {
    title: "Click & Cast Inc",
    description: "Organized execution with zero compromise on creativity.",
    type: "website",
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QFLTXPCLDP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QFLTXPCLDP');
          `}
        </Script>
        <SmoothScroll />
        <SpotlightCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
