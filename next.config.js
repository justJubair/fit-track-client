/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.unsplash.com', 'images.pexels.com'],
    },
}

module.exports = nextConfig



// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()