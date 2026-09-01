"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shirt, MapPin, Sprout, Sparkles } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import SponsorshipModal from "@/components/ui/SponsorshipModal";

const objectives = [
  {
    icon: Shirt,
    title: "Celebrating Craft & Textile Heritage",
    description:
      "Honoring the timeless traditions of Indian weaving, embroidery, and textile arts that have been passed down through generations of master artisans.",
  },
  {
    icon: MapPin,
    title: "Bringing Indian Fashion to Chicago",
    description:
      "A space where handloom meets street style, heritage meets innovation, and Indian design finds new space in a global city.",
  },
  {
    icon: Sprout,
    title: "Supporting Sustainable & Artisan Fashion",
    description:
      "Championing slow fashion, ethical production, and the artisans whose hands create extraordinary textiles that tell stories of culture and place.",
  },
  {
    icon: Sparkles,
    title: "Empowering Emerging Designers & Creators",
    description:
      "Providing a platform for the next generation of Indian fashion talent to showcase their vision, connect with audiences, and build their craft.",
  },
];

const acts = [
  {
    number: "Act 1",
    title: "Home",
    image:
      "https://res.cloudinary.com/dist59h0i/image/upload/v1788300140/fashion-week-2026/fashion-week-act-one-home-male-model-runway.webp",
    imagePosition: "center 15%",
    description:
      "Where every thread begins. A story rooted in tradition, told through the intimacy of home.",
  },
  {
    number: "Act 2",
    title: "The Houses",
    image:
      "https://res.cloudinary.com/dist59h0i/image/upload/v1788272822/fashion-week-2026/fashion-week-act-two-the-houses-balcony.webp",
    description:
      "Old world architecture meets modern silhouettes, blurring the line between heritage and reinvention.",
  },
  {
    number: "Act 3",
    title: "The Street",
    image:
      "https://res.cloudinary.com/dist59h0i/image/upload/v1788272821/fashion-week-2026/fashion-week-act-three-street-scene-night.webp",
    description:
      "Fashion spills into daily life, vibrant and unapologetic, carried by the rhythm of the city.",
  },
  {
    number: "Act 4",
    title: "The World",
    image:
      "https://res.cloudinary.com/dist59h0i/image/upload/v1788301559/fashion-week-2026/fashion-week-act-four-world-street-portrait.webp",
    imagePosition: "center 10%",
    description:
      "The final act of transformation, where Indian design steps onto the global stage.",
  },
];

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118852/fashion-week-runway-show_ge9euc.webp",
    alt: "Chicago Indian Fashion Week Event",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118855/fashion-week-textile-details_brww8e.webp",
    alt: "Indian Fashion Showcase",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118853/fashion-week-designer-showcase_pwg1cc.webp",
    alt: "Traditional Indian Textiles",
  },
  {
    src: "https://res.cloudinary.com/dist59h0i/image/upload/v1788300142/fashion-week-2026/fashion-week-act-four-world-male-model-runway.webp",
    alt: "Chicago Indian Fashion Week Male Model Runway",
    position: "center 20%",
  },
];

export default function FashionWeekPage() {
  const [sponsorshipOpen, setSponsorshipOpen] = useState(false);

  return (
    <>
      <SponsorshipModal isOpen={sponsorshipOpen} onClose={() => setSponsorshipOpen(false)} />

      {/* Hero */}
      <section
        data-section="fashion-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dist59h0i/image/upload/v1788272818/fashion-week-2026/fashion-week-act-one-home-teal-saree.webp"
            alt="Chicago Indian Fashion Week — model in teal saree"
            fill
            className="object-cover"
            style={{ objectPosition: "center 8%", transform: "scale(1.15) translateX(6%)" }}
            priority
          />
          {/* Left-side gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 35%, transparent 65%)",
            }}
          />
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
              href="/"
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
              Back to Home
            </Link>

            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 50px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,1)",
              }}
            >
              Fashion Innovation
            </div>

            <h1
              data-section="fashion-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              Chicago Indian Fashion Week
            </h1>

            <p
              data-section="fashion-hero-subtitle"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "600px",
                marginBottom: "0.8rem",
                fontStyle: "italic",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Threads of India, Spirit of Chicago
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "550px",
                marginBottom: "2rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Celebrating fashion as emotion, grace, and expression through
              textures and craftsmanship.
            </p>

            <div data-section="fashion-hero-buttons" className="flex flex-wrap" style={{ gap: "1rem" }}>
              {/* Get Tickets — red, primary action */}
              <Link
                href="https://www.zeffy.com/en-US/ticketing/chicago-indian-fashion-week"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase text-center"
                style={{
                  backgroundColor: "#cd5c5c",
                  color: "#ffffff",
                  padding: "0.85rem 2.2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
              >
                Get Tickets
              </Link>

              {/* Support CIFW — dark, opens sponsorship modal */}
              <button
                onClick={() => setSponsorshipOpen(true)}
                className="inline-block font-semibold uppercase cursor-pointer text-center"
                style={{
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  padding: "0.85rem 2.2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
              >
                Support CIFW
              </button>

              {/* View Schedule — gold */}
              <Link
                href="/fashion-week/schedule"
                className="inline-block font-semibold uppercase text-center"
                style={{
                  backgroundColor: "#d4af37",
                  color: "#1a1a1a",
                  padding: "0.85rem 2.2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#d4af37";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
              >
                View Schedule
              </Link>

              {/* CIFW Creative Deck — outline white */}
              <Link
                href="https://drive.google.com/file/d/1PlXgopiZaezIsuat6aQDiHQeWvOUqFLD/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase text-center"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1.5px solid #ffffff",
                  padding: "0.85rem 2.2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                CIFW Creative Deck
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section
        data-section="fashion-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          data-section="fashion-about-grid"
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Text */}
          <FadeInSection>
            <SectionTag>About Chicago Indian Fashion Week</SectionTag>
            <h2
              data-section="fashion-heading"
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Emotions, Grace &amp; Expression
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              Celebrating emotions, grace, and expression through textures
              and craftsmanship, our fashion week honors generational nostalgia,
              silhouettes that tell stories, hand embroidery that carries legacy,
              and the rich Indian tapestry that inspires the world.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "2rem",
              }}
            >
              From runway moments to artisan stories, our fashion week celebrates fashion
              not just as a style but as a culture you can wear, uplifting
              artisans and emerging talent from across India.
            </p>
            <div className="flex flex-wrap" style={{ gap: "1rem" }}>
              <Link
                href="/vendor-intake"
                className="inline-block font-semibold uppercase"
                style={{
                  backgroundColor: "#cd5c5c",
                  color: "#ffffff",
                  padding: "0.85rem 2rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
              >
                Become Our Partner
              </Link>
            </div>
          </FadeInSection>

          {/* Image */}
          <FadeInSection direction="right">
            <div
              className="relative overflow-hidden"
              style={{
                height: "450px",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                backgroundColor: "#f5f0e6",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dist59h0i/image/upload/v1788272831/fashion-week-2026/indian-peacock-jewel-illustration.webp"
                alt="Ornate Indian peacock jewel illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Home and the World */}
      <section
        data-section="fashion-editorial"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Image — left */}
          <FadeInSection>
            <div
              className="relative overflow-hidden"
              style={{
                height: "450px",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dist59h0i/image/upload/v1788272833/fashion-week-2026/tagore-home-and-the-world-collage-art.webp"
                alt="Tagore's The Home and the World collage art"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>

          {/* Text — right */}
          <FadeInSection direction="right">
            <SectionTag>Chicago Indian Fashion Week 2026</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              The Home and the World
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              Tagore&apos;s question, now alive through fashion. Indian designers
              rooted in tradition but reaching boldly outward, making clothes that
              hold both home and horizon.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "2rem",
              }}
            >
              Watch live collections from emerging and established makers who
              refuse to choose between where they come from and where they&apos;re going.
            </p>
            <Link
              href="/fashion-week/schedule"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.85rem 2rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              View More
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section
        data-section="fashion-volunteer"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Text — left */}
          <FadeInSection>
            <SectionTag>Get Involved</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Volunteer Opportunities
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "2rem",
              }}
            >
              We are looking for passionate volunteers to join Chicago Indian
              Fashion Week 2026. Whether backstage, on the runway, or behind the
              scenes, there is a place for anyone who shares our love for fashion
              and culture and wants to be part of a meaningful, community driven
              event.
            </p>
            <Link
              href="/volunteer"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.85rem 2rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Apply Now
            </Link>
          </FadeInSection>

          {/* Image — right */}
          <FadeInSection direction="right">
            <div
              className="relative overflow-hidden"
              style={{
                height: "450px",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dist59h0i/image/upload/v1788272828/fashion-week-2026/fashion-week-volunteer-behind-the-scenes.webp"
                alt="Chicago Indian Fashion Week volunteer behind the scenes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Fashion with Purpose */}
      <section
        data-section="fashion-purpose"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Image — left */}
          <FadeInSection>
            <div
              className="relative overflow-hidden"
              style={{
                height: "450px",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dist59h0i/image/upload/v1788272814/fashion-week-2026/children-reading-illustration-bookwallah.webp"
                alt="Children reading illustration representing community impact"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>

          {/* Text — right */}
          <FadeInSection direction="right">
            <SectionTag>Our Commitment</SectionTag>
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Fashion with Purpose
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "2rem",
              }}
            >
              Every ticket and sponsorship helps fund youth programs, cultural
              education, and creative opportunities for the community we serve.
              Fashion Week is not only a celebration of style but a platform for
              lasting, positive change in Chicago.
            </p>
            <a
              href="https://bookwallah.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold uppercase"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.85rem 2rem",
                fontSize: "0.85rem",
                letterSpacing: "1px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              More Details
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* Four Acts of Fashion */}
      <section
        data-section="fashion-acts"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>The Journey</SectionTag>
              <h2
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                Four Acts of Fashion
              </h2>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 lg:grid-cols-4"
            style={{ gap: "1.5rem", marginBottom: "3rem" }}
          >
            {acts.map((act, i) => (
              <FadeInSection key={act.title} delay={i * 0.1}>
                <div
                  className="relative overflow-hidden group"
                  style={{ height: "380px", borderRadius: "4px" }}
                >
                  <Image
                    src={act.image}
                    alt={`${act.number} — ${act.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={act.imagePosition ? { objectPosition: act.imagePosition } : undefined}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                    }}
                  />
                  <div
                    className="absolute"
                    style={{ bottom: "1.2rem", left: "1.2rem", right: "1.2rem" }}
                  >
                    <div
                      className="uppercase font-semibold"
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "1.5px",
                        color: "#d4af37",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {act.number}
                    </div>
                    <h3
                      className="font-heading font-semibold"
                      style={{ fontSize: "1.15rem", color: "#ffffff", marginBottom: "0.5rem" }}
                    >
                      {act.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {act.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div style={{ textAlign: "center" }}>
              <Link
                href="/fashion-week/schedule"
                className="inline-block font-semibold uppercase"
                style={{
                  backgroundColor: "#cd5c5c",
                  color: "#ffffff",
                  padding: "0.85rem 2.5rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b04848")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
              >
                Experience the Journey
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Objectives */}
      <section
        data-section="fashion-objectives"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Our Vision</SectionTag>
              <h2
                data-section="fashion-heading"
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                What We Stand For
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="fashion-objectives-grid"
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "2rem" }}
          >
            {objectives.map((obj, i) => (
              <FadeInSection key={obj.title} delay={i * 0.12}>
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: "#ffffff",
                    borderTop: "3px solid #d4af37",
                    transition: "all 0.3s ease",
                    height: "100%",
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
                      marginBottom: "1.5rem",
                    }}
                  >
                    <obj.icon size={22} style={{ color: "#cd5c5c" }} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      marginBottom: "1rem",
                    }}
                  >
                    {obj.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.8,
                      color: "#666666",
                    }}
                  >
                    {obj.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        data-section="fashion-gallery"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Gallery</SectionTag>
              <h2
                data-section="fashion-heading"
                className="font-heading font-semibold"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                A Glimpse of Fashion Week
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="fashion-gallery-grid"
            className="grid grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1rem" }}
          >
            {galleryImages.map((img, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden"
                  style={{
                    height: "320px",
                    borderRadius: "4px",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={img.position ? { objectPosition: img.position } : undefined}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="fashion-quote"
        style={{
          padding: "3rem 3rem",
          backgroundColor: "#1a1a1a",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                color: "#d4af37",
                marginBottom: "1rem",
                fontFamily: "Georgia, serif",
              }}
            >
              &ldquo;
            </div>
            <p
              className="font-heading italic"
              style={{
                fontSize: "1.4rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.5rem",
              }}
            >
              Fashion is not just what you wear. It&apos;s the stories woven
              into every thread, the heritage stitched into every seam, and the
              culture expressed through every silhouette.
            </p>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#d4af37",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        </FadeInSection>
      </section>

      {/* CTA */}
      <section
        data-section="fashion-cta"
        style={{
          padding: "3rem 3rem",
          background: "linear-gradient(135deg, #cd5c5c 0%, #d4af37 100%)",
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h2
              className="font-heading font-semibold"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Walk the Runway with Us
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Be part of Chicago Indian Fashion Week as a designer, artisan, sponsor, or guest.
              Experience Indian fashion like never before.
            </p>
            <div data-section="fashion-cta-buttons" className="flex flex-wrap justify-center" style={{ gap: "1rem" }}>
              <Link
                href="https://www.zeffy.com/en-US/ticketing/chicago-indian-fashion-week"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase text-center"
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
                Secure Your Seat
              </Link>
              <Link
                href="#"
                className="inline-block font-semibold uppercase text-center"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1.5px solid #ffffff",
                  padding: "0.85rem 2.5rem",
                  fontSize: "0.85rem",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.color = "#1a1a1a";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                View Theme
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
