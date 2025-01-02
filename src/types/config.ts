export interface DomainSetting {
  domain: string;
  startUrl: string;
}

export interface LandingPageVariantType {
  variant: string;
  domainsettings: DomainSetting[];
}

export type GtmIdType = string | undefined;

export interface PageMetaConfigType {
  name: string;
  description: string;
}

export interface BrandConfig {
  name: string;
  domain: string;
  abbreviation: string;
  domains: string[];
  allowedOffers: string[];
  favicon: string;
  logo: {
    header: {
      src: string;
      alt: string;
      height: number;
    };
  };
  phone?: string;
  cta?: string;
  headerCtaText?: string;
  footerCtaText?: string;
  headerCta?: {
    primary?: string;
    secondary?: string;
  };
  hideCta?: boolean;
  hideHeaderCta?: boolean;
  hideFooterCta?: boolean;
  hideFaqHelpText?: boolean;
  showEmail?: boolean;
  footer: {
    companyName: string;
    logo: {
      src: string;
      alt: string;
    };
    emailSection: {
      title: string;
      placeholder: string;
      buttonText: string;
    };
    links: Array<{
      text: string;
      href: string;
    }>;
    legalText: string;
  };
  theme?: {
    primaryColor: string;
    secondaryColor: string;
    headerBackground: string;
    headerText: string;
    ctaBackground?: string;
    ctaText?: string;
    footerBackground: string;
    footerText: string;
    settlementCarouselBackground?: string;
    settlementCarouselText?: string;
    faqExpandedBackground?: string;
    faqText?: string;
    quizBackground?: string;
    quizText?: string;
    trafficCounterBackground?: string;
    trafficCounterText?: string;
    notificationDotColor?: string;
  };
}
