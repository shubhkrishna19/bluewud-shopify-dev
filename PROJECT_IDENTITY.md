# PROJECT IDENTITY - LiveShopifyProject

## What This Workspace Is

This repo is a Bluewud Shopify workspace with two separate tracks:

- `woodenstreet-theme/` - the canonical storefront theme build
- `woodenbeast/` - a separate Shopify app under development

For current work, the theme is the product. The app is not part of the active scope unless Shubh explicitly redirects work there.

## Theme Identity

- Store: `bluewuddev.myshopify.com`
- Theme path: `woodenstreet-theme/`
- Theme stack: Shopify Liquid, HTML, CSS, vanilla JS
- Base behavior constraints: Empire storefront mechanics and existing Shopify Ajax flows
- Design target: WoodenStreet-style furniture storefront structure, adapted for Bluewud

## Source of Truth

- Theme code: `woodenstreet-theme/`
- Master stylesheet: `woodenstreet-theme/assets/wooden-master.css`
- Root project docs/tasks: repo root

## Important Constraints

- Do not reduce current `bluewud.com` content coverage.
- Preserve pincode/widget integrations and existing cart/product behavior unless explicitly replacing them with an approved equivalent.
- Treat `layout/theme.liquid` and `config/settings_schema.json` as high-risk files.
