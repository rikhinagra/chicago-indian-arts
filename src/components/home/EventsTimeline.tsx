"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import RegisterModal from "@/components/ui/RegisterModal";

const events = [
  {
    month: "March",
    day: "15",
    year: "2026",
    category: "Vaarta · Literature",
    title: "Vaarta Literature Festival — Day 1",
    description:
      "Opening ceremony featuring keynote address by renowned author. Panel discussions on contemporary Indian literature and storytelling traditions.",
    time: "9:00 AM - 6:00 PM",
    venue: "Chicago Cultural Center",
    program: "Vaarta",
  },
  {
    month: "March",
    day: "16",
    year: "2026",
    category: "Vaarta · Literature",
    title: "Vaarta Literature Festival — Day 2",
    description:
      "Poetry sessions, book launches, and intimate conversations with authors. Writing workshops and literary masterclasses throughout the day.",
    time: "9:00 AM - 8:00 PM",
    venue: "Chicago Cultural Center",
    program: "Vaarta",
  },
  {
    month: "May",
    day: "20",
    year: "2026",
    category: "Prasang · Fashion",
    title: "Prasang Fashion Innovation Show",
    description:
      "Spectacular runway presentations showcasing both traditional Indian textiles and contemporary designer collections. Fashion networking mixer to follow.",
    time: "6:00 PM - 10:00 PM",
    venue: "Navy Pier Grand Ballroom",
    program: "Prasang",
  },
  {
    month: "August",
    day: "10",
    year: "2026",
    category: "Varnam · Photography",
    title: "Varnam Photography Exhibition Opening",
    description:
      "Grand opening of our annual photography exhibition featuring works from renowned photographers capturing Indian culture and wildlife.",
    time: "5:00 PM - 9:00 PM",
    venue: "Art Institute of Chicago",
    program: "Varnam",
  },
];

const filters = ["All Events", "Vaarta", "Prasang", "Varnam"];

export default function EventsTimeline() {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents =
    activeFilter === "All Events"
      ? events
      : events.filter((e) => e.program === activeFilter);

  const openRegister = (event: typeof events[0]) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <section id="events" data-section="events" style={{ padding: "5rem 3rem", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
        <FadeInSection className="text-center" style={{ marginBottom: "3rem" }}>
          <SectionTag>Schedule</SectionTag>
          <h2
            data-section="section-heading" className="font-heading font-light"
            style={{ fontSize: "2.5rem", marginBottom: "0.8rem", color: "#1a1a1a" }}
          >
            Upcoming Events Calendar
          </h2>
        </FadeInSection>

        {/* Filters */}
        <FadeInSection className="flex justify-center flex-wrap" style={{ gap: "0.8rem", marginBottom: "3rem" }}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="cursor-pointer"
              style={{
                padding: "0.5rem 1.4rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.5px",
                border: activeFilter === filter ? "1px solid #cd5c5c" : "1px solid #666666",
                backgroundColor: activeFilter === filter ? "#cd5c5c" : "transparent",
                color: activeFilter === filter ? "#ffffff" : "#2d2d2d",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.backgroundColor = "#cd5c5c";
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "#cd5c5c";
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#2d2d2d";
                  e.currentTarget.style.borderColor = "#666666";
                }
              }}
            >
              {filter}
            </button>
          ))}
        </FadeInSection>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div
            data-section="timeline-line" className="hidden xl:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{ width: "2px", backgroundColor: "#e8e4de" }}
          />

          {filteredEvents.map((event, i) => {
            const isLeft = i % 2 === 1;

            const dateBlock = (
              <div style={{ paddingTop: "1rem", textAlign: isLeft ? "left" : "right" }}>
                <div
                  className="uppercase font-semibold"
                  style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "#d4af37" }}
                >
                  {event.month}
                </div>
                <div
                  className="font-heading font-bold leading-none"
                  style={{ fontSize: "2.2rem", color: "#1a1a1a" }}
                >
                  {event.day}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#666666" }}>{event.year}</div>
              </div>
            );

            const detailsBlock = (
              <div
                className="rounded-lg"
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#faf8f3",
                  transition: "all 0.3s ease",
                  textAlign: "left",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = isLeft ? "translateX(-8px)" : "translateX(8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#faf8f3";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="uppercase font-semibold"
                  style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "#cd5c5c", marginBottom: "0.5rem" }}
                >
                  {event.category}
                </div>
                <h3
                  className="font-heading font-semibold"
                  style={{ fontSize: "1.3rem", marginBottom: "0.6rem", color: "#1a1a1a" }}
                >
                  {event.title}
                </h3>
                <p style={{ color: "#666666", lineHeight: 1.7, marginBottom: "0.8rem", fontSize: "0.9rem" }}>
                  {event.description}
                </p>
                <div className="flex flex-wrap" style={{ gap: "1rem", fontSize: "0.8rem", color: "#666666", marginBottom: "0.8rem" }}>
                  <span className="flex items-center" style={{ gap: "0.4rem" }}><Clock size={14} color="#cd5c5c" /> {event.time}</span>
                  <span className="flex items-center" style={{ gap: "0.4rem" }}><MapPin size={14} color="#cd5c5c" /> {event.venue}</span>
                </div>
                <button
                  onClick={() => openRegister(event)}
                  className="inline-block text-white font-semibold cursor-pointer"
                  style={{
                    padding: "0.5rem 1.2rem",
                    backgroundColor: "#cd5c5c",
                    fontSize: "0.8rem",
                    letterSpacing: "0.5px",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#cd5c5c";
                  }}
                >
                  Register Now
                </button>
              </div>
            );

            const markerBlock = (
              <div className="hidden xl:flex items-start justify-center" style={{ paddingTop: "1.5rem" }}>
                <div
                  className="rounded-full z-10"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#cd5c5c",
                    border: "4px solid #ffffff",
                    boxShadow: "0 0 0 4px #e8e4de",
                  }}
                />
              </div>
            );

            return (
              <FadeInSection key={event.title} delay={i * 0.1}>
                {/* Mobile: single column (date + details) */}
                <div
                  className="xl:hidden"
                  style={{ marginBottom: "2.5rem" }}
                >
                  <div style={{ marginBottom: "0.5rem" }}>
                    <div
                      className="uppercase font-semibold"
                      style={{ fontSize: "0.8rem", letterSpacing: "2px", color: "#d4af37" }}
                    >
                      {event.month}
                    </div>
                    <div
                      className="font-heading font-bold leading-none"
                      style={{ fontSize: "2.2rem", color: "#1a1a1a" }}
                    >
                      {event.day}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#666666" }}>{event.year}</div>
                  </div>
                  {detailsBlock}
                </div>

                {/* Desktop: alternating 3-column grid */}
                <div
                  className="hidden xl:grid"
                  style={{
                    gridTemplateColumns: "1fr 80px 1fr",
                    gap: "1.5rem",
                    marginBottom: "3rem",
                  }}
                >
                  {isLeft ? detailsBlock : dateBlock}
                  {markerBlock}
                  {isLeft ? dateBlock : detailsBlock}
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>

      {/* Registration Modal */}
      {selectedEvent && (
        <RegisterModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          eventTitle={selectedEvent.title}
          eventDate={`${selectedEvent.month} ${selectedEvent.day}, ${selectedEvent.year}`}
          eventVenue={selectedEvent.venue}
        />
      )}
    </section>
  );
}
