import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { getBrandFromDomain } from "@/utils/brand";
import { peoplesJusticeBrand } from "@/config/brands/pj";
import "./globals.css";
import BaseLayout from "@/components/base/layout/BaseLayout";
import { brands } from "@/config/brands";

const inter = Inter({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const pathname = headersList.get('x-invoke-path') || '/';
  
  // Extract brand from pathname (e.g., /pj/hair-ad-fb -> pj)
  const brandId = pathname.split('/')[1];
  const brand = brandId && brands[brandId] ? brands[brandId] : peoplesJusticeBrand;

  return {
    title: "Legal Claims Landing Pages",
    description: "Find out if you qualify for compensation",
    icons: {
      icon: brand.favicon,
      shortcut: brand.favicon,
      apple: brand.favicon,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const pathname = headersList.get('x-invoke-path') || '/';
  
  // Extract brand from pathname (e.g., /pj/hair-ad-fb -> pj)
  const brandId = pathname.split('/')[1];
  const brand = brandId && brands[brandId] ? brands[brandId] : peoplesJusticeBrand;

  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout brand={brand}>{children}</BaseLayout>
      </body>
    </html>
  );
}
