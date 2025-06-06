'use client';

import CustomFaqSection from '@/components/ui/CustomFaqSection';
import SettlementCarousel from '@/components/ui/SettlementCarousel';
import LiveClaimsNotification from '@/components/ui/LiveClaimsNotification';
import TrafficCounter from '@/components/ui/TrafficCounter';
import AsSeenOn from '@/components/ui/AsSeenOn';
import Footer from '@/components/base/footer';
import BaseLayout from '@/components/base/layout/BaseLayout';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { BrandConfig } from '@/types/config';

// Extend Window interface to include our custom properties
declare global {
  interface Window {
    qw?: (command: string, config?: any) => void;
    __quizConfig?: any;
  }
}

interface QuizWidgetProps {
  quizConfig: any;
  quizId: string;
  brand: BrandConfig;
}

function QuizWidget({ quizConfig, quizId, brand }: QuizWidgetProps) {
  useEffect(() => {
    // Pre-initialize configuration object on window
    window.__quizConfig = {
      ...quizConfig,
      quizId,
      hideFooter: true,
      preventDefaultStyles: true,
      container: '#quiz-widget',
      apiConfig: {
        baseURL: window.location.origin,
        withCredentials: false,
        proxyConfig: {
          enabled: true,
          prefix: '/api',
          overrides: {
            ipapi: '/api/proxy-webhook/ipapi',
            npiRegistry: '/api/proxy-webhook/npi-registry'
          }
        }
      },
      containerStyle: { 
        background: 'transparent',
        maxHeight: '100vh',
        overflow: 'visible',
        position: 'relative',
        zIndex: 1000
      },
      dropdownStyle: {
        position: 'fixed',
        zIndex: 1001
      },
      popoverStyle: {
        position: 'fixed',
        zIndex: 1001
      },
      onQuestionChange: (questionNumber: number) => {
        window.dispatchEvent(
          new CustomEvent('quizProgress', { detail: { questionNumber } })
        );
      }
    };

    // If quiz widget is already loaded (from Script component), initialize immediately
    if (window.qw && typeof window.qw === 'function') {
      window.qw('init', window.__quizConfig);
    }

    return () => {
      // Cleanup config but keep script loaded for reuse
      delete window.__quizConfig;
    };
  }, [quizConfig, quizId]);

  return (
    <div className="w-full h-full relative">
      <div 
        id="quiz-widget-container" 
        className="w-full h-full" 
        style={{ 
          backgroundColor: brand.theme?.quizBackground || '#ffffff', 
          position: 'relative', 
          overflow: 'visible',
          minHeight: '600px' // Prevent layout shift
        }} 
      />
      {/* Loading placeholder to prevent layout shift */}
      <div 
        id="quiz-loading-placeholder" 
        className="absolute inset-0 flex items-center justify-center"
        style={{ display: 'none' }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading quiz...</p>
        </div>
      </div>
    </div>
  );
}

interface LandingPageProps {
  brand: BrandConfig;
  content: any;
  source: any;
  quizId: string;
  buyer: any;
}

export function LandingPage({ brand, content, source, quizId, buyer }: LandingPageProps) {
  // Add structured data for SEO (removed buyer from params since it's not used)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: content.metaTitle,
    description: content.metaDescription,
    url: `https://${brand.domain}/${brand.abbreviation}/${content.abbreviation}-${source}`,
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: `https://${brand.domain}`,
    },
    mainEntity: {
      '@type': 'Service',
      name: content.title,
      description: content.description,
      provider: {
        '@type': 'Organization',
        name: brand.name,
      },
      serviceType: 'Legal Service',
      areaServed: 'United States',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.description'],
    },
  };

  // Extract page-specific config
  const pageConfig = {
    // For backward compatibility, check both content.cta and brand.cta
    cta: content.cta ?? brand.cta,
    // Use content.page?.showCta for new structure, fall back to content.showCta for old
    showCta: content.page?.showCta ?? content.showCta ?? true,
    ctaText: {
      // Use content.ctaText for header/footer if available
      header: content.ctaText?.header ?? brand.headerCtaText,
      footer: content.ctaText?.footer ?? brand.footerCtaText
    }
  };

  return (
    <BaseLayout brand={brand} pageBrandConfig={pageConfig}>
      <Head>
        {/* Preconnect to quiz widget domain for faster loading */}
        <link rel="preconnect" href="https://quiz-widget.netlify.app" />
        <link rel="dns-prefetch" href="https://quiz-widget.netlify.app" />
        
        {/* Preload the quiz widget script */}
        <link 
          rel="preload" 
          href="https://quiz-widget.netlify.app/embed.js" 
          as="script"
          crossOrigin="anonymous"
        />
      </Head>
      
      {/* Load quiz widget script early with Next.js Script component */}
      <Script
        src="https://quiz-widget.netlify.app/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize quiz if config is ready
          if (window.__quizConfig && window.qw) {
            window.qw('init', window.__quizConfig);
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        <div 
          className="border-b shadow-sm fixed top-[60px] w-full z-[100]"
          style={{ backgroundColor: brand.theme?.trafficCounterBackground || '#ffffff' }}
        >
          <TrafficCounter brand={brand} />
        </div>
        <div className="relative mt-[90px]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-5">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                {content.headline}
              </h1>
            </div>
          </div>

          <div className="relative bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="relative py-3">
                <div 
                  id="quiz-widget-container" 
                  className="relative w-full h-full"
                  style={{
                    backgroundColor: "#ffffff",
                    position: "relative",
                    overflow: "visible",
                    minHeight: "500px"
                  }}
                >
                  <QuizWidget quizConfig={content.quizConfig} quizId={quizId} brand={brand} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <AsSeenOn />
          </div>
          {content.settlementSection?.settlements?.length > 0 && (
            <div className="w-full relative z-[80]" style={{ backgroundColor: brand.theme?.settlementCarouselBackground || '#ffffff' }}>
              <div className="max-w-[900px] mx-auto px-4 py-8">
                <SettlementCarousel settlements={content.settlementSection.settlements} />
              </div>
            </div>
          )}
          {content.faqSection?.faqs?.length > 0 && (
            <div className="w-full bg-slate-50 py-16">
              <div className="w-full max-w-4xl mx-auto px-4">
                <CustomFaqSection 
                  faqSection={content.faqSection} 
                  expandedBackground={brand.theme?.faqExpandedBackground || '#ffffff'}
                  textColor={brand.theme?.faqText || '#000000'}
                  brand={brand}
                  page={content.page}
                />
              </div>
            </div>
          )}
        </div>
        <LiveClaimsNotification brand={brand} />
      </div>
      <Footer brand={brand} />
    </BaseLayout>
  );
}
