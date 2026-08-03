import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Mahalaxmi Beauty Parlour in Prayagraj. How we handle your personal information and appointment data.",
  robots: { index: false, follow: true },
};

function PrivacyBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
      <ol className="flex items-center gap-2 text-sm text-muted">
        <li><Link href="/" className="transition hover:text-deep-red">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li className="text-foreground font-medium" aria-current="page">Privacy Policy</li>
      </ol>
    </nav>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyBreadcrumb />
      <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-base leading-7 text-muted">
          <p>Mahalaxmi Beauty Parlour respects your privacy. This policy explains how we handle your information.</p>
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <p>Name, phone number, and appointment details when you book via WhatsApp or phone.</p>
          <h2 className="text-xl font-semibold text-foreground">How We Use Your Information</h2>
          <p>To manage appointments, communicate about bookings, and improve our services.</p>
          <h2 className="text-xl font-semibold text-foreground">Data Protection</h2>
          <p>We do not sell or share your personal information with third parties.</p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>For privacy questions, contact us at +91 98895 94584.</p>
        </div>
      </div>
    </section>
    </>
  );
}
