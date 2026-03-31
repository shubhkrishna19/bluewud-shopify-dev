# Shopify AI Development Protocol

## Active Targets

- Theme: `woodenstreet-theme/`
- App: `woodenbeast/`

Only the theme is in active scope for the current Bluewud storefront build.

## Command Rules

- Theme commands run from `woodenstreet-theme/`.
- App commands run from `woodenbeast/`.
- On Windows, always use `--store=bluewuddev.myshopify.com` with Shopify CLI theme commands.

## Theme Commands

```powershell
cd woodenstreet-theme
shopify theme dev --store=bluewuddev.myshopify.com
shopify theme push --store=bluewuddev.myshopify.com --unpublished
shopify theme list --store=bluewuddev.myshopify.com
```

## App Commands

```powershell
cd woodenbeast
shopify app dev
shopify app deploy
```

## Working Rules

- Keep one storefront build only: `woodenstreet-theme/`.
- Ignore `woodenbeast/` unless the task is explicitly app-related.
- Do not deploy the live theme without Shubh's explicit instruction.
