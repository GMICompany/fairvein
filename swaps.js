// Exact product swap guide database
// Format: { brand, product, category, swaps: [{ brand, product, why, price }] }

const swapDatabase = [
    // ============================================
    // MAC COSMETICS → INDIE SWAPS
    // ============================================
    {
        brand: "MAC Cosmetics",
        product: "Ruby Woo",
        category: "Lipstick",
        description: "Iconic matte red lipstick",
        price: "$21",
        swaps: [
            { brand: "Fenty Beauty", product: "Stunna Lip Paint in Uncensored", why: "Same blue-red matte, 12hr wear, Rihanna-owned", price: "$29" },
            { brand: "Rare Beauty", product: "Kind Words Matte Lipstick in Inspire", why: "True red matte, lightweight feel, Selena Gomez-owned", price: "$20" },
            { brand: "Tower 28", product: "ShineOn Lip Jelly in XOXO", why: "Sheer red, clean ingredients, woman-owned", price: "$15" },
            { brand: "Mented Cosmetics", product: "Semi-Matte in Red Carpet Red", why: "Perfect red for all skin tones, Black woman-owned", price: "$18" }
        ]
    },
    {
        brand: "MAC Cosmetics",
        product: "Studio Fix Fluid SPF 15",
        category: "Foundation",
        description: "Full-coverage matte foundation",
        price: "$40",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "50 shades, oil-free, same matte finish", price: "$42" },
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Buildable coverage, 48 shades, feels like skin", price: "$29" },
            { brand: "ILIA", product: "True Skin Serum Foundation", why: "Clean beauty, skin-like finish, SPF included", price: "$54" }
        ]
    },
    {
        brand: "MAC Cosmetics",
        product: "Prep + Prime Fix+",
        category: "Setting Spray",
        description: "Hydrating setting spray",
        price: "$33",
        swaps: [
            { brand: "Milk Makeup", product: "Hydro Grip Setting Spray", why: "Blue agave + hemp-derived cannabis seed extract, grips makeup all day", price: "$36" },
            { brand: "Tower 28", product: "SOS Daily Barrier Recovery Spray", why: "Hypochlorous acid, calms skin + sets makeup", price: "$28" },
            { brand: "e.l.f.", product: "Power Grip Dewy Setting Spray", why: "Nearly identical results at fraction of price, indie-adjacent", price: "$10" }
        ]
    },
    {
        brand: "MAC Cosmetics",
        product: "Powder Kiss Lipstick",
        category: "Lipstick",
        description: "Weightless matte lipstick",
        price: "$25",
        swaps: [
            { brand: "Rare Beauty", product: "Kind Words Matte Lipstick", why: "Same weightless matte formula, 10 shades", price: "$20" },
            { brand: "Kosas", product: "Weightless Lip Color", why: "Hydrating matte, clean beauty, woman-founded", price: "$26" },
            { brand: "Mented Cosmetics", product: "Semi-Matte Lipstick", why: "Designed for diverse skin tones, pigmented, smooth", price: "$18" }
        ]
    },

    // ============================================
    // CLINIQUE → INDIE SWAPS
    // ============================================
    {
        brand: "Clinique",
        product: "Dramatically Different Moisturizing Lotion+",
        category: "Moisturizer",
        description: "Lightweight daily moisturizer",
        price: "$34",
        swaps: [
            { brand: "The Ordinary", product: "Natural Moisturizing Factors + HA", why: "Same lightweight hydration, science-backed, $6 vs $34", price: "$6" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Lightweight, clean, Target-exclusive, great for oily skin", price: "$15" },
            { brand: "Good Molecules", product: "Silicone-Free Priming Moisturizer", why: "Effective, affordable, transparent formulations", price: "$8" }
        ]
    },
    {
        brand: "Clinique",
        product: "Take The Day Off Cleansing Balm",
        category: "Cleanser",
        description: "Makeup-removing cleansing balm",
        price: "$38",
        swaps: [
            { brand: "Banila Co", product: "Clean It Zero", why: "OG K-beauty cleansing balm, removes everything, gentle", price: "$19" },
            { brand: "Good Molecules", product: "Instant Cleansing Balm", why: "Same melting texture, fragrance-free, half the price", price: "$12" },
            { brand: "Versed", product: "Day Dissolve Cleansing Balm", why: "Clean ingredients, melts makeup, affordable", price: "$18" }
        ]
    },
    {
        brand: "Clinique",
        product: "Almost Lipstick in Black Honey",
        category: "Lipstick",
        description: "Cult-favorite sheer berry lip color",
        price: "$25",
        swaps: [
            { brand: "Tower 28", product: "ShineOn Lip Jelly in Cashew", why: "Similar sheer berry tone, clean, woman-owned", price: "$15" },
            { brand: "Burt's Bees", product: "Tinted Lip Balm in Red Dahlia", why: "Sheer berry tint, natural ingredients, iconic", price: "$8" },
            { brand: "Honest Beauty", product: "Tinted Lip Balm in Fruit Punch", why: "Sheer color, Jessica Alba-founded, EWG verified", price: "$10" }
        ]
    },
    {
        brand: "Clinique",
        product: "Moisture Surge 100H",
        category: "Moisturizer",
        description: "Gel-cream hydrator",
        price: "$43",
        swaps: [
            { brand: "Naturium", product: "Multi-Peptide Moisturizer", why: "Peptide-rich gel cream, science-backed, great texture", price: "$22" },
            { brand: "The Ordinary", product: "Hyaluronic Acid 2% + B5", why: "Pure hydration serum, pairs with any moisturizer", price: "$9" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Gel texture, lightweight, affordable", price: "$15" }
        ]
    },

    // ============================================
    // ESTÉE LAUDER → INDIE SWAPS
    // ============================================
    {
        brand: "Estée Lauder",
        product: "Double Wear Stay-in-Place Foundation",
        category: "Foundation",
        description: "24hr full-coverage foundation",
        price: "$48",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "Same full coverage + matte finish, 50 shades", price: "$42" },
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Buildable to full coverage, lighter feel, 48 shades", price: "$29" },
            { brand: "Juvia's Place", product: "I Am Magic Foundation", why: "Full coverage, 42 shades, Black-owned brand", price: "$26" }
        ]
    },
    {
        brand: "Estée Lauder",
        product: "Advanced Night Repair Serum",
        category: "Serum",
        description: "Anti-aging repair serum",
        price: "$82",
        swaps: [
            { brand: "The Ordinary", product: "Buffet", why: "Multi-peptide serum, targets same concerns, $17 vs $82", price: "$17" },
            { brand: "Versed", product: "Press Restart Gentle Retinol Serum", why: "Gentle night repair, clean, affordable", price: "$22" },
            { brand: "Naturium", product: "Retinol Complex Serum", why: "Encapsulated retinol, research-backed, no irritation", price: "$20" }
        ]
    },

    // ============================================
    // LA MER → INDIE SWAPS (same parent: EL)
    // ============================================
    {
        brand: "La Mer",
        product: "Crème de la Mer Moisturizer",
        category: "Moisturizer",
        description: "Luxury moisturizing cream",
        price: "$200",
        swaps: [
            { brand: "Weleda", product: "Skin Food Original", why: "Cult-favorite rich cream, plant-based, fraction of price", price: "$14" },
            { brand: "Naturium", product: "Bio-Lipid Recovery Cream", why: "Ceramide-rich barrier repair, science-backed", price: "$22" },
            { brand: "The Ordinary", product: "Natural Moisturizing Factors + PhytoCeramides", why: "Barrier repair, similar ingredients list", price: "$10" }
        ]
    },

    // ============================================
    // TOO FACED → INDIE SWAPS (same parent: EL)
    // ============================================
    {
        brand: "Too Faced",
        product: "Better Than Sex Mascara",
        category: "Mascara",
        description: "Volumizing mascara",
        price: "$29",
        swaps: [
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Tubing formula, won't smudge, vegan + cruelty-free", price: "$27" },
            { brand: "Tower 28", product: "MakeWaves Mascara", why: "Clean, lengthening, sensitive-eye safe", price: "$20" },
            { brand: "Ilia", product: "Limitless Lash Mascara", why: "Clean beauty, volumizing, nourishes lashes", price: "$28" }
        ]
    },

    // ============================================
    // L'ORÉAL BRANDS → INDIE SWAPS
    // ============================================
    {
        brand: "NYX Professional Makeup",
        product: "Butter Gloss",
        category: "Lip Gloss",
        description: "Buttery smooth lip gloss",
        price: "$9",
        swaps: [
            { brand: "Tower 28", product: "ShineOn Lip Jelly", why: "Clean, non-sticky, great colors, woman-owned", price: "$15" },
            { brand: "Kosas", product: "Wet Lip Oil Gloss", why: "Hydrating, trendy shades, clean beauty", price: "$22" },
            { brand: "Honest Beauty", product: "Gloss-C Lip Gloss", why: "Hyaluronic acid, sheer shine, affordable", price: "$12" }
        ]
    },
    {
        brand: "Maybelline",
        product: "Lash Sensational Mascara",
        category: "Mascara",
        description: "Fan-out lash mascara",
        price: "$12",
        swaps: [
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Tubing formula, cruelty-free, gives to women leaving DV", price: "$27" },
            { brand: "e.l.f.", product: "Big Mood Mascara", why: "Volumizing, vegan, indie-priced", price: "$7" },
            { brand: "Honest Beauty", product: "Extreme Length Mascara + Lash Primer", why: "Jojoba + biotin, clean, lengthening", price: "$18" }
        ]
    },
    {
        brand: "Lancôme",
        product: "Teint Idole Ultra Wear Foundation",
        category: "Foundation",
        description: "Long-wear full coverage foundation",
        price: "$52",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "Same matte long-wear, better shade range", price: "$42" },
            { brand: "Juvia's Place", product: "I Am Magic Foundation", why: "Full coverage, incredible shade range, Black-owned", price: "$26" },
            { brand: "Danessa Myricks", product: "Yummy Skin Blurring Balm Powder", why: "Innovative formula, BIPOC-owned, blurring finish", price: "$36" }
        ]
    },

    // ============================================
    // UNILEVER → INDIE SWAPS
    // ============================================
    {
        brand: "Dove",
        product: "Beauty Bar",
        category: "Body Care",
        description: "Moisturizing cleansing bar",
        price: "$8",
        swaps: [
            { brand: "Dr. Bronner's", product: "Pure-Castile Bar Soap", why: "Organic, fair trade, family-owned since 1948", price: "$5" },
            { brand: "Ethique", product: "Solid Body Wash Bar", why: "Zero-waste, vegan, plastic-free, B Corp", price: "$16" },
            { brand: "Meow Meow Tweet", product: "Bar Soap", why: "Small-batch, vegan, plastic-free, women-owned", price: "$9" }
        ]
    },
    {
        brand: "TRESemmé",
        product: "Keratin Smooth Shampoo",
        category: "Hair Care",
        description: "Smoothing shampoo",
        price: "$7",
        swaps: [
            { brand: "Briogeo", product: "Don't Despair, Repair! Shampoo", why: "Clean, effective, BIPOC woman-founded", price: "$28" },
            { brand: "Ethique", product: "Heali Kiwi Shampoo Bar", why: "Zero-waste, sulfate-free, plastic-free", price: "$16" },
            { brand: "Acure", product: "Curiously Clarifying Shampoo", why: "100% vegan, performance-driven, affordable", price: "$10" }
        ]
    },

    // ============================================
    // COTY → INDIE SWAPS
    // ============================================
    {
        brand: "CoverGirl",
        product: "Lash Blast Volume Mascara",
        category: "Mascara",
        description: "Volumizing mascara",
        price: "$12",
        swaps: [
            { brand: "e.l.f.", product: "Lash 'N Roll Mascara", why: "Curling + volumizing, vegan, cruelty-free", price: "$7" },
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Premium tubing formula, social impact brand", price: "$27" },
            { brand: "W3LL PEOPLE", product: "Expressionist Bio Extreme Mascara", why: "EWG verified, clean, lengthening", price: "$22" }
        ]
    },
    {
        brand: "Rimmel",
        product: "Stay Matte Pressed Powder",
        category: "Powder",
        description: "Mattifying pressed powder",
        price: "$6",
        swaps: [
            { brand: "e.l.f.", product: "Halo Glow Setting Powder", why: "Smoothing, vegan, cruelty-free, affordable", price: "$9" },
            { brand: "Kosas", product: "Cloud Set Baked Setting Powder", why: "Clean, talc-free, skin-like finish", price: "$34" },
            { brand: "Honest Beauty", product: "Invisible Blurring Powder", why: "Mattifying, clean ingredients, affordable", price: "$15" }
        ]
    }
];

// Helper: find swaps by brand name
function findSwapsByBrand(brandName) {
    return swapDatabase.filter(s => s.brand.toLowerCase() === brandName.toLowerCase());
}

// Helper: find swap by product name (fuzzy)
function findSwapByProduct(query) {
    const q = query.toLowerCase();
    return swapDatabase.find(s => 
        s.product.toLowerCase().includes(q) ||
        (s.brand + ' ' + s.product).toLowerCase().includes(q)
    );
}
