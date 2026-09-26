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

## Publishing the site

The site publishes itself to **GitHub Pages** whenever changes reach the `main`
branch, using `.github/workflows/deploy.yml`. Live address:

**https://counsel-in-code.github.io/Node-Law-AI/**

**One-time setup:** on GitHub, go to **Settings → Pages**, and under "Build and
deployment" set **Source** to **GitHub Actions**. Without this the publish step
fails.

To watch a publish, open the **Actions** tab on GitHub. It takes about two
minutes. To publish without changing anything, use **Actions → Publish website →
Run workflow**.

### Moving to the node.law domain later

1. In `.github/workflows/deploy.yml`, delete the two `NEXT_PUBLIC_…` lines under
   "Build the website".
2. Create a file `web/public/CNAME` containing one line: `node.law`
3. At your domain registrar, point the domain at GitHub Pages (GitHub shows the
   exact records under Settings → Pages → Custom domain).

Search engines are deliberately **blocked** while the site is on the temporary
GitHub address, and allowed automatically once it is on node.law.

### Notes on this kind of hosting

- The site is published as plain HTML files, so `npm run start` is not used. To
  preview the built site, run `npm run build` then `npx serve out`.
- GitHub Pages cannot send security headers (such as X-Frame-Options). See the
  note in `next.config.ts` if you later move to a host that can.
- Images are served at their original size, so save photos at a sensible size
  before putting them in `public/`.

## Before going live — checklist

- [ ] Replace every `[PLACEHOLDER]` (search the `src/content` folder for it)
- [ ] Confirm every statement in `src/content/security.ts` with your engineering team
- [ ] Replace placeholder testimonials with real, approved quotes
- [ ] Final legal text in `src/content/legal/`
- [ ] Connect the forms to a backend (search for `CONNECT BACKEND HERE`)
- [ ] If you add analytics, only load it after cookie consent (see `components/layout/CookieBanner.tsx`)
- [ ] Confirm the live address in `site.ts` (`url: "https://node.law"`)
