"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Scissors, MapPin, Leaf, Sparkles } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const objectives = [
  {
    icon: Scissors,
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
    icon: Leaf,
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

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909162/prasang01_zb7a7p.webp",
    alt: "Prasang Fashion Event",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909160/prasang02_zbqvuk.webp",
    alt: "Indian Fashion Showcase",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909160/prasang03_qxyggx.webp",
    alt: "Traditional Indian Textiles",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909160/prasang04_z3gguq.webp",
    alt: "Artisan Craftsmanship",
  },
];

export default function PrasangPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="prasang-hero"
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "75vh",
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a24 50%, #1a1a1a 100%)",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0" style={{ opacity: 0.25 }}>
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909160/prasang-banner_fmrvsn.webp"
            alt="Prasang Fashion Innovation"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Decorative radial */}
        <div
          className="absolute"
          style={{
            bottom: "-20%",
            left: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(205,92,92,0.1) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative z-10"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "10rem 3rem 5rem",
            width: "100%",
          }}
        >
          <FadeInSection>
            <Link
              href="/"
              className="inline-flex items-center"
              style={{
                gap: "0.5rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
                textDecoration: "none",
                marginBottom: "2rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1rem",
              }}
            >
              Fashion Innovation
            </div>

            <h1
              data-section="prasang-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              PRASANG
            </h1>

            <p
              data-section="prasang-hero-subtitle"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.85)",
                maxWidth: "600px",
                marginBottom: "0.8rem",
                fontStyle: "italic",
              }}
            >
              Threads of India, Spirit of Chicago
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.7)",
                maxWidth: "550px",
                marginBottom: "2rem",
              }}
            >
              Celebrating fashion as emotion, grace, and expression through
              textures and craftsmanship.
            </p>

            <Link
              href="/register"
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
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Register Interest
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* About Prasang */}
      <section
        data-section="prasang-about"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          data-section="prasang-about-grid"
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
            <SectionTag>About Prasang</SectionTag>
            <h2
              data-section="prasang-heading"
              className="font-heading font-light"
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
              Prasang is all about emotions, grace, and expression through textures
              and craftsmanship. It is all about generational nostalgia &mdash;
              silhouettes that tell stories, hand embroidery that carries legacy,
              and the rich Indian tapestry that inspires the world.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              From runway moments to artisan stories, Prasang celebrates fashion
              not just as a style but as a culture you can wear &mdash; uplifting
              artisans and emerging talent from across India.
            </p>
          </FadeInSection>

          {/* Image */}
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
                src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909162/prasang01_zb7a7p.webp"
                alt="Prasang Fashion Event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Objectives */}
      <section
        data-section="prasang-objectives"
        style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}
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
                data-section="prasang-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                What Prasang Stands For
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="prasang-objectives-grid"
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
        data-section="prasang-gallery"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
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
                data-section="prasang-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                A Glimpse of Prasang
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="prasang-gallery-grid"
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
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="prasang-quote"
        style={{
          padding: "4rem 3rem",
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
              Fashion is not just what you wear &mdash; it&apos;s the stories woven
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
        data-section="prasang-cta"
        style={{
          padding: "5rem 3rem",
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
              className="font-heading font-light"
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
              Be part of Prasang &mdash; as a designer, artisan, sponsor, or guest.
              Experience Indian fashion like never before.
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
