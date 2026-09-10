import type { ThemeConfig } from "antd";

export const siteName = "TNCrackers";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#B3122A",
    colorInfo: "#B3122A",
    colorLink: "#B3122A",
    colorWarning: "#D4AF37",
    borderRadius: 10,
    fontFamily:
      "var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      bodyBg: "#fbf7f2",
      footerBg: "#1a1015",
    },
    Menu: {
      itemSelectedColor: "#B3122A",
      horizontalItemSelectedColor: "#B3122A",
    },
    Button: {
      borderRadius: 8,
      fontWeight: 600,
    },
    Card: {
      borderRadiusLG: 16,
    },
  },
};

export const contactDetails = {
  phonePrimary: "+91 90000 00000",
  phoneSecondary: "+91 90000 00001",
  email: "info@tncrackers.example.com",
  whatsapp: "+91 90000 00000",
  address: "Fireworks Market Road, Sivakasi, Virudhunagar District, Tamil Nadu, India",
  hours: "Open daily · 9:00 AM – 8:00 PM",
};
