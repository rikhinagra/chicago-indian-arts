"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, TreePine } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const objectives = [
  {
    icon: Camera,
    title: "Where Nature Tells Its Story",
    description:
      "Through curated exhibitions, installations, and artist-led conversations, Varnam transforms the way we see wildlife and the natural world \u2014 inviting viewers to look closer, feel deeper, and act with purpose.",
  },
  {
    icon: TreePine,
    title: "Rooted in Earth, Alive in Chicago",
    description:
      "Varnam bridges India\u2019s environmental heritage with Chicago\u2019s vibrant arts scene, creating a platform where conservation meets creativity and where every photograph sparks a conversation about our shared planet.",
  },
];

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909161/varnam01_azulyi.webp",
    alt: "Wildlife Photography",
    span: "lg-span-2",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909162/varnam02_p9vfeh.webp",
    alt: "Nature Photography",
    span: "lg-span-1",
  },
];

export default function VarnamPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="varnam-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909161/varnam-banner_oqy2nj.webp"
            alt="Varnam Photography & Wildlife"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            priority
          />
        </div>

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
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#d4af37",
                marginBottom: "1.2rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Photography &amp; Wildlife
            </div>

            <h1
              data-section="varnam-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              VARNAM
            </h1>

            <p
              data-section="varnam-hero-subtitle"
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
              An Ode to Photography and Visual Arts
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
              Empowering photographers, conservationists, and storytellers to
              celebrate India&apos;s wildlife and environmental heritage.
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

      {/* Mission & Vision */}
      <section
        data-section="varnam-mission"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          data-section="varnam-mission-grid"
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Mission */}
          <FadeInSection>
            <div
              style={{
                padding: "2.5rem",
                backgroundColor: "#faf8f3",
                borderLeft: "4px solid #d4af37",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#cd5c5c",
                  marginBottom: "1rem",
                }}
              >
                Our Mission
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "1.2rem",
                }}
              >
                A Global Platform for Visual Stories
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  color: "#666666",
                }}
              >
                To become a leading global platform that connects India and the
                world through transformative wildlife and environmental photography
                &mdash; fostering awareness, inspiring conservation, and celebrating
                the beauty of the natural world through the art of the lens.
              </p>
            </div>
          </FadeInSection>

          {/* Vision */}
          <FadeInSection direction="right">
            <div
              style={{
                padding: "2.5rem",
                backgroundColor: "#faf8f3",
                borderLeft: "4px solid #cd5c5c",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#cd5c5c",
                  marginBottom: "1rem",
                }}
              >
                Our Vision
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "1.2rem",
                }}
              >
                Celebrating &amp; Preserving Visual Heritage
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  color: "#666666",
                }}
              >
                To celebrate, preserve, and amplify the visual stories of India&apos;s
                wildlife, landscapes, and environmental heritage &mdash; building bridges
                between photographers, communities, and nature lovers worldwide through
                the power of imagery.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section with Image */}
      <section
        data-section="varnam-about"
        style={{ padding: "5rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="varnam-about-grid"
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            gap: "4rem",
          }}
        >
          {/* Image */}
          <FadeInSection>
            <div
              className="relative overflow-hidden"
              style={{
                height: "500px",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770909161/varnam01_azulyi.webp"
                alt="Varnam Wildlife Photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>

          {/* Text */}
          <FadeInSection direction="right">
            <SectionTag>About Varnam</SectionTag>
            <h2
              data-section="varnam-heading"
              className="font-heading font-light"
              style={{
                fontSize: "2.5rem",
                lineHeight: 1.3,
                marginBottom: "1.5rem",
                color: "#1a1a1a",
              }}
            >
              Through the Lens of India
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              Varnam is a celebration of photography and visual arts in its most
              authentic and expressive form. It brings together the stories of
              India&apos;s wildlife, landscapes, and environmental heritage through
              the power of the photographic lens.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              Through curated exhibitions, installations, and artist-led conversations,
              Varnam transforms the way we see wildlife and the natural world &mdash;
              inviting viewers to look closer, feel deeper, and act with purpose.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Objectives */}
      <section
        data-section="varnam-objectives"
        style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>What We Do</SectionTag>
              <h2
                data-section="varnam-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                Our Focus
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="varnam-objectives-grid"
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "2rem" }}
          >
            {objectives.map((obj, i) => (
              <FadeInSection key={obj.title} delay={i * 0.15}>
                <div
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: "#faf8f3",
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
                      fontSize: "0.95rem",
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
        data-section="varnam-gallery"
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
              <SectionTag>Featured Works</SectionTag>
              <h2
                data-section="varnam-heading"
                className="font-heading font-light"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                }}
              >
                Visual Stories
              </h2>
            </div>
          </FadeInSection>

          <div
            data-section="varnam-gallery-grid"
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ gap: "1rem" }}
          >
            {/* Large image spanning 2 columns */}
            <FadeInSection>
              <div
                className="group relative overflow-hidden lg:col-span-2"
                style={{
                  height: "450px",
                  borderRadius: "4px",
                  gridColumn: "span 2",
                }}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                  }}
                />
              </div>
            </FadeInSection>

            {/* Right column image */}
            <FadeInSection delay={0.15}>
              <div
                className="group relative overflow-hidden"
                style={{
                  height: "450px",
                  borderRadius: "4px",
                }}
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                  }}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="varnam-quote"
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
              Every photograph is a bridge between the seen and the unseen,
              between the moment and eternity, between humanity and the
              wild world we are entrusted to protect.
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
        data-section="varnam-cta"
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
              Capture the Moment with Us
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2rem",
              }}
            >
              Join Varnam as a photographer, exhibitor, conservationist,
              or art lover. Together, let&apos;s tell the visual stories
              that matter.
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
