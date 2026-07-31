import { business } from "@/content/business";
import { siteUrl } from "@/lib/seo/urls";

export type ServiceStatus = "published" | "draft";

export type Service = {
  slug: string;
  name: string;
  category: string;
  status: ServiceStatus;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  serviceType: string;
  answerBlock: string;
  whoFor: string[];
  process: { title: string; text: string }[];
  priceBasis: string;
  preparation: string[];
  aftercare: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  lastReviewed: string;
};

const WHATSAPP_BASE = `${business.whatsapp}?text=${encodeURIComponent(
  `Hello Mahalaxmi Beauty Parlour, I would like to enquire about: {serviceName}\nPreferred date:\nPreferred time or ready-by time:\nName:`
)}`;

export function whatsappForService(slug: string): string {
  const service = getService(slug);
  return WHATSAPP_BASE.replace("{serviceName}", service ? service.name : "your services");
}

export const services: Service[] = [
  {
    slug: "hair-cut-prayagraj",
    name: "Ladies Hair Cut",
    category: "Hair Services",
    status: "published",
    metaTitle: "Ladies Hair Cut in Prayagraj",
    metaDescription:
      "Book a ladies haircut appointment at Mahalaxmi Beauty Parlour in Prayagraj. Consultation-led haircut service near Colonelganj with price confirmed before service.",
    h1: "Ladies Hair Cut in Prayagraj",
    serviceType: "Haircut service for women",
    answerBlock:
      "Mahalaxmi Beauty Parlour offers ladies haircut appointments at its Colonelganj, Prayagraj salon. The suitable cut, time and price basis should be confirmed during consultation.",
    whoFor: [
      "Women looking for a professional haircut near Colonelganj, Prayagraj",
      "Customers who want style guidance before cutting",
      "Anyone who prefers to confirm price and time before the service",
    ],
    process: [
      { title: "Consultation", text: "Share your hair type, length, lifestyle and a style reference. The stylist confirms what will suit you." },
      { title: "Wash and cut", text: "Hair is washed and cut according to the agreed style with clean, professional tools." },
      { title: "Finish", text: "Blow-dry and finish the look so you can see the result before leaving." },
    ],
    priceBasis: "Price depends on hair length and chosen style. Confirm the current price during consultation before the service begins.",
    preparation: [
      "No need to wash your hair first — washing is part of the service",
      "Bring a reference photo of the style you like",
      "Let us know about recent treatments (colour, smoothing, keratin)",
    ],
    aftercare: [
      "Discuss maintenance timing during the appointment",
      "Use the recommended shampoo and conditioning routine for your hair type",
    ],
    faqs: [
      { q: "Do I need an appointment?", a: "Appointments are recommended. Book on WhatsApp with a preferred date and time." },
      { q: "Does the price depend on hair length or style?", a: "Yes, the price basis depends on hair length and the complexity of the style. Confirm before service." },
      { q: "Should I wash my hair before the appointment?", a: "No, hair washing is part of the haircut service." },
      { q: "Can I discuss a reference photo?", a: "Yes, share a reference photo on WhatsApp before your visit so the stylist can prepare." },
    ],
    related: ["hair-styling-prayagraj", "hair-colour-prayagraj", "hair-smoothing-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "hair-styling-prayagraj",
    name: "Hair Styling",
    category: "Hair Services",
    status: "published",
    metaTitle: "Hair Styling in Prayagraj",
    metaDescription:
      "Hair styling for parties, engagements and events at Mahalaxmi Beauty Parlour in Prayagraj. Confirm occasion, ready-by time and accessories before booking.",
    h1: "Hair Styling for Women in Prayagraj",
    serviceType: "Hair styling for occasions",
    answerBlock:
      "Women can enquire about hair styling for parties, engagements and other occasions at Mahalaxmi Beauty Parlour in Prayagraj. Availability, accessories, preparation and ready-by time should be confirmed before booking.",
    whoFor: [
      "Brides and bridesmaids needing coordinated styling",
      "Party and reception guests",
      "Engagement and ring ceremony occasions",
    ],
    process: [
      { title: "Occasion details", text: "Share the event date, ready-by time, hair length and reference style." },
      { title: "Styling", text: "The stylist creates the agreed look with appropriate tools and products." },
      { title: "Final check", text: "Confirm the look in natural light and adjust details before the event." },
    ],
    priceBasis: "Price depends on style complexity, hair length and accessories. Confirm during consultation.",
    preparation: [
      "Share event details and reference photos in advance",
      "Washed and dried hair is preferred unless otherwise advised",
      "Mention if you need accessories (pins, flowers, dupatta styling)",
    ],
    aftercare: [
      "Use the provided styling guidance to keep the look through the event",
      "Avoid humidity-heavy outdoor conditions unless the style was planned for them",
    ],
    faqs: [
      { q: "How long does styling usually take?", a: "Time depends on style and hair length. Confirm the expected time during consultation." },
      { q: "Should hair be washed before styling?", a: "Washed and dried hair is generally preferred. Confirm during consultation." },
      { q: "Can accessories be added?", a: "Yes, accessories can be included when arranged in advance." },
      { q: "Is a trial available?", a: "Trials can be discussed for bridal and high-consideration events." },
    ],
    related: ["party-makeup-prayagraj", "engagement-makeup-prayagraj", "hair-cut-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "hair-smoothing-prayagraj",
    name: "Hair Smoothing",
    category: "Hair Services",
    status: "published",
    metaTitle: "Hair Smoothing Consultation in Prayagraj",
    metaDescription:
      "Hair smoothing consultation at Mahalaxmi Beauty Parlour in Prayagraj. Suitability, strand-test policy, time and price basis confirmed before any chemical service.",
    h1: "Hair Smoothing Consultation in Prayagraj",
    serviceType: "Chemical hair service with consultation",
    answerBlock:
      "Hair smoothing should begin with an in-person assessment of hair condition and treatment history. Mahalaxmi Beauty Parlour can confirm suitability, expected time, price basis and aftercare during consultation.",
    whoFor: [
      "Women considering a smoothing treatment for frizz management",
      "Customers with previously coloured or treated hair who need honest suitability advice",
    ],
    process: [
      { title: "Assessment", text: "The stylist reviews hair history, condition and recent treatments." },
      { title: "Strand test", text: "Where needed, a strand test confirms how your hair responds." },
      { title: "Treatment", text: "Product is applied and set according to the salon's professional process." },
      { title: "Aftercare guidance", text: "You receive maintenance and washing instructions." },
    ],
    priceBasis: "Price depends on hair length and density. Confirm the basis during consultation. No fixed universal price.",
    preparation: [
      "Share your complete treatment history (colour, bleach, keratin, relaxer)",
      "Do not apply home smoothing products before the visit",
      "Ask about ventilation and patch-test practices before booking",
    ],
    aftercare: [
      "Follow the salon's washing and product guidance",
      "Avoid further chemical services until the stylist approves",
      "Report any unexpected reaction immediately",
    ],
    faqs: [
      { q: "Is smoothing suitable for previously coloured hair?", a: "Suitability depends on hair condition and treatment history. An in-person assessment is required." },
      { q: "Is a strand test required?", a: "A strand test is performed where needed to check how your hair responds." },
      { q: "How is price calculated?", a: "Price depends on hair length and density. Confirm during consultation." },
      { q: "What aftercare is needed?", a: "Follow the salon's washing routine and avoid overlapping chemical services." },
    ],
    related: ["hair-colour-prayagraj", "hair-cut-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "hair-colour-prayagraj",
    name: "Hair Colour",
    category: "Hair Services",
    status: "published",
    metaTitle: "Ladies Hair Colour in Prayagraj",
    metaDescription:
      "Ladies hair colour enquiries at Mahalaxmi Beauty Parlour in Prayagraj. Shade suitability, patch/strand tests, time and price basis confirmed during consultation.",
    h1: "Ladies Hair Colour in Prayagraj",
    serviceType: "Hair colour service with consultation",
    answerBlock:
      "Mahalaxmi Beauty Parlour accepts enquiries for women's hair colour in Prayagraj. Shade suitability, test requirements, time and price depend on the current hair condition and selected service.",
    whoFor: [
      "Women considering global colour, highlights or root touch-up",
      "Customers with previously treated hair who need honest advice",
    ],
    process: [
      { title: "Colour consultation", text: "Share your current shade, desired result and treatment history." },
      { title: "Patch and strand tests", text: "Tests are performed where required before colouring." },
      { title: "Application", text: "Colour is applied by the stylist and processed to the agreed result." },
      { title: "Aftercare", text: "You receive maintenance guidance for shade longevity." },
    ],
    priceBasis: "Price depends on length, density, product and service type. Confirm before service begins.",
    preparation: [
      "Share recent colour or chemical history",
      "Mention known allergies or sensitivities — a patch test is advised",
      "Do not use box colour before the appointment",
    ],
    aftercare: [
      "Use colour-safe products as advised",
      "Wait before overlapping further chemical treatments",
      "Report unexpected reactions promptly",
    ],
    faqs: [
      { q: "Is a patch test needed?", a: "A patch test is advised, especially for new customers or known sensitivities." },
      { q: "Can previously treated hair be coloured?", a: "Possibly, depending on condition and history. Confirm during consultation." },
      { q: "How is the price estimated?", a: "Price depends on length, density and service type. Confirm before booking." },
      { q: "How can colour be maintained?", a: "Follow the salon's colour-care guidance for washing and products." },
    ],
    related: ["hair-cut-prayagraj", "hair-smoothing-prayagraj", "hair-styling-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "facial-prayagraj",
    name: "Facial",
    category: "Skin & Facial",
    status: "published",
    metaTitle: "Facial Services in Prayagraj",
    metaDescription:
      "Cosmetic facial services for women at Mahalaxmi Beauty Parlour in Prayagraj. Consultation, duration and current price confirmed with your sensitivities in mind.",
    h1: "Facial Services for Women in Prayagraj",
    serviceType: "Cosmetic facial care",
    answerBlock:
      "Mahalaxmi Beauty Parlour offers cosmetic facial services for women in Colonelganj, Prayagraj. The appropriate option, duration and current price should be confirmed after discussing preferences and known sensitivities.",
    whoFor: [
      "Women seeking routine cosmetic skin care",
      "Customers preparing for occasions or weddings",
      "Anyone who wants professional product recommendations",
    ],
    process: [
      { title: "Skin consultation", text: "Share your skin type, concerns and known sensitivities." },
      { title: "Cleansing and care", text: "The facial follows a professional cleansing, exfoliation and mask routine." },
      { title: "Finish", text: "Moisturiser and sun protection are applied as appropriate." },
    ],
    priceBasis: "Price depends on the facial option chosen. Confirm the current price and what is included before service.",
    preparation: [
      "Mention all known sensitivities and allergies",
      "Avoid heavy makeup before the appointment",
      "Tell us about recent skin treatments or medication use",
    ],
    aftercare: [
      "Follow the advised post-facial routine",
      "Use sun protection as recommended",
      "Contact us if any reaction occurs",
    ],
    faqs: [
      { q: "Which facial option may suit my preferences?", a: "The right option depends on your skin type and concerns. Confirm during consultation." },
      { q: "How long does a facial take?", a: "Duration depends on the chosen option. Confirm when booking." },
      { q: "Should I mention sensitivities?", a: "Yes, always share known sensitivities before any facial service." },
      { q: "What should I avoid immediately after?", a: "Follow the advised aftercare, including sun protection." },
    ],
    related: ["cleanup-prayagraj", "bridal-makeup-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "cleanup-prayagraj",
    name: "Cleanup",
    category: "Skin & Facial",
    status: "published",
    metaTitle: "Face Cleanup in Prayagraj",
    metaDescription:
      "Face cleanup service at Mahalaxmi Beauty Parlour in Prayagraj. Understand how cleanup differs from a facial, the steps, duration and current price basis.",
    h1: "Face Cleanup Service in Prayagraj",
    serviceType: "Routine cosmetic skin care",
    answerBlock:
      "A face cleanup is a routine cosmetic salon service whose exact steps and duration depend on the option offered. Mahalaxmi Beauty Parlour can explain the difference from a facial before booking.",
    whoFor: [
      "Women who want routine skin maintenance between facials",
      "Customers with a short time window",
      "Anyone new to salon skin care",
    ],
    process: [
      { title: "Consultation", text: "Confirm what is included and how it differs from a facial." },
      { title: "Cleanup steps", text: "Cleansing, exfoliation and hydration following the salon's routine." },
      { title: "Advice", text: "Receive guidance on routine care between visits." },
    ],
    priceBasis: "Price depends on the chosen option. Confirm the current price before service.",
    preparation: ["Arrive with clean skin", "Mention any sensitivities", "Confirm the difference from a facial before booking"],
    aftercare: [
      "Follow the advised routine",
      "Avoid touching the face with unwashed hands",
      "Use sun protection as advised",
    ],
    faqs: [
      { q: "What is included in cleanup?", a: "The salon confirms the exact steps of the chosen cleanup option before service." },
      { q: "How is cleanup different from a facial?", a: "Cleanup is a lighter routine care service; a facial is a deeper, longer treatment. Confirm which suits you." },
      { q: "How long does it take?", a: "Duration depends on the option. Confirm when booking." },
      { q: "When should I postpone a cleanup?", a: "Postpone if you have active irritation, infection or open skin. Ask us if unsure." },
    ],
    related: ["facial-prayagraj", "threading-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "party-makeup-prayagraj",
    name: "Party Makeup",
    category: "Makeup",
    status: "published",
    metaTitle: "Party Makeup in Prayagraj",
    metaDescription:
      "Party and occasion makeup at Mahalaxmi Beauty Parlour in Prayagraj. Confirm event date, ready-by time, look, inclusions and current price before booking.",
    h1: "Party Makeup in Prayagraj",
    serviceType: "Occasion makeup service",
    answerBlock:
      "Mahalaxmi Beauty Parlour offers party makeup enquiries in Prayagraj. Confirm the event date, ready-by time, chosen look, inclusions and current price before booking.",
    whoFor: [
      "Party, reception and celebration guests",
      "Women attending family functions",
      "Anyone who wants a professional occasion look",
    ],
    process: [
      { title: "Look consultation", text: "Share event type, outfit and reference photos." },
      { title: "Makeup application", text: "Base, eye and lip makeup tailored to the occasion." },
      { title: "Hair add-on", text: "Hair styling can be included when arranged in advance." },
    ],
    priceBasis: "Price depends on look, inclusions and add-ons. Confirm the current price before booking.",
    preparation: [
      "Share event date and ready-by time",
      "Send outfit and reference photos",
      "Confirm whether hair styling is needed",
    ],
    aftercare: [
      "Follow touch-up guidance during the event",
      "Use gentle cleanser to remove makeup after the event",
    ],
    faqs: [
      { q: "What is included?", a: "Inclusions are confirmed during booking based on the chosen look." },
      { q: "How early should I book?", a: "Book as early as possible, especially in wedding season." },
      { q: "Can hair styling be added?", a: "Yes, hair styling can be added when arranged in advance." },
      { q: "How long does party makeup take?", a: "Time depends on the look. Confirm when booking." },
    ],
    related: ["engagement-makeup-prayagraj", "hair-styling-prayagraj", "bridal-makeup-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "engagement-makeup-prayagraj",
    name: "Engagement Makeup",
    category: "Makeup",
    status: "published",
    metaTitle: "Engagement Makeup in Prayagraj",
    metaDescription:
      "Engagement and ring ceremony makeup at Mahalaxmi Beauty Parlour in Prayagraj. Consultation-led with inclusions, ready-by logistics and price confirmed in advance.",
    h1: "Engagement Makeup in Prayagraj",
    serviceType: "Engagement makeup service",
    answerBlock:
      "Engagement makeup at Mahalaxmi Beauty Parlour should be planned around the event time, outfit and preferred finish. Confirm availability, inclusions, duration and price in advance.",
    whoFor: [
      "Engagement and ring ceremony brides",
      "Family members attending the ceremony",
      "Anyone wanting a soft, polished occasion look",
    ],
    process: [
      { title: "Consultation", text: "Share ceremony time, outfit and preferred look." },
      { title: "Application", text: "Soft, polished makeup suited to the event and photography." },
      { title: "Hair and add-ons", text: "Hair styling or draping can be included when arranged." },
    ],
    priceBasis: "Price depends on look and inclusions. Confirm the current price and package before booking.",
    preparation: [
      "Share ceremony date and ready-by time",
      "Send outfit photos and look references",
      "Ask about trial availability for brides",
    ],
    aftercare: [
      "Follow touch-up guidance",
      "Cleanse gently after the event",
    ],
    faqs: [
      { q: "Is a consultation included?", a: "Yes, the look is planned during a consultation before the event." },
      { q: "Can I share outfit photos?", a: "Yes, outfit photos help match the makeup to your look." },
      { q: "Are hair and draping included?", a: "Add-ons are available when arranged in advance. Confirm inclusions at booking." },
      { q: "When should I reserve the date?", a: "Reserve early, especially during wedding season." },
    ],
    related: ["party-makeup-prayagraj", "bridal-makeup-prayagraj", "hair-styling-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "pre-bridal-package-prayagraj",
    name: "Pre-Bridal Package",
    category: "Makeup",
    status: "published",
    metaTitle: "Pre-Bridal Beauty Package in Prayagraj",
    metaDescription:
      "Pre-bridal beauty package at Mahalaxmi Beauty Parlour in Prayagraj. Exact included services, timing guidance, exclusions and price confirmed before scheduling.",
    h1: "Pre-Bridal Beauty Package in Prayagraj",
    serviceType: "Pre-bridal beauty care package",
    answerBlock:
      "A pre-bridal package should list exact included services, timing guidance, exclusions, price and change policy. Confirm the current package directly with Mahalaxmi Beauty Parlour before scheduling.",
    whoFor: [
      "Brides preparing for their wedding day",
      "Brides who want a planned, gradual beauty routine",
    ],
    process: [
      { title: "Package consultation", text: "Review the current package sheet and confirm included services." },
      { title: "Scheduled sessions", text: "Sessions are scheduled over the weeks before the wedding." },
      { title: "Bridal coordination", text: "The plan coordinates with bridal makeup and styling." },
    ],
    priceBasis: "The package price and inclusions are confirmed on the current package sheet before booking.",
    preparation: [
      "Share wedding date and timeline",
      "Mention known sensitivities",
      "Confirm whether bridal makeup and trials are separate",
    ],
    aftercare: [
      "Follow the schedule advised by the salon",
      "Allow adjustments if skin reacts or timing changes",
    ],
    faqs: [
      { q: "What is included?", a: "The current package sheet lists exact included services. Request it before scheduling." },
      { q: "When should services be scheduled?", a: "The salon advises a timeline based on your wedding date." },
      { q: "Can the package be customized?", a: "Adjustments can be discussed based on needs and sensitivities." },
      { q: "Are bridal makeup and trials separate?", a: "Yes, bridal makeup and trials are planned separately from the package." },
    ],
    related: ["bridal-makeup-prayagraj", "facial-prayagraj", "cleanup-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "threading-prayagraj",
    name: "Threading",
    category: "Regular Beauty Services",
    status: "published",
    metaTitle: "Threading for Women in Prayagraj",
    metaDescription:
      "Ladies threading service at Mahalaxmi Beauty Parlour in Prayagraj. Eyebrow and face threading with clean tools. Confirm areas, price and appointment availability.",
    h1: "Threading Service for Women in Prayagraj",
    serviceType: "Eyebrow and facial threading",
    answerBlock:
      "Mahalaxmi Beauty Parlour offers ladies threading services in Colonelganj, Prayagraj. Confirm the areas offered, current price and appointment or walk-in availability before visiting.",
    whoFor: [
      "Women needing eyebrow shaping",
      "Customers looking for quick regular grooming",
      "Anyone near Colonelganj wanting a ladies-only salon",
    ],
    process: [
      { title: "Area confirmation", text: "Confirm which areas you want threaded (eyebrows, upper lip, face)." },
      { title: "Threading", text: "Precise threading with clean tools in a hygienic setup." },
      { title: "Soothing", text: "Calm the skin gently after the service." },
    ],
    priceBasis: "Price is confirmed on the current price list per area before service.",
    preparation: [
      "Confirm appointment or walk-in availability",
      "Arrive with clean skin",
    ],
    aftercare: [
      "Avoid touching the threaded area",
      "Keep the area clean and moisturised",
      "Postpone if you have active irritation or infection",
    ],
    faqs: [
      { q: "Is an appointment required?", a: "Appointments are recommended. Confirm walk-in availability when booking." },
      { q: "Which threading areas are offered?", a: "Eyebrows, upper lip and face threading are offered. Confirm the full list at the salon." },
      { q: "How should I prepare?", a: "Arrive with clean skin and confirm availability." },
      { q: "What aftercare is useful?", a: "Keep the area clean, avoid touching it, and moisturise gently." },
    ],
    related: ["waxing-prayagraj", "cleanup-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    slug: "waxing-prayagraj",
    name: "Waxing",
    category: "Regular Beauty Services",
    status: "published",
    metaTitle: "Ladies Waxing in Prayagraj",
    metaDescription:
      "Ladies waxing services at Mahalaxmi Beauty Parlour in Prayagraj. Confirm areas, wax types, privacy, current price and preparation guidance before booking.",
    h1: "Ladies Waxing Services in Prayagraj",
    serviceType: "Waxing services for women",
    answerBlock:
      "Women can enquire about waxing services at Mahalaxmi Beauty Parlour in Prayagraj. Confirm the available area, wax type, privacy arrangements, current price and preparation guidance before booking.",
    whoFor: [
      "Women seeking regular waxing services",
      "Brides and occasion guests preparing for events",
      "Customers who value privacy and hygiene",
    ],
    process: [
      { title: "Menu confirmation", text: "Review the current waxing menu and confirm areas and wax types." },
      { title: "Private service", text: "Service is provided with privacy arrangements confirmed in advance." },
      { title: "Aftercare", text: "Receive preparation and aftercare guidance." },
    ],
    priceBasis: "Price is confirmed on the current waxing menu per area before service.",
    preparation: [
      "Confirm hair length guidance with the salon",
      "Mention medications or skin conditions that may affect suitability",
      "Confirm privacy arrangements when booking",
    ],
    aftercare: [
      "Avoid hot showers and tight clothing immediately after",
      "Moisturise gently after 24 hours",
      "Consult the salon if irritation continues",
    ],
    faqs: [
      { q: "Which waxing services are available?", a: "The current waxing menu lists available areas and types. Request it before booking." },
      { q: "How should I prepare?", a: "Follow the salon's hair-length and skin preparation guidance." },
      { q: "How is privacy handled?", a: "Privacy arrangements are confirmed when booking." },
      { q: "When should waxing be postponed?", a: "Postpone with active irritation, infection, or when uncertain about medication suitability." },
    ],
    related: ["threading-prayagraj", "pre-bridal-package-prayagraj"],
    lastReviewed: "2026-07-30",
  },
  {
    // Launch blocker per blueprint: page must not publish until the exact
    // non-medical scope of "skin rejuvenation" is owner-approved.
    slug: "skin-rejuvenation-prayagraj",
    name: "Skin Rejuvenation",
    category: "Skin & Facial",
    status: "draft",
    metaTitle: "Cosmetic Skin Rejuvenation Consultation in Prayagraj",
    metaDescription: "",
    h1: "Cosmetic Skin Rejuvenation Consultation in Prayagraj",
    serviceType: "Cosmetic skin care",
    answerBlock: "",
    whoFor: [],
    process: [],
    priceBasis: "",
    preparation: [],
    aftercare: [],
    faqs: [],
    related: [],
    lastReviewed: "2026-07-30",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function publishedServices(): Service[] {
  return services.filter((s) => s.status === "published");
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

export function serviceUrl(slug: string): string {
  return siteUrl(servicePath(slug));
}

export function servicesByCategory(): { category: string; items: Service[] }[] {
  const map = new Map<string, Service[]>();
  for (const s of publishedServices()) {
    if (!map.has(s.category)) map.set(s.category, []);
    map.get(s.category)!.push(s);
  }
  return Array.from(map.entries()).map(([category, items]) => ({ category, items }));
}
