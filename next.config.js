/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: false,
    transpilePackages: ['@mui/x-charts'],
    compiler: {
        styledComponents: true
    }

}

module.exports = nextConfig
