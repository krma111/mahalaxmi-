import type { MetadataRoute } from "next";
import { publishedServices } from "@/content/services";
import { ORIGIN, siteUrl } from "@/lib/seo/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  const base: MetadataRoute.Sitemap = [
    { url: siteUrl("/"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 1.0 },
    { url: siteUrl("/services"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/bridal-makeup-prayagraj"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.9 },
    { url: siteUrl("/salon-colonelganj-prayagraj"), lastModified: "2026-07-30", changeFrequency: "monthly", priority: 0.9 },
    { url: siteUrl("/beauty-classes-prayagraj"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.8 },
    { url: siteUrl("/gallery"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.7 },
    { url: siteUrl("/reviews"), lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.7 },
    { url: siteUrl("/about"), lastModified: "2026-07-30", changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl("/contact"), lastModified: "2026-07-30", changeFrequency: "monthly", priority: 0.9 },
  ];

  const servicePages: MetadataRoute.Sitemap = publishedServices().map((service) => ({
    url: siteUrl(`/services/${service.slug}`),
    lastModified: service.lastReviewed,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...base, ...servicePages].sort((a, b) => a.url.localeCompare(b.url));
}
