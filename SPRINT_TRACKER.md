# Bluewud WoodenBase Sprint Tracker

Last updated: 2026-04-09
Source of truth branch: `main`
Working theme: `C:\Users\shubh\Downloads\LiveShopifyProject\woodenstreet-theme`

## Goal

Ship a Bluewud-ready WoodenStreet-style base theme that:
- preserves the live Bluewud information baseline
- adds the modular kitchen and wardrobe funnel properly
- keeps Shopify GUI editability intact
- is strong enough for near-live review without relying on hidden hardcoded behavior

## Non-Negotiables

- `main` is the only active code line for this theme build
- no regressions below the current live Bluewud baseline
- theme settings and Shopify GUI edits must keep reflecting in the build
- modular pages, calculators, and estimate flow must behave like a real customer journey
- every important button and route must land somewhere intentional

## Active Request Board

### 1. Homepage Premium Rewrite
Status: IN PROGRESS

Needed:
- replace remaining sample text with Bluewud-appropriate copy
- make each section customer-centric and conversion-aware
- ensure banners, trust, testimonials, newsletter, and category sections all feel intentional
- keep the strong gradient and premium visual tone already established

Files:
- `woodenstreet-theme/sections/hero.liquid`
- `woodenstreet-theme/sections/categories.liquid`
- `woodenstreet-theme/sections/featured-category-tiles.liquid`
- `woodenstreet-theme/sections/trust-banners.liquid`
- `woodenstreet-theme/sections/testimonials.liquid`
- `woodenstreet-theme/sections/newsletter.liquid`
- `woodenstreet-theme/sections/banner.liquid`
- `woodenstreet-theme/sections/featured-products.liquid`

### 2. Header / Footer / Navigation System
Status: IN PROGRESS

Needed:
- keep the new two-row desktop header stable
- ensure hover dropdowns always overlay above page content
- keep live-style Bluewud dropdown structure
- keep `Buy In Bulk` de-emphasized in footer instead of front-and-center header CTA
- remove redundant footer planning block and keep footer cleaner

Files:
- `woodenstreet-theme/sections/header.liquid`
- `woodenstreet-theme/sections/footer.liquid`
- `woodenstreet-theme/sections/announcement.liquid`

### 3. Modular Kitchen Funnel
Status: IN PROGRESS

Needed:
- keep the richer kitchen page content length and quality
- use the new kitchen images throughout the funnel
- make layout chips and calculator flow feel fully connected
- remove redundant route-explainer sections now that calculator links exist in nav
- continue toward WoodenStreet-level feature completeness

Files:
- `woodenstreet-theme/snippets/modular-kitchen-page-content.liquid`
- `woodenstreet-theme/snippets/kitchen-calculator-content.liquid`
- `woodenstreet-theme/snippets/modular-estimate-popup.liquid`
- `woodenstreet-theme/assets/modular-kitchen-*.png`

### 4. Wardrobe Funnel
Status: IN PROGRESS

Needed:
- make wardrobe tabs switch meaningfully and stop feeling like same-page reloads
- deepen wardrobe content so it matches kitchen quality
- keep wardrobe calculator routing correct and avoid contact-page leakage

Files:
- `woodenstreet-theme/snippets/wardrobe-page-content.liquid`
- `woodenstreet-theme/snippets/wardrobe-calculator-content.liquid`

### 5. Calculator and Estimate Workflow
Status: IN PROGRESS

Needed:
- separate pages and entrypoints must be easy to find
- calculators should feel like visual selection workflows, not just plain forms
- `Get Free Estimate` must behave like a contextual project intake popup / endpoint
- home interiors calculator must feel part of the same system

Files:
- `woodenstreet-theme/snippets/kitchen-calculator-content.liquid`
- `woodenstreet-theme/snippets/wardrobe-calculator-content.liquid`
- `woodenstreet-theme/snippets/home-interiors-calculator-content.liquid`
- `woodenstreet-theme/snippets/estimate-page-content.liquid`

### 6. Commerce Surface Cleanup
Status: IN PROGRESS

Needed:
- reduce repetitive trust chips on collection product cards
- keep product cards easier to scan
- keep product pages trust-rich but not cluttered
- improve cart and search copy so it feels premium and shopper-friendly

Files:
- `woodenstreet-theme/sections/collection-main.liquid`
- `woodenstreet-theme/sections/product-main.liquid`
- `woodenstreet-theme/sections/cart-main.liquid`
- `woodenstreet-theme/sections/search.liquid`
- `woodenstreet-theme/snippets/search-modal.liquid`
- `woodenstreet-theme/snippets/predictive-search-empty-state.liquid`
- `woodenstreet-theme/snippets/results-search-content.liquid`

### 7. Support / Information Pages
Status: IN PROGRESS

Needed:
- bring every support page to the same premium tone
- keep copy shorter, clearer, and more customer-first
- ensure routes for help, returns, offers, contact, about, and business pages feel intentional

Files:
- `woodenstreet-theme/sections/page.liquid`
- `woodenstreet-theme/snippets/about-page-content.liquid`
- `woodenstreet-theme/snippets/contact-page-content.liquid`
- `woodenstreet-theme/snippets/business-support-page-content.liquid`
- `woodenstreet-theme/snippets/offers-page-content.liquid`
- `woodenstreet-theme/snippets/returns-refunds-content.liquid`
- `woodenstreet-theme/snippets/help-center-content.liquid`

## Recently Landed

- kitchen image masters moved into theme assets and wired into the modular kitchen funnel
- header rebuilt with live-style dropdown categories plus modular and calculator entries
- footer planning block removed
- buy-in-bulk emphasis reduced in the header
- repetitive trust markers reduced on collection product cards
- multiple support and search copy surfaces improved
- appliance integration in the kitchen calculator changed to multi-select
- extra explainer copy above the embedded kitchen calculator removed
- redundant kitchen planning band hidden when the calculator already exists inline on the same page
- kitchen and wardrobe top tab rails darkened and aligned for better readability
- header dropdown stacking raised again to sit above page content more reliably
- homepage section copy is being rewritten around clearer room intent, trust, and return motivation
- support and information pages are being tightened to sound shorter, cleaner, and more customer-first
- search and empty-state language is being reframed as a premium shopping helper instead of generic search UI
- shared estimate-popup copy and stacking are improved so the conversion step feels native to the theme
- modular kitchen image masters are now part of the tracked theme asset plan, not only local preview state
- modular kitchen and wardrobe top navigation rails are being unified into one shared planning-rail component so the experience stays visually consistent across planner pages
- calculator selections now persist into a shared project brief store so moving from planner to estimate no longer drops the customer context
- popup and estimate submissions now carry route and selected-options payload fields through the native Shopify contact workflow
- the estimate page now visibly renders the carried planner selections so customers can review what is being sent before they submit the enquiry
- a modular kitchen imagery prompt pack now exists at `docs/modular-kitchen-imagery-prompt-pack.md` to guide future generation and review of missing kitchen visuals
- standalone calculator and estimate pages now expose the same planning-rail system so navigation stays consistent beyond the main planner landing pages
- the estimate page now visibly shows carried-forward planner selections and lets the customer clear the imported brief before sending the enquiry
- the project brief store now has a clear/reset path and freshness guard so stale planner data is less likely to bleed into a new request
- modular kitchen image prompting and review guidance now lives in `docs/modular-kitchen-imagery-prompt-pack.md`
- the kitchen calculator summary now translates selections into finish, storage, and appliance cues so the right-side panel feels more visual and less form-like
- modular kitchen imagery now runs deeper into the planner through expanded gallery coverage and image-led decision cards instead of staying only in hero positions
- kitchen and wardrobe planner pages now ask for the next step less often by stripping duplicate estimate/contact prompts from repeated sections
- the wardrobe calculator lost one duplicate journey block, so the actual wardrobe brief starts faster with less funnel chrome
- modular kitchen, wardrobe, and calculator pages now suppress the generic page hero shell so customers land directly inside the real planning UI
- header, footer, hero, category cards, featured tiles, and trust banners now resolve more of their routes through live page and collection objects instead of brittle hardcoded paths
- the kitchen and wardrobe collection planners now surface the embedded calculators directly below the shared planning rail instead of burying them far down the page
- the home interiors planner now opens with image-led room cards, a live visual summary, and compact recommendation logic instead of relying on abstract text alone
- kitchen, wardrobe, and home-interiors planners now use compact preflight guidance sections directly below the calculator so useful explanation stays visible without crowding the first interaction

## Current Review Routes

- `/`
- `/collections/kitchen-racks`
- `/collections/wardrobe`
- `/pages/modular-kitchen-cost-calculator`
- `/pages/modular-wardrobe-cost-calculator`
- `/pages/home-interiors-cost-calculator`
- `/pages/get-free-estimate`
- `/pages/about-us`
- `/pages/contact-us`
- `/pages/help-center`
- `/pages/returns-refunds`
- `/pages/offers-discount`

## Agent Ownership

- Homepage brand/copy pass: assigned
- Header/footer/nav/search pass: assigned
- Commerce surfaces pass: assigned
- Support/info pages pass: assigned
- Modular funnel audit: assigned

## Push Policy

- integrate a coherent tranche
- sanity-check the important routes
- push to `main`
- keep unrelated workspace leftovers out of commits
