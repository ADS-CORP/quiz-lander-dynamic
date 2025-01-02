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
  // For localhost, extract brand from domain (e.g., localhost:3000/yt/... -> yt)
  if (domain.includes('localhost')) {
    const urlParts = pathname?.split('/') || [];
    const brandId = urlParts[1];
    if (brandId && brands[brandId]) {
      return brands[brandId];
    }
    return undefined;
  }

  // For production domains, find brand by domain
  for (const [brandId, brand] of Object.entries(brands)) {
    if (brand.domains.some(d => domain.includes(d))) {
      return brand;
    }
  }

  return undefined;
}

export function getBrandFromPathname(pathname: string): BrandConfig | undefined {
  // Extract brand ID from pathname (e.g., /ss/hair-ad-fb -> ss)
  const brandId = pathname.split('/')[1];
  return brands[brandId];
}

export { brands };
