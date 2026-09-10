"use client";

import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { contactDetails } from "@/lib/theme";

const { Title, Paragraph, Text } = Typography;

export default function ContactPageContent() {
  return (
    <>
      <div className="page-banner">
        <Title level={1}>Contact & Enquiry</Title>
        <Paragraph type="secondary" style={{ maxWidth: 560, margin: "0 auto" }}>
          Send us a message and our team will get back to you with pricing
          and availability. This form does not place a live order.
        </Paragraph>
      </div>

      <div className="section">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={10}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Card>
                <Space direction="vertical" size="middle">
                  <Text strong>
                    <PhoneOutlined /> Phone
                  </Text>
                  <Text type="secondary">
                    {contactDetails.phonePrimary} · {contactDetails.phoneSecondary}
                  </Text>

                  <Text strong>
                    <MailOutlined /> Email
                  </Text>
                  <Text type="secondary">{contactDetails.email}</Text>

                  <Text strong>
                    <EnvironmentOutlined /> Address
                  </Text>
                  <Text type="secondary">{contactDetails.address}</Text>

                  <Text strong>
                    <ClockCircleOutlined /> Hours
                  </Text>
                  <Text type="secondary">{contactDetails.hours}</Text>
                </Space>
              </Card>
              <Paragraph type="secondary" style={{ fontSize: 13 }}>
                Contact details shown here are placeholders for this
                portfolio build — replace them with real business details
                before launch.
              </Paragraph>
            </Space>
          </Col>
          <Col xs={24} md={14}>
            <Card>
              <EnquiryForm />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
