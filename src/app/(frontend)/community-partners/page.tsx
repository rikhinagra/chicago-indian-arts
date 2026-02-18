"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, Handshake, ExternalLink } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const partners = [
  {
    name: "Partner Organization 1",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P1&background=d4af37&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
  {
    name: "Partner Organization 2",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P2&background=d4af37&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
  {
    name: "Partner Organization 3",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P3&background=d4af37&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
  {
    name: "Partner Organization 4",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P4&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
  {
    name: "Partner Organization 5",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P5&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
  {
    name: "Partner Organization 6",
    description:
      "Details about this community partner and their collaboration with Chicago Indian Arts will be shared soon.",
    image:
      "https://ui-avatars.com/api/?name=P6&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
    website: "#",
  },
];

export default function CommunityPartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="partners-hero"
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
            <SectionTag>Community</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Community{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Partners
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
              Our mission thrives through collaboration. We are grateful
              to the organizations and individuals who partner with us
              to celebrate Indian arts and culture in Chicago.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section
        data-section="partners-main"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "1200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              className="flex items-center"
              style={{ gap: "0.75rem", marginBottom: "0.75rem" }}
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
                <Handshake size={20} color="#d4af37" />
              </div>
              <SectionTag>Our Partners</SectionTag>
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "#1a1a1a",
                marginBottom: "2.5rem",
              }}
            >
              Organizations We{" "}
              <strong className="font-semibold" style={{ color: "#d4af37" }}>
                Work With
              </strong>
            </h2>

            <div
              data-section="partners-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              {partners.map((partner, i) => (
                <FadeInSection key={partner.name + i} delay={i * 0.1}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "2rem",
                      transition: "all 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#d4af37";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Partner logo */}
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginBottom: "1.2rem",
                        border: "2px solid rgba(212,175,55,0.3)",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-cover"
                        sizes="70px"
                      />
                    </div>

                    <h3
                      className="font-heading font-semibold"
                      style={{
                        fontSize: "1.1rem",
                        color: "#1a1a1a",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {partner.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: 1.7,
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {partner.description}
                    </p>
                    {partner.website && partner.website !== "#" && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                        style={{
                          color: "#d4af37",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          textDecoration: "none",
                          gap: "0.3rem",
                          transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.7")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section
        data-section="partners-cta"
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
              Become a Partner
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Interested in collaborating with Chicago Indian Arts? We welcome
              partnerships with organizations that share our passion for
              celebrating Indian culture and heritage.
            </p>
            <Link
              href="/contact"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                padding: "0.85rem 2.5rem",
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
              Contact Us
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
