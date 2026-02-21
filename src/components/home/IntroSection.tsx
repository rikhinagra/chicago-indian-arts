import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export default function IntroSection() {
  return (
    <section data-section="intro" style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}>
      <FadeInSection className="text-center" style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
        <SectionTag>Our Mission</SectionTag>
        <h2
          data-section="section-heading" className="font-heading font-semibold"
          style={{ fontSize: "2.5rem", lineHeight: 1.3, marginBottom: "1.5rem", color: "#1a1a1a" }}
        >
          Bridging Cultures Through Arts
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#666666" }}>
          Chicago Indian Arts is dedicated to celebrating and preserving the rich
          cultural heritage of India while fostering meaningful connections within the
          Chicago community. Through our innovative programs, we create spaces where
          tradition meets contemporary expression.
        </p>
      </FadeInSection>
    </section>
  );
}
