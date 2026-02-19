import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Accreditation — Chicago Indian Arts Press Access",
  description:
    "Apply for media accreditation to cover Indian and South Asian cultural events by Chicago Indian Arts. Press and media professionals are welcome to cover our festivals and exhibitions.",
  keywords: [
    "Chicago Indian Arts media accreditation",
    "Indian arts press access",
    "Indian cultural events media",
    "Chicago Indian Arts press pass",
    "Indian festival media coverage",
  ],
  openGraph: {
    title: "Media Accreditation — Chicago Indian Arts",
    description:
      "Apply for media accreditation to cover Indian and South Asian cultural events by Chicago Indian Arts.",
    url: "https://www.chicagoindianarts.org/media-accreditation",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/media-accreditation",
  },
};

export default function MediaAccreditationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
