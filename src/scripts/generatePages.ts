import fs from 'fs';
import path from 'path';
import { pagesToBuild } from '../config/pages';
import { buyers } from '../config/buyers';
import { offers } from '../config/offers';
import { getUrlParams } from '../utils/user-data';
import { getBrandFromDomain } from '../utils/brand';
import { yourTruthBrand } from '../config/brands/yt';
import { seekingSettlementsBrand } from '../config/brands/ss';
import { peoplesJusticeBrand } from '../config/brands/pj';
import { weBuyLawsuitsBrand } from '../config/brands/wbl';

const brands: Record<string, typeof yourTruthBrand> = {
  'yt': yourTruthBrand,
  'ss': seekingSettlementsBrand,
  'pj': peoplesJusticeBrand,
  'wbl': weBuyLawsuitsBrand
};

console.log('Available brands:', Object.keys(brands));

const PAGES_DIR = path.join(process.cwd(), 'src/app/(pages)');

// Map offer abbreviations to their full names
const offerAbbrevMap: Record<string, string> = {
  'hair': 'hairrelaxer',
  'ru': 'roundup',
  'oxb': 'oxbryta',
  'depo': 'depoprovera',
  'lds': 'ldsabuse',
  'asb': 'asbestos'
};

// Helper function to find offer by abbreviation
function findOfferByAbbreviation(abbrev: string) {
  const offerKey = offerAbbrevMap[abbrev];
  return offers[offerKey];
}

function generateMetadataFile(brand: any, offer: any, pagePath: string) {
  const brandImportMap: Record<string, string> = {
    'yt': 'yourTruthBrand',
    'ss': 'seekingSettlementsBrand',
    'pj': 'peoplesJusticeBrand',
    'wbl': 'weBuyLawsuitsBrand'
  };

  const metadataContent = `import { generatePageMetadata } from '@/utils/metadata';
import { ${brandImportMap[brand.abbreviation]} } from '@/config/brands/${brand.abbreviation}';

export const metadata = generatePageMetadata(
  '${offer.metaTitle}',
  '${offer.metaDescription}',
  ${brandImportMap[brand.abbreviation]}
);`;

  fs.writeFileSync(path.join(pagePath, 'metadata.ts'), metadataContent);
}

function generatePage(pageConfig: typeof pagesToBuild[0]) {
  const brandImportMap: Record<string, string> = {
    'yt': 'yourTruthBrand',
    'ss': 'seekingSettlementsBrand',
    'pj': 'peoplesJusticeBrand',
    'wbl': 'weBuyLawsuitsBrand'
  };

  const { offerAbbrev, brand: brandId, source, quizId, buyer: buyerId, cta, ctaText, showEmail, showCta } = pageConfig;
  const routePath = `${offerAbbrev}-${buyerId}-${source}`;
  
  console.log(`Generating page for ${brandId}/${routePath}:`);
  console.log('- Brand ID:', brandId);
  console.log('- Brand config:', brands[brandId]);
  
  const offer = findOfferByAbbreviation(offerAbbrev);
  const brand = brands[brandId];
  const buyer = buyers[buyerId];
  
  if (!offer || !brand || !buyer) {
    console.error(`Missing configuration for ${brandId}/${routePath}:`, {
      offer: !!offer,
      brand: !!brand,
      buyer: !!buyer
    });
    return;
  }

  // Create brand-specific directory path and page within it
  const brandDir = path.join(PAGES_DIR, brandId);
  const pageDir = path.join(brandDir, routePath);
  
  // Create directories if they don't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // Generate layout.tsx for the brand directory if it doesn't exist
  const layoutPath = path.join(brandDir, 'layout.tsx');
  if (!fs.existsSync(layoutPath)) {
    const layoutContent = `import { ReactNode } from "react";
import { ${brandImportMap[brand.abbreviation]} } from "@/config/brands/${brand.abbreviation}";
import BaseLayout from "@/components/base/layout/BaseLayout";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  // Get pageBrandConfig from the child component
  const childComponent = children as any;
  const pageBrandConfig = childComponent?.props?.brand;

  return (
    <BaseLayout brand={${brandImportMap[brand.abbreviation]}} pageBrandConfig={pageBrandConfig} isRootLayout={true}>
      {children}
    </BaseLayout>
  );
}`;

    fs.writeFileSync(layoutPath, layoutContent);
    console.log(`Generated brand layout: ${brandId}/layout.tsx`);
  }

  // Generate page component
  const pageContent = `import { LandingPage } from '@/components/templates/LandingPage';
import { ${brandImportMap[brand.abbreviation]} } from '@/config/brands/${brand.abbreviation}';
import { Metadata } from "next";

// Import brand config
const brand = ${brandImportMap[brand.abbreviation]};

export const metadata: Metadata = {
  title: "${offer.metaTitle} | ${brand.name}",
  description: "${offer.metaDescription}",
  openGraph: {
    title: "${offer.metaTitle} | ${brand.name}",
    description: "${offer.metaDescription}",
    siteName: "${brand.name}",
    url: "https://${brand.domain}",
    type: "website"
  }
};

const Page = () => {
  const cta = ${cta ? `"${cta}"` : 'undefined'};
  const ctaText = ${ctaText ? JSON.stringify(ctaText) : 'undefined'};
  const showEmail = ${showEmail !== undefined ? showEmail : 'undefined'};
  const showCta = ${showCta !== undefined ? showCta : 'undefined'};
  
  // Format CTA URL if needed
  const formattedCta = (() => {
    if (typeof cta !== 'string') return cta;
    
    const phoneRegex = /^\\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
    const isPhoneNumber = phoneRegex.test(cta);
    const hasHttp = cta.toLowerCase().indexOf('http://') >= 0;
    const hasHttps = cta.toLowerCase().indexOf('https://') >= 0;
    
    if (isPhoneNumber || hasHttp || hasHttps) {
      return cta;
    }
    
    return \`https://\${cta}\`;
  })();

  const pageBrandConfig = {
    ...brand,
    ...(showCta === false ? {
      hideCta: true,
      hideHeaderCta: true,
      hideFooterCta: true,
      hideFaqHelpText: true,
      phone: undefined,
      cta: undefined,
      headerCtaText: undefined,
      footerCtaText: undefined
    } : {
      ...(formattedCta === 'none' ? { hideCta: true } : 
         formattedCta ? (typeof formattedCta === 'string' && /^\\+?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/.test(formattedCta) ? { phone: formattedCta } : { cta: formattedCta }) : 
         {}),
      ...(ctaText?.header === 'none' ? { hideHeaderCta: true } : 
         ctaText?.header ? { headerCtaText: ctaText.header } : 
         {}),
      ...(ctaText?.footer === 'none' ? { hideFooterCta: true } : 
         ctaText?.footer ? { footerCtaText: ctaText.footer } : 
         {})
    }),
    showEmail: showEmail
  };

  return (
    <LandingPage 
      brand={pageBrandConfig}
      content={${JSON.stringify(offer)}}
      source="${source}"
      quizId="${quizId}"
      buyer={${JSON.stringify(buyer)}}
    />
  );
};

export default Page;`;

  fs.writeFileSync(path.join(pageDir, 'page.tsx'), pageContent);
  console.log(`Generated page: ${brandId}/${routePath}/page.tsx`);

  // Generate metadata.ts
  const metadataContent = `import { generatePageMetadata } from '@/utils/metadata';
import { ${brandImportMap[brand.abbreviation]} } from '@/config/brands/${brand.abbreviation}';

export const metadata = generatePageMetadata(
  '${offer.metaTitle}',
  '${offer.metaDescription}',
  ${brandImportMap[brand.abbreviation]}
);`;

  fs.writeFileSync(path.join(pageDir, 'metadata.ts'), metadataContent);
}

console.log('Validating configurations...');

// Only generate the pages specified in pages.ts
pagesToBuild.forEach(pageConfig => {
  generatePage(pageConfig);
});
