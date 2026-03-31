# AGENTS.md - LiveShopifyProject

## Workspace Split

- `woodenstreet-theme/` is the only canonical Shopify theme build for Bluewud storefront work.
- `woodenbeast/` is a separate Shopify app track. Do not touch it unless Shubh explicitly switches scope to app work.
- The duplicate root-level theme folders were intentionally removed on 2026-03-31 to stop drift between multiple storefront builds.

## Theme Context

- Store target: `bluewuddev.myshopify.com`
- Theme goal: a WoodenStreet-style furniture storefront base that can be customized for Bluewud without reducing any current live-site content coverage.
- Current live-site coverage is the minimum floor. We can improve and add, but not regress.

## Locked / High-Risk Files

- `woodenstreet-theme/layout/theme.liquid`
- `woodenstreet-theme/config/settings_schema.json`
- `woodenstreet-theme/assets/section-hydration.js`
- Zippy pincode widget IDs/selectors
- Empire cart and product-form behavior
- Core brand font choices unless Shubh asks to change them

## Primary Theme Files

- Master stylesheet: `woodenstreet-theme/assets/wooden-master.css`
- Theme layouts: `woodenstreet-theme/layout/`
- Theme sections: `woodenstreet-theme/sections/`
- Theme snippets: `woodenstreet-theme/snippets/`
- Theme templates: `woodenstreet-theme/templates/`

## Safe Working Area

- `woodenstreet-theme/sections/*.liquid`
- `woodenstreet-theme/snippets/*.liquid`
- `woodenstreet-theme/templates/*`
- `woodenstreet-theme/locales/*`
- `woodenstreet-theme/config/settings_data.json`
- Project docs and task files in the repo root

## Workflow

1. Read this file and `TASKS.md`.
2. Work on a branch, never directly on `main`.
3. For storefront preview or theme sync, run commands from `woodenstreet-theme/`.
4. Do not deploy or push the live theme unless Shubh explicitly says so.
5. Keep app work isolated in `woodenbeast/`.

## Current Direction

- Normalize the theme foundation first.
- Keep one clean build only.
- Rebuild/refine from the canonical `woodenstreet-theme/` baseline.
