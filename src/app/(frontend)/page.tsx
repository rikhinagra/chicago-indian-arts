import HeroSection from "@/components/home/HeroSection";
import EventsTicker from "@/components/home/EventsTicker";
import ProgramsGrid from "@/components/home/ProgramsGrid";
import EventsTimeline from "@/components/home/EventsTimeline";
import HighlightsGallery from "@/components/home/HighlightsGallery";
import FeaturedSpeakers from "@/components/home/FeaturedSpeakers";
import SponsorsSection from "@/components/home/SponsorsSection";
import CTASection from "@/components/home/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
        ]}
      />
      <HeroSection />
      {/* <EventsTicker /> — Hidden for now, will re-enable later if needed */}
      <ProgramsGrid />
      <EventsTimeline />
      <HighlightsGallery />
      <FeaturedSpeakers />
      <SponsorsSection />
      <CTASection />
    </>
  );
}
