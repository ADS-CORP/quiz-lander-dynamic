import { BrandConfig } from '../types';

export const seekingSettlementsBrand: BrandConfig = {
  name: "Seeking Settlements",
  abbreviation: "ss",
  domains: ['seekingsettlements.com', 'localhost:3000'],
  allowedOffers: ['hair', 'ru', 'oxb', 'depo', 'lds', 'asb'],
  logo: {
    header: {
      src: "/images/ss-logo.svg",
      alt: "Seeking Settlements Logo",
      height: 40,
    },
  },
  phone: {
    string: '1-800-123-4567',
    domain: 'seekingsettlements.com',
  },
  headerCta: {
    primary: 'Call Now',
    secondary: 'Free Case Review',
  },
  footer: {
    text: ' 2024 Seeking Settlements. All rights reserved.',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
    ],
  },
  theme: {
    colors: {
      primary: '#0066cc',
      secondary: '#ff9900',
      accent: '#00cc66',
    },
    fonts: {
      heading: 'Roboto, sans-serif',
      body: 'Open Sans, sans-serif',
    },
    trafficCounterBackground: '#f5f5f5',
    trafficCounterText: '#000000',
    notificationDotColor: '#000000'
  },
  favicon: '/favicon.ico'
};
