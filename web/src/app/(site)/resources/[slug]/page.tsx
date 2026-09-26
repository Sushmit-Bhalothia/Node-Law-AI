/* ==========================================================================
   ARTICLE TEMPLATE  —  node.law/resources/<article-file-name>
   The text of each article is in src/content/blog/<article-file-name>.md
   ========================================================================== */

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Layout";
import { Prose } from "@/components/ui/Prose";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/content/site";
import { formatDate, getArticle, getArticles } from "@/lib/content";
import { listSlugs, renderMarkdown } from "@/lib/markdown";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.meta.title,
    description: article.meta.description,
    path: `/resources/${slug}`,
    type: "article",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { meta } = article;
  const { html } = renderMarkdown(article.content);
  const related = getArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: { "@type": "Person", name: meta.author },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article>
        <header className="bg-ruled border-b border-line bg-paper">
          <Container className="py-12 sm:py-20">
            <div className="animate-fade-up mx-auto max-w-3xl">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-navy-900"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
                All resources
              </Link>
              <p className="mt-10 text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">{meta.category}</p>
              <h1 className="mt-4 text-4xl leading-[1.1] font-normal tracking-tight sm:text-5xl">{meta.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-muted">{meta.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-6 text-sm text-muted">
                <span>
                  By <span className="text-navy-900">{meta.author}</span>
                  {meta.authorRole && `, ${meta.authorRole}`}
                </span>
                <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                <span>{meta.readingTime} min read</span>
              </div>
            </div>
          </Container>
        </header>

        <Container className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Prose html={html} />
            <aside className="mt-16 rounded-xl border border-line bg-paper p-6 text-sm leading-relaxed text-muted">
              This article is for general information only and does not constitute legal advice. Always consult a
              qualified lawyer about your specific circumstances.
            </aside>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-line bg-paper py-16 sm:py-20">
          <Container>
            <div className="mx-auto max-w-5xl">
              <h2 id="related-heading" className="text-3xl font-normal">
                Keep reading
              </h2>
              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/resources/${a.slug}`}
                      className="block h-full rounded-xl border border-line bg-white p-7 transition-colors hover:border-navy-900/25"
                    >
                      <p className="text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">{a.category}</p>
                      <h3 className="mt-3 text-xl font-normal">{a.title}</h3>
                      <p className="mt-2 text-sm text-muted">{a.readingTime} min read</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
