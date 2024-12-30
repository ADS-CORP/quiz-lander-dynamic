'use client';

import { useEffect, useState } from 'react';

export function useDomainBrand() {
  const [brand, setBrand] = useState<string | null>(null);

  useEffect(() => {
    // Get brand from response headers
    const brandValue = document.querySelector('meta[name="x-brand"]')?.getAttribute('content');
    if (brandValue) {
      setBrand(brandValue);
    }
  }, []);

  return brand;
}
