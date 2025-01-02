'use client';

import CustomFaqSection from '@/components/ui/CustomFaqSection';
import SettlementCarousel from '@/components/ui/SettlementCarousel';
import LiveClaimsNotification from '@/components/ui/LiveClaimsNotification';
import TrafficCounter from '@/components/ui/TrafficCounter';
import AsSeenOn from '@/components/ui/AsSeenOn';
import Footer from '@/components/base/footer';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface QuizWidgetProps {
  quizConfig: any;
  quizId: string;
  brand: any;
}

function QuizWidget({ quizConfig, quizId, brand }: QuizWidgetProps) {
  useEffect(() => {
    // Create container if it doesn't exist
    let container = document.getElementById('quiz-widget');
    if (!container) {
      container = document.createElement('div');
      container.id = 'quiz-widget';
      document.getElementById('quiz-widget-container')?.appendChild(container);
    }

    const script = document.createElement('script');
    script.src = 'https://quiz-widget.netlify.app/embed.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('loading', 'async');
    
    script.onload = () => {
      if (typeof window.qw === 'function') {
        window.qw('init', {
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
        });
      }
    };
    
    document.body.appendChild(script);

    return () => {
      script.remove();
      container?.remove();
    };
  }, [quizConfig, quizId]);

  return <div id="quiz-widget-container" className="w-full h-full" style={{ backgroundColor: brand.theme.quizBackground, position: 'relative', overflow: 'visible' }} />;
}

interface LandingPageProps {
  brand: any;
  content: any;
  source: any;
  quizId: string;
  buyer: any;
}

export function LandingPage({ brand, content, source, quizId, buyer }: LandingPageProps) {
  // Add structured data for SEO
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

  return (
    <>
      <div className="min-h-screen bg-white">
        <div 
          className="border-b shadow-sm fixed top-[60px] w-full z-[100]"
          style={{ backgroundColor: brand.theme.trafficCounterBackground }}
        >
          <TrafficCounter brand={brand} />
        </div>
        <div className="relative mt-[120px]">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {content.headline}
              </h1>
            </div>
          </div>

          <div className="relative bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="relative py-8">
                <div id="quiz-widget-container" className="relative">
                  <QuizWidget quizConfig={content.quizConfig} quizId={quizId} brand={brand} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            <AsSeenOn />
          </div>
          {content.settlementSection?.settlements?.length > 0 && (
            <div className="w-full relative z-[80]" style={{ backgroundColor: brand.theme.settlementCarouselBackground }}>
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
                  expandedBackground={brand.theme.faqExpandedBackground}
                  textColor={brand.theme.faqText}
                  brand={brand}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer brand={brand} />
    </>
  );
}
