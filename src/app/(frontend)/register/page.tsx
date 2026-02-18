"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle, ArrowLeft, Users, BookOpen, Camera, Palette } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const interestOptions = [
  {
    id: "vaarta",
    label: "Vaarta",
    subtitle: "Literature & Storytelling",
    icon: BookOpen,
  },
  {
    id: "prasang",
    label: "Prasang",
    subtitle: "Fashion & Design",
    icon: Palette,
  },
  {
    id: "varnam",
    label: "Varnam",
    subtitle: "Photography & Visual Arts",
    icon: Camera,
  },
];

const hearAboutOptions = [
  "Social Media",
  "Friend or Family",
  "Google Search",
  "News / Press",
  "Community Event",
  "Other",
];

const communityBenefits = [
  "Early access to event registrations and exclusive invites",
  "Updates on upcoming programs, workshops, and exhibitions",
  "Invitations to members-only cultural gatherings",
  "Opportunities to connect with artists and speakers",
];

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [hearAbout, setHearAbout] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, city, interests, hearAbout }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#faf8f3", padding: "8rem 1.5rem 4rem" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#d4af37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "1.5rem",
            }}
          >
            <CheckCircle size={36} color="#ffffff" />
          </div>
          <h1
            className="font-heading font-light"
            style={{ fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "1rem" }}
          >
            Welcome to the Community!
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#666", marginBottom: "1rem" }}>
            Thank you, <strong style={{ color: "#1a1a1a" }}>{name}</strong>! You&apos;re now part of the
            Chicago Indian Arts community. We&apos;ll keep you updated on upcoming events, programs,
            and exclusive opportunities.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: "2rem" }}>
            A confirmation email has been sent to <strong style={{ color: "#666" }}>{email}</strong>
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        data-section="register-hero"
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
            <SectionTag>Become a Member</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Join Our <strong className="font-bold" style={{ color: "#d4af37" }}>Community</strong>
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
              Register to stay connected with Chicago Indian Arts. Get early access to events,
              exclusive invitations, and be the first to know about our programs in literature,
              fashion, and photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Registration Section */}
      <section
        data-section="register-main"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="register-grid"
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left Column - Registration Form */}
          <FadeInSection>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "2px solid #e0e0e0",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                />
              </div>

              {/* Email & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div>
                  <label
                    style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "2px solid #e0e0e0",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      backgroundColor: "#ffffff",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                  />
                </div>
                <div>
                  <label
                    style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "2px solid #e0e0e0",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      backgroundColor: "#ffffff",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                  />
                </div>
              </div>

              {/* City */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                >
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Chicago, New Delhi, London"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "2px solid #e0e0e0",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                />
              </div>

              {/* Interests */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="font-heading"
                  style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "0.4rem", fontWeight: 500 }}
                >
                  I&apos;m Interested In
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#999", marginBottom: "1rem" }}>
                  Select all that apply
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {interestOptions.map((option) => {
                    const isSelected = interests.includes(option.id);
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleInterest(option.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          padding: "1rem 1.2rem",
                          border: isSelected ? "2px solid #d4af37" : "2px solid #e0e0e0",
                          backgroundColor: isSelected ? "rgba(212,175,55,0.08)" : "#ffffff",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "42px",
                            height: "42px",
                            borderRadius: "50%",
                            backgroundColor: isSelected ? "#d4af37" : "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={20} color={isSelected ? "#ffffff" : "#999"} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a" }}>
                            {option.label}
                          </div>
                          <div style={{ fontSize: "0.8rem", color: "#999" }}>
                            {option.subtitle}
                          </div>
                        </div>
                        {isSelected && (
                          <div style={{ marginLeft: "auto" }}>
                            <CheckCircle size={20} color="#d4af37" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* How did you hear about us */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                >
                  How did you hear about us?
                </label>
                <select
                  value={hearAbout}
                  onChange={(e) => setHearAbout(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "2px solid #e0e0e0",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                    color: hearAbout ? "#2d2d2d" : "#999",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                >
                  <option value="" disabled>Select an option...</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option} style={{ color: "#2d2d2d" }}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Privacy Note */}
              <p style={{ fontSize: "0.78rem", color: "#999", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                By registering, you agree to receive updates about Chicago Indian Arts events and
                programs. We respect your privacy and will never share your information with third parties.
                You can unsubscribe at any time.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !name || !email}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  backgroundColor: name && email ? "#cd5c5c" : "#ccc",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: name && email ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (name && email) e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  if (name && email) e.currentTarget.style.backgroundColor = "#cd5c5c";
                }}
              >
                {isSubmitting ? "Registering..." : "Join the Community"}
              </button>

              {error && (
                <p style={{ color: "#cd5c5c", fontSize: "0.85rem", marginTop: "0.75rem", textAlign: "center" }}>
                  {error}
                </p>
              )}
            </form>
          </FadeInSection>

          {/* Right Column - Benefits & Images */}
          <FadeInSection>
            {/* Why Join */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                className="font-heading"
                style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 500 }}
              >
                Why Join Our Community?
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {communityBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.85rem",
                      padding: "1rem 1.2rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(0,0,0,0.06)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      <CheckCircle size={14} color="#d4af37" />
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-heading"
                  style={{ fontSize: "2rem", fontWeight: 300, color: "#d4af37", marginBottom: "0.3rem" }}
                >
                  500+
                </div>
                <div style={{ fontSize: "0.78rem", color: "#999", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Community Members
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-heading"
                  style={{ fontSize: "2rem", fontWeight: 300, color: "#d4af37", marginBottom: "0.3rem" }}
                >
                  12+
                </div>
                <div style={{ fontSize: "0.78rem", color: "#999", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                  Events Per Year
                </div>
              </div>
            </div>

            {/* Supporting Images */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                className="relative overflow-hidden"
                style={{ height: "220px", width: "100%" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
                  alt="Community gathering at cultural event"
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div
                  className="relative overflow-hidden"
                  style={{ height: "160px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
                    alt="Festival lights celebration"
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{ height: "160px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80"
                    alt="Art and culture showcase"
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              </div>
            </div>

            {/* Community Icon */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                borderLeft: "3px solid #d4af37",
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <Users size={20} color="#d4af37" />
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a" }}>
                  Growing Every Day
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.7 }}>
                Join a vibrant community of art lovers, culture enthusiasts, and creative minds
                from Chicago and around the world who share a passion for Indian arts and heritage.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
