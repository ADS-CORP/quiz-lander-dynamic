import { BrandConfig } from '../types';

export const weBuyLawsuitsBrand: BrandConfig = {
  name: "We Buy Lawsuits",
  abbreviation: "wbl",
  domains: ['webuylawsuits.com', 'localhost:3000'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/wbl-logo-black.png",
      alt: "We Buy Lawsuits",
      height: 48
    }
  },
  phone: "1-800-555-0000",
  domain: "webuylawsuits.com",
  headerCta: {
    primary: "Call Now",
    secondary: "Chat With Us Now"
  },
  footer: {
    companyName: "We Buy Lawsuits",
    logo: {
      src: "/images/wbl-logo-white.png",
      alt: "We Buy Lawsuits Logo"
    },
    emailSection: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    links: [
      { text: "Privacy Policy", href: "https://webuylawsuits.com/privacy-policy" },
      { text: "Terms of Service", href: "https://webuylawsuits.com/terms-of-service" },
      { text: "Cookie Policy", href: "https://webuylawsuits.com/cookie-policy" },
      { text: "Do Not Sell or Share My Personal Info", href: "https://webuylawsuits.com/data-control" }
    ],
    legalText: "We Buy Lawsuits is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. We Buy Lawsuits does not endorse or recommend any particular law firm and has not analyzed your submissions."
  },
  theme: {
    primaryColor: '#0284c7',
    secondaryColor: '#d31516',
    headerBackground: '#ffffff',
    headerText: '#000000',
    ctaBackground: '#d31516',
    ctaText: '#ffffff',
    footerBackground: '#1f2937',
    footerText: '#ffffff',
    settlementCarouselBackground: '#0284c7',
    settlementCarouselText: '#ffffff',
    faqBackground: '#ffffff',
    faqExpandedBackground: '#f8f9fa',
    faqText: '#111827',
    notificationDotColor: '#d31516'
  }
};
