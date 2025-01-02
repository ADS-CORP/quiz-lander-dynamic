import { Metadata } from "next";
import { ReactNode } from "react";
import { yourTruthBrand } from "@/config/brands/yt";
import BaseLayout from "@/components/base/layout/BaseLayout";

export const metadata: Metadata = {
  icons: yourTruthBrand.favicon ? [
    {
      rel: 'icon',
      url: yourTruthBrand.favicon,
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: yourTruthBrand.favicon,
    },
    {
      rel: 'shortcut icon',
      url: yourTruthBrand.favicon,
    }
  ] : []
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BaseLayout brand={yourTruthBrand} isRootLayout={true}>
      {children}
    </BaseLayout>
  );
}