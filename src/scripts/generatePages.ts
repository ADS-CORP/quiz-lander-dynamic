import fs from 'fs';
import path from 'path';
import { pagesToBuild } from '../config/pages';
import { offers } from '../config/offers';
import { brands } from '../config/brands';

const PAGES_DIR = path.join(process.cwd(), 'src/app/pages');

function generatePage(pageConfig: typeof pagesToBuild[0]) {
  const { offerAbbrev, brand, source } = pageConfig;
  const routePath = `${offerAbbrev}-${brand}-${source}`;
  
  const offerContent = offers[offerAbbrev];
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

  const pageContent = `import { offers } from '@/config/offers';
import { brands } from '@/config/brands';
import BaseLayout from '@/components/base/layout/BaseLayout';
import { LandingPage } from '@/components/templates/LandingPage';

export default function Page() {
  const offerContent = offers['${offerAbbrev}'];
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

  pagesToBuild.forEach(({ offerAbbrev, brand, source }) => {
    if (!offers[offerAbbrev]) {
      errors.push(`Offer "${offerAbbrev}" not found in offers configuration`);
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

  // Create pages directory if it doesn't exist
  if (!fs.existsSync(PAGES_DIR)) {
    fs.mkdirSync(PAGES_DIR, { recursive: true });
  }
  
  console.log('Generating pages...');
  pagesToBuild.forEach(generatePage);
  console.log('Page generation complete!');
}

main();
