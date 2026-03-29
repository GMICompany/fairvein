// Exact product swap guide database
// Format: { brand, product, category, description, price, swaps: [{ brand, product, why, price }] }

const swapDatabase = [
    // ============================================
    // MAC COSMETICS
    // ============================================
    { brand: "MAC Cosmetics", product: "Ruby Woo", category: "Lipstick", description: "Iconic matte red lipstick", price: "$21",
        swaps: [
            { brand: "Fenty Beauty", product: "Stunna Lip Paint in Uncensored", why: "Same blue-red matte, 12hr wear", price: "$29" },
            { brand: "Rare Beauty", product: "Kind Words Matte Lipstick in Inspire", why: "True red matte, lightweight", price: "$20" },
            { brand: "Mented Cosmetics", product: "Semi-Matte in Red Carpet Red", why: "Perfect red for all tones, Black woman-owned", price: "$18" }
        ]},
    { brand: "MAC Cosmetics", product: "Studio Fix Fluid SPF 15", category: "Foundation", description: "Full-coverage matte foundation", price: "$40",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "50 shades, oil-free, same matte finish", price: "$42" },
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Buildable coverage, 48 shades", price: "$29" },
            { brand: "ILIA", product: "True Skin Serum Foundation", why: "Clean beauty, skin-like finish", price: "$54" }
        ]},
    { brand: "MAC Cosmetics", product: "Prep + Prime Fix+", category: "Setting Spray", description: "Hydrating setting spray", price: "$33",
        swaps: [
            { brand: "Milk Makeup", product: "Hydro Grip Setting Spray", why: "Blue agave + hemp, grips makeup all day", price: "$36" },
            { brand: "e.l.f. Cosmetics", product: "Power Grip Dewy Setting Spray", why: "Nearly identical, fraction of price", price: "$10" },
            { brand: "Tower 28", product: "SOS Daily Barrier Recovery Spray", why: "Calms skin + sets makeup", price: "$28" }
        ]},
    { brand: "MAC Cosmetics", product: "Powder Kiss Lipstick", category: "Lipstick", description: "Weightless matte lipstick", price: "$25",
        swaps: [
            { brand: "Rare Beauty", product: "Kind Words Matte Lipstick", why: "Same weightless matte feel", price: "$20" },
            { brand: "Kosas", product: "Weightless Lip Color", why: "Hydrating matte, clean beauty", price: "$26" },
            { brand: "Mented Cosmetics", product: "Semi-Matte Lipstick", why: "Designed for diverse skin tones", price: "$18" }
        ]},
    { brand: "MAC Cosmetics", product: "Strobe Cream", category: "Primer", description: "Illuminating moisturizer/primer", price: "$39",
        swaps: [
            { brand: "Glossier", product: "Futuredew Oil Serum Hybrid", why: "Same dewy glow, skincare-meets-makeup", price: "$26" },
            { brand: "Milk Makeup", product: "Luminous Blur Stick", why: "Portable, blurring + glowing", price: "$36" },
            { brand: "ILIA", product: "C Beyond Triple Serum SPF 40", why: "Glow + SPF + vitamin C", price: "$52" }
        ]},

    // ============================================
    // CLINIQUE
    // ============================================
    { brand: "Clinique", product: "Dramatically Different Moisturizing Lotion+", category: "Moisturizer", description: "Lightweight daily moisturizer", price: "$34",
        swaps: [
            { brand: "The Ordinary", product: "Natural Moisturizing Factors + HA", why: "Same lightweight hydration, $6 vs $34", price: "$6" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Lightweight, clean, great for oily skin", price: "$15" },
            { brand: "Good Molecules", product: "Silicone-Free Priming Moisturizer", why: "Effective, affordable, transparent", price: "$8" }
        ]},
    { brand: "Clinique", product: "Take The Day Off Cleansing Balm", category: "Cleanser", description: "Makeup-removing cleansing balm", price: "$38",
        swaps: [
            { brand: "Banila Co", product: "Clean It Zero", why: "OG K-beauty cleansing balm, removes everything", price: "$19" },
            { brand: "Good Molecules", product: "Instant Cleansing Balm", why: "Same melting texture, fragrance-free", price: "$12" },
            { brand: "Heimish", product: "All Clean Balm", why: "K-beauty favorite, gentle on sensitive skin", price: "$14" }
        ]},
    { brand: "Clinique", product: "Almost Lipstick in Black Honey", category: "Lipstick", description: "Cult-favorite sheer berry lip color", price: "$25",
        swaps: [
            { brand: "Tower 28", product: "ShineOn Lip Jelly in Cashew", why: "Similar sheer berry tone, clean", price: "$15" },
            { brand: "Burt's Bees", product: "Tinted Lip Balm in Red Dahlia", why: "Sheer berry tint, natural", price: "$8" },
            { brand: "Honest Beauty", product: "Tinted Lip Balm in Fruit Punch", why: "Sheer color, EWG verified", price: "$10" }
        ]},
    { brand: "Clinique", product: "Moisture Surge 100H", category: "Moisturizer", description: "Gel-cream hydrator", price: "$43",
        swaps: [
            { brand: "Naturium", product: "Multi-Peptide Moisturizer", why: "Peptide-rich gel cream, science-backed", price: "$22" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Gel texture, lightweight, affordable", price: "$15" },
            { brand: "COSRX", product: "Oil-Free Ultra-Moisturizing Lotion", why: "Birch sap, lightweight, K-beauty classic", price: "$15" }
        ]},
    { brand: "Clinique", product: "Even Better Clinical Serum", category: "Serum", description: "Dark spot corrector", price: "$55",
        swaps: [
            { brand: "Good Molecules", product: "Discoloration Correcting Serum", why: "Tranexamic acid, same results, $6 vs $55", price: "$6" },
            { brand: "Naturium", product: "Tranexamic Acid Topical Acid 5%", why: "Same active ingredient, research-backed", price: "$16" },
            { brand: "The Ordinary", product: "Alpha Arbutin 2% + HA", why: "Brightening, gentle, science-backed", price: "$10" }
        ]},

    // ============================================
    // ESTÉE LAUDER
    // ============================================
    { brand: "Estée Lauder", product: "Double Wear Stay-in-Place Foundation", category: "Foundation", description: "24hr full-coverage foundation", price: "$48",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "Same full coverage + matte finish, 50 shades", price: "$42" },
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Buildable to full coverage, 48 shades", price: "$29" },
            { brand: "Juvia's Place", product: "I Am Magic Foundation", why: "Full coverage, 42 shades, Black-owned", price: "$26" }
        ]},
    { brand: "Estée Lauder", product: "Advanced Night Repair Serum", category: "Serum", description: "Anti-aging repair serum", price: "$82",
        swaps: [
            { brand: "The Ordinary", product: "Buffet", why: "Multi-peptide serum, same concerns, $17 vs $82", price: "$17" },
            { brand: "Naturium", product: "Retinol Complex Serum", why: "Encapsulated retinol, research-backed", price: "$20" },
            { brand: "COSRX", product: "Advanced Snail 96 Mucin Power Essence", why: "Cult repair essence, K-beauty classic", price: "$18" }
        ]},

    // ============================================
    // LA MER
    // ============================================
    { brand: "La Mer", product: "Crème de la Mer Moisturizer", category: "Moisturizer", description: "Luxury moisturizing cream", price: "$200",
        swaps: [
            { brand: "Weleda", product: "Skin Food Original", why: "Cult-favorite rich cream, fraction of price", price: "$14" },
            { brand: "Naturium", product: "Bio-Lipid Recovery Cream", why: "Ceramide-rich barrier repair, science-backed", price: "$22" },
            { brand: "The Ordinary", product: "Natural Moisturizing Factors + PhytoCeramides", why: "Barrier repair, similar ingredients", price: "$10" }
        ]},

    // ============================================
    // TOO FACED
    // ============================================
    { brand: "Too Faced", product: "Better Than Sex Mascara", category: "Mascara", description: "Volumizing mascara", price: "$29",
        swaps: [
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Tubing formula, won't smudge, cruelty-free", price: "$27" },
            { brand: "Tower 28", product: "MakeWaves Mascara", why: "Clean, lengthening, sensitive-eye safe", price: "$20" },
            { brand: "ILIA", product: "Limitless Lash Mascara", why: "Clean beauty, volumizing, nourishes lashes", price: "$28" }
        ]},
    { brand: "Too Faced", product: "Born This Way Foundation", category: "Foundation", description: "Medium-to-full coverage foundation", price: "$44",
        swaps: [
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Same natural finish, 48 shades", price: "$29" },
            { brand: "Kosas", product: "Revealer Skin-Improving Foundation", why: "Skincare-infused, natural finish", price: "$42" },
            { brand: "ILIA", product: "Super Serum Skin Tint SPF 40", why: "Light coverage with SPF, skincare hybrid", price: "$48" }
        ]},

    // ============================================
    // NYX (L'Oréal)
    // ============================================
    { brand: "NYX", product: "Butter Gloss", category: "Lip Gloss", description: "Buttery smooth lip gloss", price: "$9",
        swaps: [
            { brand: "Tower 28", product: "ShineOn Lip Jelly", why: "Clean, non-sticky, woman-owned", price: "$15" },
            { brand: "Kosas", product: "Wet Lip Oil Gloss", why: "Hydrating, trendy shades, clean beauty", price: "$22" },
            { brand: "Honest Beauty", product: "Gloss-C Lip Gloss", why: "Hyaluronic acid, sheer shine", price: "$12" }
        ]},
    { brand: "NYX", product: "Lip Liner", category: "Lip Liner", description: "Slim pencil lip liner", price: "$5",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "No Budge Retractable Liner", why: "Long-wearing, affordable, vegan", price: "$4" },
            { brand: "Rare Beauty", product: "Kind Words Lip Liner", why: "Creamy, easy to apply", price: "$15" },
            { brand: "Mented Cosmetics", product: "Lip Liner", why: "Inclusive shades, Black woman-owned", price: "$12" }
        ]},
    { brand: "NYX", product: "Epic Ink Liner", category: "Eyeliner", description: "Waterproof liquid eyeliner", price: "$10",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Intense Ink Eyeliner", why: "Same precision tip, vegan, half the price", price: "$5" },
            { brand: "Thrive Causemetics", product: "Infinity Waterproof Eyeliner", why: "Long-wear, cruelty-free", price: "$22" },
            { brand: "Honest Beauty", product: "Liquid Eyeliner", why: "Clean beauty, gentle formula", price: "$12" }
        ]},

    // ============================================
    // MAYBELLINE (L'Oréal)
    // ============================================
    { brand: "Maybelline", product: "Lash Sensational Mascara", category: "Mascara", description: "Fan-out lash mascara", price: "$12",
        swaps: [
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Tubing formula, social impact brand", price: "$27" },
            { brand: "e.l.f. Cosmetics", product: "Big Mood Mascara", why: "Volumizing, vegan, indie-priced", price: "$7" },
            { brand: "Honest Beauty", product: "Extreme Length Mascara", why: "Jojoba + biotin, clean, lengthening", price: "$18" }
        ]},
    { brand: "Maybelline", product: "Fit Me Matte Foundation", category: "Foundation", description: "Matte + poreless foundation", price: "$10",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Flawless Finish Foundation", why: "Similar matte finish, vegan", price: "$6" },
            { brand: "Juvia's Place", product: "I Am Magic Foundation", why: "Better shade range, full coverage", price: "$26" },
            { brand: "Rare Beauty", product: "Liquid Touch Weightless Foundation", why: "Premium finish, buildable", price: "$29" }
        ]},
    { brand: "Maybelline", product: "Instant Age Rewind Concealer", category: "Concealer", description: "Multi-use concealer", price: "$13",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Hydrating Camo Concealer", why: "Full coverage, hydrating, $7 vs $13", price: "$7" },
            { brand: "Rare Beauty", product: "Liquid Touch Brightening Concealer", why: "Brightening, lightweight, 48 shades", price: "$22" },
            { brand: "Kosas", product: "Revealer Super Creamy Concealer", why: "Skincare benefits, caffeine + peptides", price: "$28" }
        ]},
    { brand: "Maybelline", product: "SuperStay Matte Ink", category: "Lipstick", description: "16hr liquid lipstick", price: "$12",
        swaps: [
            { brand: "Fenty Beauty", product: "Stunna Lip Paint", why: "Same long-wear matte, 12hr+", price: "$29" },
            { brand: "Mented Cosmetics", product: "Semi-Matte Lipstick", why: "Comfortable matte, diverse shades", price: "$18" },
            { brand: "e.l.f. Cosmetics", product: "Liquid Matte Lipstick", why: "Long-lasting matte, vegan, $8", price: "$8" }
        ]},

    // ============================================
    // LANCÔME (L'Oréal)
    // ============================================
    { brand: "Lancôme", product: "Teint Idole Ultra Wear Foundation", category: "Foundation", description: "Long-wear full coverage", price: "$52",
        swaps: [
            { brand: "Fenty Beauty", product: "Pro Filt'r Soft Matte Foundation", why: "Same matte long-wear, better shade range", price: "$42" },
            { brand: "Juvia's Place", product: "I Am Magic Foundation", why: "Full coverage, incredible shades, Black-owned", price: "$26" },
            { brand: "Danessa Myricks", product: "Yummy Skin Blurring Balm Powder", why: "Innovative formula, BIPOC-owned", price: "$36" }
        ]},
    { brand: "Lancôme", product: "Lash Idole Mascara", category: "Mascara", description: "Lengthening mascara", price: "$28",
        swaps: [
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Same length focus, tubing formula", price: "$27" },
            { brand: "ILIA", product: "Limitless Lash Mascara", why: "Clean, lengthening, nourishing", price: "$28" },
            { brand: "Tower 28", product: "MakeWaves Mascara", why: "Clean, gentle, buildable length", price: "$20" }
        ]},

    // ============================================
    // CERAVE / LA ROCHE-POSAY / KIEHL'S (L'Oréal)
    // ============================================
    { brand: "CeraVe", product: "Moisturizing Cream", category: "Moisturizer", description: "Ceramide moisturizer for dry skin", price: "$19",
        swaps: [
            { brand: "Versed", product: "Skin Soak Rich Moisture Cream", why: "Rich cream, clean ingredients", price: "$18" },
            { brand: "Naturium", product: "Bio-Lipid Recovery Cream", why: "Ceramide-rich, science-backed", price: "$22" },
            { brand: "COSRX", product: "Balancium Comfort Ceramide Cream", why: "K-beauty ceramide cream, gentle", price: "$18" }
        ]},
    { brand: "CeraVe", product: "Hydrating Facial Cleanser", category: "Cleanser", description: "Gentle non-foaming cleanser", price: "$16",
        swaps: [
            { brand: "Versed", product: "Gentle Cycle Milky Cleanser", why: "Same gentle, non-stripping approach", price: "$13" },
            { brand: "Purito", product: "From Green Cleansing Oil", why: "Gentle, non-comedogenic, K-beauty", price: "$15" },
            { brand: "Good Molecules", product: "Rosewater Daily Cleanser", why: "Gentle, pH-balanced, affordable", price: "$8" }
        ]},
    { brand: "CeraVe", product: "SA Smoothing Cleanser", category: "Cleanser", description: "Salicylic acid cleanser", price: "$14",
        swaps: [
            { brand: "Some By Mi", product: "AHA BHA PHA 30 Days Miracle Cleanser", why: "Triple acid, K-beauty cult favorite", price: "$12" },
            { brand: "The Ordinary", product: "Salicylic Acid 2% Masque", why: "Concentrated BHA treatment", price: "$12" },
            { brand: "Naturium", product: "BHA Liquid Exfoliant 2%", why: "Salicylic acid, gentle, effective", price: "$16" }
        ]},
    { brand: "La Roche-Posay", product: "Toleriane Double Repair Moisturizer", category: "Moisturizer", description: "Barrier repair moisturizer", price: "$23",
        swaps: [
            { brand: "Naturium", product: "Bio-Lipid Recovery Cream", why: "Similar ceramide approach, science-backed", price: "$22" },
            { brand: "Versed", product: "Skin Soak Rich Moisture Cream", why: "Rich barrier repair, clean", price: "$18" },
            { brand: "Purito", product: "Dermide Cica Barrier Sleeping Pack", why: "Centella + ceramides, barrier repair", price: "$17" }
        ]},
    { brand: "La Roche-Posay", product: "Effaclar Duo+", category: "Treatment", description: "Acne treatment moisturizer", price: "$37",
        swaps: [
            { brand: "Naturium", product: "Azelaic Acid Emulsion 10%", why: "Anti-acne + anti-redness, science-backed", price: "$16" },
            { brand: "The Ordinary", product: "Niacinamide 10% + Zinc 1%", why: "Pore-clearing, oil-control, $7 vs $37", price: "$7" },
            { brand: "Some By Mi", product: "AHA BHA PHA 30 Days Miracle Serum", why: "Triple acid, targets acne, K-beauty", price: "$14" }
        ]},
    { brand: "Kiehl's", product: "Ultra Facial Cream", category: "Moisturizer", description: "Lightweight 24hr hydration", price: "$37",
        swaps: [
            { brand: "The Ordinary", product: "Natural Moisturizing Factors + HA", why: "Same lightweight hydration, $6 vs $37", price: "$6" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Lightweight, clean, Target-exclusive", price: "$15" },
            { brand: "Isntree", product: "Hyaluronic Acid Water Gel Cream", why: "K-beauty hydration, lightweight", price: "$18" }
        ]},
    { brand: "Kiehl's", product: "Midnight Recovery Concentrate", category: "Serum", description: "Overnight face oil", price: "$56",
        swaps: [
            { brand: "Herbivore", product: "Lapis Blue Tansy Face Oil", why: "Blue tansy, calming, indie", price: "$48" },
            { brand: "The Ordinary", product: "100% Organic Cold-Pressed Rosehip Seed Oil", why: "Pure rosehip oil, $10 vs $56", price: "$10" },
            { brand: "Klairs", product: "Midnight Blue Youth Activating Drop", why: "K-beauty night serum, blue peptide", price: "$27" }
        ]},

    // ============================================
    // DOVE / TRESEMMÉ (Unilever)
    // ============================================
    { brand: "Dove", product: "Beauty Bar", category: "Body Care", description: "Moisturizing cleansing bar", price: "$8",
        swaps: [
            { brand: "Dr. Bronner's", product: "Pure-Castile Bar Soap", why: "Organic, fair trade, family-owned since 1948", price: "$5" },
            { brand: "Ethique", product: "Solid Body Wash Bar", why: "Zero-waste, vegan, plastic-free, B Corp", price: "$16" }
        ]},
    { brand: "Dove", product: "Body Wash", category: "Body Care", description: "Moisturizing body wash", price: "$8",
        swaps: [
            { brand: "Dr. Bronner's", product: "Pure-Castile Liquid Soap", why: "18-in-1 uses, organic, fair trade", price: "$12" },
            { brand: "Native", product: "Body Wash", why: "Clean ingredients, great scents (now P&G-owned)", price: "$9" }
        ]},
    { brand: "TRESemmé", product: "Keratin Smooth Shampoo", category: "Hair Care", description: "Smoothing shampoo", price: "$7",
        swaps: [
            { brand: "Briogeo", product: "Don't Despair, Repair! Shampoo", why: "Clean, effective, BIPOC woman-founded", price: "$28" },
            { brand: "Acure", product: "Curiously Clarifying Shampoo", why: "100% vegan, performance-driven", price: "$10" }
        ]},

    // ============================================
    // COVERGIRL / RIMMEL (Coty)
    // ============================================
    { brand: "CoverGirl", product: "Lash Blast Volume Mascara", category: "Mascara", description: "Volumizing mascara", price: "$12",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Big Mood Mascara", why: "Volumizing, vegan, cruelty-free", price: "$7" },
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Premium tubing formula, social impact", price: "$27" }
        ]},
    { brand: "Rimmel", product: "Stay Matte Pressed Powder", category: "Powder", description: "Mattifying pressed powder", price: "$6",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Halo Glow Setting Powder", why: "Smoothing, vegan, cruelty-free", price: "$9" },
            { brand: "Honest Beauty", product: "Invisible Blurring Powder", why: "Mattifying, clean ingredients", price: "$15" }
        ]},

    // ============================================
    // NEUTROGENA (Kenvue/J&J)
    // ============================================
    { brand: "Neutrogena", product: "Hydro Boost Water Gel", category: "Moisturizer", description: "Hyaluronic acid gel moisturizer", price: "$25",
        swaps: [
            { brand: "COSRX", product: "Oil-Free Ultra-Moisturizing Lotion", why: "Birch sap hydration, K-beauty classic", price: "$15" },
            { brand: "Isntree", product: "Hyaluronic Acid Water Gel Cream", why: "HA-focused, lightweight, K-beauty", price: "$18" },
            { brand: "Versed", product: "Dew Point Moisturizing Gel-Cream", why: "Lightweight gel, clean beauty", price: "$15" }
        ]},
    { brand: "Neutrogena", product: "Ultra Sheer Dry-Touch Sunscreen", category: "Sunscreen", description: "SPF 55 lightweight sunscreen", price: "$13",
        swaps: [
            { brand: "Isntree", product: "Hyaluronic Acid Watery Sun Gel SPF 50+", why: "Lightweight, no white cast, K-beauty", price: "$15" },
            { brand: "Beauty of Joseon", product: "Relief Sun SPF 50+", why: "Rice + probiotics, elegant, TikTok favorite", price: "$15" },
            { brand: "Purito", product: "Daily Go-To Sunscreen SPF 50+", why: "Lightweight, no white cast", price: "$14" }
        ]},
    { brand: "Neutrogena", product: "Makeup Remover Wipes", category: "Cleanser", description: "Makeup removing wipes", price: "$8",
        swaps: [
            { brand: "Banila Co", product: "Clean It Zero Cleansing Balm", why: "Better removal, no waste, reusable jar", price: "$19" },
            { brand: "Heimish", product: "All Clean Balm", why: "Melts makeup, gentle, eco-friendly", price: "$14" }
        ]},

    // ============================================
    // OLAY / SK-II / PANTENE (P&G)
    // ============================================
    { brand: "Olay", product: "Regenerist Micro-Sculpting Cream", category: "Moisturizer", description: "Anti-aging moisturizer", price: "$30",
        swaps: [
            { brand: "Naturium", product: "Multi-Peptide Moisturizer", why: "Peptide-rich, science-backed, $22 vs $30", price: "$22" },
            { brand: "The Ordinary", product: "Buffet + Copper Peptides 1%", why: "Peptide serum, pair with moisturizer", price: "$29" },
            { brand: "COSRX", product: "Advanced Snail 92 All In One Cream", why: "Snail mucin, anti-aging, K-beauty", price: "$18" }
        ]},
    { brand: "Pantene", product: "Daily Moisture Renewal Shampoo", category: "Hair Care", description: "Moisturizing shampoo", price: "$6",
        swaps: [
            { brand: "Acure", product: "Ultra Hydrating Shampoo", why: "100% vegan, argan oil, affordable", price: "$10" },
            { brand: "Briogeo", product: "Don't Despair, Repair! Shampoo", why: "Repair-focused, BIPOC woman-founded", price: "$28" }
        ]},

    // ============================================
    // NARS / DRUNK ELEPHANT (Shiseido)
    // ============================================
    { brand: "NARS", product: "Orgasm Blush", category: "Blush", description: "Iconic peachy-pink blush", price: "$36",
        swaps: [
            { brand: "Rare Beauty", product: "Soft Pinch Liquid Blush", why: "Viral liquid blush, long-wearing", price: "$23" },
            { brand: "e.l.f. Cosmetics", product: "Putty Blush", why: "Creamy, buildable, $7 vs $36", price: "$7" },
            { brand: "Tower 28", product: "BeachPlease Tinted Lip + Cheek Balm", why: "Multi-use, clean, natural flush", price: "$20" }
        ]},
    { brand: "NARS", product: "Radiant Creamy Concealer", category: "Concealer", description: "Medium-to-full concealer", price: "$32",
        swaps: [
            { brand: "Kosas", product: "Revealer Super Creamy Concealer", why: "Caffeine + peptides, skincare benefits", price: "$28" },
            { brand: "Rare Beauty", product: "Liquid Touch Brightening Concealer", why: "Brightening, lightweight, 48 shades", price: "$22" },
            { brand: "e.l.f. Cosmetics", product: "Hydrating Camo Concealer", why: "Full coverage, $7 vs $32", price: "$7" }
        ]},
    { brand: "Drunk Elephant", product: "Protini Polypeptide Cream", category: "Moisturizer", description: "Peptide moisturizer", price: "$68",
        swaps: [
            { brand: "Naturium", product: "Multi-Peptide Moisturizer", why: "Same peptide approach, $22 vs $68", price: "$22" },
            { brand: "The Ordinary", product: "Buffet", why: "Multi-peptide serum, $17 vs $68", price: "$17" },
            { brand: "COSRX", product: "Advanced Snail 96 Mucin Power Essence", why: "Repair + hydration, K-beauty classic", price: "$18" }
        ]},
    { brand: "Drunk Elephant", product: "C-Firma Day Serum", category: "Serum", description: "Vitamin C serum", price: "$78",
        swaps: [
            { brand: "The Ordinary", product: "Vitamin C Suspension 23% + HA Spheres 2%", why: "High-potency vitamin C, $7 vs $78", price: "$7" },
            { brand: "Naturium", product: "Vitamin C Complex Serum", why: "Stable vitamin C, science-backed", price: "$20" },
            { brand: "Klairs", product: "Freshly Juiced Vitamin Drop", why: "Gentle vitamin C, K-beauty favorite", price: "$23" }
        ]},

    // ============================================
    // BENEFIT / SEPHORA COLLECTION (LVMH)
    // ============================================
    { brand: "Benefit", product: "BADgal BANG! Mascara", category: "Mascara", description: "Volumizing mascara", price: "$28",
        swaps: [
            { brand: "e.l.f. Cosmetics", product: "Big Mood Mascara", why: "Same volume, vegan, $7", price: "$7" },
            { brand: "Thrive Causemetics", product: "Liquid Lash Extensions Mascara", why: "Tubing formula, social impact", price: "$27" }
        ]},
    { brand: "Benefit", product: "Hoola Bronzer", category: "Bronzer", description: "Matte bronzer", price: "$33",
        swaps: [
            { brand: "Tower 28", product: "Bronzino Illuminating Bronzer", why: "Clean, natural glow, woman-owned", price: "$20" },
            { brand: "e.l.f. Cosmetics", product: "Putty Bronzer", why: "Creamy, blendable, $7 vs $33", price: "$7" },
            { brand: "Rare Beauty", product: "Warm Wishes Effortless Bronzer Sticks", why: "Easy application, natural finish", price: "$25" }
        ]},

    // ============================================
    // URBAN DECAY (L'Oréal)
    // ============================================
    { brand: "Urban Decay", product: "All Nighter Setting Spray", category: "Setting Spray", description: "16hr setting spray", price: "$36",
        swaps: [
            { brand: "Milk Makeup", product: "Hydro Grip Setting Spray", why: "Same long-wear, hydrating", price: "$36" },
            { brand: "e.l.f. Cosmetics", product: "Power Grip Dewy Setting Spray", why: "Great hold, $10 vs $36", price: "$10" }
        ]},
    { brand: "Urban Decay", product: "Naked Eyeshadow Palette", category: "Eyeshadow", description: "Neutral eyeshadow palette", price: "$59",
        swaps: [
            { brand: "Juvia's Place", product: "The Nubian Palette", why: "Rich pigment, inclusive, Black-owned", price: "$14" },
            { brand: "e.l.f. Cosmetics", product: "Bite Size Eyeshadows", why: "Neutral quads, vegan, $3", price: "$3" },
            { brand: "Danessa Myricks", product: "Lightwork Palette", why: "Multi-use, innovative, BIPOC-owned", price: "$42" }
        ]},

    // ============================================
    // K-BEAUTY ORIGINALS (clean brands → show as swaps FOR others)
    // ============================================
    { brand: "Innisfree", product: "Green Tea Seed Serum", category: "Serum", description: "Hydrating green tea serum", price: "$27",
        swaps: [
            { brand: "Isntree", product: "Green Tea Fresh Emulsion", why: "Similar green tea base, independent K-beauty", price: "$18" },
            { brand: "Beauty of Joseon", product: "Glow Serum", why: "Rice + niacinamide, indie K-beauty", price: "$15" },
            { brand: "Torriden", product: "DIVE-IN Low Molecular HA Serum", why: "Pure hydration, indie K-beauty", price: "$16" }
        ]},
    { brand: "Laneige", product: "Lip Sleeping Mask", category: "Lip Care", description: "Overnight lip treatment", price: "$24",
        swaps: [
            { brand: "Rare Beauty", product: "With Gratitude Lip Balm", why: "Hydrating, Selena Gomez-owned", price: "$16" },
            { brand: "Tower 28", product: "LipSoftie Hydrating Lip Treatment", why: "Clean, SOS lip rescue", price: "$16" },
            { brand: "Honest Beauty", product: "Tinted Lip Balm", why: "Sheer + hydrating, clean", price: "$10" }
        ]},
    { brand: "Laneige", product: "Water Sleeping Mask", category: "Mask", description: "Overnight hydrating mask", price: "$32",
        swaps: [
            { brand: "COSRX", product: "Ultimate Nourishing Rice Overnight Mask", why: "Similar concept, indie K-beauty", price: "$15" },
            { brand: "Purito", product: "Dermide Cica Barrier Sleeping Pack", why: "Barrier repair, centella, indie", price: "$17" }
        ]},

    // ============================================
    // GARNIER (L'Oréal)
    // ============================================
    { brand: "Garnier", product: "Micellar Cleansing Water", category: "Cleanser", description: "No-rinse micellar water", price: "$10",
        swaps: [
            { brand: "Bioderma", product: "Sensibio H2O Micellar Water", why: "The OG micellar water, independent French brand", price: "$15" },
            { brand: "Good Molecules", product: "Rosewater Daily Cleanser", why: "Gentle, affordable alternative", price: "$8" }
        ]},

    // ============================================
    // DIOR (LVMH)
    // ============================================
    { brand: "Dior Beauty", product: "Lip Glow", category: "Lip Balm", description: "Color-reviving lip balm", price: "$40",
        swaps: [
            { brand: "Tower 28", product: "LipSoftie Hydrating Lip Treatment", why: "Tinted, hydrating, clean, $16 vs $40", price: "$16" },
            { brand: "Rare Beauty", product: "With Gratitude Lip Balm", why: "Hydrating, sheer color", price: "$16" },
            { brand: "Kosas", product: "Wet Lip Oil Gloss", why: "Hydrating, trendy shades, clean beauty", price: "$22" }
        ]},
    { brand: "Dior Beauty", product: "Backstage Face & Body Foundation", category: "Foundation", description: "Lightweight pro foundation", price: "$45",
        swaps: [
            { brand: "ILIA", product: "Super Serum Skin Tint SPF 40", why: "Skin-like finish + SPF, clean beauty", price: "$48" },
            { brand: "Kosas", product: "Revealer Skin-Improving Foundation", why: "Skincare-infused, natural finish", price: "$42" },
            { brand: "Glossier", product: "Stretch Fluid Foundation", why: "Flexible coverage, skin-like, indie", price: "$28" }
        ]},

    // ============================================
    // AESOP (L'Oréal)
    // ============================================
    { brand: "Aesop", product: "Resurrection Aromatique Hand Balm", category: "Body Care", description: "Luxury hand cream", price: "$33",
        swaps: [
            { brand: "Grown Alchemist", product: "Hydra-Repair Hand Cream", why: "Australian botanical, indie, similar aesthetic", price: "$24" },
            { brand: "Malin+Goetz", product: "Vitamin B5 Hand Treatment", why: "Indie apothecary brand, effective", price: "$22" }
        ]},
    { brand: "Aesop", product: "Parsley Seed Facial Cleanser", category: "Cleanser", description: "Gel facial cleanser", price: "$45",
        swaps: [
            { brand: "Grown Alchemist", product: "Gentle Gel Facial Cleanser", why: "Same botanical approach, independent", price: "$35" },
            { brand: "Klairs", product: "Gentle Black Deep Cleansing Oil", why: "Gentle, botanical, K-beauty indie", price: "$22" }
        ]}
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
