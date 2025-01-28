const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Adjust as per your use case
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        __dirname: true,
        __filename: true,
      };
    }

    return config;
  },
};
