export interface PageBuildConfig {
  offerAbbrev: string;
  brand: string;
  buyerAbbrev: string;
  source: string;
  quizId: string;
}

export const pagesToBuild: PageBuildConfig[] = [
  // Hair Relaxer pages (seekingsettlements, PJ, wbl)
  {
    offerAbbrev: 'hair',
    brand: 'ss',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'hair',
    brand: 'pj',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'hair',
    brand: 'wbl',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // LDS Abuse pages (yt, ss)
  {
    offerAbbrev: 'lds',
    brand: 'yt',
    buyerAbbrev: 'loff',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'lds',
    brand: 'ss',
    buyerAbbrev: 'loff',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Depo-Provera pages (seekingsettlements, PJ, wbl)
  {
    offerAbbrev: 'depo',
    brand: 'ss',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'depo',
    brand: 'pj',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'depo',
    brand: 'wbl',
    buyerAbbrev: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Oxbryta pages (seekingsettlements, PJ, wbl)
  {
    offerAbbrev: 'oxb',
    brand: 'ss',
    buyerAbbrev: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'pj',
    buyerAbbrev: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'wbl',
    buyerAbbrev: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Asbestos pages (seekingsettlements, PJ, wbl)
  {
    offerAbbrev: 'asb',
    brand: 'ss',
    buyerAbbrev: 'nex',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'asb',
    brand: 'pj',
    buyerAbbrev: 'nex',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'asb',
    brand: 'wbl',
    buyerAbbrev: 'nex',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  }
];
