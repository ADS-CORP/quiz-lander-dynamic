import { seekingSettlementsBrand } from './ss';
import { peoplesJusticeBrand } from './pj';
import { yourTruthBrand } from './yt';
import { weBuyLawsuitsBrand } from './wbl';
import { BrandConfig } from '../types';

// Re-export individual brands
export { seekingSettlementsBrand } from './ss';
export { peoplesJusticeBrand } from './pj';
export { yourTruthBrand } from './yt';
export { weBuyLawsuitsBrand } from './wbl';

// Export brands record
export const brands: Record<string, BrandConfig> = {
  'ss': seekingSettlementsBrand,
  'pj': peoplesJusticeBrand,
  'yt': yourTruthBrand,
  'wbl': weBuyLawsuitsBrand
};
