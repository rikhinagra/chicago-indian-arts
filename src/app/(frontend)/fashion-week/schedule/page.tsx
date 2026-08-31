"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, MapPin, Sparkles, Camera, Store, UtensilsCrossed, Users } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const itinerary = [
  {
    time: "4:00 PM – 5:00 PM",
    title: "Red Carpet, Cocktails & Hors d'oeuvres",
  },
  {
    time: "5:00 PM – 6:30 PM",
    title: "Designer Showcases",
  },
  {
    time: "6:30 PM – 7:00 PM",
    title: "Break",
  },
  {
    time: "7:00 PM – 8:30 PM",
    title: "Designer Showcases",
  },
  {
    time: "8:30 PM – 10:00 PM",
    title: "After Dark",
  },
];

const highlights = [
  { icon: Camera, title: "Red Carpet Experience" },
  { icon: Sparkles, title: "Runway Designer & Model Shows" },
  { icon: Store, title: "Fashion Village" },
  { icon: UtensilsCrossed, title: "Appetizers Included" },
  { icon: Users, title: "Networking & Community Connections" },
];

export default function FashionWeekSchedulePage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="fw-schedule-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-8%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(205,92,92,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10"
          style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}
        >
          <Link
            href="/fashion-week"
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
            Back to Fashion Week
          </Link>

          <SectionTag>Schedule</SectionTag>

          <h1
            data-section="fw-schedule-title"
            className="font-heading font-light"
            style={{ fontSize: "3.5rem", lineHeight: 1.1, color: "#ffffff", marginBottom: "1.2rem" }}
          >
            Evening{" "}
            <strong className="font-bold" style={{ color: "#d4af37" }}>
              Itinerary
            </strong>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "600px",
              marginBottom: "2.5rem",
            }}
          >
            An unforgettable evening celebrating fashion, culture, creativity, and community
            in the heart of Chicago.
          </p>

          <div className="flex flex-wrap" style={{ gap: "2rem" }}>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <Calendar size={16} color="#d4af37" />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                Saturday, October 10, 2026
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <Clock size={16} color="#d4af37" />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                4:00 PM – 10:00 PM
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <MapPin size={16} color="#d4af37" />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                Rivvy Hotel, 55 E Ontario Street, Chicago
              </span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link
              href="https://www.zeffy.com/en-US/ticketing/chicago-indian-fashion-week"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b84e4e")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section
        data-section="fw-schedule-about"
        style={{ padding: "4rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <FadeInSection>
            <SectionTag>About the Event</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "1.5rem" }}
            >
              A New Cultural Chapter in Chicago
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "1.2rem" }}>
              This October, Chicago Indian Fashion Week returns for an unforgettable evening
              celebrating fashion, culture, creativity, and community in the heart of Chicago.
              Guests will enjoy runway designer and model shows, a red carpet experience, the
              vibrant Fashion Village, appetizers, and networking with designers, creatives,
              media, and community leaders.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "2rem" }}>
              Arrive in your finest Black Tie, Evening Gown, or Sophisticated Indian attire
              for the red carpet, then take your seat for a night of glitz, glam, and stunning
              modern Indian couture blending rich heritage with bold, contemporary design.
            </p>
            <div
              className="inline-flex items-center"
              style={{
                gap: "0.6rem",
                padding: "0.6rem 1.4rem",
                backgroundColor: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.3)",
                borderRadius: "2px",
              }}
            >
              <Sparkles size={15} style={{ color: "#d4af37" }} />
              <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1a1a1a" }}>
                Early Bird tickets are limited. Reserve your place today.
              </span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section
        data-section="fw-schedule-content"
        style={{ padding: "4rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>The Night</SectionTag>
              <h2
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Evening Timeline
              </h2>
            </div>
          </FadeInSection>

          <div className="relative" style={{ paddingLeft: "2rem" }}>
            <div
              className="absolute"
              style={{ top: "0.5rem", bottom: "0.5rem", left: "0", width: "2px", backgroundColor: "#e8e4de" }}
            />
            {itinerary.map((item, i) => (
              <FadeInSection key={item.title + item.time} delay={i * 0.1}>
                <div className="relative" style={{ paddingBottom: i === itinerary.length - 1 ? 0 : "2rem" }}>
                  <div
                    className="absolute rounded-full"
                    style={{
                      left: "-2.4rem",
                      top: "0.4rem",
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#cd5c5c",
                      border: "3px solid #faf8f3",
                      boxShadow: "0 0 0 2px #e8e4de",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#d4af37",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {item.time}
                  </div>
                  <h3
                    className="font-heading font-semibold"
                    style={{ fontSize: "1.3rem", color: "#1a1a1a" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section
        data-section="fw-schedule-highlights"
        style={{ padding: "4rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Event Highlights</SectionTag>
              <h2
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                What to Expect
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" style={{ gap: "1.5rem" }}>
            {highlights.map((item, i) => (
              <FadeInSection
                key={item.title}
                delay={i * 0.08}
                className={i === highlights.length - 1 ? "highlight-last-item" : ""}
              >
                <div
                  style={{
                    padding: "2rem 1.5rem",
                    backgroundColor: "#faf8f3",
                    borderTop: "3px solid #d4af37",
                    textAlign: "center",
                    height: "100%",
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
                      marginBottom: "1.2rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    <item.icon size={20} style={{ color: "#cd5c5c" }} />
                  </div>
                  <p
                    className="font-heading"
                    style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.4 }}
                  >
                    {item.title}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div
              className="flex flex-col sm:flex-row items-center"
              style={{
                marginTop: "3rem",
                gap: "1.5rem",
                padding: "2rem 2.5rem",
                backgroundColor: "#faf8f3",
                borderLeft: "4px solid #d4af37",
                maxWidth: "900px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#cd5c5c",
                    marginBottom: "0.4rem",
                  }}
                >
                  Want More?
                </div>
                <h3
                  className="font-heading font-semibold"
                  style={{ fontSize: "1.3rem", color: "#1a1a1a" }}
                >
                  Upgrade to VIP Front Row
                </h3>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#666666", margin: 0 }}>
                Enjoy premium front row seating, a complimentary drink, and exclusive access
                to the Industry Mixer and Fireside Chat.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <p
              style={{
                textAlign: "center",
                marginTop: "2.5rem",
                fontSize: "0.9rem",
                color: "#999999",
                letterSpacing: "0.3px",
              }}
            >
              This event is strictly 21+. Valid ID required at entry. RSVP required.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section
        data-section="fw-schedule-cta"
        style={{
          padding: "3rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.2rem", color: "#ffffff", marginBottom: "1rem" }}
            >
              Reserve Your Seat
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              October 10, 2026 · Rivvy Hotel, 55 E Ontario Street, Chicago
            </p>
            <Link
              href="https://www.zeffy.com/en-US/ticketing/chicago-indian-fashion-week"
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
              Get Tickets
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          [data-section="fw-schedule-hero"] {
            padding: 7.5rem 1.25rem 2.5rem !important;
          }
          [data-section="fw-schedule-title"] {
            font-size: 2.1rem !important;
          }
          [data-section="fw-schedule-about"] {
            padding: 2.5rem 1.25rem !important;
          }
          [data-section="fw-schedule-content"] {
            padding: 2.5rem 1.25rem 3rem !important;
          }
          [data-section="fw-schedule-highlights"] {
            padding: 2.5rem 1.25rem !important;
          }
          [data-section="fw-schedule-cta"] {
            padding: 2.5rem 1.25rem !important;
          }
        }
        @media (max-width: 480px) {
          [data-section="fw-schedule-title"] {
            font-size: 1.75rem !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .highlight-last-item {
            grid-column: span 2 / span 2;
            max-width: calc(50% - 0.75rem);
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  );
}
