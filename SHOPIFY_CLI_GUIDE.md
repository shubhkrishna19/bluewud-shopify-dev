# Shopify CLI Development Guide — Bluewud Project

> Last updated: March 2026
> Maintainer: shubh@bluewud.onmicrosoft.com
> Dev Store: **bluewuddev.myshopify.com**

---

## Project Structure Overview

```
LiveShopifyProject/
├── woodenbeast/          → Shopify embedded APP (React Router, admin UI, APIs)
├── woodenstreet-theme/   → Shopify THEME (Liquid, storefronts, UI)
├── assets/               → Source theme assets (sync to woodenstreet-theme/)
├── sections/             → Source theme sections
├── snippets/             → Source theme snippets
├── app/                  → woodenbeast App source (Home, Products, Orders, Settings)
└── ...                   → Other source theme folders
```

### Two Separate Dev Environments

| Environment | Folder | Purpose | Dev Command |
|---|---|---|---|
| **App** | `woodenbeast/` | Admin app, API integrations, metaobjects | `shopify app dev` |
| **Theme** | `woodenstreet-theme/` | Storefront, Liquid templates, sections | `shopify theme dev` |

---

## Authentication

### Login
```powershell
shopify auth login
```
- Opens browser for OAuth
- Authenticates as `shubh@bluewud.onmicrosoft.com`

### Logout
```powershell
shopify auth logout
```

### Check current account
```powershell
shopify whoami
```

---

## Theme Development (`woodenstreet-theme/`)

### Start local dev server (preview in browser)
```powershell
cd woodenstreet-theme
shopify theme dev --store=bluewuddev.myshopify.com
```
- Streams live changes to your dev store preview
- Hot-reloads Liquid, CSS, JS changes instantly
- Access at `http://localhost:9292`

### Push theme to a store
```powershell
# Push to dev store (safe)
shopify theme push --store=bluewuddev.myshopify.com

# Push to production (careful!)
shopify theme push --store=bluewud.myshopify.com
```

### Pull theme from a store (sync down)
```powershell
shopify theme pull --store=bluewuddev.myshopify.com
```

### List available themes on a store
```powershell
shopify theme list --store=bluewuddev.myshopify.com
```

### Package theme as zip
```powershell
shopify theme package
```

---

## App Development (`woodenbeast/`)

### Start app dev server
```powershell
cd woodenbeast
shopify app dev
```
- Connects to your dev store
- Starts local tunnel (ngrok-style) so Shopify can reach localhost
- Requires a dev store set up in Shopify Partner Dashboard

### Generate an extension (theme extension, checkout UI, etc.)
```powershell
cd woodenbeast
shopify app generate extension
```
- Follow prompts to pick extension type
- Extension files go into `woodenbeast/extensions/`

### Deploy app to production
```powershell
cd woodenbeast
shopify app deploy
```

### Link app config (if toml is out of sync)
```powershell
cd woodenbeast
shopify app config link
```

---

## Dev Store

| Detail | Value |
|---|---|
| **Store name** | bluewuddev |
| **URL** | bluewuddev.myshopify.com |
| **Plan** | Basic (Extended Variants) |
| **Created by** | Shubh Krishna |
| **Partner Dashboard** | https://dev.shopify.com/dashboard/1536873/stores |

---

## Correct Command Format

Shopify CLI uses `=` format (not space):

```powershell
# ✅ Correct
shopify theme dev --store=bluewud-dev.myshopify.com

# ❌ Incorrect (may fail on Windows)
shopify theme dev --store bluewud-dev.myshopify.com
```

---

## Common Errors & Fixes

| Error | Fix |
|---|---|
| `CLI credentials are invalid` | Run `shopify auth logout` then `shopify auth login` |
| `No dev stores associated` | Create a dev store in Partner Dashboard (link above) |
| `theme push` exits with code 1 | Ensure you're logged in and use `--store=` flag |
| `Cannot find path 'blocks'` | The `blocks/` folder must exist before copying |
| App not loading in store | Check `shopify.app.toml` `application_url` and that tunnel is running |

---

## Workflow: Making Theme Changes

```
1. Edit files in: woodenstreet-theme/ (sections, snippets, assets, etc.)
2. Preview live:  shopify theme dev --store=bluewuddev.myshopify.com
3. Test in browser at http://localhost:9292
4. Push when ready: shopify theme push --store=bluewuddev.myshopify.com
5. For production: shopify theme push --store=bluewud.myshopify.com
```

## Workflow: Making App Changes

```
1. Edit files in: woodenbeast/app/routes/
2. Start dev:     cd woodenbeast && shopify app dev
3. Open app in your dev store admin
4. Deploy:        shopify app deploy
```

---

## Useful Flags

```powershell
--store=STORE_NAME     # Target store (required for theme commands)
--theme=THEME_ID       # Target a specific theme by ID
--live                 # Push to the live/published theme
--unpublished          # Push to a new unpublished theme (safe)
--only=sections        # Only push specific file types
--ignore=config/       # Skip certain folders
```

---

## Version Info

- Shopify CLI: `3.91.1` (latest as of March 2026 is available — run `npm install -g @shopify/cli@latest` to upgrade)
- App framework: React Router v7
- Auth account: `shubh@bluewud.onmicrosoft.com`
- Partner Dashboard ID: `1536873`
