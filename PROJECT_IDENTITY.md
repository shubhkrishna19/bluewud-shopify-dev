# PROJECT IDENTITY — LiveShopifyProject (Bluewud Shopify Theme)

> **🔒 Locked. Do not modify without Shubh's approval.**
> Owner: Shubh Krishna / Bluewud Industries

---

## What This Project Is

Bluewud's **live Shopify theme** — the storefront that customers see on bluewud.com.

- Base: Empire theme + Whisper aesthetic
- Custom CSS system: `assets/wooden-master.css` (Master CSS v1.7.0)
- Custom JS bridge: `assets/section-hydration.js`
- Deployed to Shopify store via Shopify CLI

---

## Deployment Target

| Layer | Technology | Details |
|---|---|---|
| Platform | Shopify (hosted) | Live customer-facing store |
| Template language | Liquid | `.liquid` files |
| Frontend | HTML + CSS + Vanilla JS | No build step |
| Deploy | `shopify theme push` | Shopify CLI v3+ |
| Repository | `shubhkrishna19/bluewud-shopify-dev` | GitHub |
| Preview URL | `https://u1p5we6mwmdiusgu-18086469.shopifypreview.com` | |

---

## Approved Tech Stack

| Component | Approved |
|---|---|
| Templates | Shopify Liquid |
| CSS | Custom CSS (`wooden-master.css` is the master — all others derive from it) |
| JS | Vanilla ES6+ — Empire theme JS patterns |
| Fonts | Google Fonts: Inter (body), Barlow/Poppins (headings) |
| Icons | Whisper SVG Library (`snippets/icon.liquid`) |

**NOT allowed:** React, Vue, Tailwind CDN, npm packages in theme code.

---

## Critical Files (DO NOT MODIFY without asking)

| File | Why |
|---|---|
| `assets/wooden-master.css` | Master CSS — all styles flow from here. Corrupting it breaks the entire storefront. |
| `assets/section-hydration.js` | JS bridge for Empire theme logic |
| `layout/theme.liquid` | Main layout — one bad line = store down |
| `config/settings_schema.json` | Theme editor schema — invalid JSON = editor breaks |
| `snippets/icon.liquid` | Used everywhere — changing it breaks all icons |
| `project-config.json` | Project metadata for agents — do not change keys |

---

## Key Business Elements (DO NOT CHANGE)

| Element | Value |
|---|---|
| Pincode widget ID | `zippy_widget_1511` / `.zippy_widget_1511` |
| Ajax cart | Empire JS-based — do not replace |
| Quick shop | Empire logic — do not replace |
| Main CSS | `assets/wooden-master.css` |

---

## Folder Map

```
assets/          — All CSS + JS (wooden-master.css is master)
blocks/          — Theme blocks
config/          — Theme settings schema + data
layout/          — theme.liquid (main layout)
locales/         — Translations
sections/        — Page sections (liquid)
snippets/        — Reusable partials (icon, price, badge, spacing-padding)
templates/       — JSON template definitions
ecommerce-app/   — Companion app (reference implementation — not deployed to Shopify)
```

---

## Agent Roles (historical context)

- **Antigravity** — Lead Architect, CSS Guardian, Logic Safety
- **Codex** — Liquid Developer, Snippet Porter, Mobile UI
