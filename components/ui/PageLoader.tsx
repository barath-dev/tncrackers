import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { siteName } from "@/lib/theme";

export default function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      <span className="page-loader__label">
        {label} {siteName}…
      </span>
    </div>
  );
}
