/* ==========================================================================
   RESOURCES / BLOG LISTING  —  node.law/resources
   ✏️  Articles are Markdown files in src/content/blog — add a file to publish a post.
   ========================================================================== */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container } from "@/components/ui/Layout";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { formatDate, getArticles, type ArticleMeta } from "@/lib/content";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Practical insights for in-house counsel and law firms on contract review, privacy law in the UAE and beyond, and using AI responsibly in legal work.",
  path: "/resources",
});

function ArticleCard({ article, featured }: { article: ArticleMeta; featured?: boolean }) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900/25 hover:shadow-[0_12px_32px_-18px_rgb(11_31_58/0.35)]",
        featured && "sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16",
      )}
    >
      <div className={cn(featured && "max-w-2xl")}>
        <p className="text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">
          {featured ? `Latest · ${article.category}` : article.category}
        </p>
        <h2 className={cn("mt-4 font-normal", featured ? "text-3xl sm:text-4xl" : "text-2xl")}>{article.title}</h2>
        <p className="mt-3 leading-relaxed text-muted">{article.description}</p>
      </div>
      <div className={cn("mt-8 flex items-center justify-between gap-4 text-sm text-muted", featured && "lg:mt-0 lg:shrink-0 lg:flex-col lg:items-end")}>
        <span>
          <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingTime} min read
        </span>
        <span className="inline-flex items-center gap-1.5 font-medium text-navy-900">
          Read article
          <ArrowRight aria-hidden="true" className="size-4 text-gold-700 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function ResourcesPage() {
  const [latest, ...rest] = getArticles();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insights for modern legal teams."
        description="Practical guidance on drafting, contract review, data protection and the responsible use of AI in legal practice."
      />

      <Container className="py-16 sm:py-24">
        {latest ? (
          <>
            <FadeIn>
              <ArticleCard article={latest} featured />
            </FadeIn>
            <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((article, i) => (
                <li key={article.slug}>
                  <FadeIn delay={i * 70} className="h-full">
                    <ArticleCard article={article} />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-lg text-muted">New articles are coming soon.</p>
        )}
      </Container>

      <CtaBanner />
    </>
  );
}
