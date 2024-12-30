// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { brands } from './config/brands';

// Create a map of domains to brands for faster lookup
const domainBrandMap = Object.entries(brands).reduce((acc, [brandId, brand]) => {
  brand.domains.forEach(domain => {
    acc[domain] = brandId;
  });
  return acc;
}, {} as Record<string, string>);

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const brandId = domainBrandMap[hostname];
  const brand = brandId ? brands[brandId] : null;

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
    response.headers.set('Access-Control-Allow-Credentials', 'true');
    
    return response;
  }

  // If we have a brand configuration, add it to the request headers
  if (brand) {
    const response = NextResponse.next();
    response.headers.set('x-brand', brandId);
    
    // Check if the requested path is for an allowed offer
    const pathParts = request.nextUrl.pathname.split('/');
    const requestedOffer = pathParts[1]; // e.g., 'hair-ad-fb' -> 'hair'
    
    if (requestedOffer && !brand.allowedOffers.includes(requestedOffer)) {
      // Redirect to 404 if offer is not allowed for this brand
      return NextResponse.redirect(new URL('/404', request.url));
    }
    
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