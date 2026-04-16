"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart, ArrowLeft, ShieldCheck, BadgePercent, X } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const impactItems = [
  {
    amount: "$25",
    description: "Provides art supplies for one student workshop",
  },
  {
    amount: "$50",
    description: "Sponsors a cultural performance at a community event",
  },
  {
    amount: "$100",
    description: "Funds a full scholarship for a young artist",
  },
  {
    amount: "$250",
    description: "Supports an entire community outreach program",
  },
];

export default function DonatePage() {
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <>
      {/* Zeffy Donation Modal */}
      {donateOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setDonateOpen(false)}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              height: "85vh",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0.4rem 0.6rem",
                backgroundColor: "#FFEFF0",
              }}
            >
              <button
                onClick={() => setDonateOpen(false)}
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.15)",
                  backgroundColor: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={14} color="#1a1a1a" />
              </button>
            </div>
            <iframe
              src={process.env.NEXT_PUBLIC_ZEFFY_DONATION_URL}
              style={{ width: "100%", flex: 1, border: 0 }}
              allowtransparency="true"
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section
        data-section="donate-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        {/* Decorative Elements */}
        <div
          className="absolute"
          style={{
            top: "-20%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
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
            <SectionTag>Support Our Mission</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Support{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                The Arts
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
              Your contribution helps us showcase the richness of Indian arts
              and culture, foster cross-cultural understanding, and empower the
              next generation of artists in our vibrant community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Donation Layout Wrapper ──
          Desktop grid:  [left]       [right]
                         [newsletter] [newsletter]
          Mobile stack:  [left] → [newsletter] → [right]
      */}
      <div data-section="donate-outer">

        {/* LEFT: Your Impact + Make Your Donation */}
        <div data-section="donate-left-section">
          <FadeInSection>
            <div>
              {/* Your Impact */}
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.3rem",
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                  fontWeight: 500,
                }}
              >
                Your Impact
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}
              >
                {impactItems.map((item) => (
                  <div
                    key={item.amount}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1rem 1.2rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#d4af37",
                        minWidth: "50px",
                      }}
                    >
                      {item.amount}
                    </span>
                    <span
                      style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}
                    >
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Make Your Donation */}
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.3rem",
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                  fontWeight: 500,
                }}
              >
                Make Your Donation
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#666",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                Every dollar you give directly supports Indian arts and culture
                in Chicago. From the Literature Festival and Fashion Week to
                the Wildlife Photography &amp; Visual Arts Festival and
                community programs across all our initiatives.
              </p>

              {/* Trust Indicators */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <ShieldCheck size={18} color="#d4af37" />
                  <span style={{ fontSize: "0.88rem", color: "#2d2d2d" }}>
                    Secure payments powered by Zeffy
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <BadgePercent size={18} color="#d4af37" />
                  <span style={{ fontSize: "0.88rem", color: "#2d2d2d" }}>
                    0% platform fee. 100% goes to the arts
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.85rem 1rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <Heart size={18} color="#d4af37" />
                  <span style={{ fontSize: "0.88rem", color: "#2d2d2d" }}>
                    All donations are tax-deductible (501c3)
                  </span>
                </div>
              </div>

              {/* Zeffy Donate Button */}
              <button
                type="button"
                onClick={() => setDonateOpen(true)}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  backgroundColor: "#cd5c5c",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#cd5c5c";
                }}
              >
                <Heart size={18} fill="#ffffff" color="#ffffff" />
                Donate Now
              </button>

              {/* Tax Info */}
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#999",
                  lineHeight: 1.6,
                  marginTop: "1.5rem",
                }}
              >
                Chicago Indian Collective Arts is a registered 501(c)(3)
                non-profit organization. All donations are tax-deductible to the
                fullest extent allowed by law.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* RIGHT: Supporting Images + Testimonial */}
        <div data-section="donate-right-section">
          <FadeInSection direction="right">
            {/* Supporting Images */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "280px", width: "100%" }}
              >
                <Image
                  src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1771831750/chicago-indian-arts-community-friends-celebrating_bex2fe.webp"
                  alt="Friends celebrating together at a Chicago Indian Arts community gathering"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1771831750/indian-arts-festival-outdoor-music-celebration-chicago_beemtl.webp"
                    alt="Happy friends enjoying an outdoor Indian arts music festival in Chicago"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{ height: "200px" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1771831750/chicago-indian-arts-audience-cultural-event_fkutxc.webp"
                    alt="Smiling audience engaged at a Chicago Indian Arts cultural event"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                borderLeft: "3px solid #d4af37",
                backgroundColor: "#ffffff",
              }}
            >
              <p
                className="font-heading"
                style={{
                  fontSize: "1rem",
                  fontStyle: "italic",
                  color: "#2d2d2d",
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                }}
              >
                &ldquo;Supporting Chicago Indian Arts means investing in the
                cultural fabric of our community. Every contribution helps us
                bring stories, art, and traditions to life.&rdquo;
              </p>
              <p
                style={{ fontSize: "0.8rem", color: "#d4af37", fontWeight: 600 }}
              >
                Jigar Shah, Founder
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* NEWSLETTER: Stay Connected — spans full width on desktop, #3 on mobile */}
        <div data-section="donate-newsletter">
          <FadeInSection direction="left">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <SectionTag>Stay Connected</SectionTag>
              <h2
                className="font-heading font-light"
                style={{
                  fontSize: "2.2rem",
                  color: "#1a1a1a",
                  marginBottom: "0.6rem",
                }}
              >
                Sign Up for Our{" "}
                <strong className="font-semibold" style={{ color: "#d4af37" }}>
                  Newsletter
                </strong>
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#666",
                  lineHeight: 1.7,
                  maxWidth: "500px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Get updates on upcoming events, artist spotlights, and ways to
                get involved with Chicago Indian Arts.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection direction="left">
            <div
              style={{
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative",
                height: "210px",
              }}
            >
              <iframe
                title="Signup form powered by Zeffy"
                style={{
                  position: "absolute",
                  border: 0,
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
                src={process.env.NEXT_PUBLIC_ZEFFY_NEWSLETTER_URL}
                allowtransparency="true"
              />
            </div>
          </FadeInSection>
        </div>

      </div>
    </>
  );
}
