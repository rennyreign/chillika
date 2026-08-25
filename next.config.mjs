/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  output: "export",
  trailingSlash: true,
  basePath: "/chillika",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
