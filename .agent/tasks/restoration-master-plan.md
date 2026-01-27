# 🧠 RESTORATION MASTER PLAN - Autonomous Agent Execution

## 📋 OBJECTIVE
Restore the WoodenStreet Shopify theme to a **clean, working state** by removing AI slop and using the `latest working theme` as reference.

---

## 🎯 PHASE 1: CLEANUP (REMOVE BROKEN ELEMENTS)

### Agent: **Cleanup Specialist**
**Skill**: `file-system-expert`

**Tasks**:
1. ✅ Backup current `templates/index.json` → `templates/index-backup.json`
2. ✅ Create minimal `index-clean.json` (DONE)
3. 🔄 Remove problematic sections from current homepage:
   - `whisper-showcase` (black blobs)
   - `whisper-urgency-strip` (unnecessary)
   - `whisper-lookbook` (duplicate labels)
   - `whisper-featured-collection` (white text on white)

**Execution**:
```bash
# Step 1: Backup
cp templates/index.json templates/index-backup-$(date +%Y%m%d).json

# Step 2: Replace with clean version
cp templates/index-clean.json templates/index.json
```

---

## 🎯 PHASE 2: RESTORE WORKING SECTIONS

### Agent: **Liquifier (Liquid Specialist)**
**Skill**: `shopify-development`

**Tasks**:
1. Compare `latest working theme/sections/` with current `sections/`
2. Identify which sections are **proven working**:
   - ✅ `hero.liquid` (Empire theme default)
   - ✅ `product-list.liquid` (Empire theme default)
   - ✅ `media-with-content.liquid` (Empire theme default)
3. Copy working sections from reference if current versions are broken

**Execution**:
```liquid
<!-- Use ONLY Empire theme's native sections -->
<!-- Avoid custom "whisper-" or "woodenstreet-" sections until verified -->
```

---

## 🎯 PHASE 3: CSS CONSOLIDATION

### Agent: **Artist (CSS Specialist)**
**Skill**: `ui-ux-pro-max`, `css-architecture`

**Tasks**:
1. **Audit CSS conflicts**:
   - `theme.css` (base - 4000+ lines)
   - `theme-update.css` (Whisper components - 3800+ lines)
   - `component-woodenstreet-*.css` (custom - multiple files)
   - `woodenstreet-premium-force.css` (overrides)

2. **Create single source of truth**:
   ```css
   /* woodenstreet-master.css */
   /* Consolidated output (no @import in production) */
   /* Base Empire + Whisper + custom overrides */
   ```

3. **Remove unused CSS**:
   - Delete all `.whisper-*` classes that reference removed sections
   - Delete conflicting overrides

**Execution**:
```bash
# Find all CSS files
find assets -name "*.css" | grep -E "(whisper|woodenstreet)"

# Audit file sizes
du -h assets/*.css | sort -h
```

---

## 🎯 PHASE 4: HEADER GAP FIX

### Agent: **Layout Debugger**
**Skill**: `browser-devtools-expert`

**Tasks**:
1. Inspect announcement bar spacing
2. Inspect header section spacing
3. Remove excessive margins/padding

**Fix**:
```css
/* In woodenstreet-premium-force.css */
.announcement-bar {
    margin: 0 !important;
    padding: 8px 0 !important;
}

.shopify-section {
    margin-bottom: 0 !important;
}

.site-header-main {
    padding-top: 0 !important;
}
```

---

## 🎯 PHASE 5: PRODUCT CARD VISIBILITY

### Agent: **Contrast Fixer**
**Skill**: `accessibility-expert`

**Tasks**:
1. Ensure all product card text has proper contrast
2. Fix white-on-white text in "Trending Now"
3. Verify price visibility

**Fix**:
```css
/* Force readable text */
.product-card .productitem--title,
.product-card .price--main {
    color: #1A1A1A !important;
    opacity: 1 !important;
}
```

---

## 🎯 PHASE 6: TESTING & VALIDATION

### Agent: **Reviewer (QA)**
**Skill**: `testing-expert`

**Checklist**:
- [ ] Homepage loads without errors
- [ ] No white gaps between sections
- [ ] All text is readable
- [ ] Images load correctly
- [ ] Mobile layout works
- [ ] No console errors
- [ ] Page load < 3 seconds

---

## 📚 HOW TO USE AUTONOMOUS AGENTS

### Method 1: Browser Subagent (for visual tasks)
```javascript
// Example: Fix header gap visually
browser_subagent({
  TaskName: "Fix Header Gap",
  Task: "Navigate to the homepage. Inspect the announcement bar and header. Identify spacing issues. Take screenshots before and after applying CSS fixes.",
  RecordingName: "header_gap_fix"
})
```

### Method 2: Sequential Task Execution
```bash
# 1. Artist fixes CSS
# 2. Liquifier updates Liquid
# 3. Reviewer validates
# 4. Commit changes
```

### Method 3: Parallel Execution (for independent tasks)
```bash
# Run these simultaneously:
# - Artist: Fix header CSS
# - Liquifier: Update product card Liquid
# - Logic: Add search functionality
```

---

## 🎓 TEACHING YOU THE WORKFLOW

### Step 1: Define the Problem
- "Header has 200px gap"
- "Product cards have white text"

### Step 2: Assign to Specialist
- CSS issues → **Artist**
- Liquid issues → **Liquifier**
- JS issues → **Logic**

### Step 3: Execute with Skill
```
Artist uses `ui-ux-pro-max` skill
Liquifier uses `shopify-development` skill
Logic uses `javascript-expert` skill
```

### Step 4: Review & Merge
- Reviewer checks the work
- If approved, commit to `main`
- If rejected, loop back to specialist

---

## 🚀 NEXT ACTIONS

1. **YOU**: Review `index-clean.json` and approve minimal homepage
2. **ME**: Execute Phase 1 cleanup (remove broken sections)
3. **ME**: Deploy autonomous agents for Phases 2-6
4. **YOU**: Test and provide feedback

**Ready to proceed?** Say "execute cleanup" and I'll start Phase 1.
