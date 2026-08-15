"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { business } from "@/content/business";
import type { SceneProgressRef, SceneQuality } from "./LipstickScene";

const WHATSAPP_LINK = business.bookingLink;
const GOOGLE_REVIEWS_LINK = business.mapsLink;

const LipstickScene = dynamic(() => import("./LipstickScene"), {
  ssr: false,
  loading: () => <LipstickFallback />,
});

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="m8.2 12.1 2.35 2.35 5.15-5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5a7 7 0 0 0-7 7c0 5.1 7 12 7 12s7-6.9 7-12a7 7 0 0 0-7-7Zm0 9.5a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
    </svg>
  );
}

function LipstickFallback() {
  return (
    <div className="hero-product-fallback" aria-hidden="true">
      <div className="hero-product-fallback-cap" />
      <div className="hero-product-fallback-ring" />
      <div className="hero-product-fallback-body">
        <span>MAHALAXMI</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0) as SceneProgressRef;
  const [quality, setQuality] = useState<SceneQuality>("desktop");
  const [sceneActive, setSceneActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [pinLength, setPinLength] = useState(0);

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReduced = () => setReducedMotion(reducedQuery.matches);
    updateReduced();
    reducedQuery.addEventListener("change", updateReduced);
    return () => reducedQuery.removeEventListener("change", updateReduced);
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateQuality = () => setQuality(mobileQuery.matches ? "mobile" : "desktop");
    updateQuality();
    mobileQuery.addEventListener("change", updateQuality);
    return () => mobileQuery.removeEventListener("change", updateQuality);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSceneActive(entry.isIntersecting),
      { rootMargin: "800px 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const measure = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      setPinLength((prev) => {
        const next = Math.round(window.innerHeight * (isMobile ? 1 : 1.2));
        return prev === next ? prev : next;
      });
    };

    let raf = 0;
    const update = () => {
      raf = 0;
      if (reducedMotion) {
        progressRef.current = 1;
        section.style.setProperty("--hero-progress", "1");
        section.style.transform = "";
        return;
      }
      const y = Math.max(0, window.scrollY);
      const pin = pinLength || 1;
      const progress = Math.min(1, Math.max(0, y / pin));
      progressRef.current = progress;
      section.style.setProperty("--hero-progress", progress.toFixed(4));
      section.style.transform = `translate3d(0, ${Math.min(y, pinLength)}px, 0)`;
    };
    const onViewportChange = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange, { passive: true });
    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reducedMotion, pinLength]);

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="cinematic-hero"
        aria-labelledby="cinematic-hero-title"
      >
      <div ref={stageRef} className="cinematic-hero-stage">
        <div className="hero-depth hero-depth-one" aria-hidden="true" />
        <div className="hero-depth hero-depth-two" aria-hidden="true" />
        <div className="hero-glass-orb hero-glass-orb-one" aria-hidden="true" />
        <div className="hero-glass-orb hero-glass-orb-two" aria-hidden="true" />
        <div className="hero-smoke" aria-hidden="true" />
        <div className="hero-reflection" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />

        <div className="hero-campaign-grid">
          <div className="hero-copy-column">
            <p className="hero-kicker" data-hero-reveal data-hero-eyebrow>
              Ladies Beauty Salon - Prayagraj
            </p>

            <h1 id="cinematic-hero-title" className="hero-campaign-title">
              <span data-hero-reveal data-hero-line>
                YOUR BEAUTY
              </span>
              <span data-hero-reveal data-hero-line className="hero-title-accent">
                DESERVES
              </span>
              <span data-hero-reveal data-hero-line>
                THE SPOTLIGHT
              </span>
            </h1>

            <p className="hero-campaign-copy" data-hero-reveal data-hero-copy>
              Ladies beauty salon in Prayagraj. Hair, makeup and bridal services.
            </p>

            <div className="hero-actions" data-hero-actions>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-primary-action"
              >
                <span className="hero-action-shimmer" aria-hidden="true" />
                <span>Book Appointment</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="hero-secondary-wrap">
                <Link href="/services" className="hero-secondary-action">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="hero-trust-row" data-hero-trust aria-label="Salon trust indicators">
              <span className="hero-trust-item">
                <CheckIcon />
                Ladies Salon
              </span>
              <span className="hero-trust-item">
                <CheckIcon />
                WhatsApp Booking
              </span>
              <a
                href={GOOGLE_REVIEWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-trust-item hero-reviews-link"
              >
                <PinIcon />
                Google Reviews
              </a>
            </div>
          </div>

          <div className="hero-product-column" aria-hidden="true">
            <div className="hero-product-aura" />
            <div className="hero-scene-shell">
              {sceneActive ? (
                <LipstickScene
                  progressRef={progressRef}
                  quality={quality}
                  reducedMotion={reducedMotion}
                  active={sceneActive}
                />
              ) : (
                <LipstickFallback />
              )}
            </div>

            <div className="hero-scroll-story">
              <span className="hero-scroll-label">Scroll to reveal</span>
              <span className="hero-scroll-track">
                <span className="hero-scroll-progress" />
              </span>
              <span className="hero-scroll-count">06</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
          Discover the reveal
        </div>
      </div>
    </section>
      <div aria-hidden="true" className="no-print" style={{ height: reducedMotion ? 0 : pinLength }} />
    </div>
  );
}
