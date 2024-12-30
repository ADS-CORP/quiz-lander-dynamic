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
  async rewrites() {
    return [
      // Handle quiz API routes
      {
        source: '/api/quizzes/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/quizzes/:path*'
      },
      // Handle ipapi proxy webhook
      {
        source: '/api/proxy-webhook/ipapi',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/proxy-webhook/ipapi'
      },
      // Handle NPI registry proxy webhook
      {
        source: '/api/proxy-webhook/npi-registry',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/proxy-webhook/npi-registry'
      }
    ];
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
      }
    ];
  }
};

module.exports = nextConfig;
