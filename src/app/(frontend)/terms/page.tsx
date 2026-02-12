import type { Metadata } from "next";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chicago Indian Arts",
  description: "Terms and conditions for Chicago Indian Arts website and events.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Legal</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-4 text-primary-dark">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-text-light">Last updated: February 2026</p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[700px] mx-auto prose prose-lg text-text-light leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Acceptance of Terms</h2>
          <p>By accessing and using the Chicago Indian Arts website, you accept and agree to be bound by these terms and conditions.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Event Registration</h2>
          <p>All event registrations are subject to availability. We reserve the right to modify event schedules, speakers, and venues. Registered attendees will be notified of any significant changes.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Donations</h2>
          <p>All donations to Chicago Indian Arts are tax-deductible as permitted by law. Donation receipts will be provided for your records.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and designs, is the property of Chicago Indian Arts and protected by copyright law.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Photography & Media</h2>
          <p>By attending our events, you consent to being photographed and recorded. These materials may be used for promotional purposes across our platforms.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Limitation of Liability</h2>
          <p>Chicago Indian Arts shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or attendance at our events.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Contact</h2>
          <p>For questions about these terms, contact us at info@chicagoindianarts.org.</p>
        </FadeInSection>
      </section>
    </>
  );
}
