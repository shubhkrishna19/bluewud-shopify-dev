# MASTER COLLABORATION FILE: Bluewud Shopify Development

This file is the **Source of Truth** for the synchronized development between **Antigravity** (Architecture/Research/CSS) and **Codex** (Liquid/Logic).

---

## 🔗 Live Preview Link
**URL**: [https://u1p5we6mwmdiusgu-18086469.shopifypreview.com](https://u1p5we6mwmdiusgu-18086469.shopifypreview.com)
*Use this link to verify all visual and functional changes in real-time.*

## 🔒 Task Locking & Coordination (CRITICAL)
To prevent duplication, every agent **MUST** follow this protocol:
1. **Declare**: Before starting, add `[/] In Progress - [Agent Name]` to the task in this file.
2. **Commit**: Sync changes to GitHub immediately after completion.
3. **Close**: Mark as `[x] Done` and provide the commit hash or file path in the 'Notes' column.

| Task | Status | Agent | Priority | Notes |
| :--- | :--- | :--- | :--- | :--- |
| Pincode Widget Restoration | [x] Done | Anti | High | **DON'T TOUCH**: `#zippy_widget_1511`. |
| **Phase 2: Visual Identity refresh** | [x] Done | Anti | High | **28% Migration Milestone Reached.** |
| - Typography Overhaul | [x] Done | Anti | High | Inter & Barlow applied. |
| - Whisper Hero Section | [x] Done | Anti | High | Live with layout logic. |
| **Phase 3: Structural Porting** | [ ] Pending | **Codex**| High | **NEXT TARGET**: Header. |
| - [Header] Liquid Port | [ ] Pending | **Codex**| High | Port `sections/header.liquid`. |
| - [Header] CSS Integration | [ ] Pending | **Codex**| High | Integrate Header styles to `theme-update.css`. |
| - [Header] Mobile Drawer | [ ] Pending | **Codex**| Med | Port `snippets/header-drawer.liquid`. |
| - [Navigation] Mega-Menu 1 | [ ] Pending | **Codex**| High | Port 2-column grid menu. |
| - [Navigation] Mega-Menu 2 | [ ] Pending | **Codex**| High | Port image-based promo menu. |
| **Phase 4: Product & Browsing UI** | [ ] Pending | Joint | High | Visual parity for cards. |
| - [Card] Aesthetic Port | [ ] Pending | **Codex**| High | Port `product-card.liquid` UI. |
| - [Card] Pincode Sync | [ ] Pending | Anti | High | **Wait for Codex**: Re-inject Pincode into new UI. |
| - [Collection] Sidebar Port | [ ] Pending | **Codex**| Med | Port `sections/main-collection-product-grid.liquid`. |
| - [Collection] Filter Style | [ ] Pending | **Codex**| Med | Update facet styling in `theme-update.css`. |

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

- **2026-01-15 (Antigravity)**: Completed deep-dive into `whispertheme`. Mapped all CSS variables and identified primary porting targets. Ready for Codex to begin Liquid integration. Migration status updated to **22%**.
- **2026-01-15 (Antigravity)**: Initiated Typography Overhaul. Transitioning store to Inter/Barlow for premium aesthetics. Preparing to port `whisper-hero.liquid`.
- **2026-01-15 (Antigravity)**: **PHASE 2 COMPLETE.** Typography and Hero live. Migration status: **28%**. Expanded roadmap for Phases 3 & 4 with specialized tasks for Codex.
