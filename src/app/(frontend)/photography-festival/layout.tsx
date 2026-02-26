import type { Metadata } from "next";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Wildlife Photography & Visual Arts Festival Chicago | South Asian Arts",
  description:
    "Wildlife Photography & Visual Arts Festival is Chicago's premier Indian and South Asian art and photography exhibition. Discover stunning visual storytelling, wildlife photography, and cultural art at the Art Institute.",
  keywords: [
    "Wildlife Photography & Visual Arts Festival",
    "Indian art exhibitions Chicago",
    "Indian photography exhibition Chicago",
    "South Asian arts Chicago",
    "Indian visual arts Chicago",
    "Indian wildlife photography",
    "South Asian photography exhibition",
    "Indian art gallery Chicago",
    "Chicago Indian Arts",
  ],
  openGraph: {
    title: "Wildlife Photography & Visual Arts Festival Chicago",
    description:
      "Chicago's premier Indian and South Asian art and photography exhibition. Discover stunning visual storytelling, wildlife photography, and cultural art.",
    url: "https://www.chicagoindianarts.org/photography-festival",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp",
        width: 1200,
        height: 630,
        alt: "Wildlife Photography & Visual Arts Festival by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/photography-festival",
  },
};

export default function PhotographyFestivalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventJsonLd
        name="Wildlife Photography & Visual Arts Festival"
        description="Chicago's premier Indian and South Asian art and photography exhibition featuring stunning visual storytelling, wildlife photography, and cultural art."
        startDate="2026-01-01"
        endDate="2026-12-31"
        location="Art Institute of Chicago"
        image="https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp"
        url="https://www.chicagoindianarts.org/photography-festival"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Wildlife & Arts Festival", url: "https://www.chicagoindianarts.org/photography-festival" },
        ]}
      />
      {children}
    </>
  );
}
