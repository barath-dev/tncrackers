"use client";

import { App, Button, Form, Input } from "antd";
import { useState } from "react";

const { TextArea } = Input;

interface EnquiryFormValues {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export default function EnquiryForm({
  prefillMessage,
  onSubmitted,
}: {
  prefillMessage?: string;
  onSubmitted?: () => void;
}) {
  const [form] = Form.useForm<EnquiryFormValues>();
  const { message } = App.useApp();
  const [submitting, setSubmitting] = useState(false);

  const handleFinish = async (values: EnquiryFormValues) => {
    setSubmitting(true);
    // This is a frontend-only demo: no backend endpoint exists yet, so we
    // simply log the enquiry, simulate a short delay, and confirm receipt.
    console.info("New enquiry submitted:", values);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    message.success("Thanks! We've received your enquiry and will get back to you shortly.");
    form.resetFields();
    onSubmitted?.();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ message: prefillMessage }}
      onFinish={handleFinish}
      requiredMark={false}
    >
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
        name="message"
        label="Message"
        rules={[{ required: true, message: "Let us know what you're looking for" }]}
      >
        <TextArea rows={4} placeholder="Tell us what you'd like to order or ask about" />
      </Form.Item>

      <Form.Item style={{ marginBottom: 0 }}>
        <Button type="primary" htmlType="submit" size="large" block loading={submitting}>
          Send Enquiry
        </Button>
      </Form.Item>
    </Form>
  );
}
