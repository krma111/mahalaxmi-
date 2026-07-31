import { business } from "@/content/business";
import { publishedServices, servicePath } from "@/content/services";
import { siteUrl } from "@/lib/seo/urls";

export const dynamic = "force-static";

function link(text: string, path: string, description: string): string {
  return `[${text}](${siteUrl(path)}): ${description}`;
}

export function GET() {
  const serviceLines = publishedServices().map((s) =>
    link(s.name, servicePath(s.slug), s.answerBlock.split(" ").slice(0, 24).join(" "))
  );

  const lines = [
    `# ${business.name}`,
    "",
    `> ${business.shortDescription}`,
    "",
    `Full site: ${siteUrl("/")}`,
    "",
    "## Business",
    link("Home", "/", "Ladies beauty salon in Prayagraj. Hair, makeup and bridal services."),
    link("Salon at Colonelganj, Prayagraj", "/salon-colonelganj-prayagraj", `${business.name} at ${business.address.displayLine}. Open ${business.hours.time} ${business.hours.label}.`),
    link("Services", "/services", "Overview of all services with detail pages."),
    link("Bridal Makeup in Prayagraj", "/bridal-makeup-prayagraj", "Bridal makeup, engagement makeup and pre-bridal packages with consultation."),
    link("Beauty Classes in Prayagraj", "/beauty-classes-prayagraj", "Basic beauty parlour course, makeup learning and self-grooming classes."),
    link("Gallery", "/gallery", "Photos of salon services."),
    link("About", "/about", "About the salon."),
    link("Customer Reviews", "/reviews", "Read and leave Google reviews."),
    link("Contact", "/contact", "Address, phone and WhatsApp booking."),
    "",
    "## Services",
    ...serviceLines,
    "",
    "## Booking and contact",
    `WhatsApp: ${business.whatsapp}`,
    `Phone: ${business.telephone}`,
    `Instagram: ${business.instagram}`,
    "",
    `Hours: ${business.hours.label}, ${business.hours.time}`,
    `Address: ${business.address.displayLine}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
