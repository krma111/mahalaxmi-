import { business } from "@/content/business";
import { ORIGIN, siteUrl } from "@/lib/seo/urls";

export const entityIds = {
  website: `${ORIGIN}/#website`,
  organization: `${ORIGIN}/#organization`,
  salon: `${ORIGIN}/#salon`,
  postalAddress: `${ORIGIN}/#postal-address`,
  contact: `${ORIGIN}/#contact`,
};

// Core entity graph. Rendered on the home page and referenced by route-level
// entities via @id. Deliberately omits geo, aggregateRating, offers, founder
// and foundingDate until the owner verifies each fact.
export function coreGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": entityIds.website,
        url: siteUrl("/"),
        name: business.name,
        publisher: { "@id": entityIds.organization },
        about: { "@id": entityIds.salon },
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": entityIds.organization,
        name: business.name,
        url: siteUrl("/"),
        location: { "@id": entityIds.salon },
        contactPoint: { "@id": entityIds.contact },
      },
      {
        "@type": "BeautySalon",
        "@id": entityIds.salon,
        name: business.name,
        url: siteUrl("/"),
        telephone: business.telephone,
        priceRange: "$$",
        address: { "@id": entityIds.postalAddress },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: business.hours.days,
            opens: business.hours.opens,
            closes: business.hours.closes,
          },
        ],
        sameAs: [business.instagram],
      },
      {
        "@type": "PostalAddress",
        "@id": entityIds.postalAddress,
        streetAddress: business.address.streetAddress,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        postalCode: business.address.postalCode,
        addressCountry: business.address.addressCountry,
      },
      {
        "@type": "ContactPoint",
        "@id": entityIds.contact,
        telephone: business.telephone,
        contactType: "customer service",
        areaServed: "IN-UP",
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}
