"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// Lit Fest '27 Google Form (sent by the client on 2026-11-17). All form buttons use it.
const REGISTER_URL = "https://forms.gle/tnVDYVS3MdDBEJ4H8";

const HERO_IMAGE =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1793773359/lit-fest-2027/kahani-chicago-2027-storytelling-open-book-string-lights-hero.webp";
const FESTIVAL_PHOTO =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1780906812/Chicago-Indian-Literature-Festival-30May_g8ansz.webp";

const accents = ["#d4af37", "#cd5c5c", "#7a4a9e", "#2a9bb0", "#2e3f8f"];

// Content from the client's "Chicago Indian Literature Festival" one-pager (2026-11-18).
const submissionTypes = [
  {
    label: "Poets",
    title: "Poetry & Shayari",
    text: "Spoken word, shayari and poetry in English, Hindi, Urdu or any Indian language, with English context.",
  },
  {
    label: "Writers",
    title: "Fiction & Essays",
    text: "Short stories, essays and personal writing to read aloud or discuss on stage.",
  },
  {
    label: "Authors",
    title: "Published Books",
    text: "Authors who would like to present, read from or sign their books at the festival.",
  },
  {
    label: "Speakers",
    title: "Talks & Panels",
    text: "Storytellers, filmmakers and creators with an idea for a talk, panel or conversation.",
  },
  {
    label: "Leaders",
    title: "Community Voices",
    text: "Community and cultural leaders with a story about identity, heritage or the Indian diaspora.",
  },
];

const steps = [
  {
    title: "Prepare your entry",
    text: "A sample of your work (a poem, an excerpt, a talk idea or a book), a short bio and a photo.",
  },
  {
    title: "Fill in the Google Form",
    text: "Tell us who you are, what you would like to share and add a link to your work. It takes a few minutes.",
  },
  {
    title: "Hear from us",
    text: "Our team reviews every entry and contacts selected participants with festival details.",
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "Who can submit?",
    a: "Poets, writers, authors, speakers and community leaders of any level, from anywhere in the world. You do not need to be published.",
  },
  {
    q: "Which languages are welcome?",
    a: "English, Hindi, Urdu and any Indian language. For non-English work, please include a short English summary.",
  },
  {
    q: "Can international participants apply?",
    a: "Yes. The festival is open to everyone. If you are selected, you are welcome to come to Chicago and share your work in person. It is completely up to you. Please note that the festival does not cover travel, accommodation or any other expenses.",
  },
  {
    q: "Do I need to attend?",
    a: "Attending is highly recommended, but the choice is yours. Selected participants who come can perform, speak or present on stage and meet the audience. Travel and stay are at your own expense.",
  },
  {
    q: "Do I keep the rights to my work?",
    a: "Always. Your work is shared with credit, for festival programming and promotion only.",
  },
  {
    q: "When will I hear back?",
    a: "After submissions close on January 15, 2027, our team reviews every entry and contacts selected participants.",
  },
  {
    q: "Who do I contact with questions?",
    a: (
      <>
        Reach the team through the{" "}
        <Link href="/contact" style={{ color: "#cd5c5c", fontWeight: 600 }}>
          Chicago Indian Arts contact page
        </Link>
        .
      </>
    ),
  },
];

function ColorStripe() {
  const colors = ["#f2a33a", "#d9493b", "#7a4a9e", "#2a9bb0", "#2e3f8f"];
  return (
    <div
      aria-hidden="true"
      style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "6px" }}
    >
      {colors.map((c) => (
        <span key={c} style={{ backgroundColor: c }} />
      ))}
    </div>
  );
}

function MandalaArc() {
  return (
    <svg
      viewBox="0 0 400 200"
      aria-hidden="true"
      style={{
        position: "absolute",
        right: "-10%",
        bottom: "-30%",
        width: "min(62rem, 95vw)",
        opacity: 0.55,
        pointerEvents: "none",
      }}
    >
      <g fill="none" strokeWidth="14">
        <path d="M10 200a190 190 0 0 1 380 0" stroke="#7A4A9E" opacity="0.55" />
        <path d="M32 200a168 168 0 0 1 336 0" stroke="#D9493B" opacity="0.55" />
        <path d="M54 200a146 146 0 0 1 292 0" stroke="#F2A33A" opacity="0.6" />
        <path d="M76 200a124 124 0 0 1 248 0" stroke="#2E3F8F" opacity="0.9" />
        <path d="M98 200a102 102 0 0 1 204 0" stroke="#F2A33A" opacity="0.5" />
        <path d="M120 200a80 80 0 0 1 160 0" stroke="#2A9BB0" opacity="0.6" />
      </g>
      <g fill="#F2A33A" opacity="0.5">
        <circle cx="200" cy="25" r="6" />
        <circle cx="112" cy="48" r="5" />
        <circle cx="288" cy="48" r="5" />
        <circle cx="48" cy="110" r="5" />
        <circle cx="352" cy="110" r="5" />
      </g>
    </svg>
  );
}

function PrimaryButton({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: "red" | "gold" | "white" | "dark";
}) {
  const v = {
    red: { bg: "#cd5c5c", color: "#ffffff", hoverBg: "#d4af37", hoverColor: "#ffffff" },
    gold: { bg: "#d4af37", color: "#1a1a1a", hoverBg: "#ffffff", hoverColor: "#1a1a1a" },
    white: { bg: "#ffffff", color: "#1a1a1a", hoverBg: "#1a1a1a", hoverColor: "#ffffff" },
    dark: { bg: "#1a1a1a", color: "#ffffff", hoverBg: "#ffffff", hoverColor: "#1a1a1a" },
  }[variant];
  const style = {
    backgroundColor: v.bg,
    color: v.color,
    padding: "0.85rem 2.5rem",
    fontSize: "0.85rem",
    letterSpacing: "1px",
    textDecoration: "none",
    transition: "all 0.3s ease",
  } as const;
  const handlers = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = v.hoverBg;
      e.currentTarget.style.color = v.hoverColor;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.backgroundColor = v.bg;
      e.currentTarget.style.color = v.color;
    },
  };
  const className = "inline-block font-semibold uppercase text-center";
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} style={style} {...handlers}>
        {children}
      </a>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        {...handlers}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style} {...handlers}>
      {children}
    </Link>
  );
}

export default function LitFest2027Page() {
  return (
    <div style={{ fontVariantNumeric: "lining-nums" }}>
      {/* Hero */}
      <section
        data-section="literature-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="An open book lit by warm string lights, Chicago Indian Literature Festival 2027"
            fill
            className="object-cover"
            style={{ objectPosition: "70% center" }}
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0.15) 100%)",
            }}
          />
          <MandalaArc />
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
              href="/literature-festival"
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
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            >
              <ArrowLeft size={16} />
              Back to Literature Festival
            </Link>

            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1)",
              }}
            >
              Chicago Indian Arts Presents &middot; Lit Fest &rsquo;27
            </div>

            <h1
              data-section="literature-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.2rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              Chicago Indian <strong className="font-bold">Literature Festival</strong>
            </h1>

            <p
              data-section="literature-hero-subtitle"
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.5,
                color: "#d4af37",
                maxWidth: "620px",
                marginBottom: "0.6rem",
                fontStyle: "italic",
                fontWeight: 600,
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Stories Without Borders
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "620px",
                marginBottom: "0.3rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Indian Literature, Cinema &amp; Culture Festival
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "1.4rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              One city. A million stories.
            </p>

            <div
              className="flex flex-wrap"
              style={{
                gap: "0.6rem 1.75rem",
                marginBottom: "2rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              <span className="inline-flex items-center" style={{ gap: "0.5rem" }}>
                <CalendarDays size={18} style={{ color: "#d4af37" }} />
                April 17, 2027
              </span>
              <span className="inline-flex items-center" style={{ gap: "0.5rem" }}>
                <MapPin size={18} style={{ color: "#d4af37" }} />
                Chicago
              </span>
            </div>

            <div className="flex flex-wrap" style={{ gap: "1rem" }}>
              <PrimaryButton href={REGISTER_URL} variant="red">
                Submit Your Entry
              </PrimaryButton>
            </div>
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
                color: "#ffffff",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Submit by <strong style={{ color: "#d4af37" }}>January 15, 2027</strong>
            </p>
          </FadeInSection>
        </div>
      </section>

      <ColorStripe />

      {/* About the Festival */}
      <section
        id="about"
        data-section="literature-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "4rem" }}
          >
            <FadeInSection>
              <SectionTag>About the Festival</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "1.5rem" }}
              >
                Where Books, Cinema and Culture Come Together
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "1.2rem" }}>
                The Chicago Indian Literature Festival is the literature pillar of Chicago Indian
                Arts, alongside Chicago Indian Fashion Week and the Chicago Visual Arts and
                Wildlife Photography Festival. It celebrates India&apos;s storytelling traditions,
                from mythology to modern fiction, poetry to cinema, and the stories of growing up
                Indian around the world.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666" }}>
                Expect conversations, readings, poetry, performances, book stalls and chai, all in
                one afternoon in Chicago.
              </p>
            </FadeInSection>

            <FadeInSection direction="right">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: "4px",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={FESTIVAL_PHOTO}
                  alt="Visitors browsing book stalls at the Chicago Indian Literature Festival"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "2.5rem 1.25rem 0.9rem",
                    background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: "0.78rem",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  From Chicago Indian Literature Festival 2026
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call for Submissions */}
      <section
        id="call"
        data-section="kahani-call"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Call for Submissions</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.8rem" }}
              >
                Share Your Voice on Our Stage
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "#666666",
                  maxWidth: "700px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                We are looking for storytellers of every kind, from first-time writers to published
                authors. If you have a story to tell, we want to hear it.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.75rem" }}>
            {submissionTypes.map((t, i) => (
              <FadeInSection key={t.title} delay={(i % 3) * 0.1}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                    padding: "2rem 1.75rem",
                    backgroundColor: "#ffffff",
                    borderTop: `4px solid ${accents[i]}`,
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#cd5c5c",
                    }}
                  >
                    {t.label}
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}
                  >
                    {t.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666666" }}>{t.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit */}
      <section
        id="submit"
        data-section="kahani-steps"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>How to Submit</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Three Simple Steps
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "1.75rem" }}>
            {steps.map((st, i) => (
              <FadeInSection key={st.title} delay={i * 0.1}>
                <div
                  style={{
                    padding: "2rem 1.75rem",
                    backgroundColor: "#faf8f3",
                    borderTop: `3px solid ${i === 1 ? "#cd5c5c" : "#d4af37"}`,
                    height: "100%",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#d4af37",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.35rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.6rem" }}
                  >
                    {st.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666666" }}>{st.text}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div
              className="flex flex-wrap items-center justify-between"
              style={{
                gap: "1.5rem",
                marginTop: "2.5rem",
                padding: "2rem 2.25rem",
                background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
                borderLeft: "4px solid #d4af37",
              }}
            >
              <div>
                <div
                  className="font-heading"
                  style={{ fontSize: "1.6rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.3rem" }}
                >
                  Submit by January 15, 2027
                </div>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)" }}>
                  Open to everyone, anywhere in the world.
                </p>
              </div>
              <PrimaryButton href={REGISTER_URL} variant="red">
                Open the Submission Form
              </PrimaryButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        data-section="kahani-faq"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <SectionTag>FAQ</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Questions from Storytellers
              </h2>
            </div>
          </FadeInSection>

          <div>
            {faqs.map((f, i) => (
              <FadeInSection key={f.q} delay={i * 0.06}>
                <div
                  style={{
                    padding: "1.4rem 0",
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    borderBottom: i === faqs.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem" }}
                  >
                    {f.q}
                  </h3>
                  <p style={{ fontSize: "0.97rem", lineHeight: 1.8, color: "#666666" }}>{f.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stay tuned */}
      <section
        data-section="literature-cta"
        style={{
          padding: "3rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1rem",
              }}
            >
              Chicago Indian Literature Festival &middot; April 17, 2027
            </div>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff", marginBottom: "1rem" }}
            >
              Every One of Us Carries a Story. Stay&nbsp;Tuned.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              The venue and full program will be announced soon. Follow Chicago Indian Arts to hear
              first.
            </p>
            <div className="flex flex-wrap justify-center" style={{ gap: "1rem" }}>
              <PrimaryButton href={REGISTER_URL} variant="white">
                Submit Your Entry
              </PrimaryButton>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
