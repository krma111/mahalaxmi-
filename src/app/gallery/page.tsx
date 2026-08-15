import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our gallery of beauty services at Mahalaxmi Beauty Parlour in Prayagraj — hair styling, bridal makeup, makeup service, facial treatment, beauty care and salon interior.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Mahalaxmi Beauty Parlour",
    description: "Browse our gallery of beauty services in Prayagraj — hair styling, bridal makeup, makeup service, facial, beauty care and salon interior.",
  },
};

const GALLERY_ITEMS = [
  { title: "Hair Styling", image: "/images/hair-styling.jpg", desc: "Professional hair styling for parties, weddings and everyday looks." },
  { title: "Bridal Makeup", image: "/images/bridal-makeup.jpg", desc: "Complete bridal makeup planned through consultation, with a trial before the wedding day." },
  { title: "Makeup Service", image: "/images/makeup-service.jpg", desc: "Professional makeup application for parties, engagements and events." },
  { title: "Facial Treatment", image: "/images/facial-treatment.jpg", desc: "Cosmetic facial care tailored to your skin type and concerns." },
  { title: "Beauty Care", image: "/images/beauty-care.jpg", desc: "Manicure, pedicure and complete beauty care services." },
  { title: "Salon Interior", image: "/images/salon-interior.jpg", desc: "Clean and comfortable ladies salon in Colonelganj, Prayagraj." },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Gallery", href: "/gallery" }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Beauty Gallery</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">A preview of our beauty services and salon — hair styling, bridal makeup, makeup service, facial treatment, beauty care and salon interior at Mahalaxmi Beauty Parlour in Prayagraj.</p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item, index) => (
              <article key={item.title} className="group overflow-hidden rounded-[8px] glass-red transition hover:shadow-md">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.title + " at Mahalaxmi Beauty Parlour Prayagraj"}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
