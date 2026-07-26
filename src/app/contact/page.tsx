const WHATSAPP_LINK = "https://wa.me/919889594584?text=Hello%20Mahalaxmi%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment.%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj";

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Get In Touch</h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Visit or book directly on WhatsApp</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-muted">
                <p className="font-semibold text-foreground">Mahalaxmi Beauty Parlour</p>
                <p>109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonel Ganj, Prayagraj, 211002, Uttar Pradesh</p>
                <p>Phone / WhatsApp: +91 98895 94584</p>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="tel:+919889594584" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Call Now</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">Book on WhatsApp</a>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">Get Directions</a>
              </div>
            </div>
            <div className="rounded-[8px] border border-line bg-cream/80 p-6">
              <h3 className="text-xl font-semibold text-foreground">Front of Jain Hostel, Colonel Ganj</h3>
              <p className="mt-3 text-sm leading-6 text-muted">Use directions for the latest route to the salon location in Prayagraj.</p>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">Open Google Maps</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
