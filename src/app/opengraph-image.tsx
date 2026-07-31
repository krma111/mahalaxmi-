import { ImageResponse } from "next/og";
import { business } from "@/content/business";
import { ORIGIN } from "@/lib/seo/urls";

export const alt = `${business.name} - Ladies Beauty Salon in Prayagraj`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: "#FAFAF8",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
            padding: "48px 56px",
            background: "#8B1A2B",
            borderRadius: "16px",
          }}
        >
          <div style={{ fontSize: 28, color: "#F5E9E0", letterSpacing: 6, textTransform: "uppercase" }}>
            Ladies Beauty Salon &middot; Prayagraj
          </div>
          <div style={{ fontSize: 76, color: "#FFFFFF", fontWeight: 600, lineHeight: 1.1 }}>
            {business.name}
          </div>
          <div style={{ fontSize: 34, color: "#F5E9E0" }}>
            Hair &middot; Makeup &middot; Bridal &middot; Beauty Classes
          </div>
          <div style={{ fontSize: 24, color: "#F5E9E0" }}>{business.telephone}</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
