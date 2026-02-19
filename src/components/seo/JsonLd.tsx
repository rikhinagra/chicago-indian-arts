export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NonprofitOrganization",
    name: "Chicago Indian Collective Arts",
    alternateName: ["Chicago Indian Arts", "CICA"],
    url: "https://www.chicagoindianarts.org",
    logo: "https://www.chicagoindianarts.org/images/logo.png",
    description:
      "Chicago Indian Arts is a nonprofit organization celebrating Indian and South Asian cultural heritage through literature festivals, fashion shows, and photography exhibitions in Chicago.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Jigar Shah",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Chicago" },
      { "@type": "State", name: "Illinois" },
      { "@type": "City", name: "Los Angeles" },
    ],
    sameAs: [
      "https://www.instagram.com/chicagoindianarts",
      "https://www.facebook.com/profile.php?id=61588363585494",
      "https://x.com/chiIndianArts",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@chicagoindianarts.org",
      telephone: "+19493316815",
      contactType: "general",
    },
    knowsAbout: [
      "Indian arts",
      "South Asian culture",
      "Indian literature festival",
      "Indian fashion shows",
      "Indian film festival",
      "Wildlife photography",
      "Indian diaspora",
      "Indian art exhibitions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function EventJsonLd({
  name,
  description,
  startDate,
  endDate,
  location,
  image,
  url,
}: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    endDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
    },
    image,
    url,
    organizer: {
      "@type": "Organization",
      name: "Chicago Indian Arts",
      url: "https://www.chicagoindianarts.org",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
