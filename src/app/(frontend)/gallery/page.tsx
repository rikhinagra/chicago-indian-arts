"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const photos = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", title: "Vaarta 2025 Opening", program: "Vaarta" },
  { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", title: "Prasang Runway", program: "Prasang" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", title: "Varnam Exhibition", program: "Varnam" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80", title: "Author Discussion", program: "Vaarta" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", title: "Cultural Evening", program: "Community" },
  { src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80", title: "Community Gathering", program: "Community" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", title: "Fashion Workshop", program: "Prasang" },
  { src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=800&q=80", title: "Gala Dinner", program: "Community" },
  { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80", title: "Book Display", program: "Vaarta" },
  { src: "https://images.unsplash.com/photo-1558769132-cb1aea41c795?w=800&q=80", title: "Designer Showcase", program: "Prasang" },
  { src: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=800&q=80", title: "Wildlife Photography", program: "Varnam" },
  { src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80", title: "India Heritage", program: "Community" },
];

const filters = ["All", "Vaarta", "Prasang", "Varnam", "Community"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? photos
      : photos.filter((p) => p.program === activeFilter);

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[1200px] mx-auto text-center">
          <SectionTag>Gallery</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4.5rem] font-light mb-6 text-primary-dark">
            Photo Gallery
          </h1>
          <p className="text-lg text-text-light max-w-[700px] mx-auto">
            Moments captured from our events and programs.
          </p>
        </FadeInSection>
      </section>

      <section className="py-8 px-6 lg:px-12 bg-white border-b border-cream">
        <div className="max-w-[1400px] mx-auto flex justify-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium tracking-[0.5px] border transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-accent-terracotta text-white border-accent-terracotta"
                  : "bg-transparent text-text-dark border-text-light/40 hover:bg-accent-terracotta hover:text-white hover:border-accent-terracotta"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((photo, i) => (
            <FadeInSection key={photo.src + i} delay={i * 0.04}>
              <div className="group relative h-[200px] lg:h-[280px] overflow-hidden cursor-pointer">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-end">
                  <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold text-sm">{photo.title}</p>
                    <p className="text-xs opacity-80">{photo.program}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
}
