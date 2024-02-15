/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    reactStrictMode: false,
    compiler: {
        styledComponents: true
    }

}

module.exports = nextConfig
