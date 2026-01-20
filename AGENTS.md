# AGENTS.md: The Gold Standard Orchestration Manual
This is the **Unified Source of Truth** for the Bluewud Shopify development team. Every agent (Antigravity, Codex, etc.) must treat this file as their primary operating instruction.

---

## 🏛️ Project Vision: "Empire Logic, Whisper Style"
We are migrating the robust functional core of the **Empire Theme** into the ultra-premium, modern aesthetic of **Whisper**.
- **The Bar**: We must exceed the functionality and beauty of `woodenstreet.com`.
- **The UI Level**: Vibrant gradients, Glassmorphism, smooth micro-animations, and mobile-first gesture control.
- **Zero-Breakage**: Pincode (Zippy), AJAX Cart, and Buy Now buttons must remain 100% functional.
- **Architectural Goal**: "Forever Sync". Maintain 100% parity between local branches and origin/main.

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
| **P11** | **UX & Personalization** | [/] Active | Codex/Anti | **High-Velocity UI Track** |
| T040 | - Global Aesthetic Bridge | [x] Done | Codex | Glassmorphism foundation. |
| T042 | - Mobile Quick Add Sheet | [x] Done | Anti | AJAX + Gesture sheet. |
| T043 | - Size Prediction Engine | [x] Done | Codex | Polished modal activation. |
| T044 | - Abandoned Cart Recovery | [x] Done | Codex | Animated banner activation. |
| T047 | - Floating Quick Action Bar | [ ] Pending || **Mobile UX**. Thumb-friendly bar. |
| T048 | - Micro-interactions (Lottie) | [ ] Pending || **Delight**. SVG button states. |
| **P12** | **Growth & Conversions** | [ ] Pending | Codex | **Revenue Optimization** |
| T046 | - Spin-to-Win Gamification | [ ] Pending || See **Blueprint D**. |
| T049 | - Haptic Feedback Sync | [ ] Pending || Browser Vibrate API for actions. |
| T050 | - Post-Purchase Upsell Box | [ ] Pending || Dynamic "Others bought" logic. |
| T051 | - "Available Offers" Widget | [ ] Pending || See **Blueprint E**. |
| T052 | - Dynamic Price Thresholds | [ ] Pending || "Add $10 more for free gift!". |
| **P13** | **Product & Content Polish** | [ ] Pending || **High-Trust Assets** |
| T055 | - Dynamic Image Zoom v2 | [ ] Pending || Ultra-high res hover zoom. |
| T056 | - Video Player Integration | [ ] Pending || Auto-playing product videos. |
| T101 | - "360 View" Simulation | [ ] Pending || Interactive furniture rotation. |
| T102 | - AR Furniture Placement | [ ] Pending || Link to Shopify AR models. |
| T057 | - Real-time Stock Counter | [ ] Pending || Social proof "Only X left!". |
| T058 | - Reviews & Social Proof | [ ] Pending || Glassmorphic Review Cards. |
| **P14** | **Performance & Search** | [ ] Pending | Anti | **Speed & Visibility** |
| T060 | - Predictive Search UI | [ ] Pending || Visual search results. |
| T110 | - Image Blur-up Placeholders | [ ] Pending || Ultra-fast perceived loading. |
| T061 | - Image Optimization Audit | [ ] Pending || WebP migration & lazy loading. |
| T062 | - Critical CSS Inlining | [ ] Pending || Score 95+ on Mobile Lighthouse. |
| **P15** | **Trust & Social Logic** | [ ] Pending || **Brand Integrity** |
| T120 | - Dynamic Pincode Logic v2 | [ ] Pending || Integrate Zippy with Whisper UI. |
| T121 | - Verified Buyer Badges | [ ] Pending || Floating badges on mobile PDP. |
| T122 | - WhatsApp Support Flyout | [ ] Pending || Polished "Chat with us" widget. |
| **P16** | **Production QA & Polish** | [ ] Pending || **Final Pre-Launch Audit** |
| T070 | - Checkout UI Sync | [ ] Pending || Syncing checkout with Whisper. |
| T071 | - Email/SMS Template Sync | [ ] Pending || Whisper-branded notifications. |
| T072 | - Error Page (404) Design | [ ] Pending || Premium "Lost in space" 404. |

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

/* Scroll Snap for Collections */
.whisper-snap {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

---

## 🙋 Head Planner Optimization Queries (FOR USER)
*Review these architectural decisions and provide feedback:*

1. **Brand Voice**: Should Whisper be "Minimalist Luxury" (lots of white space) or "Vibrant Tech-Luxe" (more gradients/neon accents)?
2. **Animation Budget**: Do we prioritize 60FPS speed (few animations) or "Boutique Experience" (heavy Lottie/Scroll-triggered effects)?
3. **Pincode Strategy**: Should the Zippy widget remain in its default location, or do we want to "Whisper-fy" it into a bottom-sheet experience on mobile?
4. **Checkout Experience**: Are we opting for the Shopify 1-page checkout, or are we intending to preserve the 3-step branded flow?

---

## 🧬 History & Developer Logs
- **2026-01-20 (Antigravity)**: **REPO CLEANUP.** Removed legacy docs, CSVs, and redundant backups. Root is now standardized.
- **2026-01-20 (Antigravity)**: **T040 INITIAL PASS COMPLETE.** Applied Glassmorphism to Header/Cards and Vibrant Gradients to Buttons.
- **2026-01-20 (Antigravity)**: **ORCHESTRATION REBOOT.** Unified all instructions. Created "Blueprints" and root `package.json` for Discovery.
- **2026-01-20 (Antigravity)**: **T042 COMPLETE.** Mobile Quick Add sheet is live and pushed.
- **2026-01-20 (Antigravity)**: Fixed `theme-update.css` syntax and added Glassmorphism foundation.
- **2026-01-20 (Codex)**: **T040 COMPLETE.** Updated Whisper hero styling for production-ready homepage polish.
- **2026-01-20 (Antigravity)**: **HOMEPAGE HARDENING.** Resolved Cart Drawer stuck-open bug (White Area blocker). Activated Size Engine & Recovery UI with premium Glassmorphism.
- **2026-01-20 (Antigravity)**: **FINAL SYNC.** Merged all remaining Codex PR branches and consolidated the repo. Ready for multi-agent development.
