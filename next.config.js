/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: prod ? false : true,
});

module.exports = withPWA({
  images: {
    domains: ["i.ytimg.com", "yt3.ggpht.com", "img.youtube.com"],
  },
});
