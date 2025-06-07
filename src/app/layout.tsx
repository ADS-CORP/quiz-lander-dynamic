import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { getBrandFromDomain, getBrandFromPathname } from "@/utils/brand";
import { peoplesJusticeBrand, yourTruthBrand } from "@/config/brands";
import "./globals.css";

// Load Montserrat with optimized settings to prevent font shifts
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", // Changed from optional to swap for better reliability
  preload: true, // Enable preloading
  fallback: ["system-ui", "sans-serif"],
  weight: ["800"], // Only load the weight used for h1
  variable: "--font-montserrat",
  adjustFontFallback: true, // Reduces CLS
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

export async function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} overflow-x-hidden`}>
      <head>
        {/* Preconnect to quiz widget for faster loading */}
        <link rel="preconnect" href="https://quiz-widget.netlify.app" />
        <link rel="dns-prefetch" href="https://quiz-widget.netlify.app" />
        
        {/* Preconnect to backend API */}
        <link rel="preconnect" href="https://quiz-widget-backend-685730230e63.herokuapp.com" />
        <link rel="dns-prefetch" href="https://quiz-widget-backend-685730230e63.herokuapp.com" />
      </head>
      <body className={`${montserrat.variable} overflow-x-hidden`}>
        <div className="min-h-screen w-screen overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
