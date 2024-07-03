/** @type {import('next').NextConfig} */


const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //       permanent: false, // Use true for a permanent redirect (301), false for a temporary redirect (302)
  //     },
  //   ];
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ], 
  },
};

module.exports = nextConfig;
