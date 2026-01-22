# AGENTS.md: The "Swarm" Orchestration Manual

<<<<<<< HEAD
<<<<<<< HEAD
## 🚀 AGENT QUICK START (READ ME FIRST)
**Command**: "Read this file. Execute the next task. Repeat."
**Context**: We are building **WoodenStreet.com** (Shopify Clone).
**Your Goal**: Maximize "Green" (Done) tasks in the detailed backlog below.

### 🔄 CONTINUOUS EXECUTION PROTOCOL
1.  **READ**: Scan "The Mountain of Tasks" below. Find the first `[ ] Open` item.
2.  **CLAIM**: Edit this file -> Change `[ ]` to `[/] In Progress`. **PUSH AGENTS.MD IMMEDIATELY.**
3.  **EXECUTE**: Write code (Liquid/CSS/JS) following the "Isolation Protocol".
4.  **PUSH CODE**: Commit and push your feature branch.
5.  **LOOP**: **DO NOT STOP.** Return to Step 1. Claim the *next* task. Repeat until you run out of tokens.

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

### Interaction Rules (CRITICAL: READ ME)
-   **🚨 RULE #1: CLAIM & PUSH FIRST**:
    1.  **CLAIM**: Mark your task `[/] In Progress` in this file.
    2.  **PUSH**: Immediately `git commit` and `git push` this file ONLY.
    3.  **CODE**: Once your claim is on the remote, START coding.
    *This prevents two agents from working on the same task simultaneously.*

-   **🚨 RULE #2: ISOLATION PROTOCOL (AUTO-MERGE FRIENDLY)**:
    -   **CSS**: NEVER edit `theme-update.css` directly. Create `assets/component-[name].css`.
    -   **SECTIONS**: Create sections but **DO NOT** add them to `index.json`. (Antigravity will integrate).
    -   **LOGS**: When logging below, leave **2 EMPTY LINES** between entries to prevent merge conflicts.

-   **🚨 RULE #3: ATOMIC PUSH & AUTO-MERGE**:
    -   **PUSH OFTEN**: Do not wait for perfection. Push your branch after every sub-task (Scaffolding -> Push, Logic -> Push, Styles -> Push).
    -   **AUTO-MERGE**: If you have permissions, enable "Auto-merge" on your PR. If not, ensure your PR is "Green" (No Conflicts) so the Human can 1-click merge.


---

## 🏔️ The Mountain of Tasks (WoodenStreet MVP Backlog)
*Agents: Pick a task. Mark it `[/] In Progress`. Execute. Log. Repeat.*

### 🟢 Phase A: The "WoodenStreet" Homepage (Structure & Trust)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
<<<<<<< HEAD
| **A-01** | **Mega Menu Architecture** | [x] Done - Codex | High | Multi-column dropdowns with category icons. NOT a simple list. |
| **A-02** | **"Experience Store" Locator** | [ ] Open | Med | A dedicated section/page for finding physical stores (build trust). |
| **A-03** | **Hero "Hybrid" Layout** | [x] Done - Codex | Med | Main slider (Left) + 2 Static Promo Banners (Right) layout. |
| **A-04** | **Urgency Countdown Strip** | [x] Done - Antigravity | Low | "Sale Ends In: HH:MM:SS" strip immediately below the Hero. |
| **A-05** | **Trust Strip v2** | [ ] Open | Low | "20 Lakh+ Customers" | "Factory Direct" | "Free Shipping". |
| **A-06** | **"Shop The Look" Section** | [ ] Open | High | Hotspots on a lifestyle image linking to multiple products. |

### 🟡 Phase B: The Conversion Engine (PDP)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **B-01** | **Visual Variant Swatches** | [x] Done - Codex-01 | High | Replace dropdowns with Image/Texture circles for fabric selection. |
| **B-02** | **Sticky Footer (Mobile)** | [x] Done - Codex-01 | High | Fixed bottom bar with "Price" + "Add to Cart" on scroll. |
| **B-03** | **Detailed "Offers" Box** | [x] Done - Codex-01 | Med | Box inside Buy Form listing Bank Offers & EMI breakdowns. |
| **B-04** | **Delivery Date Estimator** | [x] Done - Codex-01 | High | "Check Delivery Date" input field with real/mock logic. |
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
=======
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
>>>>>>> origin/pr/35

- **2026-01-21 (Antigravity)**: **PIVOT INITIATED.** Re-wrote AGENTS.md. Defined "WoodenStreet MVP" scope. Populated 20+ High-Impact Tasks.
- **2026-01-21 (Antigravity)**: **CRITIQUE ADDED.** Added feedback on "Go-Kart Speed" and "Visual Trap".
- **2026-01-21 (Codex-01)**: Selected task B-01 - Visual Variant Swatches.
- **2026-01-21 (Codex-01)**: Completed task B-01 - Visual Variant Swatches component.
- **2026-01-21 (Codex-001)**: Added visual variant swatches component snippet scaffolding (PR #28).
- **2026-01-20 (Codex)**: **A-03 STARTED.** Claimed Hybrid Hero for Woodenstreet MVP Phase A.
- **2026-01-20 (Codex)**: **A-03 COMPLETE.** Delivered Woodenstreet Hybrid Hero component and wired into homepage.
- **2026-01-20 (Codex)**: **A-01 STARTED.** Building Woodenstreet mega menu component for Phase A.
- **2026-01-20 (Codex)**: **A-01 COMPLETE.** Delivered Woodenstreet mega menu component and wired into header.
- **2026-01-21 (Codex-001)**: Created hero-hybrid section component (PR #26).
- **2026-01-21 (Codex-01)**: Completed tasks B-01, B-02, B-03, B-04. (PR #30).
- **2026-01-21 (Codex-001)**: Added component scaffolding for B-01, B-02, B-03, B-04 (PR #31).

---

<<<<<<< HEAD
## 🆘 SOS / Q&A (Ask for Help Here)
*Agents: If blocked, write your question here. Manager (Antigravity) will answer in the next cycle.*
=======
## 🎯 Current Development Goals (Homepage First)
1. Verify CTA hierarchy and product grid consistency before inner-page work.
2. Validate homepage spacing rhythm across all sections and remove any leftover utility styles.
3. Smoke-check interactive elements (tabs, size engine, cart recovery) in theme preview.
4. Harmonize highlights banner styling with Whisper glass tokens.

---

## 🎨 Mandatory Aesthetic Guidelines (The Whisper Standard)
*Apply these tokens/styles to EVERY new component in `assets/theme-update.css`.*
>>>>>>> origin/pr/35

**Format**: `[AgentName]: QUESTION ...`

-   [Example-Agent]: How do I access the `settings_schema.json`?
    -   [Antigravity]: use `config/settings_schema.json`.
=======
=======
>>>>>>> origin/pr/36
> [!IMPORTANT]
> **STRATEGIC PIVOT (2026-01-21)**: The objective has shifted. We are no longer just "improving" the theme. We are building a pixel-perfect, feature-rich replica of **WoodenStreet.com** as our MVP baseline, then suppressing it.
> ALL agents must prioritize **WoodenStreet Parity** over experimental features.

## 🤖 Multi-Agent "Swarm" Protocol
1.  **The Architect**: Antigravity (Manager).
2.  **The Specialist**: You (Worker).
3.  **The Auditor**: Reviews against WoodenStreet.com.

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/pr/36
## 🏔️ The Mountain of Tasks (WoodenStreet MVP Backlog)

### 🟢 Phase A: The "WoodenStreet" Homepage
- **A-01 Mega Menu Architecture** | [ ] Open
- **A-02 "Experience Store" Locator** | [ ] Open
<<<<<<< HEAD
- **A-03 Hero "Hybrid" Layout** | [x] Completed - Codex-001
=======
- **A-03 Hero "Hybrid" Layout** | [x] Completed - Codex-WSH1
>>>>>>> origin/pr/36
- **A-04 Urgency Countdown Strip** | [/] In Progress (Antigravity)
- **A-05 Trust Strip v2** | [ ] Open | "20 Lakh+ Customers"
- **A-06 "Shop The Look" Section** | [ ] Open

### 🟡 Phase B: The Conversion Engine (PDP)
<<<<<<< HEAD
- **B-01 Visual Variant Swatches** | [x] Completed - Codex-001 | Replace dropdowns with Images.
- **B-02 Sticky Footer (Mobile)** | [x] Completed - Codex-001 | Fixed bottom bar.
=======
- **B-01 Visual Variant Swatches** | [x] Completed - Codex-WSH1 | Replace dropdowns with Images.
- **B-02 Sticky Footer (Mobile)** | [x] Completed - Codex-WSH1 | Fixed bottom bar.
>>>>>>> origin/pr/36
- **B-03 Detailed "Offers" Box** | [ ] Open | Bank Offers & EMI.
- **B-04 Delivery Date Estimator** | [ ] Open
- **B-05 "Compare" Floating Action** | [ ] Open
- **B-07 Zoom & Pan Gallery** | [ ] Open

## 📜 Developer Logs
- 2026-01-21 (Antigravity): PIVOT INITIATED. Re-wrote AGENTS.md.


<<<<<<< HEAD
- 2026-01-21 (Codex-001): Created hero-hybrid section component.


- 2026-01-21 (Codex-001): Added visual variant swatches section and styles.


- 2026-01-21 (Codex-001): Added sticky mobile footer section and styles.
>>>>>>> origin/pr/34
=======
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
>>>>>>> origin/pr/35
=======
- 2026-01-21 (Codex-WSH1): Added WoodenStreet Hero Hybrid section scaffold.


- 2026-01-21 (Codex-WSH1): Implemented visual variant swatches for PDP.


- 2026-01-21 (Codex-WSH1): Added WoodenStreet sticky footer section scaffold.
>>>>>>> origin/pr/36
