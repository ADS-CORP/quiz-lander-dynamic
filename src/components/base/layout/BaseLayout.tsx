'use client';
import React from 'react';
import StaticHeader from '@/components/base/header/StaticHeader';
import { BrandConfig } from '@/types/config';

interface BaseLayoutProps {
  brand: BrandConfig;
  pageBrandConfig?: {
    cta?: string;
    showCta?: boolean;
    ctaText?: {
      header?: string;
      footer?: string;
    };
  };
  children: React.ReactNode;
  isRootLayout?: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ brand, pageBrandConfig, children, isRootLayout }) => {
  // Create the header brand config (without CTA fields)
  const headerBrand = {
    ...brand,
    cta: undefined,
    headerCta: undefined,
    headerCtaText: undefined,
    footerCtaText: undefined,
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <StaticHeader brand={headerBrand} pageConfig={pageBrandConfig} />
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>
    </div>
  );
};

export default BaseLayout;
