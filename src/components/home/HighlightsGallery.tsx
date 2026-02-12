"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const highlights = [
  { title: "Vaarta 2025", caption: "Author Panel Discussion", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { title: "Prasang 2025", caption: "Designer Runway Show", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
  { title: "Varnam 2024", caption: "Wildlife Photography Exhibition", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" },
  { title: "Vaarta Workshop", caption: "Creative Writing Session", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80" },
  { title: "Cultural Evening", caption: "Traditional Performance", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80" },
  { title: "Networking Event", caption: "Community Gathering", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80" },
  { title: "Fashion Workshop", caption: "Textile Design Masterclass", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { title: "Closing Ceremony", caption: "Gala Dinner 2025", image: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=600&q=80" },
];

function HighlightItem({
  item,
  index,
}: {
  item: (typeof highlights)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="group relative overflow-hidden cursor-pointer"
      style={{ height: "240px" }}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div
        data-section="highlight-overlay"
        className="absolute bottom-0 left-0 right-0 text-white"
        style={{
          padding: "1.2rem",
          background: "linear-gradient(to top, rgba(26, 26, 26, 0.9), transparent)",
          transform: "translateY(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <h4 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.2rem" }}>{item.title}</h4>
        <p style={{ fontSize: "0.75rem", opacity: 0.9 }}>{item.caption}</p>
      </div>
    </motion.div>
  );
}

export default function HighlightsGallery() {
  return (
    <section id="highlights" data-section="highlights" style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}>
      <FadeInSection className="text-center" style={{ marginBottom: "3rem" }}>
        <SectionTag>Memories</SectionTag>
        <h2
          data-section="section-heading" className="font-heading font-light"
          style={{ fontSize: "2.5rem", marginBottom: "0.8rem", color: "#1a1a1a" }}
        >
          Past Event Highlights
        </h2>
      </FadeInSection>

      <div data-section="highlights-grid" className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4" style={{ gap: "1.5rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
        {highlights.map((item, i) => (
          <HighlightItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
