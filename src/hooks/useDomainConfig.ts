'use client';

import { useEffect, useState } from 'react';

interface DomainConfig {
  brand: string;
  buyer: string;
}

export function useDomainConfig() {
  const [config, setConfig] = useState<DomainConfig | null>(null);

  useEffect(() => {
    // Get domain configuration from response headers
    const brand = document.querySelector('meta[name="x-brand"]')?.getAttribute('content');
    const buyer = document.querySelector('meta[name="x-buyer"]')?.getAttribute('content');

    if (brand && buyer) {
      setConfig({ brand, buyer });
    }
  }, []);

  return config;
}
