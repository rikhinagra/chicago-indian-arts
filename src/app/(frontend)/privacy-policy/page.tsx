"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
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

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        data-section="privacy-hero"
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
              Privacy{" "}
              <strong className="font-bold" style={{ color: "#d4af37" }}>
                Policy
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
              Your privacy matters to us. This policy explains how Chicago Indian
              Arts collects, uses, and protects your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        data-section="privacy-content"
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
                <Shield size={20} color="#d4af37" />
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
                  Effective for all users of chicagoindianarts.org
                </p>
              </div>
            </div>

            {/* Introduction */}
            <p style={paragraphStyle}>
              Chicago Indian Collective Arts (&quot;Chicago Indian Arts,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is a registered
              501(c)(3) non-profit organization committed to protecting your
              privacy. This Privacy Policy describes how we collect, use, and
              safeguard your personal information when you visit our website,
              register for events, make donations, or interact with us in any
              way.
            </p>

            {/* 1. Information We Collect */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              1. Information We Collect
            </h2>
            <p style={paragraphStyle}>
              We collect information that you voluntarily provide to us through
              our website forms:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Contact Form:</strong>{" "}
                Name, email address, phone number (optional), subject, and
                message.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>
                  Event Registration:
                </strong>{" "}
                Name, email address, phone number (optional), city, areas of
                interest, and how you heard about us.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>
                  Volunteer Application:
                </strong>{" "}
                Name, email address, phone number (optional), preferred roles,
                availability, experience, and additional message.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Donations:</strong> Name,
                email address, donation amount, and donation frequency. Payment
                card details are processed securely by Stripe and are never
                stored on our servers.
              </li>
            </ul>

            {/* 2. How We Use Your Information */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              2. How We Use Your Information
            </h2>
            <p style={paragraphStyle}>
              We use your personal information for the following purposes:
            </p>
            <ul style={listStyle}>
              <li>
                Processing event registrations and sending event-related updates
              </li>
              <li>
                Processing donations and issuing tax-deductible receipts
              </li>
              <li>
                Coordinating volunteer opportunities and schedules
              </li>
              <li>Responding to your inquiries and messages</li>
              <li>
                Sending newsletters and updates about our programs and events
                (with your consent)
              </li>
              <li>Improving our website and services</li>
            </ul>

            {/* 3. Payment Processing */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              3. Payment Processing
            </h2>
            <p style={paragraphStyle}>
              All donations are processed through{" "}
              <strong style={{ color: "#1a1a1a" }}>Stripe</strong>, a
              PCI-DSS Level 1 certified payment processor. When you make a
              donation, your payment card information is sent directly to
              Stripe&apos;s secure servers. We never receive, store, or have
              access to your full card number, expiration date, or CVC.
            </p>
            <p style={paragraphStyle}>
              For recurring donations (monthly, quarterly, or annual), Stripe
              securely stores your payment information and automatically
              processes charges according to your selected frequency. You can
              cancel your recurring donation at any time by contacting us at{" "}
              <a
                href="mailto:info@chicagoindianarts.org"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                info@chicagoindianarts.org
              </a>
              .
            </p>

            {/* 4. Data Sharing */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              4. Data Sharing & Third-Party Services
            </h2>
            <p style={paragraphStyle}>
              We do not sell, rent, or trade your personal information to any
              third parties. We use the following trusted services to operate
              our platform:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Stripe:</strong> For
                secure payment processing of donations.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Google Workspace:</strong>{" "}
                For internal record-keeping of form submissions and email
                communications.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Google Analytics:</strong>{" "}
                For understanding website traffic and user behavior (anonymized
                data).
              </li>
            </ul>
            <p style={paragraphStyle}>
              Each of these services has their own privacy policies governing
              how they handle data. We encourage you to review their policies
              for more information.
            </p>

            {/* 5. Cookies & Analytics */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              5. Cookies & Analytics
            </h2>
            <p style={paragraphStyle}>
              Our website may use cookies and similar technologies to enhance
              your browsing experience. These include:
            </p>
            <ul style={listStyle}>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Essential Cookies:</strong>{" "}
                Necessary for website functionality and security.
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Analytics Cookies:</strong>{" "}
                Used by Google Analytics to collect anonymized data about how
                visitors use our website, helping us improve our content and
                services.
              </li>
            </ul>
            <p style={paragraphStyle}>
              You can control cookie settings through your browser preferences.
              Disabling certain cookies may affect website functionality.
            </p>

            {/* 6. Data Security */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              6. Data Security
            </h2>
            <p style={paragraphStyle}>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. This includes secure
              server infrastructure, encrypted data transmission (SSL/TLS), and
              restricted access to personal data by authorized personnel only.
            </p>

            {/* 7. Data Retention */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              7. Data Retention
            </h2>
            <p style={paragraphStyle}>
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, including
              legal, accounting, or reporting requirements. Donation records are
              retained as required by IRS regulations for 501(c)(3)
              organizations. You may request deletion of your data at any time
              by contacting us.
            </p>

            {/* 8. Your Rights */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              8. Your Rights
            </h2>
            <p style={paragraphStyle}>You have the right to:</p>
            <ul style={listStyle}>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Access</strong> the
                personal information we hold about you
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Correct</strong> any
                inaccurate or incomplete information
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Delete</strong> your
                personal information (subject to legal retention requirements)
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Opt out</strong> of
                marketing communications at any time
              </li>
              <li>
                <strong style={{ color: "#1a1a1a" }}>Cancel</strong> recurring
                donations by contacting us
              </li>
            </ul>
            <p style={paragraphStyle}>
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@chicagoindianarts.org"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                info@chicagoindianarts.org
              </a>
              . We will respond to your request within 30 days.
            </p>

            {/* 9. Children's Privacy */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              9. Children&apos;s Privacy
            </h2>
            <p style={paragraphStyle}>
              Our website is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe we have inadvertently collected information from a
              child, please contact us immediately and we will promptly delete
              it.
            </p>

            {/* 10. Photography at Events */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              10. Photography & Media at Events
            </h2>
            <p style={paragraphStyle}>
              By attending Chicago Indian Arts events, you acknowledge that
              photography and video recording may take place. These images may
              be used for promotional purposes on our website, social media, and
              marketing materials. If you do not wish to be photographed, please
              inform our event staff. For more details, please refer to our{" "}
              <Link
                href="/terms"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                Terms & Conditions
              </Link>
              .
            </p>

            {/* 11. Changes to This Policy */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              11. Changes to This Policy
            </h2>
            <p style={paragraphStyle}>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal reasons. Any changes will be
              posted on this page with an updated &quot;Last Updated&quot; date.
              We encourage you to review this policy periodically.
            </p>

            {/* 12. Contact */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              12. Contact Us
            </h2>
            <p style={paragraphStyle}>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or your personal data, please contact us:
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
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
