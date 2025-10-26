import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/sahand-edrisi",
  assetPrefix: "/sahand-edrisi/",
};

export default nextConfig;
