import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chicagoindianarts.org"),
  title: {
    default:
      "Chicago Indian Arts | Indian Cultural Events, Literature, Fashion & Photography in Chicago",
    template: "%s | Chicago Indian Arts",
  },
  description:
    "Chicago Indian Arts is a nonprofit celebrating Indian and South Asian cultural heritage through Vaarta (Literature Festival), Prasang (Fashion), and Varnam (Photography). Join Chicago's premier Indian cultural events.",
  keywords: [
    "Chicago Indian Arts",
    "Indian arts Chicago",
    "Chicago Indian arts",
    "Indian cultural events Chicago",
    "South Asian events Chicago",
    "South Asian arts Chicago",
    "Indian literature festival Chicago",
    "Indian film festival Chicago",
    "Indian fashion shows Chicago",
    "Indian art exhibitions Chicago",
    "Indian diaspora Chicago",
    "Indian cultural organization Chicago",
    "Indian community events Chicago",
    "Indian arts nonprofit Chicago",
    "Vaarta",
    "Prasang",
    "Varnam",
    "Indian arts Los Angeles",
    "Indian cultural events Los Angeles",
  ],
  openGraph: {
    title:
      "Chicago Indian Arts | Indian Cultural Events in Chicago",
    description:
      "Experience Indian and South Asian culture through literature festivals, fashion shows, and photography exhibitions. Join Chicago's premier Indian cultural events.",
    siteName: "Chicago Indian Arts",
    locale: "en_US",
    type: "website",
    url: "https://www.chicagoindianarts.org",
    images: [
      {
        url: "https://res.cloudinary.com/dom3oj7ya/image/upload/c_fill,w_1200,h_630/v1770978211/vaarta_fvuwu8.webp",
        width: 1200,
        height: 630,
        alt: "Chicago Indian Arts - Celebrating Indian and South Asian Culture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Indian Arts",
    description:
      "Celebrating Indian and South Asian cultural heritage through Literature, Fashion & Photography in Chicago.",
    images: [
      "https://res.cloudinary.com/dom3oj7ya/image/upload/c_fill,w_1200,h_630/v1770978211/vaarta_fvuwu8.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.chicagoindianarts.org",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "Chicago Indian Arts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
