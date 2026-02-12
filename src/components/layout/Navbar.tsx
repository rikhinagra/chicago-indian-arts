"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const programLinks = [
  { label: "Vaarta", subtitle: "Literature Festival", href: "/vaarta" },
  { label: "Prasang", subtitle: "Fashion Innovation", href: "/prasang" },
  { label: "Varnam", subtitle: "Photography & Wildlife", href: "/varnam" },
];

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Highlights", href: "#highlights" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

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
    setMobileProgramsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = href;
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
            {/* Programs Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                className="text-[0.85rem] font-medium tracking-[0.5px] transition-colors duration-300 cursor-pointer flex items-center"
                style={{ color: scrolled ? "#2d2d2d" : "#ffffff", gap: "0.3rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled ? "#2d2d2d" : "#ffffff")
                }
              >
                Programs
                <ChevronDown size={14} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {programsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                    style={{
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "0.75rem",
                      minWidth: "220px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ffffff",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        border: "1px solid rgba(0,0,0,0.06)",
                        overflow: "hidden",
                      }}
                    >
                      {programLinks.map((program) => (
                        <Link
                          key={program.label}
                          href={program.href}
                          className="block"
                          style={{
                            padding: "0.85rem 1.2rem",
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                            borderBottom: "1px solid rgba(0,0,0,0.04)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                          }}
                        >
                          <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "0.15rem" }}>
                            {program.label}
                          </div>
                          <div style={{ fontSize: "0.72rem", color: "#999" }}>
                            {program.subtitle}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other Nav Links */}
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
              href="/donate"
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
              Donate
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
              {/* Programs with sub-links on mobile */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                className="text-center"
              >
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="font-heading font-light cursor-pointer flex items-center"
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "1.8rem",
                    letterSpacing: "1px",
                    background: "none",
                    border: "none",
                    transition: "color 0.3s ease",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                >
                  Programs
                  <ChevronDown size={20} />
                </button>

                <AnimatePresence>
                  {mobileProgramsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden", marginTop: "1rem" }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {programLinks.map((program) => (
                          <Link
                            key={program.label}
                            href={program.href}
                            onClick={() => setIsMobileOpen(false)}
                            style={{
                              color: "rgba(255,255,255,0.6)",
                              fontSize: "1.1rem",
                              textDecoration: "none",
                              transition: "color 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                          >
                            {program.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Other Nav Links */}
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.1 }}
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
                <Link
                  href="/donate"
                  onClick={() => setIsMobileOpen(false)}
                  className="uppercase font-semibold"
                  style={{
                    backgroundColor: "#cd5c5c",
                    color: "#ffffff",
                    padding: "0.8rem 2.5rem",
                    fontSize: "0.85rem",
                    letterSpacing: "1.5px",
                    border: "none",
                    marginTop: "1rem",
                    transition: "background-color 0.3s ease",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#cd5c5c")}
                >
                  Donate
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
