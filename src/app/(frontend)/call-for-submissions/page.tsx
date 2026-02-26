"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  BookOpen,
  Feather,
  PenTool,
  ScrollText,
  CheckCircle,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const submissionTypes = [
  "Poetry",
  "Short Story",
  "Memoir / Personal Essay",
  "Experimental Writing",
  "Novel",
  "Biography",
  "Academic Research",
  "Script",
];

const guidelines = [
  {
    icon: FileText,
    title: "Original Work Only",
    description:
      "All content presented must be the original work of the speaker or properly attributed, and must not infringe upon any third-party intellectual property rights.",
  },
  {
    icon: BookOpen,
    title: "All Genres & Languages Welcome",
    description:
      "Programming includes works in Hindi, Urdu, Tamil, Bengali, and other languages of India and the Indian diaspora, with English translations where feasible. We welcome poetry, fiction, memoir, essays, scripts, and experimental writing.",
  },
  {
    icon: Feather,
    title: "Your Rights Are Protected",
    description:
      "Participants retain all copyright and intellectual property rights to their original literary works. Chicago Indian Arts does not claim ownership of any participant\u2019s creative work. Any use beyond festival documentation requires separate written consent.",
  },
  {
    icon: PenTool,
    title: "Participation Opportunities",
    description:
      "Selected contributors may be invited for author talks, poetry readings, panel discussions, open mic sessions (5 minutes per participant), book launches, and writing workshops at Chicago Indian Literature Festival 2026.",
  },
];

const terms = [
  "All submissions must be the original work of the applicant and must not infringe upon any third-party intellectual property rights.",
  "By participating in Chicago Indian Literature Festival, you grant Chicago Indian Arts a perpetual, royalty-free, non-exclusive license to use images, video, and audio captured at the event for educational, promotional, and archival purposes.",
  "Participants retain all copyright and intellectual property rights to their original literary works. Chicago Indian Arts does not claim ownership of any participant\u2019s creative work.",
  "All participants must adhere to the Festival Code of Conduct. Harassment, discrimination, hate speech, and disruption of sessions are strictly prohibited.",
  "Speakers and presenters agree to adhere to their allotted session time and format as determined by the programming committee. Open mic slots are limited to 5 minutes per participant.",
  "Speakers may not use their platform to promote commercial products or services without prior written consent from Chicago Indian Arts.",
  "Chicago Indian Arts reserves the right to curate and select works for the festival program based on literary merit, cultural relevance, and thematic alignment.",
  "Content that is defamatory, obscene, or violates any applicable law is strictly prohibited.",
];

export default function CallForSubmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="submissions-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1771831750/indian-arts-festival-outdoor-music-celebration-chicago_beemtl.webp"
            alt="Chicago Indian Arts Festival - Call for Submissions"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            priority
          />
          {/* Left-side gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 35%, transparent 65%)",
            }}
          />
        </div>

        <div
          className="relative z-10"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10rem 3rem 3rem",
            width: "100%",
          }}
        >
          <FadeInSection>
            <Link
              href="/"
              className="inline-flex items-center"
              style={{
                gap: "0.5rem",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.85rem",
                textDecoration: "none",
                marginBottom: "2rem",
                transition: "color 0.3s ease",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#d4af37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow:
                  "0 2px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 50px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,1)",
              }}
            >
              Chicago Indian Literature Festival
            </div>

            <h1
              data-section="submissions-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
                textShadow:
                  "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              CALL FOR SUBMISSIONS
            </h1>

            <p
              data-section="submissions-hero-subtitle"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "600px",
                marginBottom: "0.8rem",
                fontStyle: "italic",
                textShadow:
                  "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Share your voice with the world
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "550px",
                marginBottom: "2rem",
                textShadow:
                  "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Chicago Indian Literature Festival. May 30, 2026
            </p>

            <a
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeYv3wmGMDA4Q9NN_4vlVHWvvrFAS2jjGrMd4utVl3aDSXD1g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.85rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#d4af37")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#cd5c5c")
              }
            >
              Apply Now
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* About Submissions */}
      <section
        data-section="submissions-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <FadeInSection>
            <SectionTag>Submit Your Work</SectionTag>
            <h2
              data-section="submissions-heading"
              className="font-heading font-semibold"
              style={{
                fontSize: "2.8rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              We Want to Hear Your Story
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.5rem",
              }}
            >
              Thank you for your interest in contributing your work to the
              Chicago Indian Literature Festival. We welcome submissions
              across fiction, poetry, essays, memoir, scripts, and experimental
              writing. Our team will review submissions and reach out as soon as
              we are ready to roll out the schedules.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
              }}
            >
              Whether you are an established author or an emerging voice, our
              festival is your platform to share your literary vision with the Chicago
              community and beyond.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Submission Categories */}
      <section
        data-section="submissions-categories"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>What You Can Submit</SectionTag>
              <h2
                data-section="submissions-heading"
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                Accepted Submission Types
              </h2>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "1rem" }}
          >
            {submissionTypes.map((type, i) => (
              <FadeInSection key={type} delay={i * 0.08}>
                <div
                  style={{
                    padding: "1.5rem 1.2rem",
                    backgroundColor: "#ffffff",
                    borderTop: "3px solid #d4af37",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p
                    className="font-heading"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                    }}
                  >
                    {type}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section
        data-section="submissions-guidelines"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>How It Works</SectionTag>
              <h2
                data-section="submissions-heading"
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                Submission Guidelines
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="submissions-guidelines-grid"
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "2rem" }}
          >
            {guidelines.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.12}>
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: "#faf8f3",
                    borderTop: "3px solid #d4af37",
                    transition: "all 0.3s ease",
                    height: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(205,92,92,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <item.icon size={22} style={{ color: "#cd5c5c" }} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: "#666666",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section
        data-section="submissions-terms"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Before You Apply</SectionTag>
              <h2
                data-section="submissions-heading"
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                  marginBottom: "1rem",
                }}
              >
                Terms &amp; Conditions
              </h2>
            </div>
          </FadeInSection>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {terms.map((item, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div
                  className="flex items-start"
                  style={{
                    gap: "1.2rem",
                    padding: "1.5rem 2rem",
                    backgroundColor: "#ffffff",
                    borderLeft: "4px solid #d4af37",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="flex-shrink-0"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(212,175,55,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "0.1rem",
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: "#d4af37" }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      color: "#444444",
                    }}
                  >
                    {item}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.3}>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#999999",
                marginTop: "2.5rem",
                fontStyle: "italic",
              }}
            >
              These terms are excerpted from the official Chicago Indian Literature
              Festival Rules &amp; Regulations. For the complete document,
              please{" "}
              <Link
                href="/contact"
                style={{
                  color: "#cd5c5c",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#d4af37")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#cd5c5c")
                }
              >
                contact us
              </Link>
              .
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="submissions-quote"
        style={{
          padding: "3rem 3rem",
          backgroundColor: "#1a1a1a",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                color: "#d4af37",
                marginBottom: "1rem",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              className="font-heading italic"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.5rem",
              }}
            >
              Every story deserves a stage. Every voice deserves to be heard.
              The festival is where your words find their home.
            </p>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section
        data-section="submissions-cta"
        style={{
          padding: "3rem 3rem",
          background:
            "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
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
            <ScrollText
              size={40}
              style={{
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.5rem",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Ready to Submit?
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Read the guidelines above and click below to fill out the
              submission form. Our team will review your work and get in touch.
            </p>
            <a
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeYv3wmGMDA4Q9NN_4vlVHWvvrFAS2jjGrMd4utVl3aDSXD1g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#ffffff",
                color: "#1a1a1a",
                padding: "0.85rem 2.5rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
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
              Apply Now
            </a>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
