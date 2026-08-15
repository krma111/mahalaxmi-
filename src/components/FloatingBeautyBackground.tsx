"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type IconProps = { className?: string };

function CreamJar({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <rect x="24" y="8" width="52" height="24" rx="6" fill="#8b1a2b" />
      <rect x="30" y="12" width="40" height="4" rx="2" fill="#fdf6f0" opacity="0.35" />
      <path d="M18 32h64l-4 38a32 24 0 0 1-56 0Z" fill="#fdf6f0" stroke="#e8d9d0" strokeWidth="2" />
      <rect x="30" y="40" width="40" height="20" rx="3" fill="#f5e1da" />
      <circle cx="50" cy="50" r="5" fill="#8b1a2b" />
    </svg>
  );
}

function PowderCompact({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="36" y="6" width="28" height="14" rx="5" fill="#b98a2f" />
      <circle cx="50" cy="54" r="44" fill="#d4a94b" />
      <circle cx="50" cy="54" r="36" fill="#fdf6f0" />
      <circle cx="50" cy="54" r="28" fill="#f5e1da" />
      <circle cx="50" cy="54" r="18" fill="#fdf6f0" />
      <circle cx="50" cy="54" r="4" fill="#8b1a2b" />
    </svg>
  );
}

function PowderPuff({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="#f5e1da" />
      <circle cx="50" cy="50" r="34" fill="#fdf6f0" />
      <path d="M38 30c10-8 24-8 32 2-2 12-14 20-26 16" stroke="#f0d8cf" strokeWidth="4" strokeLinecap="round" />
      <path d="M64 64c-8 10-22 10-30 2" stroke="#f0d8cf" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function FaceBrush({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" aria-hidden="true">
      <path d="M46 16h8v56a4 4 0 0 1-8 0Z" fill="#8b1a2b" />
      <rect x="42" y="76" width="16" height="10" rx="2" fill="#d4a94b" />
      <path d="M38 86h24l5 22a16 10 0 0 1-34 0Z" fill="#f5e1da" stroke="#e0c4b8" strokeWidth="1.5" />
    </svg>
  );
}

function Lipstick({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" aria-hidden="true">
      <path d="M30 16h20l3 40a13 10 0 0 1-26 0Z" fill="#c9203e" />
      <rect x="26" y="58" width="28" height="18" rx="3" fill="#d4a94b" />
      <rect x="21" y="76" width="38" height="36" rx="6" fill="#8b1a2b" />
      <rect x="27" y="82" width="26" height="24" rx="3" fill="#66000d" />
    </svg>
  );
}

function FoundationTube({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" aria-hidden="true">
      <rect x="25" y="14" width="30" height="14" rx="4" fill="#d4a94b" />
      <path d="M27 28h26l3 62a16 12 0 0 1-32 0Z" fill="#fdf6f0" stroke="#e8d9d0" strokeWidth="2" />
      <rect x="34" y="38" width="12" height="40" rx="4" fill="#8b1a2b" opacity="0.85" />
    </svg>
  );
}

function Mascara({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 60 120" fill="none" aria-hidden="true">
      <rect x="24" y="16" width="12" height="52" rx="5" fill="#4d000c" />
      <rect x="27" y="22" width="6" height="40" rx="3" fill="#8b1a2b" />
      <rect x="22" y="12" width="16" height="8" rx="2" fill="#d4a94b" />
      <rect x="26" y="68" width="8" height="14" rx="3" fill="#8b1a2b" />
      <rect x="28" y="82" width="4" height="10" rx="2" fill="#8b1a2b" />
    </svg>
  );
}

type FloatingItem = {
  id: number;
  icon: (props: IconProps) => ReactNode;
  size: number;
  depth: number;
  opacity: number;
  blur: number;
  duration: number;
  delay: number;
  mobile: boolean;
  style: CSSProperties;
};

const ITEMS: FloatingItem[] = [
  { id: 0, icon: CreamJar, size: 132, depth: 0.08, opacity: 0.28, blur: 1, duration: 9, delay: 0, mobile: true, style: { top: "14%", left: "5%" } },
  { id: 1, icon: PowderCompact, size: 150, depth: 0.18, opacity: 0.32, blur: 0, duration: 8, delay: 0.6, mobile: true, style: { top: "30%", right: "7%" } },
  { id: 2, icon: FoundationTube, size: 112, depth: 0.14, opacity: 0.22, blur: 1.5, duration: 10, delay: 1.2, mobile: false, style: { top: "5%", left: "32%" } },
  { id: 3, icon: FaceBrush, size: 108, depth: 0.22, opacity: 0.3, blur: 0, duration: 7, delay: 0.3, mobile: true, style: { top: "52%", right: "14%" } },
  { id: 4, icon: Lipstick, size: 86, depth: 0.12, opacity: 0.26, blur: 0.5, duration: 8.5, delay: 0.9, mobile: false, style: { bottom: "28%", right: "24%" } },
  { id: 5, icon: PowderPuff, size: 118, depth: 0.1, opacity: 0.24, blur: 1, duration: 9.5, delay: 1.6, mobile: true, style: { bottom: "12%", left: "10%" } },
  { id: 6, icon: Mascara, size: 78, depth: 0.16, opacity: 0.22, blur: 1, duration: 8, delay: 0.4, mobile: false, style: { bottom: "6%", left: "40%" } },
];

export function FloatingBeautyBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const refs = useRef(new Map<number, HTMLDivElement>());

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const list = ITEMS.filter((it) => (isMobile ? it.mobile : true));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const y = window.scrollY;
      for (const item of list) {
        const el = refs.current.get(item.id);
        if (!el) continue;
        el.style.transform = `translate3d(0, ${(y * item.depth).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  const visible = ITEMS.filter((it) => (isMobile ? it.mobile : true));

  return (
    <div className="no-print fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {visible.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            ref={(el) => {
              if (el) refs.current.set(item.id, el);
              else refs.current.delete(item.id);
            }}
            className="float-item absolute"
            style={{
              ...item.style,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
              filter: item.blur ? `blur(${item.blur}px)` : undefined,
            }}
          >
            <div
              className="float-bob"
              style={
                {
                  "--float-duration": `${item.duration}s`,
                  "--float-delay": `${item.delay}s`,
                } as CSSProperties
              }
            >
              <Icon className="h-full w-full drop-shadow-[0_18px_22px_rgba(139,26,43,0.14)]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
