# CLAUDE.md — LiveShopifyProject (Claude Code Extension)
# This file extends AGENTS.md with Claude Code-specific context.
# READ AGENTS.md FIRST — project rules, locked IDs, CSS architecture all live there.

---

## Claude Code Notes

- **Master CSS is `assets/wooden-master.css` (v1.7.0)** — all global styles live here. Don't create a second master.
- **Empire theme bridge**: `assets/section-hydration.js` — do not touch. It connects Empire's JS with Liquid sections.
- **`ecommerce-app/`** is a SEPARATE React project — not deployed to Shopify. Its `AI_INSTRUCTIONS.md` or any similar files are for that sub-project only, not the theme.
- **Shopify CLI dev server**: `shopify theme dev` — required before any push. No exceptions.
- **CSS custom properties**: always use `var(--color-primary)`, `var(--spacing-md)` etc. — they're defined in `wooden-master.css`.
- **Mobile-first**: all new CSS should follow mobile-first breakpoints matching the existing patterns in `wooden-master.css`.

## Useful Claude Code Commands for This Project

```bash
# Local preview
shopify theme dev

# Push to dev theme (safe)
shopify theme push --development

# Find where a CSS class is used
grep -r "class-name" sections/ snippets/ layout/

# Find all uses of a CSS custom property
grep -r "var(--color-primary)" assets/ sections/ snippets/

# Check wooden-master.css version
head -5 assets/wooden-master.css
```

## What to Read Before Touching Code

1. `AGENTS.md` — CRITICAL locked IDs, CSS rules, full swarm history (Antigravity task logs)
2. `PROJECT_IDENTITY.md` — locked identity
3. `assets/wooden-master.css` — master CSS (understand the structure before adding)
4. `layout/theme.liquid` — context only, never modify without Shubh
