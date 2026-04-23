import Hero from "@/components/sections/Hero";
import DualEntry from "@/components/sections/DualEntry";
import ServicesPreview from "@/components/sections/ServicesPreview";
import AboutSection from "@/components/sections/AboutSection";
import TrustSection from "@/components/sections/TrustSection";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DualEntry />
      <ServicesPreview />
      <TrustSection />
      <CTA />
    </>
  );
}
