/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  target: "experimental-serverless-trace"
}

module.exports = nextConfig
