import path from "node:path";
import type { NextConfig } from "next";

/* ==========================================================================
   DEPLOYMENT SETTINGS — the site is published to GitHub Pages
   --------------------------------------------------------------------------
   The site is built as plain HTML files (a "static export") and published at
   https://counsel-in-code.github.io/Node-Law-AI/

   Because it sits in a sub-folder of that address, every link and image needs
   a "/Node-Law-AI" prefix. That prefix is set by the publishing workflow in
   .github/workflows/deploy.yml — not here — so the site still behaves normally
   on your own computer at http://localhost:3000.

   ➡️  WHEN YOU MOVE TO node.law: delete the two NEXT_PUBLIC_… lines under
       "Build the website" in .github/workflows/deploy.yml, and add a file
       named CNAME in web/public/ containing just: node.law
   ========================================================================== */

// Set by the publishing workflow. Empty on your computer and on a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Build plain HTML files that any static host can serve.
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  // Produces /about/index.html rather than /about.html — the most reliable
  // shape for GitHub Pages.
  trailingSlash: true,
  // GitHub Pages can't resize images on the fly, so they're served as they are.
  // Save photos at a sensible size before adding them to /public.
  images: { unoptimized: true },
  // This folder is the project root (silences a warning about other lockfiles).
  outputFileTracingRoot: path.join(__dirname),
  poweredByHeader: false,

  // NOTE: security headers (X-Frame-Options, Referrer-Policy and similar) cannot
  // be set on GitHub Pages, because it only serves files and can't add headers.
  // If you later move to a host that runs the site (Vercel, Cloudflare, your own
  // server), add a headers() section here to switch them back on:
  //
  //   async headers() {
  //     return [{ source: "/(.*)", headers: [
  //       { key: "X-Content-Type-Options", value: "nosniff" },
  //       { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  //       { key: "X-Frame-Options", value: "DENY" },
  //       { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  //     ]}];
  //   },
};

export default nextConfig;
