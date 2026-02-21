"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import RegisterModal from "@/components/ui/RegisterModal";

const events = [
  {
    month: "May",
    day: "30",
    year: "2026",
    category: "Vaarta · Literature",
    title: "Vaarta Literature Festival",
    description:
      "Opening ceremony featuring keynote address by renowned author. Panel discussions on contemporary Indian literature, storytelling traditions, poetry sessions, book launches, and writing workshops.",
    time: "9:00 AM - 6:00 PM",
    venue: "Chicago Cultural Center",
    program: "Vaarta",
  },
  {
    month: "July",
    day: "",
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
    month: "TBD",
    day: "",
    year: "",
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
    <section id="events" data-section="events" style={{ padding: "3rem 3rem", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
        <FadeInSection className="text-center" style={{ marginBottom: "2rem" }}>
          <SectionTag>Schedule</SectionTag>
          <h2
            data-section="section-heading" className="font-heading font-semibold"
            style={{ fontSize: "2.5rem", marginBottom: "0.8rem", color: "#1a1a1a" }}
          >
            Upcoming Events Calendar
          </h2>
        </FadeInSection>

        {/* Filters */}
        <FadeInSection className="flex justify-center flex-wrap" style={{ gap: "0.8rem", marginBottom: "2rem" }}>
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
        <div className="relative" style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
          {/* Timeline line on left */}
          <div
            data-section="timeline-line"
            className="hidden sm:block absolute top-0 bottom-0"
            style={{ left: "7px", width: "2px", backgroundColor: "#e8e4de" }}
          />

          {filteredEvents.map((event, i) => (
            <FadeInSection key={event.title} delay={i * 0.1}>
              <div className="flex" style={{ gap: "1.5rem", marginBottom: "1.5rem" }}>
                {/* Timeline dot */}
                <div className="hidden sm:flex" style={{ flexShrink: 0, paddingTop: "1.2rem" }}>
                  <div
                    className="rounded-full z-10"
                    style={{
                      width: "16px",
                      height: "16px",
                      backgroundColor: "#cd5c5c",
                      border: "3px solid #ffffff",
                      boxShadow: "0 0 0 3px #e8e4de",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="rounded-lg"
                  style={{
                    flex: 1,
                    padding: "1.5rem",
                    backgroundColor: "#faf8f3",
                    transition: "all 0.3s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                    e.currentTarget.style.transform = "translateX(8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#faf8f3";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {/* Date + Category row */}
                  <div className="flex items-center flex-wrap" style={{ gap: "1rem", marginBottom: "0.8rem" }}>
                    <div
                      className="flex items-center"
                      style={{
                        gap: "0.6rem",
                        backgroundColor: "#ffffff",
                        padding: "0.4rem 0.8rem",
                        border: "1px solid rgba(0,0,0,0.06)",
                        borderRadius: "4px",
                      }}
                    >
                      <span
                        className="font-heading font-bold"
                        style={{ fontSize: "1.5rem", lineHeight: 1, color: "#1a1a1a" }}
                      >
                        {event.day}
                      </span>
                      <div>
                        <div
                          className="uppercase font-semibold"
                          style={{ fontSize: "0.65rem", letterSpacing: "1.5px", color: "#d4af37", lineHeight: 1.2 }}
                        >
                          {event.month}
                        </div>
                        <div style={{ fontSize: "0.7rem", color: "#666666", lineHeight: 1.2 }}>{event.year}</div>
                      </div>
                    </div>
                    <div
                      className="uppercase font-semibold"
                      style={{ fontSize: "0.75rem", letterSpacing: "2px", color: "#cd5c5c" }}
                    >
                      {event.category}
                    </div>
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
              </div>
            </FadeInSection>
          ))}
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
