# MASTER COLLABORATION FILE: Bluewud Shopify Development

This file is the **Source of Truth** for the synchronized development between **Antigravity** (Architecture/Research/CSS) and **Codex** (Liquid/Logic).

---

## 🔗 Live Preview Link
**URL**: [https://u1p5we6mwmdiusgu-18086469.shopifypreview.com](https://u1p5we6mwmdiusgu-18086469.shopifypreview.com)
*Use this link to verify all visual and functional changes in real-time.*

## 🔒 Task Locking & Coordination (CRITICAL)
To prevent duplication, every agent **MUST** follow this protocol:
1. **Declare**: Before starting, add `[/] In Progress - [Agent Name]` next to the **Task ID** in this file.
2. **Commit**: Sync changes to GitHub immediately after completion.
3. **Close**: Mark as `[x] Done` and provide the commit hash or file path in the 'Notes' column.
4. **Sequence**: All new tasks must continue the sequential numbering.

| ID | Task | Status | Agent | Priority | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T001 | Pincode Widget Restoration | [x] Done | Anti | High | Verified baseline. |
| **P2** | **Phase 2: Visual Identity** | [x] Done | Anti | High | **28% Reached.** |
| T002 | - Typography Overhaul | [x] Done | Anti | High | Inter/Barlow applied. |
| T003 | - Whisper Hero Section | [x] Done | Anti | High | Live with layout logic. |
| **P3** | **Phase 3: Structural Header** | [/] Active | Anti | High | **Lead: Antigravity** |
| T004 | - [Header] Liquid Port | [/] In Progress| Anti | High | Porting Whisper schema. |
| T005 | - [Header] CSS Mapping | [ ] Pending || High | Port to `theme-update.css`. |
| T006 | - [Navigation] Mobile Drawer| [ ] Pending || Med | Port `header-drawer.liquid`. |
| T007 | - [Navigation] Mega-Menu Grid| [ ] Pending || High | T-ID for grid menus. |
| T008 | - [Navigation] Mega-Promo | [ ] Pending || High | T-ID for image menus. |
| **P4** | **Phase 4: Global Utilities** | [ ] Pending | Joint | Med | **Codex Takeover Target** |
| T013 | - [Icons] SVG Library Port | [ ] Pending || Low | Port `snippets/icon.liquid`. |
| T014 | - [Spacing] Padding Helpers | [ ] Pending || Med | Port `spacing-padding.liquid`. |
| T015 | - [Badges] Product Badges | [ ] Pending || Med | Port `snippets/badge.liquid`. |
| **P5** | **Phase 5: Product Page UI** | [ ] Pending | Joint | High | Visual parity for PDP. |
| T016 | - [Media] Gallery Layout | [ ] Pending || High | Port Whisper gallery logic. |
| T017 | - [Price] Dynamic Pricing UI| [ ] Pending || High | Port `snippets/price.liquid`. |
| T018 | - [ATC] Button Styling | [ ] Pending || High | Port `add-to-cart-button`. |
| **P6** | **Phase 6: Cart & Checkout UX**| [ ] Pending | Codex | Med | Polish transactional UI. |
| T019 | - [Drawer] Whisper Cart | [ ] Pending || High | Port `cart-drawer.liquid`. |
| T020 | - [Summary] Cart Summaries | [ ] Pending || Med | Port `cart-summary.liquid`. |
| **P7** | **Phase 7: Optimization** | [ ] Pending | Joint | Low | Core Web Vitals + Clean. |
| T021 | - [Asset] CSS Minification | [ ] Pending || Low | Consolidate themes. |
| T022 | - [JS] Lazy Loading Hydrate | [ ] Pending || Med | Sync `section-hydration.js`. |

---

## 🛠 Shared Multi-Agent Strategy

### 1. The Division of Labor & File Ownership
To prevent collision, we strictly follow this ownership map:

| Component | Target Files | Primary Agent |
| :--- | :--- | :--- |
| **Header** | `sections/header.liquid`, `snippets/header-drawer.liquid` | **Codex** |
| **Nav/Menu** | `snippets/navigation.liquid`, `snippets/menu-*.liquid` | **Codex** |
| **Global CSS** | `assets/theme-update.css` | **Joint** (Use BEM) |
| **Product Grid** | `snippets/product-grid-item.liquid` | **Joint** (Coord Sync) |
| **Logic/AJAX** | `assets/empire.js`, `snippets/product-form.liquid` | **Antigravity** |

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

- **2026-01-15 (Antigravity)**: Completed deep-dive into `whispertheme`. Mapped all CSS variables and identified primary porting targets. Ready for Codex to begin Liquid integration. Migration status updated to **22%**.
- **2026-01-15 (Antigravity)**: Initiated Typography Overhaul. Transitioning store to Inter/Barlow for premium aesthetics. Preparing to port `whisper-hero.liquid`.
- **2026-01-15 (Antigravity)**: **PHASE 2 COMPLETE.** Typography and Hero live. Migration status: **28%**. Expanded roadmap for Phases 3 & 4 with specialized tasks for Codex.
