"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

/** Pre-selects a product when arriving from a "Request access" link (e.g. /contact?product=nda-review). */
export function ContactFormFromUrl() {
  const params = useSearchParams();
  return <ContactForm key={params.get("product") ?? "demo"} defaultInterest={params.get("product") ?? "demo"} />;
}
