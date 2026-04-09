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

const capsStyle = {
  fontSize: "0.9rem",
  color: "#555",
  lineHeight: 1.8,
  marginBottom: "1rem",
  fontWeight: 500,
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
                  Effective: January 1, 2026
                </p>
                <p style={{ fontSize: "0.8rem", color: "#999" }}>
                  Applicable to all users of chicagoindianarts.org
                </p>
              </div>
            </div>

            {/* Intro */}
            <p style={paragraphStyle}>
              <a
                href="https://www.chicagoindianarts.org/"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                https://www.chicagoindianarts.org/
              </a>{" "}
              (this &ldquo;Site&rdquo;) is owned and operated by Chicago Indian
              Collective Arts, NFP (&ldquo;CICA,&rdquo; &ldquo;we,&rdquo;
              &ldquo;our&rdquo; or &ldquo;us&rdquo;). CICA (DBA as Chicago Indian
              Arts) is an Illinois nonprofit organization with the goal to educate,
              preserve and promote the rich tapestry of Indian arts, literature,
              cinema, fashion, music and dance in the heart of Chicago &ndash;
              empowering voices, fostering cross cultural dialogue, and building
              vibrant platforms for community expression and creative exchange.
            </p>

            {/* Your Consent */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Your Consent to These Terms and Conditions
            </h2>
            <p style={paragraphStyle}>
              Your use of this Site is subject to these Terms and Conditions
              (&ldquo;Terms and Conditions&rdquo;). By accessing or using this
              Site, you are agreeing to be bound by these Terms and Conditions. If
              you do not agree to these Terms and Conditions, you may not use this
              Site.
            </p>

            {/* Changes */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Changes to These Terms and Conditions
            </h2>
            <p style={paragraphStyle}>
              As we add new features and functionality to this Site, we may need to
              update or revise these Terms and Conditions. We reserve the right to
              do so, at any time and without prior notice, by posting the revised
              version on this Site. These changes will be effective as of the date
              we post the revised version on this Site. By accessing or using this
              Site following any such change, you are agreeing to be bound by the
              revised Terms and Conditions. For this reason, it is important for
              you to review our Terms and Conditions on a regular basis.
            </p>
            <p style={paragraphStyle}>
              You may view or print the current version of these Terms and
              Conditions at any time by clicking on the link marked &ldquo;Terms
              and Conditions&rdquo; at the bottom of each page of this Site.
            </p>

            {/* Copyright Compliance */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Copyright Compliance
            </h2>
            <p style={paragraphStyle}>
              CICA respects the intellectual property rights of others. Its policy
              is to respond to any claim that Content posted on the Site infringes
              on the copyright or other intellectual property rights
              (&ldquo;infringement&rdquo;) of any person or entity.
            </p>
            <p style={paragraphStyle}>
              If a copyright owner or a person or entity authorized on behalf of
              one, believes that the copyrighted work has been copied in a way that
              constitutes copyright infringement, please submit such a claim via
              email to{" "}
              <a
                href="mailto:info@chicagoindianarts.org"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                info@chicagoindianarts.org
              </a>{" "}
              with the subject line &ldquo;Copyright Infringement&rdquo; and
              include in the claim a detailed description of the alleged
              Infringement as detailed below, under &ldquo;DMCA Notice and
              Procedure for Copyright Infringement Claims.&rdquo;
            </p>
            <p style={paragraphStyle}>
              Such claimants may be held accountable for damages (including costs
              and attorneys&rsquo; fees) for misrepresentation or bad-faith claims
              on the infringement of any Content found on and/or through the Site
              on a copyright.
            </p>

            {/* DMCA */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              DMCA Notice and Procedure for Copyright Infringement Claims
            </h2>
            <p style={paragraphStyle}>
              Claimants may submit a notification pursuant to the Digital
              Millennium Copyright Act (DMCA) by providing CICA with the following
              information in writing (See 17 U.S.C Section 512(c)(3) for further
              detail):
            </p>
            <ul style={listStyle}>
              <li>
                an electronic or physical signature of the person authorized to act
                on behalf of the owner of the copyright&rsquo;s interest;
              </li>
              <li>
                a description of the copyrighted work that the owner claims has
                been infringed, including the URL (i.e., web page address) of the
                location where the copyrighted work exists or a copy of the
                copyrighted work;
              </li>
              <li>
                identification of the URL or other specific location on the Site
                where the material claimed as is infringing is located;
              </li>
              <li>
                owner or representative&rsquo;s address, telephone number, and
                email address;
              </li>
              <li>
                a statement by the claimant that they have a good faith belief that
                the disputed use is not authorized by the copyright owner, its
                agent, or the law;
              </li>
              <li>
                a statement by the claimant, made under penalty of perjury, that
                the above information in their notice is accurate and that they are
                the copyright owner or authorized to act on the copyright
                owner&rsquo;s behalf.
              </li>
            </ul>

            {/* Privacy Policy reference */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Our Site Privacy Policy
            </h2>
            <p style={paragraphStyle}>
              Our Site Privacy Policy (&ldquo;Privacy Policy&rdquo;) describes how
              we protect your personal information when you use this Site. Our
              Online Privacy Policy is part of and is incorporated into these Terms
              and Conditions. You may view or print the current version of our
              Privacy Policy at any time by clicking on the link marked
              &ldquo;Privacy Policy&rdquo; at the bottom of each page of this
              Site. The full Privacy Policy is found further below.
            </p>

            {/* Ownership of Site and Content */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Ownership of Site and Content
            </h2>
            <p style={paragraphStyle}>
              As used in these Terms and Conditions, the term &ldquo;Content&rdquo;
              means all of the software and code that comprise and operate this
              Site, and all of the text, photographs, images, illustrations, data,
              graphics, designs, audio, video and audio-video clips, and other
              materials provided through this Site. CICA and its licensors own all
              right, title and interest in the Content, including all copyrights.
              In addition, the entire Content of this Site is protected as a
              compilation under U.S. and international copyright laws and treaties,
              and CICA owns the copyright in the compilation, including the
              collection, assembly, selection, coordination and arrangement of the
              Content of this Site.
            </p>
            <p style={paragraphStyle}>
              We hereby grant you a limited, revocable license to download and
              print copies of any portion of the Content of this Site to which you
              have properly gained access, but only on behalf of your company, if
              you are accessing this Site on behalf of your company, or for your
              own personal, non-commercial use, and only if you do not remove,
              modify or obscure any copyright, trademark, or other proprietary
              notices. The foregoing license is subject to these Terms and
              Conditions and does not include the right to use any data mining,
              robots or similar data gathering or extraction methods nor the right
              to &ldquo;harvest&rdquo; email addresses. This license is revocable
              at any time without notice and with or without cause. You may not
              permit others to copy, distribute, perform or display publicly,
              prepare derivative works based on, broadcast, exploit or use any part
              of the Content on this Site except as expressly provided in these
              Terms and Conditions without our prior written permission. Nothing in
              these Terms and Conditions shall be construed as transferring any
              right, title or interest in this Site or its Content to you or anyone
              else, except the limited license to use this Site and its Content on
              the terms expressly set forth herein.
            </p>

            {/* Third Party Content */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Third Party Content
            </h2>
            <p style={paragraphStyle}>
              Some of the information, articles and other materials available
              through this Site are provided to CICA by third parties. These
              third-party materials are provided for your interest and convenience
              only. We do not endorse these materials nor the third parties who
              supply them to us, nor do we warrant or represent that these
              materials are current, accurate, complete or reliable.
            </p>

            {/* Trademarks */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Trademarks
            </h2>
            <p style={paragraphStyle}>
              This Site contains registered and unregistered trademarks of CICA and
              third parties (&ldquo;Trademarks&rdquo;). You may not use any
              Trademarks displayed on this Site without our or the trademark
              owners&rsquo; (as appropriate) prior written permission.
            </p>

            {/* Data Collection */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Data Collection and Use
            </h2>
            <p style={paragraphStyle}>
              When visitors leave comments on the Site, we collect the data shown
              in the comments form, and also the visitor&rsquo;s IP address and
              browser user agent string to help spam detection. An anonymized
              string created from your email address (also called a hash) may be
              provided to the Gravatar service to see if you are using it. The
              Gravatar service privacy policy is available here:{" "}
              <a
                href="https://automattic.com/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4af37", textDecoration: "none" }}
              >
                https://automattic.com/privacy/
              </a>
              . After approval of your comment, your profile picture is visible to
              the public in the context of your comment.
            </p>
            <p style={paragraphStyle}>
              The only exception to keeping your identity private would occur if we
              learn that you intend to harm yourself or others. We must report that
              to the authorities.
            </p>
            <p style={paragraphStyle}>
              Research conducted under CICA may result in discoveries that may lead
              to the creation of intellectual property and even products with
              commercial value. Your personally identifying information (PII) will
              not be associated with any intellectual property or products. The
              discoveries and products will be the property of the discoverer. You
              will not receive any commercial profits.
            </p>

            {/* Your Feedback */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Your Feedback
            </h2>
            <p style={paragraphStyle}>
              We welcome your comments, feedback, suggestions, and other
              communications regarding this Site, including your ideas for new
              features and other ways that we can make this Site more useful to you
              (collectively, &ldquo;Feedback&rdquo;). Note, however, that any
              Feedback you provide to us through this Site will be owned
              exclusively by CICA. Your submission of Feedback will constitute an
              assignment to us of all right, title and interest in your Feedback,
              including all worldwide copyrights and all other intellectual property
              rights in your Feedback. We will have the right to reduce to
              practice, exploit, make, use, copy, disclose, display or perform
              publicly, distribute, improve and prepare derivative works based on
              any Feedback you submit for any purpose whatsoever, without
              restriction and without compensating you in any way. For this reason,
              we ask that you not send us any Feedback that you do not wish to
              assign to us.
            </p>

            {/* Your Obligations */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Your Obligations
            </h2>
            <p style={paragraphStyle}>
              If you wish to register on the Site, you will be required to provide
              certain personal information to us. You agree to (a) provide true,
              accurate, current and complete information about yourself as prompted
              in the applicable page, (b) maintain and promptly update your
              information to keep it true, accurate, current and complete and (c)
              the terms of our Privacy Policy.
            </p>
            <p style={paragraphStyle}>
              You agree to use the Site in a manner consistent with any and all
              applicable laws, rules and regulations. You agree not to upload or
              transmit to or through the Site any computer viruses, trojan horses,
              worms or anything else designed to interfere with, interrupt or
              disrupt the normal operating procedures of a computer. Any
              unauthorized modification to, tampering with or change to any
              information, or any interference with the availability of or access
              to the Site is strictly prohibited. We reserve all rights and
              remedies available to us including reporting any breach to the
              relevant law enforcement authorities and co-operating with those
              authorities by disclosing your identity to them.
            </p>

            {/* Disclaimer of Warranties */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Disclaimer of Warranties
            </h2>
            <p style={capsStyle}>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW (I) THIS SITE AND
              ALL OF THE CONTENT, PRODUCTS AND SERVICES MADE AVAILABLE THROUGH
              THIS SITE ARE PROVIDED ON AN &ldquo;AS IS,&rdquo; &ldquo;AS
              AVAILABLE&rdquo; BASIS, WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY
              KIND; AND (II) CICA DISCLAIMS ANY AND ALL REPRESENTATIONS AND
              WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, WITH RESPECT TO
              THIS SITE AND THE CONTENT, PRODUCTS AND SERVICES MADE AVAILABLE
              THROUGH THIS SITE.
            </p>
            <p style={capsStyle}>
              WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE DISCLAIM ALL
              REPRESENTATIONS AND WARRANTIES, EXPRESS, IMPLIED OR STATUTORY, (A) OF
              TITLE, NON-INFRINGEMENT, MERCHANTABILITY, SATISFACTORY QUALITY AND
              FITNESS FOR A PARTICULAR PURPOSE; (B) ARISING FROM COURSE OF DEALING
              OR COURSE OF PERFORMANCE; (C) RELATING TO THE SECURITY OF THIS SITE;
              (D) THAT THE CONTENT OF THIS SITE IS ACCURATE, COMPLETE OR CURRENT;
              AND (E) THAT THIS SITE WILL OPERATE WITHOUT INTERRUPTION OR ERROR.
            </p>
            <p style={capsStyle}>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES.
              ACCORDINGLY, SOME OF THE ABOVE DISCLAIMERS OF WARRANTIES MAY NOT
              APPLY TO YOU.
            </p>

            {/* Limitation of Liability */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Limitation of Liability
            </h2>
            <p style={capsStyle}>
              CICA IS NOT RESPONSIBLE OR LIABLE IN ANY MANNER FOR ANY USER
              POSTINGS. UNDER NO CIRCUMSTANCES, SHALL CICA OR ITS PARTNERS,
              EMPLOYEES, AGENTS, VENDORS, LICENSORS OR SUPPLIERS, BE LIABLE TO YOU
              OR TO ANY THIRD PARTY FOR ANY LOSSES OR DAMAGES ARISING OUT OF OR IN
              CONNECTION WITH YOUR USE OF OR INABILITY TO USE THIS SITE, INCLUDING,
              IN CONNECTION WITH ANY CONTENT, PRODUCTS OR SERVICES RELATED TO OR
              PROVIDED THROUGH THIS SITE.
            </p>
            <p style={capsStyle}>
              THIS IS A COMPREHENSIVE LIMITATION OF LIABILITY THAT APPLIES TO ALL
              LOSSES AND DAMAGES OF ANY KIND (WHETHER DIRECT, INDIRECT, GENERAL,
              SPECIAL, CONSEQUENTIAL, INCIDENTAL, EXEMPLARY OR OTHERWISE, INCLUDING
              LOSS OF DATA, INCOME OR PROFITS), WHETHER THE CLAIM IS BASED ON
              CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR ANY OTHER
              LEGAL THEORY, EVEN IF AN AUTHORIZED REPRESENTATIVE OF CICA HAS BEEN
              ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES,
              AND WITHOUT REGARD TO THE EFFECTIVENESS OF OTHER REMEDIES.
            </p>
            <p style={capsStyle}>
              IF ANY PART OF THIS LIMITATION ON LIABILITY IS FOUND TO BE INVALID OR
              UNENFORCEABLE FOR ANY REASON, THEN THE AGGREGATE LIABILITY OF CICA
              (AND ANY OTHER PERSON OR ENTITY WHOSE LIABILITY WOULD OTHERWISE HAVE
              BEEN LIMITED) FOR LIABILITIES THAT OTHERWISE WOULD HAVE BEEN LIMITED
              SHALL NOT EXCEED $10.00.
            </p>
            <p style={capsStyle}>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF LIABILITY FOR
              CERTAIN TYPES OF DAMAGES. ACCORDINGLY, SOME OF THE FOREGOING
              LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.
            </p>

            {/* Modification and Discontinuation */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Modification and Discontinuation
            </h2>
            <p style={paragraphStyle}>
              We reserve the right at any time to modify, edit, delete, suspend or
              discontinue, temporarily or permanently, the Site (or any portion
              thereof) with or without notice. You agree that we will not be liable
              to you or to any third party for any such modification, editing,
              deletion, suspension or discontinuance of the Site. Any of the
              material (including the Content) on the Site may be out of date at
              any given time, and we are under no obligation to update such
              material.
            </p>

            {/* Links to this Site */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Links to this Site
            </h2>
            <p style={paragraphStyle}>
              You may link to our home page, provided you do so in a way that is
              fair and legal and does not damage our reputation or take advantage of
              it, but you must not establish a link in such a way as to suggest any
              form of association, approval or endorsement on our part where none
              exists.
            </p>
            <p style={paragraphStyle}>
              You must not establish a link to this Site from any website that is
              not owned by you.
            </p>
            <p style={paragraphStyle}>
              This Site must not be framed on any other site, nor may you create a
              link to any part of this Site other than the home page. We reserve
              the right to withdraw linking permission without notice. The website
              from which you are linking must comply in all respects with the
              content standards set out in these Terms and Conditions.
            </p>

            {/* Links from this Site */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Links from this Site
            </h2>
            <p style={paragraphStyle}>
              This Site may contain links to websites operated by third parties. We
              do not control these sites and do not endorse or assume any
              responsibility or liability for the information, products and services
              provided through these sites. Before you use any site operated by a
              third party, you should review the applicable terms of use and
              policies. If you access a third-party site through this Site, you do
              so at your own risk.
            </p>

            {/* Interpretation */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Interpretation
            </h2>
            <p style={paragraphStyle}>
              As used in these Terms and Conditions, the term &ldquo;including&rdquo;
              means &ldquo;including, but not limited to.&rdquo;
            </p>

            {/* Waiver */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Waiver
            </h2>
            <p style={paragraphStyle}>
              Our failure at any time to require performance of any provision of
              these Terms and Conditions or to exercise any right provided for
              herein or by law shall not be deemed a waiver of such provision or
              such right. All waivers must be in writing and signed by an authorized
              representative of CICA. Unless the written waiver contains an express
              statement to the contrary, no waiver by us of any breach of any
              provision of these Terms and Conditions or of any right provided for
              herein or by law shall be construed as a waiver of any continuing or
              succeeding breach of such provision, a waiver of the provision itself,
              or a waiver of any right under these Terms and Conditions.
            </p>

            {/* Severability */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Severability
            </h2>
            <p style={paragraphStyle}>
              If any provision of these Terms and Conditions is held by a court of
              competent jurisdiction to be contrary to law, such provision shall be
              changed and interpreted so as to best accomplish the objectives of the
              original provision to the fullest extent allowed by law and the
              remaining provisions of these Terms and Conditions shall remain in
              full force and effect.
            </p>

            {/* Governing Law */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Governing Law, Jurisdiction and Venue
            </h2>
            <p style={paragraphStyle}>
              These Terms and Conditions shall be governed under the laws of the
              State of Illinois without regard to its conflicts of law provisions.
              All actions or proceedings arising out of or relating to these Terms
              and Conditions shall be venued exclusively in state or federal court
              in Illinois. You hereby irrevocably consent and submit to the personal
              jurisdiction of said courts for all such purposes.
            </p>

            {/* Entire Agreement */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Entire Agreement
            </h2>
            <p style={paragraphStyle}>
              These Terms and Conditions contain the entire understanding and
              agreement between you and us with respect to this Site (including the
              use of the Content) and supersede all previous communications,
              negotiations and agreements, whether oral, written, or electronic
              between you and us with respect to this Site. Nothing in these Terms
              and Conditions excludes or limits our liability for fraud or
              fraudulent misrepresentation which such a limitation would be
              unenforceable as a matter of law.
            </p>

            {/* Contact */}
            <h2 className="font-heading" style={sectionHeadingStyle}>
              Contact Us
            </h2>
            <p style={paragraphStyle}>
              If you have any questions about these Terms &amp; Conditions, please
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
