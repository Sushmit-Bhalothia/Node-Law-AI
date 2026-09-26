import { Plus } from "lucide-react";

/** Accessible accordion built on native <details>/<summary> — works with keyboard and without JavaScript. */
export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-serif text-lg text-navy-900 sm:text-xl">{item.question}</span>
            <Plus
              aria-hidden="true"
              strokeWidth={1.6}
              className="mt-1 size-5 shrink-0 text-gold-700 transition-transform duration-300 group-open:rotate-45"
            />
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
