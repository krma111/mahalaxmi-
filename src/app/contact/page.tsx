import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Mahalaxmi Beauty Parlour in Prayagraj. Call, WhatsApp or get directions to 109/4 Colonelganj, Prayagraj, UP 211002. Ladies beauty salon near Katra and Civil Lines.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Mahalaxmi Beauty Parlour | Ladies Salon in Prayagraj",
    description: "Call, WhatsApp or visit Mahalaxmi Beauty Parlour at 109/4 Colonelganj, Prayagraj. Book your appointment today.",
  },
};

const WHATSAPP_LINK = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to book an appointment.\nName:\nService:\nPreferred Date:\nPreferred Time:`
)}`;

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Get In Touch</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Visit or book directly on WhatsApp</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted">
                <p className="font-semibold text-foreground">{business.name}</p>
                <p>{business.address.displayLine}</p>
                <p>Phone / WhatsApp: {business.telephone}</p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={business.telephoneHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Call Now</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Book on WhatsApp</a>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Instagram</a>
                <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">Get Directions</a>
              </div>
            </div>
            <div className="rounded-[8px] glass-red p-6">
              <h3 className="text-xl font-semibold text-foreground">Front of Jain Hostel, Colonelganj</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Use directions for the latest route to the salon location in Prayagraj.</p>
              <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Open Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
