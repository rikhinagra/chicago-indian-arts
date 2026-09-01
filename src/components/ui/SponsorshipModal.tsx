"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";

interface SponsorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SPONSORSHIP_IMAGE =
  "https://res.cloudinary.com/dist59h0i/image/upload/v1788274544/fashion-week-2026/chicago-indian-fashion-week-sponsorship-opportunities.png";

export default function SponsorshipModal({ isOpen, onClose }: SponsorshipModalProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      // This site's page scroll is driven by Lenis (smooth-scroll library),
      // which bypasses native overflow/position CSS — it must be stopped directly.
      lenis?.stop();

      const scrollY = window.scrollY;
      const body = document.body;
      const original = {
        position: body.style.position,
        top: body.style.top,
        left: body.style.left,
        right: body.style.right,
        width: body.style.width,
        overflow: body.style.overflow,
      };

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";

      return () => {
        body.style.position = original.position;
        body.style.top = original.top;
        body.style.left = original.left;
        body.style.right = original.right;
        body.style.width = original.width;
        body.style.overflow = original.overflow;
        window.scrollTo(0, scrollY);
        lenis?.start();
      };
    }
  }, [isOpen, lenis]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(4px)",
            padding: "1rem",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col"
            style={{
              backgroundColor: "#ffffff",
              maxWidth: "880px",
              width: "100%",
              maxHeight: "88vh",
              borderRadius: "6px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
              overflow: "hidden",
            }}
          >
            {/* Header — fixed, does not scroll */}
            <div
              className="flex-shrink-0"
              style={{
                padding: "1.5rem 2rem 1.2rem",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              <button
                onClick={onClose}
                className="absolute cursor-pointer"
                style={{
                  top: "1.3rem",
                  right: "1.3rem",
                  color: "#999",
                  background: "none",
                  border: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                <X size={22} />
              </button>
              <div
                className="uppercase font-semibold"
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "2px",
                  color: "#cd5c5c",
                  marginBottom: "0.5rem",
                }}
              >
                Support CIFW
              </div>
              <h3
                className="font-heading font-semibold"
                style={{ fontSize: "1.5rem", color: "#1a1a1a", paddingRight: "2rem" }}
              >
                Sponsorship Opportunities
              </h3>
            </div>

            {/* Body — scrollable. data-lenis-prevent tells the site's Lenis
                smooth-scroll engine to ignore this element entirely, so it
                scrolls natively instead of being intercepted globally. */}
            <div
              data-lenis-prevent
              style={{
                padding: "2rem",
                overflowY: "auto",
                overscrollBehavior: "contain",
                flex: 1,
                minHeight: 0,
              }}
            >
              <div
                className="relative"
                style={{
                  width: "100%",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={SPONSORSHIP_IMAGE}
                  alt="Chicago Indian Fashion Week 2026 Sponsorship Opportunities"
                  width={1655}
                  height={2340}
                  className="w-full"
                  style={{ display: "block", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, 830px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
