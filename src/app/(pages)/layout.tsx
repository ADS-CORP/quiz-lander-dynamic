import { Metadata } from "next";
import type { React } from "react";

type Props = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  // You can get the brand and content from params if needed
  return {
    metadataBase: new URL('https://peoplesjustice.info'),
    title: {
      template: '%s | Free Case Review',
      default: 'Legal Claims Landing Pages | Free Case Review',
    },
    description: 'Find out if you qualify for compensation. Free case review available.',
    openGraph: {
      type: 'website',
      siteName: "People's Justice",
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

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
