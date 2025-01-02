import { ReactNode } from "react";
import { weBuyLawsuitsBrand } from "@/config/brands/wbl";
import BaseLayout from "@/components/base/layout/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: weBuyLawsuitsBrand.favicon ? [
    {
      rel: 'icon',
      url: weBuyLawsuitsBrand.favicon,
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: weBuyLawsuitsBrand.favicon,
    },
    {
      rel: 'shortcut icon',
      url: weBuyLawsuitsBrand.favicon,
    }
  ] : []
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BaseLayout brand={weBuyLawsuitsBrand} isRootLayout={true}>
      {children}
    </BaseLayout>
  );
}