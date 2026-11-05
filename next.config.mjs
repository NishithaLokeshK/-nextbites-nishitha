/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/-nextbites-nishitha" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
