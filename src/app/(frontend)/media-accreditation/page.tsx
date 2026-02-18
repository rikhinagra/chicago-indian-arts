"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().min(2, "Organization is required"),
  designation: z.string().min(2, "Designation is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  mediaType: z.string().min(1, "Please select media type"),
  portfolioUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  event: z.string().min(1, "Please select an event"),
  coveragePlan: z
    .string()
    .min(20, "Please describe your coverage plan (min 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const mediaTypes = [
  "Print",
  "Television",
  "Digital / Online",
  "Radio",
  "Podcast",
  "Photography",
];

const events = [
  "Vaarta Literature Festival (May 30)",
  "Prasang Fashion Innovation Show (May 20)",
  "Varnam Photography Exhibition (August 10-12)",
  "All Events",
];

const labelStyle = {
  display: "block",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "#2d2d2d",
  marginBottom: "0.4rem",
  letterSpacing: "0.5px",
};

const inputStyle = {
  width: "100%",
  padding: "0.85rem 1rem",
  border: "2px solid #e0e0e0",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.3s ease",
  backgroundColor: "#ffffff",
  boxSizing: "border-box" as const,
};

const errorStyle = {
  fontSize: "0.75rem",
  color: "#cd5c5c",
  marginTop: "0.3rem",
};

export default function MediaAccreditationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError("");
    try {
      const res = await fetch("/api/media-accreditation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or email us directly at info@chicagoindianarts.org"
      );
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
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "rgba(212,175,55,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "1.5rem",
            }}
          >
            <CheckCircle size={32} color="#d4af37" />
          </div>
          <h1
            className="font-heading font-light"
            style={{
              fontSize: "2.5rem",
              color: "#1a1a1a",
              marginBottom: "1rem",
            }}
          >
            Application Submitted!
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            Thank you for your interest in covering our events. Your media
            accreditation application is under review. We&apos;ll contact you
            within 5-7 business days with a decision.
          </p>
          <Link
            href="/"
            className="inline-block font-semibold uppercase"
            style={{
              backgroundColor: "#cd5c5c",
              color: "#ffffff",
              padding: "0.8rem 2rem",
              fontSize: "0.8rem",
              letterSpacing: "1.5px",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1a1a1a")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#cd5c5c")
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
        data-section="accreditation-hero"
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
            <SectionTag>Press</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Media{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Accreditation
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
              Apply for press credentials to cover our 2026 events. We welcome
              journalists, photographers, bloggers, and content creators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section
        data-section="accreditation-form"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "750px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name & Organization */}
              <div
                data-section="accreditation-form-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    {...register("name")}
                    style={inputStyle}
                    placeholder="Your full name"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                  {errors.name && (
                    <p style={errorStyle}>{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Organization *</label>
                  <input
                    {...register("organization")}
                    style={inputStyle}
                    placeholder="Publication / outlet"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                  {errors.organization && (
                    <p style={errorStyle}>{errors.organization.message}</p>
                  )}
                </div>
              </div>

              {/* Designation & Media Type */}
              <div
                data-section="accreditation-form-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Designation *</label>
                  <input
                    {...register("designation")}
                    style={inputStyle}
                    placeholder="e.g. Reporter, Editor"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                  {errors.designation && (
                    <p style={errorStyle}>{errors.designation.message}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Media Type *</label>
                  <select
                    {...register("mediaType")}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage:
                        'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")',
                      backgroundPosition: "right 0.75rem center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "2.5rem",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  >
                    <option value="">Select type...</option>
                    {mediaTypes.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors.mediaType && (
                    <p style={errorStyle}>{errors.mediaType.message}</p>
                  )}
                </div>
              </div>

              {/* Email & Phone */}
              <div
                data-section="accreditation-form-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    {...register("email")}
                    type="email"
                    style={inputStyle}
                    placeholder="you@email.com"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                  {errors.email && (
                    <p style={errorStyle}>{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>Phone *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    style={inputStyle}
                    placeholder="(555) 123-4567"
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "#d4af37")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e0e0")
                    }
                  />
                  {errors.phone && (
                    <p style={errorStyle}>{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Portfolio URL */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Portfolio / Website URL</label>
                <input
                  {...register("portfolioUrl")}
                  type="url"
                  style={inputStyle}
                  placeholder="https://..."
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                />
                {errors.portfolioUrl && (
                  <p style={errorStyle}>{errors.portfolioUrl.message}</p>
                )}
              </div>

              {/* Event */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={labelStyle}>Event *</label>
                <select
                  {...register("event")}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    backgroundImage:
                      'url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e")',
                    backgroundPosition: "right 0.75rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                >
                  <option value="">Select event...</option>
                  {events.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {errors.event && (
                  <p style={errorStyle}>{errors.event.message}</p>
                )}
              </div>

              {/* Coverage Plan */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={labelStyle}>Coverage Plan *</label>
                <textarea
                  {...register("coveragePlan")}
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                  placeholder="Describe your intended coverage — topics, format, distribution channels..."
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "#d4af37")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "#e0e0e0")
                  }
                />
                {errors.coveragePlan && (
                  <p style={errorStyle}>{errors.coveragePlan.message}</p>
                )}
              </div>

              {/* Error message */}
              {submitError && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#cd5c5c",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  {submitError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="flex items-center justify-center cursor-pointer"
                style={{
                  width: "100%",
                  padding: "1rem",
                  backgroundColor:
                    isSubmitting || !isValid ? "#ccc" : "#cd5c5c",
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  border: "none",
                  transition: "background-color 0.3s ease",
                  gap: "0.5rem",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting && isValid) {
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting && isValid) {
                    e.currentTarget.style.backgroundColor = "#cd5c5c";
                  }
                }}
              >
                <Send size={16} />
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
