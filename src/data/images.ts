// Centralized Image Registry for L'Atelier Café
// Maps every content section and item to its exact, verified image path

export const IMAGES = {
  hero: {
    bg: '/images/hero/bg.webp',
    siphonSide: '/images/hero/siphon_side.jpg',
    espressoSide: '/images/hero/espresso_side.jpg',
  },
  chefs: {
    antoine: '/images/chefs/antoine.jpg',
    emi: '/images/chefs/emi.jpg',
    julian: '/images/chefs/julian.jpg',
  },
  menu: {
    espresso: '/images/menu/espresso.jpg',
    flatWhite: '/images/menu/flat_white.jpg',
    cardamomRose: '/images/menu/cardamom_rose.jpg',
    v60: '/images/menu/v60.jpg',
    kyotoDrip: '/images/menu/kyoto_drip.jpg',
    nitroColdBrew: '/images/menu/nitro_cold_brew.jpg',
    smokedVanilla: '/images/menu/smoked_vanilla.jpg',
    matchaLatte: '/images/menu/matcha_latte.jpg',
    puErh: '/images/menu/pu_erh.jpg',
    mushroomTartine: '/images/menu/mushroom_tartine.jpg',
    avocadoFennel: '/images/menu/avocado_fennel.jpg',
    salmonBenedict: '/images/menu/salmon_benedict.jpg',
    truffledEgg: '/images/menu/truffled_egg.jpg',
    tiramisu: '/images/menu/tiramisu.jpg',
    milleCrepe: '/images/menu/mille_crepe.jpg',
    siphon: '/images/menu/siphon.jpg',
    lavenderElixir: '/images/menu/lavender_elixir.jpg',
  },
  reviews: {
    eleanora: '/images/reviews/eleanora.jpg',
    marcus: '/images/reviews/marcus.jpg',
    clarissa: '/images/reviews/clarissa.jpg',
    arthur: '/images/reviews/arthur.jpg',
    sofia: '/images/reviews/sofia.jpg',
  },
  gallery: {
    interior1: '/images/gallery/interior_1.jpg',
    coffee1: '/images/gallery/coffee_1.jpg',
    food1: '/images/gallery/food_1.jpg',
    kitchen1: '/images/gallery/kitchen_1.jpg',
    events1: '/images/gallery/events_1.jpg',
    interior2: '/images/gallery/interior_2.jpg',
    coffee2: '/images/gallery/coffee_2.jpg',
    food2: '/images/gallery/food_2.jpg',
    kitchen2: '/images/gallery/kitchen_2.jpg',
    lifestyle1: '/images/gallery/lifestyle_1.jpg',
    lifestyle2: '/images/gallery/lifestyle_2.jpg',
    food3: '/images/gallery/food_3.jpg',
    story1: '/images/gallery/story_1.jpg',
    story2: '/images/gallery/story_2.jpg',
    story3: '/images/gallery/story_3.jpg',
  },
  about: {
    interior: '/images/gallery/interior_1.jpg',
  }
} as const;
