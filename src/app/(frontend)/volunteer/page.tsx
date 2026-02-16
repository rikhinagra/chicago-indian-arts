"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Camera, Mic, ClipboardList, Megaphone, Users, Heart } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const volunteerRoles = [
  {
    title: "Event Coordinator",
    description: "Help organize and manage cultural events, coordinate schedules, and ensure smooth operations on event days.",
    icon: ClipboardList,
  },
  {
    title: "Photographer / Videographer",
    description: "Capture the energy and beauty of our events through photography and video for social media and archives.",
    icon: Camera,
  },
  {
    title: "Registration & Ticketing",
    description: "Manage guest check-in, handle ticket verification, and assist attendees at the registration desk.",
    icon: Users,
  },
  {
    title: "Social Media & Promotions",
    description: "Help with content creation, event promotion, and managing social media channels before and during events.",
    icon: Megaphone,
  },
  {
    title: "Stage & Backstage Support",
    description: "Assist with stage setup, backstage coordination, sound checks, and overall event logistics.",
    icon: Mic,
  },
  {
    title: "General Volunteer",
    description: "Available for any role needed, from greeting guests to helping with setup and teardown.",
    icon: Heart,
  },
];

export default function VolunteerPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="volunteer-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        {/* Decorative Elements */}
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-8%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
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
            <SectionTag>Get Involved</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Volunteer <strong className="font-bold" style={{ color: "#d4af37" }}>With Us</strong>
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
              Be part of something meaningful. We&apos;re always looking for passionate
              volunteers to help bring our cultural events to life. No experience necessary,
              just enthusiasm and a love for the arts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section
        data-section="volunteer-roles"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                className="font-heading font-light"
                style={{ fontSize: "2.2rem", color: "#1a1a1a", marginBottom: "0.8rem" }}
              >
                Available Roles
              </h2>
              <p style={{ fontSize: "0.95rem", color: "#666", maxWidth: "550px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
                We have a variety of volunteer opportunities. Choose one that fits your skills and interests.
              </p>
            </div>
          </FadeInSection>

          <div
            data-section="volunteer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {volunteerRoles.map((role) => {
              const Icon = role.icon;
              return (
                <FadeInSection key={role.title}>
                  <div
                    style={{
                      padding: "1.5rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
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
                        <Icon size={20} color="#d4af37" />
                      </div>
                      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1a1a1a" }}>
                        {role.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                      {role.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>

          <FadeInSection>
            <p style={{ fontSize: "0.88rem", color: "#999", textAlign: "center", fontStyle: "italic" }}>
              We may have other needs not listed here. Don&apos;t hesitate to reach out even if your skill doesn&apos;t match a specific role.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* How to Apply Section */}
      <section
        data-section="volunteer-apply"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <FadeInSection>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "2.2rem", color: "#1a1a1a", marginBottom: "1rem" }}
            >
              How to Apply
            </h2>
            <p style={{ fontSize: "1rem", color: "#666", lineHeight: 1.8, marginBottom: "2rem" }}>
              Interested in volunteering? Send us an email with your <strong style={{ color: "#1a1a1a" }}>name</strong> and
              the <strong style={{ color: "#1a1a1a" }}>role you&apos;re interested in</strong> in the subject line.
              We&apos;ll get back to you with details about upcoming events and how you can help.
            </p>

            <a
              href="mailto:info@chicagoindianarts.org?subject=Volunteer%20Application%20-%20[Your%20Name]%20-%20[Role]"
              style={{
                display: "inline-block",
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.9rem 2.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Email Us to Volunteer
            </a>

            <p style={{ fontSize: "0.82rem", color: "#999", marginTop: "1.2rem" }}>
              info@chicagoindianarts.org
            </p>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
