import { cn } from "@/lib/cn";

/** Displays HTML generated from Markdown (blog articles and legal pages) with readable typography. */
export function Prose({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-navy-900",
        "prose-h2:mt-14 prose-h2:text-[1.75rem] prose-h3:text-xl",
        "prose-p:text-ink prose-li:text-ink prose-strong:text-navy-900",
        "prose-a:text-gold-700 prose-a:underline-offset-4 hover:prose-a:text-navy-900",
        "prose-blockquote:border-l-gold-500 prose-blockquote:font-serif prose-blockquote:text-navy-900 prose-blockquote:not-italic",
        "prose-th:align-bottom prose-th:font-sans prose-th:text-sm prose-th:font-semibold prose-th:text-navy-900 prose-table:text-base prose-hr:border-line",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
