"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Users, Award, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

// ─── TYPE ────────────────────────────────────────────────────────────────────

type Member = {
  name: string;
  role: string;
  subtitle: string;
  bio: string;
  fullBio: string;
  quote?: string;
  image: string;
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const leadershipMembers: Member[] = [
  {
    name: "Jigar Shah",
    role: "Founder & President",
    subtitle: "Founder, Chicago Indian Arts",
    bio: "A passionate advocate for Indian arts and culture, Jigar founded Chicago Indian Collective Arts to celebrate and preserve India's rich cultural heritage in the heart of Chicago.",
    fullBio:
      "Jigar Shah is the Founder of Chicago Indian Arts. He is passionate about the connection between stories, films, and community. He aims to share perspectives through films and art by providing a platform for talents who are overlooked as he empowers each of us to see our inner artists. Jigar holds several leadership titles and is an advisory board member to several nonprofits. He also serves as a Director of the Chicago South Asian Film Festival and jury member in other international film festivals. Working in a leadership role in a Global healthcare financial firm, Jigar is a technology strategy leader who holds advanced degrees in Engineering, MBA (Chicago), and Law (Pritzker School of Law, Northwestern, Chicago). He is an avid reader with a profound appreciation for literature, poetry, and the arts. He believes in the power of conversation to shape identity, foster empathy, and encourage civic engagement.",
    quote:
      "I believe in bringing each of us together through art and culture; this is possible, and I make this an everyday action in my life.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776692934/jigar_shah_euj1xe.webp",
  },
];

const boardMembers: Member[] = [
  {
    name: "Sarveshi Shukla",
    role: "Board Member",
    subtitle: "Board, Chicago Indian Arts",
    bio: "An executive leader with over two decades of experience at the intersection of strategy, innovation, and execution, particularly in healthcare, technology, and complex regulated industries.",
    fullBio:
      "Sarveshi Shukla is an executive leader with over two decades of experience at the intersection of strategy, innovation, and execution, particularly in healthcare, technology, and complex regulated industries. Throughout her various leadership roles, she has built and scaled technology platforms, led large cross-functional teams, and advised boards and senior leadership on digital transformation, data strategy, and organizational change. Sarveshi is also the founder of her boutique advisory firm, 'Ikigaii.'\n\nBeyond her professional accomplishments, Sarveshi is deeply committed to culture, storytelling, and community dialogue. She is an avid reader with a profound appreciation for literature, poetry, and the arts. Sarveshi believes in the power of conversation to shape identity, foster empathy, and encourage civic engagement. Growing up in a family that celebrated reading, she was exposed to literature from India and around the world, which nurtured her love for various art forms. Earlier in her career, Sarveshi hosted and produced a live radio show for the South Asian community in Dallas for several years, creating a platform for cultural exchange that showcased music, literature, and community voices.\n\nCurrently, she resides in Chicago with her husband, Dr. Deva Mahalingam, a Professor of Medicine and an Oncologist at Northwestern, and their two wonderful children, Agastya and Sharanya. Together, they are passing on the same love for literature, arts, and culture to their kids that they experienced in their own childhoods.\n\nSarveshi and Jigar Shah have been close friends for over a decade, bonded by their shared values of community building, thoughtful leadership, and creating inclusive spaces that elevate diverse perspectives. Sarveshi brings a combination of executive rigor, creative curiosity, and genuine passion for literature and the arts to the board.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776810929/sarveshi_shukla_rgssnm.webp",
  },
  {
    name: "Shetal Patel",
    role: "Board Member",
    subtitle: "Board, Chicago Indian Arts",
    bio: "Board-certified internal medicine physician with over 20 years of service in Chicago, founder of Cosmedic Laser Spas, and an avid world traveler who has visited 90 countries.",
    fullBio:
      "Dr. Shetal Patel, MD, FACP, is a board-certified internal medicine physician with over 20 years of dedicated service in the Greater Chicago area. A graduate of the University of Illinois College of Medicine, she practices as a hospitalist, has served as Associate Clinical Professor teaching internal medicine residents, and has acted as a liaison between community members and government leaders on primary care initiatives. As a Fellow of the American College of Physicians, she brings a compassionate, patient-centered approach to healthcare and community advocacy.\n\nAn accomplished entrepreneur, Dr. Patel founded Cosmedic Laser Spas, one of the first medical spas in the region dedicated to women of color, with advanced laser technology specifically designed for darker skin tones. The medi-spa particularly served Indian women in the Chicago area and grew successfully before she sold the business for profit.\n\nDeeply connected to her Indian heritage, Dr. Patel is honored to join the board of Chicago Indian Arts. She is passionate about preserving and celebrating Indian arts and cultural traditions while strengthening community ties in the Chicago region.\n\nFor Dr. Patel, adventure is a lifelong pursuit. She has visited 90 countries and captures these journeys through photography, from bungee jumping in Australia and shark diving in South Africa to trekking in Bhutan. Her travels have exposed her to diverse cultures, traditions, and artistic expressions around the world. This global perspective has deepened her appreciation for her Indian heritage and fuels her passion for preserving and celebrating Indian arts in the Chicago community.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776952625/shetal_patel_eygkws.webp",
  },
  {
    name: "Raj Kamaria",
    role: "Finance Director",
    subtitle: "Finance Director, Chicago Indian Arts",
    bio: "Former McKinsey consultant and current Venture Capitalist focused on social impact, green energy, and alternative investments, joining Chicago Indian Arts as Finance Director.",
    fullBio:
      "Raj Kamaria is a former McKinsey consultant and current Venture Capitalist, focused on social impact, green energy, and alternative investments. He has experience as former Director of Givology - Chicago, an international non-profit focused on helping underprivileged women in India, and attended the Kellogg School of Management in Evanston, IL. He will be joining Chicago Indian Arts as Finance Director.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776952624/raj_kamaria_z3celc.webp",
  },
];

const advisoryBoardMembers: Member[] = [
  {
    name: "Sanjay Bhattacharjee",
    role: "Advisory Board Member",
    subtitle: "Advisory Board, Chicago Indian Arts",
    bio: "Over two decades of experience in international media and entertainment, with films that have won awards at the Toronto, Los Angeles, and Madrid Film Festivals with theatrical releases across 10+ countries.",
    fullBio:
      "Sanjay Bhattacharjee brings over two decades of experience in international media and entertainment. He began his career as Head of Corporate Communications at a pioneering Indian television and film company known for producing National Award-winning films.\n\nAs CEO, Co-Founder, and Founder Director across multiple motion picture companies, Sanjay has led strategy, operations, content creation, B2B partnerships, and Hollywood co-productions across India, Europe, and the US. His films have won awards at the Toronto, Los Angeles, and Madrid Film Festivals, with theatrical releases across 10+ countries. As an independent producer, his debut film won a National Award, the FIPRESCI Critics' Award, and was an official Berlin Film Festival selection.\n\nToday, Sanjay is focused on building a global entertainment brand at the intersection of storytelling and emerging technology. With partnerships spanning the US, Canada, France, Spain, Singapore, the Middle East, and Latin America, his mission is to develop and distribute 10+ commercially viable, socially relevant, and franchisable projects annually across features, documentaries, and episodic OTT content through strategic alliances with top talent, distribution, and financing partners.\n\nSanjay is a Film and Television Production alumnus of UCLA and is based between London and Los Angeles.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776810927/sanjay_bhattacharjee_y3dhmh.webp",
  },
  {
    name: "Rishad Tobaccowala",
    role: "Advisory Board Member",
    subtitle: "Advisory Board, Chicago Indian Arts",
    bio: "Named by BusinessWeek as one of the top business leaders for pioneering innovation, and TIME magazine dubbed him one of five 'Marketing Innovators'. One of only 300 people elected to the Advertising Hall of Fame since 1948.",
    fullBio:
      "Rishad Tobaccowala was named by BusinessWeek as one of the top business leaders for his pioneering innovation and TIME magazine dubbed him one of five \"Marketing Innovators\". He is one of only 300 people elected to the Advertising Hall of Fame since 1948.\n\nRishad is the author of \"Restoring the Soul of Business: Staying Human in The Age of Data\" which helps people think, feel, and see differently about how to grow their companies, their teams and themselves to remain relevant in transformational time and \"Rethinking Work\" which helps people thrive amidst the seismic changes that will occur at work due a combination of changing demographics, new mindsets, the rise of distributed work, and the spread of AI.\n\nRishad is the host of the What Next? The Rethinking Work Show and Unbossing podcasts and publishes a thought letter called \"The Future Does Not Fit into the Containers of the Past\" which is read by over 30,000 leaders every week.\n\nRishad Tobaccowala remains a Senior Advisor to the Publicis Groupe where he has spent his entire career, most recently serving as the Chief Growth Officer and Chief Strategist of the 100,000+ person firm. Prior to those roles Rishad was the Chairman of Digitas and Razorfish.\n\nRishad serves as a board director or advisor to the University of Chicago Graham School, LoopMe, Journey, Growth Catalyst Partners, Dumbstruck, Shift Paradigm, Quilt.Ai and Qualsights. Rishad is also the Chairman of the Tobaccowala Foundation which helps over 10,000+ people in India.\n\nRishad has an MBA from the University of Chicago Booth School and a BS in Mathematics from the University of Bombay.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776810926/rishaad_tobaccowala_ytdgfe.webp",
  },
];

const teamMembers: Member[] = [
  {
    name: "Divya Verma",
    role: "Director of Programs",
    subtitle: "Director of Programs, Chicago Indian Arts",
    bio: "An experienced program strategist, Divya oversees all cultural initiatives and events that bring the mission of Chicago Indian Arts to life.",
    fullBio:
      "Divya Verma serves as the Director of Programs at Chicago Indian Arts. She is responsible for designing, developing, and overseeing the organization's diverse portfolio of cultural programs and events. With a keen eye for detail and a passion for storytelling through the arts, Divya ensures that every program reflects the richness and depth of Indian culture while engaging audiences across Chicago and beyond.",
    quote:
      "Every program we create is an opportunity to tell a story, celebrate heritage, and inspire the next generation of artists.",
    image:
      "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118852/divya-verma-director-of-programs_oatiqe.webp",
  },
  {
    name: "Rekha Tobaccowala",
    role: "Director of Strategy & Communications",
    subtitle: "Director of Strategy & Communications, Chicago Indian Arts",
    bio: "An award-winning communications professional and educator with experience at the University of Chicago Laboratory Schools, Edelman, and DDB Needham.",
    fullBio:
      "Rekha Tobaccowala is an award winning communications professional and educator. In the course of her career, she has worked as a teacher at the University of Chicago Laboratory Schools. She is a story teller and a producer with her daughter, filmmaker Ria Tobaccowala, on her 3 short films, which are streaming on HBO MAX. Rekha has also worked as an account executive at Edelman and DDB Needham.\n\nShe holds a Master of Arts from the University of Minnesota and a Bachelor's degree from the Grady School of Journalism, University of Georgia. She loves traveling and learning about different cultures and traditions.\n\nRekha is an advisor to the Tobaccowala Foundation in India, and is on the Steering Committee of the University of Chicago Women's Board.",
    image: "https://res.cloudinary.com/dist59h0i/image/upload/v1776692934/rekha_tobaccowala_tzpeed.webp",
  },
];

// ─── MODAL ───────────────────────────────────────────────────────────────────

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => { if (e.key === "Escape") onClose(); }, [onClose]);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKeyDown); document.body.style.overflow = ""; };
  }, [handleKeyDown]);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          [data-modal="member-content"] { padding: 1.5rem 1.5rem 1.25rem !important; }
          [data-modal="member-layout"] { flex-direction: column !important; align-items: center !important; }
          [data-modal="member-img"] { width: 200px !important; height: 260px !important; order: -1; }
          [data-modal="member-name"] { font-size: 1.6rem !important; }
          [data-modal="member-bio"] { font-size: 0.88rem !important; text-align: left !important; }
          [data-modal="member-subtitle"] { font-size: 0.9rem !important; }
        }
        @media (max-width: 480px) {
          [data-modal="member-overlay"] { padding: 0.5rem !important; align-items: flex-start !important; padding-top: 1rem !important; }
          [data-modal="member-content"] { padding: 1.25rem 1.25rem 1rem !important; }
          [data-modal="member-name"] { font-size: 1.35rem !important; }
          [data-modal="member-img"] { width: 160px !important; height: 210px !important; }
          [data-modal="member-bio"] { font-size: 0.85rem !important; line-height: 1.75 !important; text-align: left !important; }
          [data-modal="member-subtitle"] { font-size: 0.85rem !important; }
          [data-modal="member-role"] { font-size: 0.8rem !important; }
          [data-modal="member-close"] { width: 32px !important; height: 32px !important; top: 0.75rem !important; right: 0.75rem !important; }
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
        data-modal="member-overlay"
        style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ position: "relative", width: "100%", maxWidth: "900px", maxHeight: "90vh", display: "flex", flexDirection: "column", backgroundColor: "#5c5c3d", borderLeft: "4px solid #d4af37" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ position: "relative", flexShrink: 0, height: 0 }}>
            <button
              onClick={onClose} aria-label="Close" data-modal="member-close"
              style={{ position: "absolute", top: "1.25rem", right: "1.25rem", zIndex: 10, width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(0,0,0,0.4)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.8)"; e.currentTarget.style.borderColor = "#d4af37"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
            >
              <X size={18} />
            </button>
          </div>

          <div data-modal="member-content" style={{ padding: "2.5rem 2.5rem 2rem", overflowY: "auto", flex: 1 }}>
            <div style={{ marginBottom: "1.5rem", paddingRight: "2.5rem" }}>
              <div style={{ borderLeft: "3px solid #d4af37", paddingLeft: "1rem", display: "inline-block" }}>
                <h2 className="font-heading" data-modal="member-name" style={{ fontSize: "2.2rem", fontWeight: 300, color: "#d4af37", lineHeight: 1.2 }}>
                  {member.name}
                </h2>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem", paddingLeft: "0.5rem" }}>
              <p data-modal="member-subtitle" style={{ fontStyle: "italic", color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}>{member.subtitle}</p>
              <p data-modal="member-role" style={{ color: "#d4af37", fontSize: "0.9rem", fontWeight: 600, marginTop: "0.25rem" }}>{member.role}</p>
            </div>

            <div style={{ height: "1px", backgroundColor: "rgba(212,175,55,0.3)", marginBottom: "1.5rem" }} />

            {member.quote && (
              <div style={{ margin: "0 0 1.5rem 0", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "3.5rem", lineHeight: 1, color: "#d4af37", fontFamily: "Georgia, serif", flexShrink: 0, marginTop: "-0.5rem" }}>&#x201C;&#x201C;</span>
                <blockquote style={{ borderLeft: "2px solid rgba(212,175,55,0.4)", paddingLeft: "1.25rem", color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.8, fontStyle: "italic" }}>
                  {member.quote}
                </blockquote>
              </div>
            )}

            <div data-modal="member-layout" style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {member.fullBio.split("\n\n").map((para, i, arr) => (
                  <p key={i} data-modal="member-bio" style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem", lineHeight: 1.85, marginBottom: i < arr.length - 1 ? "1rem" : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
              <div data-modal="member-img" style={{ flexShrink: 0, width: "280px", height: "360px", position: "relative", overflow: "hidden" }}>
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 480px) 160px, (max-width: 768px) 200px, 280px" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const groups = [
    { tag: "Leadership", heading: "Leading the", highlight: "Vision", icon: <Users size={20} color="#d4af37" />, members: leadershipMembers },
    { tag: "Board of Directors", heading: "Our", highlight: "Board", icon: <Award size={20} color="#d4af37" />, members: boardMembers },
    { tag: "Advisory Board", heading: "Our", highlight: "Advisors", icon: <Award size={20} color="#d4af37" />, members: advisoryBoardMembers },
    { tag: "Team", heading: "Our", highlight: "Team", icon: <Users size={20} color="#d4af37" />, members: teamMembers },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          [data-section="team-hero"] { padding: 8rem 1.5rem 3rem !important; }
          [data-section="team-hero"] h1 { font-size: 2.5rem !important; }
          [data-section="team-hero"] p { font-size: 0.95rem !important; }
          [data-section="team-content"] { padding: 3rem 1.5rem !important; }
          [data-section="team-group-heading"] { font-size: 1.8rem !important; }
          [data-section="team-cta"] { padding: 3rem 1.5rem !important; }
          [data-section="team-cta"] h2 { font-size: 2rem !important; }
        }
        @media (max-width: 480px) {
          [data-section="team-hero"] { padding: 7rem 1rem 2.5rem !important; }
          [data-section="team-hero"] h1 { font-size: 2.1rem !important; }
          [data-section="team-hero"] p { font-size: 0.9rem !important; }
          [data-section="team-content"] { padding: 2.5rem 1rem !important; }
          [data-section="team-group-heading"] { font-size: 1.6rem !important; }
          [data-section="team-cta"] { padding: 2.5rem 1rem !important; }
          [data-section="team-cta"] h2 { font-size: 1.7rem !important; }
          [data-section="team-cta"] p { font-size: 0.92rem !important; }
        }
      `}</style>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        data-section="team-hero"
        className="relative overflow-hidden"
        style={{ padding: "10rem 3rem 5rem", background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)", minHeight: "60vh", display: "flex", alignItems: "center" }}
      >
        <div className="absolute" style={{ top: "-15%", right: "-8%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div className="absolute" style={{ bottom: "-10%", left: "-5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(205,92,92,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />

        <div className="relative z-10 w-full" style={{ maxWidth: "1100px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <Link
              href="/"
              className="inline-flex items-center"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textDecoration: "none", marginBottom: "2rem", transition: "color 0.3s ease", gap: "0.5rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <SectionTag>Chicago Indian Arts</SectionTag>

            <h1 className="font-heading font-light" style={{ fontSize: "3.5rem", lineHeight: 1.1, color: "#ffffff", marginBottom: "1.2rem" }}>
              Our{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>Team</strong>
            </h1>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)", maxWidth: "580px" }}>
              Meet the dedicated individuals who bring Chicago Indian Arts to life: our leadership, board, advisory board, and the passionate people behind every event and initiative.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* All Sections — same background, same style */}
      <section data-section="team-content" style={{ padding: "4rem 3rem", backgroundColor: "#6b6b4e" }}>
        <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
          {groups.map((group, gi) => (
            <div key={group.tag} style={{ marginBottom: "4rem" }}>

              {/* Section header */}
              <FadeInSection>
                <div style={{ marginBottom: "2.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.4rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(212,175,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {group.icon}
                    </div>
                    <h2 data-section="team-group-heading" className="font-heading" style={{ fontSize: "2.2rem", fontWeight: 300, color: "#ffffff" }}>
                      {group.heading}{" "}
                      <strong className="font-semibold" style={{ color: "#d4af37" }}>{group.highlight}</strong>
                    </h2>
                  </div>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "#d4af37", paddingLeft: "calc(40px + 1rem)" }}>
                    {group.tag}
                  </p>
                </div>
              </FadeInSection>

              {/* Cards grid */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                style={{ gap: "2rem" }}
              >
                {group.members.map((member, i) => (
                  <FadeInSection key={member.name} delay={i * 0.15}>
                    <div data-section="team-card-item" style={{ width: "100%" }}>
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedMember(member)}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setSelectedMember(member); } }}
                        style={{ transition: "all 0.4s ease", cursor: "pointer", position: "relative" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                      >
                        {/* Photo */}
                        <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4", overflow: "hidden", backgroundColor: "#3a3a2a" }}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                            style={{ transition: "transform 0.5s ease" }}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        </div>

                        {/* Gold banner */}
                        <div style={{ backgroundColor: "#b8a94e", padding: "0.6rem 0.85rem", display: "flex", flexDirection: "column", gap: "0.15rem" }}>
                          <span className="font-heading font-bold" style={{ color: "#1a1a1a", fontSize: "1.1rem", lineHeight: 1.2 }}>
                            {member.name}
                          </span>
                          <em style={{ color: "rgba(26,26,26,0.75)", fontSize: "0.75rem", fontStyle: "italic", lineHeight: 1.2 }}>
                            {member.role}
                          </em>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}

          {/* Pagination dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2.5rem" }}>
            {groups.map((_, i) => (
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

      {/* CTA */}
      <section
        data-section="team-cta"
        style={{ padding: "3rem 3rem", background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)", textAlign: "center" }}
      >
        <FadeInSection>
          <div style={{ maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <h2 className="font-heading" style={{ fontSize: "2.5rem", fontWeight: 300, color: "#ffffff", marginBottom: "1rem" }}>
              Want to Join Our Team?
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.9)", marginBottom: "2rem" }}>
              We are always looking for passionate individuals who share our love for Indian arts and culture. Volunteer with us and be part of something meaningful.
            </p>
            <Link
              href="/volunteer"
              className="inline-block font-semibold uppercase"
              style={{ backgroundColor: "#ffffff", color: "#1a1a1a", padding: "0.85rem 2.5rem", fontSize: "0.85rem", letterSpacing: "1.5px", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#1a1a1a"; e.currentTarget.style.color = "#ffffff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = "#1a1a1a"; }}
            >
              Get Involved
            </Link>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
