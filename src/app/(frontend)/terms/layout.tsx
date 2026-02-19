import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Chicago Indian Arts. Review the terms governing use of our website and services.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
