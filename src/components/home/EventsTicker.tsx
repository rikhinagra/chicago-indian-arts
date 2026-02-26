const tickerItems = [
  "Chicago Indian Literature Festival | May 30, 2026",
  "Chicago Indian Fashion Week | July 2026",
  "Wildlife Photography & Visual Arts Festival | TBD",
  "Early Bird Registration Now Open",
];

export default function EventsTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="text-white overflow-hidden"
      style={{ backgroundColor: "#d4af37", padding: "0.7rem 0" }}
    >
      <div className="flex ticker-animate whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            style={{ padding: "0 2.5rem", fontSize: "0.82rem", fontWeight: 500, letterSpacing: "0.5px" }}
          >
            <span style={{ marginRight: "1rem", opacity: 0.7 }}>&#10022;</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
