'use client';

import { useEffect, useState } from 'react';
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
    qw?: (command: string, containerId: string, config?: any) => void;
    __quizConfig?: any;
  }
}

interface QuizWidgetProps {
  quizId: string;
  brand: BrandConfig;
}

// Global flag to prevent multiple quiz initializations
let quizInitialized = false;

function QuizWidget({ quizId }: QuizWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const widgetId = 'quiz-widget'; // Use standard ID as per documentation

  useEffect(() => {
    setIsMounted(true);
    
    // Prevent multiple initializations
    if (quizInitialized) {
      console.log('Quiz already initialized, skipping');
      return;
    }
    
    // Pre-create the quiz widget container
    const widgetContainer = document.getElementById('quiz-widget-container');
    if (!widgetContainer) {
      console.error('quiz-widget-container not found');
      return;
    }
    
    // Clear any existing quiz widgets in this container
    widgetContainer.innerHTML = '';
    
    // Create the quiz widget div with standard ID
    const container = document.createElement('div');
    container.id = widgetId;
    widgetContainer.appendChild(container);
    console.log('Created quiz widget div with ID:', widgetId);

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://quiz-widget.netlify.app/embed.js"]');
    
    if (existingScript && window.qw) {
      // Script already loaded, initialize immediately
      console.log('Script already exists, initializing with existing window.qw...');
      try {
        // Use simplified initialization with quizId and apiUrl
        window.qw('init', widgetId, {
          quizId,
          apiUrl: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api'
        });
        setIsLoaded(true);
        quizInitialized = true;
        console.log('Quiz widget initialized successfully (existing script)');
      } catch (error) {
        console.error('Error initializing quiz widget (existing script):', error);
      }
      return;
    }

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://quiz-widget.netlify.app/embed.js';
      script.async = true;
      script.setAttribute('data-quiz-id', quizId); // Add quiz ID as data attribute
      script.setAttribute('data-api-url', 'https://quiz-widget-backend-685730230e63.herokuapp.com/api'); // Add API URL
      
      script.onload = () => {
        console.log('Quiz script loaded');
        // According to docs, it should auto-initialize with data-quiz-id
        // But for React apps, we may need manual init
        setTimeout(() => {
          if (window.qw && typeof window.qw === 'function') {
            try {
              // Manual initialization for React apps
              window.qw('init', widgetId, {
                quizId,
                apiUrl: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api'
              });
              setIsLoaded(true);
              quizInitialized = true;
              console.log('Quiz widget initialized successfully');
            } catch (error) {
              console.error('Error initializing quiz widget:', error);
            }
          } else {
            // If auto-initialized, just mark as loaded
            setIsLoaded(true);
            quizInitialized = true;
            console.log('Quiz widget auto-initialized');
          }
        }, 100);
      };
      
      script.onerror = () => {
        console.error('Failed to load quiz widget script');
      };
      
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup if needed
    };
  }, [quizId]);

  // Return empty div - the quiz widget will render itself inside the container
  return null;
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
        <div className="relative mt-[90px]" data-priority="high">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-5">
            <div className="text-center">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl font-montserrat">
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
                  <QuizWidget quizId={quizId} brand={brand} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <AsSeenOn />
          </div>
          {content.settlementSection?.settlements?.length > 0 && (
            <div className="w-full relative z-[80]" style={{ backgroundColor: brand.theme?.settlementCarouselBackground || '#ffffff' }}>
              <div className="max-w-[1100px] mx-auto px-4 py-1 md:py-2 overflow-hidden">
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
