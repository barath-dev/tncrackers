"use client";

import { Col, Row, Typography } from "antd";
import { categories } from "@/lib/data/categories";
import { products } from "@/lib/data/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductCard from "@/components/products/ProductCard";

const { Title, Paragraph } = Typography;

export default function ProductsPageContent() {
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
              {products.map((product) => (
                <Col xs={24} sm={12} lg={8} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
