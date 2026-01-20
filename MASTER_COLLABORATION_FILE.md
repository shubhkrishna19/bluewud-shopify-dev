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
5. **Read**: Review `AGENTS.md` for multi-agent coordination rules.

| ID | Task | Status | Agent | Priority | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| T001 | Pincode Widget Restoration | [x] Done | Anti | High | Verified baseline. |
| **P2** | **Phase 2: Visual Identity** | [x] Done | Anti | High | **28% Reached.** |
| T002 | - Typography Overhaul | [x] Done | Anti | High | Inter/Barlow applied. |
| T003 | - Whisper Hero Section | [x] Done | Anti | High | Live with layout logic. |
| **P3** | **Phase 3: Structural Header** | [/] Active | Anti | High | **Lead: Antigravity** |
| T004 | - [Header] Liquid Port | [x] Done | Anti | High | Ported modular logic. |
| T005 | - [Header] CSS Mapping | [/] Active | Anti | High | Integrating to `theme-update.css`. |
| T006 | - [Navigation] Mobile Drawer| [x] Done | Codex | Med | Added `snippets/header-drawer.liquid`. |
| T007 | - [Navigation] Mega-Menu Grid| [x] Done | Codex | High | Added `snippets/mega-menu-list.liquid` and `snippets/util-mega-menu-img-sizes-attr.liquid`. |
| T008 | - [Navigation] Mega-Promo | [x] Done | Codex | High | Added `snippets/mega-promo.liquid` compatibility wrapper. |
| **P4** | **Phase 4: Global Utilities** | [ ] Pending | Joint | Med | **Codex Takeover Target** |
| T013 | - [Icons] SVG Library Port | [x] Done | Codex | Low | Added `snippets/icon.liquid` (commit 77f04b2). |
| T014 | - [Spacing] Padding Helpers | [x] Done | Codex | Med | Added `snippets/spacing-padding.liquid`. |
| T015 | - [Badges] Product Badges | [x] Done | Codex | Med | Added `snippets/badge.liquid` (based on existing product badge logic). |
| **P5** | **Phase 5: Product Page UI** | [ ] Pending | Joint | High | Visual parity for PDP. |
| T016 | - [Media] Gallery Layout | [x] Done | Codex | High | Added media gallery snippets and asset. |
| T017 | - [Price] Dynamic Pricing UI| [x] Done | Codex | High | Added `snippets/price.liquid`. |
| T018 | - [ATC] Button Styling | [x] Done | Codex | High | Added `snippets/add-to-cart-button.liquid`. |
| **P6** | **Phase 6: Cart & Checkout UX**| [ ] Pending | Codex | Med | Polish transactional UI. |
| T019 | - [Drawer] Whisper Cart | [x] Done | Codex | High | Added `snippets/cart-drawer.liquid`. |
| T020 | - [Summary] Cart Summaries | [x] Done | Codex | Med | Added `snippets/cart-summary.liquid`. |
| T023 | - [Settings] Cart Type Toggle | [x] Done | Codex | Med | Added `cart_type` setting (page/drawer). |
| **P7** | **Phase 7: Optimization** | [ ] Pending | Joint | Low | Core Web Vitals + Clean. |
| T021 | - [Asset] CSS Minification | [x] Done | Codex | Low | Minified `assets/theme-update.css`. |
| T022 | - [JS] Lazy Loading Hydrate | [x] Done | Codex | Med | Added `assets/section-hydration.js`. |
| T043 | - [Engine] Size Prediction | [x] Done | Codex | High | Added size predictor snippet + asset. |
| T044 | - [UI] Final Presentation Polish | [x] Done | Codex | High | Added size predictor UI polish styles. |
| T045 | - [Cart] Abandoned Cart Recovery | [x] Done | Codex | High | Added recovery banner + JS restore. |
| T046 | - [Settings] Abandoned Cart Recovery Toggle | [x] Done | Codex | Med | Added settings toggle for cart recovery banner. |
| T047 | - [Homepage] Promo Images Polish | [x] Done | Codex | Med | Refined promo images section styling. |
| T048 | - [Homepage] Featured Collection Polish | [x] Done | Codex | Med | Refined featured collection section styling. |
| T049 | - [Homepage] Collections Tabs Polish | [x] Done | Codex | Med | Refined collections tabs section styling. |

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
4. **Modular Modernization**: UI updates must be "properly modular and modern." Keep it clean and focused; avoid "fancy" bloat. Aim for better design while keeping the core content familiar and sensible.

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

## ✅ UI Finalization Plan (Presentation)
1. Inventory remaining visual gaps between Whisper preview and Empire theme.
2. Prioritize PDP, cart, and header UX polish in that order.
3. Apply scoped CSS updates in `assets/theme-update.css`.
4. Validate on Live Preview after each push for regressions.

## 📝 Developer Logs
*Update this section after every major push.*

- **2026-01-15 (Antigravity)**: Completed deep-dive into `whispertheme`. Mapped all CSS variables and identified primary porting targets. Ready for Codex to begin Liquid integration. Migration status updated to **22%**.
- **2026-01-15 (Antigravity)**: Initiated Typography Overhaul. Transitioning store to Inter/Barlow for premium aesthetics. Preparing to port `whisper-hero.liquid`.
- **2026-01-15 (Antigravity)**: **PHASE 2 COMPLETE.** Typography and Hero live. Migration status: **28%**. Expanded roadmap for Phases 3 & 4 with specialized tasks for Codex.
- **2026-01-18 (Codex)**: Ported Whisper SVG icon library to `snippets/icon.liquid` (commit 77f04b2).
- **2026-01-18 (Codex)**: Ported padding helper snippet from Whisper to `snippets/spacing-padding.liquid`. (Task chosen: T014)
- **2026-01-18 (Codex)**: Added `AGENTS.md` with multi-agent coordination rules and best-practice contribution requirements.
- **2026-01-18 (Codex)**: Selected task T017 - Dynamic Pricing UI.
- **2026-01-18 (Codex)**: Selected task T015 - Product Badges.
- **2026-01-18 (Codex)**: Selected task T022 - Lazy Loading Hydrate.
- **2026-01-18 (Codex)**: Selected task T016 - Media Gallery Layout.
- **2026-01-18 (Codex)**: Ported Whisper media gallery snippets and `assets/media-gallery.js`.
- **2026-01-18 (Codex)**: Ported `assets/section-hydration.js` from Whisper.
- **2026-01-18 (Codex)**: Added `snippets/badge.liquid` based on existing product badge logic for compatibility.
- **2026-01-18 (Codex)**: Selected task T006 - Navigation Mobile Drawer.
- **2026-01-18 (Codex)**: Ported Whisper header drawer snippet to `snippets/header-drawer.liquid`.
- **2026-01-18 (Codex)**: Selected task T020 - Cart Summaries.
- **2026-01-18 (Codex)**: Ported Whisper cart summary snippet to `snippets/cart-summary.liquid`.
- **2026-01-18 (Codex)**: Selected task T018 - ATC Button Styling.
- **2026-01-18 (Codex)**: Ported Whisper add-to-cart button snippet to `snippets/add-to-cart-button.liquid`.
- **2026-01-18 (Codex)**: Ported Whisper pricing snippet to `snippets/price.liquid`.
- **2026-01-18 (Codex)**: Selected task T019 - Whisper Cart Drawer.
- **2026-01-18 (Codex)**: Ported Whisper cart drawer snippet to `snippets/cart-drawer.liquid`.
- **2026-01-18 (Codex)**: Selected task T007 - Mega-Menu Grid.
- **2026-01-18 (Codex)**: Ported Whisper mega menu grid snippets to `snippets/mega-menu-list.liquid` and `snippets/util-mega-menu-img-sizes-attr.liquid`.
- **2026-01-18 (Codex)**: Selected task T008 - Mega-Promo.
- **2026-01-18 (Codex)**: Added `snippets/mega-promo.liquid` compatibility wrapper for promo menus.
- **2026-01-18 (Codex)**: Selected task T021 - CSS Minification.
- **2026-01-18 (Codex)**: Minified `assets/theme-update.css` to reduce payload.
- **2026-01-18 (Codex)**: Selected task T023 - Cart Type Toggle.
- **2026-01-18 (Codex)**: Added `cart_type` setting to theme config defaults.
- **2026-01-18 (Codex)**: Selected task T043 - Size Prediction Engine.
- **2026-01-18 (Codex)**: Implemented size prediction UI + logic (snippet + asset) and wired into product form.
- **2026-01-18 (Codex)**: Finalized T044 with size predictor UI polish styles.
- **2026-01-18 (Codex)**: Selected task T045 - Abandoned Cart Recovery.
- **2026-01-18 (Codex)**: Implemented abandoned cart recovery banner + JS restore flow.
- **2026-01-18 (Codex)**: Added setting toggle for abandoned cart recovery banner.
- **2026-01-18 (Codex)**: Selected task T047 - Homepage Promo Images Polish.
- **2026-01-18 (Codex)**: Polished promo images section on homepage.
- **2026-01-18 (Codex)**: Selected task T048 - Homepage Featured Collection Polish.
- **2026-01-18 (Codex)**: Polished featured collection section on homepage.
- **2026-01-18 (Codex)**: Selected task T049 - Homepage Collections Tabs Polish.
- **2026-01-18 (Codex)**: Polished collections tabs section on homepage.
