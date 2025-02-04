/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        ppr: 'incremental'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.i-scmp.com'
            }
        ]
    }
}

export default nextConfig
