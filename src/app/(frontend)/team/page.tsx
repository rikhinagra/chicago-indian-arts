"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Users, Award, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const leadershipTeam = [
  {
    name: "Jigar Shah",
    role: "Founder & President",
    subtitle: "Founder, Chicago Indian Arts",
    bio: "A passionate advocate for Indian arts and culture, Jigar founded Chicago Indian Collective Arts to celebrate and preserve India's rich cultural heritage in the heart of Chicago.",
    fullBio:
      "Jigar Shah is the Founder of Chicago Indian Arts. He is passionate about the connection between stories, films, and community. He aims to share perspectives through films and art by providing a platform for talents who are overlooked as he empowers each of us to see our inner artists. Jigar holds several leadership titles and is an advisory board member to several nonprofits. He also serves as a Director of the Chicago South Asian Film Festival and jury member in other international film festivals. Working in a leadership role in a Global healthcare financial firm, Jigar is a technology strategy leader who holds advanced degrees in Engineering, MBA (Chicago), and Law (Pritzker School of Law, Northwestern, Chicago). He is an avid reader with a profound appreciation for literature, poetry, and the arts. He believes in the power of conversation to shape identity, foster empathy, and encourage civic engagement.",
    quote:
      "I believe in bringing each of us together through art and culture; this is possible, and I make this an everyday action in my life.",
    image: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1771930385/founder_qtzo8q.webp",
  },
  {
    name: "Vikram Desai",
    role: "Vice President",
    subtitle: "Vice President, Chicago Indian Arts",
    bio: "A dedicated leader with a deep passion for community building and cultural preservation, Vikram brings strategic vision to Chicago Indian Arts.",
    fullBio:
      "Vikram Desai serves as the Vice President of Chicago Indian Arts. With a strong background in community engagement and nonprofit leadership, he plays a vital role in shaping the organization's strategic direction. Vikram is deeply committed to fostering meaningful connections through art and culture, ensuring that Chicago's Indian community has a vibrant platform for creative expression and cultural celebration.",
    quote:
      "Art has the power to bridge communities and create a shared sense of belonging that transcends boundaries.",
    image:
      "https://res.cloudinary.com/dom3oj7ya/image/upload/v1771928983/vice_president_daz1fc.webp",
  },
  {
    name: "Divya Verma",
    role: "Director of Programs",
    subtitle: "Director of Programs, Chicago Indian Arts",
    bio: "An experienced program strategist, Divya oversees all cultural initiatives and events that bring the mission of Chicago Indian Arts to life.",
    fullBio:
      "Divya Verma serves as the Director of Programs at Chicago Indian Arts. She is responsible for designing, developing, and overseeing the organization's diverse portfolio of cultural programs and events. With a keen eye for detail and a passion for storytelling through the arts, Divya ensures that every program reflects the richness and depth of Indian culture while engaging audiences across Chicago and beyond.",
    quote:
      "Every program we create is an opportunity to tell a story, celebrate heritage, and inspire the next generation of artists.",
    image:
      "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118852/divya-verma-director-of-programs_oatiqe.webp",
  },
];

const boardMembers = [
  {
    name: "Coming Soon",
    title: "Board Member",
    image:
      "https://ui-avatars.com/api/?name=BM&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
  },
  {
    name: "Coming Soon",
    title: "Board Member",
    image:
      "https://ui-avatars.com/api/?name=BM&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
  },
  {
    name: "Coming Soon",
    title: "Board Member",
    image:
      "https://ui-avatars.com/api/?name=BM&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
  },
  {
    name: "Coming Soon",
    title: "Board Member",
    image:
      "https://ui-avatars.com/api/?name=BM&background=cd5c5c&color=fff&size=200&font-size=0.4&bold=true",
  },
];

function LeadershipModal({
  member,
  onClose,
}: {
  member: (typeof leadershipTeam)[0];
  onClose: () => void;
}) {
  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <>
    <style>{`
      /* Tablet */
      @media (max-width: 768px) {
        [data-modal="leadership-content"] {
          padding: 1.5rem 1.5rem 1.25rem !important;
        }
        [data-modal="leadership-bio-layout"] {
          flex-direction: column !important;
          align-items: center !important;
        }
        [data-modal="leadership-image"] {
          width: 200px !important;
          height: 260px !important;
          order: -1;
        }
        [data-modal="leadership-name"] {
          font-size: 1.6rem !important;
        }
        [data-modal="leadership-quote-marks"] {
          font-size: 2.8rem !important;
        }
        [data-modal="leadership-quote-text"] {
          font-size: 0.9rem !important;
          padding-left: 1rem !important;
        }
        [data-modal="leadership-bio-text"] {
          font-size: 0.88rem !important;
          text-align: center !important;
        }
        [data-modal="leadership-subtitle"] {
          font-size: 0.9rem !important;
        }
      }
      /* Mobile */
      @media (max-width: 480px) {
        [data-modal="leadership-overlay"] {
          padding: 0.5rem !important;
          align-items: flex-start !important;
          padding-top: 1rem !important;
        }
        [data-modal="leadership-content"] {
          padding: 1.25rem 1.25rem 1rem !important;
        }
        [data-modal="leadership-name"] {
          font-size: 1.35rem !important;
        }
        [data-modal="leadership-image"] {
          width: 160px !important;
          height: 210px !important;
        }
        [data-modal="leadership-quote-marks"] {
          font-size: 2.2rem !important;
        }
        [data-modal="leadership-quote-text"] {
          font-size: 0.85rem !important;
          padding-left: 0.75rem !important;
          line-height: 1.7 !important;
        }
        [data-modal="leadership-bio-text"] {
          font-size: 0.85rem !important;
          line-height: 1.75 !important;
          text-align: center !important;
        }
        [data-modal="leadership-subtitle"] {
          font-size: 0.85rem !important;
        }
        [data-modal="leadership-role"] {
          font-size: 0.8rem !important;
        }
        [data-modal="leadership-quote-section"] {
          margin-top: 1.25rem !important;
          margin-bottom: 1.25rem !important;
          gap: 0.5rem !important;
        }
        [data-modal="leadership-close"] {
          width: 32px !important;
          height: 32px !important;
          top: 0.75rem !important;
          right: 0.75rem !important;
        }
      }
    `}</style>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-modal="leadership-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#5c5c3d",
          borderLeft: "4px solid #d4af37",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky close button — stays visible even when scrolling */}
        <div style={{ position: "relative", flexShrink: 0, height: 0 }}>
          <button
            onClick={onClose}
            aria-label="Close"
            data-modal="leadership-close"
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              zIndex: 10,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.8)";
              e.currentTarget.style.borderColor = "#d4af37";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          data-modal="leadership-content"
          style={{
            padding: "2.5rem 2.5rem 2rem",
            overflowY: "auto",
            flex: 1,
          }}
        >
          {/* Name with gold accent */}
          <div style={{ marginBottom: "1.5rem", paddingRight: "2.5rem" }}>
            <div
              style={{
                borderLeft: "3px solid #d4af37",
                paddingLeft: "1rem",
                display: "inline-block",
              }}
            >
              <h2
                className="font-heading"
                data-modal="leadership-name"
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  color: "#d4af37",
                  lineHeight: 1.2,
                }}
              >
                {member.name}
              </h2>
            </div>
          </div>

          {/* Subtitle / Role */}
          <div style={{ marginBottom: "0.5rem", paddingLeft: "0.5rem" }}>
            <p
              data-modal="leadership-subtitle"
              style={{
                fontStyle: "italic",
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
              }}
            >
              {member.subtitle}
            </p>
            <p
              data-modal="leadership-role"
              style={{
                color: "#d4af37",
                fontSize: "0.9rem",
                fontWeight: 600,
                marginTop: "0.25rem",
              }}
            >
              {member.role}
            </p>
          </div>

          {/* Quote section */}
          {member.quote && (
            <div
              data-modal="leadership-quote-section"
              style={{
                margin: "2rem 0",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                data-modal="leadership-quote-marks"
                style={{
                  fontSize: "3.5rem",
                  lineHeight: 1,
                  color: "#d4af37",
                  fontFamily: "Georgia, serif",
                  flexShrink: 0,
                  marginTop: "-0.5rem",
                }}
              >
                &#x201C;&#x201C;
              </span>
              <blockquote
                data-modal="leadership-quote-text"
                style={{
                  borderLeft: "2px solid rgba(212,175,55,0.4)",
                  paddingLeft: "1.25rem",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                {member.quote}
              </blockquote>
            </div>
          )}

          {/* Bio + Image layout */}
          <div
            data-modal="leadership-bio-layout"
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
              marginTop: "1.5rem",
            }}
          >
            {/* Bio text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                data-modal="leadership-bio-text"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "0.92rem",
                  lineHeight: 1.85,
                }}
              >
                {member.fullBio}
              </p>
            </div>

            {/* Image on the right */}
            <div
              data-modal="leadership-image"
              style={{
                flexShrink: 0,
                width: "280px",
                height: "360px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                style={{ /* filter: "grayscale(80%)" */ }}
                sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, 280px"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </>
  );
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof leadershipTeam)[0] | null
  >(null);

  return (
    <>
      {/* Page-level responsive styles — always in DOM */}
      <style>{`
        /* Tablet */
        @media (max-width: 768px) {
          [data-card="role-label"] {
            left: -0.5rem !important;
            top: -0.75rem !important;
            padding: 0.3rem 0.7rem !important;
          }
          [data-card="role-label"] span {
            font-size: 0.7rem !important;
          }
          [data-section="team-hero"] {
            padding: 8rem 1.5rem 2.5rem !important;
          }
          [data-section="team-hero"] h1 {
            font-size: 2.5rem !important;
          }
          [data-section="team-hero"] p {
            font-size: 0.95rem !important;
          }
          [data-section="team-leadership"] {
            padding: 3rem 1.5rem !important;
          }
          [data-section="team-leadership"] h2 {
            font-size: 1.8rem !important;
          }
          [data-section="team-cta"] {
            padding: 3rem 1.5rem !important;
          }
          [data-section="team-cta"] h2 {
            font-size: 2rem !important;
          }
        }
        /* Mobile */
        @media (max-width: 480px) {
          [data-card="role-label"] {
            left: 0 !important;
            top: -0.65rem !important;
            padding: 0.25rem 0.6rem !important;
          }
          [data-card="role-label"] span {
            font-size: 0.65rem !important;
          }
          [data-section="team-hero"] {
            padding: 7rem 1rem 2rem !important;
          }
          [data-section="team-hero"] h1 {
            font-size: 2rem !important;
          }
          [data-section="team-hero"] p {
            font-size: 0.88rem !important;
          }
          [data-section="team-leadership"] {
            padding: 2.5rem 1rem !important;
          }
          [data-section="team-leadership"] h2 {
            font-size: 1.5rem !important;
          }
          [data-section="team-leadership-grid"] {
            gap: 1.5rem !important;
          }
          [data-section="team-cta"] {
            padding: 2.5rem 1rem !important;
          }
          [data-section="team-cta"] h2 {
            font-size: 1.6rem !important;
          }
          [data-section="team-cta"] p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

      {/* Leadership Modal */}
      <AnimatePresence>
        {selectedMember && (
          <LeadershipModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        data-section="team-hero"
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
            <SectionTag>Our Team</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Our{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Team
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
              Meet the dedicated individuals who bring Chicago Indian Arts to
              life — our leadership, board, and the passionate people behind
              every event and initiative.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        data-section="team-leadership"
        style={{ padding: "4rem 3rem", backgroundColor: "#6b6b4e" }}
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
                  backgroundColor: "rgba(212,175,55,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Users size={20} color="#d4af37" />
              </div>
              <SectionTag>Leadership</SectionTag>
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: "2.2rem",
                fontWeight: 300,
                color: "#ffffff",
                marginBottom: "2.5rem",
              }}
            >
              Leading the{" "}
              <strong className="font-semibold" style={{ color: "#d4af37" }}>
                Vision
              </strong>
            </h2>

            <div
              data-section="team-leadership-grid"
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                gap: "2rem",
              }}
            >
              {leadershipTeam.map((member, i) => (
                <FadeInSection key={member.name + i} delay={i * 0.15}>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedMember(member)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedMember(member);
                      }
                    }}
                    style={{
                      transition: "all 0.4s ease",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Role label — half outside, half inside the image top-left */}
                    <div
                      data-card="role-label"
                      style={{
                        position: "absolute",
                        top: "-0.85rem",
                        left: "-0.85rem",
                        zIndex: 3,
                        border: "1px dashed rgba(255,255,255,0.5)",
                        padding: "0.35rem 0.85rem",
                        backgroundColor: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <span
                        style={{
                          color: "#ffffff",
                          fontSize: "0.75rem",
                          fontWeight: 400,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {member.role}
                      </span>
                    </div>

                    {/* Photo */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "3 / 4",
                        overflow: "hidden",
                        backgroundColor: "#3a3a2a",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        style={{
                          /* filter: "grayscale(100%)", */
                          transition: "transform 0.5s ease",
                        }}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Gold banner at bottom */}
                    <div
                      style={{
                        backgroundColor: "#b8a94e",
                        padding: "0.75rem 1rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <span
                        className="font-heading font-bold"
                        style={{
                          color: "#1a1a1a",
                          fontSize: "0.9rem",
                          marginRight: "0.3rem",
                        }}
                      >
                        {member.name}
                      </span>
                      <em
                        style={{
                          color: "rgba(26,26,26,0.7)",
                          fontSize: "0.78rem",
                          fontStyle: "italic",
                        }}
                      >
                        {member.subtitle}
                      </em>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Pagination dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5rem",
                marginTop: "2.5rem",
              }}
            >
              {leadershipTeam.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor:
                      i === 0 ? "#b8a94e" : "rgba(255,255,255,0.3)",
                    transition: "background-color 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Board Section — Hidden for now, will re-enable when real content is available
      <section
        data-section="team-board"
        style={{
          padding: "3rem 3rem",
          backgroundColor: "#ffffff",
        }}
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
                  backgroundColor: "rgba(205,92,92,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Award size={20} color="#cd5c5c" />
              </div>
              <SectionTag>Board of Directors</SectionTag>
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
              Our{" "}
              <strong className="font-semibold" style={{ color: "#d4af37" }}>
                Board
              </strong>
            </h2>

            <div
              data-section="team-board-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
              }}
            >
              {boardMembers.map((member, i) => (
                <FadeInSection key={member.name + i} delay={i * 0.1}>
                  <div
                    style={{
                      backgroundColor: "#faf8f3",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "1.5rem",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#d4af37";
                      e.currentTarget.style.boxShadow =
                        "0 4px 16px rgba(0,0,0,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginBottom: "1rem",
                        border: "2px solid rgba(205,92,92,0.3)",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </div>
                    <h4
                      className="font-heading font-semibold"
                      style={{
                        fontSize: "1rem",
                        color: "#1a1a1a",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {member.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#999",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {member.title}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>
      */}

      {/* CTA Section */}
      <section
        data-section="team-cta"
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
              Want to Join Our Team?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              We are always looking for passionate individuals who share our
              love for Indian arts and culture. Volunteer with us and be part
              of something meaningful.
            </p>
            <Link
              href="/volunteer"
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
              Get Involved
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
