/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.unsplash.com'],
    },
}

module.exports = nextConfig



// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()