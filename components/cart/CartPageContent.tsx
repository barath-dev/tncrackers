"use client";

import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Empty, InputNumber, Row, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart/CartContext";

const { Title, Text, Paragraph } = Typography;

export default function CartPageContent() {
  const { lines, itemCount, subtotal, mrpTotal, savings, setQuantity, removeItem } = useCart();

  if (lines.length === 0) {
    return (
      <div className="section">
        <Empty description="Your cart is empty">
          <Link href="/products">
            <Button type="primary" icon={<ShoppingOutlined />}>
              Browse Products
            </Button>
          </Link>
        </Empty>
      </div>
    );
  }

  return (
    <div className="section">
      <Title level={1} style={{ marginBottom: 4 }}>
        Your Cart
      </Title>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>
        {itemCount} item{itemCount === 1 ? "" : "s"} in your cart. Review your order, then
        proceed to checkout.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            {lines.map((line) => (
              <Card key={line.productId}>
                <div className="cart-line">
                  <div className="cart-line__photo">
                    <Image src={line.image} alt={line.product.name} fill sizes="96px" />
                  </div>
                  <div className="cart-line__info">
                    <Text strong>{line.product.name}</Text>
                    <div className="product-card__price" style={{ marginTop: 4 }}>
                      <Text strong>₹{line.product.discountPrice}</Text>
                      <del>₹{line.product.price}</del>
                    </div>
                  </div>
                  <div className="cart-line__qty">
                    <Space.Compact>
                      <Button
                        icon={<MinusOutlined />}
                        onClick={() => setQuantity(line.productId, line.quantity - 1)}
                        aria-label={`Decrease quantity of ${line.product.name}`}
                      />
                      <InputNumber
                        min={1}
                        value={line.quantity}
                        onChange={(value) => setQuantity(line.productId, value ?? 1)}
                        style={{ width: 56, textAlign: "center" }}
                        controls={false}
                      />
                      <Button
                        icon={<PlusOutlined />}
                        onClick={() => setQuantity(line.productId, line.quantity + 1)}
                        aria-label={`Increase quantity of ${line.product.name}`}
                      />
                    </Space.Compact>
                  </div>
                  <div className="cart-line__total">
                    <Text strong>₹{line.lineTotal}</Text>
                  </div>
                  <Button
                    className="cart-line__delete"
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeItem(line.productId)}
                    aria-label={`Remove ${line.product.name} from cart`}
                  />
                </div>
              </Card>
            ))}
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              Order Summary
            </Title>
            <Space direction="vertical" size="small" style={{ width: "100%" }}>
              <div className="cart-summary__row">
                <Text type="secondary">MRP Total</Text>
                <Text>₹{mrpTotal}</Text>
              </div>
              <div className="cart-summary__row">
                <Text type="secondary">You Save</Text>
                <Text style={{ color: "var(--color-success)" }}>−₹{savings}</Text>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <Text strong>Total</Text>
                <Text strong style={{ fontSize: 18 }}>
                  ₹{subtotal}
                </Text>
              </div>
            </Space>
            <Link href="/checkout">
              <Button type="primary" size="large" block style={{ marginTop: 16 }}>
                Proceed to Checkout
              </Button>
            </Link>
            <Text type="secondary" style={{ display: "block", textAlign: "center", fontSize: 12, marginTop: 8 }}>
              🎁 Every order is checked and packed specially for you
            </Text>
            <Link href="/products">
              <Button type="link" block style={{ marginTop: 4 }}>
                Continue Shopping
              </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
