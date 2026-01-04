# Quick Deploy Script
# Run this after making changes to deploy quickly

Write-Host "🚀 Portfolio Quick Deploy Script" -ForegroundColor Cyan
Write-Host ""

# Check if there are changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ No changes detected. Nothing to deploy." -ForegroundColor Yellow
    exit 0
}

# Show what changed
Write-Host "📝 Changes detected:" -ForegroundColor Green
git status --short
Write-Host ""

# Ask for commit message
$commitMsg = Read-Host "Enter commit message (or press Enter for default)"
if (-not $commitMsg) {
    $commitMsg = "Update portfolio content"
}

# Add all changes
Write-Host ""
Write-Host "📦 Adding changes..." -ForegroundColor Cyan
git add .

# Commit
Write-Host "💾 Committing changes..." -ForegroundColor Cyan
git commit -m $commitMsg

# Push
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
git push

Write-Host ""
Write-Host "✅ Deployment initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "Your changes will be live in 1-2 minutes on:" -ForegroundColor Yellow
Write-Host "  • Vercel: https://your-project.vercel.app" -ForegroundColor White
Write-Host "  • Netlify: https://your-project.netlify.app" -ForegroundColor White
Write-Host "  • GitHub Pages: https://username.github.io/portfolio" -ForegroundColor White
Write-Host ""
Write-Host "🎉 Done!" -ForegroundColor Green
