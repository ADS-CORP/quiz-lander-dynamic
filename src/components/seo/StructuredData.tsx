import Script from 'next/script';

type StructuredDataProps = {
  brand: {
    name: string;
    domain: string;
  };
  offer: {
    title: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  path: string;
};

export function StructuredData({ brand, offer, path }: StructuredDataProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: offer.metaTitle,
    description: offer.metaDescription,
    url: `https://${brand.domain}${path}`,
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: `https://${brand.domain}`,
    },
    mainEntity: {
      '@type': 'Service',
      name: offer.title,
      description: offer.description,
      provider: {
        '@type': 'Organization',
        name: brand.name,
      },
      serviceType: 'Legal Service',
      areaServed: 'United States',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.description'],
    },
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
}
