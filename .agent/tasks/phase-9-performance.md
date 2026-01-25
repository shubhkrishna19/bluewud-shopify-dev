# 🚀 Phase 9: Performance & SEO Optimization

**Goal**: Maximize site speed, pass Core Web Vitals, and ensure perfect SEO structure.
**Status**: 🟢 READY TO START

---

## 🏎️ Performance Tasks

### P-01: Image Optimization Engine
- [ ] Implement native lazy loading `loading="lazy"` on all below-fold images
- [ ] Add `fetchpriority="high"` to LCP images (Hero, Main Product)
- [ ] Ensure explicit `width` and `height` attributes to prevent layout shifts (CLS)
- [ ] Verify `srcset` is generated for all responsive images

### P-02: Asset Minification
- [ ] Minify `woodenstreet-master.css`
- [ ] Defer non-critical JS (e.g., `defer` or `async` tags)
- [ ] Preconnect to critical 3rd party domains (Shopify CDN, Google Fonts)

### P-03: Font Optimization
- [ ] Use `font-display: swap` for all web fonts
- [ ] Preload critical fonts (checking `theme.liquid`)

---

## 🔍 SEO Tasks

### S-01: Semantic HTML Audit
- [ ] Ensure only one `<h1>` per page
- [ ] Verify heading hierarchy (H1 -> H2 -> H3)
- [ ] Add descriptive `aria-label` to all buttons and links
- [ ] Ensure all images have descriptive `alt` text

### S-02: Structural Data (JSON-LD)
- [ ] Add `Product` schema to product pages
- [ ] Add `BreadcrumbList` schema globally
- [ ] Add `Organization` schema to homepage

### S-03: Meta Tags
- [ ] Verify unique `title` and `description` for all core pages
- [ ] Check Open Graph (OG) tags for social sharing

---

## 🛠️ Execution Plan

1. **Audit**: Run initial checks (manual + code inspection).
2. **Execute**: Apply fixes file-by-file.
3. **Verify**: Check code changes.

---

## 📝 Change Log

- **[Date]**: Plan created.
