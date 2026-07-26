import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20know%20about%20beauty%20classes.";

export default function BeautyClassesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Classes</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Beauty Classes in Prayagraj</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Learn basic beauty parlour skills and self-grooming. Classes include basic beauty parlour course guidance, makeup learning, hair styling basics and self-grooming support.
          </p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Basic Beauty Parlour Course</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Learn fundamental beauty parlour skills including threading, waxing, facial treatments, and basic makeup application.</p>
            </article>
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Makeup & Hair Styling Basics</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Learn everyday makeup looks, party makeup techniques, and basic hair styling for personal grooming.</p>
            </article>
          </div>
          <div className="mt-10 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
