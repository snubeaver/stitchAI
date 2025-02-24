import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack' }],
    });
    config.externals.push('pino-pretty', 'lokijs', 'encoding');

    return config;
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.untitledbank.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
