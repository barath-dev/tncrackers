"use client";

import { Col, Empty, Row, Typography } from "antd";
import { getCategoryBySlug } from "@/lib/data/categories";
import type { Product } from "@/lib/data/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductCard from "@/components/products/ProductCard";

const { Title, Paragraph } = Typography;

export default function CategoryPageContent({
  categorySlug,
  products,
}: {
  categorySlug: string;
  products: Product[];
}) {
  // Re-look up the category on the client: a component reference (the
  // category icon) can't be passed as a prop across the server/client
  // boundary, but plain data files like this one are safe to import
  // directly from a Client Component.
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  const Icon = category.icon;

  return (
    <>
      <div className="page-banner">
        <div className="category-card__icon" style={{ display: "inline-block" }}>
          <Icon />
        </div>
        <Title level={1} style={{ marginBottom: 4 }}>
          {category.name}
        </Title>
        <Paragraph type="secondary" style={{ maxWidth: 560, margin: "0 auto" }}>
          {category.description}
        </Paragraph>
      </div>

      <div className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <CategoryFilter activeSlug={category.slug} />
          </Col>
          <Col xs={24} md={18}>
            {products.length > 0 ? (
              <Row gutter={[20, 20]}>
                {products.map((product) => (
                  <Col xs={24} sm={12} lg={8} key={product.id}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Empty description="No products in this category yet" />
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
