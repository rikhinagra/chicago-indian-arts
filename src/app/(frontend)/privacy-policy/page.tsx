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
            {/* Effective Date */}
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
                  Effective: January 1, 2026
                </p>
                <p style={{ fontSize: "0.8rem", color: "#999" }}>
                  Effective for all users of chicagoindianarts.org
                </p>
              </div>
            </div>

            {/* Introduction */}
            <p style={paragraphStyle}>
              <a
                href="https://www.chicagoindianarts.org/"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                https://www.chicagoindianarts.org/
              </a>{" "}
              (this &ldquo;Site&rdquo;) is owned and operated by Chicago Indian
              Collective Arts, NFP (&ldquo;CICA,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our&rdquo; or &ldquo;us&rdquo;). CICA is an Illinois nonprofit
              organization with the goal to educate, preserve and promote the rich
              tapestry of Indian arts, literature, cinema, fashion, music and dance
              in the heart of Chicago &ndash; empowering voices, fostering cross
              cultural dialogue, and building vibrant platforms for community
              expression and creative exchange.
            </p>
            <p style={paragraphStyle}>
              This Privacy Policy is part of the Terms and Conditions that govern
              your use of this Site. You may review our Terms and Conditions by
              clicking on the link at the bottom of each page of this Site.
            </p>

            {/* Scope */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Scope of this Privacy Policy
            </h2>
            <p style={paragraphStyle}>
              This Privacy Policy covers the &ldquo;personal information&rdquo; we
              collect through this Site. &ldquo;Personal information&rdquo; is
              information that identifies you personally, either alone or in
              combination with other information available to us.
            </p>

            {/* Your Consent */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Your Consent
            </h2>
            <p style={paragraphStyle}>
              Please read this Privacy Policy carefully. By accessing or using this
              Site, you are agreeing to the terms of this Privacy Policy. If you do
              not agree to the collection, use and disclosure of your personal
              information as set forth in this Privacy Policy, you may not use this
              Site.
            </p>

            {/* Privacy Notices */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Privacy Notices
            </h2>
            <p style={paragraphStyle}>
              This Privacy Policy may be supplemented or amended from time to time
              by &ldquo;privacy notices&rdquo; posted on this Site. Generally,
              privacy notices provide details about the personal information we
              collect on particular pages or particular areas of this Site, why we
              need that information, and choices you may have about the ways we use
              or share that information. Our privacy notices are part of this
              Privacy Policy.
            </p>

            {/* Changes to Privacy Policy */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Changes to This Privacy Policy
            </h2>
            <p style={paragraphStyle}>
              We reserve the right to update or revise this Privacy Policy at any
              time and without prior notice, by posting the revised version on this
              Site. The changes will be effective as of the date we post the
              revised version on this Site. They will apply only to the personal
              information we collect after we have posted the revised version. Your
              use of this Site following any such change constitutes your consent to
              the terms of the revised Privacy Policy. For this reason, it is
              important to review this Privacy Policy regularly.
            </p>
            <p style={paragraphStyle}>
              You may access the current version of this Privacy Policy at any time
              by clicking on the link marked &ldquo;Privacy Policy&rdquo; at the
              bottom of each page of this Site. For your convenience, we will post
              a notice at the top of this Privacy Policy for at least 60 days after
              we revise this Privacy Policy to alert you to the changes we have
              made.
            </p>

            {/* What Personal Information */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              What Personal Information Do We Collect Through This Site?
            </h2>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Information You Provide.</strong>{" "}
              We collect the personal information you knowingly provide (using your
              mouse and keyboard) when you use this Site. The information we collect
              depends on how you use this Site. Specifically, the purpose of the
              Site involves you providing various types of information as described
              in the Terms and Conditions. This sharing of information is fully at
              the discretion of the users of the Site and, pursuant to the
              limitation of liability and disclaimer language in the Terms and
              Conditions to the Site, CICA accepts no liability for the possible
              undesired disclosure of such information due to any issue with the
              Site or otherwise.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>
                Information Sent to Us by Your Web Browser.
              </strong>{" "}
              We collect information that is sent to us automatically by your Web
              browser. This information typically includes your IP address, the
              identity of your Internet Service Provider, the name and version of
              your operating system, the name and version of your browser, the date
              and time of your visit, and the pages you visit. An &ldquo;IP
              address&rdquo; is a unique number that is automatically assigned to
              your computer when you connect to the Internet. Although it does not
              identify you by name, we treat your IP address as your personal
              information.
            </p>
            <p style={paragraphStyle}>
              Generally, we do not link the information provided by your browser to
              information that identifies you by name. We review our server logs
              &mdash; which contain visitors&rsquo; IP addresses &mdash; for
              security and fraud prevention purposes. If criminal activity is
              suspected, we may share our server logs and the personal information
              we have collected through this Site with the appropriate investigative
              authorities who could use that information to trace and identify
              individuals.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>
                Cookies and Similar Technologies.
              </strong>{" "}
              We use &ldquo;cookies&rdquo; and other Web technologies for a number
              of purposes, including:
            </p>
            <ul style={listStyle}>
              <li>
                to collect information about the ways visitors use this Site &mdash;
                for example, which pages they visit, which links they use, and how
                long they stay on each page;
              </li>
              <li>
                to support the features and functionality of this Site &mdash; for
                example, to save you the trouble of re-entering information already
                in our database or to prompt the settings you established on
                previous visits to this Site;
              </li>
              <li>to personalize your experience when you use this Site; and</li>
              <li>to remarket to you after you have left this Site.</li>
            </ul>
            <p style={paragraphStyle}>
              Generally, the information we collect using these Web technologies
              does not identify you personally. If you do not wish to allow cookies,
              you may set your browser to reject cookies or to alert you when a
              cookie is placed on your computer. Although you are not required to
              accept our cookies when you visit this Site, you will not be able to
              use all of the features and functionality of this Site if you set your
              browser to reject cookies.
            </p>

            {/* How Do We Use */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              How Do We Use the Personal Information We Collect Through This Site?
            </h2>
            <p style={paragraphStyle}>
              Generally, we use the personal information we collect through this
              Site:
            </p>
            <ul style={listStyle}>
              <li>to provide the information and services you request;</li>
              <li>to personalize your experience when you use this Site;</li>
              <li>to personalize our communications with you;</li>
              <li>
                to contact you with information and notices related to your use of
                this Site (unless you have chosen not to receive these
                communications);
              </li>
              <li>
                to make sure our mailing lists are accurate, current and do not
                contain multiple entries for the same individual;
              </li>
              <li>to better understand your needs and interests;</li>
              <li>
                to improve the content, functionality and usability of this Site;
              </li>
              <li>
                to deliver advertising or remarketing reminders through display
                networks encouraging users to return to the Site;
              </li>
              <li>to improve our marketing and promotional efforts; and</li>
              <li>for security and fraud-prevention purposes.</li>
            </ul>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Form Fill Features.</strong> You
              may use the site to submit forms, sign up for newsletters, and
              otherwise submit information to us for our use in answering your
              questions and concerns, enrolling you in our newsletter submission,
              and in otherwise communicating with you.
            </p>

            {/* How Do We Share */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              How Do We Share Your Personal Information?
            </h2>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Service Providers.</strong> We
              may share your personal information with companies that perform
              services on our behalf, such as credit card verification, online
              recruiting, and Web hosting service providers.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Co-Sponsored Events.</strong>{" "}
              Depending on your privacy preferences, we may contact you with
              information about seminars and other events sponsored by CICA. Some
              of these events may be co-sponsored with other organizations. In such
              cases, we may lend our mailing list to a co-sponsor so that all of
              the communications regarding the event can be processed centrally.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>
                Compliance With Laws and Protection of Our Rights and the Rights of
                Others.
              </strong>{" "}
              We may disclose personal information when we, in good faith, believe
              disclosure is appropriate to comply with the law or a legal
              obligation. We may also disclose personal information to prevent or
              investigate a possible crime, such as fraud or identity theft; to
              enforce or apply our Terms and Conditions or other agreements; or to
              protect our own rights or property or the rights, property or safety
              of our users or others.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Successors in Interest.</strong>{" "}
              Your personal information may be transferred to another entity that
              succeeds to all or part of our business, for example, if we
              reorganize our structure or transfer a significant portion of our
              assets or personnel to another entity. In such event, your personal
              information will continue to be protected by this Privacy Policy and
              the privacy preferences you have expressed to us.
            </p>

            {/* Your Choices */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Your Choices
            </h2>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>In General.</strong> We respect
              your right to make choices about the ways we collect, use and disclose
              your personal information. In most cases, we will ask you to indicate
              your choices at the time we collect your personal information.
            </p>
            <p style={paragraphStyle}>
              <strong style={{ color: "#1a1a1a" }}>Direct Marketing.</strong> We
              will not use your personal information for direct marketing purposes,
              without your consent. We will include an &ldquo;opt-out&rdquo; link
              in electronic newsletters and promotional emails we send you, so that
              you can inform us that you do not wish to receive such communications
              from us in the future. If at any time you wish to be removed from our
              mailing lists, please contact us using the contact information
              provided at the end of this Privacy Policy. Please provide your full
              name, postal address and email address so that we can locate you on
              our mailing lists. We will honor your request within a reasonable
              period of time and, in any event, within the time limits established
              by law.
            </p>

            {/* Access, Update or Correct */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              How Can You Access, Update or Correct Your Personal Information?
            </h2>
            <p style={paragraphStyle}>
              If you wish to access, update or correct your personal information,
              please contact us by email at{" "}
              <a
                href="mailto:info@chicagoindianarts.org"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                info@chicagoindianarts.org
              </a>{" "}
              or use the contact form at{" "}
              <a
                href="https://www.chicagoindianarts.org/contact"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                https://www.chicagoindianarts.org/contact
              </a>
              . We will respond to you within a reasonable time and, in any case,
              within the time limits established by applicable law. We may ask you
              for additional information to verify your identity. In most cases, we
              will provide access and correct or delete any inaccurate information
              you discover. In some cases, however, we may limit or deny your
              request if the law permits or requires us to do so or if we are unable
              to verify your identity.
            </p>

            {/* CCPA */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              CCPA Privacy Policy (Do Not Sell My Personal Information)
            </h2>
            <p style={paragraphStyle}>
              Under CCPA, among other rights, California consumers have the right
              to:
            </p>
            <ul style={listStyle}>
              <li>
                Request that a business that collects a consumer&rsquo;s personal
                data disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </li>
              <li>
                Request that a business delete any personal data about the consumer
                that a business has collected.
              </li>
              <li>
                Request that a business that sells a consumer&rsquo;s personal
                data, not sell the consumer&rsquo;s personal data.
              </li>
            </ul>
            <p style={paragraphStyle}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            {/* Security */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Security
            </h2>
            <p style={paragraphStyle}>
              We take reasonable precautions to provide a level of security
              appropriate to the sensitivity of the personal information we collect.
              Although we use reasonable measures to help protect your personal
              information against unauthorized use or disclosure, we cannot
              guarantee the security of information provided over the Internet or
              stored in our databases. Your transmissions are, therefore, at your
              own risk.
            </p>

            {/* Supplemental Information */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Supplemental Information
            </h2>
            <p style={paragraphStyle}>
              From time to time, we may supplement the personal information we
              collect through this Site with information from other sources,
              including information we collect from you through other channels. For
              example, if you provide us with contact information when you attend
              one of our seminars, we may use that information to update the contact
              information collected through this Site.
            </p>

            {/* Our Other Websites */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Our Other Websites
            </h2>
            <p style={paragraphStyle}>
              CICA operates other websites, including extranet sites we maintain
              for the convenience of our clients. This Privacy Policy applies only
              to this Site and not to any other site owned or operated by CICA.
            </p>

            {/* Third Party Websites */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Third Party Websites
            </h2>
            <p style={paragraphStyle}>
              This Site may contain links to websites owned by third parties. This
              Privacy Policy applies only to this Site and not to any third-party
              website.
            </p>

            {/* Special Notice */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Special Notice for Visitors Who Reside Outside the United States
            </h2>
            <p style={paragraphStyle}>
              Our Web servers and databases are located in the United States and in
              other countries. We may transfer your personal information among our
              offices and to our service providers and others located in the United
              States or other countries for the purposes described in this Privacy
              Policy. Different countries have different privacy laws and
              requirements, and some, including the United States, provide less
              legal protection for your personal information than others. Regardless
              of the country in which your personal information is collected, used,
              transferred or stored, information collected through this Site will be
              protected by the terms of this Privacy Policy and any other agreements
              between you and CICA.
            </p>

            {/* Governing Law */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Governing Law
            </h2>
            <p style={paragraphStyle}>
              This Privacy Policy is governed under the laws of the State of
              Illinois, USA, without regard to its conflicts of law provisions.
            </p>

            {/* Contact */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Contact Information
            </h2>
            <p style={paragraphStyle}>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
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

            {/* Terms Reference */}
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
                href="/terms"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
