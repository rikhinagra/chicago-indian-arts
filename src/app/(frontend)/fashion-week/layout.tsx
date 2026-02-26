import type { Metadata } from "next";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Chicago Indian Fashion Week | South Asian Textile Showcase",
  description:
    "Chicago Indian Fashion Week showcases Indian and South Asian fashion, textiles, and design in Chicago. Experience stunning runway shows, designer showcases, and cultural fashion at Navy Pier.",
  keywords: [
    "Chicago Indian Fashion Week",
    "Indian fashion shows Chicago",
    "South Asian fashion Chicago",
    "Indian textile showcase Chicago",
    "Indian designer showcase",
    "South Asian fashion show",
    "Indian runway show Chicago",
    "Indian fashion event",
    "Chicago Indian Arts",
  ],
  openGraph: {
    title: "Chicago Indian Fashion Week",
    description:
      "Indian and South Asian fashion, textiles, and design showcased in Chicago. Stunning runway shows and cultural fashion at Navy Pier.",
    url: "https://www.chicagoindianarts.org/fashion-week",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp",
        width: 1200,
        height: 630,
        alt: "Chicago Indian Fashion Week by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/fashion-week",
  },
};

export default function FashionWeekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventJsonLd
        name="Chicago Indian Fashion Week"
        description="Indian and South Asian fashion, textiles, and design showcased in Chicago featuring stunning runway shows and cultural fashion."
        startDate="2026-07-01"
        endDate="2026-07-31"
        location="Navy Pier"
        image="https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp"
        url="https://www.chicagoindianarts.org/fashion-week"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          {
            name: "Fashion Week",
            url: "https://www.chicagoindianarts.org/fashion-week",
          },
        ]}
      />
      {children}
    </>
  );
}
