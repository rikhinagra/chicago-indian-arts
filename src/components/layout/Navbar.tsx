"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Events", href: "#events" },
  { label: "Highlights", href: "#highlights" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = mounted && isScrolled;

  const scrollToSection = (href: string) => {
    setIsMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[1000] transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div data-section="nav-container" className="flex justify-between items-center" style={{ padding: "1rem 3rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
          {/* Logo */}
          <Link
            href="/"
            className="font-heading font-semibold text-[1.1rem] tracking-[2px] transition-colors duration-300"
            style={{ color: scrolled ? "#1a1a1a" : "#ffffff" }}
          >
            CHICAGO INDIAN ARTS
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center" style={{ gap: "2rem", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-[0.85rem] font-medium tracking-[0.5px] transition-colors duration-300 cursor-pointer"
                  style={{ color: scrolled ? "#2d2d2d" : "#ffffff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled ? "#2d2d2d" : "#ffffff")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#register");
              }}
              className="hidden sm:inline-block font-semibold uppercase transition-all duration-300 hover:-translate-y-px"
              style={{
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                padding: "0.55rem 1.5rem",
                fontSize: "0.8rem",
                letterSpacing: "1px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
            >
              Register
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden transition-colors duration-300"
              style={{ color: scrolled ? "#1a1a1a" : "#ffffff" }}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1001] lg:hidden flex flex-col items-center justify-center"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute cursor-pointer"
              style={{ top: "1.5rem", right: "1.5rem", color: "#ffffff" }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col items-center" style={{ gap: "2rem", listStyle: "none" }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="font-heading font-light cursor-pointer"
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "1.8rem",
                      letterSpacing: "1px",
                      background: "none",
                      border: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => scrollToSection("#register")}
                  className="uppercase font-semibold cursor-pointer"
                  style={{
                    backgroundColor: "#cd5c5c",
                    color: "#ffffff",
                    padding: "0.8rem 2.5rem",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    border: "none",
                    marginTop: "1rem",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
                >
                  Register Now
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
