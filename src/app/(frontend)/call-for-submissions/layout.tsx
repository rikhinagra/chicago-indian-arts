import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title:
    "Call for Submissions — Chicago Indian Literature Festival",
  description:
    "Submit your poetry, fiction, essays, memoir, scripts, or experimental writing to Chicago Indian Literature Festival. Open submissions for authors and writers.",
  keywords: [
    "Chicago Indian Literature Festival submissions",
    "Indian literature submissions",
    "Chicago literature festival submissions",
    "call for submissions poetry",
    "Indian authors submissions",
    "South Asian writing submissions",
    "submit poetry Chicago",
    "Indian writing festival",
  ],
  openGraph: {
    title: "Call for Submissions — Chicago Indian Literature Festival",
    description:
      "Submit your original work to Chicago Indian Literature Festival. Poetry, fiction, essays, memoir, and more.",
    url: "https://www.chicagoindianarts.org/call-for-submissions",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/b_rgb:1a1a1a,c_lpad,w_1200,h_630/v1770980107/CIA-logo-white_gaxtwl.webp",
        width: 1200,
        height: 630,
        alt: "Call for Submissions — Chicago Indian Literature Festival by Chicago Indian Arts",
      },
    ],
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org/call-for-submissions",
  },
};

export default function CallForSubmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.chicagoindianarts.org" },
          {
            name: "Call for Submissions",
            url: "https://www.chicagoindianarts.org/call-for-submissions",
          },
        ]}
      />
      {children}
    </>
  );
}
