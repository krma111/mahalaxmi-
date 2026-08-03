import type { Metadata } from "next";
import { AreaPage } from "@/components/AreaPage";
import { areaPath, getArea } from "@/content/areas";

const area = getArea("katra")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: areaPath(area.slug) },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
  },
};

export default function KatraPage() {
  return <AreaPage area={area} />;
}
