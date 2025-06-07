'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { BrandConfig } from '@/types/config';
import Footer from '@/components/base/footer';
import BaseLayout from '@/components/base/layout/BaseLayout';
import TrafficCounter from '@/components/ui/TrafficCounter';

// Lazy load non-critical components
const CustomFaqSection = dynamic(() => import('@/components/ui/CustomFaqSection'), {
  loading: () => <div className="min-h-[400px]" />
});
const SettlementCarousel = dynamic(() => import('@/components/ui/SettlementCarousel'), {
  loading: () => <div className="min-h-[280px]" />,
  ssr: false
});
const LiveClaimsNotification = dynamic(() => import('@/components/ui/LiveClaimsNotification'), {
  ssr: false
});
const AsSeenOn = dynamic(() => import('@/components/ui/AsSeenOn'), {
  loading: () => <div className="min-h-[200px]" />
});

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Pre-create the quiz widget container
    const container = document.createElement('div');
    container.id = 'quiz-widget';
    const widgetContainer = document.getElementById('quiz-widget-container');
    if (widgetContainer) {
      widgetContainer.appendChild(container);
    } else {
      console.error('quiz-widget-container not found');
      return;
    }

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

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://quiz-widget.netlify.app/embed.js"]');
    
    if (existingScript && window.qw) {
      // Script already loaded, initialize immediately
      window.qw('init', window.__quizConfig);
      setIsLoaded(true);
      return;
    }

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://quiz-widget.netlify.app/embed.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        if (window.qw && typeof window.qw === 'function') {
          window.qw('init', window.__quizConfig);
          setIsLoaded(true);
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load quiz widget script');
      };
      
      document.head.appendChild(script);
    }

    return () => {
      container?.remove();
      delete window.__quizConfig;
    };
  }, [quizConfig, quizId]);

  // Only show loading state on client side to prevent hydration mismatch
  return (
    <>
      {isMounted && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="animate-pulse space-y-4 w-full max-w-md mx-auto p-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface LandingPageProps {
  brand: BrandConfig;
  content: any;
  source: any;
  quizId: string;
  buyer: any;
}

export function LandingPage({ brand, content, quizId }: LandingPageProps) {

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
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div 
          className="border-b shadow-sm fixed top-[60px] w-full z-[100]"
          style={{ backgroundColor: brand.theme?.trafficCounterBackground || '#ffffff' }}
        >
          <TrafficCounter brand={brand} />
        </div>
        <div className="relative mt-[90px]">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-5">
            <div className="text-center">
              <h1 
                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl"
                style={{ 
                  contain: 'layout style paint',
                  willChange: 'auto'
                }}
              >
                {content.headline}
              </h1>
            </div>
          </div>

          <div className="relative bg-white">
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="relative pt-3">
                <div 
                  id="quiz-widget-container" 
                  className="relative w-full h-full"
                  style={{
                    backgroundColor: "#ffffff",
                    position: "relative",
                    overflow: "visible",
                    minHeight: "420px" // Reserve space for quiz to prevent layout shift
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
              <div className="max-w-[1100px] mx-auto px-4 py-8 overflow-hidden">
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
