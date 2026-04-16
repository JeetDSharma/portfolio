/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    transpilePackages: ['three'],
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
};

export default nextConfig;
