import LenisProvider from "@/components/providers/LenisProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LenisProvider>
  );
}
