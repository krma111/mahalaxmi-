import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { articlePath, articles, getArticle } from "@/content/articles";
import { business } from "@/content/business";
import { publishedServices, servicePath, whatsappForService } from "@/content/services";
import { entityIds } from "@/lib/seo/schema";
import { siteUrl } from "@/lib/seo/urls";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: articlePath(slug) },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      publishedTime: article.datePublished,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = publishedServices().filter((s) => article.related.includes(s.slug));
  const whatsappLink = whatsappForService("");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    inLanguage: "en-IN",
    author: { "@id": entityIds.organization },
    publisher: { "@id": entityIds.organization },
    mainEntityOfPage: siteUrl(articlePath(slug)),
  };

  const schemas: Record<string, unknown>[] = [articleSchema];
  if (article.faqs.length >= 2) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: article.title, href: articlePath(slug) }]} />
      <section className="section-tint py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">{article.datePublished} · {article.readingMinutes} min read</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{article.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">{article.excerpt}</p>
        </div>
      </section>
      {article.sections.map((section) => (
        <section key={section.heading} className="pb-10 sm:pb-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p} className="mt-4 max-w-3xl text-base leading-7 text-muted">{p}</p>
            ))}
            {section.list && (
              <ul className="mt-5 grid max-w-3xl gap-3">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-deep-red" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
      {article.faqs.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Frequently Asked Questions</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {article.faqs.map((f) => (
                <article key={f.q} className="rounded-[8px] glass-red p-5">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">{f.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{f.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <a key={item.slug} href={servicePath(item.slug)} className="group rounded-[8px] glass-red p-5 shadow-sm transition hover:border-deep-red">
                  <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-deep-red">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.answerBlock}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-[8px] border border-line bg-deep-red p-6 text-white sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Need personalised advice?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85">
              Message {business.name} on WhatsApp to discuss your services, get the current price and book an appointment at the Colonelganj salon.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-deep-red transition hover:bg-cream"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
