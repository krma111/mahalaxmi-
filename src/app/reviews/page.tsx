import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read customer reviews and experiences at Mahalaxmi Beauty Parlour in Prayagraj. View ratings and leave your feedback on Google.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Customer Reviews | Mahalaxmi Beauty Parlour",
    description: "Read customer reviews and experiences at Mahalaxmi Beauty Parlour in Prayagraj. View ratings and leave feedback on Google.",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", href: "/reviews" }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Reviews</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Customer Reviews</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Read customer experiences at Mahalaxmi Beauty Parlour in Prayagraj and leave your own review on Google.
          </p>
          <div className="mt-8 flex gap-3">
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">View Reviews on Google</a>
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Write a Review</a>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] glass-red p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">How reviews work here</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-foreground">Genuine customer experiences</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  We invite customers to share honest feedback on our Google Business Profile after their visit. Reviews are never incentivized, filtered or scripted.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">We respond to every review</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Every review receives a specific, privacy-safe response. If you had a less-than-perfect experience, we invite you to contact us directly so we can resolve it.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">
                Read Reviews on Google
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[8px] glass-red p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Ask happy customers for a review</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Send a ready-made WhatsApp message asking a customer to review the salon on Google. Replace the name before sending.
              </p>
              <a
                href={business.reviewRequestLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]"
              >
                Open Review Request Message
              </a>
            </div>
            <div className="rounded-[8px] glass-red p-6 shadow-sm">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">Print a QR review card</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Print an A4 card with a QR code that leads customers straight to the salon on Google. Keep a few at the reception.
              </p>
              <a
                href="/review-card"
                className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream"
              >
                Open the Print Card
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
