'use client';

import CustomFaqSection from '@/components/ui/CustomFaqSection.js';
import SettlementCarousel from '@/components/ui/SettlementCarousel.js';
import LiveClaimsNotification from '@/components/ui/LiveClaimsNotification.js';
import TrafficCounter from '@/components/ui/TrafficCounter.js';
import { useEffect } from 'react';

function QuizWidget({ quizConfig, quizId, brand }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://quiz-widget.netlify.app/embed.js';
    script.async = true;
    
    script.onload = () => {
      if (typeof window.qw === 'function') {
        window.qw('init', {
          ...quizConfig,
          quizId,
          hideFooter: true, // Prevent quiz widget from rendering its own footer
          preventDefaultStyles: true, // Prevent default styles from being injected
          containerStyle: { 
            background: 'transparent',
            maxHeight: '100vh',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 0,
            isolation: 'isolate'
          },
          onQuestionChange: (questionNumber) => {
            window.dispatchEvent(
              new CustomEvent('quizProgress', { detail: { questionNumber } })
            );
          }
        });
      }
    };
    
    script.onerror = (error) => {
      console.error('Error loading quiz widget script:', error);
    };
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [quizConfig, quizId]);

  return (
    <div 
      id="quiz-widget" 
      className="w-full h-full relative z-0" 
      style={{ 
        backgroundColor: brand.theme.quizBackground,
        isolation: 'isolate'
      }} 
    />
  );
}

export function LandingPage({ brand, content, source, quizId }) {
  const { quizConfig, faqSection, settlementSection } = content;
  
  return (
    <div className="relative w-full overflow-x-hidden">
      <div 
        className="border-b shadow-sm fixed top-[60px] w-full z-[1000] bg-[#e8f7ff]"
      >
        <TrafficCounter />
      </div>

      <main className="flex flex-col items-center w-full">
        {/* Combined Quiz and Logos Section */}
        <div className="w-full relative z-0">
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="pt-[120px]">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-slate-800">
                {content.headline}
              </h1>
              
              {/* Quiz Widget */}
              <div className="w-full max-w-md md:max-w-2xl mx-auto relative z-0">
                <QuizWidget quizConfig={quizConfig} quizId={quizId} brand={brand} />
              </div>

              {/* As Seen On Section */}
              <div className="pt-8 relative z-0">
                <h2 className="text-lg font-semibold text-center mb-6 text-slate-800">
                  As Seen On:
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-4xl mx-auto pb-8">
                  <div className="w-full flex justify-center gap-x-6 mb-4 md:mb-0 md:w-auto">
                    <img src="/images/bbc.png" alt="BBC" className="h-12 md:h-14 object-contain" />
                    <img src="/images/nyt.png" alt="The New York Times" className="h-12 md:h-14 object-contain" />
                    <img src="/images/forbes.png" alt="Forbes" className="h-12 md:h-14 object-contain" />
                    <img src="/images/usa.png" alt="USA Today" className="h-12 md:h-14 object-contain" />
                  </div>
                  <div className="w-full flex justify-center gap-x-6 md:w-auto">
                    <img src="/images/foxnews.png" alt="Fox News" className="h-12 md:h-14 object-contain" />
                    <img src="/images/yahoo.png" alt="Yahoo!" className="h-12 md:h-14 object-contain" />
                    <img src="/images/abc.png" alt="ABC" className="h-12 md:h-14 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settlements Section */}
        <div className="w-full bg-[#0284c7] relative z-[80]">
          <div className="max-w-[900px] mx-auto px-4 py-8">
            <SettlementCarousel settlements={settlementSection.settlements} />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full bg-slate-50 py-16">
          <div className="w-full max-w-4xl mx-auto px-4">
            <CustomFaqSection 
              faqSection={faqSection} 
              expandedBackground={brand.theme.faqExpandedBackground}
              textColor={brand.theme.faqText}
            />
            <div className="mt-8 text-center">
              <button className="bg-[#d31516] text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
                Chat With Us Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <LiveClaimsNotification />
    </div>
  );
}
