import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read customer reviews and experiences at Mahalaxmi Beauty Parlour in Prayagraj. View ratings and leave your feedback on Google.",
  alternates: { canonical: "/reviews" },
};

const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj";

const REVIEWS = [
  { name: "Customer A", tag: "Beauty care", text: "Friendly service and a comfortable experience.", stars: 5 },
  { name: "Customer B", tag: "Regular services", text: "Good place for regular beauty care and makeup services.", stars: 5 },
  { name: "Customer C", tag: "Skin care", text: "Clean setup and helpful staff.", stars: 4 },
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

export default function ReviewsPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Reviews</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Customer Reviews</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">Read customer experiences and leave your review on Google.</p>
          <div className="mt-8 flex gap-3">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">View Reviews on Google</a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Write a Review</a>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>
    </>
  );
}
