"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Mail, Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const subjects = [
  "General Inquiry",
  "Vaarta Literature Festival",
  "Prasang Fashion Innovation",
  "Varnam Photography",
  "Sponsorship",
  "Volunteering",
  "Media / Press",
  "Other",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    detail: "info@chicagoindianarts.org",
    href: "mailto:info@chicagoindianarts.org",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: "(312) 555-0190",
    href: "tel:+13125550190",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "Chicago, Illinois",
    href: null,
  },
  {
    icon: Clock,
    title: "Response Time",
    detail: "Within 2–3 business days",
    href: null,
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || message.length < 10) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
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
            Message Sent!
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#666", marginBottom: "1rem" }}>
            Thank you, <strong style={{ color: "#1a1a1a" }}>{name}</strong>! We&apos;ve received your
            message and will get back to you within 2–3 business days.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: "2rem" }}>
            A confirmation will be sent to <strong style={{ color: "#666" }}>{email}</strong>
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
        data-section="contact-hero"
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
          className="absolute"
          style={{
            bottom: "-10%",
            left: "-5%",
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
            <SectionTag>Get in Touch</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Contact <strong className="font-bold" style={{ color: "#d4af37" }}>Us</strong>
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
              Have a question, want to collaborate, or interested in sponsoring an event?
              We&apos;d love to hear from you. Reach out and our team will get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        data-section="contact-main"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="contact-grid"
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
          {/* Left Column — Contact Form */}
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

              {/* Subject */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                >
                  Subject *
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                    color: subject ? "#2d2d2d" : "#999",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                >
                  <option value="" disabled>Select a subject...</option>
                  {subjects.map((s) => (
                    <option key={s} value={s} style={{ color: "#2d2d2d" }}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#2d2d2d", marginBottom: "0.4rem", letterSpacing: "0.5px" }}
                >
                  Message *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  rows={6}
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
                    resize: "none",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                />
              </div>

              {/* Privacy Note */}
              <p style={{ fontSize: "0.78rem", color: "#999", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Your information is safe with us. We&apos;ll only use it to respond to your inquiry
                and will never share your details with third parties.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !name || !email || !subject || message.length < 10}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  backgroundColor: name && email && subject && message.length >= 10 ? "#cd5c5c" : "#ccc",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: name && email && subject && message.length >= 10 ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  if (name && email && subject && message.length >= 10) e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  if (name && email && subject && message.length >= 10) e.currentTarget.style.backgroundColor = "#cd5c5c";
                }}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </FadeInSection>

          {/* Right Column — Contact Info & Details */}
          <FadeInSection>
            {/* Contact Information Cards */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                className="font-heading"
                style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 500 }}
              >
                Contact Information
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      key={item.title}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1.2rem 1.5rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.06)",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        color: "inherit",
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
                          width: "44px",
                          height: "44px",
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
                      <div>
                        <div style={{ fontSize: "0.78rem", color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "0.2rem" }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a" }}>
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {content}
                      </a>
                    );
                  }
                  return content;
                })}
              </div>
            </div>

            {/* FAQ-style Quick Answers */}
            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                className="font-heading"
                style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 500 }}
              >
                Common Questions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem" }}>
                    How can I become a sponsor?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                    Select &quot;Sponsorship&quot; as the subject in the form and tell us about your
                    organization. We offer various sponsorship tiers for our events.
                  </p>
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem" }}>
                    I&apos;m an artist — can I participate?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                    We love working with artists. Reach out with your portfolio and let us know
                    which program interests you — Vaarta, Prasang, or Varnam.
                  </p>
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem" }}>
                    Where are your events held?
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                    Our events take place across various venues in the Chicago area. Specific
                    venue details are shared upon registration for each event.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div
              style={{
                padding: "1.5rem",
                borderLeft: "3px solid #d4af37",
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <Mail size={20} color="#d4af37" />
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a1a1a" }}>
                  We Value Your Voice
                </span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.7 }}>
                Whether it&apos;s feedback, a collaboration idea, or a simple hello — every
                message matters to us. Our team personally reviews and responds to each inquiry.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
