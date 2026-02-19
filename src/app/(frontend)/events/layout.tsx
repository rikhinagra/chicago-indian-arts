import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — Indian Cultural Events & Festivals in Chicago",
  description:
    "Discover upcoming Indian and South Asian cultural events in Chicago — literature festivals, fashion shows, art exhibitions, and community gatherings by Chicago Indian Arts.",
  keywords: [
    "Indian cultural events Chicago",
    "Indian community events Chicago",
    "South Asian events Chicago",
    "Indian festivals Chicago",
    "Indian arts events",
    "Chicago Indian Arts events",
    "Indian cultural festivals Illinois",
  ],
  openGraph: {
    title: "Events — Indian Cultural Events in Chicago",
    description:
      "Upcoming Indian and South Asian cultural events in Chicago — literature festivals, fashion shows, art exhibitions, and community gatherings.",
    url: "https://www.chicagoindianarts.org/events",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
