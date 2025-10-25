import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/sahand-edrisi",
  assetPrefix: "/sahand-edrisi/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
