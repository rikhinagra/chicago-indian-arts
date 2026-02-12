"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const speakers = [
  {
    name: "Priya Sharma",
    role: "Bestselling Author",
    bio: "National Book Award winner and acclaimed novelist exploring Indian diaspora narratives.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Raj Mehta",
    role: "Fashion Designer",
    bio: "Innovative designer blending traditional Indian textiles with contemporary silhouettes.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Anjali Desai",
    role: "Wildlife Photographer",
    bio: "Award-winning photographer documenting India's diverse ecosystems and wildlife.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Arjun Patel",
    role: "Poet & Performer",
    bio: "Contemporary poet exploring themes of identity, belonging, and cultural heritage.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

function SpeakerCard({
  speaker,
  index,
}: {
  speaker: (typeof speakers)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group text-center w-full"
      data-section="speaker-card"
      style={{ transition: "transform 0.3s ease" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: "160px",
          height: "160px",
          marginBottom: "1.2rem",
          marginLeft: "auto",
          marginRight: "auto",
          border: "4px solid #faf8f3",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={160}
          height={160}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3
        className="font-heading font-semibold"
        style={{ fontSize: "1.2rem", marginBottom: "0.4rem", color: "#1a1a1a" }}
      >
        {speaker.name}
      </h3>
      <div
        data-section="speaker-role"
        style={{
          fontSize: "0.8rem",
          color: "#cd5c5c",
          marginBottom: "0.8rem",
          letterSpacing: "0.5px",
        }}
      >
        {speaker.role}
      </div>
      <p style={{ fontSize: "0.85rem", color: "#666666", lineHeight: 1.6 }}>
        {speaker.bio}
      </p>
    </motion.div>
  );
}

export default function FeaturedSpeakers() {
  return (
    <section data-section="featured" style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}>
      <FadeInSection className="text-center" style={{ marginBottom: "3rem" }}>
        <SectionTag>2026 Lineup</SectionTag>
        <h2
          data-section="section-heading" className="font-heading font-light"
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.8rem",
            color: "#1a1a1a",
          }}
        >
          Featured Speakers &amp; Artists
        </h2>
      </FadeInSection>

      <div
        data-section="featured-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        style={{ gap: "2rem", maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {speakers.map((speaker, i) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
        ))}
      </div>
    </section>
  );
}
