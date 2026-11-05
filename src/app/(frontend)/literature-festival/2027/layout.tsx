import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LIT_FEST_2027_LIVE } from "@/lib/featureFlags";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const OG_IMAGE =
  "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp";

const liveMetadata: Metadata = {
  // The parent layout sets a plain-string title, which cancels the site-wide
  // "| Chicago Indian Arts" template for child routes, so the brand is typed in here.
  title: "Kahani Chicago 2027 | Lit Fest ’27 | Chicago Indian Arts",
  description:
    "Kahani Chicago: Stories Without Borders. An Indian literature, cinema and culture festival by Chicago Indian Arts. Date to be announced. Authors, poets, filmmakers, comedians and storytellers in one afternoon.",
  keywords: [
    "Kahani Chicago 2027",
    "Lit Fest 27",
    "Indian literature festival Chicago",
    "Indian cinema and culture festival",
    "Stories Without Borders",
    "Chicago Indian Literature Festival",
    "Chicago Indian Arts",
  ],
  openGraph: {
    title: "Kahani Chicago 2027 | Stories Without Borders",
    description:
      "An Indian literature, cinema and culture festival. Date to be announced. One city. A million stories.",
    url: "https://www.chicagoindianarts.org/literature-festival/2027",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kahani Chicago 2027 by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/literature-festival/2027",
  },
};

// While the page is hidden, expose no Kahani title/description at all and tell search
// engines not to index it. When LIT_FEST_2027_LIVE is true the full metadata above is used.
export function generateMetadata(): Metadata {
  return LIT_FEST_2027_LIVE
    ? liveMetadata
    : { robots: { index: false, follow: false } };
}

export default function LitFest2027Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Page is taken down (shows "not found") until LIT_FEST_2027_LIVE is switched on.
  if (!LIT_FEST_2027_LIVE) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Literature Festival", url: "https://www.chicagoindianarts.org/literature-festival" },
          { name: "Kahani Chicago 2027", url: "https://www.chicagoindianarts.org/literature-festival/2027" },
        ]}
      />
      {children}
    </>
  );
}
