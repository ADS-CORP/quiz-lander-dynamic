'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from "lucide-react";

export default function CustomFaqSection({ faqSection, expandedBackground, textColor }) {
  const { title, subtitle, helpText, faqs } = faqSection;

  return (
    <div className="w-full" style={{ color: textColor }}>
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
                className="rounded-xl bg-white shadow-lg transition-all duration-200 border border-slate-100 overflow-hidden"
              >
                <AccordionTrigger className="group flex w-full px-6 py-4 text-lg text-slate-800 font-medium">
                  <span className="flex-1 text-left group-data-[state=open]:text-blue-600">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent 
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={{ backgroundColor: expandedBackground }}
                >
                  <div className="px-6 pb-5 text-slate-600 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            {helpText}
          </p>
        </div>
      </div>
    </div>
  );
}
