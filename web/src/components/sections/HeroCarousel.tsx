"use client";

/* Homepage carousel: cycles through a preview of every product.
   Products (and their order) come from src/content/products.ts — add a product
   there and it appears here automatically.

   ✏️  TO CHANGE THE SPEED: edit INTERVAL below (in milliseconds, 1000 = 1 second). */

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ProductMockup } from "@/components/mockups/ProductMockup";
import { Badge } from "@/components/ui/Layout";
import { products } from "@/content/products";
import { cn } from "@/lib/cn";

/** How long each product stays on screen, in milliseconds (4000 = 4 seconds). */
const INTERVAL = 4000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [keyboardInside, setKeyboardInside] = useState(false);
  const [panelHeight, setPanelHeight] = useState<number>();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const count = products.length;
  const current = products[active];
  const running = playing && !keyboardInside;

  // Move to the next product automatically. The timer restarts whenever the
  // visitor changes product themselves, so they get a full interval to look.
  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % count), INTERVAL);
    return () => window.clearTimeout(timer);
  }, [running, active, count]);

  // Previews differ in height, so the frame resizes smoothly to fit the one on show
  useEffect(() => {
    const panel = panelRefs.current[active];
    if (!panel) return;
    const measure = () => setPanelHeight(panel.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    return () => observer.disconnect();
  }, [active]);

  const go = (step: number) => setActive((i) => (i + step + count) % count);

  // Left/right arrow keys move between tabs, as expected for a tab list
  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    let next = -1;
    if (step !== 0) next = (active + step + count) % count;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = count - 1;
    if (next < 0) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const controlClasses =
    "grid size-9 place-items-center rounded-full border border-line bg-white text-navy-900 transition-colors hover:border-navy-900/30 hover:bg-paper";

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Product previews"
      // Pauses while someone is tabbing through the carousel with a keyboard
      onFocusCapture={() => setKeyboardInside(true)}
      onBlurCapture={() => setKeyboardInside(false)}
    >
      {/* Product tabs */}
      <div role="tablist" aria-label="Choose a product to preview" className="flex flex-wrap justify-center gap-2">
        {products.map((product, i) => (
          <button
            key={product.slug}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onKeyDown={onTabKeyDown}
            onClick={() => setActive(i)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
              i === active
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-line bg-white text-ink/80 hover:border-navy-900/30 hover:text-navy-900",
            )}
          >
            {product.shortName}
            {product.status === "beta" && (
              <Badge tone={i === active ? "navy" : "gold"} className="hidden sm:inline-flex">
                Beta
              </Badge>
            )}
          </button>
        ))}
      </div>

      {/* Thin bar showing when the next product will appear */}
      <div aria-hidden="true" className="mx-auto mt-5 h-px w-full max-w-xs overflow-hidden bg-line">
        <div
          key={active}
          style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: running ? "running" : "paused" }}
          className="animate-progress h-full origin-left bg-gold-500 motion-reduce:hidden"
        />
      </div>

      {/* Previews — all are in the page; only the selected one is shown */}
      <div
        style={panelHeight ? ({ "--panel-height": `${panelHeight}px` } as React.CSSProperties) : undefined}
        className="mt-6 overflow-hidden transition-[height] duration-500 sm:grid sm:h-[var(--panel-height)] sm:items-start"
      >
        {products.map((product, i) => (
          <div
            key={product.slug}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            role="tabpanel"
            id={`${baseId}-panel-${i}`}
            aria-labelledby={`${baseId}-tab-${i}`}
            inert={i !== active}
            className={cn(
              "transition-opacity duration-500 motion-reduce:transition-none sm:col-start-1 sm:row-start-1",
              i === active ? "opacity-100" : "hidden opacity-0 sm:block",
            )}
          >
            <ProductMockup type={product.mockup} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <button type="button" className={controlClasses} onClick={() => go(-1)}>
            <span className="sr-only">Previous product</span>
            <ChevronLeft aria-hidden="true" className="size-4" />
          </button>
          <button type="button" className={controlClasses} onClick={() => go(1)}>
            <span className="sr-only">Next product</span>
            <ChevronRight aria-hidden="true" className="size-4" />
          </button>
          <button type="button" className={cn(controlClasses, "ml-1")} onClick={() => setPlaying((p) => !p)}>
            <span className="sr-only">{playing ? "Pause product previews" : "Play product previews"}</span>
            {playing ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
          </button>
          <p className="ml-2 text-sm text-muted">
            {active + 1} / {count}
          </p>
        </div>

        <p className="text-center text-[15px] text-muted sm:text-right">
          <span className="text-navy-900">{current.name}</span> — {current.tagline}{" "}
          <Link
            href={`/products/${current.slug}`}
            className="mt-1 inline-flex items-center gap-1 font-medium whitespace-nowrap text-gold-700 underline-offset-4 hover:underline sm:mt-0"
          >
            Explore
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </p>
      </div>

      {/* Tells screen readers which product is showing, once auto-play is stopped */}
      <p aria-live={running ? "off" : "polite"} className="sr-only">
        {`Showing ${current.name}, ${active + 1} of ${count}`}
      </p>
    </section>
  );
}
