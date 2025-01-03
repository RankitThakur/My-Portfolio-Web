/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  // images: {
  //   domains: [process.env.STRAPI_DOMAIN],
  // },
  webpack: (config, { dev }) => {
    return {
      ...config,
    };
  },
};

module.exports = nextConfig;
