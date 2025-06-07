/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable static exports
  output: 'standalone',
  // Enable optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-dialog'],
  },
  // Enable SWC minification
  swcMinify: true,
  // Compress output
  compress: true,
  webpack: (config, { dev, isServer }) => {
    // Force development mode for better debugging
    config.mode = dev ? 'development' : 'production';
    
    // Add source maps in development
    if (dev) {
      config.devtool = 'eval-source-map';
    }

    // Reduce polyfills for modern browsers
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
      };
    }

    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      usedExports: true,
      sideEffects: false,
    };

    return config;
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ]
      },
      {
        // Add headers for static files
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        // Cache images
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        // Cache fonts
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" }
        ]
      },
      {
        // Security headers
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" }
        ]
      },
      {
        // Cache HTML pages
        source: "/(.*)",
        headers: [
          { key: "Cache-Control", value: "s-maxage=3600, stale-while-revalidate=59" }
        ]
      },
      {
        // Cache API responses
        source: "/api/(.*)",
        headers: [
          { key: "Cache-Control", value: "s-maxage=60, stale-while-revalidate=30" }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
