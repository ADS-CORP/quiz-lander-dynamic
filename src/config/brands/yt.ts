import { BrandConfig } from '../types';

export const yourTruthBrand: BrandConfig = {
  name: "YourTruth",
  abbreviation: "yt",
  domains: ['qualify.yourtruth.info'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/yt-logo-black.png",
      alt: "YourTruth",
      height: 48
    }
  },
  favicon: '/images/yt-logo-black.png',
  phone: "1-800-555-0000",
  domain: "yourtruth.info",
  headerCta: {
    primary: "Call Now",
    secondary: "Chat With Us Now"
  },
  footer: {
    companyName: "YourTruth",
    logo: {
      src: "/images/yt-logo-white.png",
      alt: "YourTruth Logo"
    },
    emailSection: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    links: [
      { text: "Privacy Policy", href: "https://yourtruth.info/privacy-policy" },
      { text: "Terms of Service", href: "https://yourtruth.info/terms-of-service" },
      { text: "Cookie Policy", href: "https://yourtruth.info/cookie-policy" },
      { text: "Do Not Sell or Share My Personal Info", href: "https://yourtruth.info/data-control" }
    ],
    legalText: "YourTruth is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. YourTruth does not endorse or recommend any particular law firm and has not analyzed your submissions."
  },
  theme: {
    primaryColor: '#A020F0',
    secondaryColor: '#1a1a1a',
    headerBackground: '#ffffff',
    headerText: '#000000',
    ctaBackground: '#A020F0',
    ctaText: '#ffffff',
    footerBackground: '#000000',
    footerText: '#ffffff',
    settlementCarouselBackground: '#A020F0',
    settlementCarouselText: '#ffffff',
    faqExpandedBackground: '#f8f9fa',
    faqText: '#000000',
    quizBackground: '#ffffff',
    quizText: '#111827',
    trafficCounterBackground: '#f5f5f5',
    trafficCounterText: '#000000',
    notificationDotColor: '#A020F0'
  }
};
