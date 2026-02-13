import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export default function FounderSection() {
  return (
    <section
      id="about" data-section="founder"
      style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}
    >
      <div
        data-section="founder-grid" className="grid grid-cols-1 lg:grid-cols-2 items-center"
        style={{ gap: "3.5rem", maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Text */}
        <FadeInSection>
          <SectionTag>Meet the Founder</SectionTag>
          <h2
            data-section="founder-heading" className="font-heading font-light"
            style={{ fontSize: "2.5rem", lineHeight: 1.3, marginBottom: "1.5rem", color: "#1a1a1a" }}
          >
            Where Ideas Meet Culture
          </h2>
          <p data-section="founder-text" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666666", marginBottom: "1.2rem" }}>
            Jigar Shah is a visionary corporate executive and creative innovator,
            known for transforming ideas into interactive and meaningful creations.
            He has been a driving force in uplifting Chicago&apos;s Indian arts
            ecosystem for over two decades — building platforms, nurturing artists,
            and shaping cultural dialogue.
          </p>
          <p data-section="founder-text" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666666", marginBottom: "1.2rem" }}>
            He has successfully run and volunteered at community events, the Chicago
            South Asian Film Festival, and has served on the advisory board of
            non-profits.
          </p>
          <p data-section="founder-text" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666666", marginBottom: "1.2rem" }}>
            His mission is to bring people together to learn their stories, unlock
            their potential, and create a wave of arts &amp; culture in Chicago and
            across the globe.
          </p>
          <div
            className="font-heading italic"
            style={{ fontSize: "1.15rem", color: "#cd5c5c", marginTop: "1.5rem" }}
          >
            — Jigar Shah, Founder
          </div>
        </FadeInSection>

        {/* Image */}
        <FadeInSection direction="right">
          <div
            data-section="founder-image" className="group relative overflow-hidden"
            style={{
              height: "550px",
              maxWidth: "450px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "16px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src="/images/founder.webp"
              alt="Jigar Shah - Founder of Chicago Indian Arts"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "top center" }}
              sizes="(max-width: 1024px) 100vw, 450px"
              priority
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
