const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  webpack: (config, { isServer }) => {
    

    config.devtool = 'source-map';
    return config;
    
  },
  output: 'export',
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
