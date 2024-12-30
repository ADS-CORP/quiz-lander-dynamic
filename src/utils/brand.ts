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
  // First try to match by domain
  const brand = Object.values(brands).find(b => b.domains.includes(domain));
  if (brand || !pathname) return brand;

  // If on localhost and no brand found by domain, try to determine from pathname
  if (domain.includes('localhost') && pathname) {
    // Extract brand from pathname (e.g., /ss/hair-ad-fb -> ss)
    const brandId = pathname.split('/')[1];
    if (brandId && brands[brandId]) {
      return brands[brandId];
    }
  }

  return undefined;
}
