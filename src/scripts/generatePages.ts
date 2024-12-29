import fs from 'fs';
import path from 'path';
import { pagesToBuild } from '../config/pages';
import { offers } from '../config/offers';
import { brands } from '../config/brands';

const PAGES_DIR = path.join(process.cwd(), 'src/app/pages');

// Helper function to find offer by abbreviation
function findOfferByAbbreviation(abbrev: string) {
  return Object.values(offers).find(offer => offer.abbreviation === abbrev);
}

function generatePage(pageConfig: typeof pagesToBuild[0]) {
  const { offerAbbrev, brand, source } = pageConfig;
  const routePath = `${offerAbbrev}-${brand}-${source}`;
  
  const offerContent = findOfferByAbbreviation(offerAbbrev);
  const brandConfig = brands[brand];
  
  if (!offerContent || !brandConfig) {
    console.error(`Missing configuration for ${routePath}`);
    return;
  }

  const pageDir = path.join(PAGES_DIR, routePath);
  const pagePath = path.join(pageDir, 'page.tsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // Find the offer key for the template
  const offerKey = Object.entries(offers).find(([_, offer]) => offer.abbreviation === offerAbbrev)?.[0];
  if (!offerKey) {
    console.error(`Could not find offer key for abbreviation: ${offerAbbrev}`);
    return;
  }

  const pageContent = `import { offers } from '@/config/offers';
import { brands } from '@/config/brands';
import BaseLayout from '@/components/base/layout/BaseLayout';
import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const offerContent = offers['${offerKey}'];
  const brandConfig = brands['${brand}'];
  const source = '${source}';

  return (
    <BaseLayout brand={brandConfig}>
      <LandingPage
        content={offerContent}
        brand={brandConfig}
        source={source}
      />
    </BaseLayout>
  );
}`;

  fs.writeFileSync(pagePath, pageContent);
  console.log(`Generated page: ${routePath}`);
}

function validateConfigs() {
  const errors: string[] = [];

  pagesToBuild.forEach(({ offerAbbrev, brand }) => {
    const offer = findOfferByAbbreviation(offerAbbrev);
    if (!offer) {
      errors.push(`Offer with abbreviation "${offerAbbrev}" not found in offers configuration`);
    }
    if (!brands[brand]) {
      errors.push(`Brand "${brand}" not found in brands configuration`);
    }
  });

  if (errors.length > 0) {
    console.error('Configuration validation failed:');
    errors.forEach(error => console.error(`- ${error}`));
    process.exit(1);
  }
}

function main() {
  console.log('Validating configurations...');
  validateConfigs();

  // Clean up pages directory
  if (fs.existsSync(PAGES_DIR)) {
    fs.rmSync(PAGES_DIR, { recursive: true });
  }
  fs.mkdirSync(PAGES_DIR, { recursive: true });

  // Generate pages
  pagesToBuild.forEach(generatePage);
  console.log('Page generation complete!');
}

main();
