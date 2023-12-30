/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            }, 
            {
                protocol: 'https',
                hostname: 'randomuser.me'
            }
        ]
      },
}

module.exports = nextConfig
