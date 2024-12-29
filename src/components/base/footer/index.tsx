'use client';
import React, { useState } from 'react';
import { BrandConfig } from '@/config/types';

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
    <footer style={{ backgroundColor: brand.theme.footerBackground, color: brand.theme.footerText }}>
      <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-8">
        {/* Stay Updated - Centered */}
        <div className="max-w-md mx-auto mb-16 text-center">
          <h3 className="text-white text-sm font-semibold uppercase mb-4">{brand.footer.emailSection.title}</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={brand.footer.emailSection.placeholder}
                className="w-full bg-gray-800 border-2 border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0098d9] transition-colors"
                disabled={status === 'submitting'}
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-xs">{errorMessage}</p>
            )}
            {status === 'success' && (
              <p className="text-green-500 text-xs">Thank you for subscribing!</p>
            )}
            <button 
              type="submit"
              style={{ backgroundColor: brand.theme.primaryColor }}
              className="w-full text-white rounded px-3 py-2 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Subscribing...' : brand.footer.emailSection.buttonText}
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div className="mb-8">
          <h3 className="text-white text-sm font-semibold uppercase mb-4 text-center">Company</h3>
          <div className="flex flex-col items-center space-y-3">
            {brand.footer.links.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={brand.footer.logo.src}
            alt={brand.footer.logo.alt}
            className="h-32 w-auto"
          />
        </div>

        {/* Legal Text */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-6">
            <p className="text-xs leading-relaxed">
              {brand.footer.legalText}
            </p>
          </div>
          
          <p className="text-xs">
            {currentYear}. {brand.footer.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;