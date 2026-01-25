# 🏗️ DEVELOPMENT RULES & BEST PRACTICES
**AI App Development Standards - WoodenStreet Project**

---

## 🎯 CORE PRINCIPLES

### 1. **SINGLE SOURCE OF TRUTH**
- ONE file per purpose
- NO duplicate files
- NO backup files in production directories
- Clear naming conventions

### 2. **NO AI SLOP**
- Every file must have a purpose
- Remove before adding
- Test before committing
- Document all changes

### 3. **ATOMIC CHANGES**
- One change at a time
- Test each change
- Commit frequently
- Never break the build

---

## 📁 FILE ORGANIZATION RULES

### CSS Files: ONE MASTER FILE ONLY

**❌ WRONG** (Current State):
```
assets/
├── theme.css (4000 lines)
├── theme-update.css (3800 lines)
├── component-woodenstreet-hero.css
├── component-woodenstreet-global.css
├── component-woodenstreet-video.css
├── component-trust-strip-v2.css
├── woodenstreet-premium-force.css
└── woodenstreet-master.css (empty)
```

**✅ CORRECT** (Target State):
```
assets/
└── woodenstreet-master.css (< 2000 lines, well-organized)
```

### Liquid Files: Component-Based Architecture

**✅ CORRECT**:
```
sections/          # Page sections (hero, product-list, etc.)
snippets/          # Reusable components (product-card, header, footer)
templates/         # Page templates (index.json, product.json)
```

**❌ WRONG**:
- Duplicate sections with different names
- Unused snippets
- Backup files (*.backup.liquid)

### JavaScript Files: Modular & Minimal

**✅ CORRECT**:
```
assets/
├── theme.js (core functionality)
└── woodenstreet-enhancements.js (custom features)
```

**❌ WRONG**:
- Multiple jQuery versions
- Duplicate utility functions
- Unused libraries

---

## 🚫 FORBIDDEN PATTERNS

### 1. Duplicate Files
```bash
# ❌ NEVER DO THIS:
component-hero.css
component-hero-v2.css
component-hero-new.css
component-hero-final.css
```

### 2. Backup Files in Production
```bash
# ❌ NEVER DO THIS:
index.json
index-backup.json
index-old.json
index-working.json
```

### 3. Unused Code
```css
/* ❌ NEVER DO THIS: */
.old-class-not-used-anymore { ... }
.deprecated-style { ... }
.whisper-component-removed { ... }
```

### 4. Magic Numbers
```css
/* ❌ WRONG */
.header { padding: 23px; }

/* ✅ CORRECT */
:root { --space-6: 24px; }
.header { padding: var(--space-6); }
```

### 5. Inline Styles
```liquid
<!-- ❌ WRONG -->
<div style="color: red; margin: 10px;">

<!-- ✅ CORRECT -->
<div class="error-message">
```

---

## ✅ REQUIRED PATTERNS

### 1. CSS Variables for All Values
```css
:root {
  /* Colors */
  --ws-orange: #C7431A;
  --ws-black: #1A1A1A;
  --ws-gray: #F4F4F4;
  
  /* Spacing (8px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  
  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### 2. BEM Naming Convention
```css
/* Block */
.product-card { }

/* Element */
.product-card__image { }
.product-card__title { }
.product-card__price { }

/* Modifier */
.product-card--featured { }
.product-card--sale { }
```

### 3. Mobile-First Responsive
```css
/* ✅ CORRECT: Mobile first */
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}

/* ❌ WRONG: Desktop first */
.container {
  padding: 32px;
}

@media (max-width: 767px) {
  .container {
    padding: 16px;
  }
}
```

### 4. Component Documentation
```liquid
{% comment %}
  Component: Product Card
  Purpose: Display product with image, title, price
  Props:
    - product (required): Product object
    - show_vendor (optional): Boolean
  Usage:
    {% render 'product-card', product: product %}
{% endcomment %}
```

---

## 🔍 CODE REVIEW CHECKLIST

### Before Committing
- [ ] No duplicate files
- [ ] No unused code
- [ ] All CSS uses variables
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Page loads < 3 seconds
- [ ] Follows BEM naming
- [ ] Documented if complex

### Before Merging
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] No visual regressions
- [ ] Performance not degraded
- [ ] Updated task board
- [ ] Reviewer approved

---

## 📊 PERFORMANCE RULES

### CSS Performance
```css
/* ✅ GOOD: Specific selectors */
.product-card__title { }

/* ❌ BAD: Universal selectors */
* { }
div * { }

/* ❌ BAD: Deep nesting */
.page .container .section .card .title { }
```

### Image Optimization
```liquid
<!-- ✅ CORRECT: Responsive images -->
{{ product.image | image_url: width: 800 | image_tag: 
  loading: 'lazy',
  widths: '400, 800, 1200',
  sizes: '(min-width: 750px) 50vw, 100vw'
}}

<!-- ❌ WRONG: Full size always -->
{{ product.image | image_url | image_tag }}
```

### JavaScript Performance
```javascript
// ✅ GOOD: Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.product-card')) {
    // Handle click
  }
});

// ❌ BAD: Multiple listeners
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', () => {});
});
```

---

## 🛠️ DEVELOPMENT WORKFLOW

### 1. Before Starting Work
```bash
# Pull latest changes
git pull origin main

# Create backup
mkdir -p .agent/backups/$(date +%Y-%m-%d-%H%M)

# Update task board
echo "### $(date +%H:%M) - [Agent Name]" >> .agent/LIVE_TASK_BOARD.md
echo "> 🟢 ACTIVE - Starting: [Task]" >> .agent/LIVE_TASK_BOARD.md
```

### 2. During Work
```bash
# Test frequently
# Update task board every 15 minutes
# Commit small changes
```

### 3. After Completing
```bash
# Run tests
# Update task board
# Request review
# Only then commit
```

---

## 🚨 IMMEDIATE ACTIONS REQUIRED

### Priority 1: Remove Duplicate CSS Files
```bash
# Keep ONLY woodenstreet-master.css
# Delete these after merging content:
- theme-update.css
- component-woodenstreet-*.css
- woodenstreet-premium-force.css
```

### Priority 2: Remove Unused Sections
```bash
# Delete broken sections:
- sections/whisper-showcase.liquid
- sections/whisper-lookbook.liquid
- sections/whisper-featured-collection.liquid
```

### Priority 3: Consolidate Templates
```bash
# Keep ONLY index.json
# Delete:
- index-clean.json (merge into index.json)
- index-backup*.json (move to .agent/backups/)
```

---

## 📚 REFERENCE: APP DEVELOPMENT BEST PRACTICES

### From `app-builder` Skill
1. **Component-based architecture**
2. **Single responsibility principle**
3. **DRY (Don't Repeat Yourself)**
4. **KISS (Keep It Simple, Stupid)**

### From `ui-ux-pro-max` Skill
1. **Consistent spacing (8px grid)**
2. **Accessible contrast ratios (4.5:1 minimum)**
3. **Mobile-first responsive design**
4. **Performance budget (< 3s load time)**

### From `shopify-development` Skill
1. **Use Liquid best practices**
2. **Optimize images with responsive srcset**
3. **Minimize HTTP requests**
4. **Use Shopify CDN for assets**

---

## 🎯 SUCCESS METRICS

### Code Quality
- **CSS**: < 2000 lines in single file
- **Duplicates**: 0 duplicate files
- **Unused Code**: 0% unused selectors
- **Performance**: < 3s page load

### Developer Experience
- **Onboarding**: < 15 minutes to understand codebase
- **Build Time**: < 5 seconds
- **Hot Reload**: < 1 second
- **Documentation**: 100% of components documented

---

## 🔄 CONTINUOUS IMPROVEMENT

### Weekly Reviews
- Audit for duplicate files
- Remove unused code
- Update documentation
- Performance testing

### Monthly Audits
- Dependency updates
- Security patches
- Performance optimization
- Code refactoring

---

**Remember**: Every line of code is a liability. Write less, achieve more.
