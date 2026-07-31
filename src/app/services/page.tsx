import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/content/business";
import { servicePath } from "@/content/services";

export const metadata: Metadata = {
  title: "Beauty Services in Prayagraj",
  description: "Explore hair care, facial, makeup, waxing, threading and beauty services at Mahalaxmi Beauty Parlour in Prayagraj. Ladies beauty salon near Colonelganj offering professional beauty treatments.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Beauty Services in Prayagraj | Mahalaxmi Beauty Parlour",
    description: "Hair care, facial, makeup, waxing, threading, bridal makeup and beauty classes at Mahalaxmi Beauty Parlour in Prayagraj.",
  },
};

const WHATSAPP_LINK = business.bookingLink;

type HubItem = { name: string; desc: string; href?: string };

const SERVICES: { category: string; href?: string; items: HubItem[] }[] = [
  {
    category: "Hair Services",
    items: [
      { name: "Hair Cut", desc: "Modern and classic haircuts for ladies. Precision cutting tailored to your face shape and hair type.", href: servicePath("hair-cut-prayagraj") },
      { name: "Hair Styling", desc: "Professional hair styling for daily wear, parties, weddings and special occasions.", href: servicePath("hair-styling-prayagraj") },
      { name: "Hair Smoothing", desc: "Smoothing treatment to reduce frizz and add shine. Consultation before any chemical service.", href: servicePath("hair-smoothing-prayagraj") },
      { name: "Hair Color", desc: "Professional hair coloring services including global color, highlights, and root touch-up.", href: servicePath("hair-colour-prayagraj") },
      { name: "Hair Spa", desc: "Deep conditioning hair spa treatment for nourished, healthy and shiny hair." },
      { name: "Hair Treatment", desc: "Restorative hair treatments for damaged, dry or chemically treated hair." },
    ],
  },
  {
    category: "Skin & Facial",
    items: [
      { name: "Facial", desc: "Cosmetic facial treatments customized for different skin types and concerns.", href: servicePath("facial-prayagraj") },
      { name: "Cleanup", desc: "Routine skin care service for maintenance between facials.", href: servicePath("cleanup-prayagraj") },
      { name: "Skin Rejuvenation", desc: "Cosmetic skin care treatments. Confirm the exact scope on enquiry." },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "Party Makeup", desc: "Glamorous party makeup for receptions, birthdays, and celebrations. Look and inclusions confirmed at booking.", href: servicePath("party-makeup-prayagraj") },
      { name: "Engagement Makeup", desc: "Soft and elegant engagement makeup customized to complement your outfit and style.", href: servicePath("engagement-makeup-prayagraj") },
      { name: "Bridal Makeup", desc: "Complete bridal makeup with personal consultation and trial.", href: "/bridal-makeup-prayagraj" },
      { name: "Pre-Bridal Package", desc: "A planned pre-wedding beauty regimen with the package sheet confirmed before scheduling.", href: servicePath("pre-bridal-package-prayagraj") },
    ],
  },
  {
    category: "Regular Beauty Services",
    items: [
      { name: "Threading", desc: "Precise eyebrow and face threading for clean, defined shaping.", href: servicePath("threading-prayagraj") },
      { name: "Waxing", desc: "Full body and partial waxing services using gentle wax suitable for sensitive skin.", href: servicePath("waxing-prayagraj") },
      { name: "Manicure", desc: "Hand and nail care treatment including shaping, cuticle care and polish." },
      { name: "Pedicure", desc: "Foot and nail care treatment for soft, clean and well-groomed feet." },
    ],
  },
  {
    category: "Beauty Classes",
    href: "/beauty-classes-prayagraj",
    items: [
      { name: "Basic Beauty Parlour Course", desc: "Learn threading, waxing, facial, makeup and hair styling basics. Perfect for beginners." },
      { name: "Makeup Learning", desc: "Step-by-step makeup training including everyday looks, party makeup and bridal techniques." },
      { name: "Self-Grooming Classes", desc: "Personal grooming and skincare lessons for daily beauty care routines." },
    ],
  },
];

const FAQS = [
  { q: "What beauty services does Mahalaxmi Beauty Parlour offer?", a: "We offer hair care, facial, makeup, bridal makeup, engagement makeup, party makeup, waxing, threading, skin care, beauty classes and self-grooming services." },
  { q: "Where is Mahalaxmi Beauty Parlour located?", a: "We are located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, Uttar Pradesh 211002." },
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

function ServiceCard({ title, href, items }: { title: string; href?: string; items: HubItem[] }) {
  const heading = (
    <h2 className="text-lg font-semibold text-foreground transition hover:text-deep-red">{title}</h2>
  );
  return (
    <article className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
      {href ? (
        <a href={href} className="inline-block">{heading}</a>
      ) : (
        heading
      )}
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.name}>
            {item.href ? (
              <a href={item.href} className="flex items-start gap-2 text-sm font-medium text-foreground transition hover:text-deep-red">
                <svg className="mt-1 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {item.name}
              </a>
            ) : (
              <h3 className="flex items-start gap-2 text-sm font-medium text-foreground">
                <svg className="mt-1 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                {item.name}
              </h3>
            )}
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
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Our Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Professional Beauty Services in Prayagraj</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Explore hair, facial, makeup, waxing, threading and beauty care services offered at Mahalaxmi Beauty Parlour in Prayagraj. Our ladies salon near Colonelganj provides professional beauty treatments in a clean, comfortable and women-friendly environment.
          </p>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((group) => (
              <ServiceCard key={group.category} title={group.category} href={group.href} items={group.items} />
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-muted">
            Services with a link open their own detailed page. For anything not listed, message us on WhatsApp and we will confirm availability.
          </p>
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
