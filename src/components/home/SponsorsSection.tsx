"use client";

import FadeInSection from "@/components/ui/FadeInSection";

const sponsors = [
  {
    name: "India Cultural Trust",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <circle cx="20" cy="25" r="12" stroke="#d4af37" strokeWidth="2" fill="none" />
        <circle cx="20" cy="25" r="6" fill="#d4af37" />
        <text x="40" y="22" fontSize="11" fontWeight="600" fontFamily="Montserrat, sans-serif" fill="#333">INDIA CULTURAL</text>
        <text x="40" y="36" fontSize="9" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#666" letterSpacing="2">TRUST</text>
      </svg>
    ),
  },
  {
    name: "Chai & Co",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <path d="M10 35 L20 10 L30 35 Z" stroke="#cd5c5c" strokeWidth="2" fill="none" />
        <circle cx="20" cy="22" r="4" fill="#cd5c5c" />
        <text x="40" y="22" fontSize="13" fontWeight="700" fontFamily="Montserrat, sans-serif" fill="#333">Chai &amp; Co</text>
        <text x="40" y="36" fontSize="8" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#999" letterSpacing="1">BEVERAGES</text>
      </svg>
    ),
  },
  {
    name: "Desi Arts Foundation",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <rect x="8" y="12" width="22" height="26" rx="3" stroke="#d4af37" strokeWidth="2" fill="none" />
        <line x1="14" y1="20" x2="24" y2="20" stroke="#d4af37" strokeWidth="1.5" />
        <line x1="14" y1="25" x2="24" y2="25" stroke="#d4af37" strokeWidth="1.5" />
        <line x1="14" y1="30" x2="20" y2="30" stroke="#d4af37" strokeWidth="1.5" />
        <text x="38" y="22" fontSize="10" fontWeight="600" fontFamily="Montserrat, sans-serif" fill="#333">DESI ARTS</text>
        <text x="38" y="36" fontSize="9" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#666" letterSpacing="1">FOUNDATION</text>
      </svg>
    ),
  },
  {
    name: "Rangoli Media",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <polygon points="20,8 26,18 37,20 29,28 31,39 20,33 9,39 11,28 3,20 14,18" stroke="#cd5c5c" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="23" r="4" fill="#cd5c5c" />
        <text x="44" y="22" fontSize="11" fontWeight="600" fontFamily="Montserrat, sans-serif" fill="#333">RANGOLI</text>
        <text x="44" y="36" fontSize="9" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#666" letterSpacing="1">MEDIA</text>
      </svg>
    ),
  },
  {
    name: "Spice Route Ventures",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <path d="M8 25 C8 25 14 10 20 10 C26 10 20 25 26 25 C32 25 26 40 32 40" stroke="#d4af37" strokeWidth="2" fill="none" />
        <circle cx="8" cy="25" r="3" fill="#d4af37" />
        <circle cx="32" cy="40" r="3" fill="#d4af37" />
        <text x="42" y="20" fontSize="9" fontWeight="600" fontFamily="Montserrat, sans-serif" fill="#333" letterSpacing="1">SPICE ROUTE</text>
        <text x="42" y="34" fontSize="10" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#666">Ventures</text>
      </svg>
    ),
  },
  {
    name: "Midwest Heritage Bank",
    icon: (
      <svg width="140" height="50" viewBox="0 0 140 50" fill="none" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }}>
        <rect x="8" y="14" width="24" height="22" rx="2" stroke="#333" strokeWidth="1.5" fill="none" />
        <line x1="14" y1="14" x2="14" y2="36" stroke="#333" strokeWidth="1" />
        <line x1="20" y1="14" x2="20" y2="36" stroke="#333" strokeWidth="1" />
        <line x1="26" y1="14" x2="26" y2="36" stroke="#333" strokeWidth="1" />
        <line x1="8" y1="14" x2="32" y2="14" stroke="#333" strokeWidth="2" />
        <text x="40" y="20" fontSize="9" fontWeight="600" fontFamily="Montserrat, sans-serif" fill="#333" letterSpacing="1">MIDWEST</text>
        <text x="40" y="34" fontSize="9" fontWeight="400" fontFamily="Montserrat, sans-serif" fill="#666" letterSpacing="0.5">HERITAGE BANK</text>
      </svg>
    ),
  },
];

export default function SponsorsSection() {
  return (
    <section data-section="sponsors" style={{ padding: "3rem 3rem", backgroundColor: "#faf8f3" }}>
      <FadeInSection className="text-center" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
        <h3
          className="uppercase"
          style={{
            fontSize: "0.8rem",
            letterSpacing: "2px",
            color: "#666666",
            marginBottom: "2rem",
          }}
        >
          Proudly Supported By
        </h3>
        <div
          data-section="sponsors-grid" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center"
          style={{ gap: "2rem" }}
        >
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group cursor-pointer"
              style={{
                filter: "grayscale(100%)",
                opacity: 0.6,
                transition: "all 0.3s ease",
                padding: "0.8rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "grayscale(0%)";
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.6";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              {sponsor.icon}
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
