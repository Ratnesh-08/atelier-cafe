# Image Relevance Fix Script for L'Atelier Café
# Downloads properly curated, contextually relevant images to replace
# mismatched and duplicated photos identified in the audit.
#
# ISSUES BEING FIXED:
# - chefs/antoine.jpg was HEADPHONES (not a chef)
# - chefs/emi.jpg was a male chef (should be female pastry chef)
# - chefs/julian.jpg was a casual headshot (same as reviewer arthur.jpg)
# - menu/espresso.jpg, cardamom_rose.jpg, hero/espresso_side.jpg were all duplicates of flat_white.jpg
# - hero/siphon_side.jpg and menu/siphon.jpg were latte art (not siphon brewing)
# - hero/bg.jpg was overhead coffee cups (not cinematic interior)
# - gallery/coffee_2.jpg was duplicate of coffee_1.jpg
# - gallery/story_3.jpg was duplicate of food_2.jpg
# - reviews/arthur.jpg was same person as chefs/julian.jpg

$ErrorActionPreference = "Continue"

$images = @(
  # ==========================================
  # HERO SECTION
  # ==========================================

  # Hero background: cinematic luxury café interior with warm lighting
  @{
    Url = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1920&q=80"
    Path = "public/images/hero/bg.jpg"
    Desc = "Warm cinematic café interior for hero background"
  },
  # Side image large: siphon/pour-over coffee brewing (not latte art)
  @{
    Url = "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/hero/siphon_side.jpg"
    Desc = "Coffee brewing process for sourcing section"
  },
  # Side image small: actual espresso being pulled from machine
  @{
    Url = "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=400&h=600&q=80"
    Path = "public/images/hero/espresso_side.jpg"
    Desc = "Espresso being pulled from machine"
  },

  # ==========================================
  # CHEFS SECTION - Real chef portraits
  # ==========================================

  # Antoine Laurent - Executive Culinary Director (male, French)
  @{
    Url = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/antoine.jpg"
    Desc = "Professional male chef in white uniform - Antoine"
  },
  # Emi Tanaka - Head of Pastry (female, Japanese)
  @{
    Url = "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/emi.jpg"
    Desc = "Female pastry chef portrait - Emi"
  },
  # Julian Vance - Master Coffee Roaster (male barista)
  @{
    Url = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/julian.jpg"
    Desc = "Male professional portrait for coffee roaster - Julian"
  },

  # ==========================================
  # REVIEWS - Distinct customer profile photos
  # ==========================================

  # Arthur Pendelton - distinct from chefs
  @{
    Url = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/arthur.jpg"
    Desc = "Male customer profile photo - Arthur"
  },

  # ==========================================
  # MENU ITEMS - Each must match its specific dish
  # ==========================================

  # Espresso: actual espresso shot in small cup
  @{
    Url = "https://images.unsplash.com/photo-1596952954288-16862d37405b?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/espresso.jpg"
    Desc = "Double espresso shot in ceramic cup"
  },
  # Cardamom Rose Latte: rose/floral latte
  @{
    Url = "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/cardamom_rose.jpg"
    Desc = "Rose-infused specialty latte"
  },
  # Siphon: actual siphon/vacuum brewer
  @{
    Url = "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/siphon.jpg"
    Desc = "Siphon vacuum coffee brewer in action"
  },

  # ==========================================
  # GALLERY - Eliminate duplicates, add variety
  # ==========================================

  # coffee_2: different from coffee_1 (actual espresso preparation)
  @{
    Url = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/coffee_2.jpg"
    Desc = "Barista pulling espresso shot for gallery"
  },
  # story_3: pastry preparation (for the mille-crepe story), not same as food_2
  @{
    Url = "https://images.unsplash.com/photo-1486427944781-dbf457eacdca?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/story_3.jpg"
    Desc = "Pastry chef layering crepe for journal story"
  }
)

Write-Host "Starting image relevance fix - downloading $($images.Count) replacement assets..."
$count = 1
$failures = @()

foreach ($img in $images) {
  Write-Host "[$count/$($images.Count)] $($img.Desc) -> $($img.Path)"
  try {
    Invoke-WebRequest -Uri $img.Url -OutFile $img.Path -ErrorAction Stop -TimeoutSec 20
    Write-Host "  OK" -ForegroundColor Green
  } catch {
    Write-Warning "  Failed ($($_.Exception.Message)). Retrying..."
    try {
      Start-Sleep -Seconds 3
      Invoke-WebRequest -Uri $img.Url -OutFile $img.Path -ErrorAction Stop -TimeoutSec 30
      Write-Host "  OK on retry" -ForegroundColor Yellow
    } catch {
      Write-Error "  FAILED: $($img.Path) - $_"
      $failures += $img.Path
    }
  }
  $count++
}

if ($failures.Count -gt 0) {
  Write-Host "`nFailed downloads:" -ForegroundColor Red
  $failures | ForEach-Object { Write-Host "  - $_" -ForegroundColor Red }
} else {
  Write-Host "`nAll $($images.Count) replacement images downloaded successfully!" -ForegroundColor Green
}
