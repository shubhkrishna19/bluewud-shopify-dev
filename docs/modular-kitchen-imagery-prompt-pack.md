# Bluewud Modular Kitchen Imagery Prompt Pack

## Purpose

This pack defines the image system for the Bluewud modular kitchen funnel. It is built around the real kitchen masters already present in `woodenstreet-theme/assets/` and is meant to guide future image generation, review, and placement across the theme.

The goal is not to create random kitchen renders. The goal is to build a coherent, premium image library that supports:

- modular kitchen landing pages
- layout-specific pages
- calculator and estimate flows
- product bridges and supporting cards
- finish and installation storytelling

## Current Anchor Assets

Use these as the visual source of truth for the modular kitchen system:

- `woodenstreet-theme/assets/modular-kitchen-light-oak-l-shape.png`
- `woodenstreet-theme/assets/modular-kitchen-sage-u-shape.png`
- `woodenstreet-theme/assets/modular-kitchen-galley-light-wood.png`
- `woodenstreet-theme/assets/modular-kitchen-navy-luxury.png`
- `woodenstreet-theme/assets/modular-kitchen-walnut-u-shape.png`

These represent the baseline palette and proportion language for the rest of the kitchen imagery.

## Visual Rules

- Keep the homes Indian in scale, planning, and realism.
- Keep cabinet geometry believable and manufacturable.
- Keep finish families consistent with the anchor assets.
- Prefer warm, premium, practical scenes over glossy showroom fantasy.
- Avoid over-stylized western kitchens that do not match Bluewud’s catalog direction.
- Preserve enough negative space for page copy where the image will be used as a hero.
- Make every additional image feel like it belongs to the same product family, not a different brand.

## Shot Categories

### 1. Layout Masters

These are the core views that define the layout family and should stay close to the current anchors.

- L-shape family hero
- U-shape family hero
- Parallel / galley family hero
- Straight kitchen family hero
- Island-led premium hero

### 2. Functional Details

These are the shots that help customers understand what they are buying.

- drawer-open storage
- soft-close hardware
- tall pantry unit
- corner carousel or corner utility
- hob and chimney zone
- sink and prep zone
- appliance tower or built-in appliance bay
- under-cabinet lighting

### 3. Material and Finish Proof

These are close shots that make finish selection easier.

- laminate finish close-up
- woodgrain close-up
- matte shutter surface
- handle and profile detail
- countertop texture detail
- backsplash/material junction detail

### 4. Installation and Planning Context

These shots support calculator and estimate pages.

- on-site installation view
- room scale and wall run view
- plumbing / service point context
- before-brief / after-brief comparison feeling
- kitchen with usable circulation path visible

### 5. Lifestyle and Use

These shots make the kitchen feel lived-in and premium.

- family prep moment
- cooking zone in use
- serving / hosting moment
- tidy end-of-day kitchen state
- morning routine / coffee corner

## Prompt Scaffolds

Use these as production prompts when generating new kitchen images.

### Layout Hero Prompt

```text
Use case: photorealistic-natural
Asset type: website hero / modular kitchen landing page
Primary request: generate a premium modular kitchen image in the same visual language as the Bluewud kitchen masters
Input images: reference the selected Bluewud kitchen master image as the primary style anchor
Scene/backdrop: Indian modern home interior with realistic wall proportions and usable negative space for page copy
Subject: a modular kitchen layout in the requested format, with believable cabinetry, counter depth, and storage rhythm
Style/medium: photorealistic interior photography
Composition/framing: wide composition, straight verticals, clear hero readability, no extreme distortion
Lighting/mood: soft daylight, calm premium mood, warm but clean
Color palette: match the Bluewud kitchen finish family, with restrained neutrals and a premium accent tone
Materials/textures: realistic woodgrain, matte shutters, clean stone counter, believable metal hardware
Text (verbatim): none
Constraints: keep the layout manufacturable, preserve room scale, leave clean copy space if used for a banner
Avoid: cartoon rendering, exaggerated luxury, distorted cabinets, clutter, floating hardware, fake showroom gloss
```

### Detail Shot Prompt

```text
Use case: photorealistic-natural
Asset type: kitchen detail card / calculator support image
Primary request: generate a close-up of a modular kitchen detail that supports customer decision-making
Input images: use the Bluewud kitchen masters for finish consistency
Scene/backdrop: real kitchen context with minimal distractions
Subject: one focused detail such as drawer storage, hardware, hob zone, sink zone, or corner solution
Style/medium: photorealistic interior detail photography
Composition/framing: medium-close crop, clear subject separation, no crowding
Lighting/mood: natural light with controlled contrast
Color palette: keep the same wood, neutral, and premium accent family as the reference assets
Materials/textures: show believable joinery, matte finish, grain direction, and hardware quality
Text (verbatim): none
Constraints: one idea per image, one clear focal point, no collage effect
Avoid: busy backgrounds, multiple competing focal points, fake reflections, excessive gloss
```

### Installation / Process Prompt

```text
Use case: photorealistic-natural
Asset type: installation and planning support image
Primary request: generate a modular kitchen image that communicates planning, installation, or site readiness
Input images: Bluewud kitchen masters as finish and style reference
Scene/backdrop: real home installation setting or near-finished project environment
Subject: the kitchen with enough context to suggest build quality, fit, and project progress
Style/medium: realistic interior photography
Composition/framing: wide enough to show context, but focused enough to remain premium and clean
Lighting/mood: soft daylight, practical and trustworthy
Color palette: same family as the reference kitchen assets, no harsh color drift
Materials/textures: cabinetry, counters, wall surfaces, and visible fit details
Text (verbatim): none
Constraints: should feel like a real Bluewud project, not a render demo
Avoid: dramatic staging, fake construction mess, unrealistic lighting, overdone luxury props
```

## Recommended Shot List

Generate these in order of importance:

1. L-shape hero variation with warmer stone and a cleaner corner view
2. U-shape hero variation with stronger storage read
3. Parallel / galley hero variation with longer uninterrupted counter line
4. Straight layout hero variation with compact efficiency emphasis
5. Island layout hero variation with premium social-use feel
6. Drawer-open close-up
7. Tall pantry or utility tower close-up
8. Corner mechanism close-up
9. Hob and chimney zone detail
10. Sink and prep-zone detail
11. Under-cabinet lighting detail
12. Material close-up for shutter and woodgrain
13. Countertop and backsplash junction detail
14. On-site installation context shot
15. Family-use lifestyle shot

## Consistency Rules

- Keep lens height and perspective realistic across all new images.
- Keep cabinet scale and proportions consistent with the current Bluewud masters.
- Match the existing finish language before introducing any new finish family.
- Maintain consistent warmth in the whites and woods.
- Keep one dominant idea per image.
- Use premium, restrained styling instead of decorative overload.
- Do not introduce random brands, signage, or text overlays.
- Do not create images that imply features Bluewud does not actually offer.
- Keep the whole set usable across hero, gallery, calculator, and estimate pages without looking mismatched.

## Review Checklist

Before any new image is approved, check:

- Does it look like the same Bluewud product family as the current kitchen masters?
- Is the layout or detail immediately recognizable?
- Does the image feel premium without becoming unrealistic?
- Is the room scale believable for an Indian home?
- Is the material palette consistent with the existing assets?
- Is the composition useful for the intended section?
- Does the image avoid clutter and unnecessary objects?
- Could the image sit beside the calculator or estimate flow without looking out of place?
- Does the image add decision value, not just decoration?
- Would a customer trust this as a real modular kitchen example?

## Placement Notes

Use layout masters for:

- modular kitchen hero sections
- layout switcher cards
- kitchen landing page banners

Use detail shots for:

- calculator support blocks
- feature cards
- material and finish explanation sections

Use installation/process shots for:

- estimate pages
- planning explanations
- trust-building sections

Use lifestyle shots for:

- homepage feature bands
- story-driven promotional sections
- final reassurance blocks

## Review Standard

Reject any image that:

- breaks the Bluewud finish language
- feels like a generic stock render
- uses unrealistic cabinet geometry
- adds decorative clutter that weakens the buying signal
- looks too polished to be believable
- cannot be placed cleanly into the current theme structure

Approve only images that:

- feel like part of one coherent modular kitchen system
- support a real buying or planning decision
- can be reused across multiple sections without looking forced

