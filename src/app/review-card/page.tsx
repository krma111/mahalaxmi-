import type { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Review Card",
  description: "Printable review card for Mahalaxmi Beauty Parlour in Prayagraj. Scan the QR code to view and review the salon on Google.",
  alternates: { canonical: "/review-card" },
  robots: { index: false, follow: false },
};

export default function ReviewCardPage() {
  return (
    <main className="min-h-screen bg-background py-10">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 no-print">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Print at A4 or share this link</p>
          <PrintButton />
        </div>

        <article className="review-card-sheet overflow-hidden rounded-[12px] glass-red">
          <div className="bg-deep-red px-8 py-6 text-white sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Mahalaxmi Beauty Parlour</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">Ladies Beauty Salon · Prayagraj</h1>
          </div>
          <div className="grid gap-8 px-8 py-10 sm:grid-cols-[auto_1fr] sm:px-10">
            <div className="flex flex-col items-center gap-3">
              <div className="rounded-[10px] border border-line p-3">
                <Image
                  src="/images/review-card-qr.png"
                  alt="QR code to the Google Maps listing of Mahalaxmi Beauty Parlour"
                  width={300}
                  height={300}
                  priority
                  className="h-56 w-56 object-contain sm:h-64 sm:w-64"
                />
              </div>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-deep-red">
                Scan to view &amp; review on Google
              </p>
            </div>
            <div className="space-y-4 text-sm leading-6 text-muted">
              <p className="text-base font-semibold text-foreground">Thank you for visiting us!</p>
              <p>
                We hope you enjoyed your service at {business.name}, {business.address.addressLocality}.
                If you had a good experience, a short Google review helps other women find a reliable ladies salon.
              </p>
              <div className="rounded-[8px] glass-red p-4">
                <p className="font-semibold text-foreground">{business.name}</p>
                <p className="mt-1">{business.address.displayLine}</p>
                <p className="mt-1">Phone / WhatsApp: {business.telephone}</p>
                <p className="mt-1">{business.hours.label} · {business.hours.time}</p>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block transition hover:text-deep-red">
                  Instagram: {business.instagramHandle}
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-line bg-cream/60 px-8 py-4 text-xs text-muted sm:px-10">
            <p>{business.name} · {business.address.displayLine}</p>
          </div>
        </article>

        <p className="mt-6 text-xs leading-5 text-muted no-print">
          Keep a few printed cards at the reception. After a happy customer pays, hand them the card or send the{" "}
          <a href={business.reviewRequestLink} target="_blank" rel="noopener noreferrer" className="font-medium text-deep-red transition hover:underline">
            WhatsApp review request
          </a>{" "}
          from the salon phone.
        </p>
      </div>
    </main>
  );
}
