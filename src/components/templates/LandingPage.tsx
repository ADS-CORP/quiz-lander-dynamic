'use client';

import CustomFaqSection from '@/components/ui/CustomFaqSection';
import SettlementCarousel from '@/components/ui/SettlementCarousel';
import LiveClaimsNotification from '@/components/ui/LiveClaimsNotification';
import TrafficCounter from '@/components/ui/TrafficCounter';
import AsSeenOn from '@/components/ui/AsSeenOn';
import { useEffect } from 'react';
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
      <Head>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${brand.domain}/${brand.abbreviation}/${content.abbreviation}-${source}`} />
        <meta property="og:site_name" content={brand.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.metaDescription} />
        <link rel="canonical" href={`https://${brand.domain}/${brand.abbreviation}/${content.abbreviation}-${source}`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <div className="relative w-full overflow-x-hidden">
        <div 
          className="border-b shadow-sm fixed top-[60px] w-full z-[100]"
          style={{ backgroundColor: brand.theme.trafficCounterBackground }}
        >
          <TrafficCounter />
        </div>

        <main className="flex flex-col items-center w-full">
          {/* Combined Quiz and Logos Section */}
          <div className="w-full relative">
            <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="pt-[120px]">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-800">
                  {content?.headline}
                </h1>
                
                {/* Quiz Widget */}
                <div className="w-full max-w-md md:max-w-2xl mx-auto relative" style={{ zIndex: 1000 }}>
                  <QuizWidget quizConfig={content.quizConfig} quizId={quizId} brand={brand} />
                </div>

                {/* As Seen On Section */}
                <div className="relative" style={{ zIndex: 1 }}>
                  <AsSeenOn />
                </div>
              </div>
            </div>
          </div>

          {/* Settlements Section */}
          {content.settlementSection?.settlements?.length > 0 && (
            <div className="w-full relative z-[80]" style={{ backgroundColor: brand.theme.settlementCarouselBackground }}>
              <div className="max-w-[900px] mx-auto px-4 py-8">
                <SettlementCarousel settlements={content.settlementSection.settlements} />
              </div>
            </div>
          )}

          {/* FAQ Section */}
          {content.faqSection?.faqs?.length > 0 && (
            <div className="w-full bg-slate-50 py-16">
              <div className="w-full max-w-4xl mx-auto px-4">
                <CustomFaqSection 
                  faqSection={content.faqSection} 
                  expandedBackground={brand.theme.faqExpandedBackground}
                  textColor={brand.theme.faqText}
                />
                <div className="mt-8 text-center">
                  <button 
                    style={{ 
                      backgroundColor: brand.theme.ctaBackground,
                      color: brand.theme.ctaText
                    }}
                    className="px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Chat With Us Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
