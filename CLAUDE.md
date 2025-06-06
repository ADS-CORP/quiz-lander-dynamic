# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run lint` - Run ESLint to check for code issues

### Build and Production
- `npm run build` - Generate dynamic pages then build the Next.js app
- `npm run start` - Start production server
- `npm run generate-pages` - Manually run page generation script

Note: The build process runs `tsx src/scripts/generatePages.ts` first to dynamically create pages based on configuration, then runs `next build`.

## Architecture Overview

This is a multi-brand dynamic landing page generator built with Next.js 15 App Router. The application creates legal settlement landing pages for different brands and offers.

### Core Architecture Patterns

1. **Configuration-Driven Page Generation**
   - Pages are defined in `/src/config/pages.ts`
   - Build script reads config and generates actual page files at build time
   - Route pattern: `/{brand}/{offer}-{buyer}-{source}`

2. **Multi-Brand Support**
   - Brands: `yt` (YourTruth), `ss` (SeekingSettlements), `pj` (PeoplesJustice), `wbl` (WeBuyLawsuits)
   - Each brand has its own configuration in `/src/config/brands/`
   - Middleware handles domain-based routing to appropriate brand

3. **Offer Configuration**
   - Offers defined in `/src/config/offers/` (hairrelaxer, roundup, oxbryta, etc.)
   - Each offer has quiz configuration, CTAs, and content
   - Offer abbreviations: `hair`, `ru`, `oxb`, `depo`, `lds`, `asb`

4. **Quiz Widget Integration**
   - External quiz widget from `../quiz-widget-backup`
   - Backend API: `https://quiz-widget-backend-685730230e63.herokuapp.com`
   - Middleware proxies API requests to backend

### Key Technical Details

- **TypeScript Path Alias**: `@/*` maps to `./src/*`
- **Styling**: Tailwind CSS with custom theme extensions
- **Font**: Montserrat with optimized loading to prevent layout shift
- **State Management**: Context API for domain settings
- **API Routes**: Proxy webhooks for ipapi and npi-registry services

### Important Middleware Logic

The middleware (`/src/middleware.ts`) handles:
1. Domain-to-brand mapping for multi-tenant support
2. API request proxying with CORS headers
3. Route rewriting for brand-specific pages
4. Quiz ID request forwarding

### Page Generation Process

1. `generatePages.ts` reads from `pagesToBuild` configuration
2. Creates directories: `/src/app/(pages)/{brand}/{offer}-{buyer}-{source}/`
3. Generates `page.tsx` and `metadata.ts` for each configured page
4. Next.js builds these generated pages into the final app

### Testing

No testing framework is currently set up in this project.