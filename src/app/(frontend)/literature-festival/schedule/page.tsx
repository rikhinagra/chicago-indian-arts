"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Clock, CheckCircle, Calendar, Ticket } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// ─── TYPE ────────────────────────────────────────────────────────────────────

type Session = {
  time: string;
  title: string;
  subtitle?: string;
  speakers?: string[];
  ownerLead?: string;
  supportingTeam?: string;
  venue?: string;
  description?: string;
  confirmed: boolean;
  tag: string;
  tagColor: string;
  ticketPrice?: string;
};

// ─── SCHEDULE DATA ────────────────────────────────────────────────────────────

const morningsessions: Session[] = [
  {
    time: "8:00 AM",
    title: "Check In & Logistics Prep",
    subtitle: "Booth set up · Gaming Arcade · Food Vendors · Chai & Coffee Bar · Tattoo Bar",
    description:
      "Give booth to all community organizations. Gaming Arcade set up. Food Vendors set up. Badges. Standees, Step & Repeat. Chai and Coffee Bar. Tattoo bar.",
    ownerLead: "Neetu + Neelam",
    supportingTeam: "Ashish, Akhilesh, Rupesh, Yatharth, Neelam, Bhargav, Jyoti Temple",
    confirmed: false,
    tag: "Setup",
    tagColor: "#888",
  },
  {
    time: "9:30 AM",
    title: "Registration & Welcome",
    subtitle: "Doors open",
    description:
      "Collect your badges, explore the venue, visit community booths, book signing tables, the Chai & Coffee Bar, and connect with fellow attendees before the day begins.",
    venue: "Main Entrance",
    ownerLead: "Shivani + Divya + Parul",
    supportingTeam: "Ashish, Akhilesh, Rupesh, Yatharth, Neelam, Bhargav",
    confirmed: false,
    tag: "General",
    tagColor: "#888",
  },
  {
    time: "10:00 – 11:00 AM",
    title: "Opening Ceremony",
    subtitle: "Lamp Lighting · Inaugural Address · Poetry Recital · Dance",
    description:
      "The official inauguration of the Chicago Indian Literature Festival 2026 with a traditional lamp lighting ceremony, welcome addresses, a poetry recitation, and a classical dance performance on the Main Stage.",
    venue: "Main Stage",
    speakers: ["Smita Garg", "Julie A", "Geetika Chandran"],
    ownerLead: "Smita Garg + Julie A + Geetika Chandran",
    supportingTeam: "Ashish, Akhilesh, Rupesh, Yatharth, Neelam, Bhargav",
    confirmed: true,
    tag: "Opening",
    tagColor: "#cd5c5c",
    ticketPrice: "$5",
  },
  {
    time: "10:00 – 11:00 AM",
    title: "Children's Story Corner",
    subtitle: "Family storytelling sessions for young readers",
    description:
      "A dedicated space for children and families featuring interactive storytelling, poetry for young minds, and culturally rich narratives spanning festivals, seasons, and South Asian traditions.",
    venue: "Breakout Room",
    speakers: [
      "Deepa Bhaskaran Salem",
      "Ajanta Chakraborty",
      "Godhuli Gupta",
      "Geshu Sugandh",
      "Rima Chakraborty",
      "Parul Bhandari",
    ],
    confirmed: true,
    tag: "Children & Family",
    tagColor: "#cd5c5c",
    ticketPrice: "$5",
  },
  {
    time: "11:00 AM – 12:00 PM",
    title: "Opening Keynote Session",
    subtitle: "An inspiring conversation to set the tone for the festival",
    description: "Programme details coming soon.",
    venue: "Main Stage",
    speakers: [
      "Sunita Williams",
      "Ferose SAP",
      "Kiran Desai",
      "Chitra Divakaruni",
      "Roshan Choksi",
      "Saborna Roy Chowdhary",
      "Sonali Dev",
    ],
    ownerLead: "Sarveshi + Divya + Kavita",
    supportingTeam: "Geetika Chandran + Alpana",
    confirmed: false,
    tag: "Keynote",
    tagColor: "#888",
    ticketPrice: "$10",
  },
];

const afternoonSessions: Session[] = [
  {
    time: "12:00 – 12:45 PM",
    title: "Reading Salon & Workshop",
    subtitle: "Motherhood, Daughterhood & Sense of Self",
    description:
      "An intimate reading salon and workshop exploring identity, womanhood, and the bonds between mothers and daughters — the roles that are written versus the roles we choose to play. Featuring confirmed voices from across the South Asian literary diaspora.",
    venue: "Salon Room",
    speakers: [
      "Reema Rao",
      "Sharanjit Bilan",
      "Jyotichand",
      "Rebekah James Lovett",
      "Shailla Chand",
      "Shivani Gupta (Facilitator)",
    ],
    ownerLead: "Shivani Gupta",
    supportingTeam: "Pooja Nayak + Geetika Chandran",
    confirmed: true,
    tag: "Workshop",
    tagColor: "#d4af37",
    ticketPrice: "$10",
  },
  {
    time: "12:45 – 1:15 PM",
    title: "Book Launch",
    subtitle: "A celebration of a new literary voice",
    description:
      "An exclusive book launch celebration featuring a reading, author conversation, and book signing.",
    venue: "Main Stage",
    speakers: ["Parul Bhandari"],
    ownerLead: "Shivani Gupta",
    confirmed: true,
    tag: "Book Launch",
    tagColor: "#cd5c5c",
  },
  {
    time: "1:15 – 1:45 PM",
    title: "From Mythology to Combat: Storytelling in Games",
    subtitle: "AI, Technology & Literature Panel",
    description: "Programme details coming soon.",
    venue: "Main Stage",
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
    ownerLead: "Vishal Rajput + Sanjay Bansal + Jinal",
    supportingTeam: "Parul Bhandari + Alpana + Rupesh + Ashish",
    confirmed: false,
    tag: "Panel",
    tagColor: "#888",
    ticketPrice: "$10",
  },
  {
    time: "2:00 – 2:45 PM",
    title: "Writers Workshop",
    subtitle: "Craft sessions with published authors",
    description: "Programme details coming soon.",
    venue: "Workshop Room",
    speakers: ["Keith Farazi", "Scott Sommer", "Ahmed Bin Athar"],
    ownerLead: "Sarveshi + Parul",
    supportingTeam: "Bhargav, Pooja Nayak, Ashish",
    confirmed: false,
    tag: "Workshop",
    tagColor: "#888",
    ticketPrice: "$5",
  },
  {
    time: "3:00 – 4:00 PM",
    title: "Authors Panel",
    subtitle: "In conversation with celebrated literary voices",
    description: "Programme details coming soon.",
    venue: "Main Stage",
    speakers: [
      "Sunita Williams",
      "Ferose SAP",
      "Kiran Desai",
      "Chitra Divakaruni",
      "Roshan Choksi",
      "Saborna Roy Chowdhary",
      "Sonali Dev",
      "Nina Sudakar",
      "Shruti Tewari",
      "Mrinal Kokhle",
      "Prasanta Verma",
    ],
    ownerLead: "Sarveshi + Divya + Kavita",
    supportingTeam: "Smita Garg, Alpana, Julie A",
    confirmed: false,
    tag: "Panel",
    tagColor: "#888",
    ticketPrice: "$5",
  },
  {
    time: "4:00 – 5:30 PM",
    title: "Spoken Fest",
    subtitle: "Open Mic · Poetry · Storytelling",
    description: "Programme details coming soon.",
    venue: "Main Stage",
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
    ownerLead: "Jitesh Jaggi + Shweta Singh",
    supportingTeam: "Bhargav, Yatharth, Neelam, Akhilesh, Ashish",
    confirmed: false,
    tag: "Open Mic",
    tagColor: "#888",
    ticketPrice: "$10",
  },
];

const eveningSessions: Session[] = [
  {
    time: "6:30 – 7:00 PM",
    title: "Red Carpet",
    subtitle: "Welcome the evening in style",
    description:
      "A glamorous red carpet reception welcoming guests to the evening gala of the Chicago Indian Literature Festival 2026.",
    venue: "Grand Entrance",
    ownerLead: "Neetu + Divya + Neelam",
    supportingTeam: "Bhargav, Yatharth, Neelam, Akhilesh, Ashish",
    confirmed: true,
    tag: "Evening Gala",
    tagColor: "#1a1a1a",
    ticketPrice: "TBD",
  },
  {
    time: "7:00 – 9:00 PM",
    title: "Opening Gala",
    subtitle: "Opening Remarks · Board & Advisory Board Introductions",
    description:
      "A grand evening celebration featuring opening remarks by the Founder & President and introductions of the CICA Board and Advisory Board.",
    venue: "Grand Ballroom",
    speakers: ["Jigar Shah", "CICA Board & Advisory Board"],
    ownerLead: "Jigar",
    supportingTeam:
      "Bhargav, Yatharth, Neelam, Akhilesh, Ashish, Julie, Smita, Parul, (everyone on the team)",
    confirmed: true,
    tag: "Evening Gala",
    tagColor: "#1a1a1a",
  },
  {
    time: "7:00 – 9:00 PM",
    title: "Food Panel",
    subtitle: "A literary feast — food, culture & storytelling",
    description:
      "A 30-minute culinary panel bringing together Chicago's most celebrated South Asian chefs, food writers, and restaurateurs for a conversation on food, culture, and identity.",
    venue: "Grand Ballroom",
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
    ownerLead: "Divya + Kavita + Geetika",
    confirmed: false,
    tag: "Food Panel",
    tagColor: "#888",
    ticketPrice: "TBD",
  },
  {
    time: "7:00 – 9:00 PM",
    title: "Key Guest Speeches",
    subtitle: "Voices that inspire",
    description: "Programme details coming soon.",
    venue: "Grand Ballroom",
    speakers: ["Rishaad Tobaccowala"],
    ownerLead: "Divya + Kavita + Sarveshi",
    confirmed: false,
    tag: "Speech",
    tagColor: "#888",
  },
  {
    time: "7:00 – 9:00 PM",
    title: "Cultural Performances",
    subtitle: "Music · Dance · Classical Arts",
    description:
      "An evening of cultural performances celebrating the richness and diversity of South Asian artistic traditions.",
    venue: "Grand Ballroom",
    speakers: [
      "Ochin Pakhi",
      "South Asian Musical Society",
      "Tanveer Singh Sapra",
      "Sandhya Menon",
    ],
    ownerLead: "Divya + Neetu + Jigar + Kavita",
    confirmed: false,
    tag: "Performance",
    tagColor: "#888",
    ticketPrice: "TBD",
  },
];

// ─── HELPER ──────────────────────────────────────────────────────────────────

function splitNames(str: string): string[] {
  return str.split(/[+,]/).map((s) => s.trim()).filter(Boolean);
}

// ─── SESSION CARD ─────────────────────────────────────────────────────────────

function SessionCard({ session, index }: { session: Session; index: number }) {
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
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            border: `1px solid ${session.confirmed ? "rgba(212,175,55,0.25)" : "rgba(0,0,0,0.06)"}`,
            borderLeft: `4px solid ${session.confirmed ? "#d4af37" : "#e0e0e0"}`,
            padding: "1.5rem 1.75rem",
            transition: "all 0.3s ease",
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
          {/* Top row: time + badges */}
          <div
            className="flex flex-wrap items-center"
            style={{ gap: "0.6rem", marginBottom: "0.85rem" }}
          >
            <div
              className="flex items-center"
              style={{ gap: "0.35rem", color: "#888", fontSize: "0.8rem" }}
            >
              <Clock size={13} />
              <span style={{ fontWeight: 500 }}>{session.time}</span>
            </div>

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

            {session.ticketPrice && (
              <span
                className="flex items-center"
                style={{
                  gap: "0.3rem",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  color: "#444",
                  backgroundColor: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "2px",
                }}
              >
                <Ticket size={11} />
                Ticket Price: {session.ticketPrice}
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

          {/* Title */}
          <h3
            className="font-heading"
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: session.confirmed ? "#1a1a1a" : "#555",
              marginBottom: session.subtitle ? "0.3rem" : "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {session.title}
          </h3>

          {/* Subtitle */}
          {session.subtitle && (
            <p
              style={{
                fontSize: "0.88rem",
                color: "#d4af37",
                fontWeight: 500,
                marginBottom: "0.75rem",
                fontStyle: "italic",
              }}
            >
              {session.subtitle}
            </p>
          )}

          {/* Description */}
          {session.description && (
            <p
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.8,
                color: session.confirmed ? "#666" : "#aaa",
                marginBottom: "1rem",
              }}
            >
              {session.description}
            </p>
          )}

          {/* Authors & Artists */}
          {session.speakers && session.speakers.length > 0 && (
            <div style={{ marginBottom: "0.85rem" }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: "0.5rem",
                }}
              >
                Authors & Artists
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                {session.speakers.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.78rem",
                      color: session.confirmed ? "#1a1a1a" : "#aaa",
                      backgroundColor: session.confirmed
                        ? "rgba(212,175,55,0.08)"
                        : "rgba(0,0,0,0.04)",
                      border: `1px solid ${session.confirmed ? "rgba(212,175,55,0.2)" : "rgba(0,0,0,0.08)"}`,
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                      fontWeight: session.confirmed ? 500 : 400,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Owner Lead */}
          {session.ownerLead && (
            <div style={{ marginBottom: "0.85rem" }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: "0.5rem",
                }}
              >
                Owner Lead
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                {splitNames(session.ownerLead).map((name) => (
                  <span
                    key={name}
                    style={{
                      fontSize: "0.78rem",
                      color: "#555",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Supporting Team */}
          {session.supportingTeam && (
            <div>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#999",
                  marginBottom: "0.5rem",
                }}
              >
                Supporting Team
              </p>
              <div className="flex flex-wrap" style={{ gap: "0.4rem" }}>
                {splitNames(session.supportingTeam).map((name) => (
                  <span
                    key={name}
                    style={{
                      fontSize: "0.78rem",
                      color: "#555",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "2px",
                      fontWeight: 400,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
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

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LitFestSchedulePage() {
  const totalSessions =
    morningsessions.length + afternoonSessions.length + eveningSessions.length;
  const confirmedCount = [
    ...morningsessions,
    ...afternoonSessions,
    ...eveningSessions,
  ].filter((s) => s.confirmed).length;

  return (
    <>
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
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                Saturday, May 30, 2026
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <Clock size={16} color="#d4af37" />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                9:30 AM – 9:00 PM
              </span>
            </div>
            <div className="flex items-center" style={{ gap: "0.6rem" }}>
              <MapPin size={16} color="#d4af37" />
              <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.85)" }}>
                Congress Plaza Hotel, Chicago
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div
        data-section="schedule-stats-bar"
        style={{
          backgroundColor: "#faf8f3",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: "1.25rem 3rem",
        }}
      >
        <div
          className="flex flex-wrap items-center justify-between"
          style={{
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "1rem",
          }}
        >
          <div className="flex flex-wrap" style={{ gap: "2.5rem" }}>
            <div>
              <span className="font-heading" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a1a1a" }}>
                {totalSessions}
              </span>
              <span style={{ fontSize: "0.8rem", color: "#888", marginLeft: "0.4rem" }}>
                Sessions
              </span>
            </div>
            <div>
              <span className="font-heading" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#d4af37" }}>
                {confirmedCount}
              </span>
              <span style={{ fontSize: "0.8rem", color: "#888", marginLeft: "0.4rem" }}>
                Confirmed
              </span>
            </div>
            <div>
              <span className="font-heading" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#cd5c5c" }}>
                1
              </span>
              <span style={{ fontSize: "0.8rem", color: "#888", marginLeft: "0.4rem" }}>
                Day
              </span>
            </div>
          </div>

          <div className="flex items-center" style={{ gap: "1.5rem" }}>
            <div className="flex items-center" style={{ gap: "0.4rem" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#d4af37" }} />
              <span style={{ fontSize: "0.78rem", color: "#666" }}>Confirmed</span>
            </div>
            <div className="flex items-center" style={{ gap: "0.4rem" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ccc" }} />
              <span style={{ fontSize: "0.78rem", color: "#666" }}>Programme Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Content */}
      <section
        data-section="schedule-content"
        style={{ padding: "3rem 3rem 4rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>

          {/* ── MORNING ── */}
          <FadeInSection>
            <BlockHeader title="Morning" timeRange="9:30 AM – 12:00 PM" color="#cd5c5c" />
          </FadeInSection>
          <div style={{ paddingLeft: "1.65rem", borderLeft: "2px solid rgba(0,0,0,0.06)", marginBottom: "3.5rem" }}>
            {morningsessions.map((session, i) => (
              <SessionCard key={`morning-${i}`} session={session} index={i} />
            ))}
          </div>

          {/* ── AFTERNOON ── */}
          <FadeInSection>
            <BlockHeader title="Afternoon" timeRange="12:00 PM – 5:30 PM" color="#d4af37" />
          </FadeInSection>
          <div style={{ paddingLeft: "1.65rem", borderLeft: "2px solid rgba(0,0,0,0.06)", marginBottom: "3.5rem" }}>
            {afternoonSessions.map((session, i) => (
              <SessionCard key={`afternoon-${i}`} session={session} index={i} />
            ))}
          </div>

          {/* ── EVENING ── */}
          <FadeInSection>
            <BlockHeader title="Evening Gala" timeRange="6:30 PM – 9:00 PM" color="#1a1a1a" />
          </FadeInSection>
          <div style={{ paddingLeft: "1.65rem", borderLeft: "2px solid rgba(0,0,0,0.06)" }}>
            {eveningSessions.map((session, i) => (
              <SessionCard key={`evening-${i}`} session={session} index={i} />
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
                <span style={{ color: "#d4af37", fontWeight: 600 }}>gold Confirmed</span>{" "}
                badge have been fully finalised. Ticket prices marked{" "}
                <strong style={{ color: "#1a1a1a" }}>TBD</strong> will be
                announced shortly. Schedule is subject to change.
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
          <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
            <h2
              className="font-heading font-semibold"
              style={{ fontSize: "2.2rem", color: "#ffffff", marginBottom: "1rem" }}
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
    </>
  );
}
