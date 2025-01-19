'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from "lucide-react";

export default function CustomFaqSection({ faqSection, expandedBackground, textColor, brand, page }) {
  const { title, subtitle, helpText, faqs } = faqSection;
  
  // Show CTA by default unless explicitly set to false in page config
  const shouldShowCta = !(page?.showCta === false);

  // Helper to check if a string is a phone number
  const isPhoneNumber = (str) => {
    if (typeof str !== 'string') return false;
    return str.startsWith('tel:') || /^[+]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/.test(str.replace(/\D/g, ''));
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-0 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-800 whitespace-nowrap px-4">
          {title}
        </h2>
        <p className="text-center mb-8 text-slate-600 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
        
        <div className="overflow-x-visible px-4">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-3"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group data-[state=open]:shadow-md data-[state=open]:bg-blue-50 transition-all duration-200"
              >
                <AccordionTrigger className="group transition-all">
                  <span className="flex-1 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent>
                  <div 
                    className="transition-all duration-200"
                    style={{ backgroundColor: expandedBackground }}
                  >
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {!brand?.hideFaqHelpText && (
          <div className="mt-8 text-center">
            <p className="text-slate-600 text-lg mb-8">
              {helpText}
            </p>
            {shouldShowCta && (
              <button 
                style={{ 
                  backgroundColor: brand.theme.ctaBackground,
                  color: brand.theme.ctaText
                }}
                className="px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                onClick={() => {
                  // Use CTA directly since it's already formatted with tel: if it's a phone number
                  if (brand.cta) {
                    window.location.href = brand.cta;
                  } else if (brand.phone) {
                    window.location.href = `tel:${brand.phone.replace(/\D/g, '')}`;
                  }
                }}
              >
                {brand.footerCtaText || brand.headerCta?.secondary || 'Contact Us'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
