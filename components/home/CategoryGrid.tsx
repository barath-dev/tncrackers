"use client";

import { Card, Col, Row, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data/categories";

const { Title, Paragraph, Text } = Typography;

export default function CategoryGrid() {
  return (
    <section className="section">
      <div className="section__header">
        <Title level={2}>Shop by Category</Title>
        <Paragraph type="secondary">
          Fifteen curated categories covering every kind of festival fireworks display.
        </Paragraph>
      </div>
      <Row gutter={[20, 20]}>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Col xs={12} sm={8} md={6} key={category.slug}>
              <Link href={`/products/${category.slug}`}>
                <Card
                  className="category-card"
                  styles={{ body: { padding: 16 } }}
                  cover={
                    <div className="category-card__photo">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="category-card__badge">
                        <Icon />
                      </div>
                    </div>
                  }
                >
                  <Text strong>{category.name}</Text>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}
