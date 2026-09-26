/* Reads the Markdown files in src/content/blog and src/content/legal and turns
   them into HTML. You shouldn't need to edit this file. */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export type Heading = { id: string; text: string };

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Converts Markdown to HTML and collects level-2 headings for a table of contents. */
export function renderMarkdown(markdown: string) {
  const headings: Heading[] = [];
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const inner = this.parser.parseInline(tokens);
        const plain = inner.replace(/<[^>]+>/g, "");
        const id = slugify(plain);
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
    },
  });
  const html = marked.parse(markdown, { async: false }) as string;
  return { html, headings };
}

function folderPath(folder: string) {
  return path.join(CONTENT_ROOT, folder);
}

/** Lists the file names (without ".md") in a content folder. */
export function listSlugs(folder: string) {
  return fs
    .readdirSync(folderPath(folder))
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => file.replace(/\.md$/, ""));
}

/** Reads one Markdown file: returns its front-matter fields and body. */
export function readMarkdownFile<T extends Record<string, unknown>>(folder: string, slug: string) {
  const filePath = path.join(folderPath(folder), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { slug, data: data as T, content };
}

/** Estimated reading time in minutes (≈220 words per minute). */
export function readingTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
