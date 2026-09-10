"use client";

import { Button, Col, Row, Typography } from "antd";
import { useState } from "react";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductCard from "@/components/products/ProductCard";

const { Title, Paragraph, Text } = Typography;

const BATCH_SIZE = 12;

export default function ProductsPageContent() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <>
      <div className="page-banner">
        <Title level={1} style={{ marginBottom: 4 }}>
          All Products
        </Title>
        <Paragraph type="secondary" style={{ maxWidth: 560, margin: "0 auto" }}>
          {categories.length} categories, {products.length}+ items — browse the full
          catalogue below or filter by category.
        </Paragraph>
      </div>

      <div className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <CategoryFilter />
          </Col>
          <Col xs={24} md={18}>
            <Row gutter={[20, 20]}>
              {visibleProducts.map((product, index) => (
                <Col xs={24} sm={12} lg={8} key={product.id}>
                  <ProductCard product={product} priority={index < 3} />
                </Col>
              ))}
            </Row>

            {hasMore && (
              <div style={{ textAlign: "center", marginTop: 32 }}>
                <Text type="secondary" style={{ display: "block", marginBottom: 12 }}>
                  Showing {visibleProducts.length} of {products.length}
                </Text>
                <Button
                  size="large"
                  onClick={() =>
                    setVisibleCount((count) => Math.min(count + BATCH_SIZE, products.length))
                  }
                >
                  Load More
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
}
