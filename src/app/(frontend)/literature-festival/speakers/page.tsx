"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export default function SpeakersPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="speakers-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 5rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-8%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            left: "-5%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(205,92,92,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10 w-full"
          style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}
        >
          <FadeInSection>
            <Link
              href="/literature-festival"
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
              Back to Literature Festival
            </Link>

            <SectionTag>Chicago Indian Literature Festival 2026</SectionTag>

            <h1
              data-section="speakers-title"
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Our{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Speakers 2026
              </strong>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "580px",
              }}
            >
              Meet the authors, artists, thinkers, and storytellers who will
              take the stage at Chicago Indian Literature Festival — May 30,
              2026.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Coming Soon */}
      <section
        data-section="speakers-coming-soon"
        style={{
          padding: "5rem 3rem",
          backgroundColor: "#faf8f3",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "650px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Gold decorative line */}
            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#d4af37",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2rem",
              }}
            />

            <h2
              data-section="speakers-coming-soon-heading"
              className="font-heading font-semibold"
              style={{
                fontSize: "2.2rem",
                color: "#1a1a1a",
                marginBottom: "1.25rem",
                lineHeight: 1.3,
              }}
            >
              Speaker Announcements Coming Soon
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666",
                marginBottom: "2.5rem",
              }}
            >
              We are finalising an extraordinary lineup of voices for the 2026
              Chicago Indian Literature Festival. Authors, poets, thinkers, and
              cultural leaders — our speaker list will be revealed very soon.
              Stay tuned.
            </p>

            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#d4af37",
                marginLeft: "auto",
                marginRight: "auto",
                marginBottom: "2.5rem",
              }}
            />

            <Link
              href="/literature-festival/schedule"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#d4af37",
                color: "#1a1a1a",
                padding: "0.85rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#1a1a1a") ||
                (e.currentTarget.style.color = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#d4af37") ||
                (e.currentTarget.style.color = "#1a1a1a")
              }
            >
              View Full Schedule
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
