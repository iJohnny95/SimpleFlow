/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/thank-you',
        destination: '/thank-you',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
