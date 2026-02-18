"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, Heart } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const highlights = [
  {
    icon: Heart,
    title: "A Heartfelt Welcome in the Midwest",
    description:
      "LitFest 2026 isn\u2019t just an event, it\u2019s a homecoming for the soul. A space where the Indian diaspora in the Midwest can reconnect with the language, rhythm, and emotion of their literary roots.",
  },
  {
    icon: BookOpen,
    title: "From Ancient Grantha to Modern Voices",
    description:
      "From the sacred verses of the Vedas to bold contemporary fiction, Vaarta celebrates the full arc of Indian literature in all its languages, genres, and forms.",
  },
  {
    icon: Globe,
    title: "Weaving Connections Through Words",
    description:
      "Through panels, readings, and conversations, Vaarta bridges generations and geographies, connecting established authors with emerging voices, and local readers with global stories.",
  },
];

const whyNow = [
  "A growing diaspora hungry for authentic cultural connection and literary exchange.",
  "A deep curiosity about India\u2019s evolving literary landscape, from ancient epics to modern storytelling.",
  "A yearning for a platform where writers, readers, and dreamers can gather, listen, and be inspired.",
];

export default function VaartaPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="vaarta-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1771240956/vaarta-banner_bdvgi3.webp"
            alt="Vaarta Literature Festival"
            fill
            className="object-cover"
            style={{ objectPosition: "center 85%" }}
            priority
          />
          {/* Left-side gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 35%, transparent 65%)",
            }}
          />
        </div>

        <div
          className="relative z-10"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10rem 3rem 3rem",
            width: "100%",
          }}
        >
          <FadeInSection>
            <Link
              href="/"
              className="inline-flex items-center"
              style={{
                gap: "0.5rem",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.85rem",
                textDecoration: "none",
                marginBottom: "2rem",
                transition: "color 0.3s ease",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.9)",
              }}
            >
              Literature Festival
            </div>

            <h1
              data-section="vaarta-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              VAARTA
            </h1>

            <p
              data-section="vaarta-hero-subtitle"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "600px",
                marginBottom: "0.8rem",
                fontStyle: "italic",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Where stories become bridges
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "550px",
                marginBottom: "2rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Chicago Indian Literature Festival. May 30, 2026
            </p>

            <Link
              href="/register"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.85rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Register Interest
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* About Vaarta */}
      <section
        data-section="vaarta-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <FadeInSection>
            <SectionTag>About Vaarta</SectionTag>
            <h2
              data-section="vaarta-heading"
              className="font-heading font-light"
              style={{
                fontSize: "2.8rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Stories &amp; Conversations
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.5rem",
              }}
            >
              Vaarta means stories and conversations. Indian literature has been
              passed down through many generations through various forms,
              from ancient scriptures and epics to modern novels and poetry.
              This literary heritage is vast and encompasses multiple languages,
              genres, and traditions, reflecting the diverse cultures and philosophies
              of the Indian subcontinent.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
              }}
            >
              Through Vaarta, we aim to celebrate, preserve, and share this incredible
              literary tradition with the people of Chicago and the Midwest,
              creating a space where words connect hearts across continents.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Image */}
      <section
        data-section="vaarta-image"
        style={{ padding: "0 3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "4px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              overflow: "hidden",
            }}
          >
            <Image
              src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770921509/vaarta01_aaajid.webp"
              alt="Vaarta Literature Festival Gathering"
              width={1920}
              height={1080}
              className="w-full"
              style={{ display: "block", height: "auto" }}
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        </FadeInSection>
      </section>

      {/* Why LitFest 2026 */}
      <section
        data-section="vaarta-why"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Our Heart&apos;s Calling</SectionTag>
              <h2
                data-section="vaarta-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                }}
              >
                Why Chicago Indian Lit Fest Matters
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {whyNow.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div
                  className="flex items-start"
                  style={{
                    gap: "1.2rem",
                    padding: "1.5rem 2rem",
                    backgroundColor: "#ffffff",
                    borderLeft: "4px solid #d4af37",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212,175,55,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#d4af37",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      marginTop: "0.1rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "#444444",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="vaarta-quote"
        style={{
          padding: "3rem 3rem",
          backgroundColor: "#1a1a1a",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                color: "#d4af37",
                marginBottom: "1rem",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              className="font-heading italic"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.5rem",
              }}
            >
              Where there is literature, there is dialogue. Where there is
              dialogue, there is understanding. And where there is understanding,
              there is community.
            </p>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </FadeInSection>
      </section>

      {/* Highlights */}
      <section
        data-section="vaarta-highlights"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>What Awaits You</SectionTag>
              <h2
                data-section="vaarta-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                The Vaarta Experience
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="vaarta-highlights-grid"
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "2rem" }}
          >
            {highlights.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.15}>
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: "#faf8f3",
                    borderTop: "3px solid #d4af37",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(205,92,92,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <item.icon size={22} style={{ color: "#cd5c5c" }} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: "#666666",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-section="vaarta-cta"
        style={{
          padding: "3rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              className="font-heading font-light"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Be Part of the Story
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Register your interest for Vaarta 2026, Chicago&apos;s first
              Indian Literature Festival. May 30, 2026.
            </p>
            <Link
              href="/register"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                padding: "0.85rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
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
              Register Now
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
