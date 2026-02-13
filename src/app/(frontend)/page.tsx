import HeroSection from "@/components/home/HeroSection";
import EventsTicker from "@/components/home/EventsTicker";
import IntroSection from "@/components/home/IntroSection";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import EventsTimeline from "@/components/home/EventsTimeline";
import HighlightsGallery from "@/components/home/HighlightsGallery";
import FeaturedSpeakers from "@/components/home/FeaturedSpeakers";
import SponsorsSection from "@/components/home/SponsorsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventsTicker />
      <ProgramsGrid />
      <EventsTimeline />
      <HighlightsGallery />
      <FeaturedSpeakers />
      <SponsorsSection />
      <IntroSection />
      <CTASection />
    </>
  );
}
