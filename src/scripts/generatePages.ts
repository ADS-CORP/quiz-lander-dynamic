import fs from 'fs';
import path from 'path';
import { pagesToBuild } from '@/config/pages';
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

function generatePage(pageConfig: typeof pagesToBuild[0]) {
  const { offerAbbrev, brand: brandId, source, quizId, buyer: buyerId } = pageConfig;
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

  const pageContent = `'use client';

import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const brand = ${JSON.stringify(brand)};
  const offerContent = ${JSON.stringify(offer)};
  const buyer = ${JSON.stringify(buyer)};

  return (
    <LandingPage
      brand={brand}
      content={offerContent}
      source="${source}"
      quizId="${quizId}"
      buyer={buyer}
    />
  );
}`;

  const pagePath = path.join(pageDir, 'page.tsx');
  fs.writeFileSync(pagePath, pageContent, 'utf8');
  
  console.log(`Generated page: ${brandId}/${routePath}`);
}

console.log('Validating configurations...');

// Only generate the pages specified in pages.ts
pagesToBuild.forEach(pageConfig => {
  generatePage(pageConfig);
});
