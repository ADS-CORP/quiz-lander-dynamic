// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { pagesToBuild } from './config/pages';
import { getUrlParams } from './utils/user-data';
import { getBrandFromDomain } from './utils/brand';
import { yourTruthBrand } from './config/brands/yt';
import { seekingSettlementsBrand } from './config/brands/ss';
import { peoplesJusticeBrand } from './config/brands/pj';
import { weBuyLawsuitsBrand } from './config/brands/wbl';
import { BrandConfig } from './config/types';

const brands: Record<string, BrandConfig> = {
  'yt': yourTruthBrand,
  'ss': seekingSettlementsBrand,
  'pj': peoplesJusticeBrand,
  'wbl': weBuyLawsuitsBrand,
};

// Create a map of domains to brands for faster lookup
const domainBrandMap = Object.entries(brands).reduce((acc, [brandId, brand]) => {
  brand.domains.forEach(domain => {
    acc[domain] = brandId;
  });
  return acc;
}, {} as Record<string, string>);

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || 'localhost:3000';
  const brandId = domainBrandMap[host];
  const brand = brandId ? brands[brandId] : brands['yt']; // Default to Your Truth brand

  // Handle API routes with CORS
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return NextResponse.json({}, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
          'Access-Control-Allow-Credentials': 'true',
        },
      });
    }

    // Add CORS headers to all responses
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return response;
  }

  // For non-API routes, check if it's a brand-specific page
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') return NextResponse.next();

  // If it's a brand-specific path, determine brand from path
  const pathBrandId = pathname.split('/')[1];
  if (pathBrandId && brands[pathBrandId]) {
    const response = NextResponse.next();
    response.headers.set('x-brand-id', pathBrandId);
    return response;
  }
  
  // Check if this is a valid offer page path
  const pageConfig = pagesToBuild.find(page => {
    const routePath = `/${page.offerAbbrev}-${page.buyer}-${page.source}`;
    return routePath === pathname && page.brand === brandId;
  });

  if (pageConfig) {
    const url = request.nextUrl.clone();
    url.pathname = `/${brandId}${pathname}`;
    const response = NextResponse.rewrite(url);
    response.headers.set('x-brand-id', brandId);
    return response;
  }

  return NextResponse.next();
}

// Update matcher to handle all routes
export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};