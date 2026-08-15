import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Beauty Classes in Prayagraj",
  description: "Learn beauty parlour skills, makeup, hair styling and self-grooming at Mahalaxmi Beauty Parlour classes in Prayagraj. Curriculum, schedule and fees confirmed on enquiry.",
  alternates: { canonical: "/beauty-classes-prayagraj" },
  openGraph: {
    title: "Beauty Classes in Prayagraj | Mahalaxmi Beauty Parlour",
    description: "Learn beauty parlour skills, makeup and hair styling in Prayagraj. Basic beauty parlour course and self-grooming classes available.",
  },
};

const WHATSAPP_LINK = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to know about beauty classes.\nCourse of interest:\nPreferred timings:\nName:`
)}`;

const FAQS = [
  { q: "Do you offer beauty classes in Prayagraj?", a: "Yes, Mahalaxmi Beauty Parlour offers basic beauty parlour courses, makeup classes and hair styling lessons in Prayagraj." },
  { q: "What is included in the basic beauty parlour course?", a: "The course includes threading, waxing, facial treatments, basic makeup application, hair styling and self-grooming techniques." },
  { q: "How long is the beauty course?", a: "Course duration depends on the package. Contact us on WhatsApp for detailed curriculum and duration information." },
  { q: "Who can join the beauty classes?", a: "Anyone interested in learning beauty parlour skills, makeup artistry or self-grooming can join. No prior experience required." },
  { q: "Do you provide a certificate after the course?", a: "Please contact us on WhatsApp for information about certification and course completion details." },
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

const CURRICULUM = [
  "Threading and eyebrow shaping",
  "Waxing techniques",
  "Facial treatments and skin care basics",
  "Basic makeup application",
  "Hair styling basics",
  "Self-grooming routines",
];

const FORMAT = [
  {
    title: "Enquire first",
    text: "Send a WhatsApp message with the course you are interested in and your preferred timings.",
  },
  {
    title: "Details confirmed",
    text: "We confirm the curriculum, duration, schedule, fees and any certification details on enquiry.",
  },
  {
    title: "Practical learning",
    text: "Training is practical and salon-based, covering each skill step by step.",
  },
];

export default function BeautyClassesPage() {
  return (
    <>
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "Beauty Classes", href: "/beauty-classes-prayagraj" }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Classes</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Beauty Classes in Prayagraj</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
            Learn basic beauty parlour skills and self-grooming at Mahalaxmi Beauty Parlour in Prayagraj. Classes include a basic beauty parlour course, makeup learning, hair styling basics and self-grooming support. Curriculum, duration, schedule and fees are confirmed on enquiry.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[8px] glass-red p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Basic Beauty Parlour Course</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Learn fundamental beauty parlour skills including threading, waxing, facial treatments, and basic makeup application. Ideal for beginners who want to start in beauty services.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Beginner friendly</p>
            </article>
            <article className="rounded-[8px] glass-red p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Makeup & Hair Styling Basics</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Learn everyday makeup looks, party makeup techniques, and basic hair styling. Covers foundation, eye makeup, lip makeup and basic hairstyles.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Practical training</p>
            </article>
            <article className="rounded-[8px] glass-red p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">Self-Grooming & Skin Care</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Learn daily skincare routines, basic facial treatments, and personal grooming techniques. Understand different skin types and how to care for your skin.</p>
              <p className="mt-3 text-sm font-medium text-deep-red">Personal care focus</p>
            </article>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] glass-red p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">What you will learn</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {CURRICULUM.map((item) => (
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
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">How the classes work</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {FORMAT.map((step, index) => (
              <li key={step.title} className="rounded-[8px] glass-red p-5 shadow-sm">
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
            <h2 className="text-2xl font-semibold tracking-tight">Start Your Beauty Journey</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">Contact us on WhatsApp to learn more about our beauty classes, course content, fees and schedule.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Enquire on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
