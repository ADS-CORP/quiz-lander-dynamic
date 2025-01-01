import { BrandConfig } from '@/config/types';
import { yourTruthBrand } from '@/config/brands/yt';
import { seekingSettlementsBrand } from '@/config/brands/ss';
import { peoplesJusticeBrand } from '@/config/brands/pj';
import { weBuyLawsuitsBrand } from '@/config/brands/wbl';

const brands: Record<string, BrandConfig> = {
  'yt': yourTruthBrand,
  'ss': seekingSettlementsBrand,
  'pj': peoplesJusticeBrand,
  'wbl': weBuyLawsuitsBrand
};

export function getBrandFromDomain(domain: string, pathname?: string): BrandConfig | undefined {
  console.log('getBrandFromDomain called with:', { domain, pathname });
  
  // First try to match by domain
  const brand = Object.values(brands).find(b => b.domains.includes(domain));
  console.log('Brand found by domain:', brand?.abbreviation);
  
  if (brand || !pathname) return brand;

  // If on localhost and no brand found by domain, try to determine from pathname
  if (domain.includes('localhost') && pathname) {
    console.log('Checking pathname for brand on localhost');
    // Extract brand from pathname (e.g., /ss/hair-ad-fb -> ss)
    const brandId = pathname.split('/')[1];
    console.log('Extracted brandId from pathname:', brandId);
    if (brandId && brands[brandId]) {
      console.log('Found brand by pathname:', brands[brandId].abbreviation);
      return brands[brandId];
    }
  }

  console.log('No brand found');
  return undefined;
}
