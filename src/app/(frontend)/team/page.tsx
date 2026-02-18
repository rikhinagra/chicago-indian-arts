"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLeft, Users, Award } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const leadershipTeam = [
  {
    name: "Jigar Shah",
    role: "Founder & President",
    bio: "A passionate advocate for Indian arts and culture, Jigar founded Chicago Indian Collective Arts to celebrate and preserve India's rich cultural heritage in the heart of Chicago.",
    image: "/images/founder.webp",
  },
  {
    name: "Coming Soon",
    role: "Vice President",
    bio: "Details about our Vice President will be shared soon. Stay tuned for updates about our growing leadership team.",
    image:
      "https://ui-avatars.com/api/?name=VP&background=d4af37&color=fff&size=200&font-size=0.4&bold=true",
  },
  {
    name: "Coming Soon",
    role: "Director of Programs",
    bio: "Details about our Director of Programs will be shared soon. Stay tuned for updates about our growing leadership team.",
    image:
      "https://ui-avatars.com/api/?name=DP&background=d4af37&color=fff&size=200&font-size=0.4&bold=true",
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

export default function TeamPage() {
  return (
    <>
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
                <Users size={20} color="#d4af37" />
              </div>
              <SectionTag>Leadership</SectionTag>
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
              Leading the{" "}
              <strong className="font-semibold" style={{ color: "#d4af37" }}>
                Vision
              </strong>
            </h2>

            <div
              data-section="team-leadership-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
              }}
            >
              {leadershipTeam.map((member, i) => (
                <FadeInSection key={member.name + i} delay={i * 0.15}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      padding: "2rem",
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
                        "0 8px 24px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Avatar image */}
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        marginBottom: "1.2rem",
                        border: "2px solid rgba(212,175,55,0.3)",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="90px"
                      />
                    </div>

                    <h3
                      className="font-heading font-semibold"
                      style={{
                        fontSize: "1.2rem",
                        color: "#1a1a1a",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {member.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#cd5c5c",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        marginBottom: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {member.role}
                    </p>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#666",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Board Section */}
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
