/* 404 PAGE — shown whenever a web address doesn't exist. */

import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const suggestions = [
  { label: "Products", href: "/products" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Security & Trust", href: "/security" },
  { label: "Resources", href: "/resources" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="bg-ruled border-b border-line bg-paper">
        <Container className="py-24 sm:py-36">
          <div className="animate-fade-up max-w-2xl">
            <p className="font-serif text-7xl text-gold-500 sm:text-8xl">404</p>
            <h1 className="mt-6 text-4xl font-normal tracking-tight sm:text-5xl">This page couldn&apos;t be found.</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The page may have moved, or the address may contain a typo. Here are some useful places to start instead.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/" size="lg" arrow>
                Go to the home page
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact us
              </ButtonLink>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-8">
              {suggestions.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gold-700 underline-offset-4 hover:underline">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
