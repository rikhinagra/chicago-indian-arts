import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team — Chicago Indian Arts Leadership & Board",
  description:
    "Meet the team behind Chicago Indian Arts. Led by founder Jigar Shah, our leadership and board members are dedicated to celebrating Indian and South Asian cultural heritage in Chicago.",
  keywords: [
    "Chicago Indian Arts team",
    "Jigar Shah Chicago",
    "Indian arts leadership",
    "Chicago Indian Arts board",
    "Indian cultural organization team",
  ],
  openGraph: {
    title: "Our Team — Chicago Indian Arts Leadership & Board",
    description:
      "Meet the team behind Chicago Indian Arts, led by founder Jigar Shah. Dedicated to celebrating Indian and South Asian cultural heritage.",
    url: "https://www.chicagoindianarts.org/team",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
