# Bluewud Planner Image Generation Guide

## Objective

Build a controlled image library for the Bluewud planner and calculator system so the theme can stop relying on weak fallback visuals and text-heavy placeholder logic.

This guide is for the external image operator using tools like `Flux Kontext 2`, `Higgsfield`, `Nano Banana`, and similar models.

The goal is not random “nice renders.” The goal is a coherent Bluewud-owned planning library that:

- supports the modular kitchen guide and calculator
- supports the modular wardrobe guide and calculator
- supports the home-interiors calculator and estimate flow
- preserves one visual language across pages
- feels premium, realistic, Indian, and conversion-oriented

## Where These Images Will Be Used

Primary review surfaces:

- `/collections/kitchen-racks`
- `/pages/modular-kitchen-cost-calculator`
- `/collections/wardrobe`
- `/pages/modular-wardrobe-cost-calculator`
- `/pages/home-interiors-cost-calculator`
- `/pages/get-free-estimate`

Secondary reusable surfaces:

- homepage trust / planning / modular teaser sections
- support/estimate sections
- future modular subpages for layout-specific guides

## Non-Negotiables

- Do not use competitor names like `Radiance`, `Aurex`, `Nexus`, etc.
- Do not generate “fake installed project proof” that looks like documented customer work.
- Do not create unrealistic western luxury kitchens/wardrobes that break Bluewud’s tone.
- Do not add text overlays, logos, or watermarks into the images.
- Do not push renders directly into the theme assets before review.

## Bluewud Direction Naming

These are the internal direction names for this image system.

### Kitchen

- `Everyday Core`
- `Storage Plus`
- `Gallery Flow`
- `Linear Ease`
- `Social Anchor`

### Wardrobe

- `Compact Glide`
- `Full Access`
- `Built-In Max`
- `Dressing Suite`

### Home Interiors

- `Apartment Calm`
- `Villa Signature`
- `Independent Flow`
- `Studio Focus`
- `Family Flow`
- `Signature Home`

These are direction names only. They are not final public-facing product names.

## Current Parent References

### Kitchen master references already in repo

Use these as the visual anchors for kitchen prompts:

- [modular-kitchen-light-oak-l-shape.png](../woodenstreet-theme/assets/modular-kitchen-light-oak-l-shape.png)
- [modular-kitchen-sage-u-shape.png](../woodenstreet-theme/assets/modular-kitchen-sage-u-shape.png)
- [modular-kitchen-galley-light-wood.png](../woodenstreet-theme/assets/modular-kitchen-galley-light-wood.png)
- [modular-kitchen-navy-luxury.png](../woodenstreet-theme/assets/modular-kitchen-navy-luxury.png)
- [modular-kitchen-walnut-u-shape.png](../woodenstreet-theme/assets/modular-kitchen-walnut-u-shape.png)

### Wardrobe and interiors references to prepare first

The repo does not yet have a proper wardrobe/interiors master library. Before generation, the operator should export the best current Bluewud references and place them here:

- `image-production/planner-library/reference-inputs/wardrobe/`
- `image-production/planner-library/reference-inputs/interiors/`

Recommended reference filenames:

- `bw-ref-wardrobe-compact-glide-01.png`
- `bw-ref-wardrobe-full-access-01.png`
- `bw-ref-wardrobe-built-in-max-01.png`
- `bw-ref-wardrobe-dressing-suite-01.png`
- `bw-ref-interiors-living-01.png`
- `bw-ref-interiors-bedroom-01.png`
- `bw-ref-interiors-study-01.png`
- `bw-ref-interiors-dining-01.png`
- `bw-ref-interiors-apartment-01.png`
- `bw-ref-interiors-villa-01.png`
- `bw-ref-interiors-independent-flow-01.png`

If these references are not available yet, generation can still start for kitchen, but wardrobe/interiors should not be finalized blindly.

## Folder Structure

Store generated files here first:

```text
image-production/planner-library/
  reference-inputs/
    kitchen/
    wardrobe/
    interiors/
  outputs/
    01-kitchen-layouts/
    02-kitchen-details/
    03-kitchen-option-cards/
    04-wardrobe-types/
    05-wardrobe-option-cards/
    06-home-interiors-context/
    07-shared-property-context/
  approved-for-theme/
```

Final approved images only should later be copied into:

```text
woodenstreet-theme/assets/
```

## File Naming Rule

Use this exact pattern:

```text
bw-{planner}-{direction}-{asset-type}-{ratio}-v01.webp
```

Examples:

- `bw-kitchen-everyday-core-hero-16x9-v01.webp`
- `bw-kitchen-storage-plus-module-4x3-v01.webp`
- `bw-wardrobe-compact-glide-card-4x3-v01.webp`
- `bw-interiors-family-flow-scope-board-16x9-v01.webp`

Allowed asset types:

- `hero`
- `card`
- `summary`
- `detail`
- `module`
- `swatch`
- `diagram`
- `scope-board`

## Model Usage Recommendation

### Use `Flux Kontext 2` for

- angle variations based tightly on a parent image
- layout-preserving derivatives
- cleaner finish consistency
- single-room and product-context continuity

### Use `Higgsfield` for

- hero-level polish once composition is already stable
- mood-upgraded variants
- lifestyle/use moments after the base geometry is locked

### Use `Nano Banana` or other alternates for

- backup variants only
- trying one alternate mood after the primary version is approved

Do not use a different model on every asset in the same batch. Keep each batch visually consistent.

## Output Specs

### Hero / banner images

- ratio: `16:9`
- target size: `2048x1152`
- use for: hero sections, calculator tops, summary banners, property-context boards

### Card / choice images

- ratio: `4:3`
- target size: `1600x1200`
- use for: clickable choice cards, planner detail cards, support cards

### Close detail images

- ratio: `4:3`
- target size: `1600x1200`
- use for: swatches, hardware details, countertops, drawers, internals

### Summary / composite boards

- ratio: `16:9`
- target size: `2048x1152`
- use for: estimate pages, room-mix boards, property context

## Visual Rules

- Keep the homes Indian in scale and layout logic.
- Cabinet and wardrobe geometry must look manufacturable.
- Keep materials practical and premium, not fantasy-render glossy.
- Preserve believable appliances, handles, counters, shutters, wall proportions, and circulation.
- Prefer daylight or soft interior light over hyper-dramatic lighting.
- Keep enough negative space where a page may need text beside the image.
- Avoid crowded props.
- Avoid impossible shadows, floating hardware, wrong reflections, or western showroom clichés.

## Page-to-Asset Strategy

### Modular Kitchen guide and calculator

Needs:

- 5 layout masters
- 5 layout secondary angles
- 6 utility/module details
- 6 option-card visuals
- 3 finish/material boards

### Wardrobe guide and calculator

Needs:

- 4 type masters
- 4 room-context secondary angles
- 4 option-card visuals
- 4 internals/details visuals
- 3 finish/material boards

### Home Interiors calculator

Needs:

- 4 property-context visuals
- 6 room cards
- 3 scope/composite boards
- 2 estimate/process visuals

## Review Checklist

Approve an image only if:

- it matches the intended room/type/direction exactly
- it looks like the same Bluewud family as the rest of the batch
- it helps a customer understand a choice faster
- it is usable inside the actual calculator or guide layout
- it is believable for an Indian home and a sellable Bluewud offering

Reject an image if:

- it looks like a generic stock render
- it introduces a different material language than the parent reference
- it confuses room type, direction, or option
- it would mislead a customer about what the option means
- it looks too glossy, fake, or westernized

## Important Implementation Note

Current theme behavior:

- wardrobe and home-interiors planners already inherit a lot from Shopify collection/product media
- kitchen planner visuals are still mostly asset-driven in code

That means generated images should be prioritized for:

1. kitchen option and detail surfaces first
2. wardrobe dedicated type visuals second
3. interiors dedicated room/property/scope visuals third

## Operator Workflow

1. Put parent inputs into `reference-inputs/`
2. Generate by batch number from the prompt catalog
3. Save exact filenames into the assigned `outputs/` folder
4. Do not rename files freely
5. Keep rejected variants outside the repo
6. Put approved finals into `approved-for-theme/`
7. Only then will we map them into `woodenstreet-theme/assets/` and wire them into the theme

## First Recommended Generation Order

### Batch 1

- kitchen option cards
- wardrobe type masters
- interiors property and room cards

### Batch 2

- kitchen detail shots
- wardrobe finish/internals
- interiors scope boards

### Batch 3

- lifestyle and estimate-support visuals
- broader homepage/planning reuse images

The detailed prompt list is in [Planner Image Prompt Catalog](./planner-image-prompt-catalog.md).
