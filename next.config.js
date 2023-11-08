// This file sets a custom webpack configuration to use Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  sentry: {
    hideSourceMaps: true,
  },
  future: {
    webpack5: true,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins.
module.exports = withSentryConfig(
  withBundleAnalyzer(moduleExports),
  sentryWebpackPluginOptions
);
