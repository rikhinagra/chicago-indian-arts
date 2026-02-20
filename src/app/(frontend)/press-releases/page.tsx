"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Newspaper, ArrowRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const pressReleases = [
  {
    date: "February 2026",
    title: "Chicago Indian Arts Announces Exciting 2026 Season Lineup",
    excerpt:
      "Chicago Indian Collective Arts unveils its most ambitious season yet, featuring Vaarta Literature Festival, Prasang Fashion Innovation Show, and Varnam Photography & Wildlife Exhibition.",
    link: "#",
  },
  {
    date: "January 2026",
    title: "Prasang Fashion Innovation Show — Call for Designers",
    excerpt:
      "Chicago Indian Arts invites emerging and established fashion designers to participate in Prasang, a celebration of Indian fashion innovation blending traditional craftsmanship with contemporary design.",
    link: "#",
  },
  {
    date: "December 2025",
    title: "Year in Review: A Growing Community of Art Lovers",
    excerpt:
      "Looking back at an incredible year of cultural celebrations, community building, and artistic excellence. Chicago Indian Arts reached over 10,000 cumulative attendees across all events.",
    link: "#",
  },
  {
    date: "October 2025",
    title: "Varnam Photography Exhibition Announced for 2026",
    excerpt:
      "The third edition of Varnam, our photography and wildlife exhibition, is confirmed for 2026. Exact dates will be announced soon. Submissions for featured photographers are now open.",
    link: "#",
  },
];

export default function PressReleasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="press-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-8%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            left: "-5%",
            width: "350px",
            height: "350px",
            background:
              "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10"
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
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
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
            }
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTag>Press</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Press{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Releases
              </strong>
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
              Stay updated with the latest news, announcements, and updates
              from Chicago Indian Collective Arts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases List */}
      <section
        data-section="press-main"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="flex items-center"
            style={{ gap: "0.75rem", marginBottom: "2.5rem" }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(212,175,55,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Newspaper size={20} color="#d4af37" />
            </div>
            <SectionTag>Latest News</SectionTag>
          </div>

          {pressReleases.map((release, i) => (
            <FadeInSection key={release.title} delay={i * 0.1}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  padding: "2rem",
                  marginBottom: "1.5rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#d4af37";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#cd5c5c",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "0.6rem",
                  }}
                >
                  {release.date}
                </p>
                <h3
                  className="font-heading font-semibold"
                  style={{
                    fontSize: "1.2rem",
                    color: "#1a1a1a",
                    marginBottom: "0.8rem",
                    lineHeight: 1.4,
                  }}
                >
                  {release.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#666",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {release.excerpt}
                </p>
                {release.link && release.link !== "#" && (
                  <a
                    href={release.link}
                    className="inline-flex items-center"
                    style={{
                      color: "#d4af37",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      gap: "0.3rem",
                      transition: "gap 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.gap = "0.6rem")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.gap = "0.3rem")
                    }
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        data-section="press-cta"
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
              className="font-heading"
              style={{
                fontSize: "2.5rem",
                fontWeight: 300,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Media Inquiries
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Are you a journalist or content creator? Apply for media
              accreditation to cover our events, or reach out for press
              inquiries and interviews.
            </p>
            <div
              className="flex items-center justify-center"
              style={{ gap: "1rem", flexWrap: "wrap" }}
            >
              <Link
                href="/media-accreditation"
                className="inline-block font-semibold uppercase"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1a1a1a",
                  padding: "0.85rem 2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1.5px",
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
                Apply for Accreditation
              </Link>
              <Link
                href="/contact"
                className="inline-block font-semibold uppercase"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "0.85rem 2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1.5px",
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#1a1a1a";
                  e.currentTarget.style.borderColor = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
