import { ReactNode } from "react";
import { seekingSettlementsBrand } from "@/config/brands/ss";
import BaseLayout from "@/components/base/layout/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: seekingSettlementsBrand.favicon ? [
    {
      rel: 'icon',
      url: seekingSettlementsBrand.favicon,
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: seekingSettlementsBrand.favicon,
    },
    {
      rel: 'shortcut icon',
      url: seekingSettlementsBrand.favicon,
    }
  ] : []
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BaseLayout brand={seekingSettlementsBrand} isRootLayout={true}>
      {children}
    </BaseLayout>
  );
}