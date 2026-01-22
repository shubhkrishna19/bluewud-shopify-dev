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
> 3.  **Communication Clarity**: Jargon is friction. Use simple instructions: "Make it look like Apple," "Make it fast like Google."

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

-   **🚨 RULE #3: STRICT AUTO-MERGE ELIGIBILITY**:
    -   **PRE-PUSH SYNC**: ALWAYS `git pull origin main` before starting.
    -   **AUTO-MERGE**: Branches are ONLY eligible for auto-merge if they:
        1.  touch DIFFERENT files than other active agents (check `AGENTS.md` logs).
        2.  pass all automated tests (if any).
        3.  have NO conflicts with `main`.
    -   **CONFLICTS**: If you create a conflict, YOU are responsible for resolving it locally before re-pushing. DO NOT push broken builds.


---

## 🏔️ The Mountain of Tasks (WoodenStreet MVP Backlog)
## 🏔️ The Mountain of Tasks (Phase 2: Conversion & Polish)
*Agents: Pick a task. Mark it `[/] In Progress`. Execute. Log. Repeat.*

### 🚀 Phase E: Conversion Boosters (PDP & Cart)
| ID | Task Name | Status | Complexity | Description to Match WoodenStreet |
| :--- | :--- | :--- | :--- | :--- |
| **E-01** | **Sticky Add-to-Cart (Desktop)** | [ ] Open | Med | Floating bar on scroll (Desktop) with Product Title | Price | Add to Cart. |
| **E-02** | **"Check Pincode" Widget** | [/] In Progress - Codex-02 | High | Real-time serviceability check input below price. (Mock Data for now). |
| **E-03** | **EMI & Bank Offers Accordion** | [ ] Open | Med | Detailed breakdown of EMI plans and Bank Offers in an accordion. |
| **E-04** | **Cart Drawer Upsells** | [ ] Open | High | "Frequently Bought Together" slider inside the Cart Drawer. |
| **E-05** | **Free Shipping Progress Bar** | [ ] Open | Low | Dynamic progress bar in Cart Drawer: "Add ₹X more for Free Shipping". |

### 🎨 Phase F: Visual Perfection (Global)
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **F-01** | **Mobile Bottom Navigation** | [/] In Progress - Codex-03 | High | App-like bottom nav: Home | Categories | Wishlist | Cart | Account. |
| **F-02** | **Search Overlay Polish** | [ ] Open | Med | Full-screen search overlay with "Trending Searches" and "Popular Products". |
| **F-03** | **Product Card Badges** | [/] In Progress - Codex-04 | Low | "Best Seller", "New Arrival", "50% OFF" badges with correct WS styling. |
| **F-04** | **Footer Mobile Accordion** | [ ] Open | Low | Ensure footer links collapse into accordions on mobile automatically. |
| **F-05** | **Global Icon Refresh** | [ ] Open | Med | Replace generic icons with WoodenStreet-style thin line icons (Feather/Phosphor). |

### ⚡ Phase G: Performance & Technical
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **G-01** | **Lazy Load Optimization** | [ ] Open | High | Ensure all off-screen images/iframes have `loading="lazy"`. |
| **G-02** | **Critical CSS Extraction** | [ ] Open | High | Inline critical CSS for First Contentful Paint (FCP) improvement. |
| **G-03** | **Script Deferral** | [ ] Open | Med | Defer non-essential JS (Reviews, Chat bots) to reduce TBT. |

---

## 📜 Developer Logs (The Blockchain of Work)
*ALL agents must append their work here.*

- **2026-01-23 (Antigravity)**: **PHASE 1 COMPLETE.** Refreshed backlog for Phase 2 (Conversion & Polish).
- **2026-01-23 (Antigravity)**: Completed H-01 through H-09 (Homepage Polish).
- **2026-01-21 (Antigravity)**: **PIVOT INITIATED.** Re-wrote AGENTS.md. Defined "WoodenStreet MVP" scope.
- **2026-01-21 (Codex-01)**: Completed task B-01 - Visual Variant Swatches component.
- **2026-01-20 (Codex)**: **A-03 COMPLETE.** Delivered Woodenstreet Hybrid Hero component.
- **2026-01-20 (Codex)**: **A-01 COMPLETE.** Delivered Woodenstreet mega menu component.

---

## 🆘 SOS / Q&A
*Agents: If blocked, write your question here.*

- [Current]: Ready for Phase 2 assignments.
