import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Area } from "@/content/areas";
import { areaPath } from "@/content/areas";
import { business } from "@/content/business";
import { publishedServices, servicePath, whatsappForService } from "@/content/services";

export function AreaPage({ area }: { area: Area }) {
  const whatsappLink = whatsappForService("");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ name: "Areas We Serve", href: "/beauty-parlour-prayagraj" }, { name: area.name, href: areaPath(area.slug) }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Parlour · Prayagraj</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{area.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">{area.answerBlock}</p>
          <a
            href={whatsappLink}
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
            <div className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Salon address</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who is this for?</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {area.whoFor.map((item) => (
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
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Services for customers from {area.name}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedServices().map((s) => (
              <a key={s.slug} href={servicePath(s.slug)} className="group rounded-[8px] border border-line bg-white/88 p-5 shadow-sm transition hover:border-deep-red">
                <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-deep-red">{s.name}</h3>
                <p className="mt-1 text-xs text-muted">{s.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {area.faqs.map((f) => (
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
            <h2 className="text-2xl font-semibold tracking-tight">Book your visit from {area.name}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              Message us on WhatsApp with your name, the service you need and a preferred date and time. We confirm availability and the current price before your visit.
            </p>
            <a
              href={whatsappLink}
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
