import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mahalaxmi Beauty Parlour Prayagraj | Ladies Salon & Bridal Makeup",
  description: "Mahalaxmi Beauty Parlour in Prayagraj offers ladies beauty services including hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Book on WhatsApp.",
};

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

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-foreground">
          Mahalaxmi <span className="text-deep-red">Beauty Parlour</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-muted transition hover:text-deep-red">
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-deep-red px-4 text-sm font-semibold text-white transition hover:bg-[#741722]"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}

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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
