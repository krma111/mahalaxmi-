"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { business } from "@/content/business";

const WHATSAPP_LINK = business.bookingLink;

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-deep-red/10 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 w-full max-w-[1700px] items-center justify-between gap-4 px-6 md:px-[72px] xl:px-[120px]">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-red"
          aria-label="Mahalaxmi Beauty Parlour home"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={1536}
            height={1024}
            priority
            className="h-9 w-auto shrink-0 object-contain sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-xs font-semibold tracking-wide text-foreground/70 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-deep-red after:transition-transform hover:text-deep-red hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center justify-center rounded-md bg-deep-red px-5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(139,26,43,0.16)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(139,26,43,0.24)] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-red sm:inline-flex"
          >
            Book Appointment
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-deep-red/15 bg-white/80 text-deep-red transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-red lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="header-menu-open border-t border-deep-red/10 bg-white/96 px-6 pb-6 pt-3 shadow-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-[1700px]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/80 py-3 text-sm font-semibold text-foreground/75 transition-colors last:border-0 hover:text-deep-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-deep-red px-5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-red sm:hidden"
            >
              Book Appointment
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
