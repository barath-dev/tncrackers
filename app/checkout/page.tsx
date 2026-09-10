import type { Metadata } from "next";
import CheckoutPageContent from "@/components/checkout/CheckoutPageContent";
import { siteName } from "@/lib/theme";

export const metadata: Metadata = {
  title: `Checkout — ${siteName}`,
  description: "Complete your order — demo checkout, no payment is processed.",
};

export default function CheckoutPage() {
  return <CheckoutPageContent />;
}
