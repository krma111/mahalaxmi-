import type { MetadataRoute } from "next";
import { ORIGIN } from "@/lib/seo/urls";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: ORIGIN, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 1.0 },
    { url: `${ORIGIN}/services`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.9 },
    { url: `${ORIGIN}/bridal-makeup-prayagraj`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.9 },
    { url: `${ORIGIN}/beauty-classes-prayagraj`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.8 },
    { url: `${ORIGIN}/gallery`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.7 },
    { url: `${ORIGIN}/reviews`, lastModified: "2026-07-30", changeFrequency: "weekly", priority: 0.7 },
    { url: `${ORIGIN}/about`, lastModified: "2026-07-30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${ORIGIN}/contact`, lastModified: "2026-07-30", changeFrequency: "monthly", priority: 0.9 },
  ];
}
