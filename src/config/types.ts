export interface QuizConfig {
  quizId?: string;
  apiUrl: string;
  debug: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  subtitle: string;
  helpText: string;
  faqs: FAQ[];
}

export interface Settlement {
  name: string;
  location: string;
  amount: string;
  detail: string;
  timeline: string;
  link: string;
}

export interface SettlementSection {
  title: string;
  verifiedText: string;
  settlements: Settlement[];
}

export interface LandingPageContent {
  abbreviation: string;
  title: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  quizConfig: {
    apiUrl: string;
    debug: boolean;
  };
  faqSection: FAQSection;
  settlementSection: SettlementSection;
}

export interface LogoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface LegalConfig {
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
  legalText: string;
}

export interface ThemeConfig {
  // Header
  headerBackgroundColor: string;
  headerTextColor: string;
  headerBorderColor: string;
  
  // Navigation
  navLinkColor: string;
  navLinkHoverColor: string;
  navLinkActiveColor: string;
  
  // Main Content
  backgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  
  // Call to Action Buttons
  ctaPrimaryBackgroundColor: string;
  ctaPrimaryHoverBackgroundColor: string;
  ctaPrimaryTextColor: string;
  ctaSecondaryBackgroundColor: string;
  ctaSecondaryHoverBackgroundColor: string;
  ctaSecondaryTextColor: string;
  
  // Settlement Carousel
  carouselBackgroundColor: string;
  carouselTextColor: string;
  carouselBorderColor: string;
  carouselArrowColor: string;
  carouselArrowHoverColor: string;
  carouselIndicatorColor: string;
  carouselIndicatorActiveColor: string;
  
  // Form Elements
  inputBackgroundColor: string;
  inputBorderColor: string;
  inputFocusBorderColor: string;
  inputTextColor: string;
  inputPlaceholderColor: string;
  inputErrorColor: string;
  
  // Links
  linkColor: string;
  linkHoverColor: string;
  linkVisitedColor: string;
  
  // Footer
  footerBackgroundColor: string;
  footerPrimaryTextColor: string;
  footerSecondaryTextColor: string;
  footerLinkColor: string;
  footerLinkHoverColor: string;
  footerBorderColor: string;
  
  // Alerts and Messages
  successBackgroundColor: string;
  successTextColor: string;
  warningBackgroundColor: string;
  warningTextColor: string;
  errorBackgroundColor: string;
  errorTextColor: string;
  infoBackgroundColor: string;
  infoTextColor: string;
  
  // Sections and Cards
  sectionBackgroundColor: string;
  cardBackgroundColor: string;
  cardBorderColor: string;
  cardShadowColor: string;
  
  // Dividers
  dividerColor: string;
  
  // Progress Indicators
  progressBackgroundColor: string;
  progressFillColor: string;
  progressTextColor: string;
  
  // Tooltips
  tooltipBackgroundColor: string;
  tooltipTextColor: string;
  
  // Misc UI Elements
  focusRingColor: string;
  disabledBackgroundColor: string;
  disabledTextColor: string;
  highlightColor: string;
  selectionBackgroundColor: string;
  selectionTextColor: string;
}

export interface BrandConfig {
  name: string;
  abbreviation: string;
  domains: string[];
  allowedOffers: string[];
  logo: {
    header: {
      src: string;
      alt: string;
      height: number;
    };
  };
  phone: string;
  domain: string;
  headerCta: {
    primary: string;
    secondary: string;
  };
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
  theme: {
    primaryColor: string;
    secondaryColor: string;
    headerBackground: string;
    headerText: string;
    ctaBackground: string;
    ctaText: string;
    footerBackground: string;
    footerText: string;
    settlementCarouselBackground: string;
    settlementCarouselText: string;
    trafficCounterBackground: string;
    trafficCounterText: string;
    quizBackground: string;
    quizText: string;
    faqExpandedBackground: string;
    faqText: string;
    notificationDotColor: string;
  };
}
