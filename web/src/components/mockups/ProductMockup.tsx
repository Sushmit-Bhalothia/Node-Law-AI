import type { Product } from "@/content/products";
import { ContractReviewMockup } from "./ContractReviewMockup";
import { DraftingMockup } from "./DraftingMockup";
import { NdaReviewMockup } from "./NdaReviewMockup";

/** Picks the right illustration for a product (set via `mockup` in products.ts). */
export function ProductMockup({ type }: { type: Product["mockup"] }) {
  switch (type) {
    case "nda":
      return <NdaReviewMockup />;
    case "contract":
      return <ContractReviewMockup />;
    case "terms":
    case "privacy":
      return <DraftingMockup variant={type} />;
  }
}
