/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  basePath: isProd ? "/reea-reveal_nextjs" : "",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
