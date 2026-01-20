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
| T004 | - [Header] Liquid Port | [x] Done | Anti | High | Ported modular logic. |
| T005 | - [Header] CSS Mapping | [/] Active | Anti | High | Integrating to `theme-update.css`. |
| T006 | - [Navigation] Mobile Drawer| [ ] Pending || Med | Port `header-drawer.liquid`. |
| T007 | - [Navigation] Mega-Menu Grid| [ ] Pending || High | T-ID for grid menus. |
| T008 | - [Navigation] Mega-Promo | [ ] Pending || High | T-ID for image menus. |
| **P4** | **Phase 4: Global Utilities** | [ ] Pending | Joint | Med | **Codex Takeover Target** |
| T013 | - [Icons] SVG Library Port | [x] Done | Codex | Low | d202c27 |
| T014 | - [Spacing] Padding Helpers | [x] Done | Codex | Med | b7aea30 |
| T015 | - [Badges] Product Badges | [x] Done | Codex | Med | 2558d15 |
| **P5** | **Phase 5: Product Page UI** | [ ] Pending | Joint | High | Visual parity for PDP. |
| T016 | - [Media] Gallery Layout | [x] Done | Codex | High | 5af2c7b |
| T017 | - [Price] Dynamic Pricing UI| [x] Done | Codex | High | 5ec515e |
| T018 | - [ATC] Button Styling | [x] Done | Codex | High | 0795b6c |
| **P6** | **Phase 6: Cart & Checkout UX**| [ ] Pending | Codex | Med | Polish transactional UI. |
| T019 | - [Drawer] Whisper Cart | [x] Done | Codex | High | e5f2793 |
| T020 | - [Summary] Cart Summaries | [x] Done | Codex | Med | 3fe761b |
| **P7** | **Phase 7: Optimization** | [ ] Pending | Joint | Low | Core Web Vitals + Clean. |
| T021 | - [Asset] CSS Minification | [ ] Pending || Low | Consolidate themes. |
| T022 | - [JS] Lazy Loading Hydrate | [x] Done | Codex | Med | d2482df |

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

## 📝 Developer Logs
*Update this section after every major push.*

- **2026-01-15 (Antigravity)**: Completed deep-dive into `whispertheme`. Mapped all CSS variables and identified primary porting targets. Ready for Codex to begin Liquid integration. Migration status updated to **22%**.
- **2026-01-15 (Antigravity)**: Initiated Typography Overhaul. Transitioning store to Inter/Barlow for premium aesthetics. Preparing to port `whisper-hero.liquid`.
- **2026-01-15 (Antigravity)**: **PHASE 2 COMPLETE.** Typography and Hero live. Migration status: **28%**. Expanded roadmap for Phases 3 & 4 with specialized tasks for Codex.
- **2026-01-16 (Codex)**: Completed T013 by porting `snippets/icon.liquid` into the active theme. Commit: d202c27.
- **2026-01-16 (Codex)**: Completed T014 by porting `snippets/spacing-padding.liquid`. Commit: b7aea30.
- **2026-01-16 (Codex)**: Completed T015 by porting `snippets/badge.liquid`. Commit: 2558d15.
- **2026-01-16 (Codex)**: Completed T017 by porting `snippets/price.liquid`. Commit: 5ec515e.
- **2026-01-16 (Codex)**: Completed T018 by porting `snippets/add-to-cart-button.liquid`. Commit: 0795b6c.
- **2026-01-16 (Codex)**: Completed T020 by porting `snippets/cart-summary.liquid`. Commit: 3fe761b.
- **2026-01-16 (Codex)**: Completed T019 by adding Whisper cart drawer supporting scripts. Commit: e5f2793.
- **2026-01-16 (Codex)**: Completed T016 by porting product media gallery snippets and script. Commit: 5af2c7b.
- **2026-01-16 (Codex)**: Completed T022 by adding `section-hydration.js`. Commit: d2482df.
