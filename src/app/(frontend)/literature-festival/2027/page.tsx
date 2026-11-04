"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Coffee,
  Trophy,
  Gift,
  PenLine,
} from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// Registration goes to the site's own registration page until the client sends
// the Google Form for Lit Fest '27. Swap this one constant when it arrives.
const REGISTER_URL = "/register";

const HERO_IMAGE =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1793773359/lit-fest-2027/kahani-chicago-2027-storytelling-open-book-string-lights-hero.webp";
const FESTIVAL_PHOTO =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1780906812/Chicago-Indian-Literature-Festival-30May_g8ansz.webp";

const charcoal = "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)";
const accents = ["#d4af37", "#cd5c5c", "#7a4a9e", "#2a9bb0", "#2e3f8f", "#d4af37"];

const stats = [
  { value: "4.5 Hours", label: "of stories, music and laughter", color: "#d4af37" },
  { value: "10", label: "moments across the afternoon", color: "#cd5c5c" },
  { value: "6", label: "headline voices we are inviting", color: "#7a4a9e" },
  { value: "5", label: "conversation themes", color: "#2a9bb0" },
];

const voices: {
  initials: string;
  name: string;
  role: React.ReactNode;
  sessionLabel: string;
  session: string;
  audience?: string;
}[] = [
  {
    initials: "TK",
    name: "Twinkle Khanna",
    role: "Author, columnist, former actress and witty conversationalist.",
    sessionLabel: "Session",
    session: "Funny, Fearless & Unfiltered: Life, Marriage and Everything in Between",
    audience: "For women, young professionals, Bollywood fans and book lovers.",
  },
  {
    initials: "CB",
    name: "Chetan Bhagat",
    role: "Bestselling novelist whose books connect literature, Bollywood and modern Indian society.",
    sessionLabel: "Session",
    session: "From Books to Bollywood: Why Indian Stories Rule",
    audience: "A recognizable, crowd-pleasing literary headliner.",
  },
  {
    initials: "AT",
    name: "Amish Tripathi",
    role: "Bestselling mythology and historical-fiction author.",
    sessionLabel: "Session",
    session: "Shiva, Mythology & Modern India: Why Ancient Stories Still Matter",
    audience: "For families, mythology enthusiasts and younger readers.",
  },
  {
    initials: "VS",
    name: "Vikas Swarup",
    role: (
      <>
        Author of <em>Q &amp; A</em>, the novel behind <em>Slumdog Millionaire</em>.
      </>
    ),
    sessionLabel: "Conversation",
    session: "From literature to cinema",
  },
  {
    initials: "RK",
    name: "Rupi Kaur",
    role: "Poetry performer and bestselling author with a young international following.",
    sessionLabel: "Conversation",
    session: "Poetry and performance",
  },
  {
    initials: "AD",
    name: "Abhay Deol",
    role: "A distinctive cinema and storytelling voice.",
    sessionLabel: "Conversation",
    session: "A creative, contemporary take on storytelling",
  },
];

const conversations = [
  {
    theme: "Contemporary Fiction",
    title: "Women rewriting the Indian story",
    invited: "Chitra Banerjee Divakaruni, Anuja Chauhan",
  },
  {
    theme: "Literary Prestige",
    title: "The stories that shape a nation",
    invited: "Amitav Ghosh, Vikram Chandra",
  },
  {
    theme: "Diaspora & Identity",
    title: "Growing up between cultures",
    invited: "Mindy Kaling, Kal Penn, Alka Joshi",
  },
  {
    theme: "Humor & Performance",
    title: "Comedy is storytelling",
    invited: "Vir Das, Zakir Khan",
  },
  {
    theme: "Music & Poetry",
    title: "The magic of words and music",
    invited: "Swanand Kirkire, Piyush Mishra",
  },
];

const schedule = [
  {
    time: "3:00 to 3:25",
    title: "The Story Bazaar",
    tag: "Arrival experience",
    description:
      "Indian street-food bites, chai, book stalls, photo wall, live instrumental music, interactive story postcards and a kids' corner.",
  },
  {
    time: "3:25 to 3:35",
    title: "Opening: India in 10 Stories",
    tag: "Visual storytelling",
    description:
      "A fast-paced montage of literature, cinema and Chicago's Indian community, followed by a dynamic emcee welcome.",
  },
  {
    time: "3:35 to 4:15",
    title: "Celebrity Spotlight: Unscripted",
    tag: "Headline fireside chat",
    description:
      "A headline guest shares fun personal stories, answers surprising questions and takes the audience along.",
  },
  {
    time: "4:15 to 4:35",
    title: "Kahani Live: Poetry, Music & Laughter",
    tag: "Performance",
    description:
      "A high-energy mix of spoken word, shayari, music and comedy, including multilingual performances with English context.",
  },
  {
    time: "4:35 to 5:10",
    title: "Bollywood, Books & Beyond",
    tag: "Interactive panel",
    description:
      "Three guests debate why Indian stories travel globally, including books adapted for film and streaming. The audience votes on iconic adaptations.",
  },
  {
    time: "5:10 to 5:35",
    title: "Chai, Chaat & Chapters",
    tag: "Festival break",
    description:
      "Book signings, meet-the-authors, food, sponsor activations and a quick scavenger hunt with prizes.",
  },
  {
    time: "5:35 to 6:05",
    title: "Two Worlds, One Story",
    tag: "Youth and family panel",
    description:
      "Funny and heartfelt conversations about identity, parents, dating, language and growing up Indian American.",
  },
  {
    time: "6:05 to 6:30",
    title: "The Great Chicago Story Slam",
    tag: "Audience competition",
    description:
      "Four preselected storytellers get three minutes each. The audience votes live for the winner.",
  },
  {
    time: "6:30 to 7:00",
    title: "Stories That Changed My Life",
    tag: "Inspirational finale",
    description:
      "A celebrated author or guest shares memorable stories, then takes rapid-fire audience questions.",
  },
  {
    time: "7:00 to 7:30",
    title: "The Kahani Celebration",
    tag: "Closing social",
    description:
      "Live music or an upbeat DJ, prize announcements, final book signings, networking and photo opportunities.",
  },
];

const experiences = [
  {
    icon: Coffee,
    title: "The Kahani Chai Café",
    description:
      "A branded chai lounge where you draw a conversation prompt and share stories with strangers.",
  },
  {
    icon: Trophy,
    title: "Chicago's Got Stories",
    description:
      "A three-minute storytelling contest. Winners get a trophy, a book bundle and a social-media feature.",
  },
  {
    icon: Gift,
    title: "Blind Date With an Indian Book",
    description:
      "Wrapped books with intriguing clues on the cover. Pick one by its story, not its title.",
  },
  {
    icon: PenLine,
    title: "The Story Wall",
    description:
      "Finish the sentence “My Indian story begins with…” and add it to a growing art installation.",
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
            alt="An open book lit by warm string lights, Kahani Chicago 2027 Indian literature festival"
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
              Lit Fest &rsquo;27 &middot; Chicago Indian Literature Festival
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
              Kahani <strong className="font-bold">Chicago</strong>
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
                Sunday, April 25, 2027
              </span>
              <span className="inline-flex items-center" style={{ gap: "0.5rem" }}>
                <Clock size={18} style={{ color: "#d4af37" }} />
                3:00 PM to 7:30 PM
              </span>
              <span className="inline-flex items-center" style={{ gap: "0.5rem" }}>
                <MapPin size={18} style={{ color: "#d4af37" }} />
                Venue to be announced, Chicago
              </span>
            </div>

            <div className="flex flex-wrap" style={{ gap: "1rem" }}>
              <PrimaryButton href={REGISTER_URL} variant="red">
                Register Now
              </PrimaryButton>
              <PrimaryButton href="#schedule" variant="gold">
                See the Program
              </PrimaryButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      <ColorStripe />

      {/* About Kahani */}
      <section
        data-section="literature-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "4rem" }}
          >
            <FadeInSection>
              <SectionTag>About Kahani</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "1.5rem" }}
              >
                Where Books, Cinema and Culture Meet in One Afternoon
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "1.2rem" }}>
                Kahani Chicago is the literature pillar of Chicago Indian Arts, alongside Chicago
                Indian Fashion Week and the Wildlife Photography &amp; Visual Arts Festival.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666" }}>
                For four and a half hours, authors, poets, filmmakers, comedians and storytellers
                celebrate India&apos;s storytelling traditions, from mythology to modern fiction,
                poetry to Bollywood, and the stories of growing up Indian in America.
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

          <div
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ marginTop: "3.5rem", gap: "2rem" }}
          >
            {stats.map((s, i) => (
              <FadeInSection key={s.label} delay={i * 0.1}>
                <div style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: "1.1rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-lato), 'Lato', sans-serif",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      color: "#1a1a1a",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#666666", marginTop: "0.3rem" }}>
                    {s.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Headline Voices */}
      <section
        data-section="kahani-voices"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Headline Voices</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.8rem" }}
              >
                The Storytellers We Are Inviting
              </h2>
              <p style={{ fontSize: "0.95rem", fontStyle: "italic", color: "#666666" }}>
                Invitations in progress. Final lineup to be announced.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.75rem" }}>
            {voices.map((v, i) => (
              <FadeInSection key={v.name} delay={(i % 3) * 0.1}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.8rem",
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
                    aria-hidden="true"
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: accents[i],
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      letterSpacing: "1px",
                    }}
                  >
                    {v.initials}
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.6rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.2 }}
                  >
                    {v.name}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#666666" }}>{v.role}</p>
                  <div style={{ backgroundColor: "#faf8f3", padding: "0.85rem 1rem" }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        color: "#cd5c5c",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {v.sessionLabel}
                    </div>
                    <div style={{ fontSize: "0.95rem", lineHeight: 1.5, color: "#1a1a1a", fontWeight: 500 }}>
                      {v.session}
                    </div>
                  </div>
                  {v.audience && (
                    <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "#888888" }}>{v.audience}</p>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Conversations */}
      <section
        data-section="kahani-conversations"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Conversations</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.8rem" }}
              >
                Five Themes, Many Voices
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#666666", maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
                Each conversation is built for a different audience, with authors and artists we are
                inviting to take the stage.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6" style={{ gap: "1.5rem" }}>
            {conversations.map((c, i) => (
              <FadeInSection
                key={c.title}
                delay={(i % 3) * 0.1}
                className={`lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
              >
                <div
                  style={{
                    padding: "2rem 1.75rem",
                    backgroundColor: "#faf8f3",
                    borderLeft: `4px solid ${accents[i]}`,
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#cd5c5c",
                      marginBottom: "0.7rem",
                    }}
                  >
                    {c.theme}
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.45rem", fontWeight: 600, lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.7rem" }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "0.93rem", lineHeight: 1.7, color: "#666666" }}>
                    Invited: {c.invited}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section
        id="schedule"
        data-section="kahani-schedule"
        style={{ padding: "3rem 3rem", background: charcoal, scrollMarginTop: "90px" }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "0.8rem",
                  color: "#d4af37",
                }}
              >
                The Program &middot; 3:00 PM to 7:30 PM
              </div>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff" }}
              >
                An Afternoon of Stories
              </h2>
            </div>
          </FadeInSection>

          <div>
            {schedule.map((s, i) => (
              <FadeInSection key={s.time} delay={i * 0.05}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.3rem 2rem",
                    padding: "1.4rem 0",
                    borderTop: "1px solid rgba(255,255,255,0.14)",
                    borderBottom:
                      i === schedule.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 8.5rem",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#d4af37",
                    }}
                  >
                    {s.time}
                  </div>
                  <div style={{ flex: "1 1 16rem", minWidth: 0 }}>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1.3rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.4rem" }}
                    >
                      {s.title}
                    </h3>
                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "0.5rem",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#d4af37",
                        backgroundColor: "rgba(212,175,55,0.14)",
                      }}
                    >
                      {s.tag}
                    </span>
                    <p style={{ fontSize: "0.93rem", lineHeight: 1.7, color: "rgba(255,255,255,0.72)" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Experiences */}
      <section
        data-section="kahani-experiences"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Festival Experiences</SectionTag>
              <h2
                data-section="literature-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Not Just to Watch. To Take Part.
              </h2>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem" }}>
            {experiences.map((x, i) => (
              <FadeInSection key={x.title} delay={i * 0.1}>
                <div
                  style={{
                    padding: "2.25rem 1.75rem",
                    backgroundColor: "#ffffff",
                    borderTop: "3px solid #d4af37",
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
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(205,92,92,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <x.icon size={22} style={{ color: "#cd5c5c" }} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.6rem" }}
                  >
                    {x.title}
                  </h3>
                  <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#666666" }}>
                    {x.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff", marginBottom: "1rem" }}
            >
              Every One of Us Carries a Story. Come Share Yours.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Join us on Sunday, April 25, 2027 for an afternoon of books, cinema, music and
              laughter.
            </p>
            <div className="flex flex-wrap justify-center" style={{ gap: "1rem" }}>
              <PrimaryButton href={REGISTER_URL} variant="white">
                Register Now
              </PrimaryButton>
              <PrimaryButton href={REGISTER_URL} variant="dark">
                Enter the Story Slam
              </PrimaryButton>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
}
