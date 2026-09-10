import type { Metadata } from "next";
import AboutPageContent from "@/components/about/AboutPageContent";
import { siteName } from "@/lib/theme";

export const metadata: Metadata = {
  title: `About Us — ${siteName}`,
  description: `Learn more about ${siteName}, an online catalogue for festival fireworks.`,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
