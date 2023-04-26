/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: 'http://localhost:3000',
    DB_URI: 'mongodb+srv://admin:admin@cluster0.f2odcvj.mongodb.net/buyitnow',
  },
};

module.exports = nextConfig;
