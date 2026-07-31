import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/seo/urls";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: siteUrl(item.href),
    })),
  };
  return <JsonLd data={json} />;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const trail: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <BreadcrumbSchema items={trail} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a href={item.href} className="transition hover:text-deep-red">
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
