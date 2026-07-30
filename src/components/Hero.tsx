"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { SceneProgressRef, SceneQuality } from "./LipstickScene";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_LINK =
  "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";
const GOOGLE_REVIEWS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj";

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

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 2.7 2.75 5.58 6.15.9-4.45 4.33 1.05 6.12L12 16.74l-5.5 2.89 1.05-6.12L3.1 9.18l6.15-.9L12 2.7Z" />
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
  const [sceneActive, setSceneActive] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(prefersReducedMotion);
  const isMobile = quality === "mobile";

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
      { rootMargin: "480px 0px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const revealElements = stage.querySelectorAll<HTMLElement>("[data-hero-reveal]");
    const headlineLines = stage.querySelectorAll<HTMLElement>("[data-hero-line]");

    if (reducedMotion) {
      progressRef.current = 1;
      section.style.setProperty("--hero-progress", "1");
      gsap.set(revealElements, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
      });
      return;
    }

    progressRef.current = 0;
    section.style.setProperty("--hero-progress", "0");

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

      intro.fromTo(
        "[data-hero-eyebrow]",
        { autoAlpha: 0, y: 14, filter: "blur(8px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.4 },
        0,
      );
      intro.fromTo(
        headlineLines,
        { autoAlpha: 0, y: 76, scale: 0.985, rotateX: 8, filter: "blur(13px)" },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 0.72,
          stagger: 0.1,
        },
        0.08,
      );
      intro.fromTo(
        "[data-hero-copy]",
        { autoAlpha: 0, y: 26, filter: "blur(6px)" },
        { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.48 },
        0.68,
      );
      intro.fromTo(
        "[data-hero-actions] > *",
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.08 },
        0.88,
      );
      intro.fromTo(
        "[data-hero-trust] > *",
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.055 },
        1.05,
      );

      ScrollTrigger.create({
        trigger: section,
        start: isMobile ? "top bottom-=120" : "top top+=64",
        end: isMobile ? "+=220%" : "+=160%",
        pin: isMobile ? false : stage,
        pinSpacing: !isMobile,
        scrub: isMobile ? 1.0 : 1.1,
        anticipatePin: isMobile ? 0 : 1,
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => {
          progressRef.current = progress;
          section.style.setProperty("--hero-progress", progress.toFixed(4));
        },
      });
    }, section);

    return () => {
      context.revert();
      progressRef.current = 0;
    };
  }, [isMobile, reducedMotion]);

  const hoverMotion = reducedMotion ? undefined : { y: -3 };
  const tapMotion = reducedMotion ? undefined : { scale: 0.98 };

  return (
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
            <p
              className="hero-service-badge"
              data-hero-reveal
              data-hero-eyebrow
            >
              <span aria-hidden="true" />
              Website under service - bookings open on WhatsApp
            </p>

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
              Expert care. Premium services. Timeless you.
            </p>

            <div className="hero-actions" data-hero-actions>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-primary-action"
                whileHover={hoverMotion}
                whileTap={tapMotion}
              >
                <span className="hero-action-shimmer" aria-hidden="true" />
                <span>Book Appointment</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>

              <motion.div
                className="hero-secondary-wrap"
                whileHover={hoverMotion}
                whileTap={tapMotion}
              >
                <Link href="/services" className="hero-secondary-action">
                  Explore Services
                </Link>
              </motion.div>
            </div>

            <div className="hero-trust-row" data-hero-trust aria-label="Salon trust indicators">
              <span className="hero-trust-item">
                <CheckIcon />
                Expert Stylists
              </span>
              <span className="hero-trust-item">
                <CheckIcon />
                Premium Products
              </span>
              <span className="hero-trust-item hero-rating">
                <span className="hero-stars" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </span>
                4.8 Rating
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
              <LipstickScene
                progressRef={progressRef}
                quality={quality}
                reducedMotion={reducedMotion}
                active={sceneActive}
              />
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
  );
}
