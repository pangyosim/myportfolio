/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'npx serve@latest out',
  trailingSlash: true,
  images: { unoptimized: true } ,
};

module.exports = nextConfig

  