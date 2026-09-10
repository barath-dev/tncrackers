import type { ThemeConfig } from "antd";

export const siteName = "TNCrackers";

/**
 * Core palette — drawn from the moment just after a shell bursts: an ink
 * night sky, one burnt-ember accent, and a cooler afterglow violet, with
 * antique brass and warm paper standing in for the usual bright red/gold
 * "festival sale" look. This is the single source of truth: the same hex
 * values are mirrored as CSS custom properties in app/globals.css.
 */
export const palette = {
  ink: "#17141C", // night sky — footer, hero scrim, dark text
  ember: "#B54B1F", // primary accent — CTAs, prices, links
  emberDeep: "#8F3814", // ember hover/active
  plum: "#5B3E6B", // secondary accent — used with intent, not decoration
  brass: "#A9863C", // antique gold — fine dividers, small accents only
  parchment: "#F3EBDD", // warm paper background
  parchmentLine: "#E4D7C2", // hairlines/borders on parchment
  ash: "#6B6058", // secondary text on light backgrounds
  success: "#4B7A5B", // muted forest green — savings, confirmations
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
  phonePrimary: "+91 97878 75717",
  email: "barathwaj1153@gmail.com",
  whatsapp: "+91 97878 75717",
  address: "Fireworks Market Road, Sivakasi, Virudhunagar District, Tamil Nadu, India",
  hours: "Mon–Sat · 9:00 AM – 5:00 PM",
};
