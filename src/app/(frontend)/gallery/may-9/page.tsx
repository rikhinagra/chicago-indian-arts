"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Camera } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const albums = [
  {
    name: "Event Album",
    description: "The official event photo album from the evening.",
    url: "https://photos.app.goo.gl/LroSCjCMHuAjUVS16",
    credit: "CICA",
  },
  {
    name: "Memories in Motion",
    description: "Beautifully captured moments by the Memories in Motion team.",
    url: "https://photos.app.goo.gl/WCpD76QdycsD4TUa7",
    credit: "Memories in Motion",
  },
  {
    name: "Rudy Arias",
    description: "A unique perspective on the evening through Rudy Arias's lens.",
    url: "https://photos.app.goo.gl/yHfy4BnftWktrXFZ8",
    credit: "Rudy Arias",
  },
  {
    name: "Behind the Scenes",
    description: "Candid behind-the-scenes moments captured by Memories in Motion.",
    url: "https://photos.app.goo.gl/sLtRHBC7Nz8bEEgW7",
    credit: "Memories in Motion",
  },
  {
    name: "Videos",
    description: "Video highlights from the evening by Memories in Motion.",
    url: "https://photos.app.goo.gl/4rNE71FEPUak5esw6",
    credit: "Memories in Motion",
  },
];

export default function May9GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="may9-hero"
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
            href="/gallery"
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
            Back to Gallery
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTag>May 9, 2026</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Curtain Raiser:{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Photographer Albums
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
              Explore all photo and video albums from A Fashion Innovation Evening First Cut, captured by our talented photographers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section data-section="may9-albums" style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Photo Albums</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
            >
              Browse Albums
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album, i) => (
              <FadeInSection key={album.name} delay={i * 0.12}>
                <Link
                  href={album.url}
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
                      padding: "2rem",
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
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.25rem",
                        flexShrink: 0,
                      }}
                    >
                      <Camera size={22} color="#d4af37" />
                    </div>

                    {/* Album Name */}
                    <h3
                      className="font-heading"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#1a1a1a",
                        marginBottom: "0.5rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {album.name}
                    </h3>

                    {/* Credit */}
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#d4af37",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}
                    >
                      by {album.credit}
                    </p>

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
                      {album.description}
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
                      View Album <ArrowUpRight size={14} />
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
