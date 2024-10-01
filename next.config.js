/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: false, // Change to false if possible
  },
}

module.exports = withSentryConfig(
  nextConfig,
  {
    org: "semas-armonaitis",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    hideSourceMaps: false, // Set this to false to include source maps
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
