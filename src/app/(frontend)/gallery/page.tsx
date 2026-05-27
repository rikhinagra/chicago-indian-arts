"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, CalendarDays, ArrowUpRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const events = [
  {
    title: "Curtain Raiser: A Fashion Innovation Evening First Cut",
    date: "May 9, 2026",
    eventAlbumUrl: "https://photos.app.goo.gl/LroSCjCMHuAjUVS16",
    photographersPageUrl: "/gallery/may-9",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1779087073/cica_walk_d27nyq.webp",
    description:
      "Chicago Indian Arts presents The Curtain Raiser: A Fashion Innovation Evening First Cut. ILA's Chicago. Films. Fashion. Innovation.",
  },
  {
    title: "International Women's Day",
    date: "March 08, 2026",
    eventAlbumUrl: "https://photos.app.goo.gl/gpcoGau62cPKRyXf8",
    photographersPageUrl: "/gallery/mar-8",
    image: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1773383769/International_Women_S_Day_mpsdi7.webp",
    description:
      "Celebrating the strength, creativity, and achievements of women through art, culture, and community.",
  },
  {
    title: "Zindagi Milegi Na Dobara Film Screening",
    date: "Feb 28, 2026",
    eventAlbumUrl: "https://photos.app.goo.gl/2JngfagbwdTwJzmB9",
    photographersPageUrl: "/gallery/feb-28",
    image: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1773384691/Zindagi_Na_Milegi_Dobara_pxhrwz.webp",
    description:
      "A special community screening of the beloved Bollywood classic, bringing together film lovers for an unforgettable cinematic evening.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="gallery-hero"
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
              data-section="gallery-title"
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
      <section data-section="gallery-cards" style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
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
              data-section="gallery-heading"
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
            >
              Browse Our Events
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <FadeInSection key={event.title} delay={i * 0.15}>
                <div
                  className="group"
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

                    {/* CTAs */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                      {/* View Event Photos */}
                      <Link
                        href={event.eventAlbumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.55rem 1.1rem",
                          backgroundColor: "#cd5c5c",
                          color: "#ffffff",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          letterSpacing: "0.8px",
                          textTransform: "uppercase",
                          textDecoration: "none",
                          transition: "background-color 0.3s ease",
                          borderRadius: "2px",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
                      >
                        View Event Photos <ArrowUpRight size={13} />
                      </Link>

                      {/* View Photographer's Albums (only if sub-page exists) */}
                      {event.photographersPageUrl && (
                        <Link
                          href={event.photographersPageUrl}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            padding: "0.55rem 1.1rem",
                            backgroundColor: "transparent",
                            border: "1.5px solid #d4af37",
                            color: "#d4af37",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.8px",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            borderRadius: "2px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#d4af37";
                            e.currentTarget.style.color = "#1a1a1a";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                            e.currentTarget.style.color = "#d4af37";
                          }}
                        >
                          Photographer&apos;s Albums <ArrowUpRight size={13} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
