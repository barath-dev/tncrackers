"use client";

import { EnvironmentOutlined, SafetyCertificateOutlined, TeamOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { siteName } from "@/lib/theme";

const { Title, Paragraph } = Typography;

const highlights = [
  {
    icon: <TeamOutlined />,
    title: "Family-Run Catalogue",
    description:
      "TNCrackers started as a small family effort to make festival shopping simpler, and has grown into a full seasonal catalogue.",
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Compliance First",
    description:
      "We work only with licensed manufacturers and follow all applicable regulations for the sale and transport of fireworks.",
  },
  {
    icon: <EnvironmentOutlined />,
    title: "Rooted in Sivakasi",
    description:
      "Based in Tamil Nadu's fireworks manufacturing belt, close to the source of the products in our catalogue.",
  },
];

export default function AboutPageContent() {
  return (
    <>
      <div className="page-banner">
        <Title level={1}>About {siteName}</Title>
        <Paragraph type="secondary" style={{ maxWidth: 640, margin: "0 auto" }}>
          We built {siteName} to give festival shoppers a clean, professional
          way to browse fireworks online — from single sparklers to full
          family combo packs.
        </Paragraph>
      </div>

      <div className="section">
        <Row gutter={[24, 24]}>
          {highlights.map((item) => (
            <Col xs={24} sm={8} key={item.title}>
              <Card className="why-card">
                <div className="category-card__icon">{item.icon}</div>
                <Title level={4}>{item.title}</Title>
                <Paragraph type="secondary">{item.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="section section--tight">
        <Title level={3}>A Note on Compliance</Title>
        <Paragraph type="secondary">
          The sale, storage, and use of fireworks are regulated activities in
          most regions, including restrictions on online direct sale, permitted
          hours of use, and required safety distances. {siteName} lists products
          for browsing purposes and handles every order through a direct
          enquiry — by phone, WhatsApp, or the contact form — so our team can
          confirm availability and guide you through any local requirements
          before an order is finalised.
        </Paragraph>
        <Paragraph type="secondary">
          Always purchase fireworks from licensed sellers, follow the safety
          instructions printed on each product, and supervise children closely
          during use.
        </Paragraph>
      </div>
    </>
  );
}
