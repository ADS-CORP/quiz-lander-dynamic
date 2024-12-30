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
  }
};

module.exports = nextConfig;
