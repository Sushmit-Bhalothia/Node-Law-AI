import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMetaInput = {
  /** Page title — " | Node.law" is added automatically. */
  title: string;
  /** 140–160 character summary shown in Google results and link previews. */
  description: string;
  /** The page's address, e.g. "/security". */
  path: string;
  /** Hide this page from search engines. */
  noIndex?: boolean;
  type?: "website" | "article";
  /** Use the title exactly as given (no " | Node.law" suffix). */
  absoluteTitle?: boolean;
};

/** Builds consistent SEO + social sharing tags for a page. */
export function pageMetadata({
  title,
  description,
  path,
  noIndex,
  type = "website",
  absoluteTitle,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      type,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
