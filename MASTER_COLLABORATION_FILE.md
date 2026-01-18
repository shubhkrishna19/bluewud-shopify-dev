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
| - **Header & Nav Porting** | [/] Active | **Codex**| High | Wrapping Empire header markup with Whisper layout classes (no logic replacement). |
| - **Banners & Hero Sections** | [/] Active | **Codex**| Med | Begin porting Whisper `hero.liquid` / `slideshow.liquid` structures. |
| - **Product Card UI** | [ ] Pending | **Codex**| High | Port `product-card.liquid` aesthetics. |
| - Global CSS Bridge | [ ] Pending | Anti | Med | Creating `theme-update.css`. |

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
- **2026-01-15 (Codex)**: Began Header & Nav Porting. Added Whisper structural wrappers for header rows/columns, header actions, and header menu while preserving Empire data attributes and Liquid logic (`sections/static-header.liquid`, `snippets/site-header-actions.liquid`, `snippets/site-mobile-nav.liquid`). Verify Quick Shop and mobile menu behavior after styling changes.

---

## 📚 Project Knowledge Base (Shared)
*Goal: Capture recurring decisions, key files, and how-to patterns so future work avoids duplication.*

### Header & Navigation Porting (Whisper UI → Empire Logic)
- **Guiding rule**: Wrap Empire markup with Whisper classes; do not replace Liquid logic or data attributes that Empire JS depends on.
- **Primary files touched (Codex)**:
  - `sections/static-header.liquid`: Add Whisper layout wrappers (`header`, `header__row`, `header__columns`, `header__column`), wrap actions with `<header-actions>`, and wrap menu with `<header-menu>`.
  - `snippets/site-header-actions.liquid`: Add Whisper action hooks (`header-actions`, `header-actions__action`) without removing Empire classes.
  - `snippets/site-mobile-nav.liquid`: Wrap mobile header actions with `<header-actions>` for styling parity.
- **Data attributes to preserve**: `data-section-id`, `data-section-type`, `data-site-header-main`, `data-site-header-sticky`, `data-menu-toggle`, `data-mobile-search-button`, `data-site-navigation`, `data-header-cart-count`, and live search hooks in `snippets/live-search-form.liquid`.

### JS & App Safeguards
- **Quick Shop** relies on Empire JS and `shopify:section:load`; do not remove Quick Shop `data-` hooks.
- **Pincode/Zippy** must keep `#zippy_widget_1511` intact in product-related snippets.

### CSS Strategy
- New styles go to `assets/theme-update.css`.
- Prefer Whisper BEM hooks to avoid interfering with Empire defaults.

---

## 🧩 Agent Work Logs (Request for Updates)
**Action Required:** Each agent should append a short entry below when they complete a task:
- **Name / Date**
- **What was changed**
- **Files edited**
- **How to verify**

_Placeholder entries below — please replace with your updates:_
- **Antigravity / TBD**: _Describe CSS bridging progress, file paths, and verification steps._
- **Codex / 2026-01-15**: Header & Nav Porting in progress. Files edited: `sections/static-header.liquid`, `snippets/site-header-actions.liquid`, `snippets/site-mobile-nav.liquid`. Verify header layout, menu toggle, cart count badge, and live search behavior.
- **Codex / 2026-01-15**: Took ownership of Banners & Hero Sections. Next step is to map Whisper `sections/hero.liquid` + `sections/slideshow.liquid` structure into Empire equivalents. Files to edit: `sections/hero.liquid`, `sections/slideshow.liquid` (Empire). Verify banner layout, CTA links, and slider behavior in the live preview.
