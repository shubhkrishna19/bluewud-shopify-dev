# Shopify CLI Guide - Bluewud

## Workspace Structure

```text
LiveShopifyProject/
|-- woodenstreet-theme/   canonical Shopify theme
|-- woodenbeast/          separate Shopify app
|-- AGENTS.md
|-- TASKS.md
|-- PROJECT_IDENTITY.md
```

## Theme Development

```powershell
cd woodenstreet-theme
shopify theme dev --store=bluewuddev.myshopify.com
shopify theme push --store=bluewuddev.myshopify.com --unpublished
shopify theme list --store=bluewuddev.myshopify.com
```

## App Development

```powershell
cd woodenbeast
shopify app dev
shopify app deploy
```

## Rules

- Use `=` for Shopify CLI flags on Windows.
- Theme work never runs from the repo root anymore.
- There is only one storefront build: `woodenstreet-theme/`.
- `woodenbeast/` is intentionally separate from the theme workflow.
