import { getPool, runQuery } from "./database.js";

const IMG = (seed) => `https://picsum.photos/seed/${seed}/800/1000`;

const perfumeProducts = [
  { id: "p1", name: "Royal Oud Elite", slug: "royal-oud-elite", category: "Eau de Parfum", price: 3499, originalPrice: 4299,
    description: "A majestic blend of rare agarwood and warm spices. Opens with saffron and bergamot, revealing a heart of rose and cedar before settling into a rich base of oud, amber, and musk.",
    notes: "Saffron, Bergamot, Rose, Cedar, Oud, Amber, Musk", topNotes: "Saffron, Bergamot", middleNotes: "Rose, Cedarwood", baseNotes: "Oud, Amber, Musk",
    howToUse: "Spray on pulse points — wrists, neck, and behind ears.",
    images: JSON.stringify([IMG("perfume-oud-a"), IMG("perfume-oud-b")]), sizes: JSON.stringify(["30ml", "50ml", "100ml"]),
    gender: "Men", stock: 25, rating: 4.9, reviewCount: 187, badge: "Best Seller", status: "active" },
  { id: "p2", name: "Velvet Rose Noir", slug: "velvet-rose-noir", category: "Eau de Parfum", price: 2999, originalPrice: 3599,
    description: "A dark, seductive rose fragrance wrapped in velvet. Bulgarian rose absolute meets blackcurrant and violet leaf.",
    notes: "Bulgarian Rose, Blackcurrant, Violet Leaf, Patchouli, Vanilla, Dark Musk", topNotes: "Blackcurrant, Violet Leaf", middleNotes: "Bulgarian Rose, Iris", baseNotes: "Patchouli, Vanilla, Dark Musk",
    howToUse: "Spray on pulse points. Ideal for romantic evenings.",
    images: JSON.stringify([IMG("perfume-rose-a"), IMG("perfume-rose-b")]), sizes: JSON.stringify(["30ml", "50ml", "100ml"]),
    gender: "Women", stock: 30, rating: 4.8, reviewCount: 156, badge: "Best Seller", status: "active" },
  { id: "p3", name: "Amber & Sandalwood", slug: "amber-sandalwood", category: "Eau de Toilette", price: 2199,
    description: "A warm, comforting embrace of golden amber and creamy sandalwood with hints of cardamom and orange blossom.",
    notes: "Cardamom, Orange Blossom, Amber, Sandalwood, Tonka Bean", topNotes: "Cardamom, Bergamot", middleNotes: "Orange Blossom, Jasmine", baseNotes: "Amber, Sandalwood, Tonka Bean",
    howToUse: "Apply to pulse points and warm skin.", images: JSON.stringify([IMG("perfume-amber-a"), IMG("perfume-amber-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Unisex", stock: 40, rating: 4.7, reviewCount: 203, badge: "New", status: "active" },
  { id: "p4", name: "Citrus Burst", slug: "citrus-burst", category: "Eau de Toilette", price: 1799, originalPrice: 2199,
    description: "An invigorating explosion of Mediterranean citrus with bergamot, lemon, and grapefruit.", notes: "Bergamot, Lemon, Grapefruit, Rosemary, White Musk",
    topNotes: "Bergamot, Lemon, Grapefruit", middleNotes: "Rosemary, Lavender", baseNotes: "White Musk, Cedarwood",
    howToUse: "Spray liberally on chest and neck.", images: JSON.stringify([IMG("perfume-citrus-a"), IMG("perfume-citrus-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Unisex", stock: 50, rating: 4.6, reviewCount: 98, badge: "Featured", status: "active" },
  { id: "p5", name: "Midnight Oud", slug: "midnight-oud", category: "Attar", price: 4499,
    description: "A concentrated attar of the finest Cambodian oud. Deep, smoky, and profoundly complex.", notes: "Cambodian Oud, Leather, Spice, Dark Honey, Labdanum",
    topNotes: "Spice, Saffron", middleNotes: "Leather, Labdanum", baseNotes: "Cambodian Oud, Dark Honey",
    howToUse: "Apply a single drop to pulse points.", images: JSON.stringify([IMG("perfume-midnight-a"), IMG("perfume-midnight-b")]),
    sizes: JSON.stringify(["6ml", "12ml"]), gender: "Men", stock: 10, rating: 4.9, reviewCount: 76, badge: "Best Seller", status: "active" },
  { id: "p6", name: "White Jasmine & Tea", slug: "white-jasmine-tea", category: "Eau de Parfum", price: 2599,
    description: "An elegant, airy fragrance capturing the serenity of a jasmine garden at dawn.", notes: "White Tea, Jasmine Sambac, Pear, Soft Musk, Lily of the Valley",
    topNotes: "White Tea, Pear", middleNotes: "Jasmine Sambac, Lily of the Valley", baseNotes: "Soft Musk, Sandalwood",
    howToUse: "Spray on wrists and neck.", images: JSON.stringify([IMG("perfume-jasmine-a"), IMG("perfume-jasmine-b")]),
    sizes: JSON.stringify(["30ml", "50ml", "100ml"]), gender: "Women", stock: 35, rating: 4.7, reviewCount: 142, badge: "New", status: "active" },
  { id: "p7", name: "Tobacco & Vanilla", slug: "tobacco-vanilla", category: "Eau de Parfum", price: 3199, originalPrice: 3799,
    description: "A rich, intoxicating blend of sweet Virginia tobacco and Madagascar vanilla.", notes: "Tobacco, Vanilla, Cinnamon, Dried Fruits, Benzoin, Leather",
    topNotes: "Dried Fruits, Cinnamon", middleNotes: "Tobacco, Benzoin", baseNotes: "Madagascar Vanilla, Leather",
    howToUse: "Apply to pulse points.", images: JSON.stringify([IMG("perfume-tobacco-a"), IMG("perfume-tobacco-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Men", stock: 20, rating: 4.8, reviewCount: 131, badge: "Featured", status: "active" },
  { id: "p8", name: "Ocean Mist", slug: "ocean-mist", category: "Eau de Toilette", price: 1599,
    description: "A fresh, aquatic fragrance with sea salt, ozone, and crisp apple.", notes: "Sea Salt, Ozone, Green Apple, Driftwood, White Amber, Moss",
    topNotes: "Sea Salt, Ozone, Green Apple", middleNotes: "Driftwood, Lavender", baseNotes: "White Amber, Moss, Musk",
    howToUse: "Spray generously.", images: JSON.stringify([IMG("perfume-ocean-a"), IMG("perfume-ocean-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Men", stock: 45, rating: 4.5, reviewCount: 89, badge: "New", status: "active" },
  { id: "p9", name: "Saffron & Leather", slug: "saffron-leather", category: "Attar", price: 3999,
    description: "A luxurious attar blending precious saffron with supple Italian leather.", notes: "Saffron, Italian Leather, Raspberry, Labdanum, Cedar",
    topNotes: "Saffron, Raspberry", middleNotes: "Italian Leather, Labdanum", baseNotes: "Cedar, Musk",
    howToUse: "Apply a small amount to pulse points.", images: JSON.stringify([IMG("perfume-saffron-a"), IMG("perfume-saffron-b")]),
    sizes: JSON.stringify(["6ml", "12ml"]), gender: "Unisex", stock: 15, rating: 4.8, reviewCount: 64, badge: "Featured", status: "active" },
  { id: "p10", name: "Lavender Dreams", slug: "lavender-dreams", category: "Eau de Cologne", price: 1299,
    description: "A calming, aromatic cologne featuring French lavender and soft chamomile.", notes: "French Lavender, Chamomile, Honey, Tonka Bean, Cotton Musk",
    topNotes: "French Lavender, Chamomile", middleNotes: "Honey, Clary Sage", baseNotes: "Tonka Bean, Cotton Musk",
    howToUse: "Spray on pillow, linens, or pulse points.", images: JSON.stringify([IMG("perfume-lavender-a"), IMG("perfume-lavender-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Unisex", stock: 55, rating: 4.6, reviewCount: 112, badge: "New", status: "active" },
  { id: "p11", name: "Black Orchid Gold", slug: "black-orchid-gold", category: "Eau de Parfum", price: 3799,
    description: "A decadent, dark floral fragrance with black orchid, truffle, and patchouli.", notes: "Black Orchid, Black Truffle, Patchouli, Incense, Amber, Sandalwood",
    topNotes: "Black Truffle, Ylang-Ylang", middleNotes: "Black Orchid, Lotus Wood", baseNotes: "Incense, Amber, Patchouli, Sandalwood",
    howToUse: "Apply to pulse points.", images: JSON.stringify([IMG("perfume-orchid-a"), IMG("perfume-orchid-b")]),
    sizes: JSON.stringify(["30ml", "50ml", "100ml"]), gender: "Women", stock: 18, rating: 4.9, reviewCount: 94, badge: "Best Seller", status: "active" },
  { id: "p12", name: "Musk & Spice", slug: "musk-spice", category: "Eau de Toilette", price: 1999,
    description: "A warm, sensual blend of clean musk and exotic spices with cinnamon and clove.", notes: "Clean Musk, Cinnamon, Clove, Sandalwood, Amber, Orange",
    topNotes: "Orange, Cinnamon", middleNotes: "Clove, Nutmeg", baseNotes: "Clean Musk, Sandalwood, Amber",
    howToUse: "Spray on chest and neck.", images: JSON.stringify([IMG("perfume-musk-a"), IMG("perfume-musk-b")]),
    sizes: JSON.stringify(["50ml", "100ml"]), gender: "Unisex", stock: 38, rating: 4.7, reviewCount: 78, badge: "Featured", status: "active" },
];

async function seed() {
  const pool = await getPool();

  // Check if already seeded
  const [existing] = await pool.execute("SELECT COUNT(*) as count FROM products");
  if (existing[0].count > 0) {
    console.log("Database already seeded. Found", existing[0].count, "products.");
    process.exit(0);
  }

  console.log("Seeding database with perfume products...");

  for (const p of perfumeProducts) {
    await pool.execute(
      `INSERT INTO products (id, name, slug, category, price, original_price, description, notes, top_notes, middle_notes, base_notes, how_to_use, images, sizes, gender, stock, rating, review_count, badge, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [p.id, p.name, p.slug, p.category, p.price, p.originalPrice || null, p.description, p.notes, p.topNotes, p.middleNotes, p.baseNotes, p.howToUse, p.images, p.sizes, p.gender, p.stock, p.rating, p.reviewCount, p.badge || null, p.status]
    );
  }

  console.log(`✅ Seeded ${perfumeProducts.length} products successfully!`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});