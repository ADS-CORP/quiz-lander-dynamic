import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://webuylawsuits.com'),
    title: {
      template: '%s | We Buy Lawsuits',
      default: 'We Buy Lawsuits - Legal Claims Landing Pages',
    },
    description: 'Find out if you qualify for compensation. Free case review available.',
    openGraph: {
      type: 'website',
      siteName: 'We Buy Lawsuits',
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