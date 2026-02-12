"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 3, label: "Signature Programs" },
  { value: 142, suffix: "+", label: "Artists Featured" },
  { value: 2857, suffix: "+", label: "Annual Attendees" },
  { value: 5, label: "Years of Impact" },
];

export default function StatsCounters() {
  return (
    <section data-section="stats" style={{ padding: "4rem 3rem", backgroundColor: "#ffffff" }}>
      <div
        data-section="stats-grid" className="grid grid-cols-2 lg:grid-cols-4 text-center"
        style={{ gap: "2rem", maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {stats.map((stat, i) => (
          <FadeInSection key={stat.label} delay={i * 0.1}>
            <div
              data-section="stat-number" className="font-heading font-light leading-none"
              style={{ fontSize: "2.8rem", color: "#d4af37", marginBottom: "0.4rem" }}
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix || ""}
              />
            </div>
            <div style={{ fontSize: "0.9rem", letterSpacing: "0.5px", color: "#2d2d2d" }}>
              {stat.label}
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
