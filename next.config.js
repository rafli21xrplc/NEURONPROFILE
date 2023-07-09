/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["camo.githubusercontent.com"],
    domains: ["tailus.io"],
    domains: ["cdn.mjwebs.com"],
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "camo.githubusercontent.com",
        port: "",
      },
    ],
  },
};

