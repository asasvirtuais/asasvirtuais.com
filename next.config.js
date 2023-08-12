/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ['@asasvirtuais/react']
}

module.exports = nextConfig
