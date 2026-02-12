import type { Metadata } from "next";
import Image from "next/image";
import FadeInSection from "@/components/ui/FadeInSection";
import SectionTag from "@/components/ui/SectionTag";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vaarta — Literature Festival | Chicago Indian Arts",
  description:
    "Vaarta is Chicago Indian Arts' signature literature festival celebrating India's storytelling traditions with authors, poets, and thought leaders.",
};

const schedule = [
  {
    day: "Day 1 — March 15",
    events: [
      { time: "9:00 AM", title: "Opening Ceremony & Keynote Address" },
      { time: "10:30 AM", title: "Panel: Contemporary Indian Literature" },
      { time: "1:00 PM", title: "Poetry Readings & Performances" },
      { time: "3:00 PM", title: "Book Launch: Featured Authors" },
      { time: "5:00 PM", title: "Writing Workshop: Storytelling Traditions" },
    ],
  },
  {
    day: "Day 2 — March 16",
    events: [
      { time: "9:00 AM", title: "Morning Raag — Readings with Chai" },
      { time: "11:00 AM", title: "Panel: Diaspora Voices" },
      { time: "1:30 PM", title: "Children's Literature Workshop" },
      { time: "3:30 PM", title: "In Conversation: Author Spotlight" },
      { time: "6:00 PM", title: "Literary Awards & Closing Ceremony" },
    ],
  },
  {
    day: "Day 3 — March 17",
    events: [
      { time: "10:00 AM", title: "Community Reading Circle" },
      { time: "12:00 PM", title: "Panel: Future of Indian Publishing" },
      { time: "2:30 PM", title: "Book Signing Marathon" },
      { time: "4:00 PM", title: "Farewell Address & Networking" },
    ],
  },
];

const speakers = [
  { name: "Priya Sharma", role: "Bestselling Author", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
  { name: "Arjun Patel", role: "Poet & Performer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Kavita Nair", role: "Literary Critic", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Sameer Roy", role: "Publisher & Editor", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

export default function VaartaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Vaarta Literature Festival"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-accent-terracotta/60" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 py-32 text-white">
          <FadeInSection>
            <div className="text-sm tracking-[3px] uppercase text-accent-gold mb-4 font-semibold">
              Literature Festival
            </div>
            <h1 className="font-heading text-5xl lg:text-[6rem] font-light leading-[1.05] mb-6">
              VAARTA
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-[600px] mb-8 opacity-95">
              Where India&apos;s rich storytelling traditions meet contemporary
              voices. March 15-17, 2026 at the Chicago Cultural Center.
            </p>
            <Button href="/register" variant="primary">
              Register Now
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="max-w-[900px] mx-auto text-center">
          <SectionTag>About Vaarta</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light mb-8 text-primary-dark">
            Stories That Shape Us
          </h2>
          <p className="text-lg leading-relaxed text-text-light mb-6">
            Vaarta — meaning &quot;conversation&quot; in Hindi — is our flagship
            literature festival. It brings together renowned authors, emerging voices,
            poets, and literary thinkers for three days of panels, readings,
            workshops, and cultural exchange.
          </p>
          <p className="text-lg leading-relaxed text-text-light">
            From ancient epics to contemporary fiction, from the diaspora experience
            to regional storytelling traditions, Vaarta celebrates every facet of
            Indian literary heritage.
          </p>
        </FadeInSection>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1200px] mx-auto">
          <FadeInSection className="text-center mb-16">
            <SectionTag>Schedule</SectionTag>
            <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
              Festival Program
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day, di) => (
              <FadeInSection key={day.day} delay={di * 0.15}>
                <div className="bg-white p-8">
                  <h3 className="font-heading text-2xl font-semibold mb-6 text-primary-dark border-b-2 border-accent-gold pb-4">
                    {day.day}
                  </h3>
                  <ul className="space-y-4">
                    {day.events.map((event) => (
                      <li key={event.time} className="flex gap-4">
                        <span className="text-sm text-accent-gold font-semibold min-w-[80px]">
                          {event.time}
                        </span>
                        <span className="text-sm text-text-dark">{event.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <FadeInSection className="text-center mb-12">
          <SectionTag>Speakers</SectionTag>
          <h2 className="font-heading text-3xl lg:text-[3.5rem] font-light text-primary-dark">
            Featured Authors & Speakers
          </h2>
        </FadeInSection>
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((s, i) => (
            <FadeInSection key={s.name} delay={i * 0.1} className="text-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 border-4 border-cream shadow-md">
                <Image src={s.image} alt={s.name} width={150} height={150} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-dark">{s.name}</h3>
              <p className="text-sm text-accent-terracotta">{s.role}</p>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-primary-dark text-white text-center">
        <FadeInSection className="max-w-[700px] mx-auto">
          <h2 className="font-heading text-3xl lg:text-5xl font-light mb-6">
            Join Vaarta 2026
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-90">
            Be part of the conversation. Register today to secure your spot at
            Chicago&apos;s premier Indian literature festival.
          </p>
          <Button href="/register" variant="primary">
            Register Now
          </Button>
        </FadeInSection>
      </section>
    </>
  );
}
