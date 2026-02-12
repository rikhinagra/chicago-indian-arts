"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";
import FadeInSection from "@/components/ui/FadeInSection";

const programs = [
  {
    name: "VAARTA",
    type: "Literature Festival",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    description:
      "A landmark event showcasing India's rich storytelling traditions with renowned authors, poets, and thought leaders from around the world.",
    highlights: [
      "Panel discussions with bestselling authors",
      "Poetry readings and performances",
      "Book launches and signings",
      "Literary workshops",
    ],
    href: "/vaarta",
  },
  {
    name: "PRASANG",
    type: "Fashion Innovation",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    description:
      "Vibrant runway shows featuring traditional and contemporary Indian fashion from top designers, celebrating textile heritage and innovation.",
    highlights: [
      "Designer runway presentations",
      "Traditional craft showcases",
      "Emerging designer spotlights",
      "Fashion networking events",
    ],
    href: "/prasang",
  },
  {
    name: "VARNAM",
    type: "Photography & Wildlife",
    image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&q=80",
    description:
      "A space where images become stories and perspectives come alive, bringing together creators who capture culture, wildlife, and the world through the lens.",
    highlights: [
      "Photography exhibitions",
      "Wildlife conservation talks",
      "Photo workshops and masterclasses",
      "Visual storytelling sessions",
    ],
    href: "/varnam",
  },
];

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="group overflow-hidden cursor-pointer"
      style={{
        backgroundColor: "#ffffff",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-12px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div className="overflow-hidden relative" style={{ height: "280px" }}>
        <Image
          src={program.image}
          alt={program.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute bottom-0 left-0 right-0 text-white"
          style={{ padding: "1.5rem", background: "linear-gradient(to top, rgba(26,26,26,0.95) 0%, transparent 100%)" }}
        >
          <div
            className="uppercase font-semibold"
            style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "#d4af37", marginBottom: "0.5rem" }}
          >
            {program.type}
          </div>
          <h3 className="font-heading font-semibold" style={{ fontSize: "1.6rem" }}>{program.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <p style={{ color: "#666666", lineHeight: 1.7, marginBottom: "1.2rem", fontSize: "0.9rem" }}>
          {program.description}
        </p>
        <ul style={{ listStyle: "none", marginBottom: "1.2rem" }}>
          {program.highlights.map((item) => (
            <li
              key={item}
              className="flex items-center"
              style={{ padding: "0.4rem 0", color: "#2d2d2d", fontSize: "0.85rem", gap: "0.5rem" }}
            >
              <span style={{ color: "#cd5c5c", fontWeight: "bold" }}>&#10022;</span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={program.href}
          className="inline-flex items-center font-semibold transition-all duration-300 group-hover:gap-4"
          style={{ color: "#cd5c5c", fontSize: "0.85rem", letterSpacing: "0.5px", gap: "0.5rem" }}
        >
          Discover {program.name.charAt(0) + program.name.slice(1).toLowerCase()} →
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProgramsGrid() {
  return (
    <section
      id="programs"
      data-section="programs"
      style={{ padding: "4rem 3rem 5rem", backgroundColor: "#faf8f3" }}
    >
      <FadeInSection className="text-center" style={{ marginBottom: "3rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
        <SectionTag>Our Programs</SectionTag>
        <h2
          data-section="section-heading" className="font-heading font-light"
          style={{ fontSize: "2.5rem", marginBottom: "0.8rem", color: "#1a1a1a" }}
        >
          Three Pillars of Cultural Excellence
        </h2>
      </FadeInSection>

      <div data-section="programs-grid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" style={{ gap: "2rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
        {programs.map((program, i) => (
          <ProgramCard key={program.name} program={program} index={i} />
        ))}
      </div>
    </section>
  );
}
