import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DIRNAME: dirname,
  },
  reactStrictMode: true,
};

export default nextConfig;
