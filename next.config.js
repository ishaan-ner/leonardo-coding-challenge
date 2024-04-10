/** @type {import('next').NextConfig} */
const nextConfig = {};


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's4.anilist.co',
          port: '',
          pathname: '/file/**',
        },
      ],
    },
  }