/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Optimize module resolution
  modularizeImports: {
    '@radix-ui/react-icons': {
      transform: '@radix-ui/react-icons/dist/{{member}}',
    },
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    disableStaticImages: false,
  },
  // Enable static exports
  output: 'standalone',
  // Enable optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-tabs', 'clsx', 'tailwind-merge'],
    serverMinification: true,
    webpackBuildWorker: true,
  },
  // Configure SWC to target modern browsers
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    // Disable legacy transforms
    styledComponents: false,
    emotion: false,
  },
  // Ensure modern browser targeting
  swcMinify: true,
  // Compress output
  compress: true,
  webpack: (config, { isServer, dev }) => {
    // Reduce polyfills for modern browsers
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'regenerator-runtime': false,
        '@babel/runtime': false,
      };
      
      // Target modern browsers only
      config.target = ['web', 'es2020'];
      
      // Disable polyfills for modern features
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'core-js': false,
        'regenerator-runtime': false,
        '@babel/runtime': false,
      };
      
      // Enable aggressive tree shaking in production
      if (!dev) {
        config.optimization = {
          ...config.optimization,
          usedExports: true,
          sideEffects: false,
          concatenateModules: true,
          minimize: true,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              default: false,
              vendors: false,
              // Split vendor code
              vendor: {
                name: 'vendor',
                chunks: 'all',
                test: /node_modules/,
                priority: 20
              },
              // Split common code
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 10,
                reuseExistingChunk: true,
                enforce: true
              }
            }
          }
        };
      }
    }

    return config;
  },
  
  // Target modern browsers
  transpilePackages: [],
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
