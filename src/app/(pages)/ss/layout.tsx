import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    metadataBase: new URL('https://seekingsettlements.com'),
    title: {
      template: '%s | Seeking Settlements',
      default: 'Seeking Settlements - Legal Claims Landing Pages',
    },
    description: 'Find out if you qualify for compensation. Free case review available.',
    openGraph: {
      type: 'website',
      siteName: 'Seeking Settlements',
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
  children: React.ReactNode;
}) {
  return children;
}