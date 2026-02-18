"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";

const programLinks = [
  { label: "Vaarta", subtitle: "Literature Festival", href: "/vaarta" },
  { label: "Prasang", subtitle: "Fashion Innovation", href: "/prasang" },
  { label: "Varnam", subtitle: "Photography & Wildlife", href: "/varnam" },
];

const aboutLinks = [
  { label: "Our Story", subtitle: "Mission & Journey", href: "/about" },
  { label: "Our Team", subtitle: "Leadership & Board", href: "/team" },
  { label: "Community Partners", subtitle: "Collaborations", href: "/community-partners" },
];

const pressLinks = [
  { label: "Media Accreditation", subtitle: "Press Credentials", href: "/media-accreditation" },
  { label: "Press Releases", subtitle: "News & Updates", href: "/press-releases" },
];

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Highlights", href: "#highlights" },
];

/* ── Reusable desktop dropdown ── */
function DesktopDropdown({
  label,
  links,
  isOpen,
  setIsOpen,
  scrolled,
}: {
  label: string;
  links: { label: string; subtitle: string; href: string }[];
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  scrolled: boolean;
}) {
  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="text-[0.85rem] font-medium tracking-[0.5px] transition-colors duration-300 cursor-pointer flex items-center"
        style={{
          color: scrolled ? "#2d2d2d" : "#ffffff",
          gap: "0.3rem",
          textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.7)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = scrolled ? "#2d2d2d" : "#ffffff")
        }
      >
        {label}
        <ChevronDown size={14} />
      </button>

      <AnimatePresence>
        {isOpen && (
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
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
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
                    {item.label}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#999" }}>
                    {item.subtitle}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

/* ── Reusable mobile expandable section ── */
function MobileDropdownSection({
  label,
  links,
  isOpen,
  toggle,
  delay,
  onClose,
}: {
  label: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  toggle: () => void;
  delay: number;
  onClose: () => void;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <button
        onClick={toggle}
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
        {label}
        <ChevronDown size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden", marginTop: "1rem" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "1.1rem",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Desktop dropdown states
  const [programsOpen, setProgramsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pressOpen, setPressOpen] = useState(false);

  // Mobile dropdown states
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobilePressOpen, setMobilePressOpen] = useState(false);

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

  const closeMobile = () => {
    setIsMobileOpen(false);
    setMobileProgramsOpen(false);
    setMobileAboutOpen(false);
    setMobilePressOpen(false);
  };

  const scrollToSection = (href: string) => {
    closeMobile();
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Navigate to homepage with hash if section not found on current page
        window.location.href = "/" + href;
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
          <Link href="/" data-section="nav-logo" className="relative" style={{ display: "block", height: "75px", width: "340px" }}>
            <Image
              src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770980107/CIA-logo-white_gaxtwl.webp"
              alt="Chicago Indian Arts"
              fill
              className="object-contain transition-opacity duration-300"
              style={{
                objectPosition: "left center",
                opacity: scrolled ? 0 : 1,
              }}
              priority
            />
            <Image
              src="https://res.cloudinary.com/dom3oj7ya/image/upload/v1770979601/CIA-logo-black_snmlaz.webp"
              alt="Chicago Indian Arts"
              fill
              className="object-contain transition-opacity duration-300"
              style={{
                objectPosition: "left center",
                opacity: scrolled ? 1 : 0,
              }}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center" style={{ gap: "2rem", listStyle: "none" }}>
            {/* Programs Dropdown */}
            <DesktopDropdown
              label="Programs"
              links={programLinks}
              isOpen={programsOpen}
              setIsOpen={setProgramsOpen}
              scrolled={scrolled}
            />

            {/* Events & Highlights */}
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-[0.85rem] font-medium tracking-[0.5px] transition-colors duration-300 cursor-pointer"
                  style={{
                    color: scrolled ? "#2d2d2d" : "#ffffff",
                    textShadow: scrolled ? "none" : "0 1px 8px rgba(0,0,0,0.7)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = scrolled ? "#2d2d2d" : "#ffffff")
                  }
                >
                  {link.label}
                </button>
              </li>
            ))}

            {/* About Us Dropdown */}
            <DesktopDropdown
              label="About Us"
              links={aboutLinks}
              isOpen={aboutOpen}
              setIsOpen={setAboutOpen}
              scrolled={scrolled}
            />

            {/* Press & Media Dropdown */}
            <DesktopDropdown
              label="Press & Media"
              links={pressLinks}
              isOpen={pressOpen}
              setIsOpen={setPressOpen}
              scrolled={scrolled}
            />
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
              style={{
                color: scrolled ? "#1a1a1a" : "#ffffff",
                filter: scrolled ? "none" : "drop-shadow(0 1px 4px rgba(0,0,0,0.7))",
              }}
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
            style={{ backgroundColor: "#1a1a1a", overflowY: "auto" }}
          >
            {/* Close Button */}
            <button
              onClick={closeMobile}
              className="absolute cursor-pointer"
              style={{ top: "1.5rem", right: "1.5rem", color: "#ffffff" }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <ul className="flex flex-col items-center" style={{ gap: "1.5rem", listStyle: "none", padding: "4rem 1.5rem 2rem" }}>
              {/* Programs */}
              <MobileDropdownSection
                label="Programs"
                links={programLinks}
                isOpen={mobileProgramsOpen}
                toggle={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                delay={0}
                onClose={closeMobile}
              />

              {/* Events & Highlights */}
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

              {/* About Us */}
              <MobileDropdownSection
                label="About Us"
                links={aboutLinks}
                isOpen={mobileAboutOpen}
                toggle={() => setMobileAboutOpen(!mobileAboutOpen)}
                delay={0.3}
                onClose={closeMobile}
              />

              {/* Press & Media */}
              <MobileDropdownSection
                label="Press & Media"
                links={pressLinks}
                isOpen={mobilePressOpen}
                toggle={() => setMobilePressOpen(!mobilePressOpen)}
                delay={0.4}
                onClose={closeMobile}
              />

              {/* Donate Button */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/donate"
                  onClick={closeMobile}
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
