import { Col, Row } from "antd";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

export default function Loading() {
  return (
    <>
      <div className="skeleton-banner" />
      <div className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <div className="skeleton-card" style={{ height: 420 }} />
          </Col>
          <Col xs={24} md={18}>
            <ProductGridSkeleton count={6} />
          </Col>
        </Row>
      </div>
    </>
  );
}
