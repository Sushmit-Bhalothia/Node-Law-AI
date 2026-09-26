"use client";

/* Cookie consent banner.
   ✏️  Banner text is in COPY below.
   🔌 When you add analytics or marketing tools, only load them when
      `getCookieConsent()?.analytics` (or `.marketing`) is true. */

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const COPY = {
  title: "Your privacy choices",
  body: "We use strictly necessary cookies to run this site. With your permission, we'd also like to use analytics cookies to understand how it's used. You can change your choice at any time.",
  accept: "Accept all",
  reject: "Reject non-essential",
  customise: "Customise",
  save: "Save preferences",
};

const STORAGE_KEY = "nodelaw-cookie-consent";
const OPEN_EVENT = "nodelaw:open-cookie-settings";

export type CookieConsent = { necessary: true; analytics: boolean; marketing: boolean; updatedAt: string };

export function getCookieConsent(): CookieConsent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const existing = getCookieConsent();
    if (!existing) setOpen(true);
    else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }
    const reopen = () => {
      setCustomising(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const save = (choice: { analytics: boolean; marketing: boolean }) => {
    const consent: CookieConsent = { necessary: true, ...choice, updatedAt: new Date().toISOString() };
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      /* storage unavailable — the banner will simply show again next visit */
    }
    setAnalytics(choice.analytics);
    setMarketing(choice.marketing);
    setOpen(false);
    setCustomising(false);
  };

  if (!open) return null;

  return (
    <div
      role="region"
      aria-labelledby={titleId}
      className="animate-fade-up fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
    >
      <div className="rounded-xl border border-line bg-white p-5 shadow-[0_24px_60px_-20px_rgb(11_31_58/0.45)] sm:p-6">
        <h2 id={titleId} className="font-serif text-xl text-navy-900">
          {COPY.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {COPY.body}{" "}
          <Link href="/legal/cookies" className="text-gold-700 underline underline-offset-4">
            Cookie Policy
          </Link>
        </p>

        {customising && (
          <fieldset className="mt-4 space-y-3 border-t border-line pt-4">
            <legend className="sr-only">Cookie categories</legend>
            <Toggle label="Strictly necessary" description="Required for the site to work." checked disabled />
            <Toggle
              label="Analytics"
              description="Helps us understand how the site is used."
              checked={analytics}
              onChange={setAnalytics}
            />
            <Toggle
              label="Marketing"
              description="Measures the effectiveness of our campaigns."
              checked={marketing}
              onChange={setMarketing}
            />
          </fieldset>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {customising ? (
            <Button size="sm" onClick={() => save({ analytics, marketing })}>
              {COPY.save}
            </Button>
          ) : (
            <>
              <Button size="sm" onClick={() => save({ analytics: true, marketing: true })}>
                {COPY.accept}
              </Button>
              <Button size="sm" variant="secondary" onClick={() => save({ analytics: false, marketing: false })}>
                {COPY.reject}
              </Button>
              <Button size="sm" variant="secondary" onClick={() => setCustomising(true)}>
                {COPY.customise}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  const id = useId();
  return (
    <div className="flex items-start justify-between gap-4">
      <label htmlFor={id} className={cn("text-sm", disabled ? "cursor-default" : "cursor-pointer")}>
        <span className="block font-medium text-navy-900">{label}</span>
        <span className="block text-muted">{description}</span>
      </label>
      <input
        id={id}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 size-5 shrink-0 cursor-pointer accent-navy-900 disabled:cursor-not-allowed disabled:opacity-60"
      />
    </div>
  );
}

/** Footer link that reopens the cookie preferences. */
export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookie settings
    </button>
  );
}
