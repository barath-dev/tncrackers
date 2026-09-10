export interface Product {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  badge?: string;
}

interface ProductSeed {
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  badge?: string;
}

const seedsByCategory: Record<string, ProductSeed[]> = {
  sparklers: [
    {
      name: "10cm Colour Sparkler",
      description: "Compact sparkler with a bright, colourful flame — a starter favourite.",
      price: 60,
      discountPrice: 48,
    },
    {
      name: "15cm Electric Sparkler",
      description: "Crisp white light with a slightly longer burn time.",
      price: 90,
      discountPrice: 72,
    },
    {
      name: "30cm Long Sparkler",
      description: "Extended burn time for longer hand-held displays.",
      price: 160,
      discountPrice: 128,
      badge: "Bestseller",
    },
    {
      name: "Green Fire Sparkler",
      description: "Tinted green flame for a distinct festive glow.",
      price: 140,
      discountPrice: 112,
    },
  ],
  "flower-pots": [
    {
      name: "Classic Flower Pot",
      description: "Steady fountain of golden sparks from a compact base.",
      price: 90,
      discountPrice: 72,
    },
    {
      name: "Twin Colour Flower Pot",
      description: "Two-tone spray that shifts colour mid-burn.",
      price: 180,
      discountPrice: 144,
    },
    {
      name: "Deluxe Ashoka Pot",
      description: "Taller flame with a wider, denser spray of colour.",
      price: 320,
      discountPrice: 256,
      badge: "Popular",
    },
    {
      name: "Jumbo Fountain Pot",
      description: "Our largest ground fountain, built for a longer show.",
      price: 650,
      discountPrice: 520,
    },
  ],
  "ground-spinners": [
    {
      name: "Mini Ground Spinner",
      description: "Small spinning wheel, ideal for younger celebrants.",
      price: 70,
      discountPrice: 56,
    },
    {
      name: "Wire Chakkar",
      description: "Classic wire-mounted spinner with a smooth, even spin.",
      price: 130,
      discountPrice: 104,
    },
    {
      name: "Double Wheel Spinner",
      description: "Two linked wheels for a wider ring of sparks.",
      price: 220,
      discountPrice: 176,
    },
    {
      name: "Whistling Ground Spinner",
      description: "Adds a gentle whistle to the classic spinning display.",
      price: 190,
      discountPrice: 152,
    },
  ],
  "aerial-rockets": [
    {
      name: "Starter Rocket",
      description: "Light aerial burst, a gentle introduction to rockets.",
      price: 60,
      discountPrice: 48,
    },
    {
      name: "Whistling Sky Rocket",
      description: "Climbs with a rising whistle before its aerial burst.",
      price: 140,
      discountPrice: 112,
      badge: "Bestseller",
    },
    {
      name: "Double Report Rocket",
      description: "Two-stage climb ending in a double aerial report.",
      price: 220,
      discountPrice: 176,
    },
    {
      name: "Musical Rocket",
      description: "A melodic tone accompanies the ascent.",
      price: 260,
      discountPrice: 208,
    },
  ],
  "sound-crackers": [
    {
      name: "Junior Sound Cracker",
      description: "Small, friendly report — a good pick for young beginners.",
      price: 35,
      discountPrice: 28,
    },
    {
      name: "Classic Sound Cracker",
      description: "The everyday cracker for a satisfying, familiar snap.",
      price: 70,
      discountPrice: 56,
    },
    {
      name: "Grand Sound Cracker",
      description: "Bigger body for a fuller, rounder report.",
      price: 150,
      discountPrice: 120,
    },
    {
      name: "Deluxe Sound Cracker",
      description: "Our loudest single-sound cracker in this range.",
      price: 260,
      discountPrice: 208,
      badge: "Popular",
    },
  ],
  "sound-bombs": [
    {
      name: "Twin Sound Bomb",
      description: "Two closely-timed reports from a single unit.",
      price: 180,
      discountPrice: 144,
    },
    {
      name: "Classic Bomb",
      description: "A dependable, deep-toned celebration bomb.",
      price: 260,
      discountPrice: 208,
    },
    {
      name: "Heavy Report Bomb",
      description: "Denser build for a heavier, more resonant burst.",
      price: 420,
      discountPrice: 336,
      badge: "Bestseller",
    },
    {
      name: "Signature Bomb",
      description: "Our premium bomb, tuned for maximum depth of sound.",
      price: 700,
      discountPrice: 560,
    },
  ],
  "chain-crackers": [
    {
      name: "50-Wala Chain",
      description: "A short chain of 50 linked crackers — quick and simple.",
      price: 130,
      discountPrice: 104,
    },
    {
      name: "100-Wala Chain",
      description: "A full-minute chain of continuous small bursts.",
      price: 230,
      discountPrice: 184,
    },
    {
      name: "200-Wala Chain",
      description: "Extended chain for a longer, uninterrupted display.",
      price: 420,
      discountPrice: 336,
    },
    {
      name: "500-Wala Chain",
      description: "Our longest chain, built for larger gatherings.",
      price: 950,
      discountPrice: 760,
      badge: "Popular",
    },
  ],
  "electric-crackers": [
    {
      name: "Electric Snap 50s",
      description: "Fifty rapid-fire snaps in a tidy, compact pack.",
      price: 90,
      discountPrice: 72,
    },
    {
      name: "Electric Snap 100s",
      description: "Twice the count for a longer rapid-fire run.",
      price: 170,
      discountPrice: 136,
    },
    {
      name: "Striped Electric Pack",
      description: "A sharper, crisper snap with every burst.",
      price: 150,
      discountPrice: 120,
    },
    {
      name: "Rapid Electric Pack",
      description: "Our fastest-firing electric pack.",
      price: 210,
      discountPrice: 168,
    },
  ],
  "matchbox-crackers": [
    {
      name: "Mini Matchbox Pack",
      description: "A pocket-sized assortment for quick celebrations.",
      price: 90,
      discountPrice: 72,
    },
    {
      name: "Classic Matchbox Pack",
      description: "A balanced mix of small crackers in one neat box.",
      price: 160,
      discountPrice: 128,
    },
    {
      name: "Deluxe Matchbox Set",
      description: "A wider variety, packed into a sturdier box.",
      price: 320,
      discountPrice: 256,
      badge: "Bestseller",
    },
    {
      name: "Premium Matchbox Set",
      description: "Our top matchbox assortment, built for gifting.",
      price: 480,
      discountPrice: 384,
    },
  ],
  "pencil-crackers": [
    {
      name: "Standard Pencil Cracker",
      description: "A slim, ground-standing cracker with a steady spark.",
      price: 200,
      discountPrice: 160,
    },
    {
      name: "Long Burn Pencil",
      description: "A longer body for an extended shower of sparks.",
      price: 320,
      discountPrice: 256,
    },
    {
      name: "Jolly Time Pencil",
      description: "A cheerful, family-favourite pencil cracker.",
      price: 280,
      discountPrice: 224,
      badge: "Popular",
    },
    {
      name: "Colour Burst Pencil",
      description: "Adds a tint of colour to the classic spark shower.",
      price: 340,
      discountPrice: 272,
    },
  ],
  "multi-shot-cakes": [
    {
      name: "12-Shot Cake",
      description: "A compact cake with twelve sequential aerial shots.",
      price: 260,
      discountPrice: 208,
    },
    {
      name: "30-Shot Cake",
      description: "A longer sequence for a fuller mini display.",
      price: 620,
      discountPrice: 496,
    },
    {
      name: "60-Shot Cake",
      description: "Sixty shots in one continuous, hands-free show.",
      price: 1150,
      discountPrice: 920,
      badge: "Bestseller",
    },
    {
      name: "120-Shot Cake",
      description: "Our largest cake — a complete standalone display.",
      price: 2200,
      discountPrice: 1760,
    },
  ],
  "sky-shots": [
    {
      name: "2-inch Sky Shell",
      description: "A modest shell that opens into a golden canopy.",
      price: 130,
      discountPrice: 104,
    },
    {
      name: "3-inch Sky Shell",
      description: "A wider burst with a longer glitter trail.",
      price: 340,
      discountPrice: 272,
    },
    {
      name: "5-inch Sky Shell",
      description: "A tall, dramatic shell for the main event.",
      price: 620,
      discountPrice: 496,
      badge: "Popular",
    },
    {
      name: "8-inch Grand Shell",
      description: "Our largest single shell, reserved for finales.",
      price: 980,
      discountPrice: 784,
    },
  ],
  "colour-sky-shots": [
    {
      name: "Pink Sky Hitter",
      description: "A rising shell that opens in vivid pink.",
      price: 560,
      discountPrice: 448,
    },
    {
      name: "Blue Sky Hitter",
      description: "The same rise, finished in a deep blue bloom.",
      price: 560,
      discountPrice: 448,
    },
    {
      name: "Tri-Colour Sky Burst",
      description: "Three colours layered into a single aerial burst.",
      price: 720,
      discountPrice: 576,
      badge: "Bestseller",
    },
    {
      name: "Rainbow Sky Burst",
      description: "Our most colourful aerial shell, for a signature finale.",
      price: 890,
      discountPrice: 712,
    },
  ],
  "family-combo-packs": [
    {
      name: "Starter Family Pack",
      description: "A light mix for smaller family gatherings.",
      price: 900,
      discountPrice: 720,
    },
    {
      name: "Classic Family Pack",
      description: "Our most balanced combo across sound, light, and sky.",
      price: 1600,
      discountPrice: 1280,
      badge: "Bestseller",
    },
    {
      name: "Grand Family Pack",
      description: "A bigger assortment for an evening-long celebration.",
      price: 2600,
      discountPrice: 2080,
    },
    {
      name: "Ultimate Family Pack",
      description: "Our most complete family combo, top to bottom.",
      price: 4200,
      discountPrice: 3360,
    },
  ],
  "gift-combo-boxes": [
    {
      name: "Festive Gift Box — Small",
      description: "A neatly wrapped starter assortment, ready to gift.",
      price: 750,
      discountPrice: 600,
    },
    {
      name: "Festive Gift Box — Medium",
      description: "A fuller assortment in a decorated gift box.",
      price: 1400,
      discountPrice: 1120,
      badge: "Popular",
    },
    {
      name: "Festive Gift Box — Large",
      description: "Our most generous gift box, for larger celebrations.",
      price: 2400,
      discountPrice: 1920,
    },
    {
      name: "Premium Celebration Box",
      description: "A curated, premium selection in a keepsake box.",
      price: 3800,
      discountPrice: 3040,
      badge: "Bestseller",
    },
  ],
};

export const products: Product[] = Object.entries(seedsByCategory).flatMap(
  ([categorySlug, seeds]) =>
    seeds.map((seed, index) => ({
      id: `${categorySlug}-${index + 1}`,
      categorySlug,
      ...seed,
    }))
);

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return products.filter((product) => product.badge === "Bestseller").slice(0, limit);
}
