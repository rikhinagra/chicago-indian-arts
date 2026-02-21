interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <div
      className={className}
      style={{
        fontSize: "0.9rem",
        fontWeight: 800,
        letterSpacing: "2px",
        textTransform: "uppercase" as const,
        marginBottom: "0.8rem",
        color: "#cd5c5c",
      }}
    >
      {children}
    </div>
  );
}
