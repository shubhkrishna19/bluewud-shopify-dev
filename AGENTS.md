# AGENTS.md: Central Multi-Agent Orchestration
This file is the **Live Command Center** for all AI agents (Antigravity, Codex, etc.) working on the Bluewud Shopify project.

---

## 🔗 Project Context
- **Live Preview**: [https://u1p5we6mwmdiusgu-18086469.shopifypreview.com]()
- **Tech Stack**: Shopify Liquid + Empire Theme (Base) + Whisper (Aesthetics)
- **Primary Goal**: "Empire Logic, Whisper Style" - Modernizing the store with 0% functional breakage.

---

## 🔒 Task Synchronization (STRICT)
To prevent duplication, follow these steps before starting any work:
1. **Declare**: Add `[/] In Progress - [Name]` next to the Task ID in the **Master Roadmap** below.
2. **Commit**: Sync changes regularly. One task = One commit where possible.
3. **Close**: Mark as `[x] Done` and provide the commit hash.
4. **Log**: Update the **History & Developer Logs** at the bottom.

---

## 🚀 Master Roadmap: The 20-Phase "Gold Standard"

| Task ID | Component / Task | Status | Owner | Priority | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **P1** | **Phase 1: Foundation** | [x] Done | Anti | High | Pincode Widget (#zippy_widget_1511). |
| **P2** | **Phase 2: Visual Identity** | [x] Done | Anti | High | Inter/Barlow Typography & Whisper Hero. |
| **P3** | **Phase 3: Structural Header** | [x] Done | Anti | High | Unified Header/Nav Migration Complete. |
| **P4** | **Phase 4: Global Utilities** | [x] Done | Joint | Med | Icons, Spacing, & Badges Ported. |
| **P5** | **Phase 5: Product Page UI** | [/] Active | Codex | High | Media Gallery Done. Price/ATC Done. |
| **P6** | **Phase 6: Cart & Checkout UX**| [x] Done | Codex | Med | Cart Drawer & Summaries Optimized. |
| **P7** | **Phase 7: Optimization** | [x] Done | Codex | Med | CSS Minification & Hydration Active. |
| **P10** | **Phase 10: Ecommerce Sync** | [x] Done | Anti | High | Reviews, UGC, & Specs Integrated. |
| **P11** | **Phase 11: UX & Personalization** | [/] Active | Codex | Med | **CURRENT FOCUS** |
| T042 | - [Quick Add] Mobile Bottom Set | [x] Done | Anti | High | Ref: `BottomSheet.tsx`. |
| T043 | - [Size] Prediction Engine | [ ] Pending || High | Ref: `SizeRecommendationEngine.tsx`. |
| T044 | - [Cart] Abandoned UI Popups | [ ] Pending || Med | Ref: `AbandonedCartRecovery.tsx`. |
| **P12-20**| **Production Hardening** | [ ] Pending | Joint | Med | CLS, A11y, SEO, Analytics, QA. |

---

## 🛠 Collaboration Protocols & Best Practices

### Division of Labor
- **Antigravity**: Architecture, CSS bridging, logical safeguards (Pincode, AJAX).
- **Codex**: Liquid porting, snippet construction, mobile UI optimization.

### Technical Guardrails
- **Empire Logic, Whisper Style**: Wrap Empire logic in Whisper BEM classes. Keep all `data-` attributes.
- **Zero-Breakage**: Features (Cart, Pincode, Buy Now) must remain functional 100% of the time.
- **CSS Strategy**: Use `assets/theme-update.css`. Do not overwrite Empire's base unless necessary.
- **Minification**: Keep human-readable sources for review; production assets can be minified.

---

## 🧬 History & Developer Logs
- **2026-01-20 (Antigravity)**: **T042 COMPLETE.** Ported Mobile Bottom Sheet (Quick Add) from eCommerce-app. Includes Liquid snippet, JS gestures, and CSS bridge.
- **2026-01-20 (Antigravity)**: **FULL SYNC COMPLETE.** Merged PR-15, PR-16, PR-17. Resolved all roadmap conflicts.
- **2026-01-20 (Antigravity)**: Centralized all project data into `AGENTS.md`. Defined new `project-config.json` for technical details.
- **2026-01-19 (Antigravity)**: **PHASE 10 COMPLETE.** Integrated deep ecommerce data into PDP/Homepage.
- **2026-01-18 (Codex)**: Completed Ports: Media Gallery, Cart Drawer, Header Mega-menus.
- **2026-01-16 (Codex)**: Completed Ports: Icons, Badges, Pricing UI, ATC Buttons.
