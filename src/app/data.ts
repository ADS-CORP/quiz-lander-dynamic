import type { HeaderDataType, NavigationDataType } from './types';
import type { FooterDataType } from '@/components/base/footer/types';

export const companyName = "Hair Relaxer";

export const HeaderData: HeaderDataType = {
  logo: {
    src: '/images/pj-logo1.png',
    alt: 'Company Logo',
  },
  navigation: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
  ],
};

export const FooterData: FooterDataType = {
  accordion: {
    display: true,
    items: [
      {
        title: 'Company',
        links: [
          { text: 'About Us', link: '/about' },
          { text: 'Contact', link: '/contact' },
        ],
      },
    ],
  },
  emailSubmitSection: {
    display: false,
    title: '',
    text: '',
    placeholder: '',
  },
  socialIconsSection: {
    display: false,
    icons: [],
  },
  companyLogo: {
    src: '/images/pj-logo1.png',
    alt: 'Company Logo',
  },
  companyName: companyName,
  disclaimers: [],
  bottomLinks: [],
};

export const NavigationData: NavigationDataType = {
  logo: {
    src: '/images/pj-logo1.png',
    alt: 'Logo',
  },
  items: [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
  ],
};
