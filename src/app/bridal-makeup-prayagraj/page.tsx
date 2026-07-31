import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bridal Makeup in Prayagraj",
  description: "Book bridal makeup, engagement makeup, pre-bridal packages and hair styling consultation at Mahalaxmi Beauty Parlour in Prayagraj. Best bridal makeup artist for wedding, engagement and party.",
  alternates: { canonical: "/bridal-makeup-prayagraj" },
  openGraph: {
    title: "Bridal Makeup in Prayagraj | Mahalaxmi Beauty Parlour",
    description: "Expert bridal makeup, engagement makeup, and pre-bridal packages in Prayagraj. Book your bridal consultation today.",
  },
};

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20a%20bridal%20consultation.%0AName%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";

const FAQS = [
  { q: "Do you offer bridal makeup in Prayagraj?", a: "Yes, Mahalaxmi Beauty Parlour offers bridal makeup, engagement makeup, pre-bridal packages and bridal consultation in Prayagraj." },
  { q: "How much does bridal makeup cost?", a: "Bridal makeup packages vary based on requirements. Please contact us on WhatsApp for detailed pricing and package options." },
  { q: "Can I book a trial session before the wedding?", a: "Yes, trial sessions can be scheduled through WhatsApp. We recommend booking at least 2 weeks before your wedding date." },
  { q: "Do you provide engagement makeup?", a: "Yes, we offer soft and polished engagement makeup customized to match your outfit and preferences." },
  { q: "What is included in pre-bridal packages?", a: "Pre-bridal packages include skincare, facial, threading, waxing and hair care sessions leading up to the wedding day." },
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

function BridalBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li><a href="/" className="transition hover:text-deep-red">Home</a></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground font-medium" aria-current="page">Bridal Makeup</li>
      </ol>
    </nav>
  );
}

export default function BridalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BridalBreadcrumb />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Bridal Makeup</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Bridal Makeup in Prayagraj</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Plan engagement makeup, bridal makeup, pre-bridal packages and hair styling through a simple WhatsApp consultation. Mahalaxmi Beauty Parlour is a trusted bridal makeup destination in Prayagraj, offering personalized bridal beauty services for weddings, engagements, parties and special occasions.
          </p>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Bridal Makeup</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Complete bridal makeup with personal consultation. Every step is done carefully to enhance natural beauty on your wedding day. Includes HD foundation, eye makeup, lip makeup, and styling.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Duration: 2-3 hours</p>
            </article>
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Engagement Makeup</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Soft, polished engagement makeup for your special day. Customized to match your outfit and preferences. Natural glow with long-lasting finish.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Duration: 1.5-2 hours</p>
            </article>
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Pre-Bridal Package</h2>
              <p className="mt-3 text-sm leading-6 text-muted">A complete pre-wedding beauty regimen including facial sessions, skin brightening, threading, waxing and hair care. Recommended to start 4-6 weeks before the wedding.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Multiple sessions over 4-6 weeks</p>
            </article>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-cream/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Why Choose Mahalaxmi for Bridal Makeup?</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {["Personalized bridal consultation", "High-quality professional products", "Trial sessions available", "Experienced bridal makeup artist", "Hygienic and clean setup", "Affordable bridal packages in Prayagraj"].map((item) => (
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
