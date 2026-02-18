"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const sectionHeadingStyle = {
  fontSize: "1.3rem",
  fontWeight: 600,
  color: "#1a1a1a",
  marginBottom: "0.75rem",
  marginTop: "2.5rem",
};

const paragraphStyle = {
  fontSize: "0.95rem",
  color: "#666",
  lineHeight: 1.8,
  marginBottom: "1rem",
};

const listStyle = {
  fontSize: "0.95rem",
  color: "#666",
  lineHeight: 1.8,
  marginBottom: "1rem",
  paddingLeft: "1.5rem",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="terms-hero"
        className="relative overflow-hidden"
        style={{
          padding: "10rem 3rem 3rem",
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
        }}
      >
        <div
          className="absolute"
          style={{
            top: "-15%",
            right: "-8%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          className="relative z-10"
          style={{
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <Link
            href="/"
            className="inline-flex items-center"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.85rem",
              textDecoration: "none",
              marginBottom: "2rem",
              transition: "color 0.3s ease",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
            }
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div>
            <SectionTag>Legal</SectionTag>
            <h1
              className="font-heading font-light"
              style={{
                fontSize: "3.5rem",
                lineHeight: 1.15,
                color: "#ffffff",
                marginBottom: "1.2rem",
              }}
            >
              Terms &{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Conditions
              </strong>
            </h1>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                maxWidth: "650px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Please read these terms carefully before using our website,
              registering for events, or making donations.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        data-section="terms-content"
        style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}
      >
        <FadeInSection>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {/* Last Updated */}
            <div
              className="flex items-center"
              style={{
                gap: "0.75rem",
                marginBottom: "2.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,55,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <FileText size={20} color="#d4af37" />
              </div>
              <div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  Last Updated: February 2026
                </p>
                <p style={{ fontSize: "0.8rem", color: "#999" }}>
                  Applicable to all users of chicagoindianarts.org
                </p>
              </div>
            </div>

            {/* 1. Acceptance */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              1. Acceptance of Terms
            </h2>
            <p style={paragraphStyle}>
              By accessing and using the Chicago Indian Arts website
              (chicagoindianarts.org), registering for events, making donations,
              or submitting any forms, you accept and agree to be bound by these
              Terms & Conditions. If you do not agree with any part of these
              terms, please do not use our website or services.
            </p>

            {/* 2. About Us */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              2. About Chicago Indian Arts
            </h2>
            <p style={paragraphStyle}>
              Chicago Indian Collective Arts is a registered 501(c)(3) non-profit
              organization dedicated to celebrating and preserving Indian cultural
              heritage through literature, fashion, photography, and the performing
              arts. Our programs include Vaarta, Prasang, and Varnam.
            </p>

            {/* 3. Event Registration */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              3. Event Registration
            </h2>
            <p style={paragraphStyle}>
              All event registrations are subject to availability. By registering
              for an event, you agree to the following:
            </p>
            <ul style={listStyle}>
              <li>
                We reserve the right to modify event schedules, speakers, venues,
                and programs at any time.
              </li>
              <li>
                Registered attendees will be notified of any significant changes
                via the email address provided during registration.
              </li>
              <li>
                Registration does not guarantee admission if the event reaches
                full capacity.
              </li>
              <li>
                You agree to receive event-related communications. You can
                unsubscribe from non-essential communications at any time.
              </li>
            </ul>

            {/* 4. Donations */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              4. Donations
            </h2>
            <p style={paragraphStyle}>
              All donations to Chicago Indian Arts are tax-deductible to the
              fullest extent permitted by law. By making a donation, you agree to
              the following:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={{ color: "#1a1a1a" }}>One-Time Donations:</strong>{" "}
                Your card will be charged once for the specified amount.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>
                  Recurring Donations (Monthly, Quarterly, Annual):
                </strong>{" "}
                By selecting a recurring frequency, you authorize Chicago Indian
                Arts and our payment processor (Stripe) to automatically charge
                your payment method at the selected interval until you cancel.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Tax Receipts:</strong>{" "}
                Donation receipts will be provided to the email address you
                specify for your tax records.
              </li>
            </ul>

            {/* 5. Cancellation & Refunds */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              5. Cancellation & Refund Policy
            </h2>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>
                Recurring Donation Cancellation:
              </strong>{" "}
              You may cancel your recurring donation at any time by contacting us
              at{" "}
              <a
                href="mailto:info@chicagoindianarts.org"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                info@chicagoindianarts.org
              </a>
              . Cancellation will take effect before the next billing cycle. No
              refunds will be issued for charges already processed.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Donation Refunds:</strong>{" "}
              Donations are generally non-refundable as they are charitable
              contributions. However, if you believe a charge was made in error,
              please contact us within 30 days and we will review your request on
              a case-by-case basis.
            </p>

            {/* 6. Volunteering */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              6. Volunteering
            </h2>
            <p style={paragraphStyle}>
              By submitting a volunteer application, you understand that:
            </p>
            <ul style={listStyle}>
              <li>
                Volunteering is on a voluntary basis and does not create an
                employment relationship.
              </li>
              <li>
                We will contact you about volunteer opportunities based on the
                roles and availability you indicated.
              </li>
              <li>
                You agree to follow event guidelines and instructions provided by
                our team during events.
              </li>
            </ul>

            {/* 7. Intellectual Property */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              7. Intellectual Property
            </h2>
            <p style={paragraphStyle}>
              All content on this website, including but not limited to text,
              images, logos, graphics, videos, and designs, is the property of
              Chicago Indian Collective Arts and is protected by copyright and
              intellectual property laws. You may not reproduce, distribute, or
              use any content without prior written consent.
            </p>

            {/* 8. Photography & Media */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              8. Photography & Media at Events
            </h2>
            <p style={paragraphStyle}>
              By attending Chicago Indian Arts events, you consent to being
              photographed, filmed, and recorded. These materials may be used for
              promotional, educational, and marketing purposes across our website,
              social media platforms, newsletters, and other communications. If
              you do not wish to be photographed, please notify our event staff
              upon arrival.
            </p>

            {/* 9. Website Usage */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              9. Website Usage
            </h2>
            <p style={paragraphStyle}>
              When using our website, you agree not to:
            </p>
            <ul style={listStyle}>
              <li>
                Use the website for any unlawful or unauthorized purpose
              </li>
              <li>
                Attempt to gain unauthorized access to our systems or databases
              </li>
              <li>
                Submit false or misleading information through any forms
              </li>
              <li>
                Interfere with the proper functioning of the website
              </li>
            </ul>

            {/* 10. Limitation of Liability */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              10. Limitation of Liability
            </h2>
            <p style={paragraphStyle}>
              Chicago Indian Arts shall not be liable for any indirect,
              incidental, special, or consequential damages arising from the use
              of this website, attendance at our events, or reliance on any
              information provided. Our website and services are provided
              &quot;as is&quot; without warranties of any kind.
            </p>

            {/* 11. Changes */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              11. Changes to These Terms
            </h2>
            <p style={paragraphStyle}>
              We reserve the right to update or modify these Terms & Conditions at
              any time. Changes will be posted on this page with an updated
              &quot;Last Updated&quot; date. Continued use of the website after
              changes constitutes acceptance of the revised terms.
            </p>

            {/* 12. Contact */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              12. Contact Us
            </h2>
            <p style={paragraphStyle}>
              If you have any questions about these Terms & Conditions, please
              contact us:
            </p>
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#ffffff",
                border: "1px solid rgba(0,0,0,0.06)",
                marginTop: "1rem",
                marginBottom: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#1a1a1a",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                Chicago Indian Collective Arts
              </p>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.8 }}>
                Email:{" "}
                <a
                  href="mailto:info@chicagoindianarts.org"
                  style={{ color: "#d4af37", textDecoration: "none" }}
                >
                  info@chicagoindianarts.org
                </a>
              </p>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.8 }}>
                Website:{" "}
                <a
                  href="https://chicagoindianarts.org"
                  style={{ color: "#d4af37", textDecoration: "none" }}
                >
                  www.chicagoindianarts.org
                </a>
              </p>
            </div>

            {/* Privacy Policy Reference */}
            <p
              style={{
                fontSize: "0.85rem",
                color: "#999",
                textAlign: "center",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              Please also review our{" "}
              <Link
                href="/privacy-policy"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>{" "}
              for information on how we handle your personal data.
            </p>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
