const createBundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Adjust as per your use case
  },
};

module.exports = withBundleAnalyzer(nextConfig);