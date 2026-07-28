const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20a%20bridal%20consultation.%0AName%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";

export default function BridalPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Bridal Makeup</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Bridal Makeup in Prayagraj</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Plan engagement makeup, bridal makeup, pre-bridal packages and hair styling through a simple WhatsApp consultation.
          </p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Bridal Makeup</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Bridal makeup and pre-bridal care with a personal consultation. Every step is done carefully to enhance natural beauty.</p>
            </article>
            <article className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Engagement Makeup</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Soft, polished engagement makeup for your special day. Customized to match your outfit and preferences.</p>
            </article>
          </div>
          <div className="mt-10 rounded-[8px] border border-line bg-cream/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Book Bridal Consultation</h2>
            <p className="mt-3 text-sm leading-6 text-muted">Contact us on WhatsApp to discuss your bridal makeup requirements, view packages, and schedule a trial session.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">
              Book Bridal Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
