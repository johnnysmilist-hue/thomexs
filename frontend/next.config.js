/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['supabase.co', 'images.unsplash.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
