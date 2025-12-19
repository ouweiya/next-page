import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactCompiler: true,
    reactStrictMode: true,
    basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
