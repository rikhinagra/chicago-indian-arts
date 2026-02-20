"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";

const events = [
  {
    program: "Vaarta",
    title: "Vaarta Literature Festival",
    date: "May 30, 2026",
    time: "9:00 AM - 6:00 PM",
    venue: "Chicago Cultural Center",
    description: "Opening ceremony, keynote address, panel discussions on contemporary Indian literature, storytelling traditions, poetry sessions, book launches, and writing workshops.",
  },
  {
    program: "Prasang",
    title: "Prasang Fashion Innovation Show",
    date: "July 2026",
    time: "6:00 PM - 10:00 PM",
    venue: "Navy Pier Grand Ballroom",
    description: "Runway presentations showcasing traditional Indian textiles and contemporary designer collections. Fashion networking mixer to follow.",
  },
  {
    program: "Varnam",
    title: "Varnam Photography Exhibition Opening",
    date: "TBD",
    time: "5:00 PM - 9:00 PM",
    venue: "Art Institute of Chicago",
    description: "Grand opening of our annual photography exhibition featuring works from renowned photographers capturing Indian culture and wildlife.",
  },
  {
    program: "Varnam",
    title: "Varnam Wildlife Conservation Talk",
    date: "TBD",
    time: "2:00 PM - 5:00 PM",
    venue: "Art Institute of Chicago",
    description: "Panel discussion with wildlife photographers and conservationists on the role of photography in environmental advocacy.",
  },
  {
    program: "Varnam",
    title: "Photography Masterclass",
    date: "TBD",
    time: "10:00 AM - 4:00 PM",
    venue: "Art Institute of Chicago",
    description: "Hands-on photography workshop covering landscape, portrait, and wildlife techniques with professional photographers.",
  },
];

const filters = ["All", "Vaarta", "Prasang", "Varnam"];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.program === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 lg:px-12 bg-cream">
        <FadeInSection className="max-w-[1200px] mx-auto text-center">
          <SectionTag>2026 Calendar</SectionTag>
          <h1 className="font-heading text-4xl lg:text-[4.5rem] font-light leading-[1.1] mb-6 text-primary-dark">
            Upcoming Events
          </h1>
          <p className="text-lg text-text-light max-w-[700px] mx-auto">
            Explore our full calendar of cultural events across literature, fashion,
            and photography.
          </p>
        </FadeInSection>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 lg:px-12 bg-white border-b border-cream">
        <div className="max-w-[1200px] mx-auto flex justify-center gap-3 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm font-medium tracking-[0.5px] border transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-accent-terracotta text-white border-accent-terracotta"
                  : "bg-transparent text-text-dark border-text-light/40 hover:bg-accent-terracotta hover:text-white hover:border-accent-terracotta"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto space-y-6">
          {filteredEvents.map((event, i) => (
            <FadeInSection key={event.title} delay={i * 0.05}>
              <div className="bg-cream p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-12 transition-all duration-300 hover:bg-white hover:shadow-lg">
                {/* Date */}
                <div className="lg:min-w-[160px]">
                  <div className="text-xs tracking-[2px] uppercase text-accent-gold font-semibold mb-1">
                    {event.program}
                  </div>
                  <div className="font-heading text-xl font-semibold text-primary-dark">
                    {event.date}
                  </div>
                  <div className="text-sm text-text-light">{event.time}</div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-semibold mb-2 text-primary-dark">
                    {event.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-sm text-text-light flex items-center gap-1">
                      &#128205; {event.venue}
                    </span>
                    <a
                      href="/register"
                      className="inline-block px-6 py-2 bg-accent-terracotta text-white text-sm font-semibold tracking-[0.5px] transition-all duration-300 hover:bg-primary-dark"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </>
  );
}
