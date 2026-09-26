/* Generates /sitemap.xml automatically from the site's pages, products, articles and legal pages. */

import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { getArticles, getLegalPages } from "@/lib/content";

// Required so this file can be built into the static site.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;
  const now = new Date();

  const staticPages = ["", "/products", "/how-it-works", "/security", "/about", "/resources", "/faq", "/contact", "/careers"].map(
    (path) => ({
      url: url(path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const productPages = products.map((p) => ({
    url: url(`/products/${p.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const articlePages = getArticles().map((a) => ({
    url: url(`/resources/${a.slug}`),
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const legalPages = getLegalPages().map((l) => ({
    url: url(`/legal/${l.slug}`),
    lastModified: new Date(l.lastUpdated),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticPages, ...productPages, ...articlePages, ...legalPages];
}
