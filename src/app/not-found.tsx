import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
          The page you are looking for does not exist or has moved. Explore our beauty services in Prayagraj or contact us on WhatsApp.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-[#741722]">
            Go to Home
          </Link>
          <Link href="/services" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">
            View Services
          </Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
