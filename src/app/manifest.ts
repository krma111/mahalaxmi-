import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mahalaxmi Beauty Parlour Prayagraj",
    short_name: "Mahalaxmi Beauty",
    description: "Ladies beauty salon in Prayagraj offering hair care, facial, makeup, bridal makeup and beauty classes.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#7a0014",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
