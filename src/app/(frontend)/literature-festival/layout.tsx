import type { Metadata } from "next";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Chicago Indian Literature Festival | Storytelling & Authors",
  description:
    "Chicago Indian Literature Festival is the premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions. Join us at the Chicago Cultural Center.",
  keywords: [
    "Chicago Indian Literature Festival",
    "Indian literature festival Chicago",
    "South Asian literature festival",
    "Indian storytelling event Chicago",
    "Indian authors Chicago",
    "Indian poetry festival",
    "South Asian storytelling",
    "Indian book festival Chicago",
    "Chicago Indian Arts",
  ],
  openGraph: {
    title: "Chicago Indian Literature Festival",
    description:
      "Chicago's premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions.",
    url: "https://www.chicagoindianarts.org/literature-festival",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp",
        width: 1200,
        height: 630,
        alt: "Chicago Indian Literature Festival by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/literature-festival",
  },
};

export default function LiteratureFestivalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventJsonLd
        name="Chicago Indian Literature Festival"
        description="Chicago's premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions."
        startDate="2026-05-30"
        endDate="2026-05-30"
        location="Chicago Cultural Center"
        image="https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp"
        url="https://www.chicagoindianarts.org/literature-festival"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Literature Festival", url: "https://www.chicagoindianarts.org/literature-festival" },
        ]}
      />
      {children}
    </>
  );
}
