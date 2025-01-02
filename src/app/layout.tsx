import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { getBrandFromDomain, getBrandFromPathname } from "@/utils/brand";
import { peoplesJusticeBrand, yourTruthBrand } from "@/config/brands";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

async function getBrand() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const pathname = headersList.get('x-invoke-path') || '/';

  // Skip brand check for root path
  if (pathname === '/') {
    return yourTruthBrand; // Default brand for root path
  }

  // Try to get brand from pathname first since we're using subpaths
  let brand = getBrandFromPathname(pathname);
  
  // If no brand found, try domain
  if (!brand) {
    brand = getBrandFromDomain(host, pathname);
  }
  
  // Brand must be found for non-root paths
  if (!brand) {
    throw new Error(`No brand found for host ${host} and pathname ${pathname}`);
  }
  
  return brand;
}

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getBrand();
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  const metadata: Metadata = {
    metadataBase: new URL(`${protocol}://${host}`)
  };

  // Only add title template if we have a brand
  if (brand?.name) {
    metadata.title = {
      template: `%s | ${brand.name}`,
      default: brand.name,
    };
  }

  return metadata;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
