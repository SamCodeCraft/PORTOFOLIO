module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['example.com'], // Adjust as per your use case
    },
  };
  


const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  module.exports = withBundleAnalyzer({});
  

