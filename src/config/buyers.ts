interface BuyerConfig {
  abbreviation: string;
  name: string;
}

export const buyers: Record<string, BuyerConfig> = {
  'sokolove': {
    abbreviation: 'sok',
    name: 'Sokolove Law'
  },
  'mlk': {
    abbreviation: 'mlk',
    name: 'MLK Law'
  },
  'a4d': {
    abbreviation: 'ad',
    name: 'A4D'
  }
};
