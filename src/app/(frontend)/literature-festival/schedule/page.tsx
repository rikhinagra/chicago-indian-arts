"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, CheckCircle, Calendar, X, Share2 } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// ─── TYPE ────────────────────────────────────────────────────────────────────

type Session = {
  time?: string;
  hideTime?: boolean;
  title: string;
  subtitle?: string;
  subTitles?: string[];
  speakers?: string[];
  venue?: string;
  description?: string;
  popupText?: string;
  confirmed: boolean;
  tag: string;
  tagColor: string;
};

// ─── SCHEDULE DATA ────────────────────────────────────────────────────────────

const morningsessions: Session[] = [
  {
    time: "9:00 AM",
    title: "Welcome & Registration",
    description:
      "The festival begins before the first panel. Collect your badge, wander the community booths, pause at the book signing tables, and find your chai. Let the morning unfold\n\n— Tamso Ma Jyotirgamaya",
    venue: "The Gold Room",
    confirmed: true,
    tag: "General",
    tagColor: "#cd5c5c",
  },
  {
    time: "9:00 – 11:00 AM",
    title: "Interactive with Kids and Families",
    subtitle: "Once Upon the tale: Stories for Little Listeners",
    description:
      "A dedicated space for children and families featuring interactive storytelling, poetry for young minds, and culturally rich narratives spanning festivals, seasons, and South Asian traditions.",
    popupText:
      "Once Upon the tale: Stories for Little Listeners — A dedicated space for children and families featuring interactive storytelling, poetry for young minds, and culturally rich narratives spanning festivals, seasons, and South Asian traditions. Through lively narration, playful activities, and audience participation, children will meet unforgettable characters, explore magical landscapes, and discover the joy of storytelling across cultures.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Children & Family",
    tagColor: "#cd5c5c",
  },
  {
    time: "11:00 AM – 11:45 AM",
    title: "Authors Panel",
    subtitle: "Page to Perception: How Literature Shapes the India We Imagine.",
    description:
      "This panel explores how contemporary Indian voices across literature, scholarship, and the arts are reshaping narratives about India in a global context. Discussion spans memory, migration, history, culture, and how creators negotiate authenticity versus audience expectation.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Panel",
    tagColor: "#cd5c5c",
  },
];

const afternoonSessions: Session[] = [
  {
    time: "12:00 – 12:45 PM",
    title: "Reading Salon & Workshop: Rooted & Reaching",
    subtitle: "Motherhood, Daughterhood & the Self We Carry.",
    description:
      "An intimate reading salon and workshop exploring identity, womanhood, and the bonds between mothers and daughters — the roles that are written versus the roles we choose to play. Examines how women inherit, resist, and redefine cultural expectations while forging their own sense of self across borders, languages, and generations.",
    popupText:
      "Motherhood, Daughterhood & the Self We Carry. An intimate reading salon and workshop exploring identity, womanhood, and the bonds between mothers and daughters — the roles that are written versus the roles we choose to play. Examines how women inherit, resist, and redefine cultural expectations while forging their own sense of self across borders, languages, and generations.",
    venue: "The Gold Room",
    speakers: [
      "Reema Rao",
      "Sharanjit Bilan",
      "Jyotichand",
      "Rebekah James Lovett",
      "Shailla Chand",
      "Shivani Gupta (Facilitator)",
    ],
    confirmed: true,
    tag: "Workshop",
    tagColor: "#cd5c5c",
  },
  {
    time: "12:45 – 1:00 PM",
    title: "Book Launch",
    description:
      "An exclusive book launch celebration featuring a reading, author conversation, and book signing.",
    venue: "The Gold Room",
    speakers: ["Parul Bhandari"],
    confirmed: true,
    tag: "Book Launch",
    tagColor: "#cd5c5c",
  },
  {
    time: "1:00 – 1:45 PM",
    title: "From Mythology to Combat: Storytelling in Games",
    subtitle: "Algorithms & Archetypes: When AI Meets the Storyteller's Mind",
    description:
      "Indika: Culture, Combat, Creativity — Horror, Comics & Culture. An immersive celebration of storytelling across worlds: from the timeless epics of India to the explosive universe of modern gaming, horror, and comics. Featuring icons from the Mortal Kombat universe, live panels, gaming showcases, and comic creators.",
    popupText:
      "Algorithms & Archetypes: When AI Meets the Storyteller's Mind — Indika: Culture, Combat, Creativity — Horror, Comics & Culture. An immersive celebration of storytelling across worlds: from the timeless epics of India to the explosive universe of modern gaming, horror, and comics. Featuring icons from the Mortal Kombat universe, live panels, gaming showcases, and comic creators.",
    venue: "The Gold Room",
    speakers: [
      "Vishal Rajput",
      "Daniel Pesina",
      "Ho-Sung Pak",
      "Richard Divizio",
      "Carlos Pesina",
      "Tim Kirchkoff",
      "Ani Chaoudhary",
      "Romit",
      "Shilajeet Niyogi",
    ],
    confirmed: true,
    tag: "Panel",
    tagColor: "#cd5c5c",
  },
  {
    time: "2:00 – 2:45 PM",
    title: "The Discipline of Imagination: From Blank Page to First Draft",
    subtitle: "A Writer's Workshop",
    description:
      "An interactive writers' workshop for aspiring and emerging writers exploring the art and craft of storytelling. Guided prompts, close reading, and collaborative exercises help participants develop authentic voice and deepen narrative impact. Covers character, structure, revision, and the discipline of sustaining a writing practice.",
    popupText:
      "A Writer's Workshop. An interactive writers' workshop for aspiring and emerging writers exploring the art and craft of storytelling. Guided prompts, close reading, and collaborative exercises help participants develop authentic voice and deepen narrative impact. Covers character, structure, revision, and the discipline of sustaining a writing practice.",
    venue: "The Gold Room",
    speakers: ["Keith Farazi", "Scott Sommer", "Ahmed Bin Athar"],
    confirmed: true,
    tag: "Workshop",
    tagColor: "#cd5c5c",
  },
  {
    time: "3:00 – 3:45 PM",
    title: "Authors Panel",
    subtitle: "Fiction, Truth and Everything in Between",
    description:
      "In a literary and tech-enabled landscape shaped by memory, history, innovation and imagination, today's writers are constantly negotiating the space between what is lived, what is remembered and what is invented.",
    popupText:
      "Fiction, Truth and Everything in Between — and does that boundary even matter anymore? In a literary and tech enabled landscape which is shaped by memory, history, innovation and imagination, today's writers are constantly negotiating space between what is lived, what is remembered and what is invented. This panel will bring authors to explore how contemporary Indian literature blurs, bends and sometimes deliberately erases the lines between facts and fiction.\n\nWhat responsibilities do writers carry when drawing real lives and events? How do readers interpret \"truth\"?",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Panel",
    tagColor: "#cd5c5c",
  },
  {
    time: "4:00 – 4:15 PM",
    title: "Stories from Soil: The Living Legacy of Kannada Literature",
    description:
      "Rooted in the landscapes, languages, and lived experiences of Karnataka, this session delves into the richness of Kannada storytelling — from ancient vachanas and classical poetry to modern fiction and contemporary voices — revealing how 'the soil' itself becomes a powerful metaphor for identity, resilience, and belonging.",
    popupText:
      "Rooted in the landscapes, languages, and lived experiences of Karnataka, this session delves into the richness of Kannada storytelling — from ancient vachanas and classical poetry to modern fiction and contemporary voices — revealing how 'the soil' itself becomes a powerful metaphor for identity, resilience, and belonging.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Panel",
    tagColor: "#cd5c5c",
  },
  {
    time: "4:30 – 6:00 PM",
    title: "Spoken Fest: The Word Stands Up",
    subtitle: "Unfiltered Spoken Word Showcase — Open Mic · Poetry · Storytelling",
    description:
      "An open platform for spoken word artists, poets, and storytellers from across the South Asian diaspora. 10–12 performers, 3 minutes each.",
    venue: "The Gold Room",
    speakers: [
      "Asha Sudra",
      "Shivani Kumar",
      "Hilesh Patel",
      "Vaidehi Gajjar",
      "Darshita Jain",
      "Binish Lalani",
      "Alka Sharma",
      "Annmarie",
      "Madhuri Bandla",
      "Zohra Sheikh",
      "Saarika Rao",
      "Poonam",
      "Shivani Gupta",
      "Godhuli",
      "Shashank",
      "Tara Swaminathan",
    ],
    confirmed: true,
    tag: "Open Mic",
    tagColor: "#cd5c5c",
  },
];

const eveningSessions: Session[] = [
  {
    time: "6:00 – 7:00 PM",
    title: "Red Carpet",
    description:
      "A glamorous red carpet reception welcoming guests to the evening gala of the Chicago Indian Literature Festival 2026.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Evening Gala",
    tagColor: "#cd5c5c",
  },
  {
    time: "7:00 – 7:30 PM",
    title: "Opening Gala & Introductions",
    description:
      "Opening remarks by the Founder & President, introductions of the CICA Board and Advisory Board, and welcome to the evening celebration.",
    venue: "The Gold Room",
    speakers: ["Jigar Shah", "CICA Board & Advisory Board"],
    confirmed: true,
    tag: "Evening Gala",
    tagColor: "#cd5c5c",
  },
  {
    time: "7:30 – 8:00 PM",
    title: "Spice, Memory & the Table: A Conversation About Our Food",
    subtitle: "A literary feast: food, culture & storytelling",
    description:
      "A culinary panel bringing together Chicago's most celebrated South Asian chefs, food writers, and restaurateurs for a conversation on food, culture, and identity. In Indian literature, food is never just sustenance — it is memory, identity, and a language of love, loss, and belonging.",
    popupText:
      "A culinary panel bringing together Chicago's most celebrated South Asian chefs, food writers, and restaurateurs for a conversation on food, culture, and identity. In Indian literature, food is never just sustenance — it is memory, identity, and a language of love, loss, and belonging.",
    venue: "The Gold Room",
    speakers: [
      "Colleen Sen",
      "Ashok Selvam",
      "Rohit Thaledi",
      "Rishi Kumar",
      "Monica Eng",
      "Sanjeev Pandey",
      "Zeeshan Shah",
      "Srujan Sirkar",
      "Sahil (Sifr)",
      "Meena (Moderator)",
    ],
    confirmed: true,
    tag: "Food Panel",
    tagColor: "#cd5c5c",
  },
  {
    time: "8:00 – 8:15 PM",
    title: "Key Guest Speeches",
    description:
      "Inspiring addresses from distinguished guests of the Chicago Indian Literature Festival 2026.",
    venue: "The Gold Room",
    speakers: ["Rishaad Tobaccowala"],
    confirmed: true,
    tag: "Speech",
    tagColor: "#cd5c5c",
  },
  {
    time: "8:15 – 8:30 PM",
    title: "Keynote Address",
    description:
      "An evening keynote address from a distinguished guest speaker.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Keynote",
    tagColor: "#cd5c5c",
  },
  {
    time: "8:30 – 9:30 PM",
    title: "Cultural Performances",
    subtitle: "Music · Dance · Classical Arts",
    description:
      "An evening of cultural performances celebrating the richness and diversity of South Asian artistic traditions.",
    venue: "The Gold Room",
    confirmed: true,
    tag: "Performance",
    tagColor: "#cd5c5c",
  },
];

// ─── SESSION CARD ─────────────────────────────────────────────────────────────

function SessionCard({
  session,
  index,
  onTitleClick,
}: {
  session: Session;
  index: number;
  onTitleClick: (session: Session) => void;
}) {
  return (
    <FadeInSection delay={index * 0.07}>
      <div
        style={{
          display: "flex",
          gap: "0",
          marginBottom: "1.5rem",
          position: "relative",
        }}
      >
        {/* Timeline dot */}
        <div
          style={{
            position: "absolute",
            left: "-1.65rem",
            top: "1.6rem",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: session.confirmed ? "#d4af37" : "#ccc",
            border: `2px solid ${session.confirmed ? "#d4af37" : "#ccc"}`,
            flexShrink: 0,
            zIndex: 1,
          }}
        />

        {/* Card */}
        <div
          className="schedule-session-card"
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            border: `1px solid ${session.confirmed ? "rgba(212,175,55,0.25)" : "rgba(0,0,0,0.06)"}`,
            borderLeft: `4px solid ${session.confirmed ? "#d4af37" : "#e0e0e0"}`,
            padding: "1.5rem 1.75rem",
            transition: "all 0.3s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.08)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Share on WhatsApp button */}
          <button
            onClick={() => {
              const text = `"${session.title}" at Chicago Indian Literature Festival 2026 — May 30, 2026. https://www.chicagoindianarts.org/literature-festival/schedule`;
              window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
            }}
            title="Share on WhatsApp"
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#ccc",
              transition: "color 0.2s ease",
              padding: "0.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
          >
            <Share2 size={15} />
          </button>

          {/* Top row: time + badges */}
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "0.6rem", marginBottom: "0.85rem" }}
          >
            {!session.hideTime && session.time && (
              <div
                className="flex items-center"
                style={{ gap: "0.35rem", color: "#888", fontSize: "0.8rem" }}
              >
                <Clock size={13} />
                <span style={{ fontWeight: 500 }}>{session.time}</span>
              </div>
            )}

            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                color: session.tagColor === "#888" ? "#999" : "#fff",
                backgroundColor:
                  session.tagColor === "#888"
                    ? "rgba(0,0,0,0.06)"
                    : session.tagColor,
                padding: "0.2rem 0.6rem",
                borderRadius: "2px",
              }}
            >
              {session.tag}
            </span>

            {session.confirmed && (
              <span
                className="flex items-center"
                style={{
                  gap: "0.3rem",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "#d4af37",
                  backgroundColor: "rgba(212,175,55,0.1)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "2px",
                }}
              >
                <CheckCircle size={11} />
                Confirmed
              </span>
            )}


            {session.venue && (
              <div
                className="flex items-center"
                style={{ gap: "0.3rem", color: "#aaa", fontSize: "0.75rem" }}
              >
                <MapPin size={11} />
                <span>{session.venue}</span>
              </div>
            )}
          </div>

          {/* Title — clickable */}
          <button
            onClick={() => onTitleClick(session)}
            className="font-heading"
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: session.confirmed ? "#1a1a1a" : "#555",
              marginBottom:
                session.subtitle ||
                (session.subTitles && session.subTitles.length > 0)
                  ? "0.3rem"
                  : "0.75rem",
              lineHeight: 1.3,
              cursor: "pointer",
              textAlign: "left",
              background: "none",
              border: "none",
              padding: 0,
              display: "block",
              width: "100%",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = session.confirmed ? "#1a1a1a" : "#555")
            }
          >
            {session.title}
          </button>

          {/* Subtitle */}
          {session.subtitle && (
            <p
              style={{
                fontSize: "0.88rem",
                color: "#d4af37",
                fontWeight: 500,
                marginBottom:
                  session.subTitles && session.subTitles.length > 0
                    ? "0.5rem"
                    : "0.75rem",
                fontStyle: "italic",
              }}
            >
              {session.subtitle}
            </p>
          )}

          {/* Sub-titles */}
          {session.subTitles && session.subTitles.length > 0 && (
            <div style={{ marginBottom: "0.75rem" }}>
              {session.subTitles.map((st, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      color: "#d4af37",
                      fontSize: "0.7rem",
                      marginTop: "0.2rem",
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#888",
                      fontStyle: "italic",
                      lineHeight: 1.4,
                    }}
                  >
                    {st}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          {session.description && (
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.8,
                color: session.confirmed ? "#666" : "#aaa",
                marginBottom: session.popupText ? "0.5rem" : "1rem",
                ...(session.popupText ? {
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical" as const,
                } : {}),
              }}
            >
              {session.description}
            </p>
          )}

          {/* Read More button — only when meaningful popup content exists */}
          {session.popupText && (
            <button
              onClick={() => onTitleClick(session)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: "#d4af37",
                fontSize: "0.82rem",
                fontWeight: 700,
                letterSpacing: "0.3px",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#d4af37")}
            >
              Read More →
            </button>
          )}

        </div>
      </div>
    </FadeInSection>
  );
}

// ─── BLOCK HEADER ─────────────────────────────────────────────────────────────

function BlockHeader({
  title,
  timeRange,
  color,
}: {
  title: string;
  timeRange: string;
  color: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "2rem",
        marginTop: "0.5rem",
      }}
    >
      <div
        style={{
          width: "4px",
          height: "40px",
          backgroundColor: color,
          borderRadius: "2px",
          flexShrink: 0,
        }}
      />
      <div>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: color,
            marginBottom: "0.2rem",
          }}
        >
          {timeRange}
        </p>
        <h2
          className="font-heading"
          style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1a1a1a" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

// ─── SESSION MODAL ────────────────────────────────────────────────────────────

function SessionModal({
  session,
  onClose,
}: {
  session: Session;
  onClose: () => void;
}) {
  return (
    <div
      className="schedule-modal-outer fixed inset-0 z-[2000] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.72)", padding: "1.5rem" }}
      onClick={onClose}
    >
      <div
        className="schedule-modal-inner"
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "680px",
          width: "100%",
          maxHeight: "88vh",
          overflowY: "auto",
          padding: "2.5rem",
          position: "relative",
          boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#aaa",
            transition: "color 0.2s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Tag + time + venue */}
        <div
          className="flex flex-wrap items-center"
          style={{ gap: "0.5rem", marginBottom: "1.25rem", paddingRight: "2rem" }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: session.tagColor === "#888" ? "#999" : "#fff",
              backgroundColor:
                session.tagColor === "#888"
                  ? "rgba(0,0,0,0.06)"
                  : session.tagColor,
              padding: "0.2rem 0.6rem",
              borderRadius: "2px",
            }}
          >
            {session.tag}
          </span>

          {!session.hideTime && session.time && (
            <span
              style={{
                fontSize: "0.8rem",
                color: "#888",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <Clock size={12} />
              {session.time}
            </span>
          )}

          {session.venue && (
            <span
              style={{
                fontSize: "0.8rem",
                color: "#aaa",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <MapPin size={12} />
              {session.venue}
            </span>
          )}

          {session.confirmed && (
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                color: "#d4af37",
                backgroundColor: "rgba(212,175,55,0.1)",
                padding: "0.2rem 0.6rem",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              <CheckCircle size={11} />
              Confirmed
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className="schedule-modal-title font-heading"
          style={{
            fontSize: "1.55rem",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
            paddingRight: "2rem",
          }}
        >
          {session.title}
        </h2>

        {/* Subtitle */}
        {session.subtitle && (
          <p
            style={{
              fontSize: "0.95rem",
              color: "#d4af37",
              fontStyle: "italic",
              marginBottom: "1rem",
              fontWeight: 500,
            }}
          >
            {session.subtitle}
          </p>
        )}

        {/* Sub-titles */}
        {session.subTitles && session.subTitles.length > 0 && (
          <div style={{ marginBottom: "1rem" }}>
            {session.subTitles.map((st, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  marginBottom: "0.4rem",
                }}
              >
                <span
                  style={{
                    color: "#d4af37",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                    fontSize: "0.7rem",
                  }}
                >
                  ◆
                </span>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "#666",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                  }}
                >
                  {st}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "rgba(212,175,55,0.2)",
            marginBottom: "1.25rem",
          }}
        />

        {/* Popup text or description */}
        <p
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.9,
            color: "#555",
            marginBottom: session.speakers && session.speakers.length > 0 ? "1.5rem" : "0",
          }}
        >
          {session.popupText || session.description}
        </p>


      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LitFestSchedulePage() {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedSession(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const totalSessions =
    morningsessions.length + afternoonSessions.length + eveningSessions.length;
  const confirmedCount = [
    ...morningsessions,
    ...afternoonSessions,
    ...eveningSessions,
  ].filter((s) => s.confirmed).length;

  return (
    <>
      {/* Modal */}
      {selectedSession && (
        <SessionModal
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}

      {/* Hero */}
      <section
        data-section="schedule-hero"
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
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)",
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
            background:
              "radial-gradient(circle, rgba(205,92,92,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Link
            href="/literature-festival"
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
            Back to Literature Festival
          </Link>

          <SectionTag>Programme</SectionTag>

          <h1
            data-section="schedule-title"
            className="font-heading font-light"
            style={{
              fontSize: "3.5rem",
              lineHeight: 1.1,
              color: "#ffffff",
              marginBottom: "1.2rem",
            }}
          >
            Full Day{" "}
            <strong className="font-bold" style={{ color: "#d4af37" }}>
              Schedule
            </strong>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "600px",
              marginBottom: "2.5rem",
            }}
          >
            Chicago Indian Literature Festival 2026 — a full day of literary
            conversations, workshops, book launches, spoken word, and an evening
            gala celebration.
          </p>

          <div className="flex flex-wrap" style={{ gap: "2rem" }}>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <Calendar size={16} color="#d4af37" />
              <span
                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}
              >
                Saturday, May 30, 2026
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <Clock size={16} color="#d4af37" />
              <span
                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}
              >
                9:00 AM – 9:30 PM
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <MapPin size={16} color="#d4af37" />
              <span
                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}
              >
                Congress Plaza Hotel, Chicago
              </span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link
              href="https://www.zeffy.com/en-US/ticketing/chicago-indian-literature-festival"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b84e4e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#cd5c5c";
              }}
            >
              Get your Tickets
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section
        data-section="schedule-content"
        style={{ padding: "3rem 3rem 4rem", backgroundColor: "#faf8f3" }}
      >
        <div
          style={{
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* ── MORNING ── */}
          <FadeInSection>
            <BlockHeader
              title="Morning"
              timeRange="9:00 AM – 11:45 AM"
              color="#cd5c5c"
            />
          </FadeInSection>
          <div
            className="schedule-timeline-block"
            style={{
              paddingLeft: "1.65rem",
              borderLeft: "2px solid rgba(0,0,0,0.06)",
              marginBottom: "3.5rem",
            }}
          >
            {morningsessions.map((session, i) => (
              <SessionCard
                key={`morning-${i}`}
                session={session}
                index={i}
                onTitleClick={setSelectedSession}
              />
            ))}
          </div>

          {/* ── AFTERNOON ── */}
          <FadeInSection>
            <BlockHeader
              title="Afternoon"
              timeRange="12:00 PM – 6:00 PM"
              color="#d4af37"
            />
          </FadeInSection>
          <div
            className="schedule-timeline-block"
            style={{
              paddingLeft: "1.65rem",
              borderLeft: "2px solid rgba(0,0,0,0.06)",
              marginBottom: "3.5rem",
            }}
          >
            {afternoonSessions.map((session, i) => (
              <SessionCard
                key={`afternoon-${i}`}
                session={session}
                index={i}
                onTitleClick={setSelectedSession}
              />
            ))}
          </div>

          {/* ── EVENING ── */}
          <FadeInSection>
            <BlockHeader
              title="Evening Gala"
              timeRange="6:00 PM – 9:30 PM"
              color="#1a1a1a"
            />
          </FadeInSection>
          <div
            className="schedule-timeline-block"
            style={{
              paddingLeft: "1.65rem",
              borderLeft: "2px solid rgba(0,0,0,0.06)",
            }}
          >
            {eveningSessions.map((session, i) => (
              <SessionCard
                key={`evening-${i}`}
                session={session}
                index={i}
                onTitleClick={setSelectedSession}
              />
            ))}
          </div>

          {/* Note */}
          <FadeInSection>
            <div
              style={{
                marginTop: "3rem",
                padding: "1.25rem 1.75rem",
                backgroundColor: "rgba(212,175,55,0.07)",
                borderLeft: "3px solid #d4af37",
              }}
            >
              <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.8 }}>
                <strong style={{ color: "#1a1a1a" }}>Note:</strong> Sessions
                marked as &ldquo;Programme Coming Soon&rdquo; are part of the
                full day programme and will be updated with confirmed speaker
                details as they are finalised. Sessions with a{" "}
                <span style={{ color: "#d4af37", fontWeight: 600 }}>
                  gold Confirmed
                </span>{" "}
                badge have been fully finalised. Schedule is subject to change. Click any
                session title to learn more.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section
        data-section="schedule-cta"
        style={{
          padding: "3rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.2rem",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Reserve Your Spot
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.9)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              May 30, 2026 · Congress Plaza Hotel, Chicago
            </p>
            <Link
              href="/register"
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
              Register Now
            </Link>
          </div>
        </FadeInSection>
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          [data-section="schedule-hero"] {
            padding: 7.5rem 1.25rem 2.5rem !important;
          }
          [data-section="schedule-title"] {
            font-size: 2.1rem !important;
          }
          [data-section="schedule-stats-bar"] {
            padding: 1rem 1.25rem !important;
          }
          [data-section="schedule-content"] {
            padding: 2rem 1.25rem 3rem !important;
          }
          [data-section="schedule-cta"] {
            padding: 2.5rem 1.25rem !important;
          }
          .schedule-timeline-block {
            padding-left: 1rem !important;
          }
          .schedule-session-card {
            padding: 1.1rem 0.9rem 1.1rem 1rem !important;
          }
          .schedule-modal-outer {
            padding: 0.75rem !important;
            align-items: flex-end !important;
          }
          .schedule-modal-inner {
            padding: 1.5rem 1.25rem !important;
            max-height: 92vh !important;
            border-radius: 8px 8px 0 0 !important;
          }
          .schedule-modal-title {
            font-size: 1.2rem !important;
            padding-right: 1.75rem !important;
          }
        }
        @media (max-width: 480px) {
          [data-section="schedule-title"] {
            font-size: 1.75rem !important;
          }
          .schedule-session-card {
            padding: 1rem 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}
