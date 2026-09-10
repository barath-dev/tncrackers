import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { siteName } from "@/lib/theme";

export const metadata: Metadata = {
  title: `Contact & Enquiry — ${siteName}`,
  description: `Send an enquiry to ${siteName} for pricing, availability, or bulk orders.`,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
