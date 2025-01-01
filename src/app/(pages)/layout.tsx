import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://peoplesjustice.info'),
    title: {
      template: '%s | People\'s Justice',
      default: 'People\'s Justice - Legal Claims Landing Pages',
    },
    description: 'Find out if you qualify for compensation. Free case review available.',
    openGraph: {
      type: 'website',
      siteName: 'People\'s Justice',
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
  children: JSX.Element;
}) {
  return children;
}
