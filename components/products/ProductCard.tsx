"use client";

import { MessageOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { App, Badge, Button, Card, Modal, Space, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { getCategoryBySlug } from "@/lib/data/categories";
import type { Product } from "@/lib/data/products";
import { useCart } from "@/lib/cart/CartContext";
import EnquiryForm from "@/components/contact/EnquiryForm";

const { Text, Paragraph } = Typography;

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const discountPercent = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );
  const category = getCategoryBySlug(product.categorySlug);
  const { addItem } = useCart();
  const { message } = App.useApp();

  const handleAddToCart = () => {
    addItem(product.id, 1);
    message.success(`Added "${product.name}" to cart`);
  };

  const card = (
    <Card
      className="product-card"
      hoverable
      cover={
        <div className="product-card__cover">
          {category && (
            <Image
              src={category.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
        </div>
      }
    >
      <Card.Meta
        title={product.name}
        description={
          <Paragraph type="secondary" ellipsis={{ rows: 2 }} style={{ marginBottom: 12 }}>
            {product.description}
          </Paragraph>
        }
      />
      <div className="product-card__price">
        <Text strong style={{ fontSize: 18 }}>
          ₹{product.discountPrice}
        </Text>
        <del>₹{product.price}</del>
      </div>
      <Space.Compact block style={{ marginTop: 12 }}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          style={{ flex: 1 }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          icon={<MessageOutlined />}
          onClick={() => setOpen(true)}
          aria-label={`Enquire about ${product.name}`}
        />
      </Space.Compact>
    </Card>
  );

  return (
    <Badge.Ribbon
      text={product.badge ?? `${discountPercent}% off`}
      color={product.badge ? "#D4AF37" : "#B3122A"}
    >
      {card}
      <Modal
        title={`Enquire about ${product.name}`}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnHidden
      >
        <EnquiryForm
          prefillMessage={`Hi, I'd like to know more about ${product.name}.`}
          onSubmitted={() => setOpen(false)}
        />
      </Modal>
    </Badge.Ribbon>
  );
}
