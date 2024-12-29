import { offers } from '@/config/offers';
import { brands } from '@/config/brands';
import { buyers } from '@/config/buyers';
import { pagesToBuild } from '@/config/pages';
import { LandingPage } from '@/components/templates/LandingPage.js';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const offerContent = offers['hairrelaxer'];
  const brandConfig = brands['pj'];

  return {
    title: `Hair Relaxer Compensation | ${brandConfig.name}`,
    description: offerContent.metaDescription,
    openGraph: {
      title: `Hair Relaxer Compensation | ${brandConfig.name}`,
      description: offerContent.metaDescription
    }
  };
}

export default function Page() {
  const offerContent = offers['hairrelaxer'];
  const brandConfig = brands['pj'];
  const source = 'fb';
  
  const pageConfig = pagesToBuild.find(
    page => page.offerAbbrev === 'hair' && page.brand === 'pj' && page.source === 'fb' && page.buyer === 'a4d'
  );

  if (!pageConfig) {
    throw new Error(`Page configuration not found for offer: hairrelaxer, brand: pj, source: fb, buyer: a4d`);
  }

  const buyerConfig = buyers[pageConfig.buyer];

  if (!buyerConfig) {
    throw new Error(`Buyer configuration not found for buyer: ${pageConfig.buyer}`);
  }

  const props = {
    content: {
      ...offerContent,
      quizConfig: offerContent.quizConfig || {}
    },
    brand: brandConfig,
    source,
    quizId: pageConfig.quizId,
    buyer: buyerConfig
  };

  return <LandingPage {...props} />;
}
