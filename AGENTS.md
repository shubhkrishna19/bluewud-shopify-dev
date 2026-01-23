# AGENTS.md: The "Swarm" Orchestration Manual

> **🆕 NEW AGENT? START HERE (CONTEXT LOADER)**
> **YOUR ROLE**: You are a "Worker Agent" (Codex-XX).
> **YOUR MANAGER**: "Antigravity" (The Architect).
> **YOUR MISSION**: Build a pixel-perfect clone of **WoodenStreet.com** (Shopify Theme).
> **YOUR INSTRUCTION**:
> 1. Read this file completely.
> 2. Pick the first `[ ] Open` task from "The Mountain of Tasks".
> 3. Change `[ ]` to `[/] In Progress`. Commit & Push this file IMMEDIATELY to claim the task.
> 4. Execute the task following the **Isolation Protocol** (below).
> 5. Log your work at the bottom. Repeat.

---

## 🚀 AGENT QUICK START (READ ME FIRST)
**Command**: "Read this file. Execute the next task. Repeat."
**Context**: We are building **WoodenStreet.com** (Shopify Clone).
**Your Goal**: Maximize "Green" (Done) tasks in the detailed backlog below.

---

## 🏔️ The Mountain of Tasks (Phase 2: Conversion & Polish)
*Agents: Pick a task. Mark it `[/] In Progress`. Execute. Log. Repeat.*

### 🚀 Phase E: Conversion Boosters (PDP & Cart)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **E-01** | **Sticky Add-to-Cart (Desktop)** | [x] Done | Med | Floating bar on scroll (Desktop) with Product Title \| Price \| Add to Cart. |
| **E-02** | **"Check Pincode" Widget** | [x] Done | High | Real-time serviceability check input below price. (Mock Data for now). |
| **E-03** | **EMI & Bank Offers Accordion** | [x] Done | Med | Detailed breakdown of EMI plans and Bank Offers in an accordion. |
| **E-04** | **Cart Drawer Upsells** | [x] Done | High | "Frequently Bought Together" slider inside the Cart Drawer. |
| **E-05** | **Free Shipping Progress Bar** | [x] Done | Low | Dynamic progress bar in Cart Drawer: "Add ₹X more for Free Shipping". |

### 🎨 Phase F: Visual Perfection (Global)
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **F-01** | **Mobile Bottom Navigation** | [x] Done | High | App-like bottom nav: Home \| Categories \| Wishlist \| Cart \| Account. |
| **F-02** | **Search Overlay Polish** | [x] Done | Med | Full-screen search overlay with "Trending Searches" and "Popular Products". |
| **F-03** | **Product Card Badges** | [x] Done | Low | "Best Seller", "New Arrival", "50% OFF" badges with correct WS styling. |
| **F-04** | **Footer Mobile Accordion** | [x] Done | Low | Ensure footer links collapse into accordions on mobile automatically. |
| **F-05** | **Global Icon Refresh** | [x] Done | Med | Replace generic icons with WoodenStreet-style thin line icons (Feather/Phosphor). |

### ⚡ Phase G: Performance & Technical
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **G-01** | **Lazy Load Optimization** | [x] Done | High | Ensure all off-screen images/iframes have `loading="lazy"`. |
| **G-02** | **Critical CSS Extraction** | [ ] Open | High | Inline critical CSS for First Contentful Paint (FCP) improvement. |
| **G-03** | **Script Deferral** | [ ] Open | Med | Defer non-essential JS (Reviews, Chat bots) to reduce TBT. |

---

### 💎 Phase H: Homepage Polish & Beautification
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **H-01** | **Hero Section Upgrade** | [x] Done | High | Implement `woodenstreet-hero-hybrid` with proper overlay, typography, and mobile responsiveness. |
| **H-02** | **Engagement Sections** | [x] Done | High | Implement `woodenstreet-shop-the-look` and `woodenstreet-experience-store` sections. |
| **H-03** | **Header & Mega Menu Polish** | [x] Done | Med | Fix alignment, icon spacing, search bar styling, and mobile menu transitions. |
| **H-04** | **Product Card Standardization** | [x] Done | High | Unify all product cards to match WoodenStreet design (hover effects, badges, price styling). |
| **H-05** | **Global Spacing & Typography** | [x] Done | Med | Enforce 8px grid system, consistent section spacing, and correct font usage (Poppins/Inter). |
| **H-06** | **Category Navigation Strip** | [ ] Open | Med | Horizontal strip of circular category icons above the hero or below. |
| **H-07** | **WoodenStreet Testimonials** | [ ] Open | High | Clean testimonial slider with customer photos and review text. |
| **H-08** | **HP Video Section** | [ ] Open | Med | Furniture demo video section with autoplay and "Shop the Look" overlay. |

---

### 🔴 Phase D: Cart & Checkout Friction
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **D-01** | **"Toast" Add-to-Cart** | [/] In Progress | Med | Non-intrusive popup: "Item added! [View Cart]". |
| **D-02** | **Slide-out Cart Drawer** | [x] Done | High | (Already prioritized, ensure it matches WS density). |
| **D-03** | **Cart Savings Celebration** | [ ] Open | Low | "Congrats! You saved ₹2,000 on this order." message. |
| **D-04** | **3-Step Checkout Progress** | [ ] Open | Med | Visual bar: Cart > Address > Payment. |
| **D-05** | **Auto-Coupon Applier** | [x] Done - GPT-5.2-Codex | High | "Apply Best Coupon" link in the cart summary. |

---

## 📜 Developer Logs
- **2026-01-23 (Swarm)**: Multi-agent cycle complete. Implemented Phase E (E-01-E-05), Phase F (F-01-F-05), and G-01.
- **2026-01-23 (GPT-5.2-Codex)**: Completed task D-02 - Slide-out Cart Drawer (Refined in PR 49).
- **2026-01-23 (Antigravity)**: **PHASE 1 COMPLETE.** Refreshed backlog for Phase 2 (Conversion & Polish).
- **2026-01-23 (Antigravity)**: Completed H-01 through H-09 (Homepage Polish).
- **2026-01-22 (GPT-5.2-Codex)**: Completed task D-05 - Auto-Coupon Applier snippet, styling, and cart integrations.
- **2026-01-22 (GPT-5.2-Codex)**: Added discount badge and recommended ribbon to product cards.
- **2026-01-22 (GPT-5.2-Codex)**: Completed task B-03 - Detailed offers box enhancements.

---

## 🆘 SOS / Q&A
- [Current]: Ready for Phase 2 assignments. Starting fresh tomorrow morning.
