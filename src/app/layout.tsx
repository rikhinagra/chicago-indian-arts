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
  title: "Chicago Indian Arts | Celebrating Culture Through Literature, Fashion & Photography",
  description:
    "Chicago Indian Arts celebrates Indian cultural heritage through three signature programs: Vaarta (Literature), Prasang (Fashion), and Varnam (Photography & Wildlife). Join our vibrant community.",
  keywords: [
    "Chicago Indian Arts",
    "Vaarta",
    "Prasang",
    "Varnam",
    "Indian culture",
    "literature festival",
    "fashion show",
    "photography exhibition",
    "Chicago arts",
  ],
  openGraph: {
    title: "Chicago Indian Arts | Celebrating Culture Through Literature, Fashion & Photography",
    description:
      "Experience the vibrant tapestry of India's cultural heritage through our three signature programs.",
    siteName: "Chicago Indian Arts",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Indian Arts",
    description:
      "Celebrating Indian cultural heritage through Literature, Fashion & Photography.",
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
