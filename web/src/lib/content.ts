/* Loads blog articles (src/content/blog) and legal pages (src/content/legal). */

import { listSlugs, readMarkdownFile, readingTime } from "./markdown";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // "YYYY-MM-DD"
  author: string;
  authorRole?: string;
  category: string;
  readingTime: number;
};

type ArticleFrontmatter = Omit<ArticleMeta, "slug" | "readingTime">;

export function getArticle(slug: string) {
  const file = readMarkdownFile<ArticleFrontmatter>("blog", slug);
  if (!file) return null;
  const meta: ArticleMeta = { ...file.data, date: String(file.data.date), slug, readingTime: readingTime(file.content) };
  return { meta, content: file.content };
}

/** All articles, newest first. */
export function getArticles(): ArticleMeta[] {
  return listSlugs("blog")
    .map((slug) => getArticle(slug)!.meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export type LegalMeta = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  order: number;
};

export function getLegalPage(slug: string) {
  const file = readMarkdownFile<Omit<LegalMeta, "slug">>("legal", slug);
  if (!file) return null;
  return { meta: { ...file.data, lastUpdated: String(file.data.lastUpdated), slug }, content: file.content };
}

export function getLegalPages(): LegalMeta[] {
  return listSlugs("legal")
    .map((slug) => getLegalPage(slug)!.meta)
    .sort((a, b) => a.order - b.order);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
