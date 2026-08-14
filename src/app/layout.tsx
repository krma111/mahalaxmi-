import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import { LanguageSetter } from "@/components/LanguageSetter";
import { JsonLd } from "@/components/seo/JsonLd";
import { areas, areaPath } from "@/content/areas";
import { business } from "@/content/business";
import { coreGraph } from "@/lib/seo/schema";
import { ORIGIN, siteUrl } from "@/lib/seo/urls";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const WHATSAPP_LINK = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to book an appointment.\nName:\nService:\nPreferred Date:\nPreferred Time:`
)}`;
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/bridal-makeup-prayagraj", label: "Bridal Makeup" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/beauty-classes-prayagraj", label: "Beauty Classes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title: {
    default: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    template: "%s | Mahalaxmi Beauty Parlour",
  },
  description: business.shortDescription,
  keywords: ["beauty parlour Prayagraj", "ladies salon Prayagraj", "bridal makeup Prayagraj", "beauty salon near me", "hair salon Prayagraj", "facial Prayagraj", "waxing Prayagraj", "beauty classes Prayagraj", "makeup artist Prayagraj", "ladies beauty parlour Colonelganj"],
  openGraph: {
    title: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    description: business.shortDescription,
    type: "website",
    locale: "en_IN",
    siteName: business.name,
    url: siteUrl("/"),
    images: [{ url: siteUrl("/opengraph-image"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    description: business.shortDescription,
    images: [siteUrl("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: siteUrl("/") },
  other: {
    "theme-color": "#8B1A2B",
    "application-name": business.name,
    "geo.region": "IN-UP",
    "geo.placename": "Prayagraj",
  },
};

function Footer() {
  return (
    <footer className="border-t border-deep-red/10 bg-white">
      <div className="bg-deep-red px-4 py-4 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white/85">Professional Beauty Care for Every Occasion.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream"
          >
            Book Your Appointment on WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-lg font-semibold text-foreground">{business.name}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-deep-red">Ladies Beauty Salon</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Professional Beauty Care for Every Occasion.</p>
          <div className="mt-6 space-y-2 text-sm text-muted">
            <p>{business.address.displayLine}</p>
            <a href={business.telephoneHref} className="block transition hover:text-deep-red">{business.telephone}</a>
          </div>
        </div>
        <nav className="lg:col-span-2" aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Quick Links</h2>
          <div className="mt-4 grid gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="w-fit text-muted transition hover:text-deep-red">{l.label}</Link>
            ))}
            <Link href="/blog" className="w-fit text-muted transition hover:text-deep-red">Blog</Link>
          </div>
        </nav>
        <nav className="md:col-span-2 lg:col-span-3" aria-label="Areas served">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Areas We Serve</h2>
          <div className="mt-4 grid gap-2 text-sm">
            {areas.map((a) => (
              <Link key={a.slug} href={areaPath(a.slug)} className="w-fit text-muted transition hover:text-deep-red">Beauty Parlour near {a.name}</Link>
            ))}
          </div>
        </nav>
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Working Hours</h2>
          <div className="mt-4 rounded-[8px] border border-line bg-cream/60 p-4 text-sm">
            <p className="font-semibold text-deep-red">{business.hours.label}</p>
            <p className="mt-2 text-lg font-semibold text-foreground">{business.hours.time}</p>
          </div>
          <div className="mt-4 flex gap-2">
            <Link href="/hi" className="rounded-[8px] border border-line bg-white px-3 py-2 text-sm font-semibold text-foreground transition hover:text-deep-red">हिंदी में पढ़ें</Link>
            <Link href="/beauty-parlour-prayagraj" className="rounded-[8px] border border-line bg-white px-3 py-2 text-sm font-semibold text-foreground transition hover:text-deep-red">Prayagraj</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-line bg-cream/45">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {business.name}. All Rights Reserved.</p>
          <div className="flex flex-col items-end gap-1">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition hover:text-deep-red">Instagram: {business.instagramHandle}</a>
          </div>
          <div className="flex gap-2">
            <Link href="/privacy-policy" className="rounded-[8px] border border-line bg-white px-3 py-2 font-semibold text-foreground transition hover:text-deep-red">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="rounded-[8px] border border-line bg-white px-3 py-2 font-semibold text-foreground transition hover:text-deep-red">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={coreGraph()} />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} min-h-screen flex flex-col`}>
        <LanguageSetter />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
