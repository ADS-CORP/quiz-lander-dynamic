import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://yourtruth.com'),
    title: {
      template: '%s | YourTruth',
      default: 'YourTruth - Legal Claims Landing Pages',
    },
    description: 'Find out if you qualify for compensation. Free case review available.',
    openGraph: {
      type: 'website',
      siteName: 'YourTruth',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function BrandLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}