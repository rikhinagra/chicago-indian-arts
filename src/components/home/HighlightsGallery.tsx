"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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

export default function HighlightsGallery() {
  return (
    <section id="highlights" data-section="highlights" style={{ padding: "5rem 0 4rem", backgroundColor: "#faf8f3", overflow: "hidden" }}>
      <FadeInSection className="text-center" style={{ marginBottom: "2rem", padding: "0 3rem" }}>
        <SectionTag>Memories</SectionTag>
        <h2
          data-section="section-heading" className="font-heading font-light"
          style={{ fontSize: "2.5rem", marginBottom: "0.8rem", color: "#1a1a1a" }}
        >
          Past Event Highlights
        </h2>
      </FadeInSection>

      <div className="highlights-carousel-wrapper">
        <Swiper
          modules={[EffectCoverflow, Autoplay, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.6}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.4 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="highlights-swiper"
        >
          {highlights.map((item, index) => (
            <SwiperSlide key={index} className="highlights-slide">
              <div className="highlights-slide-inner" style={{ aspectRatio: "1 / 1" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 text-white"
                  style={{
                    padding: "1.2rem",
                    background: "linear-gradient(to top, rgba(26, 26, 26, 0.9), transparent)",
                  }}
                >
                  <h4 style={{ fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.2rem" }}>{item.title}</h4>
                  <p style={{ fontSize: "0.75rem", opacity: 0.9 }}>{item.caption}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
