"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, ClipboardList } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const eventDetails = [
  {
    icon: CalendarDays,
    label: "Event",
    value: "Chicago Indian Fashion Week",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chicago, IL",
  },
  {
    icon: ClipboardList,
    label: "Application Deadline",
    value: "May 15, 2026",
  },
];

const responsiveStyles = `
  .brand-hero-inner { padding: 10rem 3rem 5rem; }
  .brand-hero-heading { font-size: 4rem; }
  .brand-section { padding: 4rem 3rem; }
  .brand-cta { padding: 4rem 3rem; }
  @media (max-width: 768px) {
    .brand-hero-inner { padding: 8rem 1.5rem 3rem !important; }
    .brand-hero-heading { font-size: 2.2rem !important; }
    .brand-hero-overlay {
      background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.5) 100%) !important;
    }
    .brand-section { padding: 3rem 1.5rem !important; }
    .brand-cta { padding: 3rem 1.5rem !important; }
  }
  @media (max-width: 480px) {
    .brand-hero-heading { font-size: 1.9rem !important; }
  }
`;

const FORM_LINK = "https://forms.gle/G4jSyLKBp71zW2C59";

export default function BrandIntakePage() {
  return (
    <>
      <style>{responsiveStyles}</style>

      {/* Hero */}
      <section
        data-section="brand-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1774403275/chicago-indian-fashion-week-designer-brand-intake_zp9sdi.webp"
            alt="Chicago Indian Fashion Week Designer and Brand Intake Form"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            priority
          />
          {/* Gradient overlay */}
          <div
            className="brand-hero-overlay absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 45%, transparent 70%)",
            }}
          />
        </div>

        <div
          className="brand-hero-inner relative z-10"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          <FadeInSection>
            <Link
              href="/fashion-week"
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
              Back to Fashion Week
            </Link>

            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow:
                  "0 2px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1)",
              }}
            >
              Chicago Indian Fashion Week
            </div>

            <h1
              className="brand-hero-heading font-heading font-light"
              style={{
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
                maxWidth: "650px",
              }}
            >
              Designer &amp; Brand
              <br />
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Intake Form
              </strong>
            </h1>

            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "520px",
                marginBottom: "0.8rem",
                fontStyle: "italic",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Showcase your collection on the festival floor
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                maxWidth: "500px",
                marginBottom: "2.5rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Chicago Indian Fashion Week · 2026
            </p>

            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
              Apply Now
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Event Details */}
      <section className="brand-section" style={{ backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Key Dates</SectionTag>
              <h2
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Event Details
              </h2>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ gap: "1.5rem", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}
          >
            {eventDetails.map((item, i) => (
              <FadeInSection key={item.label} delay={i * 0.1}>
                <div
                  style={{
                    padding: "2rem 1.5rem",
                    backgroundColor: "#faf8f3",
                    borderTop: "3px solid #d4af37",
                    textAlign: "center",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
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
                      marginBottom: "1rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <item.icon size={20} style={{ color: "#cd5c5c" }} />
                  </div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#999",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-heading"
                    style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a" }}
                  >
                    {item.value}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Apply as a Designer or Brand */}
      <section className="brand-section" style={{ backgroundColor: "#faf8f3" }}>
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <FadeInSection>
            <SectionTag>Apply as a Designer or Brand</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.8rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Bring Your Vision to the Runway
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.5rem",
              }}
            >
              Chicago Indian Fashion Week celebrates the intersection of Indian heritage and
              contemporary design. We welcome clothing designers, jewelers, accessory makers,
              and lifestyle brands ready to share their craft with our community.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "2.5rem",
              }}
            >
              Fill out the form below and our team will be in touch.
            </p>
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
              Fill Out the Form
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section
        className="brand-cta"
        style={{
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Ready to Showcase Your Brand?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Complete the intake form and our team will review your application and get in touch before the deadline.
            </p>
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
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
              Apply Now
            </a>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
