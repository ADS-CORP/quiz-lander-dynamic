'use client';

import { WebsiteUrlParams } from '@/components/controls/TrackedLink';
import { DomainSettingsProvider } from '@/context/DomainSettingsContext';
import { getUrlParams } from '@/utils/user-data';
import { GoogleTagManager } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import Footer from '@/components/base/footer';
import Header from '@/components/base/header/StaticHeader';
import { BrandConfig } from '@/config/types';

type LayoutProps = {
  children: ReactNode;
  brand: BrandConfig;
  isRootLayout?: boolean;
};

export default function BaseLayout({ children, brand, isRootLayout = false }: LayoutProps) {
  const [urlParams, setUrlParams] = useState<WebsiteUrlParams>({});
  const rawPath = usePathname();
  const path = rawPath?.endsWith('/') && rawPath !== '/' ? rawPath.slice(0, -1) : rawPath;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrlParams = getUrlParams();
      setUrlParams(currentUrlParams);
    }
  }, [path]);

  return (
    <DomainSettingsProvider value={{ urlParams, startUrl: path }}>
      <div className="flex min-h-screen flex-col bg-transparent relative">
        <Header brand={brand} />
        <main className="flex-1 bg-transparent relative z-0">{children}</main>
        {isRootLayout && (
          <Footer brand={brand} />
        )}
      </div>
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </DomainSettingsProvider>
  );
}
