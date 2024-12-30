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
      {
        source: '/api/:quizId',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/quizzes/:quizId'
      },
      {
        source: '/api/quizzes/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/quizzes/:path*'
      },
      {
        source: '/api/proxy-webhook/:path*',
        destination: 'https://quiz-widget-backend-685730230e63.herokuapp.com/api/proxy-webhook/:path*'
      }
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ]
      }
    ];
  }
};

module.exports = nextConfig;
