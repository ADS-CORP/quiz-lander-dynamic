import { Metadata } from "next";
import { BrandConfig } from "@/config/types";

export function generatePageMetadata(
  title: string,
  description: string,
  brand: BrandConfig
): Metadata {
  return {
    title: title, // Root layout will append "| {brandName}"
    description,
    openGraph: {
      title: `${title} | ${brand.name}`, // OpenGraph needs full title
      description,
      siteName: brand.name,
      url: `https://${brand.domain}`,
      type: 'website',
    },
  };
}
