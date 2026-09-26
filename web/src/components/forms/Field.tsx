/* Form fields with labels, hints and accessible error messages. */

import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

const controlClasses =
  "block w-full rounded-md border bg-white px-3.5 py-2.5 text-[15px] text-ink shadow-[inset_0_1px_1px_rgb(11_31_58/0.04)] transition-colors placeholder:text-muted/70 focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10 focus:outline-none";

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
};

function FieldShell({ id, label, error, hint, optional, children }: BaseProps & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-navy-900">
        {label}
        {optional && <span className="text-xs font-normal text-muted">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-risk-high">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

export function TextField({ id, label, error, hint, optional, className, ...props }: BaseProps & ComponentProps<"input">) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <input
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClasses, error ? "border-risk-high" : "border-navy-900/20", className)}
        {...props}
      />
    </FieldShell>
  );
}

export function TextArea({ id, label, error, hint, optional, className, ...props }: BaseProps & ComponentProps<"textarea">) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <textarea
        id={id}
        name={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClasses, "resize-y", error ? "border-risk-high" : "border-navy-900/20", className)}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  error,
  hint,
  optional,
  options,
  placeholder,
  className,
  ...props
}: BaseProps & ComponentProps<"select"> & { options: { label: string; value: string }[]; placeholder?: string }) {
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} optional={optional}>
      <select
        id={id}
        name={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClasses, "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%235b6472%22><path d=%22M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z%22/></svg>')] bg-[length:1.1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10", error ? "border-risk-high" : "border-navy-900/20", className)}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

export function CheckboxField({
  id,
  error,
  children,
  ...props
}: { id: string; error?: string; children: ReactNode } & Omit<ComponentProps<"input">, "children">) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-0.5 size-[18px] shrink-0 cursor-pointer rounded border-navy-900/30 accent-navy-900"
          {...props}
        />
        <label htmlFor={id} className="cursor-pointer text-sm leading-relaxed text-ink">
          {children}
        </label>
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-risk-high">
          {error}
        </p>
      )}
    </div>
  );
}

/** Lists all errors at the top of a form after a failed submit (links jump to each field). */
export function ErrorSummary({ errors, summaryRef }: { errors: Record<string, string>; summaryRef: React.RefObject<HTMLDivElement | null> }) {
  const entries = Object.entries(errors);
  if (entries.length === 0) return null;
  return (
    <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-lg border border-risk-high/30 bg-risk-high-bg p-4">
      <p className="text-sm font-semibold text-risk-high">
        Please fix {entries.length === 1 ? "the following field" : `the following ${entries.length} fields`}:
      </p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-risk-high">
        {entries.map(([field, message]) => (
          <li key={field}>
            <a href={`#${field}`} className="underline underline-offset-2">
              {message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
