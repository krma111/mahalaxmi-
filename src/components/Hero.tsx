"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LipstickScene from "./LipstickScene";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".hero-word");
      if (!words) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      words.forEach((word) => {
        tl.from(word, {
          y: 120,
          opacity: 0,
          rotateX: 20,
          duration: 1.2,
          filter: "blur(15px)",
          ease: "power4.out",
        }, "-=0.6");
      });

      if (subtitleRef.current) {
        tl.from(subtitleRef.current, { y: 40, opacity: 0, duration: 1 }, "-=0.4");
      }

      const btns = buttonsRef.current?.querySelectorAll("a, button");
      if (btns) {
        tl.from(btns, { y: 30, opacity: 0, stagger: 0.1, duration: 0.9 }, "-=0.3");
      }

      const trustItems = trustRef.current?.querySelectorAll("span");
      if (trustItems) {
        tl.from(trustItems, { y: 20, opacity: 0, stagger: 0.08, duration: 0.7 }, "-=0.4");
      }

      if (!reducedMotion) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          onUpdate: (self) => {
            setScrollProgress(Math.min(self.progress, 1));
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, reducedMotion]);

  return (
    <>
      {!isMobile && !reducedMotion && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-[-8px] top-[-8px] z-[999] h-4 w-4 rounded-full bg-deep-red/10 blur-sm"
          style={{ transform: "translate(-100px, -100px)", transition: "width 0.4s, height 0.4s" }}
        />
      )}

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-cream/30"
        style={{ height: "110vh", minHeight: "700px" }}
      >
        {/* Background depth layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-60 -right-60 h-[700px] w-[700px] rounded-full bg-deep-red/[0.03] blur-3xl" />
          <div className="absolute -bottom-60 -left-60 h-[600px] w-[600px] rounded-full bg-deep-red/[0.02] blur-3xl" />
          <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-soft-rose/30 blur-3xl" />
          <div className="absolute -right-20 top-1/2 h-[300px] w-[300px] rounded-full bg-deep-red/[0.02] blur-3xl" />
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\")",
              backgroundSize: "256px 256px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1700px] flex-col items-center px-6 md:flex-row md:px-[72px] lg:px-[120px]">
          {/* Left: Typography */}
          <div className="flex w-full flex-1 flex-col justify-center pt-32 md:w-[58%] md:pt-0 lg:w-[60%]">
            <div ref={textRef}>
              <p className="hero-word mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-deep-red md:text-sm">
                Ladies Beauty Salon
              </p>
              <h1 className="space-y-0">
                {["YOUR", "BEAUTY", "DESERVES"].map((word, i) => (
                  <span
                    key={word}
                    className="hero-word block font-serif font-bold leading-[0.95] tracking-tight text-foreground"
                    style={{
                      fontSize: "clamp(42px, 10vw, 150px)",
                      color: i === 2 ? "#8B1A2B" : undefined,
                    }}
                  >
                    {word}
                    {i === 2 && (
                      <span className="text-foreground"> THE SPOTLIGHT</span>
                    )}
                  </span>
                ))}
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="hero-word mt-5 max-w-lg text-sm leading-relaxed text-muted md:mt-6 md:text-base lg:text-lg"
            >
              Professional beauty care for women in Prayagraj. Hair, skin,
              makeup, bridal, and beauty services designed to make you feel
              confident and cared for.
            </p>

            <div
              ref={buttonsRef}
              className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[8px] bg-deep-red px-8 text-sm font-semibold text-white shadow-lg shadow-deep-red/20 transition-all duration-500 hover:shadow-xl hover:shadow-deep-red/30 hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book Appointment</span>
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-deep-red/20 bg-white/60 px-8 text-sm font-semibold text-deep-red backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Services
              </Link>
            </div>

            <div
              ref={trustRef}
              className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted md:mt-10"
            >
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-deep-red" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                Expert Stylists
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-deep-red" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                Premium Products
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex text-yellow-500">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </span>
                4.8 Rating
              </span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20Prayagraj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-deep-red transition hover:underline"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                Google Reviews
              </a>
            </div>
          </div>

          {/* Right: 3D Lipstick */}
          <div
            className="relative flex w-full flex-1 items-center justify-center md:w-[42%] lg:w-[40%]"
            style={{ minHeight: isMobile ? "40vh" : "80vh" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <LipstickScene scrollProgress={scrollProgress} />
            </div>
          </div>
        </div>

        {/* Scroll fade overlay */}
        {scrollProgress > 0.02 && (
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-white"
            style={{ opacity: Math.min(scrollProgress * 1.5, 1) }}
          />
        )}
      </section>
    </>
  );
}
