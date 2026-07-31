// Single source of truth for business facts.
// Fields marked OWNER-APPROVED were confirmed by the business owner on 30 July 2026.
// Fields marked TODO-OWNER require verification before publishing elsewhere.

export const business = {
  // OWNER-APPROVED: business name matches signage and Google Business Profile.
  name: "Mahalaxmi Beauty Parlour",
  legalName: "Mahalaxmi Beauty Parlour",
  // OWNER-APPROVED: canonical postal rendering chosen by the owner.
  address: {
    streetAddress: "109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj",
    addressLocality: "Prayagraj",
    addressRegion: "Uttar Pradesh",
    postalCode: "211002",
    addressCountry: "IN",
    // Display constant, safe to render. Alternate locality rendering used only in prose.
    displayLine: "109/4 Maharshi Dayanand Marg, Front of Jain Hostel, Colonelganj, Prayagraj, UP - 211002",
  },
  // OWNER-APPROVED: phone ownership confirmed.
  telephone: "+919889594584",
  telephoneHref: "tel:+919889594584",
  whatsapp: "https://wa.me/919889594584",
  // OWNER-APPROVED: official brand profile chosen by the owner.
  instagram: "https://instagram.com/mahalaxmi.beauty",
  instagramHandle: "@mahalaxmi.beauty",
  // TODO-OWNER: replace with the Google Business Profile URL once the listing is verified.
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Mahalaxmi%20Beauty%20Parlour%20109%2F4%20Colonelganj%20Prayagraj",
  // OWNER-APPROVED: normal opening hours as displayed on site.
  // TODO-OWNER: verify special/holiday hours against Google Business Profile.
  hours: {
    label: "Monday - Sunday",
    time: "10:00 AM - 8:00 PM",
    opens: "10:00",
    closes: "20:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },
  // TODO-OWNER: verify exact entrance pin before publishing coordinates anywhere.
  geo: null as { latitude: string; longitude: string } | null,
  shortDescription:
    "Mahalaxmi Beauty Parlour in Prayagraj offers ladies beauty services including hair care, facial, makeup, bridal makeup, waxing, threading and beauty classes. Book on WhatsApp.",
};
