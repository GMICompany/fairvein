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
            "Fenty Beauty (Indie, Rihanna-owned, inclusive shade ranges)",
            "Rare Beauty (Selena Gomez-owned, donates 1% to mental health)",
            "Tower 28 (Woman-owned, sensitive skin focus, clean ingredients)",
            "Mented Cosmetics (Black woman-owned, inclusive beauty)"
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
            "The Ordinary (Affordable, science-backed, transparent formulas)",
            "Versed (Clean, affordable skincare, Target-exclusive)",
            "Good Molecules (Effective, affordable, minimal ingredient lists)",
            "Naturium (Susan Yara-founded, research-backed ingredients)"
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
            "Jones Road Beauty (Bobbi Brown's NEW indie line! Clean, minimal)",
            "Ilia Beauty (Clean, high-performance color cosmetics)",
            "RMS Beauty (Organic, founder-led by Rose-Marie Swift)",
            "Kosas (Clean, skin-focused makeup with skincare benefits)"
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
            "Augustinus Bader (Luxury, science-backed, stem cell technology)",
            "Dr. Barbara Sturm (Luxury, clean, anti-inflammatory focus)",
            "Vintner's Daughter (Ultra-luxury indie, botanical formulas)",
            "True Botanicals (MADE SAFE certified luxury skincare)"
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
            "Chanel Beauty (Independent, family-owned luxury)",
            "Hermès Beauty (Independent, family-owned, artisanal)",
            "Byredo (Independent Swedish luxury fragrance & cosmetics)",
            "Nars (Shiseido-owned, different parent company)"
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
            "ColourPop (Affordable indie, cruelty-free, bold colors)",
            "BH Cosmetics (Affordable, playful, diverse color ranges)",
            "Juvia's Place (Black woman-owned, vibrant eyeshadows)",
            "Milani (Drugstore, family-owned, high quality)"
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
            "Rahua (Sustainable, rainforest alliance, plant-based)",
            "Innersense Organic Beauty (Certified organic, salon-quality)",
            "Act+Acre (Scalp-focused, clean, cold-processed)",
            "Josh Rosebrook (Organic, small-batch, herbalist-formulated)"
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
            "Olaplex (Bond-building technology, indie, salon-quality)",
            "Amika (Indie, salon-quality, fun branding)",
            "Verb (Affordable, clean, cruelty-free)",
            "Briogeo (Clean, indie, diverse hair types)"
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
            "Youth to the People (Vegan, superfood-based, clean)",
            "Herbivore Botanicals (Natural, indie, non-toxic ingredients)",
            "Biossance (Sustainable, clean, squalane-focused)",
            "Cocokind (Affordable, transparent, sustainable)"
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
            "e.l.f. Cosmetics (Affordable, publicly traded, cruelty-free)",
            "Morphe (Indie, influencer-driven, affordable pro makeup)",
            "Makeup by Mario (Mario Dedivanovic's indie line, pro quality)",
            "Danessa Myricks Beauty (Pro MUA-founded, inclusive, innovative)"
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
            "Chanel (Independent, family-owned luxury)",
            "Shiseido (Independent Japanese beauty conglomerate)",
            "Tatcha (Independent, Japanese-inspired skincare)",
            "Summer Fridays (Clean, indie, minimal skincare)"
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
            "e.l.f. Cosmetics (Affordable drugstore, cruelty-free, indie)",
            "Milani (Family-owned drugstore brand, quality formulas)",
            "Wet n Wild (Affordable, cruelty-free, indie)",
            "ColourPop (Affordable indie, wide color range)"
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
            "ColourPop (Affordable indie, cruelty-free, bold colors)",
            "BH Cosmetics (Affordable, playful, quality pigments)",
            "Makeup Revolution (UK indie, affordable, trend-driven)",
            "Profusion Cosmetics (Budget-friendly, cruelty-free)"
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
            "Melt Cosmetics (Indie, bold colors, cruelty-free)",
            "Sugarpill (Indie, vibrant pigments, vegan)",
            "Anastasia Beverly Hills (Family-owned, pro-quality)",
            "Huda Beauty (Founder-owned, innovative formulas)"
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
            "Chanel (Independent, family-owned luxury)",
            "Clarins (Independent family-owned French beauty)",
            "Sisley Paris (Independent luxury skincare)",
            "Cle de Peau (Shiseido luxury division, different parent)"
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
            "Acure (Affordable, clean, vegan, widely available)",
            "Andalou Naturals (Fruit stem cell science, affordable)",
            "Alba Botanica (Vegetarian, affordable drugstore clean)",
            "Pacifica (100% vegan, clean, affordable)"
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
            "Vanicream (Dermatologist-developed, fragrance-free, indie)",
            "Versed (Clean, affordable, dermatologist-tested)",
            "Good Molecules (Minimal ingredients, affordable, effective)",
            "The Inkey List (Transparent, affordable actives)"
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
            "Avène (Independent French thermal water skincare)",
            "Bioderma (Independent French dermatological brand)",
            "Eucerin (Beiersdorf-owned, dermatologist-recommended)",
            "Uriage (Independent French thermal water brand)"
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
            "Aesop (Independent Australian apothecary skincare)",
            "Le Labo (Independent NYC-based fragrance & skincare)",
            "Grown Alchemist (Independent Australian organic skincare)",
            "Malin + Goetz (Independent NYC apothecary brand)"
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
            "Ella+Mila (7-free, vegan, cruelty-free indie)",
            "Zoya (Long-wearing, 10-free, family-owned)",
            "Lights Lacquer (Indie, vegan, cruelty-free)",
            "Cirque Colors (NYC indie, 9-free, vegan)"
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
            "Olaplex (Indie bond-building technology)",
            "K18 (Indie biotech hair repair)",
            "JVN Hair (Jonathan Van Ness indie clean haircare)",
            "Amika (Indie salon-quality, cruelty-free)"
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
            "Verb (Clean, affordable salon brand)",
            "IGK Hair (Indie NYC salon brand)",
            "Kristin Ess (Affordable, clean, Target-exclusive)",
            "Pattern Beauty (Tracee Ellis Ross-owned, textured hair)"
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
            "Tom Ford Beauty (Estée Lauder-owned, luxury alternative)",
            "Chanel Beauty (Independent luxury)",
            "Guerlain (LVMH-owned luxury French brand)",
            "Dior Beauty (LVMH-owned luxury alternative)"
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
            "Chanel Beauty (Independent family-owned luxury)",
            "Guerlain (LVMH luxury French beauty house)",
            "Hermès Beauty (Independent luxury fragrance & color)",
            "Byredo (Independent Swedish luxury beauty)"
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
            "Jo Malone London (Estée Lauder-owned, different parent)",
            "Byredo (Independent Swedish luxury fragrance)",
            "Le Labo (Independent NYC fragrance house)",
            "Diptyque (Independent French luxury fragrance)"
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
            "Maison Francis Kurkdjian (LVMH-owned luxury fragrance house)",
            "Byredo (Independent Swedish luxury fragrance)",
            "Frederic Malle (Estée Lauder-owned, artisanal perfumer)",
            "Serge Lutens (Independent luxury niche fragrance)"
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
            "Gucci Beauty (Coty-owned luxury alternative)",
            "Prada Beauty (L'Oréal Luxe, but listed separately)",
            "Hermès Beauty (Independent luxury house)",
            "Chanel Beauty (Independent family-owned)"
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
            "e.l.f. Cosmetics (Affordable drugstore indie, cruelty-free)",
            "Milani (Family-owned, quality drugstore brand)",
            "NYX (L'Oréal-owned but different parent)",
            "Wet n Wild (Affordable indie, cruelty-free)"
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
            "e.l.f. Cosmetics (Affordable, cruelty-free indie)",
            "Makeup Revolution (UK indie, affordable, trend-driven)",
            "Catrice (European indie, affordable, quality)",
            "Essence (German indie, ultra-affordable, cruelty-free)"
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
            "Zoya (10-free, long-wearing, family-owned)",
            "Ella+Mila (7-free, vegan indie nail care)",
            "Pacifica (7-free, vegan, affordable)",
            "Lights Lacquer (Indie, vegan, cruelty-free)"
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
            "Zoya (10-free, professional-quality, indie)",
            "Ella+Mila (7-free, vegan, cruelty-free)",
            "Cirque Colors (NYC indie, 9-free, vegan)",
            "ILNP (Indie holographic specialist, 7-free)"
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
            "Makeup Revolution (UK indie, affordable, quality)",
            "Catrice (European indie, drugstore pricing)",
            "e.l.f. Cosmetics (Affordable indie, cruelty-free)",
            "Milani (Family-owned drugstore quality)"
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
            "Madison Reed (Clean hair color, indie, salon-quality)",
            "dpHUE (Clean, gloss + color, indie)",
            "Overtone (Indie, vegan, conditioning color)",
            "Arctic Fox (Vegan, cruelty-free, vibrant semi-permanent)"
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
            "Olaplex (Indie bond-building technology)",
            "Oribe (Luxury indie salon brand)",
            "R+Co (Indie collective salon brand)",
            "Virtue (Indie biotech hair repair)"
        ]
    },
    {
        name: "Adidas Fragrance",
        aliases: ["adidas cologne", "adidas body spray"],
        parent: "Coty",
        sisters: [
            "Calvin Klein", "Marc Jacobs Fragrance", "Gucci Fragrance"
        ],
        boycotts: [],
        alternatives: [
            "Herban Cowboy (natural, affordable men's fragrance)",
            "Every Man Jack (clean, affordable men's grooming)",
            "Bluemercury M-61 (clean, indie skincare brand)",
            "Malin + Goetz (indie unisex apothecary)"
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
            "Le Labo (Independent NYC fragrance house)",
            "Byredo (Independent Swedish luxury fragrance)",
            "D.S. & Durga (Independent Brooklyn perfume house)",
            "Commodity (Indie, minimalist, unisex scents)"
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
            "Byredo (Independent Swedish luxury fragrance)",
            "Le Labo (Independent artisanal fragrance)",
            "Diptyque (Independent French luxury fragrance)",
            "Maison Francis Kurkdjian (LVMH luxury perfumer)"
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
            "Hermès Fragrance (Independent luxury fragrance house)",
            "Byredo (Independent Swedish luxury)",
            "Maison Francis Kurkdjian (LVMH artisanal perfumer)",
            "Tom Ford Private Blend (Estée Lauder luxury fragrance)"
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
            "Boy Smells (Indie LA-based fragrance & candles)",
            "D.S. & Durga (Independent Brooklyn perfume house)",
            "Commodity (Indie minimalist fragrance)",
            "Dedcool (Indie layerable fragrances)"
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
            "Native (Clean, P&G-owned but different parent)",
            "Schmidt's Naturals (Natural deodorant, indie)",
            "Everyone Soap (EO Products, clean, affordable)",
            "Dr. Bronner's (Fair trade, organic, family-owned)"
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
            "Every Man Jack (Clean men's grooming, indie)",
            "Duke Cannon (Men's grooming, veteran-owned)",
            "Dr. Squatch (Natural men's soap, indie)",
            "Herban Cowboy (Natural men's grooming)"
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
            "Kristin Ess (Affordable clean haircare, Target-exclusive)",
            "Not Your Mother's (Indie, affordable, salon-quality)",
            "Briogeo (Clean, indie, diverse formulas)",
            "Verb (Clean salon brand, cruelty-free)"
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
            "Acure (Clean, affordable, vegan)",
            "Andalou Naturals (Fruit stem cell science, affordable)",
            "Kristin Ess (Affordable clean haircare)",
            "Love Beauty and Planet (Unilever-owned but vegan focus)"
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
            "Acure (Clean, affordable skincare)",
            "Pacifica (Vegan, cruelty-free, affordable)",
            "Alba Botanica (Vegetarian, natural ingredients)",
            "Andalou Naturals (Fruit stem cell technology)"
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
            "Versed (Clean, affordable, dermatologist-tested)",
            "Good Molecules (Minimal ingredients, effective)",
            "Acure (Clean, vegan, affordable)",
            "The Inkey List (Transparent actives, affordable)"
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
            "Aquaphor (Beiersdorf-owned healing ointment)",
            "Waxelene (Petroleum-free, organic alternative)",
            "CeraVe Healing Ointment (L'Oréal-owned dermatologist-recommended)",
            "Homeoplasmine (French cult pharmacy balm)"
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
            "Olay (P&G-owned, affordable anti-aging)",
            "Versed (Clean, affordable skincare)",
            "Good Molecules (Minimal, effective ingredients)",
            "The Inkey List (Affordable actives)"
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
            "Oribe (Luxury indie salon brand)",
            "R+Co (Indie collective salon brand)",
            "Amika (Indie salon-quality)",
            "IGK Hair (NYC indie salon brand)"
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
            "Briogeo Scalp Revival (Clean scalp treatment, indie)",
            "Act+Acre (Clean scalp-focused haircare)",
            "Jupiter (Indie dandruff care, dermatologist-developed)",
            "Natural Haircare (Indie clean scalp solutions)"
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
            "Dr. Dennis Gross (Independent dermatologist-founded)",
            "Dr. Barbara Sturm (Independent luxury clinical skincare)",
            "Drunk Elephant (Shiseido-owned clean clinical brand)",
            "Revision Skincare (Independent professional skincare)"
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
            "Omorovicza (Independent Hungarian luxury skincare)",
            "Biossance (Clean, sustainable, squalane-focused)",
            "Allies of Skin (Indie clinical-grade skincare)",
            "Farmacy Beauty (Clean, farm-to-face ingredients)"
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
            "The Ordinary (DECIEM-owned, transparent affordable actives)",
            "The Inkey List (Transparent, affordable clinical ingredients)",
            "Good Molecules (Minimal ingredient lists, effective)",
            "Naturium (Susan Yara-founded, research-backed)"
        ]
    },
    // ============================================
    // FASHION & APPAREL BRANDS (March 2026)
    // ============================================
    
    // INDITEX GROUP (Spain) - 6 brands
    {
        name: "Zara",
        aliases: ["zara home", "zarra"],
        parent: "Inditex",
        sisters: [
            "Pull&Bear", "Massimo Dutti", "Bershka", "Stradivarius", "Oysho"
        ],
        boycotts: [
            {
                reason: "Uyghur forced labor concerns in supply chain",
                since: "2020-07",
                sources: ["https://www.business-humanrights.org/en/latest-news/china-83-major-brands-implicated-in-report-on-forced-labour-of-ethnic-minorities-from-xinjiang-assigned-to-factories-across-provinces-includes-company-responses/"]
            }
        ],
        alternatives: [
            "Everlane (transparent pricing and ethical factories)",
            "Reformation (sustainable fast fashion alternative)",
            "Kotn (direct-to-consumer Egyptian cotton, transparent)",
            "Pact (fair trade organic cotton basics)"
        ]
    },
    {
        name: "Pull&Bear",
        aliases: ["pull and bear"],
        parent: "Inditex",
        sisters: [
            "Zara", "Massimo Dutti", "Bershka", "Stradivarius", "Oysho"
        ],
        boycotts: [],
        alternatives: [
            "Outerknown (Kelly Slater-founded sustainable surf brand)",
            "Tentree (Plants 10 trees per item, sustainable)",
            "Prana (Fair trade, organic, outdoor lifestyle)",
            "United By Blue (Removes 1 lb ocean plastic per product)"
        ]
    },
    {
        name: "Massimo Dutti",
        aliases: [],
        parent: "Inditex",
        sisters: [
            "Zara", "Pull&Bear", "Bershka", "Stradivarius", "Oysho"
        ],
        boycotts: [],
        alternatives: [
            "Cuyana (Fewer, better things philosophy)",
            "Everlane (Transparent costs, ethical production)",
            "Sezane (French indie with charitable foundation)",
            "Amour Vert (Sustainable luxury basics, plants trees)"
        ]
    },
    {
        name: "Bershka",
        aliases: [],
        parent: "Inditex",
        sisters: [
            "Zara", "Pull&Bear", "Massimo Dutti", "Stradivarius", "Oysho"
        ],
        boycotts: [],
        alternatives: [
            "Reformation (Sustainable trendy fashion)",
            "Girlfriend Collective (Recycled materials, transparent)",
            "Pangaia (Science-driven sustainable materials)",
            "Organic Basics (Certified organic, minimal basics)"
        ]
    },
    {
        name: "Stradivarius",
        aliases: [],
        parent: "Inditex",
        sisters: [
            "Zara", "Pull&Bear", "Massimo Dutti", "Bershka", "Oysho"
        ],
        boycotts: [],
        alternatives: [
            "Reformation (Sustainable fashion for Gen Z)",
            "Christy Dawn (Deadstock fabrics, farm-to-closet)",
            "For Days (Circular fashion, take-back program)",
            "Whimsy + Row (Small-batch sustainable LA brand)"
        ]
    },
    {
        name: "Oysho",
        aliases: [],
        parent: "Inditex",
        sisters: [
            "Zara", "Pull&Bear", "Massimo Dutti", "Bershka", "Stradivarius"
        ],
        boycotts: [],
        alternatives: [
            "Pact (Fair trade organic underwear & loungewear)",
            "Boody (Organic bamboo basics)",
            "Knickey (Organic cotton underwear, take-back program)",
            "Proclaim (Size-inclusive lingerie, body positive)"
        ]
    },

    // H&M GROUP (Sweden) - 6 brands
    {
        name: "H&M",
        aliases: ["hennes and mauritz"],
        parent: "H&M Group",
        sisters: [
            "COS", "& Other Stories", "Monki", "Weekday", "Arket"
        ],
        boycotts: [
            {
                reason: "Uyghur forced labor in supply chain",
                since: "2020-07",
                sources: ["https://www.business-humanrights.org/en/latest-news/china-83-major-brands-implicated-in-report-on-forced-labour-of-ethnic-minorities-from-xinjiang-assigned-to-factories-across-provinces-includes-company-responses/"]
            }
        ],
        alternatives: [
            "Pact (Fair trade organic cotton basics)",
            "Kotn (Transparent supply chain, Egyptian cotton)",
            "Everlane (Radical transparency in pricing)",
            "Quince (Affordable sustainable basics)"
        ]
    },
    {
        name: "COS",
        aliases: ["collection of style"],
        parent: "H&M Group",
        sisters: [
            "H&M", "& Other Stories", "Monki", "Weekday", "Arket"
        ],
        boycotts: [],
        alternatives: [
            "Everlane (Minimalist ethical basics)",
            "Cuyana (Fewer, better philosophy)",
            "Kotn (Transparent minimalist essentials)",
            "Amour Vert (Sustainable luxury basics)"
        ]
    },
    {
        name: "& Other Stories",
        aliases: ["and other stories", "other stories"],
        parent: "H&M Group",
        sisters: [
            "H&M", "COS", "Monki", "Weekday", "Arket"
        ],
        boycotts: [],
        alternatives: [
            "Sezane (French indie with charity arm)",
            "Reformation (Sustainable trendy pieces)",
            "Ganni (Independent Danish brand, sustainability focus)",
            "Madewell (Denim-focused, some sustainable lines)"
        ]
    },
    {
        name: "Monki",
        aliases: [],
        parent: "H&M Group",
        sisters: [
            "H&M", "COS", "& Other Stories", "Weekday", "Arket"
        ],
        boycotts: [],
        alternatives: [
            "Lucy & Yak (UK indie, playful sustainable fashion)",
            "Girlfriend Collective (Recycled materials, bright colors)",
            "Reformation (Fun sustainable pieces)",
            "Wray (NYC indie, small-batch colorful designs)"
        ]
    },
    {
        name: "Weekday",
        aliases: [],
        parent: "H&M Group",
        sisters: [
            "H&M", "COS", "& Other Stories", "Monki", "Arket"
        ],
        boycotts: [],
        alternatives: [
            "Nudie Jeans (Free repairs for life, organic denim)",
            "Outland Denim (Fights human trafficking, ethical denim)",
            "Reformation (Sustainable denim & trendy pieces)",
            "Boyish Jeans (100% recycled & sustainable denim)"
        ]
    },
    {
        name: "Arket",
        aliases: [],
        parent: "H&M Group",
        sisters: [
            "H&M", "COS", "& Other Stories", "Monki", "Weekday"
        ],
        boycotts: [],
        alternatives: [
            "Cuyana (Timeless minimalist pieces)",
            "Everlane (Transparent ethical basics)",
            "Kotn (Minimal sustainable essentials)",
            "Organic Basics (Certified organic minimalist)"
        ]
    },

    // FAST RETAILING (Japan) - 5 brands
    {
        name: "Uniqlo",
        aliases: [],
        parent: "Fast Retailing",
        sisters: [
            "GU", "Theory", "Helmut Lang", "J Brand"
        ],
        boycotts: [
            {
                reason: "Uyghur forced labor in Xinjiang cotton supply chain",
                since: "2021-01",
                sources: ["https://www.saveuighur.org/83-companies-linked-to-uighur-forced-labor/"]
            }
        ],
        alternatives: [
            "Pact (Fair trade organic cotton basics)",
            "Kotn (Transparent Egyptian cotton essentials)",
            "Asket (Swedish brand, lifetime guarantee, traceable)",
            "Entireworld (Scott Sternberg indie basics brand)"
        ]
    },
    {
        name: "GU",
        aliases: [],
        parent: "Fast Retailing",
        sisters: [
            "Uniqlo", "Theory", "Helmut Lang", "J Brand"
        ],
        boycotts: [],
        alternatives: [
            "Pact (Affordable fair trade basics)",
            "Quince (Affordable sustainable essentials)",
            "Everlane (Transparent affordable basics)",
            "Kotn (Affordable Egyptian cotton)"
        ]
    },
    {
        name: "Theory",
        aliases: [],
        parent: "Fast Retailing",
        sisters: [
            "Uniqlo", "GU", "Helmut Lang", "J Brand"
        ],
        boycotts: [],
        alternatives: [
            "Cuyana (Investment pieces, transparent)",
            "Everlane (Modern workwear, ethical)",
            "Amour Vert (Sustainable luxury basics)",
            "Eileen Fisher (Timeless sustainable pieces, take-back)"
        ]
    },
    {
        name: "Helmut Lang",
        aliases: [],
        parent: "Fast Retailing",
        sisters: [
            "Uniqlo", "GU", "Theory", "J Brand"
        ],
        boycotts: [],
        alternatives: [
            "Entireworld (Scott Sternberg's new indie brand)",
            "Baserange (Minimalist sustainable basics)",
            "The Frankie Shop (Independent minimalist retailer)",
            "Tibi (Amy Smilovic indie contemporary brand)"
        ]
    },
    {
        name: "J Brand",
        aliases: [],
        parent: "Fast Retailing",
        sisters: [
            "Uniqlo", "GU", "Theory", "Helmut Lang"
        ],
        boycotts: [],
        alternatives: [
            "Outland Denim (Fights trafficking, ethical production)",
            "Nudie Jeans (Free repairs, organic denim)",
            "Boyish Jeans (100% sustainable denim)",
            "Reformation Denim (Sustainable premium denim)"
        ]
    },

    // GAP INC (USA) - 4 brands
    {
        name: "Gap",
        aliases: ["gap inc"],
        parent: "Gap Inc.",
        sisters: [
            "Old Navy", "Banana Republic", "Athleta"
        ],
        boycotts: [],
        alternatives: [
            "Everlane (Transparent basics, ethical factories)",
            "Pact (Fair trade organic basics)",
            "Kotn (Transparent supply chain)",
            "Buck Mason (American-made quality basics)"
        ]
    },
    {
        name: "Old Navy",
        aliases: [],
        parent: "Gap Inc.",
        sisters: [
            "Gap", "Banana Republic", "Athleta"
        ],
        boycotts: [],
        alternatives: [
            "Pact (Affordable fair trade organic)",
            "Quince (Affordable sustainable basics)",
            "Primary (Affordable basics for families)",
            "Hanna Andersson (Quality kids clothes, buy-back)"
        ]
    },
    {
        name: "Banana Republic",
        aliases: [],
        parent: "Gap Inc.",
        sisters: [
            "Gap", "Old Navy", "Athleta"
        ],
        boycotts: [],
        alternatives: [
            "Cuyana (Investment workwear pieces)",
            "Everlane (Modern work essentials)",
            "M.M.LaFleur (Women's workwear, transparent)",
            "Amour Vert (Sustainable work-appropriate)"
        ]
    },
    {
        name: "Athleta",
        aliases: [],
        parent: "Gap Inc.",
        sisters: [
            "Gap", "Old Navy", "Banana Republic"
        ],
        boycotts: [],
        alternatives: [
            "Girlfriend Collective (Recycled materials, transparent)",
            "Outdoor Voices (Indie activewear brand)",
            "Patagonia (Activist outdoor & activewear)",
            "Oiselle (Women-run activewear brand)"
        ]
    },

    // VF CORPORATION (USA) - 6 brands
    {
        name: "The North Face",
        aliases: ["north face", "tnf"],
        parent: "VF Corporation",
        sisters: [
            "Vans", "Timberland", "Dickies", "Supreme", "Smartwool"
        ],
        boycotts: [
            {
                reason: "Uyghur forced labor in supply chain",
                since: "2020-07",
                sources: ["https://www.business-humanrights.org/en/latest-news/china-83-major-brands-implicated-in-report-on-forced-labour-of-ethnic-minorities-from-xinjiang-assigned-to-factories-across-provinces-includes-company-responses/"]
            }
        ],
        alternatives: [
            "Patagonia (1% for the Planet, activist brand, repair program)",
            "Cotopaxi (B Corp, colorful sustainable outdoor)",
            "REI Co-op (Member-owned outdoor gear)",
            "Arc'teryx (Independent high-performance outdoor)"
        ]
    },
    {
        name: "Vans",
        aliases: [],
        parent: "VF Corporation",
        sisters: [
            "The North Face", "Timberland", "Dickies", "Supreme"
        ],
        boycotts: [],
        alternatives: [
            "Cariuma (B Corp, sustainable sneakers, plants trees)",
            "Allbirds (Sustainable materials, carbon neutral)",
            "Thousand Fell (Fully recyclable sneakers)",
            "Nisolo (Ethical leather shoes, transparent)"
        ]
    },
    {
        name: "Timberland",
        aliases: [],
        parent: "VF Corporation",
        sisters: [
            "The North Face", "Vans", "Dickies", "Supreme"
        ],
        boycotts: [],
        alternatives: [
            "Nisolo (Ethical leather, transparent wages)",
            "Able (Fair wages, leather goods)",
            "Thursday Boot Company (Direct-to-consumer quality boots)",
            "Danner (American-made boots, repair program)"
        ]
    },
    {
        name: "Dickies",
        aliases: [],
        parent: "VF Corporation",
        sisters: [
            "The North Face", "Vans", "Timberland", "Supreme"
        ],
        boycotts: [],
        alternatives: [
            "Carhartt (Family-owned workwear, union-made options)",
            "Dovetail Workwear (Women-owned workwear brand)",
            "Kirrin Finch (Queer-owned menswear for all bodies)",
            "Wildfang (Tomboy style, ethical production)"
        ]
    },
    {
        name: "Supreme",
        aliases: [],
        parent: "VF Corporation",
        sisters: [
            "The North Face", "Vans", "Timberland", "Dickies"
        ],
        boycotts: [],
        alternatives: [
            "Noah (Brendon Babenzien sustainable streetwear)",
            "Entireworld (Scott Sternberg indie brand)",
            "Patagonia (Activist outdoor brand)",
            "Story Mfg (Hand-loomed sustainable clothing)"
        ]
    },
    {
        name: "Smartwool",
        aliases: [],
        parent: "VF Corporation",
        sisters: [
            "The North Face", "Timberland", "Icebreaker"
        ],
        boycotts: [],
        alternatives: [
            "Darn Tough (Vermont-made, lifetime guarantee)",
            "Icebreaker (Merino specialist, sustainable)",
            "Woolly Clothing Co (Sustainable merino basics)",
            "Tracksmith (Running-focused merino gear)"
        ]
    },

    // NIKE INC (USA) - 3 brands
    {
        name: "Nike",
        aliases: ["nike sportswear", "nike shoes", "nikey"],
        parent: "Nike Inc.",
        sisters: [
            "Converse", "Jordan Brand"
        ],
        boycotts: [
            {
                reason: "Uyghur forced labor concerns",
                since: "2020-07",
                sources: ["https://www.business-humanrights.org/en/latest-news/china-83-major-brands-implicated-in-report-on-forced-labour-of-ethnic-minorities-from-xinjiang-assigned-to-factories-across-provinces-includes-company-responses/"]
            }
        ],
        alternatives: [
            "Allbirds (Sustainable materials, carbon neutral)",
            "Cariuma (B Corp, plants 2 trees per pair)",
            "Veja (Fair trade, organic materials)",
            "On Running (Swiss performance brand, sustainability focus)"
        ]
    },
    {
        name: "Converse",
        aliases: ["converse chuck taylor", "chuck taylors"],
        parent: "Nike Inc.",
        sisters: [
            "Nike", "Jordan Brand"
        ],
        boycotts: [],
        alternatives: [
            "Cariuma (Sustainable canvas sneakers)",
            "Veja (Fair trade canvas shoes)",
            "SeaVees (California-made sustainable sneakers)",
            "Thousand Fell (Fully recyclable sneakers)"
        ]
    },
    {
        name: "Jordan Brand",
        aliases: ["air jordan", "jordan"],
        parent: "Nike Inc.",
        sisters: [
            "Nike", "Converse"
        ],
        boycotts: [],
        alternatives: [
            "New Balance (Some USA-made options available)",
            "On Running (Performance innovation, sustainable)",
            "Hoka (Independent performance brand)",
            "Allbirds (Sustainable performance shoes)"
        ]
    },

    // ADIDAS GROUP (Germany) - 2 brands
    {
        name: "Adidas",
        aliases: ["adidas originals", "addidas", "adiddas", "adidas shoes"],
        parent: "Adidas AG",
        sisters: [
            "Reebok"
        ],
        boycotts: [
            {
                reason: "Israel settlements sponsorship and ties",
                since: "2023-10",
                sources: ["https://bdsmovement.net/news/adidas-ends-sponsorship-israeli-football-association"]
            }
        ],
        alternatives: [
            "Veja (Fair trade sustainable sneakers)",
            "Allbirds (Carbon neutral, sustainable)",
            "Cariuma (B Corp certified, ethical)",
            "On Running (Swiss performance, sustainability focus)"
        ]
    },
    {
        name: "Reebok",
        aliases: ["rebok", "reebook", "reebok shoes"],
        parent: "Adidas AG",
        sisters: [
            "Adidas"
        ],
        boycotts: [],
        alternatives: [
            "New Balance (Some American-made options)",
            "Brooks (Running specialist, sustainability focus)",
            "On Running (Performance innovation)",
            "Hoka (Independent performance brand)"
        ]
    },

    // LVMH FASHION (France) - 6 brands
    {
        name: "Louis Vuitton",
        aliases: ["lv", "louis vuitton malletier"],
        parent: "LVMH",
        sisters: [
            "Dior", "Fendi", "Givenchy", "Marc Jacobs", "Kenzo", "Celine", "Loewe"
        ],
        boycotts: [],
        alternatives: [
            "Cuyana (Fewer, better luxury accessories)",
            "Mansur Gavriel (Indie luxury leather goods)",
            "Métier (Independent luxury handbags)",
            "Strathberry (Scottish indie luxury handbags)"
        ]
    },
    {
        name: "Dior",
        aliases: ["christian dior"],
        parent: "LVMH",
        sisters: [
            "Louis Vuitton", "Fendi", "Givenchy", "Marc Jacobs", "Kenzo"
        ],
        boycotts: [],
        alternatives: [
            "Chanel (Independent family-owned luxury)",
            "Hermès (Independent family-owned luxury)",
            "The Row (Olsen twins indie luxury minimalism)",
            "Khaite (NYC indie luxury brand)"
        ]
    },
    {
        name: "Fendi",
        aliases: [],
        parent: "LVMH",
        sisters: [
            "Louis Vuitton", "Dior", "Givenchy", "Marc Jacobs", "Kenzo"
        ],
        boycotts: [],
        alternatives: [
            "Mansur Gavriel (Indie luxury leather)",
            "The Row (Independent American luxury)",
            "Métier (Independent luxury handbags)",
            "Hunting Season (Artisan luxury bags)"
        ]
    },
    {
        name: "Givenchy",
        aliases: [],
        parent: "LVMH",
        sisters: [
            "Louis Vuitton", "Dior", "Fendi", "Marc Jacobs", "Kenzo"
        ],
        boycotts: [],
        alternatives: [
            "The Row (Independent minimalist luxury)",
            "Gabriela Hearst (Sustainable luxury fashion)",
            "Khaite (NYC indie luxury)",
            "Proenza Schouler (Independent NYC luxury)"
        ]
    },
    {
        name: "Marc Jacobs",
        aliases: ["marc by marc jacobs"],
        parent: "LVMH",
        sisters: [
            "Louis Vuitton", "Dior", "Fendi", "Givenchy", "Kenzo"
        ],
        boycotts: [],
        alternatives: [
            "Tory Burch (Independent American designer)",
            "Staud (LA indie contemporary brand)",
            "Mansur Gavriel (Indie NYC brand)",
            "Khaite (Independent NYC luxury)"
        ]
    },
    {
        name: "Kenzo",
        aliases: [],
        parent: "LVMH",
        sisters: [
            "Louis Vuitton", "Dior", "Fendi", "Givenchy", "Marc Jacobs"
        ],
        boycotts: [],
        alternatives: [
            "Ganni (Independent Danish brand)",
            "Stine Goya (Danish indie colorful fashion)",
            "Ulla Johnson (Independent NYC designer)",
            "Farm Rio (Brazilian indie colorful brand)"
        ]
    },

    // KERING (France) - 5 brands
    {
        name: "Gucci",
        aliases: [],
        parent: "Kering",
        sisters: [
            "Saint Laurent", "Balenciaga", "Alexander McQueen", "Bottega Veneta"
        ],
        boycotts: [],
        alternatives: [
            "Chanel (Independent family-owned luxury)",
            "Hermès (Independent family-owned luxury)",
            "The Row (Independent American luxury)",
            "Khaite (NYC indie luxury brand)"
        ]
    },
    {
        name: "Saint Laurent",
        aliases: ["ysl", "yves saint laurent"],
        parent: "Kering",
        sisters: [
            "Gucci", "Balenciaga", "Alexander McQueen", "Bottega Veneta"
        ],
        boycotts: [],
        alternatives: [
            "The Row (Independent minimalist luxury)",
            "Khaite (NYC indie luxury)",
            "Totême (Swedish indie minimalist luxury)",
            "Gabriela Hearst (Sustainable luxury)"
        ]
    },
    {
        name: "Balenciaga",
        aliases: [],
        parent: "Kering",
        sisters: [
            "Gucci", "Saint Laurent", "Alexander McQueen", "Bottega Veneta"
        ],
        boycotts: [],
        alternatives: [
            "Vetements (Independent disruptive fashion)",
            "Margiela (OTB Group experimental fashion)",
            "Acne Studios (Independent Swedish avant-garde)",
            "Our Legacy (Swedish indie contemporary)"
        ]
    },
    {
        name: "Alexander McQueen",
        aliases: ["mcqueen"],
        parent: "Kering",
        sisters: [
            "Gucci", "Saint Laurent", "Balenciaga", "Bottega Veneta"
        ],
        boycotts: [],
        alternatives: [
            "Rick Owens (Independent avant-garde designer)",
            "Comme des Garçons (Independent Japanese avant-garde)",
            "Iris van Herpen (Independent couture innovation)",
            "Noir Kei Ninomiya (Independent experimental fashion)"
        ]
    },
    {
        name: "Bottega Veneta",
        aliases: [],
        parent: "Kering",
        sisters: [
            "Gucci", "Saint Laurent", "Balenciaga", "Alexander McQueen"
        ],
        boycotts: [],
        alternatives: [
            "The Row (Independent quiet luxury)",
            "Métier (Independent luxury handbags)",
            "Hunting Season (Artisan luxury accessories)",
            "Mansur Gavriel (Indie luxury leather goods)"
        ]
    },

    // PVH CORP (USA) - 3 brands
    {
        name: "Calvin Klein",
        aliases: ["ck", "calvin klein jeans"],
        parent: "PVH Corp",
        sisters: [
            "Tommy Hilfiger", "Van Heusen"
        ],
        boycotts: [],
        alternatives: [
            "Everlane (Transparent minimalist basics)",
            "Cuyana (Minimalist investment pieces)",
            "Entireworld (Indie minimalist basics)",
            "Kotn (Transparent Egyptian cotton)"
        ]
    },
    {
        name: "Tommy Hilfiger",
        aliases: ["tommy"],
        parent: "PVH Corp",
        sisters: [
            "Calvin Klein", "Van Heusen"
        ],
        boycotts: [],
        alternatives: [
            "Gant (Independent American sportswear heritage)",
            "Polo Ralph Lauren (Independent American classic)",
            "Buck Mason (American-made quality basics)",
            "Todd Snyder (Independent American menswear)"
        ]
    },
    {
        name: "Van Heusen",
        aliases: [],
        parent: "PVH Corp",
        sisters: [
            "Calvin Klein", "Tommy Hilfiger"
        ],
        boycotts: [],
        alternatives: [
            "Bonobos (Indie menswear, better fit)",
            "Ministry of Supply (Performance workwear innovation)",
            "Buck Mason (American-made quality)",
            "Suitsupply (Independent Dutch menswear)"
        ]
    },

    // BDS-TARGETED BRANDS
    {
        name: "Puma",
        aliases: ["pooma", "puma shoes", "puma sportswear"],
        parent: "Puma SE",
        sisters: [],
        boycotts: [
            {
                reason: "Sponsorship of Israel Football Association (operates in illegal settlements)",
                since: "2018-06",
                sources: ["https://bdsmovement.net/news/puma-still-violating-palestinian-human-rights"]
            }
        ],
        alternatives: [
            "Veja (Fair trade sustainable sneakers)",
            "Allbirds (Carbon neutral, sustainable)",
            "Cariuma (B Corp ethical sneakers)",
            "New Balance (Some American-made options)"
        ]
    },

    // PROCTER & GAMBLE (P&G) - 18 beauty/personal care brands
    {
        name: "Olay",
        aliases: ["olay regenerist", "olay total effects"],
        parent: "Procter & Gamble",
        sisters: [
            "Pantene", "Head & Shoulders", "Herbal Essences", "SK-II",
            "Old Spice", "Secret", "Native", "Gillette", "Venus"
        ],
        boycotts: [],
        alternatives: [
            "CeraVe (L'Oréal-owned but dermatologist-backed)",
            "The Ordinary (Affordable, science-backed)",
            "Versed (Clean, affordable, Target-exclusive)",
            "Naturium (Susan Yara-founded indie)"
        ]
    },
    {
        name: "SK-II",
        aliases: ["skii", "sk2"],
        parent: "Procter & Gamble",
        sisters: [
            "Olay", "Pantene", "Head & Shoulders", "Herbal Essences",
            "Old Spice", "Secret", "Native"
        ],
        boycotts: [],
        alternatives: [
            "Tatcha (Independent Japanese luxury)",
            "Sulwhasoo (Amorepacific luxury K-beauty)",
            "Shiseido (Independent Japanese heritage)",
            "Drunk Elephant (Shiseido-owned clean clinical)"
        ]
    },
    {
        name: "Pantene",
        aliases: ["pantene pro-v"],
        parent: "Procter & Gamble",
        sisters: [
            "Head & Shoulders", "Herbal Essences", "Olay", "SK-II",
            "Old Spice", "Secret", "Native"
        ],
        boycotts: [],
        alternatives: [
            "Briogeo (Indie clean hair care)",
            "Amika (Indie salon-quality)",
            "Kristin Ess (Affordable indie at Target)",
            "Verb (Indie salon brand)"
        ]
    },
    {
        name: "Head & Shoulders",
        aliases: ["head and shoulders"],
        parent: "Procter & Gamble",
        sisters: [
            "Pantene", "Herbal Essences", "Olay", "SK-II",
            "Old Spice", "Secret", "Native"
        ],
        boycotts: [],
        alternatives: [
            "Briogeo Scalp Revival (Indie clean anti-dandruff)",
            "Jupiter (Direct-to-consumer dandruff specialist)",
            "Act+Acre (Scalp-focused indie)",
            "Neutrogena T/Gel (Johnson & Johnson, different parent)"
        ]
    },
    {
        name: "Herbal Essences",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Pantene", "Head & Shoulders", "Olay", "SK-II",
            "Old Spice", "Secret", "Native"
        ],
        boycotts: [],
        alternatives: [
            "Love Beauty and Planet (Unilever-owned but vegan)",
            "Acure (Independent clean beauty)",
            "Pacifica (Independent vegan beauty)",
            "Ethique (Plastic-free solid bars)"
        ]
    },
    {
        name: "Old Spice",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Secret", "Native", "Gillette", "Venus", "Olay",
            "Pantene", "Head & Shoulders"
        ],
        boycotts: [],
        alternatives: [
            "Native (P&G-owned but clean focus)",
            "Schmidt's (Unilever-owned natural deodorant)",
            "Dr. Squatch (Independent men's natural products)",
            "Routine (Canadian indie natural deodorant)"
        ]
    },
    {
        name: "Secret",
        aliases: ["secret clinical strength"],
        parent: "Procter & Gamble",
        sisters: [
            "Old Spice", "Native", "Olay", "Pantene",
            "Head & Shoulders", "Herbal Essences"
        ],
        boycotts: [],
        alternatives: [
            "Native (P&G-owned but cleaner ingredients)",
            "Lume (Indie whole-body deodorant)",
            "Megababe (Independent women-founded)",
            "Myro (Refillable indie deodorant)"
        ]
    },
    {
        name: "Native",
        aliases: ["native deodorant"],
        parent: "Procter & Gamble",
        sisters: [
            "Old Spice", "Secret", "Olay", "Pantene",
            "Head & Shoulders"
        ],
        boycotts: [],
        alternatives: [
            "Schmidt's (Unilever-owned natural alternative)",
            "Type:A (The Deodorant) (Independent clean)",
            "Routine (Canadian indie natural)",
            "Meow Meow Tweet (Small-batch natural)"
        ]
    },
    {
        name: "Gillette",
        aliases: ["gillette fusion", "gillette mach3"],
        parent: "Procter & Gamble",
        sisters: [
            "Venus", "Braun", "Old Spice", "Secret",
            "Olay", "Pantene"
        ],
        boycotts: [],
        alternatives: [
            "Harry's (Independent direct-to-consumer)",
            "Billie (Women-owned indie razors)",
            "Flamingo (Target indie shaving)",
            "Supply (Single-blade indie razors)"
        ]
    },
    {
        name: "Venus",
        aliases: ["gillette venus"],
        parent: "Procter & Gamble",
        sisters: [
            "Gillette", "Braun", "Old Spice", "Secret",
            "Olay", "Pantene"
        ],
        boycotts: [],
        alternatives: [
            "Billie (Women-owned direct-to-consumer)",
            "Flamingo (Target indie shaving brand)",
            "Athena Club (Subscription indie razors)",
            "Leaf Shave (Plastic-free safety razors)"
        ]
    },
    {
        name: "Braun",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Gillette", "Venus", "Old Spice", "Secret",
            "Olay", "Pantene"
        ],
        boycotts: [],
        alternatives: [
            "Philips Norelco (Philips-owned, different parent)",
            "Panasonic (Independent Japanese electronics)",
            "Wahl (Independent American grooming tools)",
            "Remington (Independent grooming appliances)"
        ]
    },
    {
        name: "Crest",
        aliases: ["crest 3d white", "crest pro-health"],
        parent: "Procter & Gamble",
        sisters: [
            "Oral-B", "Vicks", "Olay", "Pantene",
            "Head & Shoulders"
        ],
        boycotts: [],
        alternatives: [
            "Tom's of Maine (Colgate-owned natural alternative)",
            "Hello Products (Colgate-owned indie-style)",
            "Davids (Independent natural toothpaste)",
            "Bite (Plastic-free toothpaste bits)"
        ]
    },
    {
        name: "Oral-B",
        aliases: ["oral b"],
        parent: "Procter & Gamble",
        sisters: [
            "Crest", "Vicks", "Olay", "Pantene",
            "Head & Shoulders"
        ],
        boycotts: [],
        alternatives: [
            "Philips Sonicare (Philips-owned, different parent)",
            "Quip (Independent electric toothbrush)",
            "Burst (Direct-to-consumer sonic toothbrush)",
            "Goodwell Co (Sustainable indie toothbrush)"
        ]
    },
    {
        name: "Vicks",
        aliases: ["vicks vaporub", "vicks nyquil", "vicks dayquil"],
        parent: "Procter & Gamble",
        sisters: [
            "Crest", "Oral-B", "Olay", "Pantene",
            "Head & Shoulders"
        ],
        boycotts: [],
        alternatives: [
            "Genexa (Clean OTC medicine)",
            "Zarbee's (Johnson & Johnson naturals)",
            "Mucinex (Reckitt Benckiser, different parent)",
            "Homeopathic alternatives (Boiron, Hyland's)"
        ]
    },
    {
        name: "Aussie",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Pantene", "Head & Shoulders", "Herbal Essences",
            "Olay", "SK-II"
        ],
        boycotts: [],
        alternatives: [
            "Not Your Mother's (Revlon indie-style)",
            "Verb (Independent salon hair care)",
            "Kristin Ess (Indie at Target)",
            "Cake Beauty (Independent Canadian)"
        ]
    },
    {
        name: "Rejoice",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Pantene", "Head & Shoulders", "Herbal Essences",
            "Olay", "SK-II"
        ],
        boycotts: [],
        alternatives: [
            "Local Asian indie brands (varies by market)",
            "Mise en Scène (Korean indie hair care)",
            "Tsubaki (Shiseido-owned Japanese)",
            "LG Household & Health Care brands"
        ]
    },
    {
        name: "Safeguard",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Old Spice", "Olay", "Secret", "Native",
            "Pantene"
        ],
        boycotts: [],
        alternatives: [
            "Dr. Bronner's (Independent natural soap)",
            "Everyone (EO Products independent)",
            "Mrs. Meyer's (SC Johnson natural)",
            "Method (SC Johnson modern clean)"
        ]
    },
    {
        name: "Ivory",
        aliases: [],
        parent: "Procter & Gamble",
        sisters: [
            "Safeguard", "Old Spice", "Olay", "Secret",
            "Native"
        ],
        boycotts: [],
        alternatives: [
            "Dove (Unilever-owned but different parent)",
            "Basis (Beiersdorf-owned simple soap)",
            "Dr. Bronner's (Independent natural)",
            "Kirk's Castile (Independent heritage soap)"
        ]
    },

    // SHISEIDO (Japan) - 15 prestige brands
    {
        name: "NARS",
        aliases: ["nars cosmetics"],
        parent: "Shiseido",
        sisters: [
            "Clé de Peau Beauté", "Drunk Elephant", "IPSA", "Shiseido",
            "Elixir", "Anessa", "Dr. Dennis Gross", "Laura Mercier"
        ],
        boycotts: [],
        alternatives: [
            "Rare Beauty (Selena Gomez indie)",
            "Mented Cosmetics (Black woman-owned)",
            "Danessa Myricks (Independent makeup artistry)",
            "Kosas (Independent clean color)"
        ]
    },
    {
        name: "Clé de Peau Beauté",
        aliases: ["cle de peau", "cdp"],
        parent: "Shiseido",
        sisters: [
            "NARS", "Drunk Elephant", "IPSA", "Shiseido",
            "Elixir", "Anessa"
        ],
        boycotts: [],
        alternatives: [
            "La Prairie (Beiersdorf luxury, different parent)",
            "Sisley Paris (Independent French luxury)",
            "Chantecaille (Independent luxury)",
            "Augustinus Bader (Independent science luxury)"
        ]
    },
    {
        name: "Drunk Elephant",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "NARS", "Clé de Peau Beauté", "IPSA", "Shiseido",
            "Dr. Dennis Gross", "Laura Mercier"
        ],
        boycotts: [],
        alternatives: [
            "Youth to the People (Independent clean)",
            "Biossance (Independent clean squalane)",
            "Versed (Independent affordable clean)",
            "Cocokind (Independent accessible clean)"
        ]
    },
    {
        name: "Dr. Dennis Gross Skincare",
        aliases: ["dr dennis gross", "dennis gross"],
        parent: "Shiseido",
        sisters: [
            "Drunk Elephant", "NARS", "Clé de Peau Beauté",
            "IPSA", "Shiseido"
        ],
        boycotts: [],
        alternatives: [
            "Paula's Choice (Independent science-backed)",
            "The Ordinary (DECIEM affordable actives)",
            "SkinCeuticals (L'Oréal clinical, different parent)",
            "Murad (Independent dermatologist brand)"
        ]
    },
    {
        name: "IPSA",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "NARS", "Clé de Peau Beauté", "Drunk Elephant",
            "Shiseido", "Elixir", "Anessa"
        ],
        boycotts: [],
        alternatives: [
            "Hada Labo (Rohto independent Japanese)",
            "Curel (Kao independent Japanese)",
            "d program (Shiseido sister brand)",
            "Fancl (Independent Japanese additive-free)"
        ]
    },
    {
        name: "Shiseido",
        aliases: ["shiseido skincare"],
        parent: "Shiseido",
        sisters: [
            "NARS", "Clé de Peau Beauté", "Drunk Elephant",
            "IPSA", "Elixir", "Anessa", "The Ginza"
        ],
        boycotts: [],
        alternatives: [
            "SK-II (P&G luxury, different parent)",
            "Sulwhasoo (Amorepacific independent Korean)",
            "Tatcha (Independent Japanese-inspired)",
            "Sisley Paris (Independent French luxury)"
        ]
    },
    {
        name: "Elixir",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "Shiseido", "IPSA", "Anessa", "Haku",
            "Maquillage", "Integrate"
        ],
        boycotts: [],
        alternatives: [
            "Aestura (Amorepacific indie K-beauty)",
            "Laneige (Amorepacific K-beauty)",
            "Cosrx (Independent Korean)",
            "Pyunkang Yul (Independent Korean minimalist)"
        ]
    },
    {
        name: "Anessa",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "Shiseido", "Elixir", "IPSA", "Haku",
            "Maquillage"
        ],
        boycotts: [],
        alternatives: [
            "Supergoop! (Independent sunscreen specialist)",
            "Biore UV (Kao independent Japanese)",
            "Skin Aqua (Rohto independent Japanese)",
            "Black Girl Sunscreen (Black woman-owned indie)"
        ]
    },
    {
        name: "Laura Mercier",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "NARS", "Clé de Peau Beauté", "Drunk Elephant",
            "IPSA", "Shiseido"
        ],
        boycotts: [],
        alternatives: [
            "Charlotte Tilbury (Independent British luxury)",
            "Hourglass Cosmetics (Unilever-owned but different)",
            "RMS Beauty (Independent organic)",
            "Jones Road Beauty (Bobbi Brown's indie)"
        ]
    },
    {
        name: "BareMinerals",
        aliases: ["bare minerals", "bareminerals"],
        parent: "Shiseido",
        sisters: [
            "NARS", "Drunk Elephant", "Laura Mercier",
            "IPSA", "Shiseido"
        ],
        boycotts: [],
        alternatives: [
            "Ilia Beauty (Independent clean makeup)",
            "RMS Beauty (Independent organic)",
            "Tower 28 (Independent clean sensitive skin)",
            "Kosas (Independent clean color)"
        ]
    },
    {
        name: "Benefique",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "Shiseido", "Elixir", "IPSA", "The Ginza",
            "Anessa"
        ],
        boycotts: [],
        alternatives: [
            "Decorté (Kosé independent Japanese)",
            "Albion (Independent Japanese skincare)",
            "Pola (Independent Japanese luxury)",
            "Amorepacific (Independent Korean)"
        ]
    },
    {
        name: "The Ginza",
        aliases: ["ginza"],
        parent: "Shiseido",
        sisters: [
            "Shiseido", "Clé de Peau Beauté", "IPSA",
            "Benefique", "Elixir"
        ],
        boycotts: [],
        alternatives: [
            "Decorté (Kosé independent Japanese)",
            "Suqqu (Kosé luxury Japanese)",
            "Sensai (Kanebo luxury)",
            "Tatcha (Independent Japanese-inspired)"
        ]
    },
    {
        name: "Narciso Rodriguez",
        aliases: [],
        parent: "Shiseido",
        sisters: [
            "Issey Miyake Parfums", "Serge Lutens", "Zadig & Voltaire",
            "Tory Burch"
        ],
        boycotts: [],
        alternatives: [
            "Le Labo (Estée Lauder-owned niche)",
            "Byredo (Independent Swedish luxury)",
            "Diptyque (LVMH niche, different parent)",
            "Maison Francis Kurkdjian (LVMH niche)"
        ]
    },
    {
        name: "Issey Miyake Parfums",
        aliases: ["issey miyake"],
        parent: "Shiseido",
        sisters: [
            "Narciso Rodriguez", "Serge Lutens", "Zadig & Voltaire",
            "Tory Burch"
        ],
        boycotts: [],
        alternatives: [
            "Comme des Garçons (Independent Japanese niche)",
            "Byredo (Independent Swedish)",
            "Aesop (L'Oréal-owned but different parent)",
            "Diptyque (LVMH niche)"
        ]
    },
    {
        name: "Tory Burch",
        aliases: ["tory burch perfume"],
        parent: "Shiseido",
        sisters: [
            "Narciso Rodriguez", "Issey Miyake Parfums",
            "Serge Lutens", "Zadig & Voltaire"
        ],
        boycotts: [],
        alternatives: [
            "Carolina Herrera (Puig-owned, different parent)",
            "Michael Kors (Estée Lauder license)",
            "Marc Jacobs (Coty-owned, different parent)",
            "Kate Spade (Independent fashion fragrance)"
        ]
    },

    // ============================================
    // L'ORÉAL GROUP (additional brands)
    // ============================================
    {
        name: "IT Cosmetics",
        aliases: ["it cosmetics", "it beauty"],
        parent: "L'Oréal Group",
        sisters: [
            "Maybelline", "NYX", "Lancôme", "Urban Decay",
            "YSL Beauty", "CeraVe", "La Roche-Posay", "Garnier",
            "Kiehl's", "Giorgio Armani Beauty"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — L'Oréal operates factory in occupied territories)", since: "Oct 2023" },
            { reason: "Animal testing (Naturewatch Foundation boycott — tests where required by law)", since: "2013" }
        ],
        alternatives: [
            "Jones Road Beauty (Bobbi Brown's indie line, clean, inclusive coverage)",
            "Ilia Beauty (Clean, skin-first approach with buildable coverage)",
            "Kosas (Skincare-infused makeup, clean ingredients)",
            "Tower 28 (Sensitive skin focus, clean, woman-owned)"
        ]
    },

    // ============================================
    // COTY (additional brands)
    // ============================================
    {
        name: "Burberry Beauty",
        aliases: ["burberry beauty", "burberry makeup", "burberry fragrance"],
        parent: "Coty",
        sisters: [
            "CoverGirl", "Rimmel", "Sally Hansen", "OPI",
            "Hugo Boss", "Calvin Klein", "Marc Jacobs Fragrance",
            "Gucci Fragrance", "Max Factor"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — JAB Holdings/Reimann family funds pro-Israel institutions)", since: "Oct 2023" }
        ],
        alternatives: [
            "Charlotte Tilbury (Independent British luxury beauty)",
            "Victoria Beckham Beauty (Independent, clean luxury)",
            "Byredo (Swedish indie luxury, owned by Puig)",
            "Chanel Beauty (Independent, family-owned luxury)"
        ]
    },
    {
        name: "Hugo Boss",
        aliases: ["hugo boss", "boss fragrance", "hugo boss perfume", "boss bottled"],
        parent: "Coty",
        sisters: [
            "CoverGirl", "Rimmel", "Sally Hansen", "OPI",
            "Burberry Beauty", "Calvin Klein", "Marc Jacobs Fragrance",
            "Gucci Fragrance", "Max Factor"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — JAB Holdings/Reimann family funds pro-Israel institutions)", since: "Oct 2023" }
        ],
        alternatives: [
            "Byredo (Swedish indie luxury fragrance)",
            "Maison Francis Kurkdjian (Artisanal French perfumery)",
            "Le Labo (Indie, unisex, cult-favorite fragrances)",
            "D.S. & Durga (Brooklyn-based, independent niche house)"
        ]
    },

    // ============================================
    // LVMH (beauty brands)
    // ============================================
    {
        name: "Sephora",
        aliases: ["sephora", "sephora collection"],
        parent: "LVMH",
        sisters: [
            "Fenty Beauty", "Benefit", "Make Up For Ever",
            "Givenchy Beauty", "Dior Beauty", "Louis Vuitton",
            "Kenzo", "Guerlain", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Credo Beauty (Clean beauty retailer, indie-focused curation)",
            "The Detox Market (Clean beauty retailer, transparent standards)",
            "Thirteen Lune (BIPOC-founded beauty retailer)",
            "Follain (Clean beauty retailer with strict ingredient standards)"
        ]
    },
    {
        name: "Fenty Beauty",
        aliases: ["fenty beauty", "fenty skin", "fenty"],
        parent: "LVMH",
        sisters: [
            "Sephora", "Benefit", "Make Up For Ever",
            "Givenchy Beauty", "Dior Beauty", "Guerlain",
            "Kenzo", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Rare Beauty (Selena Gomez-owned, inclusive, donates 1% to mental health)",
            "Mented Cosmetics (Black woman-owned, inclusive shade ranges)",
            "Danessa Myricks Beauty (Indie, innovative, inclusive color cosmetics)",
            "Range Beauty (Clean, inclusive foundation shades for melanin-rich skin)"
        ]
    },
    {
        name: "Benefit",
        aliases: ["benefit cosmetics", "benefit"],
        parent: "LVMH",
        sisters: [
            "Sephora", "Fenty Beauty", "Make Up For Ever",
            "Givenchy Beauty", "Dior Beauty", "Guerlain",
            "Kenzo", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Glossier (Indie, minimal aesthetic, cult-favorite brow products)",
            "Patrick Ta Beauty (Indie, celeb-favorite, glow-focused)",
            "Saie (Clean beauty, everyday staples)",
            "Kosas (Skincare-meets-makeup, clean ingredients)"
        ]
    },
    {
        name: "Make Up For Ever",
        aliases: ["make up for ever", "mufe", "makeup for ever"],
        parent: "LVMH",
        sisters: [
            "Sephora", "Fenty Beauty", "Benefit",
            "Givenchy Beauty", "Dior Beauty", "Guerlain",
            "Kenzo", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Danessa Myricks Beauty (Pro-quality, innovative formulas, indie)",
            "Natasha Denona (High-pigment, artistry-focused, indie)",
            "Viseart (Pro-grade palettes, indie French brand)",
            "Mehron (Professional stage/film makeup, independent)"
        ]
    },
    {
        name: "Givenchy Beauty",
        aliases: ["givenchy beauty", "givenchy makeup", "givenchy fragrance", "givenchy perfume"],
        parent: "LVMH",
        sisters: [
            "Sephora", "Fenty Beauty", "Benefit",
            "Make Up For Ever", "Dior Beauty", "Guerlain",
            "Kenzo", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Charlotte Tilbury (Independent British luxury beauty)",
            "Chanel Beauty (Independent, family-owned luxury)",
            "Hermès Beauty (Independent, family-owned, artisanal)",
            "Westman Atelier (Clean luxury, founder-led)"
        ]
    },
    {
        name: "Dior Beauty",
        aliases: ["dior beauty", "dior makeup", "dior fragrance", "dior perfume", "dior lip"],
        parent: "LVMH",
        sisters: [
            "Sephora", "Fenty Beauty", "Benefit",
            "Make Up For Ever", "Givenchy Beauty", "Guerlain",
            "Kenzo", "Fresh"
        ],
        boycotts: [
            { reason: "Palestine solidarity (BDS — Bernard Arnault invests in Israeli companies)", since: "Oct 2023" },
            { reason: "Trump association (LVMH donated $1M to Trump inauguration fund)", since: "Jan 2025" }
        ],
        alternatives: [
            "Chanel Beauty (Independent, family-owned luxury)",
            "Hermès Beauty (Independent, family-owned, artisanal)",
            "Augustinus Bader (Luxury indie skincare, science-backed)",
            "Westman Atelier (Clean luxury, celebrity MUA-founded)"
        ]
    },

    // ============================================
    // JOHNSON & JOHNSON (Consumer Health / Kenvue)
    // ============================================
    {
        name: "Neutrogena",
        aliases: ["neutrogena"],
        parent: "Kenvue (formerly Johnson & Johnson)",
        sisters: ["Aveeno", "Clean & Clear", "RoC", "OGX", "Listerine", "Tylenol", "Band-Aid"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Aveeno",
        aliases: ["aveeno"],
        parent: "Kenvue (formerly Johnson & Johnson)",
        sisters: ["Neutrogena", "Clean & Clear", "RoC", "OGX", "Listerine"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Clean & Clear",
        aliases: ["clean and clear", "clean&clear"],
        parent: "Kenvue (formerly Johnson & Johnson)",
        sisters: ["Neutrogena", "Aveeno", "RoC", "OGX"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "OGX",
        aliases: ["ogx", "organix"],
        parent: "Kenvue (formerly Johnson & Johnson)",
        sisters: ["Neutrogena", "Aveeno", "Clean & Clear", "RoC"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "RoC",
        aliases: ["roc skincare", "roc"],
        parent: "Kenvue (formerly Johnson & Johnson)",
        sisters: ["Neutrogena", "Aveeno", "Clean & Clear", "OGX"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // AMOREPACIFIC (K-Beauty Conglomerate)
    // ============================================
    {
        name: "Innisfree",
        aliases: ["innisfree"],
        parent: "Amorepacific",
        sisters: ["Sulwhasoo", "Laneige", "Etude House", "Mamonde", "IOPE", "Hera"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Sulwhasoo",
        aliases: ["sulwhasoo"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Laneige", "Etude House", "Mamonde", "IOPE", "Hera"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Laneige",
        aliases: ["laneige"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Sulwhasoo", "Etude House", "Mamonde", "IOPE", "Hera"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Etude House",
        aliases: ["etude", "etude house"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Sulwhasoo", "Laneige", "Mamonde", "IOPE", "Hera"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Mamonde",
        aliases: ["mamonde"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Sulwhasoo", "Laneige", "Etude House", "IOPE"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Hera",
        aliases: ["hera"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Sulwhasoo", "Laneige", "Etude House", "IOPE", "Mamonde"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "IOPE",
        aliases: ["iope"],
        parent: "Amorepacific",
        sisters: ["Innisfree", "Sulwhasoo", "Laneige", "Etude House", "Mamonde", "Hera"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // LG HOUSEHOLD & HEALTH CARE (K-Beauty)
    // ============================================
    {
        name: "The Face Shop",
        aliases: ["the face shop", "face shop", "thefaceshop"],
        parent: "LG Household & Health Care",
        sisters: ["The History of Whoo", "Su:m37°", "Ohui", "belif", "CNP Laboratory", "VDL"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "belif",
        aliases: ["belif"],
        parent: "LG Household & Health Care",
        sisters: ["The Face Shop", "The History of Whoo", "Su:m37°", "Ohui", "CNP Laboratory", "VDL"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "VDL",
        aliases: ["vdl"],
        parent: "LG Household & Health Care",
        sisters: ["The Face Shop", "The History of Whoo", "Su:m37°", "Ohui", "belif", "CNP Laboratory"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "CNP Laboratory",
        aliases: ["cnp", "cnp laboratory"],
        parent: "LG Household & Health Care",
        sisters: ["The Face Shop", "The History of Whoo", "Su:m37°", "belif", "VDL"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // L'ORÉAL ADDITIONAL BRANDS
    // ============================================
    {
        name: "Vichy",
        aliases: ["vichy"],
        parent: "L'Oréal",
        sisters: ["La Roche-Posay", "CeraVe", "SkinCeuticals", "Garnier", "Maybelline", "NYX", "Lancôme", "Kiehl's"],
        boycotts: [
            { reason: "Palestine solidarity (BDS — L'Oréal operates in occupied territories)", since: "2010" }
        ],
        alternatives: [
            "Avène (Independent French thermal water skincare)",
            "Bioderma (Independent French dermatological brand)",
            "Eucerin (Beiersdorf-owned, dermatologist-recommended)",
            "Uriage (Independent French thermal water brand)"
        ]
    },
    {
        name: "SkinCeuticals",
        aliases: ["skinceuticals", "skin ceuticals"],
        parent: "L'Oréal",
        sisters: ["La Roche-Posay", "CeraVe", "Vichy", "Garnier", "Maybelline", "NYX", "Lancôme", "Kiehl's"],
        boycotts: [
            { reason: "Palestine solidarity (BDS — L'Oréal operates in occupied territories)", since: "2010" }
        ],
        alternatives: [
            "The Ordinary (Affordable, science-backed vitamin C & retinoids)",
            "Naturium (Research-backed actives, transparent formulations)",
            "Paula's Choice (Independent, evidence-based skincare)"
        ]
    },

    // ============================================
    // AESOP / L'ORÉAL (acquired 2023)
    // ============================================
    {
        name: "Aesop",
        aliases: ["aesop", "aēsop"],
        parent: "L'Oréal",
        sisters: ["La Roche-Posay", "CeraVe", "Kiehl's", "Lancôme", "NYX", "Maybelline", "Garnier"],
        boycotts: [
            { reason: "Palestine solidarity (BDS — L'Oréal operates in occupied territories)", since: "2010" }
        ],
        alternatives: [
            "Grown Alchemist (Independent Australian botanical skincare)",
            "Byredo (Independent Swedish luxury brand)",
            "Le Labo (Estée Lauder-owned — check separately)",
            "Malin+Goetz (Independent, apothecary-style skincare)"
        ]
    },

    // ============================================
    // INDEPENDENT K-BEAUTY BRANDS
    // ============================================
    {
        name: "Skin1004",
        aliases: ["skin1004", "skin 1004"],
        parent: "Independent (Skin1004 Co., Ltd — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "COSRX",
        aliases: ["cosrx"],
        parent: "Independent (COSRX Inc. — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Beauty of Joseon",
        aliases: ["beauty of joseon", "boj"],
        parent: "Independent (Beauty of Joseon — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Torriden",
        aliases: ["torriden"],
        parent: "Independent (Torriden — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Anua",
        aliases: ["anua"],
        parent: "Independent (Anua — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Missha",
        aliases: ["missha"],
        parent: "Able C&C (South Korea)",
        sisters: ["A'Pieu"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "A'Pieu",
        aliases: ["apieu", "a'pieu"],
        parent: "Able C&C (South Korea)",
        sisters: ["Missha"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Klairs",
        aliases: ["klairs", "dear klairs"],
        parent: "Independent (Wishcompany — South Korea)",
        sisters: ["By Wishtrend"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "By Wishtrend",
        aliases: ["by wishtrend", "wishtrend"],
        parent: "Independent (Wishcompany — South Korea)",
        sisters: ["Klairs"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Some By Mi",
        aliases: ["some by mi", "somebymi"],
        parent: "Independent (Some By Mi — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Banila Co",
        aliases: ["banila co", "banila"],
        parent: "Independent (Banila Co — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Purito",
        aliases: ["purito"],
        parent: "Independent (Purito — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Heimish",
        aliases: ["heimish"],
        parent: "Independent (Heimish — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Isntree",
        aliases: ["isntree"],
        parent: "Independent (Isntree — South Korea)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // INDEPENDENT WESTERN BRANDS (popular)
    // ============================================
    {
        name: "The Ordinary",
        aliases: ["the ordinary", "ordinary"],
        parent: "Independent (DECIEM / Estée Lauder minority stake)",
        sisters: ["NIOD", "The Chemistry Brand"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Fenty Beauty",
        aliases: ["fenty", "fenty beauty", "fenty skin"],
        parent: "LVMH (Kendo Brands)",
        sisters: ["Sephora", "Benefit", "Make Up For Ever", "KVD Vegan Beauty"],
        boycotts: [
            { reason: "Palestine solidarity (BDS — LVMH/Bernard Arnault invests in Israeli companies)", since: "Oct 2023" }
        ],
        alternatives: [
            "Juvia's Place (Black-owned, inclusive shade ranges)",
            "Danessa Myricks (BIPOC-owned, innovative formulas)",
            "Mented Cosmetics (Black woman-owned, inclusive beauty)"
        ]
    },
    {
        name: "Rare Beauty",
        aliases: ["rare beauty"],
        parent: "Independent (Selena Gomez — minority Sephora distribution deal)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Tower 28",
        aliases: ["tower 28", "tower28"],
        parent: "Independent (woman-owned, clean beauty)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Kosas",
        aliases: ["kosas"],
        parent: "Independent (woman-founded, clean beauty)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "ILIA",
        aliases: ["ilia", "ilia beauty"],
        parent: "Independent (clean beauty, B Corp certified)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Glossier",
        aliases: ["glossier"],
        parent: "Independent (Emily Weiss-founded)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "e.l.f. Cosmetics",
        aliases: ["elf", "e.l.f.", "elf cosmetics", "e.l.f. cosmetics"],
        parent: "Independent (publicly traded, e.l.f. Beauty Inc.)",
        sisters: ["Well People", "Keys Soulcare"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Thrive Causemetics",
        aliases: ["thrive", "thrive causemetics"],
        parent: "Independent (social impact brand, donates to women in need)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Mented Cosmetics",
        aliases: ["mented", "mented cosmetics"],
        parent: "Independent (Black woman-owned, inclusive beauty)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Juvia's Place",
        aliases: ["juvias place", "juvia's place"],
        parent: "Independent (Nigerian-owned, inclusive beauty)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Danessa Myricks",
        aliases: ["danessa myricks"],
        parent: "Independent (BIPOC-owned, innovative formulas)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Milk Makeup",
        aliases: ["milk makeup", "milk"],
        parent: "Independent (vegan, clean beauty)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Honest Beauty",
        aliases: ["honest beauty", "honest"],
        parent: "Independent (The Honest Company — Jessica Alba-founded)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Versed",
        aliases: ["versed", "versed skincare"],
        parent: "Independent (clean skincare, Target-exclusive)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Good Molecules",
        aliases: ["good molecules"],
        parent: "Independent (Beautylish)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Naturium",
        aliases: ["naturium"],
        parent: "Independent (Susan Yara-founded, science-backed)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Dr. Bronner's",
        aliases: ["dr bronner's", "dr bronners", "dr. bronner"],
        parent: "Independent (family-owned since 1948, fair trade, B Corp)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // BEIERSDORF
    // ============================================
    {
        name: "Nivea",
        aliases: ["nivea"],
        parent: "Beiersdorf",
        sisters: ["Eucerin", "La Prairie", "Aquaphor", "Coppertone"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Eucerin",
        aliases: ["eucerin"],
        parent: "Beiersdorf",
        sisters: ["Nivea", "La Prairie", "Aquaphor", "Coppertone"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "La Prairie",
        aliases: ["la prairie"],
        parent: "Beiersdorf",
        sisters: ["Nivea", "Eucerin", "Aquaphor", "Coppertone"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Aquaphor",
        aliases: ["aquaphor"],
        parent: "Beiersdorf",
        sisters: ["Nivea", "Eucerin", "La Prairie", "Coppertone"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Coppertone",
        aliases: ["coppertone"],
        parent: "Beiersdorf",
        sisters: ["Nivea", "Eucerin", "La Prairie", "Aquaphor"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // COLGATE-PALMOLIVE
    // ============================================
    {
        name: "Colgate",
        aliases: ["colgate"],
        parent: "Colgate-Palmolive",
        sisters: ["Palmolive", "Speed Stick", "Tom's of Maine", "Hello"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Palmolive",
        aliases: ["palmolive"],
        parent: "Colgate-Palmolive",
        sisters: ["Colgate", "Speed Stick", "Tom's of Maine"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // HENKEL
    // ============================================
    {
        name: "Schwarzkopf",
        aliases: ["schwarzkopf"],
        parent: "Henkel",
        sisters: ["got2b", "Dial", "Persil"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "got2b",
        aliases: ["got2b"],
        parent: "Henkel",
        sisters: ["Schwarzkopf", "Dial", "Persil"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // INDEPENDENT FRENCH DERMA (not L'Oréal)
    // ============================================
    {
        name: "Bioderma",
        aliases: ["bioderma"],
        parent: "Independent (NAOS Group — France)",
        sisters: ["Institut Esthederm", "Etat Pur"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Avène",
        aliases: ["avene", "avène", "eau thermale avene"],
        parent: "Independent (Pierre Fabre — France)",
        sisters: ["Ducray", "Klorane", "A-Derma"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Uriage",
        aliases: ["uriage"],
        parent: "Independent (Uriage Dermatological Laboratories — France)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // REVLON
    // ============================================
    {
        name: "Revlon",
        aliases: ["revlon"],
        parent: "Revlon Inc.",
        sisters: ["Elizabeth Arden", "Almay", "American Crew", "Mitchum"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Elizabeth Arden",
        aliases: ["elizabeth arden"],
        parent: "Revlon Inc.",
        sisters: ["Revlon", "Almay", "American Crew"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Almay",
        aliases: ["almay"],
        parent: "Revlon Inc.",
        sisters: ["Revlon", "Elizabeth Arden", "American Crew"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // CHURCH & DWIGHT
    // ============================================
    {
        name: "Batiste",
        aliases: ["batiste"],
        parent: "Church & Dwight",
        sisters: ["OxiClean", "Arm & Hammer", "Nair", "First Response"],
        boycotts: [],
        alternatives: []
    },

    // ============================================
    // INDEPENDENT J-BEAUTY
    // ============================================
    {
        name: "Canmake",
        aliases: ["canmake"],
        parent: "Independent (IDA Laboratories — Japan)",
        sisters: [],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Biore",
        aliases: ["biore", "bioré"],
        parent: "Kao Corporation (Japan)",
        sisters: ["Jergens", "John Frieda", "Curel"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Hada Labo",
        aliases: ["hada labo", "hadalabo"],
        parent: "Rohto Pharmaceutical (Japan)",
        sisters: ["Mentholatum", "Melano CC"],
        boycotts: [],
        alternatives: []
    },
    {
        name: "Melano CC",
        aliases: ["melano cc"],
        parent: "Rohto Pharmaceutical (Japan)",
        sisters: ["Hada Labo", "Mentholatum"],
        boycotts: [],
        alternatives: []
    }
];

// Export for use in the app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = brandDatabase;
}
