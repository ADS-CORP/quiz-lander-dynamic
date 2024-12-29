'use client';

import React, { useState, useEffect } from 'react';

export default function SettlementCarousel({ settlements }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [autoRotateInterval, setAutoRotateInterval] = useState(null);
  const verifiedText = "Verified Settlement";

  const sortedSettlements = settlements || [];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedSettlements.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sortedSettlements.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const startAutoRotate = () => {
    if (!userInteracted) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      setAutoRotateInterval(interval);
    }
  };

  const stopAutoRotate = () => {
    if (autoRotateInterval) {
      clearInterval(autoRotateInterval);
      setAutoRotateInterval(null);
    }
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [userInteracted]);

  const handleSettlementClick = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <button 
        onClick={handlePrev}
        className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-600 p-2 md:p-2.5 rounded-full shadow-md transition-all"
        aria-label="Previous settlement"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button 
        onClick={() => {
          setUserInteracted(true);
          stopAutoRotate();
          handleNext();
        }}
        className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-blue-600 p-2 md:p-2.5 rounded-full shadow-md transition-all"
        aria-label="Next settlement"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="relative flex justify-center items-center min-h-[280px] md:min-h-[300px]">
        {sortedSettlements.map((settlement, index) => (
          <div 
            key={index}
            onClick={() => handleSettlementClick(settlement.link)}
            className={`
              absolute w-[calc(100%-32px)] md:w-[500px] bg-white rounded-xl md:rounded-2xl shadow-lg
              transition-all duration-500 ease-in-out
              transform cursor-pointer
              ${index === currentIndex ? 'z-20 scale-100 opacity-100 translate-x-0' : 
                index < currentIndex ? 'z-10 scale-95 opacity-0 -translate-x-full' : 
                'z-10 scale-95 opacity-0 translate-x-full'}
              ${isTransitioning ? 'pointer-events-none' : ''}
            `}
          >
            <div className="p-6 md:p-8">
              <div className="text-center">
                <div className="inline-flex items-center bg-blue-50 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-4">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-600 mr-1.5 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-blue-600 font-medium text-sm">{verifiedText}</span>
                </div>

                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                  ${settlement.amount}
                </div>

                <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 md:mb-3">
                  {settlement.name} • {settlement.location}
                </div>

                <div className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                  {settlement.detail}
                </div>

                <div className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm md:text-base">
                  {settlement.timeline}
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
