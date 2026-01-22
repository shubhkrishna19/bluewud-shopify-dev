# AGENTS.md: The Gold Standard Orchestration Manual
This is the **Unified Source of Truth** for the Bluewud Shopify development team. Every agent (Antigravity, Codex, etc.) must treat this file as their primary operating instruction.

---

## 🏛️ Project Vision: "Empire Logic, Whisper Style"
We are migrating the robust functional core of the **Empire Theme** into the ultra-premium, modern aesthetic of **Whisper**.
- **The Bar**: We must exceed the functionality and beauty of `woodenstreet.com`.
- **The UI Level**: Vibrant gradients, Glassmorphism, smooth micro-animations, and mobile-first gesture control.
- **Zero-Breakage**: Pincode (Zippy), AJAX Cart, and Buy Now buttons must remain 100% functional.

---

## 🔒 Agent Coordination Protocol (STRICT)
1. **Claim**: Add `[/] In Progress - [Agent Name]` to a Task ID in the roadmap below.
2. **Log**: Add a "Developer Log" entry at the bottom when starting and finishing.
3. **Commit**: Keep commits atomic (one task = one commit/PR).
4. **Handoff**: If blocked, tag the other agent in `AGENTS.md` log.

---

## 🚀 The Master Roadmap: Phases 11-20 (UX & Production)

| ID | Task Name | Status | Owner | Blueprint / Guide |
| :--- | :--- | :--- | :--- | :--- |
| **P11** | **UX & Personalization** | [/] Active | Codex | **High-Priority Engagement** |
| T042 | - Mobile Quick Add Sheet | [x] Done | Anti | Ported from `BottomSheet.tsx`. |
| T040 | - Global Aesthetic Bridge | [x] Done - Codex | Codex | See **Blueprint C** below. |
| T043 | - Size Prediction Engine | [x] Done - Codex | Codex | See **Blueprint A** below. |
| T044 | - Abandoned Cart Recovery | [x] Done - Codex | Codex | See **Blueprint B** below. |
...
### Blueprint C: T040 - Global Aesthetic Bridge
**Goal**: Move the store from "Basic/Wireframe" to "Whisper Premium" using the new CSS tokens.
1. **Header/Nav**: Apply `.whisper-glass` to the header background and `.whisper-gradient-text` to the active nav links.
2. **Product Cards**: Apply `.whisper-card-hover` to all product cards in `product-grid-item.liquid`.
3. **Buttons**: Ensure all primary buttons use `var(--gradient-vibrant)` and `var(--transition-premium)`.
4. **Spacing**: Audit all sections for consistent `var(--padding-4xl)` usage for desktop margins to create "breathing room" (Airy UI).
| T049 | - Haptic Feedback Sync | [ ] Pending || Browser Vibrate API for mobile actions. |
| **P12** | **Growth & Gamification**| [ ] Pending | Codex | **Sales Velocity Track** |
| T045 | - Referral Rewards UI | [ ] Pending || Port from `ReferralProgram.tsx`. |
| T046 | - Spin The Wheel (Daily) | [ ] Pending || Premium interactive gamification. |
| **P13** | **Performance & A11y** | [ ] Pending | Anti | **Production Hardening** |
| T051 | - Skeleton Loaders (CLS) | [ ] Pending || Dynamic placeholders for all sections. |
| T052 | - Critical CSS Inline | [ ] Pending || Score 100/100 on Lighthouse. |

---

## 🗻 Mountain of Tasks (Woodenstreet MVP Protocol)

| ID | Task | Status | Owner | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Phase A (Homepage)** | | | | |
| A-01 | Mega Menu | [x] Done - Codex-01 | Codex | Woodenstreet header/navigation parity. |
| A-03 | Hybrid Hero | [x] Done - Codex-01 | Codex | Pixel-match hero layout and CTA stack. |
| **Phase B (PDP)** | | | | |
| B-01 | Visual Swatches | [x] Done - Codex-01 | Codex | Variant swatch UI parity. |
| B-04 | Delivery Estimator | [x] Done - Codex-01 | Codex | Pincode-based delivery ETA block. |

---

## � Implementation Blueprints for Codex

### Blueprint A: T043 - Size Prediction Engine
**Goal**: Port `SizeRecommendationEngine.tsx` logic into a Liquid component.
1. **Logic**: Use `localStorage` to store user measurements (height, weight, etc.).
2. **Component**: Create `snippets/whisper-size-engine.liquid`.
3. **UI**: A "size recommender" button inside the product options area.
4. **Reference**: Read `ecommerce-app/src/components/SizeRecommendationEngine.tsx`.
5. **Aesthetic**: Use a glassmorphic modal for the input form.

### Blueprint B: T044 - Abandoned Cart Recovery
**Goal**: Port `AbandonedCartRecovery.tsx` functionality.
1. **Trigger**: If the cart is not empty and the user is inactive/revisiting, show a floating bottom banner.
2. **Component**: Create `snippets/whisper-cart-recovery.liquid`.
3. **Reference**: Read `ecommerce-app/src/components/AbandonedCartRecovery.tsx`.
4. **Sync**: Integrate with Shopify's `cart.js` AJAX api.

---

## 🎯 Current Development Goals (Homepage First)
1. Verify CTA hierarchy and product grid consistency before inner-page work.
2. Validate homepage spacing rhythm across all sections and remove any leftover utility styles.
3. Smoke-check interactive elements (tabs, size engine, cart recovery) in theme preview.
4. Harmonize highlights banner styling with Whisper glass tokens.

---

## 🎨 Mandatory Aesthetic Guidelines (The Whisper Standard)
*Apply these tokens/styles to EVERY new component in `assets/theme-update.css`.*

```css
:root {
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-blur: blur(12px);
  --glass-border: 1px solid rgba(255, 255, 255, 0.3);
  
  /* Vibrancy */
  --gradient-premium: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  --shadow-float: 0 20px 50px rgba(0, 0, 0, 0.15);
  
  /* Interactions */
  --transition-smooth: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Common Class Patterns */
.whisper-glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border);
}
```

---

## 🧬 History & Developer Logs
- **2026-01-20 (Antigravity)**: **T040 INITIAL PASS COMPLETE.** Applied Glassmorphism to Header/Cards and Vibrant Gradients to Buttons. The 'Wireframe' state is officially resolved.
- **2026-01-20 (Antigravity)**: **ORCHESTRATION REBOOT.** Unified all instructions into this manual. Created "Blueprints" for Codex to ensure automatic success.
- **2026-01-20 (Antigravity)**: **T042 COMPLETE.** Mobile Quick Add sheet is live and pushed.
- **2026-01-20 (Antigravity)**: Fixed `theme-update.css` syntax and added Glassmorphism foundation.
- **2026-01-20 (Codex)**: **T043 STARTED.** Added size recommendation component and began layout polish for homepage and cart.
- **2026-01-20 (Codex)**: **T043 COMPLETE.** Implemented size prediction engine UI and refined homepage/cart presentation.
- **2026-01-20 (Codex)**: **T043 FOLLOW-UP.** Improved size recommender accessibility and responsive behavior.
- **2026-01-20 (Codex)**: **T044 STARTED.** Added cart recovery banner snippet and theme styling.
- **2026-01-20 (Codex)**: **T044 COMPLETE.** Wired cart recovery banner into theme layout with cart.js trigger and dismissal logic.
- **2026-01-20 (Codex)**: **T040 STARTED.** Applied Whisper aesthetic updates for navigation, buttons, and product cards.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Finished Global Aesthetic Bridge styling for homepage presentation.
- **2026-01-20 (Codex)**: **T040 REOPENED.** Refining homepage hero styling to align with Whisper tokens.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Updated Whisper hero styling for production-ready homepage polish.
- **2026-01-20 (Codex)**: **T040 REOPENED.** Converting Lookbook and Featured Collection sections to Whisper CSS tokens.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Finished homepage section styling cleanup for Lookbook and Featured Collection.
- **2026-01-20 (Codex)**: **T040 REOPENED.** Refactoring Whisper Showcase section into tokenized styling.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Finished Whisper Showcase section polish for homepage.
- **2026-01-20 (Codex)**: **T040 REOPENED.** Finalizing homepage section order for production review.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Updated homepage order to include Whisper Showcase for production review.
- **2026-01-20 (Codex)**: **Homepage Goal Updated.** Prioritizing homepage production polish before inner pages.
- **2026-01-20 (Codex)**: **Homepage Goal Progress.** Tokenized collections tabs and promo grid for homepage readiness.
- **2026-01-20 (Codex)**: **T040 REOPENED.** Polished collections tabs and promo grid layout spacing.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Added responsive grid, hover, and accessible tabs refinements for homepage collections/promo.
- **2026-01-20 (Codex)**: **T040 FOLLOW-UP.** Added keyboard navigation support for homepage collections tabs.
- **2026-01-20 (Codex)**: **Homepage Goal Progress.** Applied Whisper styling to highlights banner.
- **2026-01-20 (Codex)**: **A-03 STARTED.** Claimed Hybrid Hero for Woodenstreet MVP Phase A.
- **2026-01-20 (Codex)**: **A-03 COMPLETE.** Delivered Woodenstreet Hybrid Hero component and wired into homepage.
- **2026-01-20 (Codex)**: **A-01 STARTED.** Building Woodenstreet mega menu component for Phase A.
- **2026-01-20 (Codex)**: **A-01 COMPLETE.** Delivered Woodenstreet mega menu component and wired into header.


- **2026-01-20 (Codex)**: **B-01 STARTED.** Claimed Visual Swatches for Woodenstreet MVP Phase B.


- **2026-01-20 (Codex)**: **B-01 COMPLETE.** Added Woodenstreet visual swatches component and wired into product form.


- **2026-01-20 (Codex)**: **B-04 STARTED.** Claimed Delivery Estimator for Woodenstreet MVP Phase B.


- **2026-01-20 (Codex)**: **B-04 COMPLETE.** Added delivery estimator component and wired into product form.


- **2026-01-20 (Codex)**: **B-04 FOLLOW-UP.** Added keyboard submission and aria-live updates for delivery estimator.
