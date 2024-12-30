// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add domain-specific configuration
const domainConfigs: Record<string, { brand: string; buyer: string }> = {
  'example1.com': { brand: 'pj', buyer: 'a4d' },
  'example2.com': { brand: 'pj', buyer: 'mlk' },
  // Add more domains as needed
};

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const domainConfig = domainConfigs[hostname];

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

  // If we have a domain configuration, add it to the request headers
  if (domainConfig) {
    const response = NextResponse.next();
    response.headers.set('x-brand', domainConfig.brand);
    response.headers.set('x-buyer', domainConfig.buyer);
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