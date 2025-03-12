import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { getBrandFromDomain, getBrandFromPathname } from "@/utils/brand";
import { peoplesJusticeBrand, yourTruthBrand } from "@/config/brands";
import "./globals.css";

// Load Montserrat with optimized settings to prevent font shifts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
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
      template: '%s',
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
    <html lang="en" className={montserrat.variable}>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          as="style"
          crossOrigin="anonymous"
        />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
