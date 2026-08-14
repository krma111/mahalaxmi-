import { siteUrl } from "@/lib/seo/urls";

/**
 * Renders <link rel="alternate" hreflang> pairs for the English homepage and the
 * Hindi homepage. Rendered inside the page tree so React 19 hoists them into
 * <head> while the page stays statically generated.
 */
export function LanguageHreflang() {
  return (
    <>
      <link rel="alternate" {...({ hreflang: "en" } as Record<string, string>)} href={siteUrl("/")} />
      <link rel="alternate" {...({ hreflang: "hi-IN" } as Record<string, string>)} href={siteUrl("/hi")} />
    </>
  );
}