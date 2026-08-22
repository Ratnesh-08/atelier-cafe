# PowerShell script to download luxury cafe images for L'Atelier Cafe website.
# These royalty-free images are sourced from Unsplash to support offline development.

$images = @(
  # Hero images
  @{
    Url = "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/hero/bg.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/hero/siphon_side.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1510972527409-cca19de31749?auto=format&fit=crop&w=400&h=600&q=80"
    Path = "public/images/hero/espresso_side.jpg"
  },

  # Chefs
  @{
    Url = "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/antoine.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/emi.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1595273670150-db0c3c66f51c?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/chefs/julian.jpg"
  },

  # Reviews avatars
  @{
    Url = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/eleanora.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/marcus.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/clarissa.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/arthur.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    Path = "public/images/reviews/sofia.jpg"
  },

  # Menu items
  @{
    Url = "https://images.unsplash.com/photo-1510972527409-cca19de31749?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/espresso.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/flat_white.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/cardamom_rose.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/v60.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/kyoto_drip.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/nitro_cold_brew.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/smoked_vanilla.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/matcha_latte.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/pu_erh.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/mushroom_tartine.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/avocado_fennel.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/salmon_benedict.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/truffled_egg.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/tiramisu.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/mille_crepe.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/siphon.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    Path = "public/images/menu/lavender_elixir.jpg"
  },

  # Gallery
  @{
    Url = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/interior_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/coffee_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/food_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/kitchen_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/events_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/interior_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1510972527409-cca19de31749?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/coffee_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/food_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/kitchen_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/lifestyle_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/lifestyle_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/food_3.jpg"
  },

  # Stories/Blog
  @{
    Url = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/story_1.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/story_2.jpg"
  },
  @{
    Url = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
    Path = "public/images/gallery/story_3.jpg"
  }
)

Write-Host "Creating local directories..."
$dirs = @("public/images/menu", "public/images/chefs", "public/images/reviews", "public/images/gallery", "public/images/hero")
foreach ($dir in $dirs) {
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }
}

Write-Host "Starting download of $( $images.Count ) assets..."
$count = 1
foreach ($img in $images) {
  Write-Host "[$count/$($images.Count)] Downloading $($img.Path)..."
  try {
    # Perform silent download
    Invoke-WebRequest -Uri $img.Url -OutFile $img.Path -ErrorAction Stop -TimeoutSec 15
  } catch {
    Write-Warning "Failed to download $($img.Url). Retrying once..."
    try {
      Start-Sleep -Seconds 2
      Invoke-WebRequest -Uri $img.Url -OutFile $img.Path -ErrorAction Stop -TimeoutSec 20
    } catch {
      Write-Error "Failed downloading $($img.Path): $_"
    }
  }
  $count++
}
Write-Host "All assets downloaded successfully!"
