# DUPLICATE FILE FINDER & CLEANER (PowerShell)
# Finds and removes duplicate/backup files following DEVELOPMENT_RULES.md

Write-Host "🔍 Scanning for duplicate and backup files..." -ForegroundColor Cyan
Write-Host "================================================"

# Create backup directory
$timestamp = Get-Date -Format "yyyy-MM-dd-HHmm"
$backupDir = ".agent\backups\cleanup-$timestamp"
New-Item -ItemType Directory -Force -Path $backupDir | Out-Null

# Function to backup and remove file
function Backup-AndRemove {
    param(
        [string]$file,
        [string]$reason
    )
    
    if (Test-Path $file) {
        Write-Host "📦 Backing up: $file ($reason)" -ForegroundColor Yellow
        Copy-Item $file -Destination $backupDir
        Write-Host "🗑️  Would remove: $file" -ForegroundColor Red
        # Remove-Item $file  # Commented out for safety
        Add-Content -Path "$backupDir\removed_files.log" -Value "Would remove: $file - Reason: $reason"
    }
}

Write-Host ""
Write-Host "1️⃣  Checking CSS files..." -ForegroundColor Green
Write-Host "------------------------"

# Find duplicate CSS files
$cssDuplicates = @(
    "assets\theme-update.css",
    "assets\component-woodenstreet-hero.css",
    "assets\component-woodenstreet-global.css",
    "assets\component-woodenstreet-video.css",
    "assets\component-trust-strip-v2.css",
    "assets\component-woodenstreet-engagement.css",
    "assets\component-woodenstreet-ui-overrides.css",
    "assets\woodenstreet-premium-force.css"
)

foreach ($file in $cssDuplicates) {
    Backup-AndRemove -file $file -reason "Duplicate CSS - consolidating into woodenstreet-master.css"
}

Write-Host ""
Write-Host "2️⃣  Checking for backup files..." -ForegroundColor Green
Write-Host "--------------------------------"

# Find backup files
Get-ChildItem -Recurse -Include "*backup*", "*-old.*", "*.bak" | ForEach-Object {
    Backup-AndRemove -file $_.FullName -reason "Backup file"
}

Write-Host ""
Write-Host "3️⃣  Checking template files..." -ForegroundColor Green
Write-Host "------------------------------"

# Template duplicates
$templateDuplicates = @(
    "templates\index-clean.json",
    "templates\index-backup.json"
)

foreach ($file in $templateDuplicates) {
    Backup-AndRemove -file $file -reason "Duplicate template"
}

Write-Host ""
Write-Host "4️⃣  Checking section files..." -ForegroundColor Green
Write-Host "-----------------------------"

# Broken sections to remove
$brokenSections = @(
    "sections\whisper-showcase.liquid",
    "sections\whisper-urgency-strip.liquid"
)

foreach ($file in $brokenSections) {
    Backup-AndRemove -file $file -reason "Broken section"
}

Write-Host ""
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "=========="
Write-Host "Backup location: $backupDir"
$fileCount = (Get-ChildItem $backupDir -File).Count
Write-Host "Files processed: $fileCount"
Write-Host ""
Write-Host "⚠️  NOTE: Files are backed up but NOT deleted yet." -ForegroundColor Yellow
Write-Host "    Review the backup, then uncomment the 'Remove-Item' line in this script."
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Review backed up files in: $backupDir"
Write-Host "2. Verify woodenstreet-master.css has all needed styles"
Write-Host "3. Test the site"
Write-Host "4. If all good, uncomment 'Remove-Item' line and run again"
Write-Host ""
