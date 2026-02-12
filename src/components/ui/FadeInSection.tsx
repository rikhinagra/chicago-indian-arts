"use client";

import { motion, useInView } from "motion/react";
import { CSSProperties, ReactNode, useRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionMap = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function FadeInSection({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
  duration = 0.8,
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
