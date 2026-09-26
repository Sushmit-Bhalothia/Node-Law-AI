/* Generates /robots.txt — tells search engines what they may crawl. */

import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required so this file can be built into the static site.
export const dynamic = "force-static";

/* While the site is on its temporary GitHub address we ask search engines to
   stay away, so that a copy of the site doesn't compete with node.law in Google
   later. Crawling switches on by itself once the site is published on node.law. */
const isLiveDomain = site.url.includes("node.law");

export default function robots(): MetadataRoute.Robots {
  if (!isLiveDomain) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
