# 📱 Phase 9: Mobile & Performance Plan

**Goal**: Deliver a polished mobile experience and perfect SEO/Performance scores.

## 📊 Status Tracker
| ID | Task | Status | Owner | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **P9-01** | **Mobile Header & Menu** | [x] Done | Anti | High |
| **P9-02** | **SEO Audit & Fixes** | [/] In Progress | Anti | Med |
| **P9-03** | **Performance Tuning** | [ ] Pending | Anti | High |

---

## 🛠 Execution Strategy

### P9-01: Mobile Header & Menu (Completed)
- Verified `whisper-header-drawer.liquid` implementation.
- Verified `mobile-bottom-nav.liquid` existence.
- **Verification needed**: Visual test of animations.

### P9-02: SEO Audit & Fixes
**Target**: Perfect SEO Score (100)
1.  **H1 Tag Strategy**:
    - Ensure Homepage H1 is in Hero section.
    - Ensure Collection/Product pages have dynamic H1.
2.  **Meta Tags**:
    - Verify `theme.liquid` title/description logic.
    - Ensure canonical tags are correct.
3.  **Structured Data**:
    - Audit `structured-data.liquid`.
    - Ensure Product/Breadcrumb schema is present.

### P9-03: Performance Tuning
**Target**: Core Web Vitals (LCP < 2.5s, CLS < 0.1)
1.  **LCP Optimization**:
    - Preload Hero image.
    - Font display swap.
2.  **CLS Prevention**:
    - Explicit width/height on images.
    - Minimum height for dynamic sections.
3.  **Resource Loading**:
    - Defer non-critical JS.
    - Lazy load off-screen images.

---

## 📝 Change Log
- **2026-01-26**: Started Phase 9. CSS consolidation complete.
