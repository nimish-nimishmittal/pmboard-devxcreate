/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pm-s3-images.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pmproj.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;