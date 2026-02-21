"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div data-section="countdown-item" className="text-center relative" style={{ padding: "1rem 1.5rem", minWidth: "85px" }}>
      <div
        data-section="countdown-number" className="leading-none text-white"
        style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif", fontWeight: 300, textShadow: "0 2px 12px rgba(212,175,55,0.4)", fontSize: "2.8rem", marginBottom: "0.5rem" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="uppercase font-medium text-white" style={{ fontSize: "0.7rem", letterSpacing: "2px", opacity: 0.8 }}>
        {label}
      </div>
    </div>
  );
}

const heroVideos = [
  "https://res.cloudinary.com/dom3oj7ya/video/upload/v1771592584/chicago-skyline-indian-arts-cultural-event_eqfcyx.mp4",
  "https://res.cloudinary.com/dom3oj7ya/video/upload/v1770836588/Ornate_Indian_Palace_Corridor_Video_xwh2yc.mp4",
  "https://res.cloudinary.com/dom3oj7ya/video/upload/v1771221862/peacock-video_qosgc7.mp4",
];

export default function HeroSection() {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    function update() {
      const eventDate = new Date("May 30, 2026 09:00:00").getTime();
      const now = Date.now();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    }

    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleVideoEnd = useCallback((index: number) => {
    const nextIndex = (index + 1) % heroVideos.length;
    setActiveVideo(nextIndex);
    const nextRef = videoRefs.current[nextIndex];
    if (nextRef) {
      nextRef.currentTime = 0;
      nextRef.play();
    }
  }, []);

  useEffect(() => {
    const handlers: (() => void)[] = [];
    const refs = videoRefs.current;

    heroVideos.forEach((_, i) => {
      const ref = refs[i];
      if (ref) {
        const handler = () => handleVideoEnd(i);
        ref.addEventListener("ended", handler);
        handlers.push(() => ref.removeEventListener("ended", handler));
      }
    });

    return () => {
      handlers.forEach((cleanup) => cleanup());
    };
  }, [handleVideoEnd]);

  return (
    <section className="h-screen relative flex items-center overflow-hidden">
      {/* Background Videos - Carousel */}
      <div className="absolute inset-0">
        {heroVideos.map((src, i) => (
          <video
            key={src}
            ref={(el) => { videoRefs.current[i] = el; }}
            autoPlay={i === 0}
            muted
            playsInline
            aria-label={
              i === 0
                ? "Ornate Indian palace corridor showcasing South Asian architecture"
                : i === 1
                  ? "Vibrant peacock displaying feathers symbolizing Indian cultural beauty"
                  : "Chicago skyline representing the city home of Indian arts and cultural events"
            }
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center center",
              opacity: activeVideo === i ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        {/* Left-side gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.15) 35%, transparent 55%)",
          }}
        />
      </div>

      {/* Content */}
      <div data-section="hero-content" className="relative z-10 w-full text-white" style={{ padding: "0 3rem", maxWidth: "1600px", marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Event Label */}
          <div
            data-section="hero-label" className="uppercase font-semibold"
            style={{ color: "#d4af37", fontSize: "1rem", letterSpacing: "3px", marginBottom: "1.2rem", textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 0 0 50px rgba(0,0,0,0.8), 0 0 2px rgba(0,0,0,1)" }}
          >
            Vaarta 2026 &middot; May 30
          </div>

          {/* Main Heading */}
          <h1 data-section="hero-title" className="font-heading font-light" style={{ fontSize: "3.5rem", lineHeight: 1.15, marginBottom: "1.2rem", maxWidth: "800px", textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)" }}>
            Indian Voices,{" "}
            <strong className="font-bold">New Ground.</strong>
          </h1>

          {/* Subtitle */}
          <p data-section="hero-subtitle"
            style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: 500, lineHeight: 1.7, maxWidth: "650px", marginBottom: "1.8rem", textShadow: "0 2px 10px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.9)" }}
          >
            Experience the vibrant tapestry of Indian cultural heritage
            through our three signature programs: literature, fashion, and photography.
          </p>

          {/* Countdown */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              className="uppercase font-medium"
              style={{ color: "rgba(255,255,255,0.95)", fontSize: "0.8rem", letterSpacing: "3px", marginBottom: "1.2rem", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Vaarta 2026 Begins In
            </div>
            <div
              data-section="countdown" className="inline-flex flex-col sm:flex-row rounded-xl"
              style={{
                background: "rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                padding: "0.5rem",
              }}
            >
              <CountdownItem value={countdown.days} label="Days" />
              <div
                data-section="countdown-separator" className="hidden sm:flex items-center font-heading"
                style={{ color: "rgba(212,175,55,0.4)", fontSize: "2rem" }}
              >
                :
              </div>
              <CountdownItem value={countdown.hours} label="Hours" />
              <div
                data-section="countdown-separator" className="hidden sm:flex items-center font-heading"
                style={{ color: "rgba(212,175,55,0.4)", fontSize: "2rem" }}
              >
                :
              </div>
              <CountdownItem value={countdown.minutes} label="Minutes" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div data-section="hero-buttons" className="inline-flex flex-col items-center" style={{ gap: "1rem" }}>
            <div className="flex flex-row" style={{ gap: "1rem" }}>
              <Button href="#events" variant="primary">
                View Events
              </Button>
              <Button href="/register" variant="outline">
                Register Now
              </Button>
            </div>
            <a
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeYv3wmGMDA4Q9NN_4vlVHWvvrFAS2jjGrMd4utVl3aDSXD1g/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 2rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                backgroundColor: "#cd5c5c",
                color: "#ffffff",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b84e4e";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#cd5c5c";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              Call for Submissions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
