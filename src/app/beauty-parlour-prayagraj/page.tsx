import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { areas, areaPath } from "@/content/areas";
import { business } from "@/content/business";
import { publishedServices, servicePath } from "@/content/services";

export const metadata: Metadata = {
  title: "Beauty Parlour in Prayagraj | Mahalaxmi Beauty Parlour, Colonelganj",
  description:
    "Mahalaxmi Beauty Parlour is a ladies beauty parlour in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Book on WhatsApp.",
  alternates: { canonical: "/beauty-parlour-prayagraj" },
  openGraph: {
    title: "Beauty Parlour in Prayagraj | Mahalaxmi Beauty Parlour",
    description:
      "Ladies beauty parlour in Prayagraj at Colonelganj. Hair, facial, makeup, bridal makeup, waxing, threading and beauty classes. Book on WhatsApp.",
  },
};

const WHATSAPP_LINK = business.bookingLink;

const FAQS = [
  {
    q: "Where is the best ladies beauty parlour in Prayagraj?",
    a: "Mahalaxmi Beauty Parlour at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj offers ladies beauty services with consultation-led pricing. Book on WhatsApp to confirm availability and the current price.",
  },
  {
    q: "What services does Mahalaxmi Beauty Parlour offer in Prayagraj?",
    a: "Hair cut, styling, smoothing and colour, facial, cleanup, party and engagement makeup, bridal makeup, pre-bridal packages, threading, waxing and beauty classes.",
  },
  {
    q: "Is Mahalaxmi Beauty Parlour only for ladies?",
    a: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon. All services are provided exclusively for women.",
  },
  {
    q: "How do I book an appointment at the parlour?",
    a: "Send a WhatsApp message with your name, the service you need and a preferred date and time. We confirm availability and the current price before your visit.",
  },
  {
    q: "What are the salon opening hours?",
    a: "The salon is open from 10:00 AM to 8:00 PM, all seven days of the week.",
  },
  {
    q: "Which areas does the parlour serve in Prayagraj?",
    a: "Customers visit from Colonelganj, Civil Lines, Georgetown, Katra, Allahpur, Mumfordganj and Dhoomanganj. The salon has a single location at Colonelganj.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CityPage() {
  const services = publishedServices();

  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "Beauty Parlour in Prayagraj", href: "/beauty-parlour-prayagraj" }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Parlour in Prayagraj</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Ladies Beauty Parlour in Prayagraj</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Mahalaxmi Beauty Parlour is a ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. The parlour is at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, and bookings are taken on WhatsApp with the price confirmed before any service begins.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[8px] glass-red p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Location</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{business.address.displayLine}</p>
            </div>
            <div className="rounded-[8px] glass-red p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Hours</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{business.hours.label} · {business.hours.time}</p>
            </div>
            <div className="rounded-[8px] glass-red p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Phone / WhatsApp</h2>
              <a href={business.telephoneHref} className="mt-3 block text-sm font-medium leading-6 text-deep-red transition hover:underline">{business.telephone}</a>
            </div>
            <div className="rounded-[8px] glass-red p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Booking</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Appointments are confirmed on WhatsApp before your visit.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Services at our Prayagraj parlour</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a key={s.slug} href={servicePath(s.slug)} className="group rounded-[8px] glass-red p-5 shadow-sm transition hover:border-deep-red">
                <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-deep-red">{s.name}</h3>
                <p className="mt-1 text-xs text-muted">{s.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] glass-red p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Areas we serve in Prayagraj</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              The salon is at Colonelganj, and customers visit from across Prayagraj. Find your area below for booking details.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <a key={a.slug} href={areaPath(a.slug)} className="rounded-[8px] border border-line bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:border-deep-red hover:text-deep-red">
                  Beauty Parlour near {a.name}, Prayagraj
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <article key={f.q} className="rounded-[8px] glass-red p-5">
                <h3 className="text-base font-semibold tracking-tight text-foreground">{f.q}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-deep-red p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Book your visit in Prayagraj</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              Message us on WhatsApp with your name, the service you need and a preferred date and time. We confirm availability, the exact service details and the current price before your visit.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
