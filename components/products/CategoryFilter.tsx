"use client";

import { Menu } from "antd";
import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  const active = activeSlug ?? "all";
  const items = [
    { key: "all", label: <Link href="/products">All Products</Link> },
    ...categories.map((category) => ({
      key: category.slug,
      label: <Link href={`/products/${category.slug}`}>{category.name}</Link>,
    })),
  ];

  return (
    <>
      {/* Desktop/tablet: a full inline list down the side. */}
      <Menu
        mode="inline"
        items={items}
        selectedKeys={[active]}
        className="category-filter category-filter--desktop"
        style={{ borderRadius: 12, border: "1px solid var(--color-parchment-line)" }}
      />

      {/* Mobile: the same list as one line, so it doesn't push the
          product grid below the fold before someone can pick a category. */}
      <div className="category-chips">
        <Link
          href="/products"
          className={`category-chip ${active === "all" ? "category-chip--active" : ""}`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className={`category-chip ${active === category.slug ? "category-chip--active" : ""}`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </>
  );
}
