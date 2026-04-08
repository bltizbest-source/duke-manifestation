/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
