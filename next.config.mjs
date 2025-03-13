import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Remover a opção appDir que não é mais necessária no Next.js 14
  },
  images: {
    domains: ['randomuser.me', 'images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src')
    };
    return config;
  },
  typescript: {
    // Ativa a verificação de tipos durante o build
    ignoreBuildErrors: false,
  }
}

export default nextConfig; 