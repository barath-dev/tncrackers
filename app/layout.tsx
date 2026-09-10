import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Layout } from "antd";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ThemeProvider from "@/components/providers/ThemeProvider";
import BackToTop from "@/components/ui/BackToTop";
import { siteName } from "@/lib/theme";
import "./globals.css";

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteName} — Festival Fireworks Catalogue`,
  description:
    "Browse sparklers, ground spinners, aerial rockets, and combo packs from TNCrackers — a professional online fireworks catalogue.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${heading.variable} ${body.variable}`}
    >
      <body>
        <AntdRegistry>
          <ThemeProvider>
            <Layout className="site-shell">
              <SiteHeader />
              {/* Plain <main> instead of antd's Layout.Content: accessing a
                  sub-component of a "use client" antd module (Layout.Content)
                  from this Server Component resolves to undefined under
                  Turbopack's RSC client-reference handling. */}
              <main className="site-content">{children}</main>
              <SiteFooter />
              <BackToTop />
            </Layout>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
