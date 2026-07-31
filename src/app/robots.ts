import type { MetadataRoute } from "next";
import { ORIGIN } from "@/lib/seo/urls";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/preview/"],
      },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: `${ORIGIN}/sitemap.xml`,
  };
}
