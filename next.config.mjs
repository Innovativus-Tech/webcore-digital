/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        // Sanity CDN — required for next/image to accept Sanity asset URLs
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },

  // Allow the embedded Studio to be served correctly.
  // The Studio injects its own CSS; suppress the "overriding CSS" warning.
  logging: {
    fetches: {
      fullUrl: process.env.NODE_ENV === "development",
    },
  },
};

export default nextConfig;
