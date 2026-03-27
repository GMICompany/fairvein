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
    }
];

// Export for use in the app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = brandDatabase;
}
