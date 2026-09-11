# Digeesh Crackers

A professional, frontend-only portfolio site for a festival fireworks
catalogue, built with **Next.js (App Router)**, **TypeScript**, and
**Ant Design**.

This project is a from-scratch redesign inspired by the general category
structure of online fireworks catalogues — all copy, product data, and
pricing in this repository are original and were created for this project
(no content or images were copied from any third-party site). Product
photography is real, openly-licensed stock photography from Wikimedia
Commons — see [Photo credits](#photo-credits).

## Features

- Home page with a full-bleed photo hero, category showcase, and bestseller
  highlights
- Full product catalogue across 15 categories (`/products`,
  `/products/[category]`) with mock/static data and real category photos
- **Cart & checkout MVP** — add to cart, adjust quantities, guest checkout
  (no login) with a delivery-details form and a payment-method choice
  (cash on delivery / UPI on confirmation call). This is a frontend-only
  demo: no backend or payment gateway is wired up, and no real payment is
  taken — "placing an order" simulates success and clears the cart.
- About and Contact pages, including an "Enquiry" form (Ant Design `Form`,
  client-side validation only — no backend is wired up)
- Branded loading states (`loading.tsx` + skeleton grids) for route
  transitions, plus a scroll-to-top button
- Ant Design theming via `ConfigProvider`, SSR-safe via
  `@ant-design/nextjs-registry`
- Fully responsive (mobile nav drawer, responsive grids)

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19 + TypeScript
- [Ant Design](https://ant.design) 5 (`antd`, `@ant-design/icons`)
- `@ant-design/nextjs-registry` for App Router SSR style extraction
- `@ant-design/v5-patch-for-react-19` for React 19 compatibility
- Cart state via React Context + `localStorage` (no backend)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # eslint
```

## Project structure

```
app/                     Routes (Next.js App Router)
  cart/, checkout/       Cart & guest checkout MVP
  loading.tsx            Global branded loading screen
components/
  layout/                Header (incl. cart badge), footer, site chrome
  home/                  Home page sections
  products/              Product listing, filters, product card, skeletons
  cart/, checkout/       Cart review and checkout flow
  contact/               Enquiry form
  about/                 About page content
  ui/                    Shared UI (page loader, back-to-top)
lib/
  data/                  Static category & product data (mock content)
  cart/                  Cart context/provider (localStorage-backed)
  theme.ts               Ant Design theme tokens, contact info
public/images/           Category & hero photography (wide/ + card/)
```

## Notes for going live

- **Contact details** in `lib/theme.ts` (`contactDetails`) use a real phone
  number and email, but the street **address** is still a placeholder —
  replace it before launch.
- **Product data** in `lib/data/products.ts` and `lib/data/categories.ts` is
  illustrative — replace with the real catalogue and real product photos.
- **The enquiry form and checkout flow** currently only simulate submission
  client-side; wire both up to a real backend, order-management flow, and
  (if you want in-app payment) a payment gateway before launch.
- Firework sale and use is regulated in most regions — confirm the
  compliance copy in `app/about` and the footer against current local
  regulations before publishing, and reconsider whether direct
  cart/checkout (vs. an enquiry-only flow) is appropriate for your market.

## Photo credits

Category and hero photography lives in `public/images/` and is sourced
from Wikimedia Commons under open licenses (CC0, CC BY, CC BY-SA) that
permit commercial use. Full per-image credits and license links are in
[`public/images/ATTRIBUTIONS.md`](public/images/ATTRIBUTIONS.md).
