'use client';

import { useEffect } from 'react';
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

interface QuizWidgetProps {
  quizId: string;
  brand: BrandConfig;
}

// Global flag to prevent multiple quiz initializations
let quizInitialized = false;

function QuizWidget({ quizId }: QuizWidgetProps) {
  useEffect(() => {
    // Prevent multiple initializations
    if (quizInitialized) {
      console.log('Quiz already initialized, skipping');
      return;
    }

    // Defer quiz widget loading until after page is interactive
    const loadQuizWidget = () => {
      // Create the qw function first
      const script1 = document.createElement('script');
      script1.innerHTML = `window.qw = window.qw || function(){(qw.q=qw.q||[]).push(arguments)};`;
      document.head.appendChild(script1);

      // Add the embed script
      const script2 = document.createElement('script');
      script2.src = 'https://quiz-widget.netlify.app/embed.js';
      script2.async = true;
      
      script2.onload = () => {
        console.log('Quiz script loaded');
        // Initialize the widget after script loads
        if (window.qw) {
          try {
            window.qw('init', 'quiz-widget-container', {
              quizId,
              apiUrl: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api',
              hideLoading: true  // Hide loading placeholder for cleaner UX
            });
            quizInitialized = true;
            console.log('Quiz widget initialized successfully');
            
            // Set up engagement detection and scroll to top for mobile
            const container = document.getElementById('quiz-widget-container');
            if (container) {
              let isEngaged = false;
              
              // Check if device is mobile
              const isMobile = () => {
                return window.innerWidth <= 768 || 
                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              };
              
              // Function to scroll quiz below fixed header on mobile
              const scrollQuizToTop = () => {
                if (isMobile()) {
                  const rect = container.getBoundingClientRect();
                  const scrollTop = window.scrollY || document.documentElement.scrollTop;
                  const containerTop = rect.top + scrollTop;
                  
                  // Account for fixed header (60px) + traffic counter (30px) = 90px total
                  const headerOffset = 90;
                  
                  // Scroll to put quiz just below the fixed header elements
                  window.scrollTo({
                    top: containerTop - headerOffset,
                    behavior: 'smooth'
                  });
                }
              };
              
              // Detect user engagement with quiz
              const engagementHandler = (e: Event) => {
                // Check if the event target is an input or select element
                const target = e.target as HTMLElement;
                const isFormElement = target.tagName === 'INPUT' || 
                                    target.tagName === 'SELECT' || 
                                    target.tagName === 'TEXTAREA' ||
                                    target.closest('input, select, textarea');
                
                if (!isEngaged && isFormElement && isMobile()) {
                  isEngaged = true;
                  // Small delay to ensure keyboard is opening
                  setTimeout(scrollQuizToTop, 300);
                }
              };
              
              // Add engagement listeners
              container.addEventListener('click', engagementHandler, true);
              container.addEventListener('focus', engagementHandler, true);
              container.addEventListener('touchstart', engagementHandler, true);
              
              // Create a MutationObserver to maintain position during quiz interactions on mobile
              const observer = new MutationObserver(() => {
                if (isEngaged && isMobile()) {
                  // Keep the quiz just below the fixed header
                  const rect = container.getBoundingClientRect();
                  const headerOffset = 90; // header + traffic counter height
                  
                  if (rect.top > headerOffset + 10) { // Small threshold to prevent constant scrolling
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const containerTop = rect.top + scrollTop;
                    window.scrollTo({
                      top: containerTop - headerOffset,
                      behavior: 'instant'
                    });
                  }
                }
              });
              
              // Observe the container for changes
              observer.observe(container, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['style', 'class']
              });
              
              // Reset engagement state when keyboard closes
              window.addEventListener('resize', () => {
                if (!isMobile()) {
                  isEngaged = false;
                }
              });
              
              // Store observer and handlers for cleanup
              (window as any).quizObserver = observer;
              (window as any).quizEngagementHandler = engagementHandler;
            }
          } catch (error) {
            console.error('Error initializing quiz widget:', error);
          }
        }
      };
      
      script2.onerror = () => {
        console.error('Failed to load quiz widget script');
      };
      
      document.head.appendChild(script2);
    };
    
    // Add resource hints for quiz widget
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'script';
    preloadLink.href = 'https://quiz-widget.netlify.app/embed.js';
    document.head.appendChild(preloadLink);
    
    // Load immediately if page is already interactive, otherwise wait
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      // Small delay to ensure DOM is ready
      setTimeout(loadQuizWidget, 100);
    } else {
      // Use DOMContentLoaded instead of load for faster initialization
      window.addEventListener('DOMContentLoaded', loadQuizWidget, { once: true });
    }

    // Cleanup function
    return () => {
      // Clean up observer
      if ((window as any).quizObserver) {
        (window as any).quizObserver.disconnect();
        delete (window as any).quizObserver;
      }
      
      // Clean up engagement handler
      const container = document.getElementById('quiz-widget-container');
      if (container && (window as any).quizEngagementHandler) {
        container.removeEventListener('click', (window as any).quizEngagementHandler, true);
        container.removeEventListener('focus', (window as any).quizEngagementHandler, true);
        container.removeEventListener('touchstart', (window as any).quizEngagementHandler, true);
        delete (window as any).quizEngagementHandler;
      }
      
      if (window.qw) {
        try {
          window.qw('destroy', 'quiz-widget-container', {});
        } catch (error) {
          console.error('Error destroying quiz widget:', error);
        }
      }
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
                    minHeight: "320px" // Reduced space to minimize gap before As Seen On
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
              <div className="max-w-[1100px] mx-auto px-4 py-8 md:py-6 overflow-hidden">
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
