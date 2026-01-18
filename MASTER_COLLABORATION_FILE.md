# MASTER COLLABORATION FILE: Bluewud Shopify Development

This file is the **Source of Truth** for the synchronized development between **Antigravity** (Architecture/Research/CSS) and **Codex** (Liquid/Logic).

---

## 🔗 Live Preview Link
**URL**: [https://u1p5we6mwmdiusgu-18086469.shopifypreview.com](https://u1p5we6mwmdiusgu-18086469.shopifypreview.com)
*Use this link to verify all visual and functional changes in real-time.*

## 🚀 Progress & Task Handoff

| Task | Status | Agent | Priority | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Pincode Widget Restoration | [x] Done | Anti | High | **DON'T TOUCH**: `#zippy_widget_1511`. |
| **Theme Integration (Whisper UI)** | [/] Active | Joint | High | Applying `whispertheme` aesthetics to Empire. |
| - Design Token Analysis | [x] Done | Anti | Low | Mapped variables in `theme-styles-variables.liquid`. |
| - **Header & Nav Porting** | [/] Active | **Codex**| High | Replace Empire header logic with Whisper's. |
| - **Banners & Hero Sections** | [/] Active | **Codex**| Med | Port Whisper's `hero.liquid` / `slideshow.liquid`. |
| - **Product Card UI** | [/] Active | **Codex**| High | Port `product-card.liquid` aesthetics. |
| - **Footer** | [x] Done | **Codex**| Med | Ported footer layout hooks and bridge styles. |
| - Global CSS Bridge | [x] Done | Anti | Med | Creating `theme-update.css`. |

---

## 🛠 Shared Multi-Agent Strategy

### 1. The Division of Labor
- **Codex**: Primary Liquid Developer. Responsible for porting snippets, blocks, and section schema from `whispertheme` into the active theme.
- **Antigravity**: Architect & Guardian. Responsible for file mapping, CSS bridging, and ensuring complex apps (like Pincode Zippy) do not break.

### 2. Integration Philosophy: "Empire Logic, Whisper Style"
**DO NOT** replace Empire's core functional logic. Instead:
1. Wrap Empire's functional elements with Whisper's CSS classes.
2. Keep all `data-` attributes and original `id`s for AJAX/Script compatibility.
3. Use the `whispertheme` assets (JS/CSS) as siblings to Empire's assets.

---

## 🧬 Whispertheme Technical DNA
*Reference these files in `/whispertheme` for implementation:*

### Core Styles & Layout
- **Variables**: `snippets/theme-styles-variables.liquid` (The "DNA" of fonts, colors, and spacing).
- **Base CSS**: `assets/base.css`.
- **Icons**: `snippets/icon.liquid` (Massive SVG library).

### Key UI Components (Port Targets)
- **Header**: `sections/header.liquid` + `snippets/header-drawer.liquid`.
- **Banner/Hero**: `sections/hero.liquid` (Extremely robust, use for main banners).
- **Product Card**: `snippets/product-card.liquid` (Port to `snippets/product-grid-item.liquid`).
- **Footer**: `sections/footer.liquid`.

---

## ⚠️ CRITICAL: Functional Safeguards

### 1. Pincode Widget (Zippy)
- **Location**: `snippets/product-form.liquid` and `snippets/product-grid-item.liquid`.
- **Identifier**: Always keep `<div id="zippy_widget_1511" class="zippy_widget_1511"></div>`.
- **CSS**: See `assets/theme.css` for how we hide redundant app blocks while keeping the JS loading.

### 2. AJAX QuickShop (Empire JS)
- We modified `assets/empire.js` to dispatch `shopify:section:load` on modal load.
- If you change the Header or Menu, ensure that the "Quick Shop" buttons still trigger this JS logic.

### 3. CSS Conflict Prevention
- Add new styles to `assets/theme-update.css`.
- Use specific selectors or Whisper's BEM classes to avoid clobbering Empire's basic layout.

### 4. "Zero-Breakage" Protocol (UTMOST PRIORITY)
- **Functional Integrity**: Existing features (Pincode, Quick Shop, Buy Now, Cart) **MUST NOT BREAK**.
- **Instant Correction**: If a feature breaks, it must be fixed or reverted immediately.
- **Verification**: Test the Live Preview link after every push to ensure functionality remains 100% active.

---

## 📝 Developer Logs
*Update this section after every major push.*

- **2026-01-15 (Antigravity)**: Completed deep-dive into `whispertheme`. Mapped all CSS variables and identified primary porting targets. Ready for Codex to begin Liquid integration.
- **2026-01-16 (Codex)**: Added Whisper-style product card class hooks to `snippets/product-grid-item.liquid` to prepare for styling bridge without altering Empire logic.
- **2026-01-16 (Codex)**: Aligned product card hooks with Whisper base.css (`product-card__content`/`product-card__image`) and avoided absolute overlay link behavior.
- **2026-01-16 (Codex)**: Added Whisper `product-grid__item` and `product-grid__card` hooks to the product grid item wrapper for base.css layout alignment.
- **2026-01-16 (Codex)**: Added `assets/theme-update.css` and wired it into `layout/theme.liquid` as the CSS bridge for Whisper overrides.
- **2026-01-16 (Codex)**: Started Product Card UI styling bridge in `assets/theme-update.css` using Whisper BEM hooks.
- **2026-01-16 (Codex)**: Added baseline `.product-grid__card` layout rules to the CSS bridge for Product Card UI alignment.
- **2026-01-16 (Codex)**: Added Whisper-aligned product card transition defaults in `assets/theme-update.css`.
- **2026-01-16 (Codex)**: Ported footer layout hooks in `sections/static-footer.liquid` and added footer grid bridge styles.
- **2026-01-16 (Codex)**: Added Whisper header row/column hook classes in `sections/static-header.liquid` and `layout/theme.liquid`.
- **2026-01-16 (Codex)**: Added Whisper hero hook classes to the slideshow section (`sections/dynamic-slideshow.liquid`).
- **2026-01-16 (Codex)**: Added Whisper hero content wrapper hook to slideshow slide content.
