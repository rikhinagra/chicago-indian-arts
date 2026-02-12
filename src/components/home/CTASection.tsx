import FadeInSection from "@/components/ui/FadeInSection";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      id="register" data-section="cta"
      className="text-white text-center relative overflow-hidden"
      style={{
        padding: "5rem 3rem",
        background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
      }}
    >
      {/* Decorative circle */}
      <div
        className="absolute rounded-full"
        style={{
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
      />

      <FadeInSection className="relative z-10" style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <h2
          data-section="cta-heading" className="font-heading font-light"
          style={{ fontSize: "2.8rem", lineHeight: 1.2, marginBottom: "1.2rem", color: "#ffffff" }}
        >
          Be Part of the Story
        </h2>
        <p data-section="cta-text" style={{ fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem", color: "rgba(255,255,255,0.95)" }}>
          Join us in celebrating the richness of Indian arts and culture. Register now
          for our 2026 events and become part of our vibrant community.
        </p>
        <Button href="#" variant="white">
          Register for Events
        </Button>
      </FadeInSection>
    </section>
  );
}
