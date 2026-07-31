import Link from "next/link";
import Hero from "@/components/Hero";

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj";

const AEO_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Where is Mahalaxmi Beauty Parlour located?", acceptedAnswer: { "@type": "Answer", text: "Mahalaxmi Beauty Parlour is located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, Uttar Pradesh." } },
        { "@type": "Question", name: "Does Mahalaxmi Beauty Parlour offer bridal makeup?", acceptedAnswer: { "@type": "Answer", text: "Yes, Mahalaxmi Beauty Parlour offers bridal makeup, engagement makeup, party makeup and pre-bridal beauty services." } },
        { "@type": "Question", name: "Can I book an appointment on WhatsApp?", acceptedAnswer: { "@type": "Answer", text: "Yes, customers can book appointments directly through WhatsApp using the Book on WhatsApp button." } },
        { "@type": "Question", name: "Is Mahalaxmi Beauty Parlour only for ladies?", acceptedAnswer: { "@type": "Answer", text: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon." } },
        { "@type": "Question", name: "Does the parlour offer beauty classes?", acceptedAnswer: { "@type": "Answer", text: "Yes, Mahalaxmi Beauty Parlour offers beauty parlour classes, makeup learning and basic hair styling guidance." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://mahalaxmibeauty.in" },
        { "@type": "ListItem", position: 2, name: "Bridal Makeup Prayagraj", item: "https://mahalaxmibeauty.in/bridal-makeup-prayagraj" },
        { "@type": "ListItem", position: 3, name: "Beauty Classes Prayagraj", item: "https://mahalaxmibeauty.in/beauty-classes-prayagraj" },
      ],
    },
  ],
};

const SERVICES = [
  { name: "Hair Cut", category: "Hair Services", popular: true },
  { name: "Hair Styling", category: "Hair Services", popular: true },
  { name: "Facial", category: "Skin & Facial", popular: true },
  { name: "Cleanup", category: "Skin & Facial", popular: true },
  { name: "Party Makeup", category: "Makeup", popular: true },
  { name: "Engagement Makeup", category: "Makeup", popular: true },
  { name: "Threading", category: "Regular Beauty Services", popular: true },
  { name: "Waxing", category: "Regular Beauty Services", popular: true },
  { name: "Basic Beauty Parlour Course", category: "Beauty Classes", popular: true },
];

const FAQS = [
  { q: "Where is Mahalaxmi Beauty Parlour located?", a: "Mahalaxmi Beauty Parlour is located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, Uttar Pradesh." },
  { q: "Does Mahalaxmi Beauty Parlour offer bridal makeup?", a: "Yes, Mahalaxmi Beauty Parlour offers bridal makeup, engagement makeup, party makeup and pre-bridal beauty services." },
  { q: "Can I book an appointment on WhatsApp?", a: "Yes, customers can book appointments directly through WhatsApp using the Book on WhatsApp button." },
  { q: "Is Mahalaxmi Beauty Parlour only for ladies?", a: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon." },
  { q: "Does the parlour offer beauty classes?", a: "Yes, Mahalaxmi Beauty Parlour offers beauty parlour classes, makeup learning and basic hair styling guidance." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(AEO_DATA) }} />
      <Hero />

      {/* AEO Answer Block */}
      <section aria-label="Quick answer" className="bg-cream/70 py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-white/90 p-5 text-center shadow-sm">
            <p className="text-sm leading-7 text-muted">
              <strong className="text-foreground">Mahalaxmi Beauty Parlour</strong> is a ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj. Book via WhatsApp at +91 98895 94584.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Popular Services</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Clean beauty services for regular care and special moments</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.name} className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    {s.name}
                  </span>
                  {s.popular && <span className="rounded-full bg-soft-rose/70 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-deep-red">Popular</span>}
                </div>
                <p className="mt-1 text-xs text-muted">{s.category}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Beauty Classes */}
      <section className="bg-cream/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-white/90 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Classes</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Learn basic beauty parlour skills and self-grooming</h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:text-base">
              Classes can include basic beauty parlour course guidance, makeup learning, hair styling basics and self-grooming support.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-white/90 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Customer Reviews</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Read customer experiences on Google</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              We welcome honest feedback from customers who have used our services at Mahalaxmi Beauty Parlour in Prayagraj. Read experiences and leave your own review on our Google Business Profile.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">View Reviews on Google</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Write a Review</a>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO */}
      <section className="bg-cream/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-white/90 p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Local Ladies Salon</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Ladies beauty salon in Prayagraj near Colonel Ganj and Katra</h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-muted">
              Mahalaxmi Beauty Parlour is a ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Located in Colonel Ganj, the parlour focuses on friendly service, clean beauty care and easy appointment booking through WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Local SEO FAQs</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Helpful questions before booking</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <article key={f.q} className="rounded-[8px] border border-line bg-background/75 p-5">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{f.q}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Visit or book directly on WhatsApp</h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p className="font-semibold text-foreground">Mahalaxmi Beauty Parlour</p>
              <p>109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, 211002, Uttar Pradesh</p>
              <p>Phone / WhatsApp: +91 98895 94584</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+919889594584" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Call Now</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Book on WhatsApp</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">Get Directions</a>
            </div>
          </div>
          <div className="rounded-[8px] border border-line bg-cream/80 p-6">
            <h3 className="mt-4 text-xl font-semibold text-foreground">Front of Jain Hostel, Colonelganj</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Use directions for the latest route to the salon location in Prayagraj.</p>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Open Google Maps</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-red py-14 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">Book Appointment</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Ready for your next beauty service?</h2>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">
            Book on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
