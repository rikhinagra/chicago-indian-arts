import type { Metadata } from "next";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

export const metadata: Metadata = {
  title: "Privacy Policy | Chicago Indian Arts",
  description: "Privacy policy for Chicago Indian Arts website and events.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[800px] mx-auto text-center">
          <SectionTag>Legal</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4rem] font-light mb-4 text-primary-dark">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-light">Last updated: February 2026</p>
        </FadeInSection>
      </section>

      <section className="py-16 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[700px] mx-auto prose prose-lg text-text-light leading-relaxed space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Information We Collect</h2>
          <p>When you register for events, subscribe to our newsletter, or contact us, we may collect personal information including your name, email address, phone number, and event preferences.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">How We Use Your Information</h2>
          <p>We use your personal information to process event registrations, send event updates and newsletters, improve our services, and communicate about our programs.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal data. Your information is stored securely and only accessed by authorized team members.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Third-Party Services</h2>
          <p>We may use third-party services for payment processing (Stripe), email communications (Resend), and analytics (Google Analytics). These services have their own privacy policies.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Your Rights</h2>
          <p>You have the right to access, update, or delete your personal information. Contact us at info@chicagoindianarts.org for any privacy-related requests.</p>

          <h2 className="font-heading text-2xl font-semibold text-primary-dark">Contact</h2>
          <p>For questions about this privacy policy, contact us at info@chicagoindianarts.org.</p>
        </FadeInSection>
      </section>
    </>
  );
}
