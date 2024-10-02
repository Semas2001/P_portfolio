const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  // Enable static export
  output: 'export',
};

// Combine the Sentry configuration with your Next.js configuration
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
