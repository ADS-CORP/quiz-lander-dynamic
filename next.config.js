/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      // Handle direct quiz ID requests
      {
        source: '/api/:quizId',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/quizzes/:quizId'
      },
      // Handle /api/quizzes paths
      {
        source: '/api/quizzes/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/quizzes/:path*'
      },
      // Handle proxy webhook requests
      {
        source: '/api/proxy-webhook/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/proxy-webhook/:path*'
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ]
      }
    ];
  },
  // Add domain configuration
  async redirects() {
    return [];
  },
  // Enable multi-zones support
  async domains() {
    return [
      // Add your domains here
      // Example: { domain: 'example1.com', defaultLocale: 'en-US' },
      // Example: { domain: 'example2.com', defaultLocale: 'en-US' },
    ];
  }
};

module.exports = nextConfig;
