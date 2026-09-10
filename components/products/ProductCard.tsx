"use client";

import { MessageOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { App, Button, Card, Modal, Typography } from "antd";
import Image from "next/image";
import { useState } from "react";
import { getCategoryBySlug } from "@/lib/data/categories";
import type { Product } from "@/lib/data/products";
import { useCart } from "@/lib/cart/CartContext";
import EnquiryForm from "@/components/contact/EnquiryForm";

const { Text, Paragraph } = Typography;

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  /** Set for the first few cards above the fold to improve LCP. */
  priority?: boolean;
}) {
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
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          <div className="product-card__cta">
            {quantityInCart > 0 ? (
              <div className="qty-pill">
                <button
                  type="button"
                  onClick={() => setQuantity(product.id, quantityInCart - 1)}
                  aria-label={`Decrease quantity of ${product.name}`}
                >
                  <MinusOutlined />
                </button>
                <span>{quantityInCart}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(product.id, quantityInCart + 1)}
                  aria-label={`Increase quantity of ${product.name}`}
                >
                  <PlusOutlined />
                </button>
              </div>
            ) : (
              <button type="button" className="add-pill" onClick={handleAddToCart}>
                Add
              </button>
            )}
          </div>
        </div>
      }
    >
      <div className="product-card__head">
        <Paragraph strong ellipsis={{ rows: 1 }} style={{ marginBottom: 0, flex: 1 }}>
          {product.name}
        </Paragraph>
        <Button
          type="text"
          size="small"
          icon={<MessageOutlined />}
          onClick={() => setOpen(true)}
          aria-label={`Enquire about ${product.name}`}
        />
      </div>
      <div className="product-card__price">
        <Text strong style={{ fontSize: 17 }}>
          ₹{product.discountPrice}
        </Text>
        <del>₹{product.price}</del>
        {product.badge ? (
          <span className="tag tag--plum">{product.badge}</span>
        ) : (
          <span className="tag tag--ember">{discountPercent}% off</span>
        )}
      </div>
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
