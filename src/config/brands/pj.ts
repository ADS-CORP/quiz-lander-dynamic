import { BrandConfig } from '../types';

export const peoplesJusticeBrand: BrandConfig = {
  name: "People's Justice",
  abbreviation: "pj",
  domains: ['qualify.peoplesjustice.info'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/pj-logo1.png",
      alt: "People's Justice",
      height: 48
    }
  },
  favicon: '/images/pj-favicon-blue.png',
  phone: "1-800-555-0000",
  domain: "peoplesjustice.info",
  headerCta: {
    primary: "Call Now",
    secondary: "Chat With Us Now"
  },
  footer: {
    companyName: "People's Justice",
    logo: {
      src: "/images/pj-logo-white.svg",
      alt: "People's Justice Logo"
    },
    emailSection: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    links: [
      { text: "Privacy Policy", href: "https://peoplesjustice.net/privacy-policy" },
      { text: "Terms of Service", href: "https://peoplesjustice.net/terms-of-service" },
      { text: "Cookie Policy", href: "https://peoplesjustice.net/cookie-policy" },
      { text: "Do Not Sell or Share My Personal Info", href: "https://peoplesjustice.net/data-control" }
    ],
    legalText: "People's Justice is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. People's Justice does not endorse or recommend any particular law firm and has not analyzed your submissions."
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
    trafficCounterBackground: '#e1f5fe',
    trafficCounterText: '#014361',
    quizBackground: '#ffffff',
    quizText: '#111827',
    faqExpandedBackground: '#f3f4f6',
    faqText: '#111827',
    notificationDotColor: '#d31516'
  }
};
