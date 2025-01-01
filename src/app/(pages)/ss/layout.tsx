import { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://seekingsettlements.com'),
    title: {
      template: '{OfferName} Compensation | {BrandName}',
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
  children: ReactNode;
}) {
  return children;
}