/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    concurrentFeatures: false, // <- Set this option to false.
    serverComponents: true,
  },
}

module.exports = nextConfig
