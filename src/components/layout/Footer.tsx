"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

const programLinks = [
  { label: "Vaarta", href: "#" },
  { label: "Prasang", href: "#" },
  { label: "Varnam", href: "#" },
  { label: "Register", href: "/register" },
];

const orgLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/chicagoindianarts", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587009930194", icon: Facebook },
  { label: "Twitter", href: "https://x.com/chiIndianArts", icon: Twitter },
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
            Celebrating and preserving the rich cultural heritage of India through
            literature, fashion, and photography. Join us in our mission to create
            meaningful cultural exchanges and artistic experiences.
          </p>
        </div>

        {/* Links Group - Programs & Organization closer together */}
        <div data-section="footer-links" className="flex flex-col sm:flex-row" style={{ gap: "5rem" }}>
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
        <div>&copy; 2026 Chicago Indian Collective Arts. All rights reserved.</div>
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
