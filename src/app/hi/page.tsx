import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { areas, areaPath } from "@/content/areas";
import { business } from "@/content/business";
import { servicePath } from "@/content/services";

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  display: "swap",
  variable: "--font-noto-devanagari",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "प्रयागराज में ब्यूटी पार्लर | महालक्ष्मी ब्यूटी पार्लर, कर्नलगंज",
  description:
    "महालक्ष्मी ब्यूटी पार्लर प्रयागराज के कर्नलगंज में महिलाओं के लिए ब्यूटी सैलून है – हेयर केयर, फेशियल, मेकअप, ब्राइडल मेकअप, वैक्सिंग, थ्रेडिंग और ब्यूटी क्लासेस। व्हाट्सएप पर बुक करें।",
  alternates: { canonical: "/hi" },
  openGraph: {
    title: "प्रयागराज में ब्यूटी पार्लर | महालक्ष्मी ब्यूटी पार्लर",
    description:
      "प्रयागराज के कर्नलगंज में महिलाओं का ब्यूटी पार्लर। हेयर, फेशियल, मेकअप, ब्राइडल मेकअप, वैक्सिंग, थ्रेडिंग और ब्यूटी क्लासेस। व्हाट्सएप पर बुक करें।",
  },
  other: {
    "content-language": "hi-IN",
  },
};

const WHATSAPP_LINK = business.bookingLink;

const SERVICES = [
  { name: "लेडीज़ हेयर कट", href: servicePath("hair-cut-prayagraj") },
  { name: "हेयर स्टाइलिंग", href: servicePath("hair-styling-prayagraj") },
  { name: "हेयर स्मूदनिंग", href: servicePath("hair-smoothing-prayagraj") },
  { name: "हेयर कलर", href: servicePath("hair-colour-prayagraj") },
  { name: "फेशियल", href: servicePath("facial-prayagraj") },
  { name: "क्लीनअप", href: servicePath("cleanup-prayagraj") },
  { name: "पार्टी मेकअप", href: servicePath("party-makeup-prayagraj") },
  { name: "एंगेजमेंट मेकअप", href: servicePath("engagement-makeup-prayagraj") },
  { name: "प्री-ब्राइडल पैकेज", href: servicePath("pre-bridal-package-prayagraj") },
  { name: "थ्रेडिंग", href: servicePath("threading-prayagraj") },
  { name: "वैक्सिंग", href: servicePath("waxing-prayagraj") },
  { name: "ब्राइडल मेकअप", href: "/bridal-makeup-prayagraj" },
  { name: "ब्यूटी क्लासेस", href: "/beauty-classes-prayagraj" },
];

const FAQS = [
  {
    q: "प्रयागराज में ब्यूटी पार्लर कहाँ है?",
    a: "महालक्ष्मी ब्यूटी पार्लर कर्नलगंज, प्रयागराज में 109/4 महर्षि दयानंद मार्ग, जैन हॉस्टल के सामने स्थित है। यह महिलाओं के लिए ही है।",
  },
  {
    q: "क्या यह पार्लर केवल महिलाओं के लिए है?",
    a: "हाँ, महालक्ष्मी ब्यूटी पार्लर केवल महिलाओं के लिए है। सभी सेवाएँ केवल महिलाओं के लिए उपलब्ध हैं।",
  },
  {
    q: "अपॉइंटमेंट कैसे बुक करें?",
    a: "व्हाट्सएप पर अपना नाम, चाहिए सेवा और पसंदीदा तारीख तथा समय भेजें। आने से पहले समय और मौजूदा कीमत की पुष्टि की जाती है।",
  },
  {
    q: "पार्लर कितने बजे खुलता है?",
    a: "पार्लर हर दिन सुबह 10:00 बजे से रात 8:00 बजे तक खुला रहता है।",
  },
  {
    q: "कौन-कौन सी सेवाएँ मिलती हैं?",
    a: "हेयर कट, स्टाइलिंग, स्मूदनिंग, कलर, फेशियल, क्लीनअप, पार्टी और एंगेजमेंट मेकअप, ब्राइडल मेकअप, प्री-ब्राइडल पैकेज, थ्रेडिंग, वैक्सिंग और ब्यूटी क्लासेस उपलब्ध हैं।",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "hi",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HindiPage() {
  return (
    <div className={`${notoDevanagari.variable} font-hindi`}>
      <JsonLd data={FAQ_SCHEMA} />
      <Breadcrumbs items={[{ name: "हिंदी में ब्यूटी पार्लर, प्रयागराज", href: "/hi" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">प्रयागराज में ब्यूटी पार्लर</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">प्रयागराज में महिलाओं का ब्यूटी पार्लर – महालक्ष्मी ब्यूटी पार्लर</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            महालक्ष्मी ब्यूटी पार्लर प्रयागराज के कर्नलगंज में महिलाओं का ब्यूटी सैलून है। यहाँ हेयर केयर, फेशियल, मेकअप, ब्राइडल मेकअप, वैक्सिंग, थ्रेडिंग और ब्यूटी क्लासेस की सुविधा मिलती है। पार्लर 109/4 महर्षि दयानंद मार्ग, जैन हॉस्टल के सामने, कर्नलगंज, प्रयागराज में है। बुकिंग व्हाट्सएप पर होती है और सेवा से पहले कीमत की पुष्टि की जाती है।
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900"
          >
            व्हाट्सएप पर बुक करें
          </a>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">पार्लर में उपलब्ध सेवाएँ</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a key={s.href} href={s.href} className="group rounded-[8px] border border-line bg-white/88 p-5 shadow-sm transition hover:border-deep-red">
                <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-deep-red">{s.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-cream/80 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">पार्लर तक कैसे पहुँचें</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
              महालक्ष्मी ब्यूटी पार्लर महर्षि दयानंद मार्ग, जैन हॉस्टल के सामने, कर्नलगंज, प्रयागराज में स्थित है। पार्लर प्रयागराज के इन इलाकों से ग्राहकों का स्वागत करता है:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((a) => (
                <a key={a.slug} href={areaPath(a.slug)} className="rounded-[8px] border border-line bg-white px-4 py-3 text-sm font-semibold text-foreground transition hover:border-deep-red hover:text-deep-red">
                  {a.name} के पास ब्यूटी पार्लर
                </a>
              ))}
            </div>
            <a
              href={business.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900"
            >
              गूगल मैप्स खोलें
            </a>
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">अक्सर पूछे जाने वाले प्रश्न</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <article key={f.q} className="rounded-[8px] border border-line bg-background/75 p-5">
                <h3 className="text-base font-semibold tracking-tight text-foreground">{f.q}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-white/88 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">संपर्क करें</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-muted">
              <p className="font-semibold text-foreground">महालक्ष्मी ब्यूटी पार्लर</p>
              <p>109/4 महर्षि दयानंद मार्ग, जैन हॉस्टल के सामने, कर्नलगंज, प्रयागराज, उत्तर प्रदेश – 211002</p>
              <p>फोन / व्हाट्सएप: +91 98895 94584</p>
              <p>समय: हर दिन सुबह 10:00 – रात 8:00</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={business.telephoneHref} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-deep-red px-5 text-sm font-semibold text-white transition hover:bg-red-900">कॉल करें</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-deep-red/25 bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream">व्हाट्सएप पर बुक करें</a>
              <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] border border-line bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-cream">दिशा-निर्देश देखें</a>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-deep-red p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">आज ही अपॉइंटमेंट बुक करें</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              व्हाट्सएप पर अपना नाम, चाहिए सेवा और पसंदीदा तारीख तथा समय भेजें। आने से पहले उपलब्धता, सेवा का विवरण और मौजूदा कीमत की पुष्टि की जाती है।
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream"
            >
              व्हाट्सएप पर बुक करें
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
