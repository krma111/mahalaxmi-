import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for services at Mahalaxmi Beauty Parlour in Prayagraj including appointment, cancellation and service policies.",
  robots: { index: false, follow: true },
};

function TermsBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li><a href="/" className="transition hover:text-deep-red">Home</a></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground font-medium" aria-current="page">Terms & Conditions</li>
      </ol>
    </nav>
  );
}

export default function TermsPage() {
  return (
    <>
      <TermsBreadcrumb />
      <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Terms &amp; Conditions</h1>
        <div className="mt-8 space-y-5 text-base leading-7 text-muted">
          <p>By using our services, you agree to the following terms.</p>
          <h2 className="text-xl font-semibold text-foreground">Appointments</h2>
          <p>Appointments are confirmed via WhatsApp or phone. Please arrive on time for your scheduled visit.</p>
          <h2 className="text-xl font-semibold text-foreground">Cancellations</h2>
          <p>Please inform us at least 2 hours before your appointment if you need to cancel or reschedule.</p>
          <h2 className="text-xl font-semibold text-foreground">Services</h2>
          <p>All services are provided by trained professionals. Results may vary based on individual needs.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>For questions, contact us at +91 98895 94584.</p>
        </div>
      </div>
    </section>
    </>
  );
}
