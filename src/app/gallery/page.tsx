import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Preview gallery of salon services at Mahalaxmi Beauty Parlour in Prayagraj including hair styling, bridal makeup and beauty care.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Gallery</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Gallery</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">Preview visuals for salon services. Gallery images coming soon.</p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Hair Styling", "Bridal Makeup", "Makeup Service", "Facial Treatment", "Beauty Care", "Salon Interior"].map((item) => (
              <div key={item} className="rounded-[8px] border border-line bg-cream/50 p-8 text-center">
                <p className="text-sm font-semibold text-muted">{item}</p>
                <p className="mt-2 text-xs text-muted">Preview coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
