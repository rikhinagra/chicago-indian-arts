"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import RegisterModal from "@/components/ui/RegisterModal";

type EventItem = {
  month: string;
  day: string;
  year: string;
  category: string;
  title: string;
  description: string;
  time: string;
  venue: string;
  venueUrl: string;
  program: string;
  pageUrl: string;
  scheduleUrl?: string;
  externalRegisterUrl?: string;
  registerLabel?: string;
  ticketUrl?: string;
};

const events: EventItem[] = [
  {
    month: "Apr",
    day: "17",
    year: "2027",
    category: "Chicago Indian Literature Festival",
    title: "Chicago Indian Literature Festival 2027",
    description:
      "Stories Without Borders. Poets, writers, authors, speakers and community voices share their stories on one stage. Submissions are open until January 15, 2027.",
    time: "3:00 PM - 7:30 PM",
    venue: "Venue TBA",
    venueUrl: "",
    program: "Chicago Indian Literature Festival",
    pageUrl: "/literature-festival/2027",
    externalRegisterUrl: "https://forms.gle/tnVDYVS3MdDBEJ4H8",
    registerLabel: "Submit Your Work",
  },
  {
    month: "Apr",
    day: "18",
    year: "2027",
    category: "Wildlife Photography & Visual Arts Festival",
    title: "Wildlife Photography & Visual Arts Festival 2027",
    description:
      "One day of exhibition, talks, workshops and awards on the theme Vasudhaiva Kutumbakam, the world is one family. Call for artists is open until January 15, 2027.",
    time: "5:00 PM - 9:00 PM",
    venue: "Venue TBA",
    venueUrl: "",
    program: "Wildlife Photography & Visual Arts Festival",
    pageUrl: "/photography-festival/2027",
    externalRegisterUrl: "https://forms.gle/nsN2eNLzuGfqqQ9cA",
    registerLabel: "Submit Your Work",
  },
];

// Events that have already happened (archive).
const pastEvents = [
  {
    month: "Oct",
    day: "10",
    year: "2026",
    category: "Chicago Indian Fashion Week",
    title: "Chicago Indian Fashion Week 2026",
    venue: "Rivvy Hotel, 55 E Ontario Street",
    program: "Chicago Indian Fashion Week",
    pageUrl: "/gallery/oct-10",
    scheduleUrl: "/fashion-week/schedule",
  },
  {
    month: "May",
    day: "30",
    year: "2026",
    category: "Chicago Indian Literature Festival",
    title: "Chicago Indian Literature Festival 2026",
    venue: "Congress Plaza Hotel",
    program: "Chicago Indian Literature Festival",
    pageUrl: "/gallery/may-30",
    scheduleUrl: "/literature-festival/schedule",
  },
];

const filters = ["All Events", "Chicago Indian Literature Festival", "Chicago Indian Fashion Week", "Wildlife Photography & Visual Arts Festival"];

export default function EventsTimeline() {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const filteredEvents =
    activeFilter === "All Events"
      ? events
      : events.filter((e) => e.program === activeFilter);

  const filteredPast =
    activeFilter === "All Events"
      ? pastEvents
      : pastEvents.filter((e) => e.program === activeFilter);

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

          {filteredEvents.length === 0 && (
            <p style={{ color: "#666666", textAlign: "center", padding: "1rem 0 2rem" }}>
              No upcoming events in this category yet. Please check back soon.
            </p>
          )}
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
                        className="font-bold"
                        style={{ fontSize: "1.5rem", lineHeight: 1, color: "#1a1a1a", fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
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

                  <Link
                    href={event.pageUrl}
                    className="inline-block"
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      className="font-heading font-semibold"
                      style={{ fontSize: "1.3rem", marginBottom: "0.6rem", color: "#1a1a1a", transition: "color 0.3s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#cd5c5c")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                    >
                      {event.title}
                    </h3>
                  </Link>
                  <p style={{ color: "#666666", lineHeight: 1.7, marginBottom: "0.8rem", fontSize: "0.9rem" }}>
                    {event.description}
                  </p>
                  <div className="flex flex-wrap" style={{ gap: "1rem", fontSize: "0.8rem", color: "#666666", marginBottom: "0.8rem" }}>
                    <span className="flex items-center" style={{ gap: "0.4rem" }}><Clock size={14} color="#cd5c5c" /> {event.time}</span>
                    <span className="flex items-center" style={{ gap: "0.4rem" }}>
                      <MapPin size={14} color="#cd5c5c" />
                      {event.venueUrl ? (
                        <a href={event.venueUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#666666", textDecoration: "none" }}>{event.venue}</a>
                      ) : (
                        event.venue
                      )}
                    </span>
                  </div>
                  <div className="flex items-center flex-wrap" style={{ gap: "1rem" }}>
                    <button
                      onClick={() =>
                        event.externalRegisterUrl
                          ? window.open(event.externalRegisterUrl, "_blank")
                          : openRegister(event)
                      }
                      className="inline-block font-semibold cursor-pointer events-register-btn"
                      style={{
                        padding: "0.5rem 1.2rem",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                        border: "none",
                      }}
                    >
                      {event.registerLabel || "Register Now"}
                    </button>
                    {event.ticketUrl && (
                      <Link
                        href={event.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-semibold"
                        style={{
                          padding: "0.5rem 1.2rem",
                          fontSize: "0.8rem",
                          letterSpacing: "0.5px",
                          backgroundColor: "#d4af37",
                          color: "#ffffff",
                          textDecoration: "none",
                          transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#d4af37")}
                      >
                        Get Tickets
                      </Link>
                    )}
                    <Link
                      href={event.pageUrl}
                      className="inline-flex items-center font-semibold"
                      style={{
                        gap: "0.3rem",
                        color: "#cd5c5c",
                        fontSize: "0.8rem",
                        letterSpacing: "0.5px",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#cd5c5c")}
                    >
                      View Event Page <ArrowUpRight size={14} />
                    </Link>
                    {event.scheduleUrl && (
                      <Link
                        href={event.scheduleUrl}
                        className="inline-flex items-center font-semibold"
                        style={{
                          gap: "0.3rem",
                          color: "#cd5c5c",
                          fontSize: "0.8rem",
                          letterSpacing: "0.5px",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#cd5c5c")}
                      >
                        Schedule <ArrowUpRight size={14} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Past events (archive) */}
        {filteredPast.length > 0 && (
          <div style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto", marginTop: "3rem" }}>
            <FadeInSection className="text-center" style={{ marginBottom: "1.5rem" }}>
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: "1.6rem", color: "#1a1a1a" }}
              >
                Past Events
              </h3>
            </FadeInSection>
            {filteredPast.map((event) => (
              <FadeInSection key={event.title}>
                <div
                  className="flex items-center flex-wrap rounded-lg"
                  style={{ gap: "1.2rem", padding: "1rem 1.5rem", backgroundColor: "#faf8f3", marginBottom: "1rem" }}
                >
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
                      className="font-bold"
                      style={{ fontSize: "1.3rem", lineHeight: 1, color: "#1a1a1a", fontFamily: "var(--font-lato), 'Lato', sans-serif" }}
                    >
                      {event.day}
                    </span>
                    <div>
                      <div className="uppercase font-semibold" style={{ fontSize: "0.65rem", letterSpacing: "1.5px", color: "#d4af37", lineHeight: 1.2 }}>
                        {event.month}
                      </div>
                      <div style={{ fontSize: "0.7rem", color: "#666666", lineHeight: 1.2 }}>{event.year}</div>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <div className="font-heading font-semibold" style={{ fontSize: "1.15rem", color: "#1a1a1a" }}>
                      {event.title}
                    </div>
                    <div className="flex items-center" style={{ gap: "0.4rem", fontSize: "0.8rem", color: "#666666" }}>
                      <MapPin size={14} color="#cd5c5c" /> {event.venue}
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap" style={{ gap: "1.25rem" }}>
                    <Link
                      href={event.pageUrl}
                      className="inline-flex items-center font-semibold"
                      style={{ gap: "0.3rem", color: "#cd5c5c", fontSize: "0.8rem", letterSpacing: "0.5px", textDecoration: "none" }}
                    >
                      View Gallery <ArrowUpRight size={14} />
                    </Link>
                    <Link
                      href={event.scheduleUrl}
                      className="inline-flex items-center font-semibold"
                      style={{ gap: "0.3rem", color: "#cd5c5c", fontSize: "0.8rem", letterSpacing: "0.5px", textDecoration: "none" }}
                    >
                      Schedule <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        )}
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
