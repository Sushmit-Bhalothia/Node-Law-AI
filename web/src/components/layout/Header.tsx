"use client";

/* Sticky site header with desktop dropdown and mobile menu.
   Navigation labels come from src/content/site.ts and src/content/products.ts. */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Badge, Container } from "@/components/ui/Layout";
import { Logo } from "@/components/ui/Logo";
import { comingSoon, products } from "@/content/products";
import { mainNav } from "@/content/site";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const productsRef = useRef<HTMLDivElement>(null);
  const productsButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const productsMenuId = useId();
  const mobileMenuId = useId();

  // The Products menu opens on hover. A short delay before closing means the
  // menu doesn't vanish while the pointer travels from the button to the panel.
  const cancelClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openProducts = () => {
    cancelClose();
    setProductsOpen(true);
  };
  const closeProductsSoon = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setProductsOpen(false), 150);
  };
  useEffect(() => cancelClose, []);

  // Solid background + border once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus with Escape or by clicking outside
  useEffect(() => {
    if (!productsOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (productsOpen) {
        setProductsOpen(false);
        productsButtonRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (productsOpen && productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [productsOpen, mobileOpen]);

  // Prevent the page behind the mobile menu from scrolling
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setProductsOpen(false);
    setMobileOpen(false);
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85"
          : "border-transparent bg-paper",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        {/* ---------- Desktop navigation ---------- */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            <li>
              <div
                ref={productsRef}
                className="relative"
                onMouseEnter={openProducts}
                onMouseLeave={closeProductsSoon}
              >
                <button
                  ref={productsButtonRef}
                  type="button"
                  aria-expanded={productsOpen}
                  aria-controls={productsMenuId}
                  onClick={() => setProductsOpen((open) => !open)}
                  onFocus={openProducts}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[15px] transition-colors hover:text-navy-900",
                    isActive("/products") ? "text-navy-900" : "text-ink/80",
                  )}
                >
                  Products
                  <ChevronDown
                    aria-hidden="true"
                    className={cn("size-4 transition-transform duration-200", productsOpen && "rotate-180")}
                  />
                </button>

                {/* pt-3 keeps an invisible bridge so hover isn't lost between button and panel */}
                <div
                  hidden={!productsOpen}
                  className="absolute top-full left-1/2 z-50 w-[680px] -translate-x-1/2 pt-3"
                >
                  <div
                    id={productsMenuId}
                    className="animate-fade-up rounded-xl border border-line bg-white p-3 shadow-[0_24px_48px_-24px_rgb(11_31_58/0.35)]"
                  >
                    <ul className="grid grid-cols-2 gap-1">
                      {products.map((product) => (
                        <li key={product.slug}>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={closeAll}
                            className="flex h-full gap-3.5 rounded-lg p-4 transition-colors hover:bg-paper"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-md border border-gold-500/30 bg-gold-50 text-gold-700">
                              <Icon name={product.icon} className="size-[18px]" />
                            </span>
                            <span>
                              <span className="flex items-center gap-2 font-medium text-navy-900">
                                {product.name}
                                {product.status === "beta" && <Badge tone="gold">Beta</Badge>}
                              </span>
                              <span className="mt-1 block text-sm leading-snug text-muted">{product.tagline}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex items-center justify-between gap-4 rounded-lg bg-paper px-4 py-3 text-sm">
                      <p className="text-muted">
                        <span className="font-medium text-navy-900">Coming soon:</span>{" "}
                        {comingSoon.map((item) => item.name).join(", ")}
                      </p>
                      <Link href="/products" onClick={closeAll} className="shrink-0 font-medium text-gold-700 hover:underline">
                        All products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-[15px] transition-colors hover:text-navy-900",
                    isActive(item.href) ? "text-navy-900" : "text-ink/80",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" size="sm" className="h-10 px-4">
            Book a demo
          </ButtonLink>
        </div>

        {/* ---------- Mobile menu button ---------- */}
        <button
          ref={mobileButtonRef}
          type="button"
          className="-mr-2 grid size-11 place-items-center rounded-md text-navy-900 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
        </button>
      </Container>

      {/* ---------- Mobile menu panel ---------- */}
      <div
        id={mobileMenuId}
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile">
          <Container className="py-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">Products</p>
            <ul className="mt-3 divide-y divide-line border-b border-line">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={closeAll}
                    className="flex items-center justify-between gap-3 py-3.5 text-navy-900"
                  >
                    <span className="flex items-center gap-3">
                      <Icon name={product.icon} className="size-5 text-gold-700" />
                      {product.name}
                    </span>
                    {product.status === "beta" && <Badge tone="gold">Beta</Badge>}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" onClick={closeAll} className="block py-3.5 font-medium text-gold-700">
                  All products
                </Link>
              </li>
            </ul>
            <ul className="mt-2 divide-y divide-line">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block py-4 font-serif text-2xl text-navy-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <ButtonLink href="/contact" size="lg" onClick={closeAll}>
                Book a demo
              </ButtonLink>
            </div>
          </Container>
        </nav>
      </div>
    </header>
  );
}
