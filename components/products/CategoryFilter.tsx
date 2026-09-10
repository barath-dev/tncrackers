"use client";

import { Menu } from "antd";
import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  const items = [
    { key: "all", label: <Link href="/products">All Products</Link> },
    ...categories.map((category) => ({
      key: category.slug,
      label: <Link href={`/products/${category.slug}`}>{category.name}</Link>,
    })),
  ];

  return (
    <Menu
      mode="inline"
      items={items}
      selectedKeys={[activeSlug ?? "all"]}
      style={{ borderRadius: 12, border: "1px solid var(--color-parchment-line)" }}
    />
  );
}
