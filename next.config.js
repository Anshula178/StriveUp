
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/StriveUp" : "",
  assetPrefix: isProd ? "/StriveUp/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
