/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.clerk.com"],
  },

  eslint: {
    ignoreBuildErrors: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
