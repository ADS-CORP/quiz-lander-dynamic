import { seekingSettlementsBrand } from './ss';
import { peoplesJusticeBrand } from './pj';
import { yourTruthBrand } from './yt';
import { BrandConfig } from '../types';

export const brands: Record<string, BrandConfig> = {
  'ss': seekingSettlementsBrand,
  'pj': peoplesJusticeBrand,
  'yt': yourTruthBrand
};
