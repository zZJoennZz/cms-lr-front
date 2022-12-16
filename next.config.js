/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fakeimg.pl", "localhost:8000", "via.placeholder.com"],
  },
  output: "standalone",
};

module.exports = nextConfig;
