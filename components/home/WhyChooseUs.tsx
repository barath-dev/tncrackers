"use client";

import { CustomerServiceOutlined, SafetyCertificateOutlined, TagOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import { siteName } from "@/lib/theme";

const { Title, Paragraph } = Typography;

const points = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "Quality You Can Trust",
    description: "Every product in our catalogue is sourced from established, quality-checked manufacturers.",
  },
  {
    icon: <TagOutlined />,
    title: "Fair, Transparent Pricing",
    description: "Clear catalogue pricing with seasonal offers — no hidden charges, no surprises.",
  },
  {
    icon: <CustomerServiceOutlined />,
    title: "Enquiry-First Service",
    description: "Our team responds to every enquiry personally to help you plan the right order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="section__header">
        <Title level={2}>Why Choose {siteName}</Title>
        <Paragraph type="secondary">
          A straightforward, professional way to browse and enquire about
          festival fireworks.
        </Paragraph>
      </div>
      <Row gutter={[24, 24]}>
        {points.map((point) => (
          <Col xs={24} sm={8} key={point.title}>
            <Card className="why-card">
              <div className="category-card__icon">{point.icon}</div>
              <Title level={4}>{point.title}</Title>
              <Paragraph type="secondary">{point.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
