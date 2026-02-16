"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart, ArrowLeft } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const presetAmounts = [10, 25, 50, 100, 250, 500];

const frequencyOptions = [
  { label: "One-Time", value: "one-time" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Annual", value: "annual" },
];

const impactItems = [
  {
    amount: "$25",
    description: "Provides art supplies for one student workshop",
  },
  {
    amount: "$50",
    description: "Sponsors a cultural performance at a community event",
  },
  {
    amount: "$100",
    description: "Funds a full scholarship for a young artist",
  },
  {
    amount: "$250",
    description: "Supports an entire community outreach program",
  },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [coverFee, setCoverFee] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentAmount = selectedAmount || parseInt(customAmount) || 0;
  const feeAmount = coverFee ? Math.round(currentAmount * 0.032 * 100) / 100 : 0;
  const totalAmount = currentAmount + feeAmount;

  const selectPreset = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustom = (val: string) => {
    setCustomAmount(val);
    setSelectedAmount(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount < 1 || !name || !email) return;
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
            <Heart size={36} color="#ffffff" fill="#ffffff" />
          </div>
          <h1
            className="font-heading font-light"
            style={{ fontSize: "2.5rem", color: "#1a1a1a", marginBottom: "1rem" }}
          >
            Thank You for Your Generosity
          </h1>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "#666", marginBottom: "2rem" }}>
            Your generous donation of <strong style={{ color: "#d4af37" }}>${totalAmount.toFixed(2)}</strong> helps
            us continue celebrating and preserving Indian cultural heritage. You&apos;ll receive a
            tax receipt via email shortly.
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
        data-section="donate-hero"
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
            top: "-20%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            left: "-5%",
            width: "300px",
            height: "300px",
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
            <SectionTag>Support Our Mission</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Support <strong className="font-bold" style={{ color: "#d4af37" }}>The Arts</strong>
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
              Your contribution helps us showcase the richness of Indian arts and culture,
              foster cross-cultural understanding, and empower the next generation of artists
              in our vibrant community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section
        data-section="donate-main"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="donate-grid"
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
          {/* Left Column - Donation Form */}
          <FadeInSection>
            <form onSubmit={handleSubmit}>
              {/* Amount Selection */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="font-heading"
                  style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1rem", fontWeight: 500 }}
                >
                  Select Your Gift Amount
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => selectPreset(amount)}
                      style={{
                        padding: "1rem",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        border: selectedAmount === amount ? "2px solid #d4af37" : "2px solid #e0e0e0",
                        backgroundColor: selectedAmount === amount ? "#d4af37" : "#ffffff",
                        color: selectedAmount === amount ? "#ffffff" : "#2d2d2d",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div style={{ position: "relative" }}>
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#666",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustom(e.target.value)}
                    placeholder="Enter custom amount"
                    style={{
                      width: "100%",
                      paddingLeft: "2rem",
                      paddingRight: "1rem",
                      paddingTop: "0.85rem",
                      paddingBottom: "0.85rem",
                      border: "2px solid #e0e0e0",
                      fontSize: "1rem",
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

              {/* Donation Frequency */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="font-heading"
                  style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1rem", fontWeight: 500 }}
                >
                  Donation Frequency
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "0.75rem",
                  }}
                >
                  {frequencyOptions.map((option) => (
                    <label
                      key={option.value}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.85rem 1rem",
                        border: frequency === option.value ? "2px solid #d4af37" : "2px solid #e0e0e0",
                        backgroundColor: frequency === option.value ? "rgba(212,175,55,0.08)" : "#ffffff",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        fontSize: "0.9rem",
                        fontWeight: frequency === option.value ? 600 : 400,
                        color: "#2d2d2d",
                      }}
                    >
                      <input
                        type="radio"
                        name="frequency"
                        value={option.value}
                        checked={frequency === option.value}
                        onChange={() => setFrequency(option.value)}
                        style={{ accentColor: "#d4af37", width: "16px", height: "16px" }}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Cover the Fee */}
              <div
                style={{
                  marginBottom: "2rem",
                  padding: "1rem 1.2rem",
                  backgroundColor: "rgba(212,175,55,0.06)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={coverFee}
                    onChange={() => setCoverFee(!coverFee)}
                    style={{ accentColor: "#d4af37", width: "18px", height: "18px" }}
                  />
                  <span style={{ fontSize: "0.9rem", color: "#2d2d2d" }}>
                    Cover the processing fee (3.2%) so 100% goes to the arts
                    {currentAmount > 0 && (
                      <span style={{ color: "#666", display: "block", fontSize: "0.8rem", marginTop: "0.2rem" }}>
                        +${(currentAmount * 0.032).toFixed(2)} fee | Total: ${totalAmount.toFixed(2)}
                      </span>
                    )}
                  </span>
                </label>
              </div>

              {/* Name & Email */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="font-heading"
                  style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1rem", fontWeight: 500 }}
                >
                  Your Information
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
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
                </div>
              </div>

              {/* Tax Info */}
              <p style={{ fontSize: "0.78rem", color: "#999", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Chicago Indian Collective Arts is a registered 501(c)(3) non-profit organization.
                All donations are tax-deductible to the fullest extent allowed by law.
              </p>

              {/* Donate Button */}
              <button
                type="submit"
                disabled={isSubmitting || currentAmount < 1}
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  backgroundColor: currentAmount >= 1 ? "#cd5c5c" : "#ccc",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: currentAmount >= 1 ? "pointer" : "not-allowed",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (currentAmount >= 1) e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  if (currentAmount >= 1) e.currentTarget.style.backgroundColor = "#cd5c5c";
                }}
              >
                {isSubmitting
                  ? "Processing..."
                  : currentAmount >= 1
                  ? `Donate $${totalAmount.toFixed(2)}`
                  : "Select an Amount"}
              </button>
            </form>
          </FadeInSection>

          {/* Right Column - Impact & Images */}
          <FadeInSection>
            {/* Your Impact */}
            <div style={{ marginBottom: "3rem" }}>
              <h3
                className="font-heading"
                style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "1.5rem", fontWeight: 500 }}
              >
                Your Impact
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {impactItems.map((item) => (
                  <div
                    key={item.amount}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
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
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#d4af37",
                        minWidth: "50px",
                      }}
                    >
                      {item.amount}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.5 }}>
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Images */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                className="relative overflow-hidden"
                style={{ height: "220px", width: "100%" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
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
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
                    alt="Cultural dance performance"
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
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
                    alt="Art exhibition showcase"
                    fill
                    className="object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                borderLeft: "3px solid #d4af37",
                backgroundColor: "#ffffff",
              }}
            >
              <p
                className="font-heading"
                style={{ fontSize: "1rem", fontStyle: "italic", color: "#2d2d2d", lineHeight: 1.7, marginBottom: "0.5rem" }}
              >
                &ldquo;Supporting Chicago Indian Arts means investing in the cultural fabric of our
                community. Every contribution helps us bring stories, art, and traditions to life.&rdquo;
              </p>
              <p style={{ fontSize: "0.8rem", color: "#d4af37", fontWeight: 600 }}>
                Jigar Shah, Founder
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
