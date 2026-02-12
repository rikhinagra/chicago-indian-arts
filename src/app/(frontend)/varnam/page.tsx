import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Varnam — Photography & Wildlife | Chicago Indian Arts",
  description:
    "Varnam brings together photographers and conservationists to celebrate India's cultural landscapes and diverse wildlife through exhibitions, workshops, and visual storytelling.",
};

const features = [
  {
    title: "Photography Exhibitions",
    description: "Curated collections from India's finest photographers, showcasing landscapes, portraits, wildlife, and cultural moments.",
  },
  {
    title: "Wildlife Conservation",
    description: "Talks and panels with conservationists documenting India's endangered ecosystems and the role of photography in advocacy.",
  },
  {
    title: "Workshops & Masterclasses",
    description: "Hands-on sessions covering landscape, portrait, and wildlife photography techniques from acclaimed professionals.",
  },
  {
    title: "Visual Storytelling",
    description: "Photo essays and documentary screenings that use the camera as a tool for cultural preservation and social impact.",
  },
];

export default function VarnamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=1920&q=80"
            alt="Varnam Photography & Wildlife"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-accent-terracotta/50" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-white">
          <FadeInSection>
            <div className="text-sm tracking-[3px] uppercase text-accent-gold mb-4 font-semibold">
              Photography &amp; Wildlife
            </div>
            <h1 className="font-heading text-5xl lg:text-[6rem] font-light leading-[1.05] mb-6">
              VARNAM
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-[600px] mb-8 opacity-95">
              Where images become stories and perspectives come alive. August 10-12,
              2026 at the Art Institute of Chicago.
            </p>
            <Button href="/register" variant="primary">
              Register Now
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[900px] mx-auto text-center">
          <SectionTag>About Varnam</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light mb-8 text-primary-dark">
            Seeing India Through the Lens
          </h2>
          <p className="text-lg leading-relaxed text-text-light mb-6">
            Varnam — meaning &quot;color&quot; or &quot;description&quot; — is our
            photography and wildlife program. It celebrates the visual richness of
            India through exhibitions, talks, workshops, and immersive visual
            storytelling experiences.
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            From the snow leopards of Ladakh to the sacred ghats of Varanasi, Varnam
            brings India&apos;s breathtaking visual diversity to Chicago.
          </p>
        </FadeInSection>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection className="text-center mb-16">
            <SectionTag>Program</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
              What Varnam Offers
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <FadeInSection key={f.title} delay={i * 0.1}>
                <div className="bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-dark">
                    {f.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{f.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="text-center mb-12">
          <SectionTag>Gallery</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
            Featured Works
          </h2>
        </FadeInSection>
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=600&q=80",
            "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
            "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=600&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
          ].map((src, i) => (
            <FadeInSection key={i} delay={i * 0.06}>
              <div className="group relative h-[200px] lg:h-[280px] overflow-hidden">
                <Image src={src} alt={`Varnam photo ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-primary-dark text-white text-center">
        <FadeInSection className="max-w-[700px] mx-auto">
          <h2 className="font-heading text-3xl lg:text-5xl font-light mb-6">
            Capture the Moment
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-90">
            Join Varnam 2026 as a photographer, exhibitor, or visitor.
          </p>
          <Button href="/register" variant="primary">
            Register Now
          </Button>
        </FadeInSection>
      </section>
    </>
  );
}
