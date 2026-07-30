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
  const lipstickRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const lines = textRef.current?.querySelectorAll(".hero-line");
      const btns = buttonsRef.current?.querySelectorAll("a, button");
      if (lines) {
        tl.from(lines, {
          y: 80,
          opacity: 0,
          rotateX: 15,
          stagger: 0.15,
          duration: 1.2,
          filter: "blur(10px)",
        });
      }
      if (subtitleRef.current) {
        tl.from(subtitleRef.current, { y: 30, opacity: 0, duration: 1 }, "-=0.6");
      }
      if (btns) {
        tl.from(btns, { y: 20, opacity: 0, stagger: 0.12, duration: 0.8 }, "-=0.4");
      }

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current || isMobile) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-[-12px] top-[-12px] z-[999] h-6 w-6 rounded-full bg-deep-red/15 blur-sm transition-[width,height] duration-300"
          style={{ transform: "translate(-100px, -100px)" }}
        />
      )}

      <section
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-white to-cream/30"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-deep-red/[0.03] blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-deep-red/[0.02] blur-3xl" />
          <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-soft-rose/40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center px-6 md:flex-row md:px-10 lg:px-16">
          {/* Left: Text */}
          <div className="flex w-full flex-1 flex-col justify-center pt-28 md:w-[55%] md:pt-0 lg:w-[60%]">
            <div ref={textRef} className="space-y-2">
              <p className="hero-line text-sm font-semibold uppercase tracking-[0.25em] text-deep-red">
                Ladies Beauty Salon
              </p>
              <h1 className="hero-line text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[100px] xl:text-[120px]">
                <span className="block">YOUR BEAUTY</span>
                <span className="block">DESERVES</span>
                <span className="block text-deep-red">THE SPOTLIGHT</span>
              </h1>
              <p
                ref={subtitleRef}
                className="hero-line mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg"
              >
                Professional beauty care for women in Prayagraj. Hair, skin,
                makeup, bridal, and beauty services designed to make you feel
                confident and cared for.
              </p>
            </div>

            <div
              ref={buttonsRef}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[8px] bg-deep-red px-8 text-sm font-semibold text-white transition-all duration-500 hover:shadow-lg hover:shadow-deep-red/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full skew-x-12 transition-transform duration-700 group-hover:translate-x-full" />
                Book Appointment
              </a>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-[8px] border border-deep-red/25 bg-white/70 px-8 text-sm font-semibold text-deep-red backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-deep-red" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                Expert Stylists
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-deep-red" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                Premium Products
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-deep-red" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                4.8 Rating
              </span>
            </div>
          </div>

          {/* Right: 3D Lipstick */}
          <div
            ref={lipstickRef}
            className="relative flex w-full flex-1 items-center justify-center md:w-[45%] lg:w-[40%]"
            style={{ minHeight: isMobile ? "40vh" : "70vh" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <LipstickScene scrollProgress={scrollProgress} />
            </div>
          </div>
        </div>

        {scrollProgress > 0.05 && (
          <div
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-white"
            style={{ opacity: Math.min(scrollProgress * 2, 1) }}
          />
        )}
      </section>
    </>
  );
}
