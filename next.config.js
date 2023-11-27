/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'noblex.com.ar',
            port: '',
            pathname: '/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/n/1/**',
          },
        ],
      },
}
module.exports = nextConfig
