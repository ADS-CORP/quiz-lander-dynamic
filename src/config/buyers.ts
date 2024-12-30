interface BuyerConfig {
  abbreviation: string;
  name: string;
}

export const buyers: Record<string, BuyerConfig> = {
  'sok': {
    abbreviation: 'sok',
    name: 'Sokolove Law'
  },
  'mlk': {
    abbreviation: 'mlk',
    name: 'MLK Law'
  },
  'ad': {
    abbreviation: 'ad',
    name: 'A4D'
  },
  'typh': {
    abbreviation: 'typh',
    name: 'Typhon Interactive'
  },
  'nex': {
    abbreviation: 'nex',
    name: 'NextLevel Direct'
  },
  'loff': {
    abbreviation: 'loff',
    name: 'LegalOffers'
  },
  'oj': {
    abbreviation: 'oj',
    name: 'OpenJar'
  }
};
