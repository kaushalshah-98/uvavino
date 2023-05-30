const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['robohash.org', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
