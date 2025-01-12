import fs from "fs"
import path from "path"

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
    unoptimized: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

// HTTPS configuration for development
const isDevelopment = process.env.NODE_ENV === "development"

if (isDevelopment) {
  console.log("Running in development mode with HTTPS enabled.")
  config.serverRuntimeConfig = {
    https: {
      key: fs.readFileSync(path.resolve("key.pem")),
      cert: fs.readFileSync(path.resolve("cert.pem")),
    },
  }
}

export default config
