import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj";

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

const REVIEWS = [
  { name: "Customer A", tag: "Beauty care", text: "Friendly service and a comfortable experience.", stars: 5 },
  { name: "Customer B", tag: "Regular services", text: "Good place for regular beauty care and makeup services.", stars: 5 },
  { name: "Customer C", tag: "Skin care", text: "Clean setup and helpful staff.", stars: 4 },
];

const FAQS = [
  { q: "Where is Mahalaxmi Beauty Parlour located?", a: "Mahalaxmi Beauty Parlour is located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonel Ganj, Prayagraj, Uttar Pradesh." },
  { q: "Does Mahalaxmi Beauty Parlour offer bridal makeup?", a: "Yes, Mahalaxmi Beauty Parlour offers bridal makeup, engagement makeup, party makeup and pre-bridal beauty services." },
  { q: "Can I book an appointment on WhatsApp?", a: "Yes, customers can book appointments directly through WhatsApp using the Book on WhatsApp button." },
  { q: "Is Mahalaxmi Beauty Parlour only for ladies?", a: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon." },
  { q: "Does the parlour offer beauty classes?", a: "Yes, Mahalaxmi Beauty Parlour offers beauty parlour classes, makeup learning and basic hair styling guidance." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < count ? "fill-deep-red text-deep-red" : "text-line"}`} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-deep-red/5 to-transparent py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Ladies Beauty Salon</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Professional Beauty Care<br />for Women in Prayagraj
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Hair, skin, makeup, bridal, and beauty services designed to make you feel confident and cared for.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-6 text-sm font-semibold text-white transition hover:bg-[#741722]">
              Book on WhatsApp
            </a>
            <Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-6 text-sm font-semibold text-deep-red transition hover:bg-cream">
              View Services
            </Link>
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
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Reviews</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Customer Experience Preview</h2>
              <div className="mt-8 rounded-[8px] border border-line bg-cream/80 p-5">
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-tight text-deep-red">4.8</span>
                  <div className="pb-1">
                    <Stars count={5} />
                    <p className="mt-1 text-sm text-muted">Preview rating summary</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">View Reviews on Google</a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {REVIEWS.map((r) => (
                <article key={r.name} className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{r.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">{r.tag}</p>
                    </div>
                    <Stars count={r.stars} />
                  </div>
                  <p className="mt-5 text-sm leading-6 text-muted">{r.text}</p>
                </article>
              ))}
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
              <p>109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonel Ganj, Prayagraj, 211002, Uttar Pradesh</p>
              <p>Phone / WhatsApp: +91 98895 94584</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="tel:+919889594584" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Call Now</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Book on WhatsApp</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">Get Directions</a>
            </div>
          </div>
          <div className="rounded-[8px] border border-line bg-cream/80 p-6">
            <h3 className="mt-4 text-xl font-semibold text-foreground">Front of Jain Hostel, Colonel Ganj</h3>
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
