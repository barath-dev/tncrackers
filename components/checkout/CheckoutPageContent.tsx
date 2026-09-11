"use client";

import { CheckCircleFilled, ShoppingOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Form,
  Input,
  Radio,
  Result,
  Row,
  Space,
  Typography,
} from "antd";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart/CartContext";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

interface CheckoutValues {
  name: string;
  phone: string;
  email?: string;
  address: string;
  paymentMethod: "cod" | "upi";
}

function generateOrderId() {
  return `DC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export default function CheckoutPageContent() {
  const { lines, itemCount, subtotal, mrpTotal, savings, clearCart } = useCart();
  const [form] = Form.useForm<CheckoutValues>();
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleFinish = async (values: CheckoutValues) => {
    setSubmitting(true);
    // Frontend-only MVP: there is no backend or payment gateway wired up
    // yet. We simulate order placement here so the flow can be demoed
    // end-to-end, then clear the cart as a real checkout would.
    console.info("New order placed (demo, no backend):", { values, lines, subtotal });
    await new Promise((resolve) => setTimeout(resolve, 700));
    setOrderId(generateOrderId());
    clearCart();
    setSubmitting(false);
  };

  if (orderId) {
    return (
      <div className="section">
        <Result
          status="success"
          icon={<CheckCircleFilled style={{ color: "var(--color-success)" }} />}
          title="Order placed!"
          subTitle={
            <>
              Your order reference is <Text strong>{orderId}</Text>. Our team will call you
              shortly to confirm details. (This is a demo checkout — no payment has actually
              been taken.)
            </>
          }
          extra={
            <Link href="/products">
              <Button type="primary">Continue Shopping</Button>
            </Link>
          }
        />
      </div>
    );
  }

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
        Checkout
      </Title>
      <Paragraph type="secondary" style={{ marginBottom: 24 }}>
        This is a demo checkout — no account needed, and no payment is actually processed.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={14}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              Delivery Details
            </Title>
            <Form layout="vertical" form={form} onFinish={handleFinish} requiredMark={false}>
              <Form.Item
                name="name"
                label="Full name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your name" size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Mobile number"
                rules={[
                  { required: true, message: "Please enter your mobile number" },
                  { pattern: /^[0-9+\s-]{8,15}$/, message: "Enter a valid phone number" },
                ]}
              >
                <Input placeholder="e.g. 90000 00000" size="large" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email (optional)"
                rules={[{ type: "email", message: "Enter a valid email address" }]}
              >
                <Input placeholder="you@example.com" size="large" />
              </Form.Item>

              <Form.Item
                name="address"
                label="Delivery address"
                rules={[{ required: true, message: "Please enter a delivery address" }]}
              >
                <TextArea rows={3} placeholder="House/street, area, city, PIN code" />
              </Form.Item>

              <Form.Item
                name="paymentMethod"
                label="Payment method"
                initialValue="cod"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="cod">Cash on delivery</Radio>
                    <Radio value="upi">Pay via UPI / bank transfer (on confirmation call)</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button type="primary" htmlType="submit" size="large" block loading={submitting}>
                  Place Order · ₹{subtotal}
                </Button>
                <Text
                  type="secondary"
                  style={{ display: "block", textAlign: "center", fontSize: 12, marginTop: 8 }}
                >
                  🎁 Freshly checked and packed specially for you before dispatch
                </Text>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={10}>
          <Card>
            <Title level={4} style={{ marginTop: 0 }}>
              Order Summary
            </Title>
            <Space direction="vertical" size={4} style={{ width: "100%" }}>
              {lines.map((line) => (
                <div className="checkout-summary-line" key={line.productId}>
                  <Text type="secondary">
                    {line.product.name} × {line.quantity}
                  </Text>
                  <Text>₹{line.lineTotal}</Text>
                </div>
              ))}
            </Space>
            <Divider style={{ margin: "12px 0" }} />
            <div className="cart-summary__row">
              <Text type="secondary">MRP Total</Text>
              <Text>₹{mrpTotal}</Text>
            </div>
            <div className="cart-summary__row">
              <Text type="secondary">You Save</Text>
              <Text style={{ color: "var(--color-success)" }}>−₹{savings}</Text>
            </div>
            <div className="cart-summary__row cart-summary__row--total">
              <Text strong>Total ({itemCount} items)</Text>
              <Text strong style={{ fontSize: 18 }}>
                ₹{subtotal}
              </Text>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
