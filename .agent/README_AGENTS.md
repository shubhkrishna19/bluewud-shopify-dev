# 🚀 AGENT ONBOARDING - START HERE

**Welcome, Agent!** You're joining the WoodenStreet Shopify theme restoration project.

---

## ⚡ QUICK START (5 Minutes)

### 1. Read These Files (In Order)
1. **THIS FILE** (you're here) - Overview
2. `.agent/LIVE_TASK_BOARD.md` - Current status & active tasks
3. `.agent/workflows/agent-collaboration.md` - How we work together
4. `AGENTS.md` - Project context & history

### 2. Check Current Status
```bash
# See what's happening right now
cat .agent/LIVE_TASK_BOARD.md | grep "Status:"

# See what needs to be done
cat .agent/LIVE_TASK_BOARD.md | grep "🚦 DECISION NEEDED"
```

### 3. Claim a Task
```markdown
# Update .agent/LIVE_TASK_BOARD.md:
### [Current Time] - [Your Agent Name]
> 🟢 ACTIVE - Claiming task: [Task Name]
> **ETA**: [How long you think it will take]
```

---

## 📁 PROJECT STRUCTURE

```
LiveShopifyProject/
├── .agent/                          # 👈 START HERE
│   ├── LIVE_TASK_BOARD.md          # 🔥 MOST IMPORTANT - Read first!
│   ├── README_AGENTS.md            # 👈 This file
│   ├── workflows/
│   │   ├── agent-collaboration.md  # How we work together
│   │   └── codex-auto-merge.md     # How Codex pushes work
│   ├── tasks/
│   │   ├── restoration-master-plan.md  # Overall strategy
│   │   └── restoration-audit.md    # What's broken/working
│   └── skills/                     # Reference these for guidelines
│       ├── ui-ux-pro-max/
│       ├── shopify-development/
│       └── css-architecture/
│
├── assets/                         # CSS & JS files
│   └── woodenstreet-master.css    # 🎯 SINGLE SOURCE OF TRUTH for CSS
│
├── sections/                       # Shopify sections
├── snippets/                       # Reusable Liquid components
├── templates/                      # Page templates
│   └── index.json                 # Homepage structure
│
└── latest working theme/          # 📚 REFERENCE - Working baseline
```

---

## 🎯 CURRENT PRIORITY TASKS

### 🔴 CRITICAL (Do First)
1. **CSS Consolidation** - Merge all CSS into `woodenstreet-master.css`
2. **Remove Broken Sections** - Delete sections causing AI slop
3. **Fix Header Gap** - Remove 200px white space

### 🟡 IMPORTANT (Do Next)
4. **Product Card Contrast** - Fix white text on white
5. **Mobile Responsiveness** - Test and fix mobile layout
6. **Performance Audit** - Ensure page loads < 3s

### 🟢 NICE TO HAVE (Do Later)
7. **Add Animations** - Entrance effects (only if CSS is clean)
8. **Search Enhancement** - Improve search modal
9. **Documentation** - Update component docs

---

## 🤖 AGENT ROLES (Pick One)

### 🎨 Artist (CSS Specialist)
**Skills**: `ui-ux-pro-max`, `css-architecture`
**Current Task**: Consolidate CSS files
**What to do**:
1. Read `.agent/tasks/css-consolidation-plan.md` (will create)
2. Merge all CSS into `assets/woodenstreet-master.css`
3. Remove duplicate selectors
4. Test that nothing breaks

### 💧 Liquifier (Liquid Specialist)
**Skills**: `shopify-development`
**Current Task**: Clean up templates
**What to do**:
1. Compare `templates/index.json` with `latest working theme/templates/index.json`
2. Remove broken sections
3. Keep only working sections
4. Test homepage loads

### 🧹 Cleanup Specialist
**Skills**: `file-system-expert`
**Current Task**: Remove unused files
**What to do**:
1. Backup everything to `.agent/backups/`
2. Delete unused CSS files
3. Delete broken section files
4. Update `.agent/LIVE_TASK_BOARD.md` with what was removed

### ✅ Reviewer (QA)
**Skills**: `testing-expert`
**Current Task**: Validate all changes
**What to do**:
1. Test homepage after each change
2. Check mobile responsiveness
3. Verify no console errors
4. Document test results in `.agent/reports/`

---

## 📋 RULES (MUST FOLLOW)

### ✅ DO
1. **Update task board** before, during, and after work
2. **Create backups** before deleting anything
3. **Test your changes** before committing
4. **Ask questions** if unsure (in task board)
5. **Use ONE CSS file** (`woodenstreet-master.css`)
6. **Follow skills** (read `.agent/skills/` for guidelines)

### ❌ DON'T
1. **Don't create new CSS files** - Use existing `woodenstreet-master.css`
2. **Don't delete without backup** - Always backup first
3. **Don't work in isolation** - Update task board
4. **Don't add complexity** - Remove it instead
5. **Don't guess** - Check `latest working theme/` for reference
6. **Don't commit broken code** - Test first

---

## 🔄 WORKFLOW (Step by Step)

### Before Starting Work
```bash
# 1. Read task board
cat .agent/LIVE_TASK_BOARD.md

# 2. Check for conflicts
git pull origin main

# 3. Create backup
mkdir -p .agent/backups/$(date +%Y-%m-%d-%H%M)
cp -r assets sections templates .agent/backups/$(date +%Y-%m-%d-%H%M)/

# 4. Update task board
echo "### $(date +%H:%M) - [Your Name]" >> .agent/LIVE_TASK_BOARD.md
echo "> 🟢 ACTIVE - Starting: [Task Name]" >> .agent/LIVE_TASK_BOARD.md
```

### During Work
```bash
# Update progress every 15 minutes
echo "### $(date +%H:%M) - [Your Name]" >> .agent/LIVE_TASK_BOARD.md
echo "> 🔄 Progress: [What you're doing now]" >> .agent/LIVE_TASK_BOARD.md
```

### After Completing Work
```bash
# 1. Test your changes
# (Visual inspection, console check, mobile test)

# 2. Update task board
echo "### $(date +%H:%M) - [Your Name]" >> .agent/LIVE_TASK_BOARD.md
echo "> ✅ COMPLETE - [Task Name]" >> .agent/LIVE_TASK_BOARD.md
echo "> **Files changed**: [List files]" >> .agent/LIVE_TASK_BOARD.md
echo "> **Next**: @Reviewer please validate" >> .agent/LIVE_TASK_BOARD.md

# 3. Commit (only if tests pass)
git add .
git commit -m "fix: [clear description]"
git push origin main
```

---

## 🎯 CURRENT FOCUS: CSS CONSOLIDATION

### The Problem
We had **TOO MANY CSS files** (now archived after consolidation):
- `theme.css` (4000+ lines - Empire base)
- `theme-update.css` (3800+ lines - Whisper components)
- `component-woodenstreet-*.css` (multiple files)
- `woodenstreet-premium-force.css` (overrides)

### The Solution
**ONE master CSS file**: `assets/woodenstreet-master.css` (single source of truth)

### Your Task (If You're the Artist)
1. Create `assets/woodenstreet-master.css`
2. Copy ONLY working styles from other files
3. Remove duplicates
4. Test that nothing breaks
5. Update `layout/theme.liquid` to load only this file
6. Delete old CSS files

**See**: `.agent/tasks/css-consolidation-plan.md` for detailed steps

---

## 🚦 DECISION POINTS (Need Input)

### Question 1: Which CSS to Keep?
**Options**:
A. Keep Empire's `theme.css` + our custom styles
B. Start fresh with only custom styles

**Current Decision**: Option A (safer)

### Question 2: Animations?
**Options**:
A. Keep AOS library for entrance animations
B. Remove all animations for now

**Current Decision**: Option B (remove complexity)

---

## 📞 COMMUNICATION

### How to Ask Questions
```markdown
## 🚦 DECISION NEEDED: [Your Question]
**Agent**: [Your Name]
**Question**: [Clear question]
**Options**:
A. [Option 1]
B. [Option 2]
**Recommendation**: [Your suggestion]
```

### How to Report Issues
```markdown
## 🐛 BUG FOUND: [Issue Name]
**Agent**: [Your Name]
**Description**: [What's broken]
**Steps to Reproduce**: [How to see the bug]
**Suggested Fix**: [Your idea]
```

### How to Share Progress
```markdown
### [Time] - [Your Name]
> 🔄 Progress Update
> **Completed**: [What you finished]
> **In Progress**: [What you're doing now]
> **Blocked**: [Any issues]
> **ETA**: [When you'll be done]
```

---

## 🎓 LEARNING RESOURCES

### Skills to Reference
1. **UI/UX**: `.agent/skills/ui-ux-pro-max/SKILL.md`
2. **Shopify**: `.agent/skills/shopify-development/SKILL.md`
3. **CSS**: `.agent/skills/css-architecture/SKILL.md`

### Working Examples
- Check `latest working theme/` for proven working code
- Compare with current broken code
- Copy working patterns

---

## ✅ SUCCESS CHECKLIST

Before saying you're done:
- [ ] Updated `.agent/LIVE_TASK_BOARD.md`
- [ ] Created backup in `.agent/backups/`
- [ ] Tested changes (visual + console)
- [ ] No new errors introduced
- [ ] Mobile layout works
- [ ] Committed with clear message
- [ ] Notified Reviewer agent

---

## 🚀 READY TO START?

1. **Read** `.agent/LIVE_TASK_BOARD.md`
2. **Pick** a task that's not claimed
3. **Update** task board with your status
4. **Start** working
5. **Communicate** your progress

**Questions?** Add them to `.agent/LIVE_TASK_BOARD.md` under "🚦 DECISION NEEDED"

---

**Welcome to the team! Let's fix this site together.** 🎉
