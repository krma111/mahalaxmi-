import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse our gallery of beauty services at Mahalaxmi Beauty Parlour in Prayagraj — hair styling, bridal makeup, makeup service, facial treatment, beauty care and salon interior.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Mahalaxmi Beauty Parlour",
    description: "Browse our gallery of beauty services in Prayagraj — hair styling, bridal makeup, makeup service, facial, beauty care and salon interior.",
  },
};

function GalleryBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li><a href="/" className="transition hover:text-deep-red">Home</a></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground font-medium" aria-current="page">Gallery</li>
      </ol>
    </nav>
  );
}

const GALLERY_ITEMS = [
  { title: "Hair Styling", image: "/images/hair-styling.jpg", desc: "Professional hair styling for parties, weddings and everyday looks." },
  { title: "Bridal Makeup", image: "/images/bridal-makeup.jpg", desc: "Complete bridal makeup with HD finish for your special day." },
  { title: "Makeup Service", image: "/images/makeup-service.jpg", desc: "Expert makeup application for parties, engagements and events." },
  { title: "Facial Treatment", image: "/images/facial-treatment.jpg", desc: "Rejuvenating facials for glowing and healthy skin." },
  { title: "Beauty Care", image: "/images/beauty-care.jpg", desc: "Manicure, pedicure and complete beauty care services." },
  { title: "Salon Interior", image: "/images/salon-interior.jpg", desc: "Clean and comfortable ladies salon in Colonel Ganj, Prayagraj." },
];

export default function GalleryPage() {
  return (
    <>
      <GalleryBreadcrumb />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Beauty Gallery</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">A preview of our beauty services and salon — hair styling, bridal makeup, makeup service, facial treatment, beauty care and salon interior at Mahalaxmi Beauty Parlour in Prayagraj.</p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[8px] border border-line bg-white shadow-sm transition hover:shadow-md">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                  <Image
                    src={item.image}
                    alt={item.title + " at Mahalaxmi Beauty Parlour Prayagraj"}
                    fill
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
