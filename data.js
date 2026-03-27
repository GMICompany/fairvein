// Brand ownership database
// Data compiled from investment research (Estée Lauder boycott analysis, March 2026)
// Expanded March 2026: Added L'Oréal, Coty, and Unilever portfolio brands

const brandDatabase = [
    // ============================================
    // ESTÉE LAUDER COMPANIES (original 11 brands)
    // ============================================
    {
        name: "MAC Cosmetics",
        aliases: ["mac"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "Clinique", "Bobbi Brown", "La Mer", "Tom Ford Beauty", 
            "Too Faced", "Aveda", "Bumble and bumble", "Origins",
            "Smashbox", "Estée Lauder"
        ],
        alternatives: [
            { name: "Fenty Beauty", why: "Indie, Rihanna-owned, inclusive shade ranges" },
            { name: "Rare Beauty", why: "Selena Gomez-owned, donates 1% to mental health" },
            { name: "Tower 28", why: "Woman-owned, sensitive skin focus, clean ingredients" },
            { name: "Mented Cosmetics", why: "Black woman-owned, inclusive beauty" }
        ]
    },
    {
        name: "Clinique",
        aliases: ["clinique"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Bobbi Brown", "La Mer", "Tom Ford Beauty",
            "Too Faced", "Aveda", "Bumble and bumble", "Origins",
            "Smashbox", "Estée Lauder"
        ],
        alternatives: [
            { name: "The Ordinary", why: "Affordable, science-backed, transparent formulas" },
            { name: "Versed", why: "Clean, affordable skincare, Target-exclusive" },
            { name: "Good Molecules", why: "Effective, affordable, minimal ingredient lists" },
            { name: "Naturium", why: "Susan Yara-founded, research-backed ingredients" }
        ]
    },
    {
        name: "Bobbi Brown",
        aliases: ["bobbi brown"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "La Mer", "Tom Ford Beauty",
            "Too Faced", "Aveda", "Bumble and bumble", "Origins",
            "Smashbox", "Estée Lauder"
        ],
        alternatives: [
            { name: "Jones Road Beauty", why: "Bobbi Brown's NEW indie line! Clean, minimal" },
            { name: "Ilia Beauty", why: "Clean, high-performance color cosmetics" },
            { name: "RMS Beauty", why: "Organic, founder-led by Rose-Marie Swift" },
            { name: "Kosas", why: "Clean, skin-focused makeup with skincare benefits" }
        ]
    },
    {
        name: "La Mer",
        aliases: ["la mer", "lamer"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bobbi Brown", "Tom Ford Beauty",
            "Too Faced", "Aveda", "Estée Lauder"
        ],
        alternatives: [
            { name: "Augustinus Bader", why: "Luxury, science-backed, stem cell technology" },
            { name: "Dr. Barbara Sturm", why: "Luxury, clean, anti-inflammatory focus" },
            { name: "Vintner's Daughter", why: "Ultra-luxury indie, botanical formulas" },
            { name: "True Botanicals", why: "MADE SAFE certified luxury skincare" }
        ]
    },
    {
        name: "Tom Ford Beauty",
        aliases: ["tom ford"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bobbi Brown", "La Mer",
            "Too Faced", "Aveda", "Estée Lauder"
        ],
        alternatives: [
            { name: "Chanel Beauty", why: "Independent, family-owned luxury" },
            { name: "Hermès Beauty", why: "Independent, family-owned, artisanal" },
            { name: "Byredo", why: "Independent Swedish luxury fragrance & cosmetics" },
            { name: "Nars", why: "Shiseido-owned, different parent company" }
        ]
    },
    {
        name: "Too Faced",
        aliases: ["too faced", "toofaced"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bobbi Brown", "La Mer",
            "Tom Ford Beauty", "Aveda", "Smashbox", "Estée Lauder"
        ],
        alternatives: [
            { name: "ColourPop", why: "Affordable indie, cruelty-free, bold colors" },
            { name: "BH Cosmetics", why: "Affordable, playful, diverse color ranges" },
            { name: "Juvia's Place", why: "Black woman-owned, vibrant eyeshadows" },
            { name: "Milani", why: "Drugstore, family-owned, high quality" }
        ]
    },
    {
        name: "Aveda",
        aliases: ["aveda"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bumble and bumble", "Origins",
            "Estée Lauder"
        ],
        alternatives: [
            { name: "Rahua", why: "Sustainable, rainforest alliance, plant-based" },
            { name: "Innersense Organic Beauty", why: "Certified organic, salon-quality" },
            { name: "Act+Acre", why: "Scalp-focused, clean, cold-processed" },
            { name: "Josh Rosebrook", why: "Organic, small-batch, herbalist-formulated" }
        ]
    },
    {
        name: "Bumble and bumble",
        aliases: ["bumble and bumble", "bumble", "bb hair"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Aveda", "Origins", "Estée Lauder"
        ],
        alternatives: [
            { name: "Olaplex", why: "Bond-building technology, indie, salon-quality" },
            { name: "Amika", why: "Indie, salon-quality, fun branding" },
            { name: "Verb", why: "Affordable, clean, cruelty-free" },
            { name: "Briogeo", why: "Clean, indie, diverse hair types" }
        ]
    },
    {
        name: "Origins",
        aliases: ["origins"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Aveda", "Estée Lauder"
        ],
        alternatives: [
            { name: "Youth to the People", why: "Vegan, superfood-based, clean" },
            { name: "Herbivore Botanicals", why: "Natural, indie, non-toxic ingredients" },
            { name: "Biossance", why: "Sustainable, clean, squalane-focused" },
            { name: "Cocokind", why: "Affordable, transparent, sustainable" }
        ]
    },
    {
        name: "Smashbox",
        aliases: ["smashbox"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Too Faced", "Estée Lauder"
        ],
        alternatives: [
            { name: "e.l.f. Cosmetics", why: "Affordable, publicly traded, cruelty-free" },
            { name: "Morphe", why: "Indie, influencer-driven, affordable pro makeup" },
            { name: "Makeup by Mario", why: "Mario Dedivanovic's indie line, pro quality" },
            { name: "Danessa Myricks Beauty", why: "Pro MUA-founded, inclusive, innovative" }
        ]
    },
    {
        name: "Estée Lauder",
        aliases: ["estee lauder", "estée lauder"],
        parent: "Estée Lauder Companies",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bobbi Brown", "La Mer",
            "Tom Ford Beauty", "Too Faced", "Aveda", "Bumble and bumble",
            "Origins", "Smashbox"
        ],
        alternatives: [
            { name: "Chanel", why: "Independent, family-owned luxury" },
            { name: "Shiseido", why: "Independent Japanese beauty conglomerate" },
            { name: "Tatcha", why: "Independent, Japanese-inspired skincare" },
            { name: "Summer Fridays", why: "Clean, indie, minimal skincare" }
        ]
    },

    // ============================================
    // L'ORÉAL GROUP (20+ brands)
    // ============================================
    {
        name: "Maybelline",
        aliases: ["maybelline new york", "maybelline ny"],
        parent: "L'Oréal",
        sisters: [
            "NYX", "Urban Decay", "Lancôme", "Garnier", "CeraVe", 
            "La Roche-Posay", "Kiehl's", "Essie", "Redken", "Matrix",
            "Giorgio Armani Beauty", "YSL Beauty", "Ralph Lauren Fragrances",
            "Viktor & Rolf", "Valentino"
        ],
        boycotts: [],
        alternatives: [
            { name: "e.l.f. Cosmetics", why: "Affordable drugstore, cruelty-free, indie" },
            { name: "Milani", why: "Family-owned drugstore brand, quality formulas" },
            { name: "Wet n Wild", why: "Affordable, cruelty-free, indie" },
            { name: "ColourPop", why: "Affordable indie, wide color range" }
        ]
    },
    {
        name: "NYX",
        aliases: ["nyx cosmetics", "nyx professional makeup"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "Urban Decay", "Lancôme", "Garnier", "CeraVe", 
            "La Roche-Posay", "Kiehl's", "Essie", "Redken", "Giorgio Armani Beauty",
            "YSL Beauty"
        ],
        boycotts: [],
        alternatives: [
            { name: "ColourPop", why: "Affordable indie, cruelty-free, bold colors" },
            { name: "BH Cosmetics", why: "Affordable, playful, quality pigments" },
            { name: "Makeup Revolution", why: "UK indie, affordable, trend-driven" },
            { name: "Profusion Cosmetics", why: "Budget-friendly, cruelty-free" }
        ]
    },
    {
        name: "Urban Decay",
        aliases: ["ud", "urban decay cosmetics"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "NYX", "Lancôme", "Garnier", "CeraVe", 
            "La Roche-Posay", "Kiehl's", "YSL Beauty"
        ],
        boycotts: [],
        alternatives: [
            { name: "Melt Cosmetics", why: "Indie, bold colors, cruelty-free" },
            { name: "Sugarpill", why: "Indie, vibrant pigments, vegan" },
            { name: "Anastasia Beverly Hills", why: "Family-owned, pro-quality" },
            { name: "Huda Beauty", why: "Founder-owned, innovative formulas" }
        ]
    },
    {
        name: "Lancôme",
        aliases: ["lancome"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "NYX", "Urban Decay", "Garnier", "CeraVe", 
            "La Roche-Posay", "Kiehl's", "YSL Beauty", "Giorgio Armani Beauty"
        ],
        boycotts: [],
        alternatives: [
            { name: "Chanel", why: "Independent, family-owned luxury" },
            { name: "Clarins", why: "Independent family-owned French beauty" },
            { name: "Sisley Paris", why: "Independent luxury skincare" },
            { name: "Cle de Peau", why: "Shiseido luxury division, different parent" }
        ]
    },
    {
        name: "Garnier",
        aliases: ["garnier fructis", "garnier skinactive"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "NYX", "Urban Decay", "Lancôme", "CeraVe", 
            "La Roche-Posay", "Redken", "Matrix"
        ],
        boycotts: [],
        alternatives: [
            { name: "Acure", why: "Affordable, clean, vegan, widely available" },
            { name: "Andalou Naturals", why: "Fruit stem cell science, affordable" },
            { name: "Alba Botanica", why: "Vegetarian, affordable drugstore clean" },
            { name: "Pacifica", why: "100% vegan, clean, affordable" }
        ]
    },
    {
        name: "CeraVe",
        aliases: ["cerave"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "NYX", "Lancôme", "Garnier", "La Roche-Posay", 
            "Kiehl's", "Essie"
        ],
        boycotts: [],
        alternatives: [
            { name: "Vanicream", why: "Dermatologist-developed, fragrance-free, indie" },
            { name: "Versed", why: "Clean, affordable, dermatologist-tested" },
            { name: "Good Molecules", why: "Minimal ingredients, affordable, effective" },
            { name: "The Inkey List", why: "Transparent, affordable actives" }
        ]
    },
    {
        name: "La Roche-Posay",
        aliases: ["la roche posay", "laroche posay"],
        parent: "L'Oréal",
        sisters: [
            "CeraVe", "Kiehl's", "Lancôme", "Garnier", "Vichy", "SkinCeuticals"
        ],
        boycotts: [],
        alternatives: [
            { name: "Avène", why: "Independent French thermal water skincare" },
            { name: "Bioderma", why: "Independent French dermatological brand" },
            { name: "Eucerin", why: "Beiersdorf-owned, dermatologist-recommended" },
            { name: "Uriage", why: "Independent French thermal water brand" }
        ]
    },
    {
        name: "Kiehl's",
        aliases: ["kiehls"],
        parent: "L'Oréal",
        sisters: [
            "CeraVe", "La Roche-Posay", "Lancôme", "YSL Beauty", "Urban Decay"
        ],
        boycotts: [],
        alternatives: [
            { name: "Aesop", why: "Independent Australian apothecary skincare" },
            { name: "Le Labo", why: "Independent NYC-based fragrance & skincare" },
            { name: "Grown Alchemist", why: "Independent Australian organic skincare" },
            { name: "Malin + Goetz", why: "Independent NYC apothecary brand" }
        ]
    },
    {
        name: "Essie",
        aliases: ["essie nail polish"],
        parent: "L'Oréal",
        sisters: [
            "Maybelline", "NYX", "Lancôme", "Garnier", "CeraVe"
        ],
        boycotts: [],
        alternatives: [
            { name: "Ella+Mila", why: "7-free, vegan, cruelty-free indie" },
            { name: "Zoya", why: "Long-wearing, 10-free, family-owned" },
            { name: "Lights Lacquer", why: "Indie, vegan, cruelty-free" },
            { name: "Cirque Colors", why: "NYC indie, 9-free, vegan" }
        ]
    },
    {
        name: "Redken",
        aliases: ["redken 5th avenue"],
        parent: "L'Oréal",
        sisters: [
            "Matrix", "Kérastase", "Pureology", "Garnier", "L'Oréal Professionnel"
        ],
        boycotts: [],
        alternatives: [
            { name: "Olaplex", why: "Indie bond-building technology" },
            { name: "K18", why: "Indie biotech hair repair" },
            { name: "JVN Hair", why: "Jonathan Van Ness indie clean haircare" },
            { name: "Amika", why: "Indie salon-quality, cruelty-free" }
        ]
    },
    {
        name: "Matrix",
        aliases: ["matrix essentials", "matrix haircare"],
        parent: "L'Oréal",
        sisters: [
            "Redken", "Kérastase", "Pureology", "Garnier", "L'Oréal Professionnel"
        ],
        boycotts: [],
        alternatives: [
            { name: "Verb", why: "Clean, affordable salon brand" },
            { name: "IGK Hair", why: "Indie NYC salon brand" },
            { name: "Kristin Ess", why: "Affordable, clean, Target-exclusive" },
            { name: "Pattern Beauty", why: "Tracee Ellis Ross-owned, textured hair" }
        ]
    },
    {
        name: "Giorgio Armani Beauty",
        aliases: ["armani beauty"],
        parent: "L'Oréal",
        sisters: [
            "YSL Beauty", "Lancôme", "Urban Decay", "Kiehl's"
        ],
        boycotts: [],
        alternatives: [
            { name: "Tom Ford Beauty", why: "Estée Lauder-owned, luxury alternative" },
            { name: "Chanel Beauty", why: "Independent luxury" },
            { name: "Guerlain", why: "LVMH-owned luxury French brand" },
            { name: "Dior Beauty", why: "LVMH-owned luxury alternative" }
        ]
    },
    {
        name: "YSL Beauty",
        aliases: ["yves saint laurent beauty", "ysl beauté"],
        parent: "L'Oréal",
        sisters: [
            "Giorgio Armani Beauty", "Lancôme", "Urban Decay", "Kiehl's"
        ],
        boycotts: [],
        alternatives: [
            { name: "Chanel Beauty", why: "Independent family-owned luxury" },
            { name: "Guerlain", why: "LVMH luxury French beauty house" },
            { name: "Hermès Beauty", why: "Independent luxury fragrance & color" },
            { name: "Byredo", why: "Independent Swedish luxury beauty" }
        ]
    },
    {
        name: "Ralph Lauren Fragrances",
        aliases: ["ralph lauren polo", "ralph lauren romance"],
        parent: "L'Oréal",
        sisters: [
            "YSL Beauty", "Giorgio Armani Beauty", "Viktor & Rolf", "Valentino"
        ],
        boycotts: [],
        alternatives: [
            { name: "Jo Malone London", why: "Estée Lauder-owned, different parent" },
            { name: "Byredo", why: "Independent Swedish luxury fragrance" },
            { name: "Le Labo", why: "Independent NYC fragrance house" },
            { name: "Diptyque", why: "Independent French luxury fragrance" }
        ]
    },
    {
        name: "Viktor & Rolf",
        aliases: ["viktor and rolf", "flowerbomb"],
        parent: "L'Oréal",
        sisters: [
            "YSL Beauty", "Giorgio Armani Beauty", "Valentino", "Lancôme"
        ],
        boycotts: [],
        alternatives: [
            { name: "Maison Francis Kurkdjian", why: "LVMH-owned luxury fragrance house" },
            { name: "Byredo", why: "Independent Swedish luxury fragrance" },
            { name: "Frederic Malle", why: "Estée Lauder-owned, artisanal perfumer" },
            { name: "Serge Lutens", why: "Independent luxury niche fragrance" }
        ]
    },
    {
        name: "Valentino",
        aliases: ["valentino beauty", "valentino fragrances"],
        parent: "L'Oréal",
        sisters: [
            "YSL Beauty", "Giorgio Armani Beauty", "Viktor & Rolf", "Lancôme"
        ],
        boycotts: [],
        alternatives: [
            { name: "Gucci Beauty", why: "Coty-owned luxury alternative" },
            { name: "Prada Beauty", why: "L'Oréal Luxe, but listed separately" },
            { name: "Hermès Beauty", why: "Independent luxury house" },
            { name: "Chanel Beauty", why: "Independent family-owned" }
        ]
    },

    // ============================================
    // COTY INC (15+ brands)
    // ============================================
    {
        name: "CoverGirl",
        aliases: ["covergirl"],
        parent: "Coty",
        sisters: [
            "Rimmel", "Sally Hansen", "Max Factor", "OPI", "Clairol", 
            "Wella", "Calvin Klein", "Gucci Fragrance", "Marc Jacobs Fragrance"
        ],
        boycotts: [],
        alternatives: [
            { name: "e.l.f. Cosmetics", why: "Affordable drugstore indie, cruelty-free" },
            { name: "Milani", why: "Family-owned, quality drugstore brand" },
            { name: "NYX", why: "L'Oréal-owned but different parent" },
            { name: "Wet n Wild", why: "Affordable indie, cruelty-free" }
        ]
    },
    {
        name: "Rimmel",
        aliases: ["rimmel london"],
        parent: "Coty",
        sisters: [
            "CoverGirl", "Sally Hansen", "Max Factor", "OPI", "Bourjois"
        ],
        boycotts: [],
        alternatives: [
            { name: "e.l.f. Cosmetics", why: "Affordable, cruelty-free indie" },
            { name: "Makeup Revolution", why: "UK indie, affordable, trend-driven" },
            { name: "Catrice", why: "European indie, affordable, quality" },
            { name: "Essence", why: "German indie, ultra-affordable, cruelty-free" }
        ]
    },
    {
        name: "Sally Hansen",
        aliases: ["sally hansen nails"],
        parent: "Coty",
        sisters: [
            "CoverGirl", "Rimmel", "OPI", "Max Factor"
        ],
        boycotts: [],
        alternatives: [
            { name: "Zoya", why: "10-free, long-wearing, family-owned" },
            { name: "Ella+Mila", why: "7-free, vegan indie nail care" },
            { name: "Pacifica", why: "7-free, vegan, affordable" },
            { name: "Lights Lacquer", why: "Indie, vegan, cruelty-free" }
        ]
    },
    {
        name: "OPI",
        aliases: ["opi nail lacquer", "opi products"],
        parent: "Coty",
        sisters: [
            "Sally Hansen", "CoverGirl", "Rimmel", "Wella"
        ],
        boycotts: [],
        alternatives: [
            { name: "Zoya", why: "10-free, professional-quality, indie" },
            { name: "Ella+Mila", why: "7-free, vegan, cruelty-free" },
            { name: "Cirque Colors", why: "NYC indie, 9-free, vegan" },
            { name: "ILNP", why: "Indie holographic specialist, 7-free" }
        ]
    },
    {
        name: "Max Factor",
        aliases: ["maxfactor"],
        parent: "Coty",
        sisters: [
            "CoverGirl", "Rimmel", "Sally Hansen", "Bourjois"
        ],
        boycotts: [],
        alternatives: [
            { name: "Makeup Revolution", why: "UK indie, affordable, quality" },
            { name: "Catrice", why: "European indie, drugstore pricing" },
            { name: "e.l.f. Cosmetics", why: "Affordable indie, cruelty-free" },
            { name: "Milani", why: "Family-owned drugstore quality" }
        ]
    },
    {
        name: "Clairol",
        aliases: ["clairol hair color", "nice n easy"],
        parent: "Coty",
        sisters: [
            "Wella", "CoverGirl", "Rimmel"
        ],
        boycotts: [],
        alternatives: [
            { name: "Madison Reed", why: "Clean hair color, indie, salon-quality" },
            { name: "dpHUE", why: "Clean, gloss + color, indie" },
            { name: "Overtone", why: "Indie, vegan, conditioning color" },
            { name: "Arctic Fox", why: "Vegan, cruelty-free, vibrant semi-permanent" }
        ]
    },
    {
        name: "Wella",
        aliases: ["wella professionals", "wella color"],
        parent: "Coty",
        sisters: [
            "Clairol", "OPI", "CoverGirl", "Sebastian", "Nioxin"
        ],
        boycotts: [],
        alternatives: [
            { name: "Olaplex", why: "Indie bond-building technology" },
            { name: "Oribe", why: "Luxury indie salon brand" },
            { name: "R+Co", why: "Indie collective salon brand" },
            { name: "Virtue", why: "Indie biotech hair repair" }
        ]
    },
    {
        name: "Adidas",
        aliases: ["adidas fragrance", "adidas cologne"],
        parent: "Coty",
        sisters: [
            "Calvin Klein", "Marc Jacobs Fragrance", "Gucci Fragrance"
        ],
        boycotts: [],
        alternatives: [
            { name: "Herban Cowboy", why: "Natural, affordable men's fragrance" },
            { name: "Every Man Jack", why: "Clean, affordable men's grooming" },
            { name: "Bluemercury M-61", why: "Clean, indie skincare brand" },
            { name: "Malin + Goetz", why: "Indie unisex apothecary" }
        ]
    },
    {
        name: "Calvin Klein",
        aliases: ["ck", "calvin klein fragrance", "ck one"],
        parent: "Coty",
        sisters: [
            "Marc Jacobs Fragrance", "Gucci Fragrance", "Chloé", "Adidas"
        ],
        boycotts: [],
        alternatives: [
            { name: "Le Labo", why: "Independent NYC fragrance house" },
            { name: "Byredo", why: "Independent Swedish luxury fragrance" },
            { name: "D.S. & Durga", why: "Independent Brooklyn perfume house" },
            { name: "Commodity", why: "Indie, minimalist, unisex scents" }
        ]
    },
    {
        name: "Chloé",
        aliases: ["chloe perfume", "chloe fragrance"],
        parent: "Coty",
        sisters: [
            "Calvin Klein", "Gucci Fragrance", "Marc Jacobs Fragrance"
        ],
        boycotts: [],
        alternatives: [
            { name: "Byredo", why: "Independent Swedish luxury fragrance" },
            { name: "Le Labo", why: "Independent artisanal fragrance" },
            { name: "Diptyque", why: "Independent French luxury fragrance" },
            { name: "Maison Francis Kurkdjian", why: "LVMH luxury perfumer" }
        ]
    },
    {
        name: "Gucci Fragrance",
        aliases: ["gucci perfume", "gucci guilty", "gucci bloom"],
        parent: "Coty",
        sisters: [
            "Calvin Klein", "Marc Jacobs Fragrance", "Chloé"
        ],
        boycotts: [],
        alternatives: [
            { name: "Hermès Fragrance", why: "Independent luxury fragrance house" },
            { name: "Byredo", why: "Independent Swedish luxury" },
            { name: "Maison Francis Kurkdjian", why: "LVMH artisanal perfumer" },
            { name: "Tom Ford Private Blend", why: "Estée Lauder luxury fragrance" }
        ]
    },
    {
        name: "Marc Jacobs Fragrance",
        aliases: ["marc jacobs daisy", "marc jacobs perfume"],
        parent: "Coty",
        sisters: [
            "Calvin Klein", "Gucci Fragrance", "Chloé"
        ],
        boycotts: [],
        alternatives: [
            { name: "Boy Smells", why: "Indie LA-based fragrance & candles" },
            { name: "D.S. & Durga", why: "Independent Brooklyn perfume house" },
            { name: "Commodity", why: "Indie minimalist fragrance" },
            { name: "Dedcool", why: "Indie layerable fragrances" }
        ]
    },

    // ============================================
    // UNILEVER (15+ brands)
    // ============================================
    {
        name: "Dove",
        aliases: ["dove soap", "dove body wash", "dove deodorant"],
        parent: "Unilever",
        sisters: [
            "Axe", "TRESemmé", "Suave", "St. Ives", "Simple", 
            "Vaseline", "Pond's", "Clear", "Dermalogica", "Tatcha"
        ],
        boycotts: [],
        alternatives: [
            { name: "Native", why: "Clean, P&G-owned but different parent" },
            { name: "Schmidt's Naturals", why: "Natural deodorant, indie" },
            { name: "Everyone Soap", why: "EO Products, clean, affordable" },
            { name: "Dr. Bronner's", why: "Fair trade, organic, family-owned" }
        ]
    },
    {
        name: "Axe",
        aliases: ["lynx", "axe body spray"],
        parent: "Unilever",
        sisters: [
            "Dove", "Degree", "Suave", "TRESemmé"
        ],
        boycotts: [],
        alternatives: [
            { name: "Every Man Jack", why: "Clean men's grooming, indie" },
            { name: "Duke Cannon", why: "Men's grooming, veteran-owned" },
            { name: "Dr. Squatch", why: "Natural men's soap, indie" },
            { name: "Herban Cowboy", why: "Natural men's grooming" }
        ]
    },
    {
        name: "TRESemmé",
        aliases: ["tresemme"],
        parent: "Unilever",
        sisters: [
            "Dove", "Suave", "Nexxus", "Clear", "Bed Head"
        ],
        boycotts: [],
        alternatives: [
            { name: "Kristin Ess", why: "Affordable clean haircare, Target-exclusive" },
            { name: "Not Your Mother's", why: "Indie, affordable, salon-quality" },
            { name: "Briogeo", why: "Clean, indie, diverse formulas" },
            { name: "Verb", why: "Clean salon brand, cruelty-free" }
        ]
    },
    {
        name: "Suave",
        aliases: ["suave professionals"],
        parent: "Unilever",
        sisters: [
            "Dove", "TRESemmé", "Axe", "St. Ives"
        ],
        boycotts: [],
        alternatives: [
            { name: "Acure", why: "Clean, affordable, vegan" },
            { name: "Andalou Naturals", why: "Fruit stem cell science, affordable" },
            { name: "Kristin Ess", why: "Affordable clean haircare" },
            { name: "Love Beauty and Planet", why: "Unilever-owned but vegan focus" }
        ]
    },
    {
        name: "St. Ives",
        aliases: ["st ives apricot scrub"],
        parent: "Unilever",
        sisters: [
            "Dove", "Simple", "Pond's", "Vaseline", "Suave"
        ],
        boycotts: [],
        alternatives: [
            { name: "Acure", why: "Clean, affordable skincare" },
            { name: "Pacifica", why: "Vegan, cruelty-free, affordable" },
            { name: "Alba Botanica", why: "Vegetarian, natural ingredients" },
            { name: "Andalou Naturals", why: "Fruit stem cell technology" }
        ]
    },
    {
        name: "Simple",
        aliases: ["simple skincare", "simple micellar water"],
        parent: "Unilever",
        sisters: [
            "Dove", "St. Ives", "Pond's", "Vaseline"
        ],
        boycotts: [],
        alternatives: [
            { name: "Versed", why: "Clean, affordable, dermatologist-tested" },
            { name: "Good Molecules", why: "Minimal ingredients, effective" },
            { name: "Acure", why: "Clean, vegan, affordable" },
            { name: "The Inkey List", why: "Transparent actives, affordable" }
        ]
    },
    {
        name: "Vaseline",
        aliases: ["vaseline petroleum jelly"],
        parent: "Unilever",
        sisters: [
            "Dove", "Pond's", "St. Ives", "Simple"
        ],
        boycotts: [],
        alternatives: [
            { name: "Aquaphor", why: "Beiersdorf-owned healing ointment" },
            { name: "Waxelene", why: "Petroleum-free, organic alternative" },
            { name: "CeraVe Healing Ointment", why: "L'Oréal-owned dermatologist-recommended" },
            { name: "Homeoplasmine", why: "French cult pharmacy balm" }
        ]
    },
    {
        name: "Pond's",
        aliases: ["ponds cream", "ponds clarant b3"],
        parent: "Unilever",
        sisters: [
            "Dove", "Simple", "Vaseline", "St. Ives"
        ],
        boycotts: [],
        alternatives: [
            { name: "Olay", why: "P&G-owned, affordable anti-aging" },
            { name: "Versed", why: "Clean, affordable skincare" },
            { name: "Good Molecules", why: "Minimal, effective ingredients" },
            { name: "The Inkey List", why: "Affordable actives" }
        ]
    },
    {
        name: "TIGI",
        aliases: ["bed head", "tigi bed head", "tigi catwalk"],
        parent: "Unilever",
        sisters: [
            "TRESemmé", "Dove", "Suave", "Clear"
        ],
        boycotts: [],
        alternatives: [
            { name: "Oribe", why: "Luxury indie salon brand" },
            { name: "R+Co", why: "Indie collective salon brand" },
            { name: "Amika", why: "Indie salon-quality" },
            { name: "IGK Hair", why: "NYC indie salon brand" }
        ]
    },
    {
        name: "Clear",
        aliases: ["clear scalp", "clear anti-dandruff"],
        parent: "Unilever",
        sisters: [
            "Dove", "TRESemmé", "Suave", "TIGI"
        ],
        boycotts: [],
        alternatives: [
            { name: "Briogeo Scalp Revival", why: "Clean scalp treatment, indie" },
            { name: "Act+Acre", why: "Clean scalp-focused haircare" },
            { name: "Jupiter", why: "Indie dandruff care, dermatologist-developed" },
            { name: "Natural Haircare", why: "Indie clean scalp solutions" }
        ]
    },
    {
        name: "Dermalogica",
        aliases: ["dermalogica skincare"],
        parent: "Unilever",
        sisters: [
            "Tatcha", "Kate Somerville", "REN", "Paula's Choice"
        ],
        boycotts: [],
        alternatives: [
            { name: "Dr. Dennis Gross", why: "Independent dermatologist-founded" },
            { name: "Dr. Barbara Sturm", why: "Independent luxury clinical skincare" },
            { name: "Drunk Elephant", why: "Shiseido-owned clean clinical brand" },
            { name: "Revision Skincare", why: "Independent professional skincare" }
        ]
    },
    {
        name: "Tatcha",
        aliases: ["tatcha skincare"],
        parent: "Unilever",
        sisters: [
            "Dermalogica", "Paula's Choice", "REN"
        ],
        boycotts: [],
        alternatives: [
            { name: "Omorovicza", why: "Independent Hungarian luxury skincare" },
            { name: "Biossance", why: "Clean, sustainable, squalane-focused" },
            { name: "Allies of Skin", why: "Indie clinical-grade skincare" },
            { name: "Farmacy Beauty", why: "Clean, farm-to-face ingredients" }
        ]
    },
    {
        name: "Paula's Choice",
        aliases: ["paulas choice"],
        parent: "Unilever",
        sisters: [
            "Dermalogica", "Tatcha", "REN"
        ],
        boycotts: [],
        alternatives: [
            { name: "The Ordinary", why: "DECIEM-owned, transparent affordable actives" },
            { name: "The Inkey List", why: "Transparent, affordable clinical ingredients" },
            { name: "Good Molecules", why: "Minimal ingredient lists, effective" },
            { name: "Naturium", why: "Susan Yara-founded, research-backed" }
        ]
    }
];

// Export for use in the app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = brandDatabase;
}
