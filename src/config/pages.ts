export interface PageBuildConfig {
  offerAbbrev: string;
  brand: string;
  buyer: string;
  source: string;
  quizId: string;
  cta?: string;
  ctaText?: {
    header?: string;
    footer?: string;
  };
  showEmail?: boolean;
  showCta?: boolean;
}

export const pagesToBuild: PageBuildConfig[] = [
  // Hair Relaxer pages
  {
    offerAbbrev: 'hair',
    brand: 'ss',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'hair',
    brand: 'pj',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03',
    showEmail: true,
    cta: '',
    showCta: true,
    ctaText: {
      header: 'Call Now',
      footer: 'Chat With Us Now'
    }
  },
  {
    offerAbbrev: 'hair',
    brand: 'wbl',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Roundup pages
  {
    offerAbbrev: 'ru',
    brand: 'ss',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'ru',
    brand: 'pj',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'ru',
    brand: 'wbl',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Oxbryta pages
  {
    offerAbbrev: 'oxb',
    brand: 'ss',
    buyer: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'pj',
    buyer: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'wbl',
    buyer: 'typh',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // Depo Provera pages
  {
    offerAbbrev: 'depo',
    brand: 'ss',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'depo',
    brand: 'pj',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'depo',
    brand: 'yt',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'depo',
    brand: 'wbl',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },

  // LDS Abuse page
  {
    offerAbbrev: 'lds',
    brand: 'yt',
    buyer: 'loff',
    source: 'fb',
    quizId: '90e0a970-52c4-4a7f-b0c1-7ccfdddcaf99',
    showEmail: false,
    showCta: true,
    ctaText: {
      header: 'Call Now',
      footer: 'Chat With Us Now'
    } 
  },

  // Asbestos pages
  {
    offerAbbrev: 'asb',
    brand: 'ss',
    buyer: 'ad',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  },
  {
    offerAbbrev: 'asb',
    brand: 'pj',
    buyer: 'nex',
    source: 'fb',
    quizId: 'f7dd5270-117a-4c2e-9eec-bc20b73c8a03'
  }
];
