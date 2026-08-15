import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mahalaxmi Beauty Parlour Prayagraj",
    short_name: "Mahalaxmi Beauty",
    description: "Ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup and beauty classes.",
    start_url: "/",
    display: "standalone",
    background_color: "#8b1a2b",
    theme_color: "#8b1a2b",
    lang: "en",
    categories: ["beauty", "lifestyle", "shopping"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
