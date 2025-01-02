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
    if (brand.hideCta === true) {
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
    // If there's a CTA URL, use that regardless of whether it's a phone number or web URL
    if (brand.cta && brand.cta !== 'none') {
      // Check if it's a phone number (handle various formats including country code)
      if (/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{2,3}[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{3,4}$/.test(brand.cta)) {
        // Remove any non-digit characters for the tel: link
        const phoneNumber = brand.cta.replace(/\D/g, '');
        window.location.href = `tel:${phoneNumber}`;
      } else {
        // Add http:// if the URL doesn't have a protocol
        const url = brand.cta.startsWith('http') ? brand.cta : `https://${brand.cta}`;
        window.open(url, '_blank');
      }
    } else if (brand.phone) {
      // Remove any non-digit characters for the tel: link
      const phoneNumber = brand.phone.replace(/\D/g, '');
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  // Get CTA text based on priority:
  // 1. Use headerCtaText if provided
  // 2. Use headerCta.primary if there's a CTA (URL or phone)
  const ctaText = brand.headerCtaText || (brand.cta ? brand.headerCta?.primary : '') || '';

  return (
    <header className="fixed w-full top-0 z-[1000]" style={{ backgroundColor: brand.theme?.headerBackground }}>
      <div className="border-b">
        <div className="w-full">
          <div className="h-[60px] px-6 flex items-center">
            <button className="p-1 absolute left-6" style={{ color: brand.theme?.headerText }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className={`flex-1 flex ${isScrolled && brand.hideCta !== true ? 'justify-start pl-12' : 'justify-center'}`}>
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
            {isScrolled && brand.hideCta !== true && brand.hideHeaderCta !== true && (brand.cta || brand.phone) && (
              <button 
                onClick={handleCtaClick}
                style={{ 
                  backgroundColor: brand.theme?.ctaBackground,
                  color: brand.theme?.ctaText
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