# AGENTS.md — LiveShopifyProject (Bluewud Storefront)
# Universal AI context. Works with: Antigravity, Claude Code, MiniMax, OpenClaw, Codex, Cursor, Copilot
# Last updated: 2026-03-01 by Shubh

---

## ⚡ PROJECT CONTEXT (Read First — All AIs)

- **Project:** LiveShopifyProject — Bluewud's LIVE customer storefront
- **Platform:** Shopify (Empire base + Whisper aesthetic)
- **Master CSS:** `assets/wooden-master.css` (v1.7.0) — ONE master file, do not create another
- **Status:** LIVE — real customers, real revenue. Mistakes = store down.
- **Owner:** Shubh (Bluewud)
- **Deploy:** `shopify theme push` — ONLY Shubh runs this

### Locked — Never Change Without Shubh
| Thing | Why |
|---|---|
| `layout/theme.liquid` | One bad line = store down |
| `config/settings_schema.json` | Invalid JSON = theme editor broken |
| `assets/section-hydration.js` | Empire bridge — very risky |
| `zippy_widget_1511` pincode IDs | Third-party checkout integration |
| Font families | Brand typography |
| `wooden-master.css` name/structure | Everything flows from it |

### Safe to Edit
- `sections/*.liquid`, `snippets/*.liquid` — layout/content improvements
- `assets/wooden-master.css` — style improvements within existing sections
- `locales/en.default.json` — translations
- `config/settings_data.json` — setting values

### Testing
```bash
shopify theme dev          # local preview
shopify theme push --development  # push to dev theme (safe)
shopify theme push         # LIVE — Shubh only
```

---

# AGENTS.md: The "Swarm" Orchestration Manual

> **🆕 NEW AGENT? START HERE (CONTEXT LOADER)**
> **YOUR ROLE**: You are a "Worker Agent" (Codex-XX).
> **YOUR MANAGER**: "Antigravity" (The Architect).
> **YOUR MISSION**: Build a pixel-perfect clone of **Wooden.com** (Shopify Theme).
> **YOUR INSTRUCTION**:
> 1. Read this file completely.
> 2. Pick the first `[ ] Open` task from "The Mountain of Tasks".
> 3. Change `[ ]` to `[/] In Progress`. Commit & Push this file IMMEDIATELY to claim the task.
> 4. Execute the task following the **Isolation Protocol** (below).
> 5. Log your work at the bottom. Repeat.

---

## 🚀 AGENT QUICK START (READ ME FIRST)
**Command**: "Read this file. Execute the next task. Repeat."
**Context**: We are building **Wooden.com** (Shopify Clone).
**Your Goal**: Maximize "Green" (Done) tasks in the detailed backlog below.

## 🏔️ The Mountain of Tasks (Phase 3: Premium Restoration)

### 🚨 EMERGENCY: UI Restoration (Fixed "AI Slop" State)
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **R-01** | **Header & Gap Fix** | [x] Done | High | Solve the 200px white void below announcement bar. Fix collapsed header. |
| **R-02** | **Contrast Restoration** | [x] Done | Low | Fix white-on-white text in Trending Now cards. Force Slate-900. |
| **R-03** | **Lookbook Logic Fix** | [x] Done | Med | Fix "Shop Bedroom" repeating on all cards. Map links correctly. |
| **R-04** | **Showcase Blob Cleanup** | [x] Done | Med | Remove giant black/blue placeholder blobs. Restore SVG icons & UGC images. |
| **R-05** | **Trust Signal Icons** | [x] Done | Low | Restore missing SVG icons in the "20 Lakh+ Customers" strip. |
| **R-06** | **Social Proof Grid** | [x] Done | Med | Fix #BluewudStyle grid overflow and image scaling. |

### 🧠 Phase I: Mega Brain Integration
| ID | Task Name | Status | Complexity | Description |
| :--- | :--- | :--- | :--- | :--- |
| **I-01** | **Skill Inventory Audit** | [x] Done | Low | Analyze cloned skills and map relevance to project. |
| **I-02** | **Swarm Workflow Setup** | [x] Done | Med | Defined subagent roles: Liquifier, Artist, Logic. |
| **I-03** | **Premium UI Audit** | [x] Done | High | Review entire site using `ui-ux-pro-max` guidelines. |
| **I-04** | **Advanced Search Overlay** | [x] Done | High | Replace standard search with high-polish suggestions modal. |

---

## 📜 Developer Logs
- **2026-01-25 (Antigravity)**: **EMERGENCY RESTORATION STARTED.** Claimed R-03, R-04, R-05, R-06 for surgical restoration.
- **2026-01-25 (Antigravity)**: **EMERGENCY RESTORATION STARTED.** Screenshots revealed critical failures: Header collapse, invisible product text, and broken showcase blobs. Switching all available agents to "Premium Restoration" protocol.
- **2026-01-24 (Antigravity)**: **MEGA BRAIN DEPLOYED.** Cloned 243+ professional skills. Resolved codebase technical debt.
- **2026-01-23 (Antigravity)**: **MISSION ACCOMPLISHED (MVP).** Initial 40+ tasks complete.
- **2026-01-23 (Swarm)**: Multi-agent cycle complete. Implemented Phase E, F, and G.
- **2026-01-25 (Codex-XX)**: **I-04 COMPLETE.** Restored advanced search overlay with predictive search modal, assets, and snippets.

---

## 🆘 SOS / Q&A
- **Issue**: The current "Whisper" sections are bleeding raw Tailwind classes that don't match the Empire Theme's compiled CSS.
- **Solution**: Forcing standard Liquid/CSS overrides in `wooden-ui-overrides.css`.
- **2026-01-25 (Codex)**: **CSS consolidation executed.** Created `assets/wooden-master.css`.
- **2026-01-25 (Antigravity)**: **EMERGENCY FIX DEPLOYED.** Detected and stripped massive git merge conflict markers from `theme.liquid` and `wooden-master.css` that were causing "slop state". Restored site functionality.
- **2026-01-25 (Codex)**: **Restored legacy CSS assets.** Reintroduced original component stylesheets to avoid missing references while keeping the master stylesheet active.
- **2026-02-18 (Codex-XX)**: **Premium UI fixes completed.** Fixed R-03 (Lookbook), R-06 (Social Proof Grid), I-04 (Advanced Search). Replaced placeholder gradients with real Unsplash images in #BluewudStyle gallery.
- **2026-02-18 (Codex-XX)**: **Shopify Theme Visual Fixes.** Fixed broken press logos (SVG placeholders), broken video placeholder (added fallback image), replaced placeholder SVGs in Experience Store, Shop The Look, Testimonials, and Category Grid sections with real Unsplash images. Added contrast improvements for white-on-white elements.


## Session Start Checklist

Every session, before writing any code:
1. Read this AGENTS.md fully
2. Read TASKS.md — check what's IN PROGRESS (don't duplicate work)
3. Claim your task in TASKS.md before starting
4. Work on a branch: feat/[agent-tag]-T[id]-[slug]
5. Full protocol: BluewudOrchestrator/COORDINATION.md
