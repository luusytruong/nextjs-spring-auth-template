import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // rewrites() {
  //   return [
  //     {
  //       source: "/api/v1/:path*",
  //       destination: process.env.NEXT_PUBLIC_API + "/:path*",
  //     },
  //   ];
  // },
  devIndicators: false,
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
