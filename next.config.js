/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      fs: false,
      net: false,
      tls: false,
      querystring: false,
      url: false,
      events: false,
      buffer: false,
      timers: false,
      zlib: false,
      path: false,
      assert: false,
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
  output: 'standalone',
  target: 'server',
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig;
