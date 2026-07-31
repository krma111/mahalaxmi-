import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/content/business";
import { servicePath } from "@/content/services";

export const metadata: Metadata = {
  title: "Bridal Makeup in Prayagraj",
  description: "Book bridal makeup, engagement makeup, pre-bridal packages and hair styling consultation at Mahalaxmi Beauty Parlour in Prayagraj. Consultations on WhatsApp with price confirmed before booking.",
  alternates: { canonical: "/bridal-makeup-prayagraj" },
  openGraph: {
    title: "Bridal Makeup in Prayagraj | Mahalaxmi Beauty Parlour",
    description: "Bridal makeup, engagement makeup, and pre-bridal packages in Prayagraj. Book your bridal consultation on WhatsApp.",
  },
};

const WHATSAPP_LINK = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to book a bridal consultation.\nName:\nWedding Date:\nPreferred Time for Consultation:`
)}`;

const FAQS = [
  { q: "Do you offer bridal makeup in Prayagraj?", a: "Yes, Mahalaxmi Beauty Parlour offers bridal makeup, engagement makeup, pre-bridal packages and bridal consultation in Prayagraj." },
  { q: "How much does bridal makeup cost?", a: "Bridal makeup packages vary based on requirements. Please contact us on WhatsApp for detailed pricing and package options." },
  { q: "Can I book a trial session before the wedding?", a: "Yes, trial sessions can be scheduled through WhatsApp. We recommend booking at least 2 weeks before your wedding date." },
  { q: "Do you provide engagement makeup?", a: "Yes, we offer soft and polished engagement makeup customized to match your outfit and preferences." },
  { q: "What is included in pre-bridal packages?", a: "Pre-bridal packages include a planned series of beauty sessions before the wedding. Request the current package sheet for the exact inclusions." },
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

const PROCESS = [
  {
    title: "WhatsApp consultation",
    text: "Share your wedding date, outfit and reference looks. We confirm what we need to plan and answer your questions.",
  },
  {
    title: "Package and inclusions",
    text: "We confirm the exact inclusions, exclusions, trial policy and current price before you book.",
  },
  {
    title: "Trial session",
    text: "A trial is scheduled well before the wedding so the look is finalised and any adjustments are made.",
  },
  {
    title: "Wedding day",
    text: "Makeup and styling are done to the agreed ready-by time, with the exact look you approved.",
  },
];

export default function BridalPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "Bridal Makeup", href: "/bridal-makeup-prayagraj" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Bridal Makeup</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Bridal Makeup in Prayagraj</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Mahalaxmi Beauty Parlour in Colonelganj, Prayagraj offers bridal makeup with a consultation-first process. Engagement makeup, pre-bridal packages and hair styling are planned together with your wedding date, outfit and ready-by time before anything is booked.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]"
          >
            Book Bridal Consultation
          </a>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Booking</h2>
              <p className="mt-3 text-sm leading-6 text-muted">WhatsApp consultation, then a confirmed booking.</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Trial</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Scheduled at least 2 weeks before the wedding.</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Pricing</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Exact inclusions and price confirmed before booking.</p>
            </div>
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Location</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Colonelganj, Prayagraj · {business.hours.label} {business.hours.time}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a href={servicePath("engagement-makeup-prayagraj")} className="group rounded-[8px] border border-line bg-white/88 p-6 shadow-sm transition hover:border-deep-red">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-deep-red">Engagement Makeup</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Soft, polished engagement makeup customized to match your outfit and preferences.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">View engagement makeup page →</p>
            </a>
            <a href={servicePath("pre-bridal-package-prayagraj")} className="group rounded-[8px] border border-line bg-white/88 p-6 shadow-sm transition hover:border-deep-red">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-deep-red">Pre-Bridal Package</h2>
              <p className="mt-3 text-sm leading-6 text-muted">A planned pre-wedding beauty regimen. The exact package sheet is confirmed before scheduling.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">View pre-bridal package page →</p>
            </a>
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Bridal Makeup</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Complete bridal makeup planned through consultation, with a trial before the wedding day.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Part of the consultation on this page</p>
            </article>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">How bridal makeup is planned</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {PROCESS.map((step, index) => (
              <li key={step.title} className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
                <p className="text-sm font-semibold text-deep-red">Step {index + 1}</p>
                <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-cream/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Why book bridal services with us?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Consultation-first planning", "Trial sessions available", "Ladies-only salon", "Price and inclusions confirmed before booking", "Hygienic and clean setup", "Easy WhatsApp booking"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
            <h2 className="text-2xl font-semibold tracking-tight">Book Bridal Consultation</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">Contact us on WhatsApp to discuss your bridal makeup requirements, view packages, and schedule a trial session.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Book Bridal Consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}
