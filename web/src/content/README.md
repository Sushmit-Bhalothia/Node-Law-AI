# ✏️ How to edit the website's text

**Almost all of the website's text lives in this folder.** You don't need to touch any code.

After saving a file, the page in your browser updates by itself (while `npm run dev` is running).

## Which file controls which page?

| I want to change…                                   | Open this file                      |
| --------------------------------------------------- | ----------------------------------- |
| Company name, email, address, header & footer links | `site.ts`                           |
| Home page headings and paragraphs                   | `home.ts`                           |
| Products (cards, menu, and each product's page)     | `products.ts`                       |
| "Coming soon" cards                                 | `products.ts` (bottom of the file)  |
| How It Works page                                   | `how-it-works.ts`                   |
| Security & Trust page (and Home trust section)      | `security.ts`                       |
| About page and team                                 | `about.ts`                          |
| Careers page and job listings                       | `careers.ts`                        |
| FAQ page (and Home FAQ preview)                     | `faq.ts`                            |
| Testimonials on the Home page                       | `testimonials.ts`                   |
| Blog articles                                       | `blog/` folder — one `.md` file each |
| Legal pages (Terms, Privacy, Cookies, etc.)         | `legal/` folder — one `.md` file each |

Text on the Contact and 404 pages is written directly in those page files, marked with ✏️ comments:
`src/app/(site)/contact/page.tsx` and `src/app/not-found.tsx`. The homepage product carousel takes its
labels from `products.ts`.

## Rules for `.ts` files

- Only change the words **inside the quotes** `"like this"`.
- Keep the quotes, commas and brackets exactly as they are.
- To use a quote mark inside text, use a curly one (’ “ ”) instead of a straight one.
- To add an item to a list (for example, a new FAQ or job), copy a whole `{ ... },` block and paste it directly below, then change the words.

## Rules for `.md` files (blog and legal pages)

These are plain text files written in **Markdown**:

```
## A section heading
A normal paragraph.

**Bold text** and *italic text*.

- A bullet point
- Another bullet point

[Link text](/legal/privacy)
```

The block at the top between the two `---` lines holds the page's title, description and date. Keep that format:

```
---
title: "Your article title"
description: "One-sentence summary shown on the listing page and in Google."
date: "2026-09-15"
author: "Author Name"
category: "Contract review"
---
```

**To publish a new article:** copy an existing file in `blog/`, rename it (the file name becomes the web address, e.g. `my-new-article.md` → `/resources/my-new-article`), and edit it.

**Legal pages:** a yellow "Draft placeholder" notice appears automatically on any legal page that still contains the text `[PLACEHOLDER`. Remove all placeholders and the notice disappears.

## Adding a new product

Open `products.ts`, copy an entire product block (from `{` to `},`), paste it at the end of the list, and edit it. Its page, menu link, footer link, Home card and sitemap entry are all created automatically.

## If something breaks

If the site shows an error after an edit, it's almost always a missing quote or comma. Undo your last change (Cmd+Z / Ctrl+Z), save, and try again.
