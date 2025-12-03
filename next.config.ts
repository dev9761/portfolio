import type { NextConfig } from "next";

// Remove basePath and assetPrefix completely unless you really need them.
// You are deploying to the root domain on Vercel, NOT a subfolder.

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // allow proper next/image optimization
  },
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
