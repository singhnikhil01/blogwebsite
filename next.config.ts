import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ajuo8pgnwp.ufs.sh',
        port: '',
        pathname: '/f/**',
      },
    ],
  },
};

module.exports = nextConfig;
