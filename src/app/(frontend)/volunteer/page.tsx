"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Camera,
  Mic,
  ClipboardList,
  Megaphone,
  Users,
  Heart,
  CheckCircle,
  Send,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const volunteerRoles = [
  {
    title: "Event Coordinator",
    description:
      "Help organize and manage cultural events, coordinate schedules, and ensure smooth operations on event days.",
    icon: ClipboardList,
  },
  {
    title: "Photographer / Videographer",
    description:
      "Capture the energy and beauty of our events through photography and video for social media and archives.",
    icon: Camera,
  },
  {
    title: "Registration & Ticketing",
    description:
      "Manage guest check-in, handle ticket verification, and assist attendees at the registration desk.",
    icon: Users,
  },
  {
    title: "Social Media & Promotions",
    description:
      "Help with content creation, event promotion, and managing social media channels before and during events.",
    icon: Megaphone,
  },
  {
    title: "Stage & Backstage Support",
    description:
      "Assist with stage setup, backstage coordination, sound checks, and overall event logistics.",
    icon: Mic,
  },
  {
    title: "General Volunteer",
    description:
      "Available for any role needed, from greeting guests to helping with setup and teardown.",
    icon: Heart,
  },
];

const availabilityOptions = [
  "Weekends Only",
  "Weekdays Only",
  "Both Weekdays & Weekends",
  "Flexible",
];

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [availability, setAvailability] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleRole = (title: string) => {
    setSelectedRoles((prev) =>
      prev.includes(title) ? prev.filter((r) => r !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || selectedRoles.length === 0) return;
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          roles: selectedRoles,
          availability,
          experience,
          message,
        }),
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
          style={{
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
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
            style={{
              fontSize: "2.5rem",
              color: "#1a1a1a",
              marginBottom: "1rem",
            }}
          >
            Thank You for Volunteering!
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#666",
              marginBottom: "1rem",
            }}
          >
            Thank you,{" "}
            <strong style={{ color: "#1a1a1a" }}>{name}</strong>! We&apos;ve
            received your volunteer application and will reach out with details
            about upcoming events and how you can help.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#999",
              marginBottom: "2rem",
            }}
          >
            We&apos;ll contact you at{" "}
            <strong style={{ color: "#666" }}>{email}</strong>
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
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#d4af37")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1a1a1a")
            }
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
        data-section="volunteer-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
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
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
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
              Volunteer{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                With Us
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
              Be part of something meaningful. We&apos;re always looking for
              passionate volunteers to help bring our cultural events to life. No
              experience necessary, just enthusiasm and a love for the arts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section
        data-section="volunteer-form"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="volunteer-form-grid"
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
          {/* Left Column - Form */}
          <FadeInSection>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2d2d2d",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.5px",
                  }}
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
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                />
              </div>

              {/* Email & Phone */}
              <div
                data-section="volunteer-email-phone"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#2d2d2d",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.5px",
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
                      padding: "0.85rem 1rem",
                      border: "2px solid #e0e0e0",
                      fontSize: "0.9rem",
                      outline: "none",
                      transition: "border-color 0.3s ease",
                      backgroundColor: "#ffffff",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#2d2d2d",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.5px",
                    }}
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
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                </div>
              </div>

              {/* Select Roles */}
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: "1.3rem",
                    color: "#1a1a1a",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  Interested Roles *
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#999",
                    marginBottom: "1rem",
                  }}
                >
                  Select all that apply
                </p>
                <div
                  data-section="volunteer-role-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                  }}
                >
                  {volunteerRoles.map((role) => {
                    const isSelected = selectedRoles.includes(role.title);
                    const Icon = role.icon;
                    return (
                      <button
                        key={role.title}
                        type="button"
                        onClick={() => toggleRole(role.title)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.85rem 1rem",
                          border: isSelected
                            ? "2px solid #d4af37"
                            : "2px solid #e0e0e0",
                          backgroundColor: isSelected
                            ? "rgba(212,175,55,0.08)"
                            : "#ffffff",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            backgroundColor: isSelected
                              ? "#d4af37"
                              : "#f5f5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            flexShrink: 0,
                          }}
                        >
                          <Icon
                            size={16}
                            color={isSelected ? "#ffffff" : "#999"}
                          />
                        </div>
                        <span
                          style={{
                            fontSize: "0.82rem",
                            fontWeight: isSelected ? 600 : 400,
                            color: "#1a1a1a",
                          }}
                        >
                          {role.title}
                        </span>
                        {isSelected && (
                          <div style={{ marginLeft: "auto" }}>
                            <CheckCircle size={16} color="#d4af37" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2d2d2d",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Availability
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    border: "2px solid #e0e0e0",
                    fontSize: "0.9rem",
                    outline: "none",
                    transition: "border-color 0.3s ease",
                    backgroundColor: "#ffffff",
                    boxSizing: "border-box",
                    color: availability ? "#2d2d2d" : "#999",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                >
                  <option value="" disabled>
                    Select your availability...
                  </option>
                  {availabilityOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      style={{ color: "#2d2d2d" }}
                    >
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2d2d2d",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Experience / Skills
                </label>
                <textarea
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="Tell us about any relevant experience or skills..."
                  rows={3}
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
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                />
              </div>

              {/* Additional Message */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#2d2d2d",
                    marginBottom: "0.4rem",
                    letterSpacing: "0.5px",
                  }}
                >
                  Additional Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Anything else you'd like us to know..."
                  rows={3}
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
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                />
              </div>

              {/* Privacy Note */}
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#999",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Your information is safe with us. We&apos;ll only use it to
                contact you about volunteer opportunities and will never share
                your details with third parties.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !name ||
                  !email ||
                  selectedRoles.length === 0
                }
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  backgroundColor:
                    name && email && selectedRoles.length > 0
                      ? "#cd5c5c"
                      : "#ccc",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor:
                    name && email && selectedRoles.length > 0
                      ? "pointer"
                      : "not-allowed",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  if (name && email && selectedRoles.length > 0)
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  if (name && email && selectedRoles.length > 0)
                    e.currentTarget.style.backgroundColor = "#cd5c5c";
                }}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={16} />
                    Apply to Volunteer
                  </>
                )}
              </button>

              {error && (
                <p
                  style={{
                    color: "#cd5c5c",
                    fontSize: "0.85rem",
                    marginTop: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  {error}
                </p>
              )}
            </form>
          </FadeInSection>

          {/* Right Column - Roles Info */}
          <FadeInSection>
            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.3rem",
                  color: "#1a1a1a",
                  marginBottom: "1.5rem",
                  fontWeight: 500,
                }}
              >
                Available Roles
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {volunteerRoles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={role.title}
                      style={{
                        padding: "1.2rem 1.5rem",
                        backgroundColor: "#ffffff",
                        border: "1px solid rgba(0,0,0,0.06)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(212,175,55,0.3)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(0,0,0,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(0,0,0,0.06)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.4rem",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(212,175,55,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={18} color="#d4af37" />
                        </div>
                        <h4
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#1a1a1a",
                          }}
                        >
                          {role.title}
                        </h4>
                      </div>
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "#666",
                          lineHeight: 1.6,
                          paddingLeft: "2.85rem",
                        }}
                      >
                        {role.description}
                      </p>
                    </div>
                  );
                })}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Heart size={20} color="#d4af37" />
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  Make a Difference
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#666",
                  lineHeight: 1.7,
                }}
              >
                Our volunteers are the heart of Chicago Indian Arts. Whether
                it&apos;s your first time or you&apos;re a seasoned volunteer,
                we welcome you with open arms and promise a rewarding experience.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
