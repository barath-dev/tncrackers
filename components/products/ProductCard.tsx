"use client";

import { FireOutlined, MessageOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Modal, Typography } from "antd";
import { useState } from "react";
import type { Product } from "@/lib/data/products";
import EnquiryForm from "@/components/contact/EnquiryForm";

const { Text, Paragraph } = Typography;

const gradients = [
  "linear-gradient(135deg, #B3122A, #D4552F)",
  "linear-gradient(135deg, #6C0D1F, #B3122A)",
  "linear-gradient(135deg, #D4552F, #D4AF37)",
  "linear-gradient(135deg, #8C1030, #C4265A)",
];

function gradientFor(id: string) {
  const index = id.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % gradients.length;
  return gradients[index];
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const discountPercent = Math.round(
    ((product.price - product.discountPrice) / product.price) * 100
  );

  const card = (
    <Card
      className="product-card"
      hoverable
      cover={
        <div className="product-card__cover" style={{ background: gradientFor(product.id) }}>
          <FireOutlined />
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
      <Button
        type="primary"
        icon={<MessageOutlined />}
        block
        style={{ marginTop: 12 }}
        onClick={() => setOpen(true)}
      >
        Enquire
      </Button>
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
