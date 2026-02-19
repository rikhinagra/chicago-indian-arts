import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer — Join Chicago Indian Arts",
  description:
    "Volunteer with Chicago Indian Arts and help celebrate Indian and South Asian culture. Join our team to support literature festivals, fashion shows, and art exhibitions in Chicago.",
  keywords: [
    "Volunteer Indian arts Chicago",
    "Chicago Indian Arts volunteer",
    "Indian cultural event volunteer",
    "South Asian arts volunteer",
    "Indian community volunteer Chicago",
  ],
  openGraph: {
    title: "Volunteer — Join Chicago Indian Arts",
    description:
      "Volunteer with Chicago Indian Arts and help celebrate Indian and South Asian culture through festivals and exhibitions.",
    url: "https://www.chicagoindianarts.org/volunteer",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/volunteer",
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
