/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      { protocol: 'https', hostname: 'assets.aceternity.com' },
    ],
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
