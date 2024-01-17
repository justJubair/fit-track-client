/** @type {import('next').NextConfig} */
// next.config.js
const withVideos = require('next-videos')

const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
             
            },
          ],
    }
}

// module.exports = nextConfig

module.exports = withVideos(nextConfig)




