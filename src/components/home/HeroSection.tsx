"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div data-section="countdown-item" className="text-center relative" style={{ padding: "1rem 1.5rem", minWidth: "85px" }}>
      <div
        data-section="countdown-number" className="font-heading font-light leading-none text-white"
        style={{ textShadow: "0 2px 12px rgba(212,175,55,0.4)", fontSize: "2.8rem", marginBottom: "0.5rem" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div className="uppercase font-medium text-white" style={{ fontSize: "0.7rem", letterSpacing: "2px", opacity: 0.8 }}>
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    function update() {
      const eventDate = new Date("March 15, 2026 09:00:00").getTime();
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

  return (
    <section className="h-screen relative flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        >
          <source
            src="https://res.cloudinary.com/dom3oj7ya/video/upload/v1770836578/Generating_Indian_Diya_Video_fikfhg.mp4"
            type="video/mp4"
          />
        </video>
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
            style={{ color: "#d4af37", fontSize: "0.8rem", letterSpacing: "3px", marginBottom: "1.2rem", textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Vaarta 2026 &middot; March 15-17
          </div>

          {/* Main Heading */}
          <h1 data-section="hero-title" className="font-heading font-light" style={{ fontSize: "3.5rem", lineHeight: 1.15, marginBottom: "1.2rem", maxWidth: "800px", textShadow: "0 3px 15px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.7)" }}>
            Where Stories,{" "}
            <strong className="font-bold">Fashion &amp; Art Converge</strong>
          </h1>

          {/* Subtitle */}
          <p data-section="hero-subtitle"
            style={{ color: "rgba(255,255,255,0.95)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "650px", marginBottom: "1.8rem", textShadow: "0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)" }}
          >
            Experience the vibrant tapestry of India&apos;s cultural heritage through
            our three signature programs — literature, fashion, and photography.
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
                background: "rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.2)",
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
          <div data-section="hero-buttons" className="flex flex-wrap" style={{ gap: "1rem" }}>
            <Button href="#events" variant="primary">
              View Events
            </Button>
            <Button href="#register" variant="outline">
              Register Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
