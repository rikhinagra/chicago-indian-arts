import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Indian Cultural Organization & Nonprofit in Chicago",
  description:
    "Learn about Chicago Indian Arts, a nonprofit celebrating Indian and South Asian cultural heritage. Founded by Jigar Shah, we bring literature, fashion, and art to the Indian diaspora in Chicago.",
  keywords: [
    "About Chicago Indian Arts",
    "Indian cultural organization Chicago",
    "Indian arts nonprofit Chicago",
    "Jigar Shah Chicago",
    "Indian diaspora Chicago",
    "South Asian cultural organization",
    "Indian nonprofit Illinois",
    "Indian community organization Chicago",
  ],
  openGraph: {
    title: "About Chicago Indian Arts — Nonprofit Cultural Organization",
    description:
      "A nonprofit celebrating Indian and South Asian cultural heritage through literature festivals, fashion shows, and photography exhibitions in Chicago.",
    url: "https://www.chicagoindianarts.org/about",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          { name: "About", url: "https://www.chicagoindianarts.org/about" },
        ]}
      />
      {children}
    </>
  );
}
