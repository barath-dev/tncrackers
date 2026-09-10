import { Col, Row } from "antd";

export default function ProductGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <Row gutter={[20, 20]}>
      {Array.from({ length: count }).map((_, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <div className="skeleton-card">
            <div className="skeleton-card__photo" />
            <div className="skeleton-card__body">
              <div className="skeleton-line" style={{ width: "70%" }} />
              <div className="skeleton-line" style={{ width: "100%" }} />
              <div className="skeleton-line" style={{ width: "40%" }} />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
