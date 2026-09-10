"use client";

import { CheckCircleFilled, MessageOutlined, ShopOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { siteName } from "@/lib/theme";

const { Title, Paragraph } = Typography;

export default function HeroSection() {
  return (
    <section className="hero">
      <Image
        src="/images/wide/hero-fireworks.jpg"
        alt="Colourful fireworks bursting over a night sky"
        fill
        priority
        sizes="100vw"
        className="hero__photo"
      />
      <div className="hero__scrim" />
      <div className="hero__inner">
        <div className="hero__copy">
          <Title level={1} style={{ color: "#fff", marginTop: 0 }}>
            Celebrate every occasion with {siteName}
          </Title>
          <Paragraph style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, maxWidth: 480 }}>
            Browse our full catalogue of sparklers, ground spinners, aerial
            rockets, and combo packs — then send us an enquiry and our team
            will help you put together the perfect order.
          </Paragraph>
          <Space size="middle" wrap>
            <Link href="/products">
              <Button type="primary" size="large" icon={<ShopOutlined />}>
                Browse Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="large"
                icon={<MessageOutlined />}
                style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
              >
                Send an Enquiry
              </Button>
            </Link>
          </Space>
          <Space size="large" wrap className="hero__trust">
            <span>
              <CheckCircleFilled /> Packed specially for you
            </span>
            <span>
              <CheckCircleFilled /> Checked before every dispatch
            </span>
            <span>
              <CheckCircleFilled /> Trusted by festival shoppers
            </span>
          </Space>
        </div>
      </div>
    </section>
  );
}
