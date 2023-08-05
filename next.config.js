/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
