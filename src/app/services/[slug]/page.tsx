import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/content/business";
import {
  getService,
  publishedServices,
  servicePath,
  serviceUrl,
  whatsappForService,
} from "@/content/services";
import { entityIds } from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publishedServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.status !== "published") return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: servicePath(slug) },
    openGraph: {
      title: `${service.metaTitle} | ${business.name}`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || service.status !== "published") notFound();

  const whatsappLink = whatsappForService(slug);
  const related = publishedServices().filter((s) => service.related.includes(s.slug));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl(slug)}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.answerBlock,
    url: serviceUrl(slug),
    provider: { "@id": entityIds.salon },
    areaServed: "Prayagraj",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: whatsappLink,
      availableLanguage: ["en", "hi"],
    },
  };

  const schemas: Record<string, unknown>[] = [serviceSchema];
  if (service.faqs.length >= 2) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: service.name, href: servicePath(slug) }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">{service.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{service.h1}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">{service.answerBlock}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[8px] glass-red p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-deep-red">Key facts</h2>
              <dl className="mt-3 space-y-2 text-sm leading-6 text-muted">
                <div><dt className="font-medium text-foreground">Category</dt><dd>{service.category}</dd></div>
                <div><dt className="font-medium text-foreground">Location</dt><dd>{business.address.addressLocality}, {business.address.addressRegion}</dd></div>
                <div><dt className="font-medium text-foreground">Booking</dt><dd>Appointment via WhatsApp</dd></div>
                <div><dt className="font-medium text-foreground">Pricing</dt><dd>Confirmed during consultation</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      {service.whoFor.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Who is this for?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.whoFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {service.process.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">How the service works</h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {service.process.map((step, index) => (
                <li key={step.title} className="rounded-[8px] glass-red p-5 shadow-sm">
                  <p className="text-sm font-semibold text-deep-red">Step {index + 1}</p>
                  <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] glass-red p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Pricing</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{service.priceBasis}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900"
            >
              Get current price on WhatsApp
            </a>
          </div>
        </div>
      </section>
      {(service.preparation.length > 0 || service.aftercare.length > 0) && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {service.preparation.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">Before the appointment</h2>
                  <ul className="mt-4 space-y-3">
                    {service.preparation.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 12 2 2 4-4"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {service.aftercare.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">After the appointment</h2>
                  <ul className="mt-4 space-y-3">
                    {service.aftercare.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 12 2 2 4-4"/></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {service.faqs.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.faqs.map((f) => (
                <article key={f.q} className="rounded-[8px] glass-red p-5">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={servicePath(item.slug)}
                  className="group rounded-[8px] glass-red p-5 shadow-sm transition hover:border-deep-red"
                >
                  <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-deep-red">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answerBlock}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-deep-red p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Book {service.name} in Prayagraj</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              Message us on WhatsApp with the {service.name.toLowerCase()} you need, your preferred date and time. We confirm availability, the exact service details and the current price before your visit.
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
