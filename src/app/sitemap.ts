import type { MetadataRoute } from "next";
import { articles, articlePath } from "@/content/articles";
import { areas, areaPath } from "@/content/areas";
import { publishedServices } from "@/content/services";
import { siteUrl } from "@/lib/seo/urls";

const TODAY = "2026-08-03";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), lastModified: TODAY, changeFrequency: "weekly", priority: 1.0 },
    { url: siteUrl("/services"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/bridal-makeup-prayagraj"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/salon-colonelganj-prayagraj"), lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
    { url: siteUrl("/beauty-classes-prayagraj"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.8 },
    { url: siteUrl("/beauty-parlour-prayagraj"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/hi"), lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl("/blog"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.7 },
    { url: siteUrl("/gallery"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.7 },
    { url: siteUrl("/reviews"), lastModified: TODAY, changeFrequency: "weekly", priority: 0.7 },
    { url: siteUrl("/about"), lastModified: TODAY, changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl("/contact"), lastModified: TODAY, changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = publishedServices().map((service) => ({
    url: siteUrl(`/services/${service.slug}`),
    lastModified: service.lastReviewed,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = areas.map((area) => ({
    url: siteUrl(areaPath(area.slug)),
    lastModified: TODAY,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: siteUrl(articlePath(article.slug)),
    lastModified: article.datePublished,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...base, ...servicePages, ...areaPages, ...articlePages].sort((a, b) => a.url.localeCompare(b.url));
}
