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

interface QuizWidgetProps {
  quizId: string;
  brand: BrandConfig;
  onStickyChange?: (isSticky: boolean) => void;
}

// Global flag to prevent multiple quiz initializations
let quizInitialized = false;

function QuizWidget({ quizId, onStickyChange }: QuizWidgetProps) {
  useEffect(() => {
    // Ensure no sticky classes are present on mount
    const cleanup = () => {
      document.body.classList.remove('quiz-engaged');
      const wrapper = document.getElementById('quiz-widget-wrapper');
      if (wrapper) {
        wrapper.classList.remove('quiz-sticky');
        // Force reset styles
        wrapper.style.position = '';
        wrapper.style.top = '';
        wrapper.style.left = '';
        wrapper.style.right = '';
        wrapper.style.bottom = '';
        wrapper.style.zIndex = '';
        wrapper.style.height = '';
        wrapper.style.width = '';
      }
    };
    
    // Clean up any residual classes immediately
    cleanup();
    
    // Double-check after a short delay
    setTimeout(cleanup, 50);
    
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
            
            // Set up engagement detection and sticky behavior
            const container = document.getElementById('quiz-widget-container');
            const widgetWrapper = document.getElementById('quiz-widget-wrapper');
            if (container && widgetWrapper) {
              let isEngaged = false;
              let isSticky = false;
              let lastScrollY = window.scrollY;
              let scrollVelocity = 0;
              let allowEngagement = false;
              
              // Delay allowing engagement to prevent auto-triggering
              setTimeout(() => {
                allowEngagement = true;
                console.log('Engagement now allowed');
              }, 1000);
              
              // Watch for unwanted class additions during initialization
              const classObserver = new MutationObserver((mutations) => {
                if (!allowEngagement) {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                      const target = mutation.target as HTMLElement;
                      if (target.classList.contains('quiz-sticky')) {
                        console.log('Removing unwanted quiz-sticky class during initialization');
                        target.classList.remove('quiz-sticky');
                      }
                    }
                  });
                }
              });
              
              // Observe the widget wrapper for class changes
              classObserver.observe(widgetWrapper, {
                attributes: true,
                attributeFilter: ['class']
              });
              
              // Stop observing after initialization period
              setTimeout(() => {
                classObserver.disconnect();
              }, 1500);
              
              // Check if device is mobile
              const isMobile = () => {
                return window.innerWidth <= 768 || 
                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
              };
              
              // Function to make quiz sticky at top
              const makeQuizSticky = () => {
                if (!isSticky && isMobile() && isEngaged && allowEngagement) {
                  isSticky = true;
                  widgetWrapper.classList.add('quiz-sticky');
                  document.body.classList.add('quiz-engaged');
                  onStickyChange?.(true);
                  console.log('Quiz made sticky');
                }
              };
              
              // Function to remove sticky behavior
              const removeQuizSticky = () => {
                if (isSticky) {
                  isSticky = false;
                  widgetWrapper.classList.remove('quiz-sticky');
                  document.body.classList.remove('quiz-engaged');
                  onStickyChange?.(false);
                  console.log('Quiz sticky removed');
                }
              };
              
              // Detect user engagement with quiz
              const engagementHandler = (e: Event) => {
                // Don't process events during initialization
                if (!allowEngagement) {
                  console.log('Ignoring event - engagement not yet allowed');
                  return;
                }
                
                // Check if the event target is an interactive element
                const target = e.target as HTMLElement;
                const isInteractiveElement = 
                  target.tagName === 'INPUT' || 
                  target.tagName === 'SELECT' || 
                  target.tagName === 'TEXTAREA' ||
                  target.tagName === 'BUTTON' ||
                  target.closest('input, select, textarea, button') !== null ||
                  (target.getAttribute('role') === 'button') ||
                  (target.parentElement && target.parentElement.getAttribute('role') === 'button');
                
                if (!isEngaged && isInteractiveElement && isMobile()) {
                  console.log('User engaged with interactive element:', target.tagName, 'Event type:', e.type);
                  isEngaged = true;
                  
                  // Watch for DOM changes after the interaction
                  const observer = new MutationObserver((mutations) => {
                    console.log('DOM changed after interaction - making sticky');
                    makeQuizSticky();
                    observer.disconnect();
                  });
                  
                  // Start observing for changes
                  observer.observe(container, {
                    childList: true,
                    subtree: true,
                    attributes: true
                  });
                  
                  // Fallback: make sticky after timeout if no DOM changes detected
                  setTimeout(() => {
                    observer.disconnect();
                    if (!isSticky) {
                      console.log('Fallback - making sticky after timeout');
                      makeQuizSticky();
                    }
                  }, 300);
                }
              };
              
              // Detect forceful scroll to unstick
              const scrollHandler = () => {
                if (!isSticky) return;
                
                const currentScrollY = window.scrollY;
                const scrollDelta = currentScrollY - lastScrollY;
                
                // Calculate scroll velocity
                scrollVelocity = scrollDelta;
                
                // Detect forceful downward scroll (threshold of 50px in one scroll event)
                if (scrollDelta > 50 && currentScrollY > 100) {
                  removeQuizSticky();
                  isEngaged = false;
                }
                
                lastScrollY = currentScrollY;
              };
              
              // Add scroll listener
              window.addEventListener('scroll', scrollHandler, { passive: true });
              
              // Reset engagement state when keyboard closes or on resize
              window.addEventListener('resize', () => {
                if (!isMobile()) {
                  removeQuizSticky();
                  isEngaged = false;
                }
              });
              
              // Store handlers for cleanup
              (window as any).quizScrollHandler = scrollHandler;
              (window as any).quizProgressObserver = quizObserver;
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
      // Clean up scroll handler
      if ((window as any).quizScrollHandler) {
        window.removeEventListener('scroll', (window as any).quizScrollHandler);
        delete (window as any).quizScrollHandler;
      }
      
      // Clean up quiz progress observer
      if ((window as any).quizProgressObserver) {
        (window as any).quizProgressObserver.disconnect();
        delete (window as any).quizProgressObserver;
      }
      
      // Remove sticky classes
      document.body.classList.remove('quiz-engaged');
      const widgetWrapper = document.getElementById('quiz-widget-wrapper');
      if (widgetWrapper) {
        widgetWrapper.classList.remove('quiz-sticky');
      }
      
      if (window.qw) {
        try {
          window.qw('destroy', 'quiz-widget-container', {});
        } catch (error) {
          console.error('Error destroying quiz widget:', error);
        }
      }
    };
  }, [quizId, onStickyChange]);

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
  const [isQuizSticky, setIsQuizSticky] = useState(false);
  
  // Ensure clean state on mount
  useEffect(() => {
    setIsQuizSticky(false);
    // Force cleanup on page load
    document.body.classList.remove('quiz-engaged');
    const wrapper = document.getElementById('quiz-widget-wrapper');
    if (wrapper) {
      wrapper.classList.remove('quiz-sticky');
      wrapper.removeAttribute('style');
    }
  }, []);

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
    <BaseLayout brand={brand} pageBrandConfig={pageConfig} isQuizSticky={isQuizSticky}>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <div 
          className={`border-b shadow-sm fixed top-[60px] w-full z-[100] transition-transform duration-300 ${isQuizSticky ? '-translate-y-[90px]' : 'translate-y-0'}`}
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

          <div id="quiz-widget-wrapper" className="relative bg-white">
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
                  <QuizWidget quizId={quizId} brand={brand} onStickyChange={setIsQuizSticky} />
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
