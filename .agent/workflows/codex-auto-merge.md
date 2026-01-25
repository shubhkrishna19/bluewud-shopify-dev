---
description: Auto-merge workflow for Codex web and other agents
---

# 🔄 AUTO-MERGE WORKFLOW FOR CODEX WEB

## 🎯 THE GOAL
Allow Codex (web version) to push changes directly to `main` branch without creating PRs, while maintaining safety through:
1. Automatic backups before merge
2. Task board updates
3. Rollback capability

---

## 📋 SETUP: ONE-TIME CONFIGURATION

### Step 1: Configure Git for Direct Push

```bash
# In your local repo
cd /c/Users/shubh/Downloads/LiveShopifyProject

# Set up auto-merge branch
git config --local merge.ff false
git config --local pull.rebase false

# Create a shared branch for Codex
git checkout -b codex-work
git push -u origin codex-work
```

### Step 2: Create Auto-Merge Script

```bash
# Create the script
cat > .agent/scripts/auto-merge-codex.sh << 'EOF'
#!/bin/bash

# Auto-Merge Codex Work Script
# This pulls Codex's work and merges it automatically

TIMESTAMP=$(date +%Y-%m-%d-%H%M%S)
BACKUP_DIR=".agent/backups/$TIMESTAMP"

echo "🔄 Starting auto-merge process..."

# 1. Create backup
echo "📦 Creating backup..."
mkdir -p "$BACKUP_DIR"
git stash push -m "Pre-merge backup $TIMESTAMP"
git log -1 --pretty=format:"%H" > "$BACKUP_DIR/last-commit.txt"

# 2. Fetch Codex's work
echo "⬇️  Fetching Codex's changes..."
git fetch origin codex-work

# 3. Check if there are changes
if git diff --quiet HEAD origin/codex-work; then
    echo "✅ No new changes from Codex"
    exit 0
fi

# 4. Merge automatically
echo "🔀 Merging Codex's work..."
git merge origin/codex-work --no-edit -m "auto-merge: Codex work from $TIMESTAMP"

# 5. Check if merge was successful
if [ $? -eq 0 ]; then
    echo "✅ Merge successful!"
    
    # Update task board
    echo "" >> .agent/LIVE_TASK_BOARD.md
    echo "### $(date +%H:%M) - Auto-Merge Bot" >> .agent/LIVE_TASK_BOARD.md
    echo "> ✅ Merged Codex's work from codex-work branch" >> .agent/LIVE_TASK_BOARD.md
    echo "> **Files changed**: $(git diff --name-only HEAD~1)" >> .agent/LIVE_TASK_BOARD.md
    
    # Push to main
    git push origin main
    
    echo "🚀 Changes pushed to main"
else
    echo "❌ Merge conflict detected!"
    echo "🔙 Rolling back..."
    git merge --abort
    git stash pop
    
    # Notify in task board
    echo "" >> .agent/LIVE_TASK_BOARD.md
    echo "### $(date +%H:%M) - Auto-Merge Bot" >> .agent/LIVE_TASK_BOARD.md
    echo "> ❌ MERGE CONFLICT - Manual intervention needed" >> .agent/LIVE_TASK_BOARD.md
    echo "> **Branch**: codex-work" >> .agent/LIVE_TASK_BOARD.md
    
    exit 1
fi
EOF

chmod +x .agent/scripts/auto-merge-codex.sh
```

---

## 🤖 USAGE: HOW CODEX PUSHES WORK

### For Codex (Web Version)

**When Codex finishes a task:**

1. **Codex commits to `codex-work` branch**:
```bash
git checkout codex-work
git add .
git commit -m "feat: [description of work]"
git push origin codex-work
```

2. **Codex updates task board**:
```bash
echo "### $(date +%H:%M) - Codex" >> .agent/LIVE_TASK_BOARD.md
echo "> ✅ Pushed changes to codex-work branch" >> .agent/LIVE_TASK_BOARD.md
echo "> **Task**: [what was done]" >> .agent/LIVE_TASK_BOARD.md
echo "> **Ready for**: Auto-merge" >> .agent/LIVE_TASK_BOARD.md
```

3. **You (or cron job) run auto-merge**:
```bash
./.agent/scripts/auto-merge-codex.sh
```

---

## ⚡ AUTOMATIC SYNC (Optional)

### Option A: Manual Trigger (Recommended)
```bash
# You run this whenever you want to pull Codex's work
./.agent/scripts/auto-merge-codex.sh
```

### Option B: Scheduled Auto-Merge (Advanced)
```bash
# Set up a cron job (runs every 15 minutes)
crontab -e

# Add this line:
*/15 * * * * cd /c/Users/shubh/Downloads/LiveShopifyProject && ./.agent/scripts/auto-merge-codex.sh >> .agent/logs/auto-merge.log 2>&1
```

### Option C: Git Hook (On Push)
```bash
# Create post-receive hook
cat > .git/hooks/post-receive << 'EOF'
#!/bin/bash
# Auto-merge when Codex pushes to codex-work

while read oldrev newrev refname; do
    if [ "$refname" = "refs/heads/codex-work" ]; then
        echo "Codex pushed to codex-work, auto-merging..."
        ./.agent/scripts/auto-merge-codex.sh
    fi
done
EOF

chmod +x .git/hooks/post-receive
```

---

## 🔒 SAFETY MECHANISMS

### 1. Pre-Merge Backup
Every merge creates a backup:
```
.agent/backups/
└── 2026-01-25-194500/
    ├── last-commit.txt (commit hash)
    └── stash (uncommitted changes)
```

### 2. Conflict Detection
If merge fails, script:
- Aborts the merge
- Restores previous state
- Logs error in task board
- Exits with error code

### 3. Rollback Command
```bash
# If you need to undo a merge
LAST_BACKUP=$(ls -t .agent/backups/ | head -1)
git reset --hard $(cat .agent/backups/$LAST_BACKUP/last-commit.txt)
git stash pop
```

---

## 📊 MULTI-AGENT WORKFLOW

### Scenario: You + Codex + Antigravity Working Together

**1. You work locally on `main`**
```bash
# Your changes
git add .
git commit -m "fix: header gap"
git push origin main
```

**2. Codex works on `codex-work` branch**
```bash
# Codex's changes (via web)
# Codex commits to codex-work
# Codex pushes to origin/codex-work
```

**3. Auto-merge pulls Codex's work**
```bash
# Run manually or via cron
./.agent/scripts/auto-merge-codex.sh

# This:
# - Fetches codex-work
# - Merges into main
# - Pushes to origin/main
```

**4. You pull the merged changes**
```bash
git pull origin main
# Now you have both your work + Codex's work
```

---

## 🎯 TASK BOARD INTEGRATION

### Before Merge
```markdown
### 19:45 - Codex
> 🔄 Working on CSS consolidation
> **Status**: 🟢 ACTIVE
> **Branch**: codex-work
```

### After Codex Pushes
```markdown
### 19:50 - Codex
> ✅ Completed CSS consolidation
> **Status**: ✅ COMPLETE
> **Branch**: codex-work (ready for merge)
> **Files changed**: assets/woodenstreet-master.css
```

### After Auto-Merge
```markdown
### 19:51 - Auto-Merge Bot
> ✅ Merged Codex's work from codex-work branch
> **Files changed**: assets/woodenstreet-master.css
> **Commit**: abc123def
> **Backup**: .agent/backups/2026-01-25-195100/
```

---

## 🚀 QUICK START GUIDE

### For You (First Time Setup)

```bash
# 1. Create Codex's branch
git checkout -b codex-work
git push -u origin codex-work
git checkout main

# 2. Create auto-merge script
mkdir -p .agent/scripts
# (Copy the script from above)

# 3. Test it
./.agent/scripts/auto-merge-codex.sh
```

### For Codex (Every Time)

```bash
# 1. Switch to codex-work branch
git checkout codex-work

# 2. Make changes
# ... (edit files)

# 3. Commit and push
git add .
git commit -m "feat: your changes here"
git push origin codex-work

# 4. Update task board
echo "### $(date +%H:%M) - Codex" >> .agent/LIVE_TASK_BOARD.md
echo "> ✅ Ready for merge" >> .agent/LIVE_TASK_BOARD.md
```

### For You (Pull Codex's Work)

```bash
# Option 1: Manual
./.agent/scripts/auto-merge-codex.sh

# Option 2: Check task board first
grep "Codex" .agent/LIVE_TASK_BOARD.md | tail -5
# If you see "Ready for merge", then run auto-merge
```

---

## 🔍 MONITORING & DEBUGGING

### Check Merge Status
```bash
# See recent merges
git log --oneline --grep="auto-merge" -5

# See what Codex changed
git diff main origin/codex-work

# See merge conflicts (if any)
git diff --name-only --diff-filter=U
```

### View Auto-Merge Logs
```bash
# If using cron job
tail -f .agent/logs/auto-merge.log

# Manual run output
./.agent/scripts/auto-merge-codex.sh 2>&1 | tee .agent/logs/manual-merge.log
```

---

## ⚠️ IMPORTANT NOTES

1. **Codex should ONLY push to `codex-work` branch**
   - Never push directly to `main`
   - This prevents conflicts

2. **You can work on `main` freely**
   - Auto-merge will handle conflicts
   - Your work takes priority

3. **Always check task board before merging**
   - See what Codex changed
   - Verify it's safe to merge

4. **Backups are automatic**
   - Every merge creates a backup
   - Can rollback anytime

---

## 🎓 TEACHING CODEX THIS WORKFLOW

**Share this with Codex (web):**

> "Hey Codex! When you finish a task:
> 1. Make sure you're on `codex-work` branch
> 2. Commit your changes
> 3. Push to `origin/codex-work`
> 4. Update `.agent/LIVE_TASK_BOARD.md` with your status
> 5. I'll run the auto-merge script to pull your work into `main`
> 
> Never push directly to `main` - always use `codex-work`!"

---

**Ready to set this up?** 
Run these commands to get started:

```bash
# Create Codex's branch
git checkout -b codex-work
git push -u origin codex-work
git checkout main

# Create scripts directory
mkdir -p .agent/scripts .agent/backups .agent/logs

# You're ready! Codex can now push to codex-work
```
