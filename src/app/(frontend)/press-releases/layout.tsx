import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Releases — Chicago Indian Arts News & Media",
  description:
    "Read the latest press releases and news from Chicago Indian Arts. Stay updated on Indian and South Asian cultural events, festivals, and exhibitions in Chicago.",
  keywords: [
    "Chicago Indian Arts press",
    "Indian arts news Chicago",
    "Indian cultural events news",
    "Chicago Indian Arts media",
    "Indian arts press release",
  ],
  openGraph: {
    title: "Press Releases — Chicago Indian Arts News",
    description:
      "Latest press releases and news from Chicago Indian Arts about Indian and South Asian cultural events in Chicago.",
    url: "https://www.chicagoindianarts.org/press-releases",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/press-releases",
  },
};

export default function PressReleasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
