import { BrandConfig } from '../types';

export const seekingSettlementsBrand: BrandConfig = {
  name: "Seeking Settlements",
  abbreviation: "ss",
  domains: ['qualify.seekingsettlements.com', 'localhost:3000'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/ss-logo-black.png",
      alt: "Seeking Settlements"
    }
  },
  phone: "1-800-555-0000",
  domain: "seekingsettlements.com",
  headerCta: {
    primary: "Call Now",
    secondary: "Chat With Us Now"
  },
  footer: {
    companyName: "Seeking Settlements",
    logo: {
      src: "/images/ss-logo-white.png",
      alt: "Seeking Settlements Logo"
    },
    emailSection: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    links: [
      { text: "Privacy Policy", href: "https://seekingsettlements.com/privacy-policy" },
      { text: "Terms of Service", href: "https://seekingsettlements.com/terms-of-service" },
      { text: "Cookie Policy", href: "https://seekingsettlements.com/cookie-policy" },
      { text: "Do Not Sell or Share My Personal Info", href: "https://seekingsettlements.com/data-control" }
    ],
    legalText: "Seeking Settlements is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. Seeking Settlements does not endorse or recommend any particular law firm and has not analyzed your submissions."
  },
  theme: {
    primaryColor: '#000000',
    secondaryColor: '#1a1a1a',
    headerBackground: '#ffffff',
    headerText: '#000000',
    ctaBackground: '#000000',
    ctaText: '#ffffff',
    footerBackground: '#000000',
    footerText: '#ffffff',
    settlementCarouselBackground: '#1a1a1a',
    settlementCarouselText: '#ffffff',
    faqBackground: '#ffffff',
    faqExpandedBackground: '#f8f9fa',
    faqText: '#000000',
    quizBackground: '#ffffff',
    trafficCounterBackground: '#f5f5f5',
    trafficCounterText: '#000000',
    buttonBackground: '#000000',
    buttonText: '#ffffff',
    linkColor: '#000000',
    notificationDotColor: '#000000'
  }
};
