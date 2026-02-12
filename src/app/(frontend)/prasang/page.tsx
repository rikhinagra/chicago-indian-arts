import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Prasang — Fashion Innovation | Chicago Indian Arts",
  description:
    "Prasang celebrates the intersection of traditional Indian textiles and contemporary fashion through runway shows, designer showcases, and networking events.",
};

const features = [
  {
    title: "Designer Runway",
    description: "Spectacular presentations from established and emerging Indian fashion designers blending heritage with innovation.",
  },
  {
    title: "Traditional Crafts",
    description: "Live demonstrations of weaving, embroidery, block printing, and other textile arts passed down through generations.",
  },
  {
    title: "Emerging Talent",
    description: "A dedicated spotlight for up-and-coming designers pushing the boundaries of Indian fashion.",
  },
  {
    title: "Networking Mixer",
    description: "Connect with designers, buyers, media, and fashion enthusiasts in an intimate post-show setting.",
  },
];

export default function PrasangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea41c795?w=1920&q=80"
            alt="Prasang Fashion Innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-accent-gold/50" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-white">
          <FadeInSection>
            <div className="text-sm tracking-[3px] uppercase text-accent-gold mb-4 font-semibold">
              Fashion Innovation
            </div>
            <h1 className="font-heading text-5xl lg:text-[6rem] font-light leading-[1.05] mb-6">
              PRASANG
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-[600px] mb-8 opacity-95">
              Where tradition meets the runway. Experience Indian fashion&apos;s
              boldest voices at Navy Pier Grand Ballroom, May 20, 2026.
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
          <SectionTag>About Prasang</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light mb-8 text-primary-dark">
            Fashion as Cultural Expression
          </h2>
          <p className="text-lg leading-relaxed text-text-light mb-6">
            Prasang — meaning &quot;occasion&quot; or &quot;context&quot; — celebrates
            the rich tapestry of Indian fashion. From the intricate weaves of Banarasi
            silk to avant-garde contemporary design, Prasang brings India&apos;s
            fashion story to Chicago.
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            Our runway shows feature both established and emerging designers who honor
            textile traditions while pushing creative boundaries.
          </p>
        </FadeInSection>
      </section>

      {/* Features */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <FadeInSection className="text-center mb-16">
            <SectionTag>What to Expect</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
              The Prasang Experience
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

      {/* Gallery */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="text-center mb-12">
          <SectionTag>Gallery</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
            Past Prasang Moments
          </h2>
        </FadeInSection>
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "https://images.unsplash.com/photo-1558769132-cb1aea41c795?w=600&q=80",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80",
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
            "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=600&q=80",
          ].map((src, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="group relative h-[250px] lg:h-[300px] overflow-hidden">
                <Image src={src} alt={`Prasang event ${i + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 33vw" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 lg:px-12 text-white text-center"
        style={{ background: "linear-gradient(135deg, var(--color-accent-terracotta) 0%, var(--color-accent-gold) 100%)" }}
      >
        <FadeInSection className="max-w-[700px] mx-auto">
          <h2 className="font-heading text-3xl lg:text-5xl font-light mb-6">
            Walk the Runway with Us
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-95">
            Be part of Prasang 2026 — as a designer, sponsor, or guest.
          </p>
          <Button href="/register" variant="white">
            Register Now
          </Button>
        </FadeInSection>
      </section>
    </>
  );
}
