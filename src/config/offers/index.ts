import { hairOffer } from './hair';
import { roundupOffer } from './roundup';
import { oxbrytaOffer } from './oxbryta';
import { depoOffer } from './depo';
import { ldsOffer } from './lds';
import { asbestosOffer } from './asbestos';
import { pfasOffer } from './pfas';
import { LandingPageContent } from '../types';

export const offers: Record<string, LandingPageContent> = {
  'hairrelaxer': hairOffer,
  'roundup': roundupOffer,
  'oxbryta': oxbrytaOffer,
  'depoprovera': depoOffer,
  'ldsabuse': ldsOffer,
  'asbestos': asbestosOffer,
  'pfas': pfasOffer
};
