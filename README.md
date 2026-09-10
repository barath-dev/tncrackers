# TNCrackers

A professional, frontend-only portfolio site for a festival fireworks
catalogue, built with **Next.js (App Router)**, **TypeScript**, and
**Ant Design**.

This project is a from-scratch redesign inspired by the general category
structure of online fireworks catalogues — all copy, product data, pricing,
and artwork in this repository are original and were created for this
project (no content or images were copied from any third-party site).

## Features

- Home page with hero banner, category showcase, and bestseller highlights
- Full product catalogue across 15 categories (`/products`,
  `/products/[category]`) with mock/static data
- About and Contact pages, including an "Enquiry" form (Ant Design `Form`,
  client-side validation only — no backend is wired up)
- Ant Design theming via `ConfigProvider`, SSR-safe via
  `@ant-design/nextjs-registry`
- Fully responsive (mobile nav drawer, responsive grids)

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- React 19 + TypeScript
- [Ant Design](https://ant.design) 5 (`antd`, `@ant-design/icons`)
- `@ant-design/nextjs-registry` for App Router SSR style extraction
- `@ant-design/v5-patch-for-react-19` for React 19 compatibility

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
components/
  layout/                Header, footer, site chrome
  home/                  Home page sections
  products/              Product listing, filters, product card
  contact/               Enquiry form
  about/                 About page content
lib/
  data/                  Static category & product data (mock content)
  theme.ts               Ant Design theme tokens, contact info
public/illustrations/    Original SVG artwork
```

## Notes for going live

- **Contact details** in `lib/theme.ts` (`contactDetails`) use a real phone
  number and email, but the street **address** is still a placeholder —
  replace it before launch.
- **Product data** in `lib/data/products.ts` and `lib/data/categories.ts` is
  illustrative — replace with the real catalogue.
- **The enquiry form** currently only simulates a submission client-side;
  wire it up to a real backend/email service before launch.
- Firework sale and use is regulated in most regions — confirm the
  compliance copy in `app/about` and the footer against current local
  regulations before publishing.
