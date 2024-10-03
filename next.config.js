const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = process.env.NODE_ENV === 'development' ? 'source-map' : false;
    }
    return config;
  },
};



module.exports = withSentryConfig(nextConfig, {
  org: "semas-armonaitis",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
