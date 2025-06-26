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
    cta: 'tel:17175868570',
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
    showEmail: false,
    quizId: 'fb3786c8-f187-44ef-9dce-77d0ec379c7f'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'pj',
    buyer: 'typh',
    source: 'fb',
    showEmail: false,
    quizId: 'fb3786c8-f187-44ef-9dce-77d0ec379c7f'
  },
  {
    offerAbbrev: 'oxb',
    brand: 'wbl',
    buyer: 'typh',
    source: 'fb',
    showEmail: false,
    quizId: 'fb3786c8-f187-44ef-9dce-77d0ec379c7f'
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
  },

  // PFAS pages
  {
    offerAbbrev: 'pfas',
    brand: 'ss',
    buyer: 'ad',
    source: 'fb',
    quizId: '92b4c017-ad63-4021-90d9-8d9514ce9b2e',
    showEmail: false
  },
  {
    offerAbbrev: 'pfas',
    brand: 'pj',
    buyer: 'ad',
    source: 'fb',
    quizId: '92b4c017-ad63-4021-90d9-8d9514ce9b2e',
    showEmail: false
  },
  {
    offerAbbrev: 'pfas',
    brand: 'wbl',
    buyer: 'ad',
    source: 'fb',
    quizId: '92b4c017-ad63-4021-90d9-8d9514ce9b2e',
    showEmail: false
  },
  {
    offerAbbrev: 'pfas',
    brand: 'yt',
    buyer: 'ad',
    source: 'fb',
    quizId: '92b4c017-ad63-4021-90d9-8d9514ce9b2e',
    showEmail: false
  }
];
