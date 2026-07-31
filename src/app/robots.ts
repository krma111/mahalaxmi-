import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy-policy", "/terms-and-conditions"],
      },
    ],
    sitemap: "https://mahalaxmi-beauty-parlour.vercel.app/sitemap.xml",
  };
}
