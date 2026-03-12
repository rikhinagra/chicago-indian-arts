"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Trophy, Medal, Award, Star, Video, Palette, ChevronRight, Instagram, Youtube, HardDrive } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const themes = [
  {
    number: "01",
    title: "India, In Your Own Words",
    description: "Your personal definition of India.",
  },
  {
    number: "02",
    title: "What You Love About India & Why",
    description: "Culture, food, people, values, memories.",
  },
  {
    number: "03",
    title: "An Indian Art Form You Admire",
    description: "Dance, music, cinema, visual arts, literature.",
  },
  {
    number: "04",
    title: "Why You Are Proud of India",
    description: "History, resilience, heritage, global impact.",
  },
  {
    number: "05",
    title: "Bridge Between India & USA",
    description: "The hyphen. The inheritance. Two worlds.",
  },
];

const prizes = [
  {
    icon: Trophy,
    label: "Winner",
    title: "CICA Merch + VIP Tickets ×2",
    description: "Two VIP tickets to Lit Fest & Fashion Week + CICA branded T-shirt and merch pack.",
    accent: "#d4af37",
  },
  {
    icon: Medal,
    label: "First Runner Up",
    title: "CICA Branded T-Shirt",
    description: "Wear your story.",
    accent: "#cd5c5c",
  },
  {
    icon: Award,
    label: "Second Runner Up",
    title: "CICA Branded T-Shirt",
    description: "Wear your story.",
    accent: "#cd5c5c",
  },
];

const steps = [
  {
    number: "1",
    title: "Make Your Video",
    description: "20–30 sec. Vertical or horizontal. Any style.",
    icon: Video,
  },
  {
    number: "2",
    title: "Pick a Theme",
    description: "One of five — or blend them creatively.",
    icon: Palette,
  },
  {
    number: "3",
    title: "Submit",
    description: "YouTube link, Google Drive, or Instagram tag.",
    icon: ChevronRight,
  },
  {
    number: "4",
    title: "Deadline: April 15",
    description: "One entry per participant. No late entries.",
    icon: Star,
  },
];

const guidelines = [
  { label: "Length", value: "20–30 seconds only" },
  { label: "Format", value: "Vertical or horizontal" },
  { label: "Language", value: "English or any Indian language" },
  { label: "Style", value: "Spoken word, visuals, montage, music, or mix" },
  { label: "Content", value: "Original content only. No fancy production needed." },
];

const judgingCriteria = [
  "Creativity and originality",
  "Clear storytelling",
  "Emotional impact and authenticity",
  "Relevance to theme",
  "Smart use of the 20–30 second format",
];

const rules = [
  "Content must be respectful and non-offensive",
  "No political, hateful, or discriminatory material",
  "Avoid copyrighted music or visuals unless royalty-free",
  "Videos must be original and unpublished",
  "Plagiarism leads to disqualification",
  "Late entries will not be accepted",
  "By submitting, participants allow CICA to share videos for non-commercial promotional use",
];

export default function ContestPage() {
  const scrollToThemes = () => {
    const el = document.getElementById("themes");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: "9rem 3rem 5rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #1a1a1a 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute"
          style={{
            top: "-15%", left: "-5%",
            width: "500px", height: "500px",
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%", right: "-5%",
            width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="relative z-10" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.75rem",
              textDecoration: "none",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "3rem",
              gap: "0.5rem",
              transition: "color 0.3s ease",
              display: "flex",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <ArrowLeft size={14} />
            Chicago Indian Arts &nbsp;·&nbsp; CICA &nbsp;·&nbsp; Short Video Contest
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Left — main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: "620px" }}
            >
              <SectionTag>Short Video Contest</SectionTag>

              <h1
                className="font-heading"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  lineHeight: 1.08,
                  color: "#ffffff",
                  fontWeight: 300,
                  marginBottom: "1rem",
                }}
              >
                India Through
                <br />
                <em
                  style={{
                    fontStyle: "italic",
                    color: "#cd5c5c",
                    fontWeight: 600,
                  }}
                >
                  Your Lens
                </em>
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 500,
                  marginBottom: "0.75rem",
                  letterSpacing: "0.3px",
                }}
              >
                20–30 seconds. Your story. Your way.
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  maxWidth: "520px",
                }}
              >
                A short video contest inviting young voices to capture what India means to them — through words, visuals, culture, and creativity. No fancy production needed.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-semibold uppercase transition-all duration-300"
                  style={{
                    backgroundColor: "#cd5c5c",
                    color: "#ffffff",
                    padding: "0.85rem 2rem",
                    fontSize: "0.85rem",
                    letterSpacing: "1px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
                >
                  Enter the Contest →
                </Link>

                <button
                  onClick={scrollToThemes}
                  className="inline-flex items-center gap-2 font-semibold uppercase transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    padding: "0.85rem 2rem",
                    fontSize: "0.85rem",
                    letterSpacing: "1px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#d4af37";
                    (e.currentTarget as HTMLButtonElement).style.color = "#d4af37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)";
                  }}
                >
                  See Themes ↓
                </button>
              </div>

              {/* Hashtags */}
              <div
                style={{
                  marginTop: "3rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {["#IndiaThroughYourLens", "#ChicagoIndianArts", "#vaarta2026"].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right — deadline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                textAlign: "right",
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "0.4rem",
                }}
              >
                Deadline
              </p>
              <p
                className="font-heading"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#cd5c5c",
                  lineHeight: 1.1,
                }}
              >
                April 15, 2026
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THEMES ── */}
      <section id="themes" style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
        <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Choose Your Theme</SectionTag>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a1a1a", lineHeight: 1.2 }}
            >
              <strong style={{ fontWeight: 700 }}>Five ways in.</strong>
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "#555" }}>One story out.</em>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {themes.map((theme, i) => (
              <FadeInSection
                key={theme.number}
                delay={i * 0.1}
                className={themes.length % 2 !== 0 && i === themes.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-0.5rem)] md:mx-auto w-full" : ""}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    padding: "1.75rem 2rem",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(205,92,92,0.3)";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(0,0,0,0.06)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "rgba(0,0,0,0.08)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {theme.number}
                  </p>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.4rem" }}
                  >
                    {theme.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#888", lineHeight: 1.6 }}>
                    {theme.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIZES ── */}
      <section
        style={{
          padding: "5rem 3rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 60%, #1a1a1a 100%)",
        }}
      >
        <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>What You Win</SectionTag>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.2 }}
            >
              <strong style={{ fontWeight: 700 }}>Prizes worth</strong>
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.65)" }}>showing up for.</em>
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, i) => {
              const Icon = prize.icon;
              return (
                <FadeInSection key={prize.label} delay={i * 0.15}>
                  <div
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "2rem",
                      height: "100%",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.backgroundColor = "rgba(255,255,255,0.07)";
                      el.style.borderColor = `${prize.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.backgroundColor = "rgba(255,255,255,0.04)";
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                      <Icon size={16} style={{ color: prize.accent }} />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          letterSpacing: "1.5px",
                          textTransform: "uppercase",
                          color: prize.accent,
                          fontWeight: 600,
                        }}
                      >
                        {prize.label}
                      </span>
                    </div>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.6rem" }}
                    >
                      {prize.title}
                    </h3>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                      {prize.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          {/* Special Mentions */}
          <FadeInSection>
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(212,175,55,0.2)",
                backgroundColor: "rgba(212,175,55,0.04)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Star size={16} style={{ color: "#d4af37", flexShrink: 0 }} />
              <div>
                <span
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#d4af37",
                    fontWeight: 600,
                  }}
                >
                  Special Mentions
                </span>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", marginTop: "0.2rem" }}>
                  Digital certificates awarded for standout creativity or storytelling.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── HOW TO PARTICIPATE ── */}
      <section style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>How to Participate</SectionTag>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a1a1a", lineHeight: 1.2 }}
            >
              Make it. Post it. Win.
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeInSection key={step.number} delay={i * 0.1}>
                  <div style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
                    <p
                      className="font-heading"
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 800,
                        color: "rgba(0,0,0,0.06)",
                        lineHeight: 1,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {step.number}
                    </p>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        backgroundColor: "rgba(205,92,92,0.08)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <Icon size={18} style={{ color: "#cd5c5c" }} />
                    </div>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.5rem" }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          {/* Submission options */}
          <FadeInSection>
            <div style={{ marginTop: "3rem" }}>
              <h3
                className="font-heading text-center"
                style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "1.5rem" }}
              >
                Submission Options
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    icon: Youtube,
                    label: "YouTube",
                    desc: "Upload as Public or Unlisted and share the link.",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    desc: "Post on your IG page, tag us and add the hashtags.",
                  },
                  {
                    icon: HardDrive,
                    label: "Direct File",
                    desc: "Share via Google Drive or Dropbox with access enabled.",
                  },
                ].map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <div
                      key={opt.label}
                      style={{
                        border: "1px solid rgba(0,0,0,0.07)",
                        padding: "1.5rem",
                        backgroundColor: "#faf8f3",
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <Icon size={20} style={{ color: "#cd5c5c", flexShrink: 0, marginTop: "2px" }} />
                      <div>
                        <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a1a1a", marginBottom: "0.3rem" }}>
                          {opt.label}
                        </p>
                        <p style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.6 }}>{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── GUIDELINES & RULES ── */}
      <section style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
        <div style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection className="text-center" style={{ marginBottom: "3.5rem" }}>
            <SectionTag>Guidelines & Rules</SectionTag>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "#1a1a1a" }}
            >
              Everything you need to know.
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video Guidelines */}
            <FadeInSection>
              <div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#cd5c5c",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "2px solid rgba(205,92,92,0.2)",
                  }}
                >
                  Video Guidelines
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                  {guidelines.map((g) => (
                    <div key={g.label}>
                      <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1a1a1a", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.15rem" }}>
                        {g.label}
                      </p>
                      <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.5 }}>{g.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Judging Criteria */}
            <FadeInSection delay={0.1}>
              <div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#cd5c5c",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "2px solid rgba(205,92,92,0.2)",
                  }}
                >
                  Judging Criteria
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0 }}>
                  {judgingCriteria.map((c) => (
                    <li
                      key={c}
                      style={{
                        fontSize: "0.875rem",
                        color: "#555",
                        lineHeight: 1.5,
                        paddingLeft: "1.1rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.45em",
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#cd5c5c",
                          borderRadius: "50%",
                          display: "block",
                        }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#aaa", fontStyle: "italic" }}>
                  Judges' decisions are final.
                </p>
              </div>
            </FadeInSection>

            {/* Rules */}
            <FadeInSection delay={0.2}>
              <div>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "#cd5c5c",
                    fontWeight: 700,
                    marginBottom: "1.25rem",
                    paddingBottom: "0.75rem",
                    borderBottom: "2px solid rgba(205,92,92,0.2)",
                  }}
                >
                  Rules & Regulations
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", listStyle: "none", padding: 0 }}>
                  {rules.map((r) => (
                    <li
                      key={r}
                      style={{
                        fontSize: "0.875rem",
                        color: "#555",
                        lineHeight: 1.5,
                        paddingLeft: "1.1rem",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.45em",
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#d4af37",
                          borderRadius: "50%",
                          display: "block",
                        }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section style={{ padding: "5rem 3rem", backgroundColor: "#cd5c5c" }}>
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <FadeInSection>
            <h2
              className="font-heading"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#ffffff", lineHeight: 1.15, marginBottom: "0.5rem" }}
            >
              <strong style={{ fontWeight: 800 }}>Tell your story.</strong>
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 300 }}>Celebrate India.</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Submissions close April 15, 2026 &nbsp;·&nbsp; One entry per participant
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-semibold uppercase transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                color: "#cd5c5c",
                padding: "0.9rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                marginBottom: "3rem",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1a1a";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#cd5c5c";
              }}
            >
              Enter the Contest →
            </Link>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.2)",
                paddingTop: "2rem",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.5px",
              }}
            >
              <span>cica@example.com</span>
              <span>Chicago Indian Arts</span>
              <span>#IndiaThroughYourLens</span>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
