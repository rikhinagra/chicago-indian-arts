"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      data-section="newsletter" className="text-white"
      style={{ padding: "4rem 3rem", backgroundColor: "#1a1a1a" }}
    >
      <FadeInSection className="text-center" style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <h2
          data-section="newsletter-heading" className="font-heading font-semibold"
          style={{ fontSize: "2.2rem", marginBottom: "0.8rem", color: "#ffffff" }}
        >
          Stay Connected
        </h2>
        <p style={{ fontSize: "0.95rem", marginBottom: "2rem", color: "rgba(255,255,255,0.9)" }}>
          Get updates on upcoming events, exclusive content, and cultural highlights
          delivered to your inbox.
        </p>

        {submitted ? (
          <div style={{ fontSize: "0.95rem", fontWeight: 500, color: "#d4af37" }}>
            Thank you for subscribing! You&apos;ll receive updates about our upcoming events.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            data-section="newsletter-form" className="flex flex-col sm:flex-row"
            style={{ gap: "1rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 text-white focus:outline-none"
              style={{
                padding: "0.8rem 1.2rem",
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.1)",
                fontSize: "0.88rem",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#d4af37";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              }}
            />
            <button
              type="submit"
              className="text-white uppercase cursor-pointer"
              style={{
                padding: "0.8rem 2rem",
                backgroundColor: "#d4af37",
                border: "none",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#d4af37";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Subscribe
            </button>
          </form>
        )}
      </FadeInSection>
    </section>
  );
}
