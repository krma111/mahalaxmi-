import type { Metadata } from "next";
import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
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

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";
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
  title: {
    default: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    template: "%s | Mahalaxmi Beauty Parlour",
  },
  description: "Mahalaxmi Beauty Parlour in Prayagraj offers ladies beauty services including hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Book on WhatsApp.",
  metadataBase: new URL("https://mahalaxmi-beauty-parlour.vercel.app"),
  keywords: ["beauty parlour Prayagraj", "ladies salon Prayagraj", "bridal makeup Prayagraj", "beauty salon near me", "hair salon Prayagraj", "facial Prayagraj", "waxing Prayagraj", "beauty classes Prayagraj", "makeup artist Prayagraj", "best beauty parlour in Prayagraj"],
  openGraph: {
    title: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    description: "Ladies beauty salon offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes in Prayagraj.",
    type: "website",
    locale: "en_IN",
    siteName: "Mahalaxmi Beauty Parlour",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
    description: "Ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  other: {
    "theme-color": "#7a0014",
    "application-name": "Mahalaxmi Beauty Parlour",
    "geo.region": "IN-UP",
    "geo.placename": "Prayagraj",
    "geo.position": "25.4358;81.8463",
    "ICBM": "25.4358, 81.8463",
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
          <p className="text-lg font-semibold text-foreground">Mahalaxmi Beauty Parlour</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-deep-red">Ladies Beauty Salon</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Professional Beauty Care for Every Occasion.</p>
        </div>
        <nav className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Quick Links</h2>
          <div className="mt-4 grid gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="w-fit text-muted transition hover:text-deep-red">{l.label}</Link>
            ))}
          </div>
        </nav>
        <div className="md:col-span-2 lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Contact Details</h2>
          <div className="mt-4 space-y-3 text-sm text-muted">
            <p>109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, UP - 211002</p>
            <a href="tel:+919889594584" className="block transition hover:text-deep-red">+91 98895 94584</a>
          </div>
        </div>
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">Working Hours</h2>
          <div className="mt-4 rounded-[8px] border border-line bg-cream/60 p-4 text-sm">
            <p className="font-semibold text-deep-red">Monday - Sunday</p>
            <p className="mt-2 text-lg font-semibold text-foreground">10:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-line bg-cream/45">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Mahalaxmi Beauty Parlour. All Rights Reserved.</p>
          <div className="flex flex-col items-end gap-1">
            <p className="text-xs text-muted">Managed by <span className="font-semibold text-foreground">Badal Dubey</span></p>
            <a href="https://instagram.com/__karma111__" target="_blank" rel="noopener noreferrer" className="text-xs text-muted transition hover:text-deep-red">Instagram: @__karma111__</a>
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Mahalaxmi Beauty Parlour",
    description: "Ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes.",
    url: "https://mahalaxmi-beauty-parlour.vercel.app",
    telephone: "+919889594584",
    address: {
      "@type": "PostalAddress",
      streetAddress: "109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonel Ganj",
      addressLocality: "Prayagraj",
      addressRegion: "Uttar Pradesh",
      postalCode: "211002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.4358",
      longitude: "81.8463",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    image: "https://mahalaxmi-beauty-parlour.vercel.app/og-image.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50",
      bestRating: "5",
      ratingCount: "50",
    },
    sameAs: [
      "https://instagram.com/mahalaxmi.beauty",
      "https://instagram.com/__karma111__",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Prayagraj",
        sameAs: "https://en.wikipedia.org/wiki/Prayagraj",
      },
      {
        "@type": "AdministrativeArea",
        name: "Uttar Pradesh",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Badal Dubey",
    },
    foundingDate: "2024",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Cut" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Styling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facial" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cleanup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Party Makeup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Makeup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement Makeup" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Threading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waxing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Beauty Classes" } },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919889594584",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Mahalaxmi Beauty Parlour",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
