import HeroSection from "@/components/home-components/HeroSection";
import IntroSection from "@/components/home-components/IntroSection";
import OurStory from "@/components/home-components/OurStory";
import ServiceSection from "@/components/home-components/ServiceSection";
import CTAsection from "@/components/home-components/ctasection";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <IntroSection />
      <OurStory />
      <ServiceSection />
      <CTAsection />
    </div>
  );
}