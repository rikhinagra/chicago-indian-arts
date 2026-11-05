import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const OG_IMAGE =
  "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp";

export const metadata: Metadata = {
  title: "Wildlife Photography & Visual Arts Festival 2027 | Chicago Indian Arts",
  description:
    "Wildlife Photography & Visual Arts Festival 2027 in Chicago. Date to be announced. One day of exhibition, talks, workshops and awards on the theme Vasudhaiva Kutumbakam, the world is one family. Call for artists open until January 31, 2027.",
  keywords: [
    "Wildlife Photography & Visual Arts Festival 2027",
    "Vasudhaiva Kutumbakam",
    "wildlife photography exhibition Chicago",
    "call for artists wildlife photography",
    "Indian wildlife photography",
    "Chicago Indian Arts",
  ],
  openGraph: {
    title: "Wildlife Photography & Visual Arts Festival 2027",
    description:
      "One day of exhibition, talks, workshops and awards. Date to be announced. Theme: Vasudhaiva Kutumbakam, the world is one family.",
    url: "https://www.chicagoindianarts.org/photography-festival/2027",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Wildlife Photography & Visual Arts Festival 2027 by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/photography-festival/2027",
  },
};

export default function WildlifeFestival2027Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Wildlife & Arts Festival", url: "https://www.chicagoindianarts.org/photography-festival" },
          { name: "Festival 2027", url: "https://www.chicagoindianarts.org/photography-festival/2027" },
        ]}
      />
      {children}
    </>
  );
}
