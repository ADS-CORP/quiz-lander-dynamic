/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Enable static exports
  output: 'standalone',
  // Disable static optimization to ensure proper chunk loading
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
  webpack: (config, { dev, isServer }) => {
    // Force development mode for better debugging
    config.mode = dev ? 'development' : 'production';
    
    // Add source maps in development
    if (dev) {
      config.devtool = 'eval-source-map';
    }

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
      }
    ];
  }
};

module.exports = nextConfig;
