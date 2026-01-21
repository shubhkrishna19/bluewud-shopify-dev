# AGENTS.md: The "Swarm" Orchestration Manual

> [!IMPORTANT]
> **STRATEGIC PIVOT (2026-01-21)**: The objective has shifted. We are no longer just "improving" the theme. We are building a pixel-perfect, feature-rich replica of **WoodenStreet.com** as our MVP baseline, then suppressing it.
> ALL agents must prioritize **WoodenStreet Parity** over experimental features.

---

## 🧠 Critique & Culture (For The Human Developer)
> **Positive Criticism & Growth Nuances**:
> 1.  **"F1 Car, Go-Kart Speed"**: You have built a powerful collaborative environment, but we are too cautious. We need to loosen the leash on the agents. Let them break things in branches. The "Zero-Breakage" rule is good for main, but stifles innovation in dev branches.
> 2.  **The "Visual First" Trap**: We spent a lot of time on gradients before perfecting the "Buy Box" logic. WoodenStreet wins because their *information density* is high (delivery dates, EMIs, offers), not just because they look good. We need to shift focus to **Conversion UX** (data) over **Aesthetic UX** (Vibes).
> 3.  **Communication Clarity**: Your prompts are excellent and detailed. To scale, consider establishing a "One-Click" context loader—a single file we can read to know EVERYTHING (this file is striving to be that).

---

## 🤖 Multi-Agent "Swarm" Protocol (Industry Standard)
*Based on strict Hierarchical Task Decomposition and Manager-Worker patterns.*

### The Roles
1.  **The Architect (Manager)**: Analyzes high-level goals, creates the `implementation_plan.md`, and breaks it down into micro-tasks. (Currently: Antigravity).
2.  **The Specialist (Worker)**: Picks a single micro-task, executes it, and DOES NOT touch anything else.
3.  **The Auditor (QA)**: Verifies the work against the "WoodenStreet Standard".

### Interaction Rules
-   **JSON Handshakes**: When passing tasks, define inputs/outputs in JSON format in the logs.
-   **Atomic Commits**: `git commit -m "feat(pdp): add sticky buy button [T-102]"`
-   **No Hallucinations**: If a file doesn't exist, created it. Do not assume.

---

## 🏔️ The Mountain of Tasks (WoodenStreet MVP Backlog)
*Agents: Pick a task. Mark it `[/] In Progress`. Execute. Log. Repeat.*

### 🟢 Phase A: The "WoodenStreet" Homepage (Structure & Trust)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **A-01** | **Mega Menu Architecture** | [ ] Open | High | Multi-column dropdowns with category icons. NOT a simple list. |
| **A-02** | **"Experience Store" Locator** | [ ] Open | Med | A dedicated section/page for finding physical stores (build trust). |
| **A-03** | **Hero "Hybrid" Layout** | [ ] Open | Med | Main slider (Left) + 2 Static Promo Banners (Right) layout. |
| **A-04** | **Urgency Countdown Strip** | [/] In Progress - Antigravity | Low | "Sale Ends In: HH:MM:SS" strip immediately below the Hero. |
| **A-05** | **Trust Strip v2** | [ ] Open | Low | "20 Lakh+ Customers" | "Factory Direct" | "Free Shipping". |
| **A-06** | **"Shop The Look" Section** | [ ] Open | High | Hotspots on a lifestyle image linking to multiple products. |

### 🟡 Phase B: The Conversion Engine (PDP)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **B-01** | **Visual Variant Swatches** | [ ] Open | High | Replace dropdowns with Image/Texture circles for fabric selection. |
| **B-02** | **Sticky Footer (Mobile)** | [ ] Open | High | Fixed bottom bar with "Price" + "Add to Cart" on scroll. |
| **B-03** | **Detailed "Offers" Box** | [ ] Open | Med | Box inside Buy Form listing Bank Offers & EMI breakdowns. |
| **B-04** | **Delivery Date Estimator** | [ ] Open | High | "Check Delivery Date" input field with real/mock logic. |
| **B-05** | **"Compare" Floating Action** | [ ] Open | Low | Ability to add product to a comparison list. |
| **B-06** | **Review Summary Graph** | [ ] Open | Med | 5-star progress bars showing distribution of ratings. |
| **B-07** | **Zoom & Pan Gallery** | [ ] Open | Med | Desktop: Hover zoom. Mobile: Pinch zoom + swipe. |

### 🔵 Phase C: Navigation & Listings (PLP)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **C-01** | **Sidebar Filter Accordions** | [ ] Open | Med | Collapsible filters for Price, Material, Discount (checkbox style). |
| **C-02** | **Color Filter Swatches** | [ ] Open | Med | Visual color circles in the sidebar filter. |
| **C-03** | **Card: "Quick View" Hover** | [ ] Open | Low | "Eye" icon appears on hover for modal preview. |
| **C-04** | **Card: Discount Badges** | [ ] Open | Low | High-contrast Orange badge: "**40% OFF**". |
| **C-05** | **Card: Recommended Tag** | [ ] Open | Low | "Best Seller" or "Recommended" ribbon overlay. |

### 🔴 Phase D: Cart & Checkout Friction
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **D-01** | **"Toast" Add-to-Cart** | [ ] Open | Med | Non-intrusive popup: "Item added! [View Cart]". |
| **D-02** | **Slide-out Cart Drawer** | [ ] Open | High | (Already prioritized, ensure it matches WS density). |
| **D-03** | **Cart Savings Celebration** | [ ] Open | Low | "Congrats! You saved ₹2,000 on this order." message. |
| **D-04** | **3-Step Checkout Progress** | [ ] Open | Med | Visual bar: Cart > Address > Payment. |
| **D-05** | **Auto-Coupon Applier** | [ ] Open | High | "Apply Best Coupon" link in the cart summary. |

---

## 📜 Developer Logs (The Blockchain of Work)
*ALL agents must append their work here.*

- **2026-01-21 (Antigravity)**: **PIVOT INITIATED.** Re-wrote AGENTS.md. Defined "WoodenStreet MVP" scope. Populated 20+ High-Impact Tasks.
- **2026-01-21 (Antigravity)**: **CRITIQUE ADDED.** Added feedback on "Go-Kart Speed" and "Visual Trap".
