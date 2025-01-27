const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Adjust as per your use case
  },
  webpack(config, { isServer }) {
    // Fix process and module issues for client-side code
    if (!isServer) {
      config.node = {
        process: 'mock',
        module: 'empty',
      };
    }
    return config;
  },
});
