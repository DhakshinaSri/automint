import HeroSection from "@/components/home-components/HeroSection";
import IntroSection from "@/components/home-components/IntroSection";
import OurStory from "@/components/home-components/OurStory";

export default function Home() {
  return (
    <div className="pt-20">
      <HeroSection />
      <IntroSection />
      <OurStory />
    </div>
  );
}