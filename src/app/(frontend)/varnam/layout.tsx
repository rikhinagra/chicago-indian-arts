import type { Metadata } from "next";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Varnam — Indian Art & Photography Exhibition Chicago | South Asian Arts",
  description:
    "Varnam is Chicago's Indian and South Asian art and photography exhibition by Chicago Indian Arts. Discover stunning visual storytelling, wildlife photography, and cultural art at the Art Institute.",
  keywords: [
    "Varnam",
    "Varnam Chicago",
    "Indian art exhibitions Chicago",
    "Indian photography exhibition Chicago",
    "South Asian arts Chicago",
    "Indian visual arts Chicago",
    "Indian wildlife photography",
    "South Asian photography exhibition",
    "Indian art gallery Chicago",
    "Chicago Indian Arts Varnam",
  ],
  openGraph: {
    title: "Varnam — Indian Art & Photography Exhibition Chicago",
    description:
      "Chicago's Indian and South Asian art and photography exhibition. Discover stunning visual storytelling, wildlife photography, and cultural art.",
    url: "https://www.chicagoindianarts.org/varnam",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp",
        width: 1200,
        height: 630,
        alt: "Varnam — Indian Art & Photography Exhibition by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/varnam",
  },
};

export default function VarnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventJsonLd
        name="Varnam — Indian Art & Photography Exhibition"
        description="Chicago's Indian and South Asian art and photography exhibition featuring stunning visual storytelling, wildlife photography, and cultural art."
        startDate="2026-01-01"
        endDate="2026-12-31"
        location="Art Institute of Chicago"
        image="https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp"
        url="https://www.chicagoindianarts.org/varnam"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Varnam", url: "https://www.chicagoindianarts.org/varnam" },
        ]}
      />
      {children}
    </>
  );
}
