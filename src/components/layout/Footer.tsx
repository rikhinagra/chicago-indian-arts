"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const programLinks = [
  { label: "Vaarta", href: "/vaarta" },
  { label: "Prasang", href: "/prasang" },
  { label: "Varnam", href: "/varnam" },
  { label: "Register", href: "/register" },
];

const orgLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Community Partners", href: "/community-partners" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
];

const pressMediaLinks = [
  { label: "Media Accreditation", href: "/media-accreditation" },
  { label: "Press Releases", href: "/press-releases" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/chicagoindianarts", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588363585494", icon: Facebook },
  { label: "X", href: "https://x.com/chiIndianArts", icon: XIcon },
];

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block"
      style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: "0.85rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "#d4af37";
        e.currentTarget.style.paddingLeft = "5px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
        e.currentTarget.style.paddingLeft = "0px";
      }}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer data-section="footer-wrap" className="text-white" style={{ backgroundColor: "#1a1a1a", padding: "3.5rem 3rem 1.5rem" }}>
      <div
        data-section="footer-grid" className="flex flex-col md:flex-row"
        style={{ justifyContent: "space-between", gap: "3rem", marginBottom: "2rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Brand */}
        <div style={{ maxWidth: "450px" }}>
          <h3
            className="font-heading font-semibold"
            style={{ fontSize: "1.35rem", marginBottom: "0.8rem", letterSpacing: "2px" }}
          >
            CHICAGO INDIAN ARTS
          </h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: "0.9rem" }}>
            Celebrating and preserving the rich cultural heritage of India and South
            Asian communities through literature, fashion, and photography. Join us in
            our mission to create meaningful cultural exchanges and artistic experiences.
          </p>
        </div>

        {/* Links Group - Programs & Organization closer together */}
        <div data-section="footer-links" className="flex flex-col sm:flex-row" style={{ gap: "3rem" }}>
          {/* Programs */}
          <div>
            <h4 style={{ fontSize: "0.8rem", marginBottom: "1.2rem", fontWeight: 600, letterSpacing: "1px", color: "#d4af37" }}>
              Programs
            </h4>
            <ul style={{ listStyle: "none" }}>
              {programLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.8rem" }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 style={{ fontSize: "0.8rem", marginBottom: "1.2rem", fontWeight: 600, letterSpacing: "1px", color: "#d4af37" }}>
              Organization
            </h4>
            <ul style={{ listStyle: "none" }}>
              {orgLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.8rem" }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Press & Media */}
          <div>
            <h4 style={{ fontSize: "0.8rem", marginBottom: "1.2rem", fontWeight: 600, letterSpacing: "1px", color: "#d4af37" }}>
              Press & Media
            </h4>
            <ul style={{ listStyle: "none" }}>
              {pressMediaLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "0.8rem" }}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        data-section="footer-bottom" className="flex flex-col sm:flex-row justify-between items-center"
        style={{
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.8rem",
          gap: "1rem",
          maxWidth: "1600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="text-center sm:text-left">
          <div>&copy; 2026 Chicago Indian Collective Arts. All rights reserved.</div>
          <div style={{ marginTop: "0.5rem", fontSize: "0.78rem" }}>
            <Link
              href="/privacy-policy"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "rgba(255,255,255,0.3)", margin: "0 0.5rem" }}>|</span>
            <Link
              href="/terms"
              style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              Terms & Conditions
            </Link>
          </div>
          <div style={{ marginTop: "0.4rem", fontSize: "0.75rem", opacity: 0.6 }}>
            Designed & Developed by{" "}
            <a
              href="https://www.sachhsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4af37", textDecoration: "none", transition: "opacity 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.8"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              SACHHSOFT
            </a>
          </div>
        </div>
        <div className="flex" style={{ gap: "1.5rem" }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#d4af37";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
