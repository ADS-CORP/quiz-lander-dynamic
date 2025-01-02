import { ReactNode } from "react";
import { peoplesJusticeBrand } from "@/config/brands/pj";
import BaseLayout from "@/components/base/layout/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: peoplesJusticeBrand.favicon ? [
    {
      rel: 'icon',
      url: peoplesJusticeBrand.favicon,
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      url: peoplesJusticeBrand.favicon,
    },
    {
      rel: 'shortcut icon',
      url: peoplesJusticeBrand.favicon,
    }
  ] : []
};

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BaseLayout brand={peoplesJusticeBrand} isRootLayout={true}>
      {children}
    </BaseLayout>
  );
}