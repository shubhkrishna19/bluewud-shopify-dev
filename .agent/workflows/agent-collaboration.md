---
description: How autonomous agents collaborate to prevent AI slop
---

# 🤖 AGENT COLLABORATION PROTOCOL

## 🎯 THE PROBLEM WE'RE SOLVING
**AI Slop** happens when agents:
1. Work in isolation without seeing each other's changes
2. Make assumptions instead of verifying
3. Add complexity instead of removing it
4. Don't document their decisions

## ✅ THE SOLUTION: Transparent Multi-Agent System

---

## 📚 STEP 1: SKILL-BASED AGENT ROLES

### How to Create an Agent
Each agent is defined by:
1. **A specific skill** from `.agent/skills/`
2. **A single responsibility**
3. **Clear input/output**
4. **Verification criteria**

### Example: CSS Auditor Agent

```markdown
## Agent: CSS Auditor
**Skill**: `css-architecture` + `ui-ux-pro-max`
**Input**: List of CSS files in `assets/`
**Output**: Consolidated `woodenstreet-master.css`
**Success Criteria**:
- File size < 2000 lines
- No duplicate selectors
- All colors use CSS variables
- Passes CSS lint
```

---

## 📊 STEP 2: SHARED STATE (The Task Board)

### Location
`.agent/LIVE_TASK_BOARD.md`

### What It Contains
1. **Current state snapshot** - What's working, what's broken
2. **Active agents** - Who's doing what right now
3. **Communication log** - All agent updates
4. **Decision points** - Questions that need user input

### How Agents Use It

**Before starting work**:
```bash
# Agent reads task board
cat .agent/LIVE_TASK_BOARD.md

# Agent checks if their task is still needed
grep "Agent: CSS Auditor" .agent/LIVE_TASK_BOARD.md

# Agent updates status to "ACTIVE"
sed -i 's/Status: ⏸️ WAITING/Status: 🟢 ACTIVE/' .agent/LIVE_TASK_BOARD.md
```

**During work**:
```bash
# Agent logs progress
echo "19:45 - CSS Auditor: Found 12 duplicate selectors, removing..." >> .agent/LIVE_TASK_BOARD.md
```

**After completing**:
```bash
# Agent updates status
sed -i 's/Status: 🟢 ACTIVE/Status: ✅ COMPLETE/' .agent/LIVE_TASK_BOARD.md

# Agent notifies next agent
echo "19:50 - CSS Auditor: DONE. @Reviewer please validate woodenstreet-master.css" >> .agent/LIVE_TASK_BOARD.md
```

---

## 🔄 STEP 3: AGENT EXECUTION FLOW

### Sequential Execution (Recommended for Critical Tasks)

```
User Request
    ↓
Main Agent (Antigravity)
    ↓
Creates Task Board
    ↓
Dispatches Agent 1 (Cleanup)
    ↓
Agent 1 completes → Updates Task Board
    ↓
Main Agent verifies → Dispatches Agent 2 (CSS Auditor)
    ↓
Agent 2 completes → Updates Task Board
    ↓
Main Agent verifies → Dispatches Agent 3 (Reviewer)
    ↓
Agent 3 validates → Updates Task Board
    ↓
Main Agent commits changes
```

### Parallel Execution (For Independent Tasks)

```
Main Agent
    ├─→ Agent A (Fix CSS)
    ├─→ Agent B (Update Liquid)
    └─→ Agent C (Optimize Images)
         ↓
    All agents update Task Board
         ↓
    Main Agent merges results
```

---

## 🛠️ STEP 4: USING SKILLS EFFICIENTLY

### Skill Directory Structure
```
.agent/skills/
├── ui-ux-pro-max/
│   └── SKILL.md (Design system guidelines)
├── shopify-development/
│   └── SKILL.md (Liquid best practices)
├── css-architecture/
│   └── SKILL.md (CSS organization rules)
└── testing-expert/
    └── SKILL.md (QA checklists)
```

### How Agents Load Skills

**Example: Artist Agent**
```bash
# 1. Agent reads skill file
cat .agent/skills/ui-ux-pro-max/SKILL.md

# 2. Agent follows guidelines
# - Use CSS variables for colors
# - Follow 8px spacing grid
# - Ensure 4.5:1 contrast ratio

# 3. Agent validates against skill
# - Check: All colors use var(--color-*)
# - Check: All spacing uses multiples of 8px
# - Check: Contrast passes WCAG AA
```

---

## 📝 STEP 5: COMMUNICATION PROTOCOL

### Agent-to-Agent Communication

**Format**:
```markdown
### [Timestamp] - [Agent Name]
> [Message]
> **Status**: [ACTIVE/WAITING/COMPLETE/BLOCKED]
> **Next**: [What needs to happen next]
```

**Example**:
```markdown
### 19:45 - CSS Auditor
> Completed consolidation. Found 8 unused classes, removed.
> **Status**: ✅ COMPLETE
> **Next**: @Reviewer please validate woodenstreet-master.css
> **Files changed**: assets/woodenstreet-master.css
```

### Agent-to-User Communication

**Format**:
```markdown
## 🚦 DECISION NEEDED: [Topic]
**Agent**: [Agent Name]
**Question**: [Clear question]
**Options**:
A. [Option 1] - [Pros/Cons]
B. [Option 2] - [Pros/Cons]
**Recommendation**: [Agent's suggestion]
**Impact**: [What happens if we choose each option]
```

---

## 🔍 STEP 6: VERIFICATION & ROLLBACK

### Before Any Change

```bash
# 1. Create backup
mkdir -p .agent/backups/$(date +%Y-%m-%d-%H%M)
cp -r templates sections assets .agent/backups/$(date +%Y-%m-%d-%H%M)/

# 2. Document what will change
echo "Removing whisper-showcase.liquid" >> .agent/backups/$(date +%Y-%m-%d-%H%M)/CHANGES.md

# 3. Execute change
rm sections/whisper-showcase.liquid

# 4. Update task board
echo "19:50 - Cleanup: Removed whisper-showcase.liquid" >> .agent/LIVE_TASK_BOARD.md
```

### After Any Change

```bash
# 1. Reviewer agent validates
npm run test  # or manual testing

# 2. If validation fails
echo "❌ ROLLBACK: whisper-showcase removal caused errors" >> .agent/LIVE_TASK_BOARD.md
cp .agent/backups/$(date +%Y-%m-%d-%H%M)/sections/whisper-showcase.liquid sections/

# 3. If validation passes
echo "✅ VERIFIED: whisper-showcase removal successful" >> .agent/LIVE_TASK_BOARD.md
git add .
git commit -m "fix: Remove broken whisper-showcase section"
```

---

## 🎓 TEACHING YOU THE SYSTEM

### How to Monitor Agents

**1. Open the Task Board**
```bash
# In VS Code or any editor
code .agent/LIVE_TASK_BOARD.md

# Watch for updates in real-time
watch -n 2 cat .agent/LIVE_TASK_BOARD.md
```

**2. Check Agent Status**
```bash
# See which agents are active
grep "Status: 🟢 ACTIVE" .agent/LIVE_TASK_BOARD.md

# See what they're working on
grep "Current Task:" .agent/LIVE_TASK_BOARD.md
```

**3. Review Communication Log**
```bash
# See all agent messages
grep "^###" .agent/LIVE_TASK_BOARD.md

# See recent activity
tail -20 .agent/LIVE_TASK_BOARD.md
```

### How to Intervene

**Stop an Agent**
```markdown
# Add to task board:
## 🛑 HALT: CSS Auditor
**Reason**: User wants to review approach first
**Status**: ⏸️ PAUSED
```

**Redirect an Agent**
```markdown
## 🔄 REDIRECT: Cleanup Agent
**New Task**: Instead of removing whisper-showcase, just hide it with CSS
**Reason**: We might need it later
```

**Approve Agent Work**
```markdown
## ✅ APPROVED: CSS Auditor
**Reviewed**: woodenstreet-master.css looks good
**Next**: Proceed to commit
```

---

## 🚀 EXAMPLE: FULL AGENT WORKFLOW

### Scenario: Fix Header Gap

**1. User Request**
> "Fix the 200px white gap below the announcement bar"

**2. Main Agent Creates Task**
```markdown
## Task: Fix Header Gap
**Assigned to**: CSS Auditor
**Skill**: css-architecture
**Input**: Current header CSS
**Output**: Fixed CSS with no gap
**Verification**: Visual inspection + screenshot
```

**3. CSS Auditor Executes**
```bash
# Read skill
cat .agent/skills/css-architecture/SKILL.md

# Update task board
echo "19:50 - CSS Auditor: ACTIVE - Analyzing header spacing" >> .agent/LIVE_TASK_BOARD.md

# Make changes
# ... (CSS edits)

# Update task board
echo "19:55 - CSS Auditor: COMPLETE - Removed margin-bottom from .announcement-bar" >> .agent/LIVE_TASK_BOARD.md
```

**4. Reviewer Validates**
```bash
# Update task board
echo "19:56 - Reviewer: ACTIVE - Testing header gap fix" >> .agent/LIVE_TASK_BOARD.md

# Test
# ... (visual inspection)

# Update task board
echo "19:58 - Reviewer: ✅ VERIFIED - Gap is fixed, no regressions" >> .agent/LIVE_TASK_BOARD.md
```

**5. Main Agent Commits**
```bash
git add assets/woodenstreet-premium-force.css
git commit -m "fix: Remove header gap by zeroing announcement-bar margin"
git push origin main

# Update task board
echo "20:00 - Antigravity: ✅ DEPLOYED - Header gap fix live" >> .agent/LIVE_TASK_BOARD.md
```

---

## 🎯 KEY PRINCIPLES

1. **One Agent, One Task** - No agent tries to do everything
2. **Document Everything** - All changes logged in task board
3. **Verify Before Commit** - Reviewer agent checks all work
4. **Backup First** - Never delete without backup
5. **Communicate Clearly** - Use standardized format
6. **Use Skills** - Don't guess, follow skill guidelines
7. **Ask When Unsure** - Better to ask than create AI slop

---

## 📊 SUCCESS METRICS

**Good Agent Behavior**:
- ✅ Updates task board before/during/after work
- ✅ Follows skill guidelines
- ✅ Creates backups
- ✅ Asks questions when unsure
- ✅ Validates changes before committing

**Bad Agent Behavior** (AI Slop):
- ❌ Works in isolation
- ❌ Makes assumptions
- ❌ Doesn't document changes
- ❌ Skips verification
- ❌ Adds complexity without justification

---

**Ready to see this in action?** 
Say "execute cleanup" and watch the agents collaborate in `.agent/LIVE_TASK_BOARD.md`!
