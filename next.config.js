/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  ...(isVercel ? {} : { output: 'standalone' }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wherestheduke.com',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
};

module.exports = nextConfig;
