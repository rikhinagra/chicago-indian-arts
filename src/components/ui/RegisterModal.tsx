"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
}

export default function RegisterModal({
  isOpen,
  onClose,
  eventTitle,
  eventDate,
  eventVenue,
}: RegisterModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [persons, setPersons] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          persons,
          event: eventTitle,
          date: eventDate,
          venue: eventVenue,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setPersons("1");
      setSubmitted(false);
      setSubmitError("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            padding: "1rem",
          }}
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "500px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "4px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.2)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.5rem 1.5rem 1rem",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                position: "relative",
              }}
            >
              <button
                onClick={handleClose}
                className="absolute cursor-pointer"
                style={{
                  top: "1rem",
                  right: "1rem",
                  color: "#999",
                  background: "none",
                  border: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                <X size={20} />
              </button>
              <div
                className="uppercase font-semibold"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "2px",
                  color: "#cd5c5c",
                  marginBottom: "0.5rem",
                }}
              >
                Event Registration
              </div>
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: "1.3rem", color: "#1a1a1a", paddingRight: "2rem" }}
              >
                {eventTitle}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#666", marginTop: "0.3rem" }}>
                {eventDate} &middot; {eventVenue}
              </p>
            </div>

            {/* Body */}
            <div style={{ padding: "1.5rem" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                  style={{ padding: "2rem 1rem" }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212,175,55,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      marginBottom: "1rem",
                    }}
                  >
                    <CheckCircle size={30} color="#d4af37" />
                  </div>
                  <h4
                    className="font-heading"
                    style={{ fontSize: "1.3rem", color: "#1a1a1a", marginBottom: "0.5rem" }}
                  >
                    Registration Successful!
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Thank you, <strong style={{ color: "#1a1a1a" }}>{name}</strong>! Our team will
                    contact you shortly with more details about the event.
                  </p>
                  <button
                    onClick={handleClose}
                    className="cursor-pointer"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#ffffff",
                      padding: "0.7rem 2rem",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      border: "none",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#2d2d2d",
                        marginBottom: "0.4rem",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
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

                  {/* Email */}
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#2d2d2d",
                        marginBottom: "0.4rem",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
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
                        padding: "0.75rem 1rem",
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

                  {/* Phone & Persons */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#2d2d2d",
                          marginBottom: "0.4rem",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(123) 456-7890"
                        required
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
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
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#2d2d2d",
                          marginBottom: "0.4rem",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        No. of Persons
                      </label>
                      <select
                        value={persons}
                        onChange={(e) => setPersons(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          border: "2px solid #e0e0e0",
                          fontSize: "0.9rem",
                          outline: "none",
                          transition: "border-color 0.3s ease",
                          backgroundColor: "#ffffff",
                          boxSizing: "border-box",
                          cursor: "pointer",
                        }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = "#d4af37")}
                        onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e0e0")}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Person" : "Persons"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Info */}
                  <p style={{ fontSize: "0.75rem", color: "#999", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                    By registering, you agree to be contacted by our team with event details and updates.
                    Your information will not be shared with third parties.
                  </p>

                  {/* Error message */}
                  {submitError && (
                    <p style={{ fontSize: "0.85rem", color: "#cd5c5c", marginBottom: "1rem", textAlign: "center" }}>
                      {submitError}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer"
                    style={{
                      width: "100%",
                      padding: "0.85rem",
                      backgroundColor: "#cd5c5c",
                      color: "#ffffff",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      border: "none",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) e.currentTarget.style.backgroundColor = "#1a1a1a";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) e.currentTarget.style.backgroundColor = "#cd5c5c";
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Register Now"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
