import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Salon at Colonelganj, Prayagraj | Mahalaxmi Beauty Parlour",
  description:
    "Mahalaxmi Beauty Parlour is at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj. Ladies salon open 10:00 AM – 8:00 PM. Book on WhatsApp.",
  alternates: { canonical: "/salon-colonelganj-prayagraj" },
  openGraph: {
    title: "Salon at Colonelganj, Prayagraj | Mahalaxmi Beauty Parlour",
    description:
      "Find Mahalaxmi Beauty Parlour at Front of Jain Hostel, Colonelganj, Prayagraj. Open daily 10:00 AM – 8:00 PM. Book on WhatsApp.",
  },
};

const WHATSAPP_LINK = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to book an appointment.\nName:\nService:\nPreferred Date:\nPreferred Time:`
)}`;

const FAQS = [
  {
    q: "Where is Mahalaxmi Beauty Parlour located in Colonelganj?",
    a: "Mahalaxmi Beauty Parlour is located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, Uttar Pradesh 211002.",
  },
  {
    q: "What are the salon opening hours?",
    a: "The salon is open from 10:00 AM to 8:00 PM, all seven days of the week.",
  },
  {
    q: "How do I book an appointment at the Colonelganj salon?",
    a: "Send a WhatsApp message with your name, the service you need, and your preferred date and time. We confirm availability and the current price before your visit.",
  },
  {
    q: "Is Mahalaxmi Beauty Parlour only for ladies?",
    a: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon. All services are provided exclusively for women.",
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

export default function LocationPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "Salon at Colonelganj, Prayagraj", href: "/salon-colonelganj-prayagraj" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Salon Location</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Mahalaxmi Beauty Parlour at Colonelganj, Prayagraj</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Mahalaxmi Beauty Parlour is a ladies beauty salon at 109/4 Maharshi Dayanand Marg, in front of Jain Hostel, Colonelganj, Prayagraj. The salon is open from 10:00 AM to 8:00 PM every day. Bookings are taken on WhatsApp, and the price is confirmed before any service begins.
          </p>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Address</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{business.address.displayLine}</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Hours</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{business.hours.label} · {business.hours.time}</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Phone / WhatsApp</h2>
              <a href={business.telephoneHref} className="mt-3 block text-sm font-medium leading-6 text-deep-red transition hover:underline">{business.telephone}</a>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Booking</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Appointments are confirmed on WhatsApp before your visit.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-cream/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Finding the salon</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              The parlour is located on Maharshi Dayanand Marg, in front of Jain Hostel in Colonelganj. Use the Google Maps link for the exact route to the salon.
            </p>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Services available at this salon</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Hair cut and styling", "Hair smoothing and colour", "Facial and cleanup", "Party and engagement makeup", "Bridal makeup", "Pre-bridal packages", "Threading and waxing", "Beauty classes"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <article key={f.q} className="rounded-[8px] border border-line bg-background/75 p-5">
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
            <h2 className="text-2xl font-semibold tracking-tight">Book your visit to Colonelganj</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              Message us on WhatsApp with your name, the service you need and a preferred date and time. We confirm availability and the current price before your visit.
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
