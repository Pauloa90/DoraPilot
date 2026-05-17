import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project so it doesn't pick up
  // unrelated lockfiles higher up in C:\Users\paulo.
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ["100.68.43.95"],
};

export default nextConfig;
