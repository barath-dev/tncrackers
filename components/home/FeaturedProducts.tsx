"use client";

import { Col, Row, Typography } from "antd";
import { getFeaturedProducts } from "@/lib/data/products";
import ProductCard from "@/components/products/ProductCard";

const { Title, Paragraph } = Typography;

export default function FeaturedProducts() {
  const products = getFeaturedProducts(8);

  return (
    <section className="section">
      <div className="section__header">
        <Title level={2}>Bestsellers</Title>
        <Paragraph type="secondary">
          The most enquired-about picks across our catalogue this season.
        </Paragraph>
      </div>
      <Row gutter={[20, 20]}>
        {products.map((product, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <ProductCard product={product} priority={index < 4} />
          </Col>
        ))}
      </Row>
    </section>
  );
}
