// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,  // Enables React strict mode
//   swcMinify: true,       // Enables SWC-based minification
//   images: {
//     domains: ["res.cloudinary.com"], 
//     // Allow external image domains
//   },
//   env: {
//     API_BASE_URL: process.env.API_BASE_URL, // Add environment variables
//   },
// };

// module.exports = nextConfig;

/*
@type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Match all paths under res.cloudinary.com
      },
    ],
  },
};

module.exports = nextConfig;
