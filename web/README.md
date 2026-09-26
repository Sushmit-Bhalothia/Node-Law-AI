# Node.law — marketing website

Built with **Next.js 15** (React), **Tailwind CSS 4** and **TypeScript**.

## Run it on your computer

1. Install **Node.js** (version 20 or newer) from https://nodejs.org — choose the "LTS" download.
2. Open the Terminal app, go to this folder, and install the project's building blocks (only needed once):
   ```bash
   cd path/to/Node-Law-AI/web
   npm install
   ```
3. Start the website:
   ```bash
   npm run dev
   ```
4. Open **http://localhost:3000** in your browser. Edits you save appear automatically.
5. To stop the website, go back to Terminal and press **Ctrl + C**.

## Edit text

See **[`src/content/README.md`](src/content/README.md)** — nearly all text lives in `src/content/`.

## Other commands

| Command         | What it does                                              |
| --------------- | --------------------------------------------------------- |
| `npm run dev`   | Runs the site locally while you edit                      |
| `npm run build` | Checks everything and builds the optimised live version   |
| `npm run start` | Runs the built version (after `npm run build`)            |
| `npm run lint`  | Checks the code for common mistakes                       |

## Folder structure

```
web/
├── public/                 Images and files served as-is (e.g. /public/team/photo.jpg)
└── src/
    ├── content/            ✏️ ALL EDITABLE TEXT — start here
    │   ├── blog/           Blog articles (Markdown)
    │   └── legal/          Legal pages (Markdown)
    ├── app/                One folder per page (the folder name is the web address)
    │   ├── (site)/         All pages, with header + footer
    │   ├── layout.tsx      Fonts, default SEO, cookie banner
    │   ├── globals.css     Brand colours, fonts and global styles
    │   ├── not-found.tsx   404 page
    │   ├── sitemap.ts      Generates /sitemap.xml
    │   ├── robots.ts       Generates /robots.txt
    │   └── opengraph-image.tsx  Link preview image for social media
    ├── components/
    │   ├── ui/             Buttons, headings, layout pieces, icons, logo
    │   ├── sections/       Reusable page sections (hero carousel, FAQ list, CTA banner, product cards…)
    │   ├── mockups/        Product illustrations (NDA review, drafting, contract review)
    │   ├── forms/          Contact form with validation
    │   └── layout/         Header, footer, cookie banner
    └── lib/                Helpers (SEO tags, Markdown loading, validation)
```

## Before going live — checklist

- [ ] Replace every `[PLACEHOLDER]` (search the `src/content` folder for it)
- [ ] Confirm every statement in `src/content/security.ts` with your engineering team
- [ ] Replace placeholder testimonials with real, approved quotes
- [ ] Final legal text in `src/content/legal/`
- [ ] Connect the forms to a backend (search for `CONNECT BACKEND HERE`)
- [ ] If you add analytics, only load it after cookie consent (see `components/layout/CookieBanner.tsx`)
- [ ] Confirm the live address in `site.ts` (`url: "https://node.law"`)
