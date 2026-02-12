import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Chicago Indian Arts",
  description:
    "Learn about Chicago Indian Arts — our mission, vision, and the team behind our three signature programs celebrating Indian cultural heritage.",
};

const objectives = [
  {
    title: "Cultural Preservation",
    description:
      "Safeguarding and celebrating India's rich artistic traditions — from ancient literature to contemporary fashion and photography.",
  },
  {
    title: "Community Building",
    description:
      "Creating spaces where diverse communities in Chicago can connect through shared cultural experiences and artistic expression.",
  },
  {
    title: "Artistic Innovation",
    description:
      "Fostering the intersection of traditional Indian arts with contemporary creative practices, encouraging new forms of expression.",
  },
  {
    title: "Education & Outreach",
    description:
      "Making Indian arts accessible through workshops, exhibitions, and public programs that educate and inspire audiences of all backgrounds.",
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "Chicago Indian Arts was established with a vision to celebrate Indian culture." },
  { year: "2022", title: "First Vaarta", description: "Our inaugural literature festival drew over 500 attendees." },
  { year: "2023", title: "Prasang Launch", description: "Expanded into fashion with the launch of Prasang." },
  { year: "2024", title: "Varnam Begins", description: "Photography & wildlife program added as our third pillar." },
  { year: "2025", title: "Growing Impact", description: "Reached 10,000+ cumulative attendees across all programs." },
  { year: "2026", title: "Looking Ahead", description: "Bigger events, new partnerships, and deeper community impact." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[1200px] mx-auto text-center">
          <SectionTag>About Us</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4.5rem] font-light leading-[1.1] mb-8 text-primary-dark">
            Our Story
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed text-text-light max-w-[800px] mx-auto">
            Chicago Indian Arts is a non-profit organization dedicated to celebrating
            and preserving the rich cultural heritage of India while fostering
            meaningful connections within the Chicago community.
          </p>
        </FadeInSection>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInSection>
            <SectionTag>Mission</SectionTag>
            <h2 className="font-heading text-3xl lg:text-4xl font-light mb-6 text-primary-dark">
              Bridging Cultures Through Arts
            </h2>
            <p className="text-text-light leading-relaxed text-lg">
              We create immersive cultural experiences that bring India&apos;s artistic
              heritage to life in Chicago. Through literature, fashion, and
              photography, we build bridges between communities and foster
              understanding through the universal language of art.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <SectionTag>Vision</SectionTag>
            <h2 className="font-heading text-3xl lg:text-4xl font-light mb-6 text-primary-dark">
              A World Connected by Art
            </h2>
            <p className="text-text-light leading-relaxed text-lg">
              We envision a future where Indian arts are celebrated globally, where
              cultural exchange is the norm, and where every individual has access to
              the transformative power of artistic expression.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Objectives</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((obj, i) => (
              <FadeInSection key={obj.title} delay={i * 0.1}>
                <div className="bg-white p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h3 className="font-heading text-2xl font-semibold mb-4 text-primary-dark">
                    {obj.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{obj.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <SectionTag>Journey</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
              Our Growth Story
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-cream lg:-translate-x-1/2" />
            {milestones.map((m, i) => (
              <FadeInSection key={m.year} delay={i * 0.08}>
                <div className="relative pl-20 lg:pl-0 mb-12 lg:grid lg:grid-cols-[1fr_60px_1fr] lg:gap-8">
                  <div className={`lg:text-right ${i % 2 === 1 ? "lg:order-3 lg:text-left" : ""}`}>
                    <div className="font-heading text-4xl font-bold text-accent-gold mb-2">
                      {m.year}
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary-dark mb-2">
                      {m.title}
                    </h3>
                    <p className="text-text-light text-sm">{m.description}</p>
                  </div>
                  <div className="hidden lg:flex items-start justify-center pt-3 lg:order-2">
                    <div className="w-4 h-4 bg-accent-terracotta rounded-full border-4 border-white shadow-[0_0_0_3px_var(--color-cream)]" />
                  </div>
                  <div className={`hidden lg:block ${i % 2 === 1 ? "lg:order-1" : ""}`} />
                  {/* Mobile dot */}
                  <div className="absolute left-6 top-3 lg:hidden w-4 h-4 bg-accent-terracotta rounded-full border-4 border-white shadow-[0_0_0_3px_var(--color-cream)]" />
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <SectionTag>The Founder</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light leading-[1.3] mb-8 text-primary-dark">
              A Vision Born from Heritage
            </h2>
            <p className="text-lg leading-relaxed text-text-light mb-6">
              The stories of India shaped who I am today. Growing up in Gujarat, I
              learned about resilience, coexistence, and community through the stories
              around me.
            </p>
            <p className="text-lg leading-relaxed text-text-light mb-6">
              Chicago has since become home, given me friendship, inspiration, and
              opportunity. Now, it&apos;s my turn to give back.
            </p>
            <div className="font-heading text-2xl italic text-accent-terracotta mt-8">
              — Founder, Chicago Indian Arts
            </div>
          </FadeInSection>
          <FadeInSection direction="right">
            <div className="relative h-[450px] lg:h-[550px] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Founder"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 lg:px-12 text-white text-center"
        style={{
          background: "linear-gradient(135deg, var(--color-accent-terracotta) 0%, var(--color-accent-gold) 100%)",
        }}
      >
        <FadeInSection className="max-w-[700px] mx-auto">
          <h2 className="font-heading text-3xl lg:text-5xl font-light mb-6">
            Join Our Community
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-95">
            Whether you&apos;re an artist, patron, or simply someone who loves Indian
            culture — there&apos;s a place for you here.
          </p>
          <Button href="/register" variant="white">
            Get Involved
          </Button>
        </FadeInSection>
      </section>
    </>
  );
}
