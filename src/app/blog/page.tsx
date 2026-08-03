import type { Metadata } from "next";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { articlePath, articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Beauty Tips and Guides | Mahalaxmi Beauty Parlour Blog",
  description:
    "Practical beauty guides for Prayagraj: choosing a parlour, bridal makeup questions, pre-bridal care timelines, hair smoothing and skin care basics.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Beauty Tips and Guides | Mahalaxmi Beauty Parlour",
    description:
      "Practical beauty guides: choosing a parlour, bridal makeup questions, pre-bridal care timelines, hair smoothing and skin care basics.",
  },
};

export default function BlogHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-deep-red">Beauty Tips and Guides</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Practical beauty guides for Prayagraj</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted">
            Honest, practical guides on choosing beauty services, preparing for weddings and understanding salon treatments — written for customers of Mahalaxmi Beauty Parlour, Prayagraj.
          </p>
        </div>
      </section>
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <a key={a.slug} href={articlePath(a.slug)} className="group flex flex-col rounded-[8px] border border-line bg-white/88 p-5 shadow-sm transition hover:border-deep-red">
                <p className="text-xs text-muted">{a.datePublished} · {a.readingMinutes} min read</p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground group-hover:text-deep-red">{a.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-red">
                  Read guide
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
