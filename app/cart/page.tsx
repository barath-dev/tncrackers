import type { Metadata } from "next";
import CartPageContent from "@/components/cart/CartPageContent";
import { siteName } from "@/lib/theme";

export const metadata: Metadata = {
  title: `Your Cart — ${siteName}`,
  description: "Review the items in your cart before checking out.",
};

export default function CartPage() {
  return <CartPageContent />;
}
