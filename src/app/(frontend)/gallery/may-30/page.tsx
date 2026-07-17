"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Camera } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const albums = [
  // Original: { name: "Memories in Motion", credit: "Abhinav", description: "LitFest 2026 through the creative lens of Abhinav." }
  { name: "Photographer Album 1",  url: "https://photos.app.goo.gl/JZUfWKWJ4ZSGkQ596" },
  // Original: { name: "Neni's Clicks", credit: "Bhargav", description: "LitFest 2026 through the creative lens of Neni's Clicks." }
  { name: "Photographer Album 2",  url: "https://photos.app.goo.gl/R6kJcfM7g2LqETrb7" },
  // Original: { name: "Chinmay", credit: "Chinmay", description: "Candid captures from Chicago Indian Literature Festival 2026 by Chinmay." }
  { name: "Photographer Album 3",  url: "https://photos.app.goo.gl/aezvf7e39engCWRQ8" },
  // Original: { name: "CJ", credit: "CJ", description: "LitFest 2026 moments captured through the lens of CJ." }
  { name: "Photographer Album 4",  url: "https://photos.app.goo.gl/pRHAVWzPgfQfTFGM9" },
  // Original: { name: "Haindhavi", credit: "Haindhavi", description: "A personal and artistic perspective on LitFest 2026 by Haindhavi." }
  { name: "Photographer Album 5",  url: "https://photos.app.goo.gl/4GAYp5ryGw9qMvnu5" },
  // Original: { name: "Jaiming", credit: "Jaiming", description: "Chicago Indian Literature Festival 2026 through the lens of Jaiming." }
  { name: "Photographer Album 6",  url: "https://photos.app.goo.gl/D63425xscfvr9KVz6" },
  // Original: { name: "Sanjana", credit: "Sanjana", description: "LitFest 2026 moments beautifully photographed by Sanjana." }
  { name: "Photographer Album 7",  url: "https://photos.app.goo.gl/tQbPU7ov7SkSGx328" },
  // Original: { name: "Shaili Patel", credit: "Shaili Patel", description: "Chicago Indian Literature Festival 2026 captured by Shaili Patel." }
  { name: "Photographer Album 8",  url: "https://photos.app.goo.gl/kuTFibMrCCguak4W8" },
  // Original: { name: "Sunil", credit: "Sunil", description: "LitFest 2026 through the thoughtful lens of Sunil." }
  { name: "Photographer Album 9",  url: "https://photos.app.goo.gl/NMw2NWZipipjyism6" },
  // Original: { name: "XTincT", credit: "XTincT", description: "A unique creative perspective on LitFest 2026 by XTincT." }
  { name: "Photographer Album 10", url: "https://photos.app.goo.gl/wRB5K485eSmJGFaY6" },
];

export default function May30GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="may30-hero"
        className="relative overflow-hidden px-6 sm:px-12"
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "-15%", left: "-5%", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%", right: "-5%", width: "350px", height: "350px",
            background: "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="relative z-10" style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <Link
            href="/gallery"
            className="inline-flex items-center"
            style={{
              color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none",
              marginBottom: "2rem", transition: "color 0.3s ease", gap: "0.5rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            <ArrowLeft size={16} />
            Back to Gallery
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionTag>May 30, 2026</SectionTag>
            <h1
              className="font-heading font-light"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, color: "#ffffff", marginBottom: "1.2rem" }}
            >
              Chicago Indian Literature Festival:{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>Photographer Albums</strong>
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Explore all photo albums from Chicago Indian Literature Festival 2026, captured by our talented photographers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section data-section="may30-albums" style={{ paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "clamp(1rem, 5vw, 4rem)", paddingRight: "clamp(1rem, 5vw, 4rem)", backgroundColor: "#faf8f3" }}>
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Photo Albums</SectionTag>
            <h2 className="font-heading font-semibold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.3, color: "#1a1a1a" }}>
              Browse Albums
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {albums.map((album, i) => (
              <FadeInSection key={album.name} delay={i * 0.1}>
                <Link
                  href={album.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    className="h-[190px] md:h-[240px]"
                    style={{
                      background: "linear-gradient(135deg, #1c1c1c 0%, #252525 60%, #1c1c1c 100%)",
                      border: "1px solid rgba(212,175,55,0.15)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.35s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(212,175,55,0.45)";
                      el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.35)";
                      el.style.transform = "translateY(-5px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(212,175,55,0.15)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Faint decorative number in background */}
                    <div
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        fontSize: "7rem",
                        fontWeight: 900,
                        fontFamily: "Georgia, serif",
                        color: "rgba(212,175,55,0.05)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -55%)",
                        lineHeight: 1,
                        userSelect: "none",
                        pointerEvents: "none",
                        letterSpacing: "-4px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Camera icon badge — top left */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.25rem",
                        left: "1.25rem",
                        width: "38px",
                        height: "38px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Camera size={16} color="#d4af37" />
                    </div>

                    {/* Centered album name */}
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        padding: "2rem 1.5rem 1.5rem",
                      }}
                    >
                      <h3
                        className="font-heading"
                        style={{
                          fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
                          fontWeight: 700,
                          fontStyle: "italic",
                          lineHeight: 1.25,
                          background: "linear-gradient(135deg, #d4af37 0%, #e8c866 40%, #cd5c5c 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {album.name}
                      </h3>
                    </div>

                    {/* View Album — bottom right */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.25rem",
                        right: "1.5rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        color: "rgba(212,175,55,0.6)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "1.2px",
                        textTransform: "uppercase",
                      }}
                    >
                      View Album <ArrowUpRight size={13} />
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
