"use client";

import Image from "next/image";
import Link from "next/link";
import { Tiro_Devanagari_Sanskrit } from "next/font/google";
import { ArrowLeft, ArrowUpRight, Camera, TreePine, BookOpen, Heart, Recycle } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const sanskritFont = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const FORM_URL = "https://forms.gle/Yvud1dpUyEJAkGWS7";
const STAG_CRANE_IMAGE =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1793278132/wildlife-festival-2027/wildlife-photography-visual-arts-festival-2027-stag-crane-illustration.webp";
const CALL_FOR_ARTISTS_IMAGE =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1793278130/wildlife-festival-2027/wildlife-photography-visual-arts-festival-2027-call-for-artists-wildlife-illustration.webp";

const themeCircles = [
  {
    title: "One family of species",
    description:
      "Every frame honours the bonds between animals, habitats and the people who live alongside them.",
    color: "#d4af37",
  },
  {
    title: "One family of cultures",
    description:
      "From India's forests to the Illinois prairie, we celebrate how every culture sees and protects nature.",
    color: "#2a9bb0",
  },
  {
    title: "One family of artists",
    description:
      "Photographers, explorers and visual artists from every country, side by side on one stage.",
    color: "#7a4a9e",
  },
];

const stats = [
  { value: "1 Day", label: "exhibition, talks and awards", color: "#d4af37" },
  { value: "8", label: "experiences across the day", color: "#cd5c5c" },
  { value: "7", label: "festival awards", color: "#7a4a9e" },
  { value: "Global", label: "artists from India and the world", color: "#2a9bb0" },
];

const pillars = [
  {
    icon: Camera,
    title: "See",
    description:
      "World-class wildlife photography and visual art, juried and curated into one exhibition.",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description:
      "Talks with explorers, scientists and field photographers on the stories behind the frames.",
  },
  {
    icon: Heart,
    title: "Protect",
    description:
      "A share of every sale and ticket funds conservation and rescue partners in India and Illinois.",
  },
  {
    icon: Recycle,
    title: "Sustain",
    description:
      "A low-waste festival: recycled prints, reusable frames, a digital catalog and a transit-friendly venue.",
  },
];

const programCards = [
  {
    time: "All Day",
    title: "Juried Exhibition: Wild India, Wild World",
    description:
      "The centrepiece gallery, from Himalayan snow leopards to Great Lakes birds, with works for sale.",
  },
  {
    time: "Morning",
    title: "Masterclasses",
    description:
      "Hands-on sessions on birds in flight, low light and editing, led by guest photographers.",
  },
  {
    time: "All Day",
    title: "Young Naturalists Studio",
    description:
      "Drawing, phone photography and habitat play for ages 5 to 17, plus the Youth Lens prize.",
  },
  {
    time: "Midday",
    title: "Explorer Talks & Panel",
    description:
      "Field photographers, filmmakers and scientists on ethics, access and the story behind the shot.",
  },
  {
    time: "Live",
    title: "Art in the Wild",
    description:
      "Painters and illustrators create new work in public view, in the plein air tradition.",
  },
  {
    time: "Afternoon",
    title: "Wildlife Film Screening",
    description:
      "Short documentaries from Indian forests to the world's oceans, with filmmaker Q&A.",
  },
  {
    time: "Evening",
    title: "Conservation Auction",
    description:
      "Bid on donated works, with proceeds going to wildlife and habitat partners.",
  },
  {
    time: "Evening",
    title: "Awards & Pledge Wall",
    description:
      "Festival Awards, a community pledge wall for personal green commitments and a reception.",
  },
];

const schedule = [
  {
    time: "10:00 AM",
    title: "Doors Open & Exhibition",
    description: "Walk the juried gallery of wildlife photography and visual art.",
  },
  {
    time: "11:00 AM",
    title: "Masterclass & Young Naturalists Studio",
    description:
      "Field technique for photographers; drawing and phone photography for ages 5 to 17.",
  },
  {
    time: "12:30 PM",
    title: "Panel: Wild India, Stories Behind the Frame",
    description: "Tigers, leopards, birds and the communities who live alongside them.",
  },
  {
    time: "2:00 PM",
    title: "Live Painting & Film Screening",
    description: "Artists create in public view; short wildlife films with Q&A.",
  },
  {
    time: "4:00 PM",
    title: "Explorer Keynote",
    description:
      "One Earth, One Family: a conversation on coexistence. Speaker to be announced.",
  },
  {
    time: "5:30 PM",
    title: "Conservation Auction",
    description: "Bid on donated works; proceeds support wildlife partners.",
  },
  {
    time: "7:00 PM",
    title: "Festival Awards & Reception",
    description:
      "Winners announced, pledge wall unveiled, and an evening with the artists.",
  },
];

const awards = [
  { title: "Wildlife Photographer of the Festival", note: "Best overall photograph" },
  { title: "Best Visual Art", note: "Painting, drawing, sculpture" },
  { title: "Conservation Story Award", note: "Image that best inspires action" },
  { title: "One Family Award", note: "Best work on the festival theme" },
  { title: "Emerging Talent", note: "Artists under 30" },
  { title: "Youth Lens Prize", note: "Ages 10 to 17" },
  { title: "People's Choice", note: "Visitor vote on the day" },
];

const whoShouldApply = [
  "Professional and serious amateur wildlife photographers",
  "Photojournalists and explorers on conservation stories",
  "Painters, illustrators, sculptors and mixed-media artists",
  "Filmmakers with short wildlife films (under 20 minutes)",
  "Students and youth (free category)",
];

const categories = [
  { name: "Wild India", note: "species and habitats of the subcontinent" },
  { name: "Wild World", note: "wildlife from anywhere on Earth" },
  { name: "Coexistence", note: "people, cities and wildlife sharing space" },
  { name: "Visual Arts", note: "painting, drawing, sculpture, mixed media" },
  { name: "Youth Lens", note: "artists aged 10 to 17" },
];

const whatYouNeed = [
  "Up to 5 images, JPEG, 3000 px long edge, no watermark",
  "Title, location, species and a short story for each work",
  "A 150-word bio and a headshot",
  "Portfolio or Instagram link",
  "Ethics confirmation: no baiting, captive animals disclosed, edits disclosed",
];

const pledges = [
  {
    title: "Print responsibly",
    description: "FSC or recycled paper, reusable frames and a digital-first catalog.",
  },
  {
    title: "Low-waste day",
    description: "No single-use plastics, local vegetarian catering and composting on site.",
  },
  {
    title: "Travel lighter",
    description: "A transit-accessible venue and virtual talks for international guests.",
  },
  {
    title: "Give back",
    description: "A share of sales and tickets to wildlife rescue and habitat projects.",
  },
];

const getInvolved = [
  {
    title: "Exhibit",
    description: "Submit your photography, art or film to the juried exhibition.",
    cta: "Apply now",
    href: FORM_URL,
  },
  {
    title: "Speak or Teach",
    description: "Lead a talk, panel, masterclass or kids session.",
    cta: "Propose a session",
    href: FORM_URL,
  },
  {
    title: "Volunteer",
    description: "Help hang the show, guide visitors or run workshops on the day.",
    cta: "Sign up",
    href: "/volunteer",
  },
  {
    title: "Sponsor or Partner",
    description: "Underwrite an award, the keynote or the youth studio.",
    cta: "Partner with us",
    href: "/contact",
  },
];

const faqs = [
  {
    q: "Can international artists apply?",
    a: "Yes. Selected work can be printed locally, so no shipping is needed.",
  },
  {
    q: "Do I need to attend on April 24?",
    a: "It is encouraged but not required. Winners who cannot attend are recognized virtually.",
  },
  {
    q: "Can I sell my work?",
    a: "Yes. You set the price, and a share supports the festival's conservation partners.",
  },
  {
    q: "Do I keep the copyright?",
    a: "Always. Your work is shown with credit, for festival exhibition and promotion only.",
  },
  {
    q: "What editing is allowed?",
    a: "Standard adjustments such as exposure, color, cropping and dust removal are fine. Composites and AI-generated images are not eligible in photography categories.",
  },
];

const darkGreen = "linear-gradient(180deg, #0f1a13 0%, #1a2a1e 100%)";

function GoldTag({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.9rem",
        fontWeight: 800,
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "0.8rem",
        color: "#d4af37",
      }}
    >
      {children}
    </div>
  );
}

function FormLink({
  children,
  variant = "red",
  arrow = false,
}: {
  children: React.ReactNode;
  variant?: "red" | "gold" | "white" | "dark";
  arrow?: boolean;
}) {
  const styles = {
    red: { bg: "#cd5c5c", color: "#ffffff", hoverBg: "#d4af37", hoverColor: "#ffffff" },
    gold: { bg: "#d4af37", color: "#1a1a1a", hoverBg: "#cd5c5c", hoverColor: "#ffffff" },
    white: { bg: "#ffffff", color: "#1a1a1a", hoverBg: "#1a1a1a", hoverColor: "#ffffff" },
    dark: { bg: "#1a1a1a", color: "#ffffff", hoverBg: "#ffffff", hoverColor: "#1a1a1a" },
  }[variant];
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center font-semibold uppercase text-center"
      style={{
        gap: "0.5rem",
        backgroundColor: styles.bg,
        color: styles.color,
        padding: "0.85rem 2.5rem",
        fontSize: "0.85rem",
        letterSpacing: "1px",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = styles.hoverBg;
        e.currentTarget.style.color = styles.hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = styles.bg;
        e.currentTarget.style.color = styles.color;
      }}
    >
      {children}
      {arrow && <ArrowUpRight size={15} />}
    </a>
  );
}

const objectives = [
  {
    icon: Camera,
    title: "Where Nature Tells Its Story",
    description:
      "Through curated exhibitions, installations, and artist-led conversations, our festival transforms the way we see wildlife and the natural world \u2014 inviting viewers to look closer, feel deeper, and act with purpose.",
  },
  {
    icon: TreePine,
    title: "Rooted in Earth, Alive in Chicago",
    description:
      "Our program bridges India\u2019s environmental heritage with Chicago\u2019s vibrant arts scene, creating a platform where conservation meets creativity and where every photograph sparks a conversation about our shared planet.",
  },
];

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118855/photography-festival-exhibition_larp7s.webp",
    alt: "Photography Exhibition",
    span: "lg-span-2",
  },
  {
    src: "https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118851/chicago-wildlife-photography-festival_ikrzcw.webp",
    alt: "Wildlife Photography Showcase",
    span: "lg-span-1",
  },
];

export default function PhotographyFestivalPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-section="photography-hero"
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "75vh" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118856/wildlife-photography-visual-arts-banner_b2niyw.webp"
            alt="Wildlife Photography & Visual Arts Festival banner"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
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
              Photography &amp; Wildlife
            </div>

            <h1
              data-section="photography-hero-title"
              className="font-heading font-light"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                color: "#ffffff",
                marginBottom: "1.5rem",
                textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              Wildlife Photography & Visual Arts Festival
            </h1>

            <p
              data-section="photography-hero-subtitle"
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
                marginBottom: "1.3rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Empowering photographers, conservationists, and storytellers to
              celebrate India&apos;s wildlife and environmental heritage.
            </p>

            <p
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                lineHeight: 1.6,
                color: "#d4af37",
                maxWidth: "600px",
                marginBottom: "0.4rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Vasudhaiva Kutumbakam
              <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
                {" "}
                &middot; The World Is One Family
              </span>
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                fontWeight: 600,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "600px",
                marginBottom: "2rem",
                textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              Saturday, April 24, 2027 &middot; Exhibition &middot; Talks &middot; Workshops &middot; Awards
            </p>

            <div className="flex flex-wrap" style={{ gap: "1rem" }}>
              <Link
                href="/register"
                className="inline-block font-semibold uppercase text-center"
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
              <FormLink variant="gold">Submit Your Work</FormLink>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        data-section="photography-mission"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          data-section="photography-mission-grid"
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
                while fostering awareness, inspiring conservation, and celebrating
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
                wildlife, landscapes, and environmental heritage, building bridges
                between photographers, communities, and nature lovers worldwide through
                the power of imagery.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Festival Theme 2027 */}
      <section
        data-section="photography-theme"
        style={{ padding: "3rem 3rem", background: darkGreen }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "4rem" }}
          >
            <FadeInSection>
              <GoldTag>Festival Theme 2027</GoldTag>
              <p
                lang="sa"
                className={sanskritFont.className}
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                  lineHeight: 1.25,
                  color: "#d4af37",
                  marginBottom: "0.5rem",
                }}
              >
                वसुधैव कुटुम्बकम्
              </p>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                }}
              >
                Vasudhaiva Kutumbakam
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.82)",
                  maxWidth: "560px",
                }}
              >
                &ldquo;The whole earth is one family.&rdquo; This ancient idea from the
                Maha Upanishad sits at the heart of Indian thought. This year we widen the
                circle to every living being, because the tiger in the forest, the heron on
                the lake and the people who share their land are all kin.
              </p>
            </FadeInSection>

            <FadeInSection direction="right">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "896 / 793",
                  borderRadius: "4px",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src={STAG_CRANE_IMAGE}
                  alt="Illustration of a stag and a crane in geometric green patterns"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "2rem", marginTop: "3.5rem" }}
          >
            {themeCircles.map((c, i) => (
              <FadeInSection key={c.title} delay={i * 0.15}>
                <div style={{ borderTop: `2px solid ${c.color}`, paddingTop: "1.25rem" }}>
                  <h3
                    className="font-heading"
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.7)" }}>
                    {c.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        data-section="photography-about"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div
          data-section="photography-about-grid"
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
                src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1772118855/visual-arts-festival-gallery_iux4lk.webp"
                alt="Wildlife Photography exhibition"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeInSection>

          {/* Text */}
          <FadeInSection direction="right">
            <SectionTag>About the Festival</SectionTag>
            <h2
              data-section="photography-heading"
              className="font-heading font-semibold"
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
              A celebration of photography and visual arts in its most
              authentic and expressive form, our festival brings together the stories of
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
              our festival transforms the way we see wildlife and the natural world,
              inviting viewers to look closer, feel deeper, and act with purpose.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
                marginBottom: "1.2rem",
              }}
            >
              The Wildlife Photography &amp; Visual Arts Festival is one of the three pillars of
              Chicago Indian Arts, alongside the Chicago Indian Literature Festival and Chicago
              Indian Fashion Week. Held during Earth Month, it connects the forests and grasslands
              of India with the prairies and lakefront of Illinois.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#666666",
              }}
            >
              From the tigers of Central India to the birds of the Great Lakes, we celebrate the
              image as evidence, as empathy and as a call to act.
            </p>
          </FadeInSection>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "3.5rem",
            gap: "2rem",
          }}
        >
          {stats.map((s, i) => (
            <FadeInSection key={s.label} delay={i * 0.1}>
              <div style={{ borderLeft: `4px solid ${s.color}`, paddingLeft: "1.1rem" }}>
                <div
                  className="font-heading"
                  style={{ fontSize: "2.4rem", fontWeight: 700, lineHeight: 1.1, color: "#1a1a1a" }}
                >
                  {s.value}
                </div>
                <div style={{ fontSize: "0.9rem", lineHeight: 1.5, color: "#666666", marginTop: "0.3rem" }}>
                  {s.label}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section
        data-section="photography-objectives"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
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
                data-section="photography-heading"
                className="font-heading font-semibold"
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
            data-section="photography-objectives-grid"
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

      {/* Festival Pillars */}
      <section
        data-section="photography-pillars"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Festival Pillars</SectionTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Four Commitments Behind Every Moment
              </h2>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "2rem" }}
          >
            {pillars.map((p, i) => (
              <FadeInSection key={p.title} delay={i * 0.12}>
                <div
                  style={{
                    padding: "2.25rem 1.75rem",
                    backgroundColor: "#ffffff",
                    borderTop: "3px solid #d4af37",
                    height: "100%",
                    transition: "all 0.3s ease",
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
                      marginBottom: "1.25rem",
                    }}
                  >
                    <p.icon size={22} style={{ color: "#cd5c5c" }} />
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "0.6rem" }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#666666" }}>
                    {p.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Program */}
      <section
        data-section="photography-program"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>The Program</SectionTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.8rem" }}
              >
                Eight Experiences, One Unforgettable Day
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#666666" }}>
                For collectors, families, students and serious photographers alike.
              </p>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1.5rem" }}
          >
            {programCards.map((c, i) => (
              <FadeInSection key={c.title} delay={(i % 4) * 0.1}>
                <div
                  style={{
                    padding: "2rem 1.75rem",
                    backgroundColor: "#faf8f3",
                    borderTop: `3px solid ${i % 2 === 0 ? "#d4af37" : "#cd5c5c"}`,
                    height: "100%",
                    transition: "all 0.3s ease",
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
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "#cd5c5c",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {c.time}
                  </div>
                  <h3
                    className="font-heading"
                    style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.35, color: "#1a1a1a", marginBottom: "0.7rem" }}
                  >
                    {c.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "#666666" }}>
                    {c.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule of the Day */}
      <section
        data-section="photography-schedule"
        style={{ padding: "3rem 3rem", background: darkGreen }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <GoldTag>Saturday, April 24, 2027</GoldTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff" }}
              >
                Schedule of the Day
              </h2>
            </div>
          </FadeInSection>

          <div>
            {schedule.map((s, i) => (
              <FadeInSection key={s.time} delay={i * 0.06}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.3rem 2rem",
                    padding: "1.25rem 0",
                    borderTop: "1px solid rgba(255,255,255,0.14)",
                    borderBottom:
                      i === schedule.length - 1 ? "1px solid rgba(255,255,255,0.14)" : "none",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 8rem",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      color: "#d4af37",
                    }}
                  >
                    {s.time}
                  </div>
                  <div style={{ flex: "1 1 16rem", minWidth: 0 }}>
                    <h3
                      className="font-heading"
                      style={{ fontSize: "1.2rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: "0.93rem", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Awards */}
      <section
        data-section="photography-awards"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto", gap: "4rem" }}
        >
          <FadeInSection>
            <SectionTag>Recognition</SectionTag>
            <h2
              data-section="photography-heading"
              className="font-heading font-semibold"
              style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "1.5rem" }}
            >
              Festival Awards 2027
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", maxWidth: "520px" }}>
              Judged by a panel of photographers, artists and conservation scientists. Winners
              are featured in the festival catalog and across Chicago Indian Arts channels.
            </p>
          </FadeInSection>

          <FadeInSection direction="right">
            <div style={{ backgroundColor: "#faf8f3", borderLeft: "4px solid #d4af37", padding: "0.5rem 2rem" }}>
              {awards.map((a, i) => (
                <div
                  key={a.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                    padding: "1.1rem 0",
                    borderBottom: i === awards.length - 1 ? "none" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <strong style={{ fontWeight: 700, color: "#1a1a1a" }}>{a.title}</strong>
                  <span style={{ fontSize: "0.92rem", color: "#666666" }}>{a.note}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Gallery */}
      <section
        data-section="photography-gallery"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
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
                data-section="photography-heading"
                className="font-heading font-semibold"
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

          <FadeInSection>
            <div
              style={{
                maxWidth: "1000px",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "4px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                overflow: "hidden",
              }}
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={1920}
                height={1080}
                className="w-full"
                style={{ display: "block", height: "auto" }}
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Call for Artists */}
      <section
        data-section="photography-call"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "4rem" }}
          >
            <FadeInSection>
              <SectionTag>Call for Artists</SectionTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a", marginBottom: "1.5rem" }}
              >
                Your Lens. Their Story.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "1.2rem" }}>
                Wildlife photographers, National Geographic explorers and contributors,
                conservation filmmakers and visual artists from every country are invited to
                exhibit. Established names and first-time exhibitors are reviewed side by side,
                on the strength of the work.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "#666666", marginBottom: "2rem" }}>
                Submit by <strong style={{ color: "#1a1a1a" }}>January 31, 2027</strong>.
              </p>
              <FormLink variant="red">Apply via Google Form</FormLink>
            </FadeInSection>

            <FadeInSection direction="right">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "896 / 640",
                  borderRadius: "4px",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={CALL_FOR_ARTISTS_IMAGE}
                  alt="Illustration of a hawk, fox, egret and elephant on deep green"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeInSection>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-3"
            style={{ gap: "1.5rem", marginTop: "3.5rem" }}
          >
            <FadeInSection>
              <div style={{ padding: "2rem 1.75rem", backgroundColor: "#faf8f3", borderTop: "3px solid #d4af37", height: "100%" }}>
                <h3 className="font-heading" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "1rem" }}>
                  Who should apply
                </h3>
                <ul style={{ listStyle: "none", display: "grid", gap: "0.7rem" }}>
                  {whoShouldApply.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.7rem", fontSize: "0.93rem", lineHeight: 1.6, color: "#666666" }}>
                      <span aria-hidden="true" style={{ color: "#cd5c5c", fontWeight: 700 }}>&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.12}>
              <div style={{ padding: "2rem 1.75rem", backgroundColor: "#faf8f3", borderTop: "3px solid #cd5c5c", height: "100%" }}>
                <h3 className="font-heading" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "1rem" }}>
                  Categories
                </h3>
                <ol style={{ listStyle: "none", display: "grid", gap: "0.7rem" }}>
                  {categories.map((c, i) => (
                    <li key={c.name} style={{ display: "flex", gap: "0.7rem", fontSize: "0.93rem", lineHeight: 1.6, color: "#666666" }}>
                      <span aria-hidden="true" style={{ color: "#cd5c5c", fontWeight: 700, minWidth: "1.1rem" }}>{i + 1}.</span>
                      <span>
                        <strong style={{ color: "#1a1a1a" }}>{c.name}</strong>: {c.note}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.24}>
              <div style={{ padding: "2rem 1.75rem", backgroundColor: "#faf8f3", borderTop: "3px solid #d4af37", height: "100%" }}>
                <h3 className="font-heading" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "1rem" }}>
                  What you will need
                </h3>
                <ul style={{ listStyle: "none", display: "grid", gap: "0.7rem" }}>
                  {whatYouNeed.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.7rem", fontSize: "0.93rem", lineHeight: 1.6, color: "#666666" }}>
                      <span aria-hidden="true" style={{ color: "#cd5c5c", fontWeight: 700 }}>&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Green Pledge */}
      <section
        data-section="photography-pledge"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <SectionTag>Our Green Pledge</SectionTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                A Festival About Nature Should Tread Lightly on It
              </h2>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1.5rem" }}
          >
            {pledges.map((p, i) => (
              <FadeInSection key={p.title} delay={i * 0.1}>
                <div style={{ padding: "1.75rem", backgroundColor: "#ffffff", borderLeft: "4px solid #2a9bb0", height: "100%" }}>
                  <h3 className="font-heading" style={{ fontSize: "1.2rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "#666666" }}>{p.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section
        data-section="photography-involved"
        style={{ padding: "3rem 3rem", background: darkGreen }}
      >
        <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <GoldTag>Be Part of the Family</GoldTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#ffffff", marginBottom: "0.8rem" }}
              >
                Get Involved
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
                One form for everyone. Choose how you would like to take part and we will be in touch.
              </p>
            </div>
          </FadeInSection>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
            style={{ gap: "1.5rem" }}
          >
            {getInvolved.map((g, i) => (
              <FadeInSection key={g.title} delay={i * 0.1}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2rem 1.75rem",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderTop: "3px solid #d4af37",
                    height: "100%",
                  }}
                >
                  <h3 className="font-heading" style={{ fontSize: "1.35rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.6rem" }}>
                    {g.title}
                  </h3>
                  <p style={{ fontSize: "0.93rem", lineHeight: 1.75, color: "rgba(255,255,255,0.72)", flex: 1, marginBottom: "1.25rem" }}>
                    {g.description}
                  </p>
                  <Link
                    href={g.href}
                    {...(g.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    style={{
                      alignSelf: "flex-start",
                      color: "#d4af37",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      letterSpacing: "0.8px",
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    {g.cta}
                    <ArrowUpRight
                      size={14}
                      style={{ display: "inline", marginLeft: "0.4rem", verticalAlign: "-2px" }}
                    />
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        data-section="photography-faq"
        style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}
      >
        <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          <FadeInSection>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <SectionTag>FAQ</SectionTag>
              <h2
                data-section="photography-heading"
                className="font-heading font-semibold"
                style={{ fontSize: "2.5rem", lineHeight: 1.3, color: "#1a1a1a" }}
              >
                Questions from Artists
              </h2>
            </div>
          </FadeInSection>

          <div>
            {faqs.map((f, i) => (
              <FadeInSection key={f.q} delay={i * 0.06}>
                <div
                  style={{
                    padding: "1.4rem 0",
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    borderBottom: i === faqs.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  <h3 className="font-heading" style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.4rem" }}>
                    {f.q}
                  </h3>
                  <p style={{ fontSize: "0.97rem", lineHeight: 1.8, color: "#666666" }}>{f.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        data-section="photography-quote"
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
        data-section="photography-cta"
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
              Join the Wildlife Photography & Visual Arts Festival as a photographer, exhibitor, conservationist,
              or art lover. Together, let&apos;s tell the visual stories
              that matter. The wild cannot speak for itself. Your work can.
            </p>
            <div className="flex flex-wrap justify-center" style={{ gap: "1rem" }}>
              <Link
                href="/register"
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
                Register Now
              </Link>
              <FormLink variant="dark">Submit by January 31, 2027</FormLink>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
