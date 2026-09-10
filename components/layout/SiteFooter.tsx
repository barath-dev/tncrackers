"use client";

import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { contactDetails, siteName } from "@/lib/theme";

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <Footer className="site-footer">
      <Row gutter={[32, 32]} className="site-footer__grid">
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            {siteName}
          </Title>
          <Paragraph className="site-footer__muted">
            A curated online showcase of festival fireworks — sparklers, ground
            spinners, aerial shells, and combo packs for every celebration.
          </Paragraph>
          <Space size="middle">
            <a href="#" aria-label="Facebook" className="site-footer__social">
              <FacebookOutlined />
            </a>
            <a href="#" aria-label="Instagram" className="site-footer__social">
              <InstagramOutlined />
            </a>
            <a
              href={`https://wa.me/${contactDetails.whatsapp.replace(/[^\d]/g, "")}`}
              aria-label="WhatsApp"
              className="site-footer__social"
            >
              <WhatsAppOutlined />
            </a>
          </Space>
        </Col>

        <Col xs={24} md={8}>
          <Title level={5} style={{ color: "#fff" }}>
            Shop by Category
          </Title>
          <Row gutter={[8, 8]}>
            {categories.slice(0, 8).map((category) => (
              <Col span={12} key={category.slug}>
                <Link href={`/products/${category.slug}`} className="site-footer__link">
                  {category.name}
                </Link>
              </Col>
            ))}
          </Row>
        </Col>

        <Col xs={24} md={8}>
          <Title level={5} style={{ color: "#fff" }}>
            Get in Touch
          </Title>
          <Space direction="vertical" size="small">
            <Text className="site-footer__muted">
              <EnvironmentOutlined /> {contactDetails.address}
            </Text>
            <a href={`tel:${contactDetails.phonePrimary.replace(/\s/g, "")}`} className="site-footer__link">
              <PhoneOutlined /> {contactDetails.phonePrimary}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="site-footer__link">
              <MailOutlined /> {contactDetails.email}
            </a>
            <Text className="site-footer__muted">{contactDetails.hours}</Text>
          </Space>
        </Col>
      </Row>

      <Divider className="site-footer__divider" />

      <Paragraph className="site-footer__legal">
        Sale and use of fireworks is regulated and subject to local and
        national restrictions, including licensing and permitted-hours
        requirements. This site is for browsing our catalogue only — please
        use the enquiry form or call us directly to place an order, and
        always follow your local safety guidelines when using fireworks.
      </Paragraph>

      <Text className="site-footer__muted">
        © {year} {siteName}. All rights reserved. Contact details on this
        demo site are placeholders.
      </Text>
    </Footer>
  );
}
