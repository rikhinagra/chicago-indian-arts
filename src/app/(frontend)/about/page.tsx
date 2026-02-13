"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Users, Palette, Globe, Quote } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const objectives = [
  {
    icon: BookOpen,
    title: "Where Stories Meet the Soul of India",
    description:
      "Curate and host an annual Literature and Film Festival that showcases Indian literary, cinematic and artistic excellence featuring local, national and international talent.",
  },
  {
    icon: Users,
    title: "Rooted in Heritage, Alive in Chicago",
    description:
      "Create platforms for emerging and underrepresented voices within Indian diaspora, youth, artists through workshops, residencies and mentorship.",
  },
  {
    icon: Palette,
    title: "Bridging Cultures, Inspiring Creators",
    description:
      "Preserve and promote classical, folk and contemporary Indian art forms making them accessible to the audience.",
  },
  {
    icon: Globe,
    title: "Celebrating Indian Arts, Creating Global Impact",
    description:
      "Build an inclusive cultural archive that documents Indian-American experience in Chicago through verbal histories, publications and multimedia storytelling.",
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "Chicago Indian Arts was established with a vision to celebrate Indian culture in the heart of Chicago." },
  { year: "2022", title: "First Vaarta", description: "Our inaugural literature festival drew over 500 attendees and featured renowned Indian authors." },
  { year: "2023", title: "Prasang Launch", description: "Expanded into fashion innovation with the launch of Prasang — showcasing Indian design." },
  { year: "2024", title: "Varnam Begins", description: "Photography & wildlife program added as our third pillar celebrating visual storytelling." },
  { year: "2025", title: "Growing Impact", description: "Reached 10,000+ cumulative attendees across all programs with national recognition." },
  { year: "2026", title: "Looking Ahead", description: "Bigger events, new partnerships, and deeper community impact on the horizon." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="about-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 5rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        {/* Decorative Elements */}
        <div
          className="absolute"
          style={{
            top: "-15%",
            left: "-5%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            right: "-5%",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10"
          style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
              textDecoration: "none",
              marginBottom: "2rem",
              transition: "color 0.3s ease",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTag>About Us</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Our <strong className="font-bold" style={{ color: "#d4af37" }}>Story</strong>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "650px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Chicago Indian Arts is a non-profit organization dedicated to celebrating
              and preserving the rich cultural heritage of India while fostering
              meaningful connections within the Chicago community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section
        data-section="about-mission"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          data-section="about-mission-grid"
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
          }}
        >
          <FadeInSection>
            <SectionTag>Mission</SectionTag>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.2rem", lineHeight: 1.3, marginBottom: "1.2rem", color: "#1a1a1a" }}
            >
              Bridging Cultures Through Arts
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#666" }}>
              To educate, preserve and promote the rich tapestry of Indian arts, literature,
              cinema, fashion, music and dance in the heart of Chicago empowering voices,
              fostering cross cultural dialogue and building vibrant platforms for community
              expression and creative exchange.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <SectionTag>Vision</SectionTag>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.2rem", lineHeight: 1.3, marginBottom: "1.2rem", color: "#1a1a1a" }}
            >
              A World Connected by Art
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#666" }}>
              To be a leading cultural force that connects generations and communities through
              transformative power of Indian art, stories and traditions re-imagined in a global
              context, rooted in heritage and thriving in diversity.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Objectives Section */}
      <section
        data-section="about-objectives"
        style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3rem" }}>
            <SectionTag>Objectives</SectionTag>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
            >
              What Drives Us
            </h2>
          </FadeInSection>

          <div
            data-section="about-objectives-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <FadeInSection key={obj.title} delay={i * 0.1}>
                  <div
                    style={{
                      padding: "2rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <Icon size={24} color="#d4af37" />
                    </div>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1.15rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.8rem" }}
                    >
                      {obj.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#666" }}>
                      {obj.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Journey Section */}
      <section
        data-section="about-timeline"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3rem" }}>
            <SectionTag>Journey</SectionTag>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
            >
              Our Growth Story
            </h2>
          </FadeInSection>

          <div style={{ position: "relative" }}>
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                backgroundColor: "#e0e0e0",
                transform: "translateX(-50%)",
              }}
            />

            {milestones.map((m, i) => (
              <FadeInSection key={m.year} delay={i * 0.08}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 60px 1fr",
                    gap: "1.5rem",
                    marginBottom: "2.5rem",
                    position: "relative",
                  }}
                >
                  {/* Left Content (even items) / Empty (odd items) */}
                  <div
                    style={{
                      textAlign: i % 2 === 0 ? "right" : "left",
                      order: i % 2 === 0 ? 1 : 3,
                    }}
                  >
                    <div
                      className="font-heading"
                      style={{ fontSize: "2.2rem", fontWeight: 700, color: "#d4af37", marginBottom: "0.3rem" }}
                    >
                      {m.year}
                    </div>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.3rem" }}
                    >
                      {m.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.6 }}>
                      {m.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      paddingTop: "0.6rem",
                      order: 2,
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#cd5c5c",
                        border: "4px solid #ffffff",
                        boxShadow: "0 0 0 3px #faf8f3",
                      }}
                    />
                  </div>

                  {/* Empty side */}
                  <div style={{ order: i % 2 === 0 ? 3 : 1 }} />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section
        data-section="about-founder"
        style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="about-founder-grid"
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Founder Image */}
          <FadeInSection>
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: "400px",
                height: "400px",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0 16px 48px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/images/founder.webp"
                alt="Jigar Shah - Founder of Chicago Indian Arts"
                fill
                className="object-cover"
                style={{ objectPosition: "top center", transition: "transform 0.5s ease" }}
                sizes="(max-width: 1024px) 100vw, 450px"
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </FadeInSection>

          {/* Founder Bio */}
          <FadeInSection delay={0.15}>
            <SectionTag>Meet the Founder</SectionTag>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, marginBottom: "1.5rem", color: "#1a1a1a" }}
            >
              Where Ideas Meet Culture
            </h2>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666", marginBottom: "1.2rem" }}>
              Jigar Shah is a visionary corporate executive and creative innovator. He is
              known for transforming ideas into interactive and meaningful creations. He
              has been a driving force in uplifting Chicago&apos;s Indian arts ecosystem for
              over two decades building platforms, nurturing artists and shaping cultural dialogue.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666", marginBottom: "1.2rem" }}>
              He has successfully run and volunteered at community events, Chicago South Asian
              Film Festival, and has served as advisory board to non-profits.
            </p>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666", marginBottom: "1.2rem" }}>
              His mission is to bring people together to learn their stories, unlock their
              potential and create a wave of arts &amp; culture in Chicago and across the globe.
            </p>
            <div
              className="font-heading italic"
              style={{ fontSize: "1.15rem", color: "#cd5c5c", marginTop: "1.5rem" }}
            >
              — Jigar Shah, Founder
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Founder Personal Message / Quote Section */}
      <section
        data-section="about-quote"
        style={{
          padding: "5rem 3rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Quote size={28} color="#d4af37" />
              </div>
            </div>
            <h3
              className="font-heading"
              style={{ fontSize: "1rem", fontWeight: 600, color: "#d4af37", marginBottom: "1.5rem", letterSpacing: "1.5px", textTransform: "uppercase" }}
            >
              A Message from the Founder
            </h3>
            <p
              className="font-heading italic"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1rem",
              }}
            >
              The stories of India shaped who I am today. Growing up in Gujarat, I learned about
              resilience, coexistence, and community through the stories around me.
            </p>
            <p
              className="font-heading italic"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1rem",
              }}
            >
              Chicago has since become home, given me friendship, inspiration, and opportunity.
              Now, it&apos;s my turn to give back.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2rem",
              }}
            >
              Introducing the Chicago Indian Arts — a space for stories, ideas, and
              cultures to meet and be shared.
            </p>
            <div style={{ fontSize: "0.9rem", color: "#d4af37", fontWeight: 600 }}>
              — Jigar Shah
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section
        data-section="about-cta"
        style={{
          padding: "5rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff", marginBottom: "1rem" }}
            >
              Join Our Community
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.95)",
                marginBottom: "2rem",
              }}
            >
              Whether you&apos;re an artist, patron, or simply someone who loves Indian
              culture — there&apos;s a place for you here.
            </p>
            <Link
              href="/register"
              style={{
                display: "inline-block",
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                padding: "1rem 2.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a1a1a";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#1a1a1a";
              }}
            >
              Get Involved
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
