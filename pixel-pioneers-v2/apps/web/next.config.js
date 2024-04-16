const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  images: {
    domains: [
      "cdn.discordapp.com",
      "pixel-pioneers.s3.us-west-2.amazonaws.com"
    ],
  },
};
