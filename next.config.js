/** @type {import('next').NextConfig} */
{
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
