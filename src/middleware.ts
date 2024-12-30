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

const BACKEND_URL = 'https://quiz-widget-backend-685730230e63.herokuapp.com';

export async function middleware(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  const host = request.headers.get('host') || 'localhost:3000';
  const brandId = domainBrandMap[host];
  const brand = brandId ? brands[brandId] : brands['yt']; // Default to Your Truth brand

  // Handle API routes with CORS
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Check if this is a direct quiz ID request
    const quizIdMatch = request.nextUrl.pathname.match(/^\/api\/([a-f0-9-]+)$/);
    if (quizIdMatch) {
      const quizId = quizIdMatch[1];
      const url = new URL(request.url);
      url.protocol = 'https:';
      url.host = 'quiz-widget-backend-685730230e63.herokuapp.com';
      url.port = '';
      url.pathname = `/api/quizzes/${quizId}`;
      
      const response = NextResponse.rewrite(url);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', '*');
      return response;
    }

    // Check if this is a proxy webhook request
    if (request.nextUrl.pathname.startsWith('/api/proxy-webhook/')) {
      const url = new URL(request.url);
      url.protocol = 'https:';
      url.host = 'quiz-widget-backend-685730230e63.herokuapp.com';
      url.port = '';
      
      const response = NextResponse.rewrite(url);
      response.headers.set('Access-Control-Allow-Origin', '*');
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', '*');
      return response;
    }

    // Forward other API requests but add CORS headers
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');
    return response;
  }

  // For non-API routes, check if it's a brand-specific page
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') return NextResponse.next();

  // Check if this is a valid offer page path
  const pageConfig = pagesToBuild.find(page => {
    const routePath = `/${page.offerAbbrev}-${page.buyer}-${page.source}`;
    return routePath === pathname && page.brand === brandId;
  });

  if (pageConfig) {
    // Rewrite to the brand-specific page
    const url = request.nextUrl.clone();
    url.pathname = `/${brandId}${pathname}`;
    return NextResponse.rewrite(url);
  }

  // If it's not a valid page, let Next.js handle the 404
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};