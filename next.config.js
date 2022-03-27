/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  target: "experimental-serverless-trace",
  env: {
    DATABASE_URL: "postgresql://nkhami:nextjsdemo@nextjs-demo-db.ctkjadx9w4f7.us-east-1.rds.amazonaws.com/postgres"
  }
}

module.exports = nextConfig
