import type { Metadata } from "next";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "All Products — Digeesh Crackers",
  description: "Browse the full Digeesh Crackers catalogue across every category.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
