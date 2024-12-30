import { BrandConfig } from '../types';

export const yourTruthBrand: BrandConfig = {
  name: "Your Truth",
  abbreviation: "yt",
  domains: ['qualify.yourtruth.com', 'localhost:3000'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/yt-logo-black.png",
      alt: "Your Truth"
    }
  },
  phone: "1-800-555-0000",
  domain: "yourtruth.com",
  headerCta: {
    primary: "Call Now",
    secondary: "Chat With Us Now"
  },
  footer: {
    companyName: "Your Truth",
    logo: {
      src: "/images/yt-logo-white.png",
      alt: "Your Truth Logo"
    },
    emailSection: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    links: [
      { text: "Privacy Policy", href: "https://yourtruth.com/privacy-policy" },
      { text: "Terms of Service", href: "https://yourtruth.com/terms-of-service" },
      { text: "Cookie Policy", href: "https://yourtruth.com/cookie-policy" },
      { text: "Do Not Sell or Share My Personal Info", href: "https://yourtruth.com/data-control" }
    ],
    legalText: "Your Truth is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. Your Truth does not endorse or recommend any particular law firm and has not analyzed your submissions."
  },
  theme: {
    primaryColor: '#A020F0',
    secondaryColor: '#A020F0',
    headerBackground: '#ffffff',
    headerText: '#000000',
    ctaBackground: '#A020F0',
    ctaText: '#ffffff',
    footerBackground: '#1E1B2C',
    footerText: '#ffffff',
    settlementCarouselBackground: '#A020F0',
    settlementCarouselText: '#ffffff',
    trafficCounterBackground: '#e1f5fe',
    trafficCounterText: '#014361',
    faqBackground: '#ffffff',
    faqExpandedBackground: '#f8f9fa',
    faqText: '#000000',
    quizBackground: '#ffffff',
    quizText: '#111827',
    notificationDotColor: '#A020F0'
  }
};
