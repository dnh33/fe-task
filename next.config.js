require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    BIN_PASS: process.env.BIN_PASS,
  },
};

module.exports = nextConfig;
