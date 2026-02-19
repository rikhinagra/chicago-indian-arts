import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate — Support Indian Arts & Culture in Chicago",
  description:
    "Support Chicago Indian Arts, a nonprofit dedicated to celebrating Indian and South Asian cultural heritage. Your donation helps fund literature festivals, fashion shows, and art exhibitions.",
  keywords: [
    "Donate Indian arts Chicago",
    "Indian arts nonprofit Chicago",
    "Support Indian culture Chicago",
    "Chicago Indian Arts donation",
    "Indian arts fundraising",
    "South Asian arts nonprofit",
  ],
  openGraph: {
    title: "Donate — Support Indian Arts & Culture in Chicago",
    description:
      "Support Chicago Indian Arts. Your donation helps fund literature festivals, fashion shows, and art exhibitions celebrating Indian and South Asian heritage.",
    url: "https://www.chicagoindianarts.org/donate",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/donate",
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
