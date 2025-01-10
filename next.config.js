/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    reactStrictMode: false,
    transpilePackages: ['@mui/x-charts'],
    compiler: {
        styledComponents: true,
        removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false
    },
    env: {
        NEXT_PUBLIC_SIGNUP_BASE_URL: process.env.NEXT_PUBLIC_SIGNUP_BASE_URL,
        NEXT_PUBLIC_FETCH_CNPJ: process.env.NEXT_PUBLIC_FETCH_CNPJ,
    },
    experimental: {
        optimizePackageImports: ['@emotion/react', '@emotion/styled', 'axios', 'js-cookie', 'zustand'],
    },
}

module.exports = nextConfig
