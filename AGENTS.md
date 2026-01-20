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

## 🚀 The Master Roadmap: Phases 11-20

| ID | Task Name | Status | Owner | Blueprint / Roadmap |
| :--- | :--- | :--- | :--- | :--- |
| **P11** | **UX & Personalization** | [/] Active | Codex | **High-Velocity UI Track** |
| T040 | - Global Aesthetic Bridge | [/] Active | Codex | **Blueprint C**. Apply Glass + Gradients. |
| T042 | - Mobile Quick Add Sheet | [x] Done | Anti | Completed (AJAX/Gestures). |
| T043 | - Size Prediction Engine | [x] Done | Codex | Completed (Ported from reference). |
| T044 | - Abandoned Cart Recovery | [ ] Pending || See **Blueprint B**. |
| T047 | - Floating Quick Action Bar | [ ] Pending || Mobile thumb-friendly actions. |
| T048 | - Micro-interactions (Lottie) | [ ] Pending || SVG animations for icons/buttons. |
| **P12** | **Growth & Conversions** | [ ] Pending | Codex | **Revenue Optimization** |
| T045 | - Referral Rewards Portal | [ ] Pending || Port from `ReferralProgram.tsx`. |
| T046 | - Spin-to-Win Gamification | [ ] Pending || High-engagement lead magnet. |
| T050 | - Post-Purchase Upsell Box | [ ] Pending || Dynamic "Others also bought" logic. |
| **P13** | **Product Page Hardening** | [ ] Pending || **PDP Visual Superiority** |
| T055 | - Dynamic Image Zoom v2 | [ ] Pending || Ultra-high res hover zoom system. |
| T056 | - Video Player Integration | [ ] Pending || Auto-playing product videos in gallery. |
| T057 | - Real-time Stock Counter | [ ] Pending || "Only X left!" social proof logic. |
| **P14** | **Performance & Search** | [ ] Pending | Anti | **Speed & Visibility** |
| T060 | - Predictive Search UI | [ ] Pending || Visual search results (Aesthetic bridge). |
| T061 | - Image Optimization Audit | [ ] Pending || WebP migration & lazy loading checks. |
| T062 | - Critical CSS Inlining | [ ] Pending || Score 95+ on Mobile Lighthouse. |
| **P15** | **Production QA & Polish** | [ ] Pending || **Final Pre-Launch Audit** |
| T070 | - Checkout UI Sync | [ ] Pending || Syncing checkout colors with Whisper. |
| T071 | - Email/SMS Template Sync | [ ] Pending || Whisper-branded notification designs. |
| T072 | - Error Page (404) Design | [ ] Pending || Create a premium "Lost in space" 404. |

---

## 🛠️ Implementation Blueprints for Codex

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

4. **Spacing**: Audit all sections for consistent `var(--padding-4xl)` usage for desktop margins.

### Blueprint D: T046 - Spin-to-Win Gamification
**Goal**: Increase email captures with a fun, interactive wheel.
1. **Trigger**: Show after 15 seconds or 50% scroll for new users.
2. **Logic**: Store 'Already Spun' state in `localStorage`.
3. **Prizes**: Static discount codes defined in a JSON object.
4. **Style**: Circular canvas with `var(--gradient-vibrant)` segments.

### Blueprint E: T051 - "Available Offers" Widget
**Goal**: Modernize the bland text blocks on the PDP into glassmorphic cards.
1. **Container**: Use `.whisper-glass` with `var(--padding-lg)`.
2. **Icons**: Use Whisper SVG library for "Bank Offer", "No Cost EMI", etc.
3. **Layout**: Horizontal scrolling flexbox on mobile, grid on desktop.

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
- **2026-01-20 (Antigravity)**: **REPO CLEANUP.** Removed legacy docs, CSVs, and redundant backups. Root is now standardized.
- **2026-01-20 (Antigravity)**: **T040 INITIAL PASS COMPLETE.** Applied Glassmorphism to Header/Cards and Vibrant Gradients to Buttons.
- **2026-01-20 (Antigravity)**: **ORCHESTRATION REBOOT.** Unified all instructions. Created "Blueprints" and root `package.json` for Discovery.
- **2026-01-20 (Antigravity)**: **T042 COMPLETE.** Mobile Quick Add sheet is live and pushed.
- **2026-01-20 (Antigravity)**: Fixed `theme-update.css` syntax and added Glassmorphism foundation.
- **2026-01-20 (Codex)**: **T043 STARTED.** Added size recommendation component and began layout polish for homepage and cart.
- **2026-01-20 (Codex)**: **T043 COMPLETE.** Implemented size prediction engine UI and refined homepage/cart presentation.
- **2026-01-20 (Codex)**: **T043 FOLLOW-UP.** Improved size recommender accessibility and responsive behavior.
