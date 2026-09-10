"use client";

import { MenuOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, Layout, Menu, Space, Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { categories } from "@/lib/data/categories";
import { useCart } from "@/lib/cart/CartContext";
import { contactDetails, siteName } from "@/lib/theme";

const { Header } = Layout;

function useNavItems() {
  return useMemo(
    () => [
      { key: "/", label: <Link href="/">Home</Link> },
      {
        key: "/products",
        label: <Link href="/products">Products</Link>,
        children: categories.map((category) => ({
          key: `/products/${category.slug}`,
          label: <Link href={`/products/${category.slug}`}>{category.name}</Link>,
        })),
      },
      { key: "/about", label: <Link href="/about">About</Link> },
      { key: "/contact", label: <Link href="/contact">Contact</Link> },
    ],
    []
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const items = useNavItems();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { itemCount } = useCart();

  const selectedKey = pathname.startsWith("/products")
    ? "/products"
    : pathname === "/"
      ? "/"
      : pathname;

  return (
    <Header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo">
          <Typography.Title level={3} style={{ margin: 0, color: "var(--color-ink)" }}>
            {siteName}
          </Typography.Title>
        </Link>

        <Menu
          mode="horizontal"
          items={items}
          selectedKeys={[selectedKey]}
          className="site-header__menu"
        />

        <Space className="site-header__actions">
          <a href={`tel:${contactDetails.phonePrimary.replace(/\s/g, "")}`} className="site-header__phone">
            <PhoneOutlined /> {contactDetails.phonePrimary}
          </a>
          <Link href="/cart" aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}>
            <Badge count={itemCount} size="small" offset={[-2, 2]}>
              <Button icon={<ShoppingCartOutlined />} shape="circle" />
            </Badge>
          </Link>
          <Link href="/contact">
            <Button type="primary">Enquire Now</Button>
          </Link>
          <Button
            className="site-header__burger"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          />
        </Space>
      </div>

      <Drawer
        title={siteName}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="inline"
          items={items}
          selectedKeys={[selectedKey]}
          onClick={() => setDrawerOpen(false)}
        />
        <Space direction="vertical" style={{ width: "100%", marginTop: 16 }}>
          <Link href="/cart" onClick={() => setDrawerOpen(false)}>
            <Button icon={<ShoppingCartOutlined />} block>
              View Cart {itemCount > 0 ? `(${itemCount})` : ""}
            </Button>
          </Link>
          <Link href="/contact" onClick={() => setDrawerOpen(false)}>
            <Button type="primary" block>
              Enquire Now
            </Button>
          </Link>
        </Space>
      </Drawer>
    </Header>
  );
}
