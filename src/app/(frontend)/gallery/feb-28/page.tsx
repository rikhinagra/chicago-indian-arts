"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Camera } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const albums = [
  // Original: { name: "Event Album", credit: "CICA", description: "The official event photo album from the Zindagi Milegi Na Dobara film screening." }
  { name: "Photographer Album 1", url: "https://photos.app.goo.gl/2JngfagbwdTwJzmB9" },
];

export default function Feb28GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="feb28-hero"
        className="relative overflow-hidden px-6 sm:px-12"
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div className="absolute" style={{ top: "-15%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div className="absolute" style={{ bottom: "-10%", right: "-5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />

        <div className="relative z-10" style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <Link
            href="/gallery"
            className="inline-flex items-center"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", marginBottom: "2rem", transition: "color 0.3s ease", gap: "0.5rem" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            <ArrowLeft size={16} />
            Back to Gallery
          </Link>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <SectionTag>Feb 28, 2026</SectionTag>
            <h1 className="font-heading font-light" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.15, color: "#ffffff", marginBottom: "1.2rem" }}>
              Zindagi Milegi Na Dobara:{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>Photo Album</strong>
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              Relive the moments from our special community screening of the beloved Bollywood classic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section data-section="feb28-albums" style={{ paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "clamp(1rem, 5vw, 4rem)", paddingRight: "clamp(1rem, 5vw, 4rem)", backgroundColor: "#faf8f3" }}>
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Photo Album</SectionTag>
            <h2 className="font-heading font-semibold" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.3, color: "#1a1a1a" }}>
              Browse Album
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {albums.map((album, i) => (
              <FadeInSection key={album.name} delay={i * 0.1}>
                <Link href={album.url} target="_blank" rel="noopener noreferrer" className="group" style={{ textDecoration: "none", display: "block" }}>
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
                    {/* Faint decorative number */}
                    <div aria-hidden="true" style={{ position: "absolute", fontSize: "7rem", fontWeight: 900, fontFamily: "Georgia, serif", color: "rgba(212,175,55,0.05)", top: "50%", left: "50%", transform: "translate(-50%, -55%)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-4px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Camera icon badge — top left */}
                    <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Camera size={16} color="#d4af37" />
                    </div>

                    {/* Centered album name */}
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem 1.5rem 1.5rem" }}>
                      <h3 className="font-heading" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)", fontWeight: 700, fontStyle: "italic", lineHeight: 1.25, background: "linear-gradient(135deg, #d4af37 0%, #e8c866 40%, #cd5c5c 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        {album.name}
                      </h3>
                    </div>

                    {/* View Album — bottom right */}
                    <div style={{ position: "absolute", bottom: "1.25rem", right: "1.5rem", display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "rgba(212,175,55,0.6)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
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
