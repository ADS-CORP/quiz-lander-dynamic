'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BrandConfig } from '@/types/config';

interface HeaderProps {
  brand: BrandConfig;
}

const StaticHeader: React.FC<HeaderProps> = ({ brand }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // If CTAs are hidden, ensure we're not scrolled and don't add listener
    if (brand.hideCta) {
      setIsScrolled(false);
      return;
    }

    // Only add scroll listener if CTAs are not hidden
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [brand.hideCta]);

  const handleCtaClick = () => {
    if (brand.cta) {
      window.location.href = brand.cta;
    } else if (brand.phone) {
      window.location.href = `tel:${brand.phone}`;
    }
  };

  // Get CTA text based on priority:
  // 1. Use headerCtaText if provided
  // 2. Use headerCta.secondary if there's a CTA URL
  // 3. Use headerCta.primary if there's a phone number
  const ctaText = brand.headerCtaText || (brand.cta ? brand.headerCta?.secondary : brand.headerCta?.primary) || '';

  return (
    <header className="fixed w-full top-0 z-[1000]" style={{ backgroundColor: brand.theme?.headerBackground }}>
      <div className="border-b">
        <div className="w-full">
          <div className="h-[60px] px-6 flex items-center">
            <button className="p-1 absolute left-6" style={{ color: brand.theme.headerText }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className={`flex-1 flex ${isScrolled && !brand.hideCta ? 'justify-start pl-12' : 'justify-center'}`}>
              <Link href="/" className="h-[60px] flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={brand.logo.header.src}
                    alt={brand.logo.header.alt}
                    width={0}
                    height={brand.logo.header.height}
                    style={{ width: 'auto' }}
                    className="h-12"
                  />
                </div>
              </Link>
            </div>
            {isScrolled && !brand.hideCta && !brand.hideHeaderCta && (brand.cta || brand.phone) && (
              <button 
                onClick={handleCtaClick}
                style={{ 
                  backgroundColor: brand.theme.ctaBackground,
                  color: brand.theme.ctaText
                }}
                className="absolute right-6 px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
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