#!/bin/bash

# DUPLICATE FILE FINDER & CLEANER
# Finds and removes duplicate/backup files following DEVELOPMENT_RULES.md

echo "🔍 Scanning for duplicate and backup files..."
echo "================================================"

# Create backup directory
BACKUP_DIR=".agent/backups/cleanup-$(date +%Y-%m-%d-%H%M)"
mkdir -p "$BACKUP_DIR"

# Function to backup and remove file
backup_and_remove() {
    local file=$1
    local reason=$2
    
    if [ -f "$file" ]; then
        echo "📦 Backing up: $file ($reason)"
        cp "$file" "$BACKUP_DIR/"
        echo "🗑️  Removing: $file"
        # rm "$file"  # Commented out for safety - uncomment when ready
        echo "  ✓ Would remove: $file" >> "$BACKUP_DIR/removed_files.log"
    fi
}

echo ""
echo "1️⃣  Checking CSS files..."
echo "------------------------"

# Find duplicate CSS files
CSS_DUPLICATES=(
    "assets/theme-update.css"
    "assets/component-woodenstreet-hero.css"
    "assets/component-woodenstreet-global.css"
    "assets/component-woodenstreet-video.css"
    "assets/component-trust-strip-v2.css"
    "assets/component-woodenstreet-engagement.css"
    "assets/component-woodenstreet-ui-overrides.css"
    "assets/woodenstreet-premium-force.css"
)

for file in "${CSS_DUPLICATES[@]}"; do
    if [ -f "$file" ]; then
        backup_and_remove "$file" "Duplicate CSS - consolidating into woodenstreet-master.css"
    fi
done

echo ""
echo "2️⃣  Checking for backup files..."
echo "--------------------------------"

# Find backup files
find . -name "*.backup.*" -o -name "*-backup.*" -o -name "*-old.*" | while read file; do
    backup_and_remove "$file" "Backup file"
done

echo ""
echo "3️⃣  Checking template files..."
echo "------------------------------"

# Template duplicates
TEMPLATE_DUPLICATES=(
    "templates/index-clean.json"
    "templates/index-backup.json"
)

for file in "${TEMPLATE_DUPLICATES[@]}"; do
    if [ -f "$file" ]; then
        backup_and_remove "$file" "Duplicate template"
    fi
done

echo ""
echo "4️⃣  Checking section files..."
echo "-----------------------------"

# Broken sections to remove
BROKEN_SECTIONS=(
    "sections/whisper-showcase.liquid"
    "sections/whisper-urgency-strip.liquid"
)

for file in "${BROKEN_SECTIONS[@]}"; do
    if [ -f "$file" ]; then
        backup_and_remove "$file" "Broken section"
    fi
done

echo ""
echo "5️⃣  Checking for unused snippets..."
echo "-----------------------------------"

# Find snippets not referenced anywhere
# (This is a simplified check - would need more sophisticated analysis)
echo "ℹ️  Manual review needed for unused snippets"

echo ""
echo "📊 SUMMARY"
echo "=========="
echo "Backup location: $BACKUP_DIR"
echo "Files processed: $(ls -1 "$BACKUP_DIR" 2>/dev/null | wc -l)"
echo ""
echo "⚠️  NOTE: Files are backed up but NOT deleted yet."
echo "    Review the backup, then uncomment the 'rm' line in this script."
echo ""
echo "Next steps:"
echo "1. Review backed up files in: $BACKUP_DIR"
echo "2. Verify woodenstreet-master.css has all needed styles"
echo "3. Test the site"
echo "4. If all good, uncomment 'rm' line and run again"
echo ""
