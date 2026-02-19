import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Partners — Chicago Indian Arts Collaborators",
  description:
    "Meet our community partners who collaborate with Chicago Indian Arts to promote Indian and South Asian cultural heritage through events, festivals, and exhibitions in Chicago.",
  keywords: [
    "Chicago Indian Arts partners",
    "Indian arts community partners",
    "Indian cultural sponsors Chicago",
    "South Asian arts collaborators",
    "Indian community partners Chicago",
  ],
  openGraph: {
    title: "Community Partners — Chicago Indian Arts",
    description:
      "Our community partners who collaborate to promote Indian and South Asian cultural heritage through events and exhibitions.",
    url: "https://www.chicagoindianarts.org/community-partners",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/community-partners",
  },
};

export default function CommunityPartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
