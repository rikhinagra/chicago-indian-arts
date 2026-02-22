"use client";

import Link from "next/link";
import { ReactNode, useState, CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white" | "terracotta";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface VariantStyles {
  base: CSSProperties;
  hover: CSSProperties;
}

const variantStyles: Record<string, VariantStyles> = {
  primary: {
    base: { backgroundColor: "#d4af37", color: "#ffffff" },
    hover: { backgroundColor: "#ffffff", color: "#1a1a1a", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" },
  },
  outline: {
    base: { backgroundColor: "transparent", color: "#ffffff", border: "1.5px solid #ffffff" },
    hover: { backgroundColor: "#ffffff", color: "#1a1a1a", border: "1.5px solid #ffffff" },
  },
  white: {
    base: { backgroundColor: "#ffffff", color: "#cd5c5c" },
    hover: { backgroundColor: "#1a1a1a", color: "#ffffff" },
  },
  terracotta: {
    base: { backgroundColor: "#cd5c5c", color: "#ffffff" },
    hover: { backgroundColor: "#1a1a1a", color: "#ffffff" },
  },
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const styles = variantStyles[variant];
  const currentStyle: CSSProperties = {
    ...(isHovered ? { ...styles.base, ...styles.hover } : styles.base),
    padding: "0.75rem 1.5rem",
    fontSize: "0.82rem",
    fontWeight: 600,
    letterSpacing: "1px",
    textTransform: "uppercase" as const,
    display: "inline-block",
    textDecoration: "none",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        style={currentStyle}
        {...handlers}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={currentStyle}
      {...handlers}
    >
      {children}
    </button>
  );
}
