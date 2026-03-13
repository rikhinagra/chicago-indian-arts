"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, CalendarDays, ArrowUpRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const events = [
  {
    title: "Zindagi Milegi Na Dobara Film Screening",
    date: "Feb 28, 2026",
    link: "https://photos.app.goo.gl/UBJKv9mH5DJN5GAz7",
    image: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1773384691/Zindagi_Na_Milegi_Dobara_pxhrwz.webp",
    description:
      "A special community screening of the beloved Bollywood classic, bringing together film lovers for an unforgettable cinematic evening.",
  },
  {
    title: "International Women's Day",
    date: "March 08, 2026",
    link: "https://photos.app.goo.gl/GB78qaDUiKJY8madA",
    image: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1773383769/International_Women_S_Day_mpsdi7.webp",
    description:
      "Celebrating the strength, creativity, and achievements of women through art, culture, and community.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 5rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        {/* Decorative blobs */}
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
            <SectionTag>Gallery</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Event{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Gallery
              </strong>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.75)",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Relive the moments from our past events. Click on any event below
              to view the full photo album.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Cards Section */}
      <section style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Photo Albums</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
            >
              Browse Our Events
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <FadeInSection key={event.title} delay={i * 0.15}>
                <Link
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ textDecoration: "none", display: "block", height: "100%" }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(212,175,55,0.3)";
                      el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
                      el.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(0,0,0,0.06)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Cover Image — fixed aspect ratio, consistent across all image sizes */}
                    <div style={{ width: "100%", overflow: "hidden", aspectRatio: "16/9" }}>
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                        style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: "top" }}
                      />
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      style={{
                        height: "3px",
                        background: "linear-gradient(90deg, #cd5c5c, #d4af37)",
                      }}
                    />

                    <div style={{ padding: "1.75rem 2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                      {/* Date */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          color: "#999",
                          fontSize: "0.8rem",
                          letterSpacing: "0.5px",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <CalendarDays size={13} />
                        <span>{event.date}</span>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-heading"
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "#1a1a1a",
                          marginBottom: "0.8rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          color: "#666",
                          flex: 1,
                          marginBottom: "1.5rem",
                        }}
                      >
                        {event.description}
                      </p>

                      {/* CTA */}
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          color: "#cd5c5c",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                        }}
                      >
                        View Photos <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
