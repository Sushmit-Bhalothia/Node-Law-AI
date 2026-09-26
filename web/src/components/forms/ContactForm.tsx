"use client";

/* Contact / Book a demo form.
   ✏️  Dropdown options are in ROLE_OPTIONS below; products come from products.ts.
   🔌 No backend yet: see the "CONNECT BACKEND HERE" comment to send submissions
      to your email service or CRM. */

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { products } from "@/content/products";
import { fakeSubmit, isEmail, type Errors } from "@/lib/validation";
import { CheckboxField, ErrorSummary, SelectField, TextArea, TextField } from "./Field";

const ROLE_OPTIONS = [
  "In-house counsel",
  "Law firm lawyer",
  "Solo practitioner",
  "Legal operations",
  "Compliance / privacy professional",
  "Other",
].map((label) => ({ label, value: label }));

const INTEREST_OPTIONS = [
  { label: "Book a demo", value: "demo" },
  ...products.map((p) => ({ label: p.name, value: p.slug })),
  { label: "General enquiry", value: "general" },
];

export function ContactForm({ defaultInterest = "demo" }: { defaultInterest?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const initialInterest = INTEREST_OPTIONS.some((o) => o.value === defaultInterest) ? defaultInterest : "demo";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;

    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Enter your full name";
    if (!data.email?.trim()) next.email = "Enter your work email";
    else if (!isEmail(data.email)) next.email = "Enter a valid email address, like name@company.com";
    if (!data.organisation?.trim()) next.organisation = "Enter your organisation";
    if (!data.role) next.role = "Select your role";
    if (!data.message?.trim()) next.message = "Tell us a little about what you need";
    else if (data.message.trim().length < 20) next.message = "Your message should be at least 20 characters";
    if (!data.consent) next.consent = "Confirm you have read the Privacy Policy";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    // ------------------------------------------------------------------
    // CONNECT BACKEND HERE — e.g. send `data` to your email service or CRM:
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    // ------------------------------------------------------------------
    await fakeSubmit();
    setStatus("success");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-xl border border-line bg-white p-8 text-center sm:p-12">
        <CircleCheck aria-hidden="true" strokeWidth={1.4} className="mx-auto size-12 text-risk-low" />
        <h2 ref={successRef} tabIndex={-1} className="mt-5 text-3xl font-normal">
          Thank you — we&apos;ve received your message.
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          A member of our team will reply within one business day. In the meantime, you can read about how we protect
          your data.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/security" className="font-medium text-gold-700 underline-offset-4 hover:underline">
            Security &amp; Trust
          </Link>
          <span aria-hidden="true" className="text-line">
            |
          </span>
          <button
            type="button"
            className="font-medium text-gold-700 underline-offset-4 hover:underline"
            onClick={() => {
              setStatus("idle");
              setErrors({});
            }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6 rounded-xl border border-line bg-white p-6 sm:p-10">
      <ErrorSummary errors={errors} summaryRef={summaryRef} />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id="name" label="Full name" autoComplete="name" required error={errors.name} />
        <TextField id="email" label="Work email" type="email" autoComplete="email" required error={errors.email} />
        <TextField
          id="organisation"
          label="Organisation"
          autoComplete="organization"
          required
          error={errors.organisation}
        />
        <SelectField
          id="role"
          label="Role"
          required
          placeholder="Select your role"
          options={ROLE_OPTIONS}
          defaultValue=""
          error={errors.role}
        />
      </div>

      <SelectField id="interest" label="I'm interested in" options={INTEREST_OPTIONS} defaultValue={initialInterest} />

      <TextArea
        id="message"
        label="Message"
        required
        placeholder="For example: we review around 40 NDAs a month and want to standardise our positions."
        error={errors.message}
      />

      <CheckboxField id="consent" error={errors.consent}>
        I agree that Node.law may use my details to respond to this enquiry, as described in the{" "}
        <Link href="/legal/privacy" className="text-gold-700 underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </CheckboxField>

      <div className="flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">We usually reply within one business day.</p>
        <Button type="submit" size="lg" arrow disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
