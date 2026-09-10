"use client";

import { MessageOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { App, Button, Card, Modal, Space, Typography } from "antd";
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
  const { lines, addItem, setQuantity } = useCart();
  const { message } = App.useApp();

  const quantityInCart = lines.find((line) => line.productId === product.id)?.quantity ?? 0;

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
        {product.badge ? (
          <span className="tag tag--plum">{product.badge}</span>
        ) : (
          <span className="tag tag--ember">{discountPercent}% off</span>
        )}
      </div>
      <Space.Compact block style={{ marginTop: 12 }}>
        {quantityInCart > 0 ? (
          <Space.Compact style={{ flex: 1 }}>
            <Button
              icon={<MinusOutlined />}
              onClick={() => setQuantity(product.id, quantityInCart - 1)}
              aria-label={`Decrease quantity of ${product.name}`}
            />
            <Button className="product-card__qty" disabled>
              {quantityInCart}
            </Button>
            <Button
              icon={<PlusOutlined />}
              onClick={() => setQuantity(product.id, quantityInCart + 1)}
              aria-label={`Increase quantity of ${product.name}`}
            />
          </Space.Compact>
        ) : (
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            style={{ flex: 1 }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
        <Button
          icon={<MessageOutlined />}
          onClick={() => setOpen(true)}
          aria-label={`Enquire about ${product.name}`}
        />
      </Space.Compact>
    </Card>
  );

  return (
    <>
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
    </>
  );
}
