import { ORIGIN } from "@/lib/seo/urls";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    "# llms.txt: https://mahalaxmi.beauty/llms.txt",
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /preview/",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    "User-agent: Applebot",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    `Sitemap: ${ORIGIN}/sitemap.xml`,
    `Host: ${ORIGIN}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
