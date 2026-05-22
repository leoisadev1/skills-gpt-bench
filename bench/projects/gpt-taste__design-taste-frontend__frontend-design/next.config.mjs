import { fileURLToPath } from "node:url";

const benchmarkRoot = fileURLToPath(new URL("../../..", import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: benchmarkRoot
  }
};

export default nextConfig;
