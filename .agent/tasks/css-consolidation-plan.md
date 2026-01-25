# 🎨 CSS CONSOLIDATION PLAN
**Goal**: Merge all CSS into ONE file that's always functional

---

## 📊 CURRENT STATE

### Existing CSS Files (8 files, 50KB+ total)
```
assets/
├── theme.css (4000+ lines) - Empire base theme
├── theme-update.css (3800+ lines) - Whisper components  
├── component-woodenstreet-hero.css
├── component-woodenstreet-ui-overrides.css
├── component-trust-strip-v2.css
├── component-woodenstreet-global.css
├── component-woodenstreet-video.css
└── woodenstreet-premium-force.css
```

### Problems
- Multiple files = loading overhead
- Duplicate selectors across files
- Conflicting styles (specificity wars)
- Hard to maintain

---

## 🎯 TARGET STATE

### ONE Master CSS File
```
assets/
└── woodenstreet-master.css (< 2000 lines, well-organized)
```

### Structure
```css
/* ========================================
   WOODENSTREET MASTER STYLESHEET
   Single source of truth for all styles
   ======================================== */

/* 1. CSS VARIABLES */
:root { ... }

/* 2. RESET & BASE */
*, *::before, *::after { ... }

/* 3. TYPOGRAPHY */
body, h1, h2, h3 { ... }

/* 4. LAYOUT */
.page-width, .container { ... }

/* 5. COMPONENTS */
.header { ... }
.hero { ... }
.product-card { ... }

/* 6. UTILITIES */
.text-center, .mt-4 { ... }

/* 7. RESPONSIVE */
@media (max-width: 768px) { ... }
```

---

## 📋 EXECUTION STEPS

### Step 1: Create Master File ✅
```bash
# Create the file
touch assets/woodenstreet-master.css

# Add header
cat > assets/woodenstreet-master.css << 'EOF'
/*!
 * WoodenStreet Master Stylesheet
 * Version: 1.0.0
 * Last Updated: 2026-01-25
 * 
 * SINGLE SOURCE OF TRUTH - Do not create additional CSS files
 * All styles consolidated from multiple sources
 */
EOF
```

### Step 2: Extract Core Styles
```bash
# From theme.css - Keep only:
# - CSS reset
# - Base typography
# - Layout utilities
# - Grid system

# Skip:
# - Unused Empire theme components
# - Deprecated styles
```

### Step 3: Add Working Components
```bash
# From component-woodenstreet-global.css:
# - CSS variables
# - Typography
# - Spacing utilities

# From component-woodenstreet-hero.css:
# - Hero section styles (if keeping hero)

# From component-trust-strip-v2.css:
# - Trust strip styles

# From component-woodenstreet-ui-overrides.css:
# - Product card styles
# - Category grid styles
```

### Step 4: Add Critical Fixes
```bash
# From woodenstreet-premium-force.css:
# - Header gap fix
# - Product card contrast fix
# - Showcase cleanup
```

### Step 5: Remove Duplicates
```bash
# Find duplicate selectors
grep -o "^\.[a-zA-Z-]*" assets/woodenstreet-master.css | sort | uniq -d

# Merge duplicates, keep most specific
```

### Step 6: Optimize
```bash
# Remove unused styles
# Combine similar selectors
# Use CSS variables for colors
# Minify for production (optional)
```

### Step 7: Update theme.liquid
```liquid
<!-- Replace all CSS includes with ONE line -->
{{ 'woodenstreet-master.css' | asset_url | stylesheet_tag }}
```

### Step 8: Delete Old Files
```bash
# Backup first
mkdir -p .agent/backups/css-old/
mv assets/component-woodenstreet-*.css .agent/backups/css-old/
mv assets/theme-update.css .agent/backups/css-old/
mv assets/woodenstreet-premium-force.css .agent/backups/css-old/

# Keep theme.css as fallback (for now)
```

### Step 9: Test
```bash
# Visual inspection
# Console check (no CSS errors)
# Mobile test
# Performance test
```

### Step 10: Commit
```bash
git add assets/woodenstreet-master.css layout/theme.liquid
git commit -m "feat: Consolidate all CSS into single master file"
git push origin main
```

---

## 🎯 WHAT TO INCLUDE

### ✅ KEEP (Essential Styles)

#### 1. CSS Variables
```css
:root {
  --ws-orange: #C7431A;
  --ws-black: #1A1A1A;
  --ws-gray: #F4F4F4;
  --space-4: 16px;
  --space-8: 32px;
}
```

#### 2. Typography
```css
body {
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
```

#### 3. Layout
```css
.page-width {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}
```

#### 4. Working Components
```css
/* Category Grid */
.ws-category-grid { ... }

/* Product Cards */
.product-card { ... }

/* Header */
.site-header { ... }

/* Footer */
.site-footer { ... }
```

#### 5. Critical Fixes
```css
/* Header Gap Fix */
.announcement-bar {
  margin-bottom: 0 !important;
}

/* Product Card Contrast */
.product-card .price {
  color: #1A1A1A !important;
}
```

### ❌ REMOVE (Broken/Unused)

#### 1. Whisper Components (if broken)
```css
/* .whisper-showcase - black blobs */
/* .whisper-lookbook - duplicate labels */
/* .whisper-featured-collection - white text */
```

#### 2. Duplicate Selectors
```css
/* If .button appears 3 times, keep only 1 */
```

#### 3. Unused Styles
```css
/* Styles for removed sections */
/* Deprecated Empire theme components */
```

---

## 🧪 TESTING CHECKLIST

After consolidation:
- [ ] Homepage loads without errors
- [ ] No missing styles (visual check)
- [ ] Header looks correct
- [ ] Product cards are readable
- [ ] Category grid works
- [ ] Footer displays properly
- [ ] Mobile layout works
- [ ] No console CSS errors
- [ ] Page loads < 3 seconds

---

## 🔄 ROLLBACK PLAN

If something breaks:
```bash
# Restore old CSS files
cp .agent/backups/css-old/*.css assets/

# Revert theme.liquid
git checkout HEAD -- layout/theme.liquid

# Test again
```

---

## 📝 AGENT ASSIGNMENT

**Agent**: Artist (CSS Specialist)
**Skill**: `css-architecture`, `ui-ux-pro-max`
**ETA**: 1-2 hours
**Status**: 🟡 READY TO START

---

**Ready to execute?** Update `.agent/LIVE_TASK_BOARD.md` and start!
