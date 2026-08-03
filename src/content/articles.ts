// Blog articles. Copy is factual and consultative, matching the site policy:
// no fabricated results, prices or guarantees. Dates use the publish date and
// must be updated to the current date whenever an article is added or revised.

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string;
  readingMinutes: number;
  sections: ArticleSection[];
  related: string[];
  faqs: { q: string; a: string }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-choose-beauty-parlour-in-prayagraj",
    title: "How to Choose a Beauty Parlour in Prayagraj",
    metaTitle: "How to Choose a Beauty Parlour in Prayagraj | Mahalaxmi Blog",
    metaDescription:
      "What to check before booking a ladies beauty parlour in Prayagraj: services, consultation, hygiene, pricing and booking. A practical checklist for first-time customers.",
    excerpt:
      "A practical checklist for choosing a ladies beauty parlour in Prayagraj — services, consultation, hygiene, honest pricing and easy booking.",
    datePublished: "2026-08-03",
    readingMinutes: 4,
    sections: [
      {
        heading: "Start with the services you actually need",
        paragraphs: [
          "Before comparing parlours, list the services you need — a regular haircut or threading, a one-time party makeup, or a full bridal plan. A parlour that does a little of everything may be fine for basic care, but high-consideration services like bridal makeup and hair colour deserve a parlour that clearly explains what it offers and how it works.",
          "Check whether the parlour is ladies-only if that matters to you, and whether it explains its consultation process before you commit to a service.",
        ],
      },
      {
        heading: "Look for consultation before price, not after",
        paragraphs: [
          "A reliable parlour confirms what you need, how long it takes and how the price is calculated before starting the service. For services like hair colour, smoothing and bridal makeup, the right answer is usually based on your hair type, skin and the chosen look — not a fixed universal rate.",
          "Ask directly: how is the price decided, and what changes if the service takes longer than planned?",
        ],
      },
      {
        heading: "Check hygiene practices",
        paragraphs: [
          "Hygiene matters more than any single service. Ask about clean tools, fresh towels, disposable items where relevant, and whether patch or strand tests are done for chemical services. A parlour that talks about these openly is usually one that follows them.",
        ],
      },
      {
        heading: "Test the booking process",
        paragraphs: [
          "Try booking before you visit. A parlour that confirms your appointment on WhatsApp or by phone, reconfirms availability and tells you what to bring is far easier to deal with than one where booking feels uncertain.",
        ],
      },
      {
        heading: "Read reviews but verify them",
        paragraphs: [
          "Online reviews help, but check whether the parlour's claims match its reviews — and whether recent reviews exist. A parlour with few but honest reviews is often more trustworthy than one with many reviews that all sound identical.",
        ],
      },
    ],
    related: [
      "hair-cut-prayagraj",
      "facial-prayagraj",
      "bridal-makeup-prayagraj",
      "beauty-classes-prayagraj",
    ],
    faqs: [
      {
        q: "What should I ask before booking a parlour in Prayagraj?",
        a: "Ask about the exact services, how pricing is decided, hygiene practices, and how to confirm the appointment before the visit.",
      },
      {
        q: "Is a consultation necessary before every service?",
        a: "For services like hair colour, smoothing, facials and makeup, a short consultation ensures the service matches your hair or skin type and that the price is confirmed before you begin.",
      },
    ],
  },
  {
    slug: "bridal-makeup-questions-to-ask-before-booking",
    title: "8 Questions to Ask Before Booking Bridal Makeup in Prayagraj",
    metaTitle: "Bridal Makeup Questions to Ask Before Booking | Mahalaxmi Blog",
    metaDescription:
      "Ask these questions before booking bridal makeup in Prayagraj: trial, inclusions, timing, travel, touch-up kit and price. Practical checklist for brides.",
    excerpt:
      "Ask these questions before booking bridal makeup — trial, inclusions, timing, touch-up kit and exactly how the price is decided.",
    datePublished: "2026-08-03",
    readingMinutes: 5,
    sections: [
      {
        heading: "Why the questions matter",
        paragraphs: [
          "Bridal makeup is usually booked weeks ahead, on a day that cannot be postponed. The details that cause problems on the wedding day — timing, accessories, travel, touch-ups — are the ones that were never asked about during booking.",
          "A parlour that answers these questions clearly and in writing is more likely to deliver what was agreed.",
        ],
      },
      {
        heading: "The questions to ask",
        paragraphs: [
          "Use this checklist when you talk to a makeup artist or parlour:",
        ],
        list: [
          "Is a trial available, and is it included or charged separately?",
          "What exactly is included in the quoted price — base, lashes, accessories, touch-up kit?",
          "What time must I be ready by, and how is that planned backwards from the ceremony?",
          "Does the artist travel to the venue, and how is travel and setup time handled?",
          "What happens if the plan changes, and what is the cancellation policy?",
          "Which products will be used, and can I confirm any skin sensitivities?",
          "Will hair styling be done by the same team or separately?",
          "How is the final price confirmed — before booking or on the day?",
        ],
      },
      {
        heading: "Get the confirmation in writing",
        paragraphs: [
          "Whatever is agreed — date, ready-by time, inclusions and price — should be confirmed in a message you can check later. A simple WhatsApp confirmation protects both sides and removes the guesswork on the wedding day.",
        ],
      },
    ],
    related: ["bridal-makeup-prayagraj", "engagement-makeup-prayagraj", "pre-bridal-package-prayagraj"],
    faqs: [
      {
        q: "Is a bridal makeup trial necessary?",
        a: "A trial is strongly recommended for bridal makeup. Ask whether it is included in the package or charged separately before booking.",
      },
      {
        q: "How early should I book bridal makeup?",
        a: "Book as early as possible, especially during the wedding season, so the date and time are reserved and planning is unhurried.",
      },
    ],
  },
  {
    slug: "pre-bridal-care-timeline-before-wedding",
    title: "Pre-Bridal Care Timeline: What to Plan Before Your Wedding",
    metaTitle: "Pre-Bridal Care Timeline Before the Wedding | Mahalaxmi Blog",
    metaDescription:
      "A practical pre-bridal care timeline: when to start facials, hair care, threading and trials before the wedding day. Gentle, realistic planning for brides.",
    excerpt:
      "When to start facials, hair care, threading and makeup trials before the wedding — a gentle, realistic timeline for brides.",
    datePublished: "2026-08-03",
    readingMinutes: 4,
    sections: [
      {
        heading: "Start early, keep it gradual",
        paragraphs: [
          "Pre-bridal care works best when it is planned gradually rather than packed into the last week. Starting 6 to 8 weeks before the wedding gives the skin and hair time to respond calmly to each service.",
          "The exact schedule should be confirmed with the parlour based on your services, skin type and timeline — this article is a general guide, not a fixed plan.",
        ],
      },
      {
        heading: "A suggested sequence",
        paragraphs: [
          "A common approach is:",
        ],
        list: [
          "6–8 weeks before: begin routine skin care — cleanups or facials spaced apart — and assess hair needs such as colour or smoothing",
          "3–4 weeks before: complete major hair services so any adjustment has time to settle",
          "2 weeks before: final facial round, eyebrow shaping and any remaining grooming",
          "1 week before: touch-up grooming only — avoid new chemical services or unfamiliar products",
          "2–3 days before: final threading and waxing check, if needed",
          "Wedding day: bridal makeup and hair styling with the agreed ready-by time",
        ],
      },
      {
        heading: "Rules of thumb for the final week",
        paragraphs: [
          "In the last week, avoid trying new products, new facials or new chemical services. The goal is stability — skin and hair that look the way the trial and preparation predicted. Also confirm the wedding-day plan (time, venue, travel, touch-up kit) a few days in advance.",
        ],
      },
    ],
    related: ["pre-bridal-package-prayagraj", "facial-prayagraj", "hair-smoothing-prayagraj"],
    faqs: [
      {
        q: "When should I start pre-bridal skin care?",
        a: "Starting 6 to 8 weeks before the wedding is a common approach. Confirm a personalised schedule with the parlour based on your skin type and services.",
      },
      {
        q: "What should I avoid in the last week?",
        a: "Avoid new products, new facials and new chemical services in the final week so your skin and hair stay stable for the wedding day.",
      },
    ],
  },
  {
    slug: "hair-smoothing-vs-keratin-whats-the-difference",
    title: "Hair Smoothing vs Keratin Treatment: What's the Difference?",
    metaTitle: "Hair Smoothing vs Keratin Treatment | Mahalaxmi Blog",
    metaDescription:
      "Understand the difference between hair smoothing and keratin treatments, what to ask during consultation, and why hair condition decides suitability.",
    excerpt:
      "What to know about hair smoothing and keratin treatments — the difference, what to ask, and why an in-person assessment matters.",
    datePublished: "2026-08-03",
    readingMinutes: 4,
    sections: [
      {
        heading: "The honest starting point",
        paragraphs: [
          "Treatments for smoother hair are often marketed with big claims, but the real answer for your hair depends on its condition, texture and treatment history. A professional parlour will assess your hair in person before recommending anything — that assessment matters more than the name of the treatment.",
        ],
      },
      {
        heading: "What the terms usually mean",
        paragraphs: [
          "Different salons use these names differently, so the reliable way to compare is to ask what the treatment involves for your hair:",
        ],
        list: [
          "Smoothing — generally a treatment aimed at reducing frizz and softening the hair's surface, with results and duration depending on hair type and the products used",
          "Keratin treatment — usually a formaldehyde-based smoothing treatment; suitability depends on hair condition, and testing and ventilation practices should be confirmed",
        ],
      },
      {
        heading: "Questions to ask before booking",
        paragraphs: [
          "Ask about the product used, whether a strand test will be done, how long the result is expected to last for your hair type, the full price basis, and the aftercare routine. Also confirm the salon's ventilation and patch-test practices.",
        ],
      },
      {
        heading: "When to postpone the service",
        paragraphs: [
          "If your hair is recently coloured, bleached or damaged, or if you have scalp sensitivity, confirm suitability first. A responsible parlour will tell you honestly if the service should wait.",
        ],
      },
    ],
    related: ["hair-smoothing-prayagraj", "hair-colour-prayagraj", "hair-cut-prayagraj"],
    faqs: [
      {
        q: "Is keratin treatment the same as hair smoothing?",
        a: "The terms are used differently by different salons. Ask exactly what the treatment involves for your hair, the product used and the expected duration of results.",
      },
      {
        q: "Is hair smoothing suitable for coloured hair?",
        a: "Suitability depends on your hair's condition and treatment history. An in-person assessment is required before any chemical service.",
      },
    ],
  },
  {
    slug: "facial-vs-cleanup-which-skin-treatment-suits-you",
    title: "Facial vs Cleanup: Which Skin Treatment Suits You?",
    metaTitle: "Facial vs Cleanup for Skin | Mahalaxmi Blog",
    metaDescription:
      "Understand the difference between a facial and a face cleanup, when each suits you, and what to confirm during consultation before booking.",
    excerpt:
      "The difference between a facial and a cleanup, when each suits you, and what to confirm during consultation.",
    datePublished: "2026-08-03",
    readingMinutes: 3,
    sections: [
      {
        heading: "What each service usually involves",
        paragraphs: [
          "A face cleanup is generally a lighter, quicker routine service — cleansing, exfoliation and hydration. A facial is usually a deeper, longer treatment with more steps and products, aimed at a specific skin concern.",
          "The exact steps and duration depend on the parlour's options, so the practical step is to ask what a given option includes and how long it takes.",
        ],
      },
      {
        heading: "Which one suits you",
        paragraphs: [
          "Consider a cleanup if you want routine maintenance between facials, have limited time, or are new to salon skin care. Consider a facial if you have a specific concern you want addressed in a longer, deeper session, or when preparing for an occasion.",
          "Your skin type and sensitivities decide which products are suitable — always share known sensitivities before any service.",
        ],
      },
      {
        heading: "What to confirm before booking",
        paragraphs: [
          "Confirm what the chosen option includes, how long it takes, the current price, and whether any follow-up routine is advised. Postpone the service if you have active irritation, infection or open skin.",
        ],
      },
    ],
    related: ["facial-prayagraj", "cleanup-prayagraj", "threading-prayagraj"],
    faqs: [
      {
        q: "What is the difference between cleanup and facial?",
        a: "Cleanup is a lighter routine care service; a facial is a deeper, longer treatment. Confirm which option suits your needs during consultation.",
      },
      {
        q: "How often should I get a facial?",
        a: "Frequency depends on your skin type and the service. The parlour can advise a routine based on your skin during consultation.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function articlePath(slug: string): string {
  return `/blog/${slug}`;
}
