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

### 🟢 Phase A: The "WoodenStreet" Homepage (Structure & Trust)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **A-01** | **Mega Menu Architecture** | [x] Done - Codex | High | Multi-column dropdowns with category icons. NOT a simple list. |
| **A-02** | **"Experience Store" Locator** | [x] Done - GPT-5.2-Codex | Med | A dedicated section/page for finding physical stores (build trust). |
| **A-03** | **Hero "Hybrid" Layout** | [x] Done - Codex | Med | Main slider (Left) + 2 Static Promo Banners (Right) layout. |
| **A-04** | **Urgency Countdown Strip** | [x] Done - Antigravity | Low | "Sale Ends In: HH:MM:SS" strip immediately below the Hero. |
| **A-05** | **Trust Strip v2** | [x] Done - Antigravity | Low | "20 Lakh+ Customers" | "Factory Direct" | "Free Shipping". |
| **A-06** | **"Shop The Look" Section** | [x] Done - GPT-5.2-Codex | High | Hotspots on a lifestyle image linking to multiple products. |

### 🟡 Phase B: The Conversion Engine (PDP)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **B-01** | **Visual Variant Swatches** | [x] Done - Codex-01 | High | Replace dropdowns with Image/Texture circles for fabric selection. |
| **B-02** | **Sticky Footer (Mobile)** | [x] Done - Codex-01 | High | Fixed bottom bar with "Price" + "Add to Cart" on scroll. |
| **B-03** | **Detailed "Offers" Box** | [x] Done - GPT-5.2-Codex | Med | Box inside Buy Form listing Bank Offers & EMI breakdowns. |
| **B-04** | **Delivery Date Estimator** | [x] Done - Codex-01 | High | "Check Delivery Date" input field with real/mock logic. |
| **B-05** | **"Compare" Floating Action** | [x] Done - Codex-01 | Low | Ability to add product to a comparison list. |
| **B-06** | **Review Summary Graph** | [x] Done - Codex-XX | Med | 5-star progress bars showing distribution of ratings. |
| **B-07** | **Zoom & Pan Gallery** | [x] Done - Codex-01 | Med | Desktop: Hover zoom. Mobile: Pinch zoom + swipe. |

### 🔵 Phase C: Navigation & Listings (PLP)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **C-01** | **Sidebar Filter Accordions** | [x] Done - Codex-XX | Med | Collapsible filters for Price, Material, Discount (checkbox style). |
| **C-02** | **Color Filter Swatches** | [/] In Progress | Med | Visual color circles in the sidebar filter. |
| **C-03** | **Card: "Quick View" Hover** | [/] In Progress | Low | "Eye" icon appears on hover for modal preview. |
| **C-04** | **Card: Discount Badges** | [x] Done - GPT-5.2-Codex | Low | High-contrast Orange badge: "**40% OFF**". |
| **C-05** | **Card: Recommended Tag** | [x] Done - GPT-5.2-Codex | Low | "Best Seller" or "Recommended" ribbon overlay. |

### 🔴 Phase D: Cart & Checkout Friction
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **D-01** | **"Toast" Add-to-Cart** | [/] In Progress | Med | Non-intrusive popup: "Item added! [View Cart]". |
| **D-02** | **Slide-out Cart Drawer** | [x] Done - GPT-5.2-Codex | High | (Already prioritized, ensure it matches WS density). |
| **D-03** | **Cart Savings Celebration** | [ ] Open | Low | "Congrats! You saved ₹2,000 on this order." message. |
| **D-04** | **3-Step Checkout Progress** | [ ] Open | Med | Visual bar: Cart > Address > Payment. |
| **D-05** | **Auto-Coupon Applier** | [x] Done - GPT-5.2-Codex | High | "Apply Best Coupon" link in the cart summary. |

---

## 📜 Developer Logs
- **2026-01-23 (Swarm)**: Multi-agent cycle complete. Implemented E-01 through G-01.
- **2026-01-23 (GPT-5.2-Codex)**: Completed task D-02 - Slide-out Cart Drawer.
- **2026-01-23 (Local-Agent-01)**: Claimed tasks E-01 (Sticky Add-to-Cart) and E-03 (EMI & Bank Offers Accordion).
- **2026-01-23 (Antigravity)**: **PHASE 1 COMPLETE.** Refreshed backlog for Phase 2 (Conversion & Polish).
- **2026-01-23 (Antigravity)**: Completed H-01 through H-09 (Homepage Polish).
- **2026-01-22 (GPT-5.2-Codex)**: Completed tasks C-04 and C-05 - Card badges and recommended ribbons.
- **2026-01-22 (GPT-5.2-Codex)**: Completed task B-03 - Detailed offers box enhancements.
- **2026-01-22 (GPT-5.2-Codex)**: Completed task D-05 - Auto-Coupon Applier snippet, styling, and cart integrations.

---

## 🆘 SOS / Q&A
- [Current]: Ready for Phase 2 assignments. Finishing up conversion boosters.
