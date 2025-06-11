'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrandConfig } from '@/types/config';

interface HeaderProps {
  brand: BrandConfig;
  pageConfig?: {
    cta?: string;
    showCta?: boolean;
    ctaText?: {
      header?: string;
      footer?: string;
    };
  };
  isQuizSticky?: boolean;
}

const StaticHeader: React.FC<HeaderProps> = ({ brand, pageConfig, isQuizSticky }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Simple scroll handler and mobile detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    handleScroll(); // Check initial scroll position
    checkMobile(); // Check initial mobile state
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle CTA click
  const handleCtaClick = (ctaValue: string) => {
    if (!ctaValue) return;

    const ctaStr = String(ctaValue);
    const hasProtocol = /^(https?:|tel:)/.test(ctaStr);
    // Only test for phone number if we have a value and no protocol
    const isPhoneNumber = !hasProtocol && /^[+]?[(]?[0-9]{1,3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4}$/.test(ctaStr.replace(/\D/g, ''));

    let finalUrl = ctaStr;
    if (!hasProtocol) {
      finalUrl = isPhoneNumber ? `tel:${ctaStr.replace(/\D/g, '')}` : `https://${ctaStr}`;
    }

    if (finalUrl.startsWith('tel:')) {
      window.location.href = finalUrl;
    } else {
      window.open(finalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Get CTA values
  const showCta = pageConfig?.showCta ?? true;
  const ctaText = pageConfig?.ctaText?.header ?? 'Call Now';
  const ctaValue = pageConfig?.cta;

  // Hide header on mobile when quiz is sticky
  const shouldHideHeader = isMobile && isQuizSticky;

  return (
    <header 
      className={`fixed w-full top-0 z-[1000] transition-transform duration-300 ${shouldHideHeader ? '-translate-y-full' : 'translate-y-0'}`} 
      style={{ backgroundColor: brand.theme?.headerBackground }}
    >
      <div className="border-b">
        <div className="w-full overflow-hidden">
          <div className="h-[60px] px-4 sm:px-6 flex items-center relative">
            <button 
              className="p-1 absolute left-4 sm:left-6" 
              style={{ color: brand.theme?.headerText }}
              aria-label="Open menu"
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className={`flex-1 flex ${isScrolled && showCta && ctaValue ? 'justify-start pl-12' : 'justify-center'}`}>
              {brand.logo?.header && (
                <Link href="/" className="h-[60px] flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={brand.logo.header.src}
                      alt={brand.logo.header.alt}
                      width={brand.logo.header.width || 150}
                      height={brand.logo.header.height || 48}
                      sizes="(max-width: 640px) 120px, 150px"
                      className="object-contain w-auto h-auto"
                      style={{ 
                        maxWidth: brand.logo.header.width ? `${brand.logo.header.width}px` : '150px',
                        maxHeight: '48px'
                      }}
                      priority={true}
                      quality={85}
                    />
                  </div>
                </Link>
              )}
            </div>
            {isScrolled && showCta && ctaValue && (
              <button 
                onClick={() => handleCtaClick(ctaValue)}
                style={{ 
                  backgroundColor: brand.theme?.ctaBackground || '#0066FF',
                  color: brand.theme?.ctaText || '#FFFFFF'
                }}
                className="absolute right-4 sm:right-6 px-4 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default StaticHeader;