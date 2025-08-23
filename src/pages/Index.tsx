import { HeroSection } from "@/components/HeroSection";
import { TeamSection } from "@/components/TeamSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TeamSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
