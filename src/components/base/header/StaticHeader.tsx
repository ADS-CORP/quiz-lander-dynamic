'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrandConfig } from '@/config/types';

interface HeaderProps {
  brand: BrandConfig;
}

const StaticHeader: React.FC<HeaderProps> = ({ brand }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 z-[1000]" style={{ backgroundColor: brand.theme.headerBackground }}>
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
            <div className={`flex-1 flex ${isScrolled ? 'justify-start pl-12' : 'justify-center'}`}>
              <Link href="/" className="h-12">
                <img
                  src={brand.logo.header.src}
                  alt={brand.logo.header.alt}
                  height={brand.logo.header.height}
                  className="h-full w-auto object-contain"
                />
              </Link>
            </div>
            {isScrolled && (
              <a
                href={`tel:${brand.phone}`}
                style={{ 
                  backgroundColor: brand.theme.ctaBackground,
                  color: brand.theme.ctaText
                }}
                className="px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity mr-2"
              >
                {brand.headerCta.primary}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default StaticHeader;