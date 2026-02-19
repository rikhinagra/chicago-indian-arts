import type { Metadata } from "next";
import { EventJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Vaarta — Indian Literature Festival Chicago | Storytelling & Authors",
  description:
    "Vaarta is Chicago's premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions. Join us at the Chicago Cultural Center.",
  keywords: [
    "Vaarta",
    "Vaarta Chicago",
    "Indian literature festival Chicago",
    "South Asian literature festival",
    "Indian storytelling event Chicago",
    "Indian authors Chicago",
    "Indian poetry festival",
    "South Asian storytelling",
    "Indian book festival Chicago",
    "Chicago Indian Arts Vaarta",
  ],
  openGraph: {
    title: "Vaarta — Indian Literature Festival Chicago",
    description:
      "Chicago's premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions.",
    url: "https://www.chicagoindianarts.org/vaarta",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/c_fill,w_1200,h_630/v1770978211/vaarta_fvuwu8.webp",
        width: 1200,
        height: 630,
        alt: "Vaarta — Indian Literature Festival by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/vaarta",
  },
};

export default function VaartaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EventJsonLd
        name="Vaarta — Indian Literature Festival"
        description="Chicago's premier Indian and South Asian literature festival featuring renowned authors, storytelling, poetry, and panel discussions."
        startDate="2026-05-30"
        endDate="2026-05-30"
        location="Chicago Cultural Center"
        image="https://res.cloudinary.com/dom3oj7ya/image/upload/c_fill,w_1200,h_630/v1770978211/vaarta_fvuwu8.webp"
        url="https://www.chicagoindianarts.org/vaarta"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "Vaarta", url: "https://www.chicagoindianarts.org/vaarta" },
        ]}
      />
      {children}
    </>
  );
}
