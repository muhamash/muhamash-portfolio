/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '', 
                pathname: '/**',
            },
            {
                hostname: "randomuser.me",
                protocol: 'https',
                port: '', 
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;