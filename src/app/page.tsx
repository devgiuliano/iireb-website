import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <BenefitsSection />
        <GallerySection />
        <CommunitySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
