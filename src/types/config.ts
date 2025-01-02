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
  logo: {
    src: string;
    alt: string;
  };
  phone?: string;
  cta?: string;
  headerCtaText?: string;
  footerCtaText?: string;
  hideCta?: boolean;
  hideHeaderCta?: boolean;
  hideFooterCta?: boolean;
  hideFaqHelpText?: boolean;
  showEmail?: boolean;
}
