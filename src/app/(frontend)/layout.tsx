import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <OrganizationJsonLd />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LenisProvider>
  );
}
