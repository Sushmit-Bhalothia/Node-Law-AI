/* Site footer. Links come from src/content/site.ts and src/content/products.ts. */

import Link from "next/link";
import { Container } from "@/components/ui/Layout";
import { Logo } from "@/components/ui/Logo";
import { products } from "@/content/products";
import { footerNav, site } from "@/content/site";
import { CookieSettingsButton } from "./CookieBanner";

export function Footer() {
  const columns = [
    {
      heading: "Products",
      links: [
        ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
        { label: "All products", href: "/products" },
      ],
    },
    ...footerNav,
  ];

  return (
    <footer data-tone="dark" className="bg-navy-950 text-mist">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-5 text-[15px] leading-relaxed">{site.tagline}.</p>
            <address className="mt-6 space-y-1.5 text-[15px] not-italic">
              <p>{site.location.address}</p>
              <p>
                <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </p>
            </address>
            {site.social.length > 0 && (
              <ul className="mt-6 flex gap-4 text-sm">
                {site.social.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} className="hover:text-white" rel="noopener noreferrer" target="_blank">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.heading}>
                <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-5 space-y-3 text-[15px]">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-4xl text-sm leading-relaxed">{site.footerDisclaimer}</p>
          <div className="mt-6 flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/legal/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white" prefetch={false}>
                Sitemap
              </Link>
              <CookieSettingsButton className="hover:text-white" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
