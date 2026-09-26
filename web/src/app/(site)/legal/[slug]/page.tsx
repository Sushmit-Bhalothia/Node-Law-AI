/* ==========================================================================
   LEGAL PAGE TEMPLATE  —  node.law/legal/<page>
   ✏️  The text of each legal page is a Markdown file in src/content/legal/
       e.g. Terms of Service → src/content/legal/terms.md
   ========================================================================== */

import Link from "next/link";
import { notFound } from "next/navigation";
import { TriangleAlert } from "lucide-react";
import { Container, Eyebrow } from "@/components/ui/Layout";
import { Prose } from "@/components/ui/Prose";
import { site } from "@/content/site";
import { formatDate, getLegalPage, getLegalPages } from "@/lib/content";
import { listSlugs, renderMarkdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/cn";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("legal").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return {};
  return pageMetadata({ title: page.meta.title, description: page.meta.description, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  const { html, headings } = renderMarkdown(page.content);
  const allPages = getLegalPages();
  const isPlaceholder = page.content.includes("[PLACEHOLDER");

  return (
    <>
      <header className="border-b border-line bg-paper">
        <Container className="py-14 sm:py-20">
          <div className="animate-fade-up max-w-3xl">
            <Eyebrow className="mb-5">Legal</Eyebrow>
            <h1 className="text-4xl leading-[1.1] font-normal tracking-tight sm:text-5xl">{page.meta.title}</h1>
            <p className="mt-5 text-lg text-muted">{page.meta.description}</p>
            <p className="mt-6 text-sm text-muted">
              Last updated: <time dateTime={page.meta.lastUpdated}>{formatDate(page.meta.lastUpdated)}</time>
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Sidebar: other legal pages + contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="Legal pages">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Legal pages</p>
              <ul className="mt-4 space-y-1 border-l border-line">
                {allPages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/legal/${p.slug}`}
                      aria-current={p.slug === slug ? "page" : undefined}
                      className={cn(
                        "-ml-px block border-l py-1.5 pl-4 text-[15px] transition-colors",
                        p.slug === slug
                          ? "border-gold-500 font-medium text-navy-900"
                          : "border-transparent text-muted hover:text-navy-900",
                      )}
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {headings.length > 2 && (
              <nav aria-label="On this page" className="mt-10 hidden lg:block">
                <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">On this page</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-muted hover:text-navy-900">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>

          <div className="max-w-3xl">
            {isPlaceholder && (
              <div
                role="note"
                className="mb-10 flex gap-3 rounded-lg border border-risk-med/25 bg-risk-med-bg p-4 text-sm leading-relaxed text-risk-med"
              >
                <TriangleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" strokeWidth={1.8} />
                <p>
                  <strong>Draft placeholder.</strong> This page contains placeholder text and is not yet the final legal
                  document. Questions? Contact{" "}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            )}
            <Prose html={html} />
          </div>
        </div>
      </Container>
    </>
  );
}
