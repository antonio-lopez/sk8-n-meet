/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
    unoptimized: true,
  },
};
