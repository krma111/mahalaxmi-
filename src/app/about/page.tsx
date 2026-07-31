import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Mahalaxmi Beauty Parlour, a ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, beauty classes and professional beauty services near Colonelganj.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Mahalaxmi Beauty Parlour | Ladies Salon in Prayagraj",
    description: "Learn about Mahalaxmi Beauty Parlour, a ladies beauty salon in Prayagraj offering professional beauty services and beauty classes.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">About Us</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">About Mahalaxmi Beauty Parlour</h1>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-muted">
            <p>Mahalaxmi Beauty Parlour is a ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. We focus on professional beauty services in a comfortable, women-focused environment.</p>
            <p>Located at 109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, the parlour focuses on friendly service, clean beauty care and easy appointment booking through WhatsApp.</p>
            <p>Our services include everyday grooming, special occasion makeup, bridal packages, and beauty education classes. We use professional products and maintain hygienic standards.</p>
            <p>Whether you need a quick cleanup before a family gathering, a complete bridal makeover for your wedding day, or want to learn beauty skills as a career, we are here to help.</p>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[8px] border border-line bg-cream/60 p-6">
              <h2 className="text-lg font-semibold text-foreground">Our Mission</h2>
              <p className="mt-3 text-sm leading-6 text-muted">To provide professional beauty services in a clean and friendly environment. Every client receives personal attention and a price confirmed before booking.</p>
            </div>
            <div className="rounded-[8px] border border-line bg-cream/60 p-6">
              <h2 className="text-lg font-semibold text-foreground">Our Values</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Cleanliness, professionalism, customer satisfaction and continuous learning. We stay updated with the latest beauty trends and techniques.</p>
            </div>
            <div className="rounded-[8px] border border-line bg-cream/60 p-6">
              <h2 className="text-lg font-semibold text-foreground">Our Expertise</h2>
              <p className="mt-3 text-sm leading-6 text-muted">Bridal makeup, hair styling, skincare treatments and beauty training for clients from Colonelganj, Katra, Civil Lines and across Prayagraj.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
