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
      // Handle proxy webhook requests - make this more specific
      {
        source: '/api/proxy-webhook/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/proxy-webhook/:path*',
        has: [
          {
            type: 'query',
            key: '[...params]',
            value: undefined
          }
        ]
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
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ]
      }
    ];
  }
};

module.exports = nextConfig;
