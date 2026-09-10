"use client";

import "@ant-design/v5-patch-for-react-19";
import { App, ConfigProvider } from "antd";
import type { ReactNode } from "react";
import { CartProvider } from "@/lib/cart/CartContext";
import { theme } from "@/lib/theme";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <App>
        <CartProvider>{children}</CartProvider>
      </App>
    </ConfigProvider>
  );
}
