import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beauty Services in Prayagraj",
  description: "Explore hair care, facial, makeup, waxing, threading and beauty services at Mahalaxmi Beauty Parlour in Prayagraj. Ladies beauty salon near Colonel Ganj offering professional beauty treatments.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Beauty Services in Prayagraj | Mahalaxmi Beauty Parlour",
    description: "Hair care, facial, makeup, waxing, threading, bridal makeup and beauty classes at Mahalaxmi Beauty Parlour in Prayagraj.",
  },
};

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";

const SERVICES = [
  {
    category: "Hair Services",
    items: [
      { name: "Hair Cut", desc: "Modern and classic haircuts for ladies. Precision cutting tailored to your face shape and hair type." },
      { name: "Hair Styling", desc: "Professional hair styling for daily wear, parties, weddings and special occasions." },
      { name: "Hair Smoothing", desc: "Smoothing treatment to reduce frizz and add shine. Makes hair manageable and soft." },
      { name: "Hair Color", desc: "Professional hair coloring services including global color, highlights, and root touch-up." },
      { name: "Hair Spa", desc: "Deep conditioning hair spa treatment for nourished, healthy and shiny hair." },
      { name: "Hair Treatment", desc: "Restorative hair treatments for damaged, dry or chemically treated hair." },
    ],
  },
  {
    category: "Skin & Facial",
    items: [
      { name: "Facial", desc: "Rejuvenating facial treatments for glowing skin. Customized for different skin types." },
      { name: "Cleanup", desc: "Deep cleansing facial for daily skincare maintenance. Removes impurities and refreshes skin." },
      { name: "Skin Rejuvenation", desc: "Advanced skin care treatments to restore natural glow and reduce signs of aging." },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "Party Makeup", desc: "Glamorous party makeup for receptions, birthdays, and celebrations. Long-lasting and photo-ready." },
      { name: "Engagement Makeup", desc: "Soft and elegant engagement makeup customized to complement your outfit and style." },
      { name: "Bridal Makeup", desc: "Complete bridal makeup with HD finish. Personal consultation and trial available." },
    ],
  },
  {
    category: "Regular Beauty Services",
    items: [
      { name: "Threading", desc: "Precise eyebrow and face threading for clean, defined shaping." },
      { name: "Waxing", desc: "Full body and partial waxing services using gentle wax suitable for sensitive skin." },
      { name: "Manicure", desc: "Hand and nail care treatment including shaping, cuticle care and polish." },
      { name: "Pedicure", desc: "Foot and nail care treatment for soft, clean and well-groomed feet." },
    ],
  },
  {
    category: "Beauty Classes",
    items: [
      { name: "Basic Beauty Parlour Course", desc: "Learn threading, waxing, facial, makeup and hair styling basics. Perfect for beginners." },
      { name: "Makeup Learning", desc: "Step-by-step makeup training including everyday looks, party makeup and bridal techniques." },
      { name: "Self-Grooming Classes", desc: "Personal grooming and skincare lessons for daily beauty care routines." },
    ],
  },
];

const FAQS = [
  { q: "What beauty services does Mahalaxmi Beauty Parlour offer?", a: "We offer hair care, facial, makeup, bridal makeup, engagement makeup, party makeup, waxing, threading, skin care, manicure, pedicure, beauty classes and self-grooming services." },
  { q: "Where is Mahalaxmi Beauty Parlour located?", a: "We are located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonel Ganj, Prayagraj, Uttar Pradesh 211002." },
  { q: "How can I book an appointment?", a: "You can book an appointment directly through WhatsApp by clicking the Book on WhatsApp button on our website." },
  { q: "Do you offer bridal makeup packages?", a: "Yes, we offer bridal makeup, engagement makeup, pre-bridal packages and party makeup services." },
  { q: "Is Mahalaxmi Beauty Parlour only for ladies?", a: "Yes, Mahalaxmi Beauty Parlour is a ladies beauty salon providing services exclusively for women." },
  { q: "Do you offer beauty classes in Prayagraj?", a: "Yes, we offer basic beauty parlour courses, makeup classes, hair styling lessons and self-grooming training." },
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

function ServicesBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li><a href="/" className="transition hover:text-deep-red">Home</a></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground font-medium" aria-current="page">Services</li>
      </ol>
    </nav>
  );
}

function ServiceCard({ title, items }: { title: string; items: { name: string; desc: string }[] }) {
  return (
    <article className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <svg className="h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              {item.name}
            </h3>
            <p className="mt-1 pl-6 text-xs leading-5 text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <ServicesBreadcrumb />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Our Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Professional Beauty Services in Prayagraj</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Explore hair, facial, makeup, waxing, threading and beauty care services offered at Mahalaxmi Beauty Parlour in Prayagraj. Our ladies salon near Colonel Ganj provides professional beauty treatments in a clean, comfortable and women-friendly environment.
          </p>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((group) => (
              <ServiceCard key={group.category} title={group.category} items={group.items} />
            ))}
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
          <div className="text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-6 text-sm font-semibold text-white transition hover:bg-[#741722]">Book a Service on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
