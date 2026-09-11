import type { ThemeConfig } from "antd";

export const siteName = "Digeesh Crackers";

/**
 * Core palette — bright and festive: vivid orange, magenta-pink, and gold
 * against a deep vivid-purple night sky and a bright warm-white
 * background. This is the single source of truth: the same hex values
 * are mirrored as CSS custom properties in app/globals.css.
 */
export const palette = {
  ink: "#2E1065", // deep vivid purple night sky — footer, hero scrim
  ember: "#D84315", // primary accent — CTAs, prices, links
  emberDeep: "#B23610", // ember hover/active
  plum: "#D6266F", // secondary accent — used with intent, not decoration
  brass: "#C98A00", // vivid gold — fine dividers, small accents
  parchment: "#FFF9F2", // bright warm-white background
  parchmentLine: "#F2DFC0", // hairlines/borders on parchment
  ash: "#6B6058", // secondary text on light backgrounds
  success: "#16A34A", // vivid green — savings, confirmations
};

export const theme: ThemeConfig = {
  token: {
    colorPrimary: palette.ember,
    colorInfo: palette.plum,
    colorLink: palette.ember,
    colorWarning: palette.brass,
    colorTextBase: palette.ink,
    borderRadius: 8,
    fontFamily:
      "var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Layout: {
      headerBg: "#ffffff",
      bodyBg: palette.parchment,
      footerBg: palette.ink,
    },
    Menu: {
      itemSelectedColor: palette.ember,
      horizontalItemSelectedColor: palette.ember,
    },
    Button: {
      borderRadius: 6,
      fontWeight: 600,
      colorPrimaryHover: palette.emberDeep,
      colorPrimaryActive: palette.emberDeep,
    },
    Card: {
      borderRadiusLG: 12,
    },
  },
};

export const contactDetails = {
  phonePrimary: "+91 90081 19451",
  email: "digeeshcrackers@gmail.com",
  whatsapp: "+91 90081 19451",
  address: "Fireworks Market Road, Sivakasi, Virudhunagar District, Tamil Nadu, India",
  hours: "Mon–Sat · 9:00 AM – 5:00 PM",
};
