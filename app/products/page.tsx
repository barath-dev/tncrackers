import type { Metadata } from "next";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "All Products — TNCrackers",
  description: "Browse the full TNCrackers catalogue across every category.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
