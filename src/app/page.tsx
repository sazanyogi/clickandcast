import Hero from "@/components/sections/Hero";
import DualEntry from "@/components/sections/DualEntry";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TrustSection from "@/components/sections/TrustSection";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DualEntry />
      <ServicesPreview />
      <TrustSection />
      <CTA />
    </>
  );
}
