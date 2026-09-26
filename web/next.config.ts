import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This folder is the project root (silences a warning about other lockfiles on the computer).
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,
  images: {
    // Serve modern, smaller image formats automatically.
    formats: ["image/avif", "image/webp"],
  },
  // Sensible security headers for a company that sells confidentiality.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
