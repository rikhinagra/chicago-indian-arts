import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register — Indian Arts Festival Registration Chicago",
  description:
    "Register for Indian and South Asian cultural events by Chicago Indian Arts. Sign up for Vaarta literature festival, Prasang fashion shows, and Varnam art exhibitions.",
  keywords: [
    "Register Indian arts festival",
    "Indian cultural events registration",
    "Vaarta registration",
    "Prasang registration",
    "Varnam registration",
    "Chicago Indian Arts register",
    "Indian festival tickets Chicago",
  ],
  openGraph: {
    title: "Register — Indian Arts Festival Registration",
    description:
      "Register for Indian and South Asian cultural events by Chicago Indian Arts. Sign up for Vaarta, Prasang, and Varnam.",
    url: "https://www.chicagoindianarts.org/register",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/register",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
