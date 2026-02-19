import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Chicago Indian Arts",
  description:
    "Get in touch with Chicago Indian Arts. Reach out for event inquiries, sponsorship, volunteer opportunities, or general questions about Indian and South Asian cultural events in Chicago.",
  keywords: [
    "Contact Chicago Indian Arts",
    "Indian arts Chicago contact",
    "Indian cultural events inquiry",
    "Chicago Indian Arts email",
    "Indian arts organization contact",
  ],
  openGraph: {
    title: "Contact Us — Chicago Indian Arts",
    description:
      "Get in touch with Chicago Indian Arts for event inquiries, sponsorship, volunteer opportunities, or general questions.",
    url: "https://www.chicagoindianarts.org/contact",
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
