import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Indian Arts & Cultural Events Photos Chicago",
  description:
    "Browse photos and highlights from Chicago Indian Arts events — literature festivals, fashion shows, art exhibitions, and community gatherings celebrating Indian and South Asian culture.",
  keywords: [
    "Indian arts gallery Chicago",
    "Chicago Indian Arts photos",
    "Indian cultural events photos",
    "Indian festival gallery",
    "South Asian arts gallery",
    "Indian event highlights Chicago",
  ],
  openGraph: {
    title: "Gallery — Indian Arts & Cultural Events Photos",
    description:
      "Browse photos and highlights from Chicago Indian Arts events celebrating Indian and South Asian culture.",
    url: "https://www.chicagoindianarts.org/gallery",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
