"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, X, Clock, Heart, BookOpen, Mic } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// ─── TYPES ─────────────────────────────────────────────────────────────────────

type Speaker = {
  name: string;
  role?: string;
  panel: string;
  timeSlot: string;
  bio: string;
  image: string;
};

// ─── DATA ──────────────────────────────────────────────────────────────────────

const panelGroups: { panel: string; timeSlot: string; icon: React.ElementType; speakers: Speaker[] }[] = [
  {
    panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
    timeSlot: "12:00 PM – 12:45 PM",
    icon: Heart,
    speakers: [
      {
        name: "Shivani Gupta",
        role: "Host",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Shivani is a writer, curator, dancer & overall stage loving human. Her writing is an effort to hold multiple identities without forcing resolution. Her spoken word poetry has been featured globally by BBC, Forbes, Dawn, the Edinburgh Fringe Festival and others. Her written poems can also be found in Baby Teeth Journal, Ranger, Aureation, The Well & more. She is a current In-Surreal-Life fellow, serves as the Development Committee Chair for the Chicago Poetry Center. Her day job is working as a Behavioral Scientist & Design Strategist in an AI-analytics company & writing poems with surprising syntax is her gentle fight against the robots.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268552/shivani_gupta_f5m08y.webp",
      },
      {
        name: "Reema Rao",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Reema Rao is a Konkani American fiction writer. She is currently at work on a short story collection that is interested in challenging the notions of a \"good Indian woman,\" and from which individual stories have received the Story Foundation Prize and the Larry Brown Short Story Award. She is an awardee of the 2026 Creative Accelerator Fund from the Illinois Arts Council, a 2026 Periplus Finalist, and a 2024-2025 Jennifer Weiner Fellow. She lives in Chicago with her husband, 2-year-old son, 1-year-old daughter, and dog Rani.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268553/reema_rao_yohsgw.webp",
      },
      {
        name: "Jyoti Chand",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Jyoti Chand, your cool mom friend, aka Mamajotes on socials, is an author, influencer, funny mom, and advocate for self-care, self-love, and maternal mental health. With a background in stand up comedy and improv, Jyoti guarantees laughs through her reels, posts and stories. She has constant communication with her community through DMs, events and her newsletter. She shares the reality of motherhood and influences her audience to find the joy in their lives. She is currently managed by Haley Henning at YMU Social in Los Angeles. Jyoti has a Masters of Fine Arts in Writing for Children and Young Adults from Hamline University with her first book, Fitting Indian, releasing Spring 2025. She was born and raised in the suburbs of Los Angeles and now lives with her husband and 3 children in the suburbs of Chicago.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268546/jyoti_chand_zgg9no.webp",
      },
      {
        name: "Rebekah James Lovett",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Rebekah James Lovett is a Chicago-based writer, storyteller, and the founder of Thambusami தம்புசாமி, a soul care practice rooted in contemplative spiritual companionship and ancestral resourcing. She is also part of the leadership team at the South Asian Solidarity Movement in Chicago. Drawing from her Tamil and Malayalee roots, her writing is rooted in anti-oppression and decolonial inquiry, exploring diaspora, identity, and the tensions between belonging, memory, and truth-telling.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268548/rebekah_james_lovett_i2zev5.webp",
      },
      {
        name: "Shailla Chand",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Shailla Chand is a writer and storyteller focused on vulnerability, expansion, and reclaiming the narratives of her lineage. As the founder of Breaking Beyond, she explores the 'in-between' spaces of the South Asian diaspora and the quiet courage it takes to return to one's true self.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268549/shailla_chand_jr2vtq.webp",
      },
      {
        name: "Sharanjit Bilan",
        panel: "Rooted & Reaching: Motherhood, Daughterhood & the Self We Carry",
        timeSlot: "12:00 PM – 12:45 PM",
        bio: "Sharan Bilan is a South Asian writer, storyteller, and community health leader based in California. Her work explores identity, grief, resilience, and the generational bonds that shape who we become. She is a contributor to the anthology 'The Desi Divorcee' and co-host of the podcast 'Brown & Unbothered,' where she shares stories about culture, healing, and personal growth.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268549/sharanjit_bilan_dfsc42.webp",
      },
    ],
  },
  {
    panel: "Authors Panel",
    timeSlot: "3:00 PM – 4:00 PM",
    icon: BookOpen,
    speakers: [
      {
        name: "Mrinal Gokhale",
        panel: "Authors Panel",
        timeSlot: "3:00 PM – 4:00 PM",
        bio: "Mrinal Gokhale is a writer, author, and speaker based in Wisconsin. She has published two anthologies that each share true stories covering mental health, neurodiversity, disability, intergenerational trauma, and model minority myth in the South Asian diaspora.",
        image:
          "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268548/mrinal_gokhale_q8iclb.webp",
      },
      {
        name: "Prasanta Verma",
        panel: "Authors Panel",
        timeSlot: "3:00 PM – 4:00 PM",
        bio: "Prasanta Verma is an author, speaker, and professional working in community economic development and food systems. Her debut book, Beyond Ethnic Loneliness, was a 2024 Foreword INDIES Book of the Year finalist. A graduate of the Kenyon Review Writers Workshop and a Write On, Door County writing residency, she holds a Master of Public Health and an MBA and is currently pursuing a doctorate in public health. Prasanta frequently writes and speaks on belonging, connection, and community well-being, and publishes essays through her Substack newsletter. When not working, she enjoys reading, walking, visiting Farmers Markets, and meeting friends for chai.",
        image:
          "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268550/prasanta_verma_gqphto.webp",
      },
    ],
  },
  {
    panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
    timeSlot: "4:00 PM – 5:30 PM",
    icon: Mic,
    speakers: [
      {
        name: "Jitesh Jaggi",
        role: "Host",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Jitesh Jaggi is an immigrant storyteller, oral historian, and an SEL educator from India. His career spans from Investment Banking to nonprofit management. As a Senior Producer and Coach for The Story Collider, he has taught storytelling workshops for the World Health Organization, the University of Chicago, Wakeforest University School of Business among others. A five-time The Moth Story Slam and Grand Slam winner, his stories were recently played on NPR's The Moth Radio Hour and on WGN TV's Day Time Chicago show. Jitesh's one-man show \"Suitcase Stories\" played to a sold-out audience at the Steppenwolf Theatre and The Second City. He was a keynote speaker at the international educator's conference NAFSA and a panelist at the American Writer's Program (AWP). Jitesh is an Illinois Road Scholar for 2026-27 presenting his storytelling workshops and immigrant oral histories at cultural institutions in Illinois.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268547/jitesh_jaggi_qabd2z.webp",
      },
      {
        name: "Shweta Singh",
        role: "Co-host",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Shweta Singh is an Associate Professor in the School of Social Work at Loyola University Chicago and Assistant Director of the Online Social Work Program. She holds a Doctorate in Social Work from the University of North Carolina at Chapel Hill and a Masters from the Tata Institute of Social Sciences, Mumbai. Her research focuses on wellbeing, empowerment, social identity and social development. She organized the first South Asian Women and Girls Conference in 2016 in Chicago, and hosted the community radio show Global Desi World and Women on WLUW for 10 years, which received the Service Award in Recognition of Outstanding Community Service in Media and Social Work by the Clerk of the Circuit Court of Cook County. She has authored fiction plays and a collection of stories highlighting empowered women from the Indian Subcontinent.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268551/shweta_singh_hts9og.webp",
      },
      {
        name: "Tara Swaminathan",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "A trained and accomplished singer who has delighted many Chicago audiences for over 40 years, with both semi classical and Hindi film music. She always had a passion for acting, being involved in Hindi plays both at school and college and has acted in several plays in Chicago. She writes poetry in both English & Hindi and her poetry has been accepted in magazines. She trained as an occupational therapist in New Delhi, India. Tara is married, with 3 adult children and 3 grandkids.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268551/tara_swaminathan_lcrakp.webp",
      },
      {
        name: "Shashank",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "A scientist by profession, been 2 years in Chicago, originally from Roorkee. In my free time, I love long walks, music, singing, and reading books. A big Haruki Murakami fan. Been trying to write short stories and movie scripts.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268551/shashank_grlu7t.webp",
      },
      {
        name: "Shivani Gupta",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Shivani is a writer, curator, dancer & overall stage loving human. Her writing is an effort to hold multiple identities without forcing resolution. Her spoken word poetry has been featured globally by BBC, Forbes, Dawn, the Edinburgh Fringe Festival and others. Her written poems can also be found in Baby Teeth Journal, Ranger, Aureation, The Well & more. She is a current In-Surreal-Life fellow, serves as the Development Committee Chair for the Chicago Poetry Center. Her day job is working as a Behavioral Scientist & Design Strategist in an AI-analytics company & writing poems with surprising syntax is her gentle fight against the robots.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268552/shivani_gupta_f5m08y.webp",
      },
      {
        name: "Poonam Rahman",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Poonam Rahman is a writer, mental health advocate, and founder of Virtue Mental, an international initiative providing accessible mental health resources for South Asian communities. She is also the founder of Fill Your Cup Management, where she supports mental health professionals with public relations, partnerships, and operations. Through her work and writing, Poonam explores themes of identity, healing, and cultural nuance, with a focus on empowering bicultural individuals to embrace their full selves. She is the author of Dot Dot Dot and Dream Big with Afsana.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268547/poonam_rahman_syiqow.webp",
      },
      {
        name: "Binish Lalani",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Binish Lalani is a Chicagoland-based landscape designer and author of the forthcoming series, The Sovereign Empress. Binish believes our most precious commodities are our time and attention. Her book, The Blueprint, provides essential tools to detect 'the mask' early in the dating phase. Her work is complemented by The Code, an 8-song album detailing her personal journey from the depths of suicidal thoughts to reclaiming her power as an Empress. Together with her signature scent, Flora, this ecosystem creates a masterpiece of immersive healing.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268550/binish_lalani_bpkpdo.webp",
      },
      {
        name: "Hilesh Patel",
        panel: "Spoken Word: The Word Stands Up Unfiltered Spoken Word Showcase",
        timeSlot: "4:00 PM – 5:30 PM",
        bio: "Hilesh Patel is a disabled poet, consultant, mediator and member of the art group The Chicago ACT Collective (@thechicagoactcollective). He is a proud immigrant and has called Chicago home for most of his life. His work has been published in Sixty Inches from Center, Quibble, Relief Journal, Passengers, Jaggery, AIOTB Magazine, and others.",
        image: "https://res.cloudinary.com/dist59h0i/image/upload/q_auto/f_auto/v1776268552/hilesh_patel_rabuwj.webp",
      },
    ],
  },
];

// ─── SPEAKER MODAL ─────────────────────────────────────────────────────────────

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <>
      <style>{`
        /* Tablet */
        @media (max-width: 768px) {
          [data-modal="speaker-content"] {
            padding: 1.5rem 1.5rem 1.25rem !important;
          }
          [data-modal="speaker-bio-layout"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          [data-modal="speaker-image"] {
            width: 200px !important;
            height: 260px !important;
            order: -1;
          }
          [data-modal="speaker-name"] {
            font-size: 1.6rem !important;
          }
          [data-modal="speaker-bio-text"] {
            font-size: 0.88rem !important;
            text-align: left !important;
          }
          [data-modal="speaker-subtitle"] {
            font-size: 0.9rem !important;
          }
        }
        /* Mobile */
        @media (max-width: 480px) {
          [data-modal="speaker-overlay"] {
            padding: 0.5rem !important;
            align-items: flex-start !important;
            padding-top: 1rem !important;
          }
          [data-modal="speaker-content"] {
            padding: 1.25rem 1.25rem 1rem !important;
          }
          [data-modal="speaker-name"] {
            font-size: 1.35rem !important;
          }
          [data-modal="speaker-image"] {
            width: 160px !important;
            height: 210px !important;
          }
          [data-modal="speaker-bio-text"] {
            font-size: 0.85rem !important;
            line-height: 1.75 !important;
            text-align: left !important;
          }
          [data-modal="speaker-subtitle"] {
            font-size: 0.85rem !important;
          }
          [data-modal="speaker-role"] {
            font-size: 0.8rem !important;
          }
          [data-modal="speaker-close"] {
            width: 32px !important;
            height: 32px !important;
            top: 0.75rem !important;
            right: 0.75rem !important;
          }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        data-modal="speaker-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#5c5c3d",
            borderLeft: "4px solid #d4af37",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Sticky close button — stays visible when scrolling */}
          <div style={{ position: "relative", flexShrink: 0, height: 0 }}>
            <button
              onClick={onClose}
              aria-label="Close"
              data-modal="speaker-close"
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                zIndex: 10,
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(0,0,0,0.4)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.8)";
                e.currentTarget.style.borderColor = "#d4af37";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable content */}
          <div
            data-modal="speaker-content"
            style={{ padding: "2.5rem 2.5rem 2rem", overflowY: "auto", flex: 1 }}
          >
            {/* Name with gold accent */}
            <div style={{ marginBottom: "1.5rem", paddingRight: "2.5rem" }}>
              <div
                style={{
                  borderLeft: "3px solid #d4af37",
                  paddingLeft: "1rem",
                  display: "inline-block",
                }}
              >
                <h2
                  className="font-heading"
                  data-modal="speaker-name"
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: 300,
                    color: "#d4af37",
                    lineHeight: 1.2,
                  }}
                >
                  {speaker.name}
                </h2>
              </div>
            </div>

            {/* Panel + role + time slot */}
            <div style={{ marginBottom: "1.5rem", paddingLeft: "0.5rem" }}>
              {speaker.role && (
                <p
                  style={{
                    color: "#d4af37",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: "0.3rem",
                  }}
                >
                  {speaker.role}
                </p>
              )}
              <p
                data-modal="speaker-subtitle"
                style={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1rem",
                }}
              >
                {speaker.panel}
              </p>
              <p
                data-modal="speaker-role"
                style={{
                  color: "#d4af37",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  marginTop: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Clock size={13} />
                {speaker.timeSlot}
              </p>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(212,175,55,0.3)",
                marginBottom: "1.5rem",
              }}
            />

            {/* Bio + Image layout */}
            <div
              data-modal="speaker-bio-layout"
              style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}
            >
              {/* Bio text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  data-modal="speaker-bio-text"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.92rem",
                    lineHeight: 1.85,
                  }}
                >
                  {speaker.bio}
                </p>
              </div>

              {/* Image on right */}
              <div
                data-modal="speaker-image"
                style={{
                  flexShrink: 0,
                  width: "280px",
                  height: "360px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, 280px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────────

export default function SpeakersPage() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  return (
    <>
      {/* Speaker Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <SpeakerModal
            speaker={selectedSpeaker}
            onClose={() => setSelectedSpeaker(null)}
          />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        data-section="speakers-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 5rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
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
          className="relative z-10 w-full"
          style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}
        >
          <FadeInSection>
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

            <SectionTag>Chicago Indian Literature Festival 2026</SectionTag>

            <h1
              data-section="speakers-title"
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Our{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Speakers 2026
              </strong>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "580px",
              }}
            >
              Meet the authors, artists, thinkers, and storytellers who will
              take the stage at Chicago Indian Literature Festival — May 30,
              2026.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Speakers Grid */}
      <section
        data-section="speakers-grid-section"
        style={{ padding: "4rem 3rem", backgroundColor: "#6b6b4e" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {panelGroups.map((group) => (
            <div key={group.panel} data-section="speakers-panel-group" style={{ marginBottom: "4rem" }}>

              {/* Panel block header */}
              <FadeInSection>
                <div style={{ marginBottom: "2.5rem" }}>
                  {/* Icon + heading on the exact same line */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(212,175,55,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <group.icon size={20} color="#d4af37" />
                    </div>
                    <h2
                      data-section="speakers-panel-heading"
                      className="font-heading"
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: 300,
                        color: "#ffffff",
                      }}
                    >
                      {group.panel}
                    </h2>
                  </div>
                  {/* Timeslot — indented to align under heading text */}
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#d4af37",
                      paddingLeft: "calc(40px + 1rem)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Clock size={12} />
                    {group.timeSlot}
                  </p>
                </div>
              </FadeInSection>

              {/* Speaker cards — small portrait cards, centered */}
              <div
                data-section="speakers-cards-flex"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                style={{ gap: "2rem" }}
              >
                {group.speakers.map((speaker, i) => (
                  <FadeInSection key={speaker.name} delay={i * 0.15}>
                    <div data-section="speakers-card-item" style={{ width: "100%" }}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedSpeaker(speaker)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedSpeaker(speaker);
                          }
                        }}
                        style={{
                          transition: "all 0.4s ease",
                          cursor: "pointer",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {/* Photo */}
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "3 / 4",
                            overflow: "hidden",
                            backgroundColor: "#3a3a2a",
                          }}
                        >
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover"
                            style={{ transition: "transform 0.5s ease" }}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        </div>

                        {/* Gold banner — name + optional role */}
                        <div
                          style={{
                            backgroundColor: "#b8a94e",
                            padding: "0.6rem 0.85rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.15rem",
                          }}
                        >
                          <span
                            data-card="card-name"
                            className="font-heading font-bold"
                            style={{
                              color: "#1a1a1a",
                              fontSize: "1.1rem",
                              lineHeight: 1.2,
                            }}
                          >
                            {speaker.name}
                          </span>
                          {speaker.role && (
                            <em
                              style={{
                                color: "rgba(26,26,26,0.75)",
                                fontSize: "0.75rem",
                                fontStyle: "italic",
                                lineHeight: 1.2,
                              }}
                            >
                              {speaker.role}
                            </em>
                          )}
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}

          {/* Pagination dots — like team page */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "2.5rem",
            }}
          >
            {panelGroups.map((_, i) => (
              <div
                key={i}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: i === 0 ? "#b8a94e" : "rgba(255,255,255,0.3)",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
