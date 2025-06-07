'use client';
import React, { useState } from 'react';
import { BrandConfig } from '@/config/types';
import Image from 'next/image';

interface FooterProps {
  brand: BrandConfig;
}

const Footer: React.FC<FooterProps> = ({ brand }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus('submitting');
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          brand: brand.abbreviation
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <footer className="w-full py-12" style={{ backgroundColor: brand.theme.footerBackground, color: brand.theme.footerText }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        {/* Stay Updated - Centered */}
        {brand.footer.emailSection && brand.showEmail !== false && (
          <div className="max-w-md mx-auto mb-16 text-center">
            <h3 className="text-sm font-semibold uppercase mb-4" style={{ color: brand.theme.footerText }}>{brand.footer.emailSection.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={brand.footer.emailSection.placeholder}
                  className="w-full px-4 py-2 rounded-full bg-transparent placeholder-gray-400"
                  style={{ 
                    borderColor: brand.theme.footerText,
                    color: brand.theme.footerText,
                    border: '1px solid'
                  }}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{ 
                  backgroundColor: brand.theme.footerText,
                  color: brand.theme.footerBackground
                }}
                className="w-full px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'submitting' ? 'Subscribing...' : brand.footer.emailSection.buttonText}
              </button>
              {status === 'success' && (
                <p className="text-green-400">Thank you for subscribing!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400">{errorMessage}</p>
              )}
            </form>
          </div>
        )}

        {/* Logo */}
        <div className="flex justify-center mb-6 px-4" style={{ height: '144px' }}>
          <Image
            src={brand.footer.logo.src}
            alt={brand.footer.logo.alt}
            width={320}
            height={160}
            className="h-36 w-auto object-contain max-w-full"
            style={{ color: "transparent" }}
            priority={true}
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {brand.footer.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: brand.theme.footerText }}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Copyright and Legal */}
        <div className="text-center text-sm">
          <p className="mb-4">&copy; {currentYear} {brand.name}. All rights reserved.</p>
          <p className="max-w-3xl mx-auto text-xs opacity-80">{brand.footer.legalText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;