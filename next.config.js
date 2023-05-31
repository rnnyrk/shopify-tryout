/* eslint-disable @typescript-eslint/no-var-requires */
/** @typedef {import('next').NextConfig} NextConfig */
/** @typedef {import('webpack').Configuration} WebpackConfiguration */

const { PHASE_PRODUCTION_SERVER } = require('next/constants');

const APP_ENV = process.env.APP_ENV || 'development';

const GLOBALS = {
  __DEV__: APP_ENV === 'development',
  __TEST__: APP_ENV === 'test',
  __ACC__: APP_ENV === 'acceptance',
  __PROD__: APP_ENV === 'production',
};

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts',
);

module.exports = (phase) =>
  withNextIntl({
    poweredByHeader: false,
    basePath: '',
    devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-left',
    },
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['cdn.shopify.com'],
    },
    headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
    webpack: (config, options) => {
      if (phase === PHASE_PRODUCTION_SERVER) return config;
      const webpack = require('webpack');
      /** @type {import('webpack').ModuleOptions['rules']} */
      const rules = [
        {
          test: /\.svg$/,
          oneOf: [
            {
              resourceQuery: /external/,
              type: 'asset/inline',
            },
            {
              use: ['@svgr/webpack'],
            },
          ],
        },
      ];

      // Add our rules
      if (!config.module) {
        config.module = {
          rules: [],
        };
      }

      config.module.rules = [...config.module.rules, ...rules];

      // Add plugins
      if (!config.plugins) {
        config.plugins = [];
      }

      config.plugins = [...config.plugins, new webpack.DefinePlugin(GLOBALS)];

      // Add tsconfig paths to webpack
      if (!config.resolve) {
        config.resolve = {
          plugins: [],
        };
      }

      config.resolve.plugins = [...config.resolve.plugins];

      return config;
    },
  });

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];
