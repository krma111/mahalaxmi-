"use client";

import { usePathname } from "next/navigation";
import { business } from "@/content/business";

export function FooterInstagram() {
  const isHome = usePathname() === "/";

  if (isHome) {
    return (
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs text-muted">Managed by @__karma111__</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <a
        href={business.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted transition hover:text-deep-red"
      >
        Instagram: {business.instagramHandle}
      </a>
    </div>
  );
}
