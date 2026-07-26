import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";

const HAIR = ["Hair Cut", "Hair Styling", "Hair Smoothing", "Hair Color"];
const SKIN = ["Facial", "Cleanup", "Skin Rejuvenation"];
const MAKEUP = ["Party Makeup", "Engagement Makeup"];
const REGULAR = ["Threading", "Waxing"];
const CLASSES = ["Basic Beauty Parlour Course"];

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-[8px] border border-line bg-white/88 p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <svg className="h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Our Services</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Professional Beauty Services</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">Explore hair, facial, makeup, waxing, threading and beauty care services offered at Mahalaxmi Beauty Parlour in Prayagraj.</p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Hair Services" items={HAIR} />
            <ServiceCard title="Skin & Facial" items={SKIN} />
            <ServiceCard title="Makeup" items={MAKEUP} />
            <ServiceCard title="Regular Beauty Services" items={REGULAR} />
            <ServiceCard title="Beauty Classes" items={CLASSES} />
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-6 text-sm font-semibold text-white transition hover:bg-[#741722]">
              Book a Service on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
