/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // domains: ['lh3.googleusercontent.com','files.stripe.com']
    //I changed the original domains: with remotePaterns: because of deprecation
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'files.stripe.com',
      },
    ],
  },
}

module.exports = nextConfig
