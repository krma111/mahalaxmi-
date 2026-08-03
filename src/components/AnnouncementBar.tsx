"use client";

import Link from "next/link";
import { useState } from "react";
import { announcements } from "@/content/announcements";

const DISMISS_KEY = "mahalaxmi-announcement-dismissed";

function readDismissed(activeId: string | undefined): boolean {
  if (!activeId) return false;
  try {
    return sessionStorage.getItem(DISMISS_KEY) === activeId;
  } catch {
    return false;
  }
}

export function AnnouncementBar() {
  const active = announcements.find((a) => a.enabled);
  const [dismissed, setDismissed] = useState(() => readDismissed(active?.id));

  if (!active || dismissed) return null;

  const inner = (
    <>
      <span className="text-sm font-medium text-white/90">{active.text}</span>
      {active.href && (
        <span className="shrink-0 rounded-[6px] bg-white px-3 py-1 text-xs font-semibold text-deep-red transition hover:bg-cream">
          {active.cta ?? "Learn more"}
        </span>
      )}
    </>
  );

  return (
    <div className="flex items-center justify-center gap-3 bg-deep-red px-4 py-2 text-center">
      {active.href ? (
        <Link href={active.href} className="flex flex-wrap items-center justify-center gap-3">{inner}</Link>
      ) : (
        <span className="flex flex-wrap items-center justify-center gap-3">{inner}</span>
      )}
      <button
        type="button"
        aria-label="Dismiss announcement"
        className="ml-2 shrink-0 rounded-full p-1 text-white/70 transition hover:bg-white/15 hover:text-white"
        onClick={() => {
          setDismissed(true);
          try {
            sessionStorage.setItem(DISMISS_KEY, active.id);
          } catch {
            // Storage unavailable — bar just disappears for this session.
          }
        }}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </div>
  );
}
