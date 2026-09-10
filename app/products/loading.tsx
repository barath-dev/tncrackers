import { Col, Row } from "antd";
import ProductGridSkeleton from "@/components/products/ProductGridSkeleton";

export default function Loading() {
  return (
    <>
      <div className="page-banner">
        <div className="skeleton-line" style={{ width: 220, height: 32, margin: "0 auto 12px" }} />
        <div className="skeleton-line" style={{ width: 320, height: 16, margin: "0 auto" }} />
      </div>
      <div className="section">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <div className="skeleton-card" style={{ height: 420 }} />
          </Col>
          <Col xs={24} md={18}>
            <ProductGridSkeleton count={9} />
          </Col>
        </Row>
      </div>
    </>
  );
}
