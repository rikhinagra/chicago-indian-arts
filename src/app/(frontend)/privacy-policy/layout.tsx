import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Chicago Indian Arts. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
