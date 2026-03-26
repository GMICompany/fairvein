// Brand ownership database
// Data compiled from investment research (Estée Lauder boycott analysis, March 2026)

const brandDatabase = [
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
            "Smashbox", "Darphin", "Lab Series", "Prescriptives",
            "Aramis", "DKNY Fragrances", "Donna Karan", "Michael Kors Fragrances",
            "Tommy Hilfiger Fragrances", "Jo Malone London", "Le Labo",
            "Frédéric Malle", "RODIN", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Fenty Beauty (indie, Rihanna-owned)",
            "Rare Beauty (Selena Gomez, donates to mental health)",
            "Tower 28 (woman-owned, sensitive skin focus)",
            "Mented Cosmetics (Black woman-owned)",
            "KJH Brand (clean beauty)"
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
            "Smashbox", "Darphin", "Lab Series", "Prescriptives",
            "Aramis", "DKNY Fragrances", "Donna Karan", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "CeraVe (dermatologist-recommended, L'Oréal-owned but different ethics)",
            "The Ordinary (affordable, science-backed)",
            "Paula's Choice (indie, research-focused)",
            "Versed (clean, affordable skincare)"
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
            "Smashbox", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Ilia Beauty (clean, high-performance)",
            "RMS Beauty (organic, founder-led)",
            "Jones Road Beauty (Bobbi Brown's new indie line!)",
            "Kosas (clean, skin-focused makeup)"
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
            "Too Faced", "Aveda", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Augustinus Bader (luxury, science-backed)",
            "Tatcha (luxury, Japanese-inspired)",
            "Dr. Barbara Sturm (luxury, clean)",
            "Vintner's Daughter (ultra-luxury, indie)"
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
            "Too Faced", "Aveda", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Chanel Beauty (independent, family-owned)",
            "Hermès Beauty (independent, family-owned)",
            "YSL Beauty (L'Oréal-owned, different parent)"
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
            "Tom Ford Beauty", "Aveda", "Smashbox", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "ColourPop (affordable, indie, cruelty-free)",
            "BH Cosmetics (affordable, bold colors)",
            "Juvia's Place (Black woman-owned, vibrant)",
            "Milani (drugstore, high quality)"
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
            "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Rahua (sustainable, rainforest-friendly)",
            "Briogeo (clean, indie)",
            "Innersense Organic Beauty (certified organic)",
            "Act+Acre (scalp-focused, clean)"
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
            "MAC Cosmetics", "Aveda", "Origins", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Olaplex (bond-building, indie)",
            "Amika (indie, salon-quality)",
            "Verb (affordable, clean)",
            "Kristin Ess (affordable, Target-exclusive)"
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
            "MAC Cosmetics", "Clinique", "Aveda", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Youth to the People (clean, vegan)",
            "Herbivore Botanicals (natural, indie)",
            "Drunk Elephant (clean, science-backed)",
            "Biossance (sustainable, clean)"
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
            "MAC Cosmetics", "Too Faced", "Estée Lauder (flagship)"
        ],
        alternatives: [
            "Urban Decay (L'Oréal-owned, different parent)",
            "Morphe (indie, influencer-driven)",
            "e.l.f. Cosmetics (affordable, publicly traded but ethical)",
            "NYX (L'Oréal-owned, drugstore)"
        ]
    },
    {
        name: "Estée Lauder",
        aliases: ["estee lauder", "estée lauder"],
        parent: "Estée Lauder Companies (flagship)",
        boycotts: [
            { reason: "Palestine solidarity (BDS list)", since: "Oct 2023" },
            { reason: "Political spending ($2.5M to block progressive NYC candidate)", since: "Nov 2025" },
            { reason: "Epstein files connection (via board member Leon Black)", since: "Feb 2026" }
        ],
        sisters: [
            "MAC Cosmetics", "Clinique", "Bobbi Brown", "La Mer",
            "Tom Ford Beauty", "Too Faced", "Aveda", "Bumble and bumble",
            "Origins", "Smashbox", "Jo Malone", "Le Labo"
        ],
        alternatives: [
            "Chanel (independent)",
            "Lancôme (L'Oréal-owned, different parent)",
            "Shiseido (independent, Japanese)",
            "Charlotte Tilbury (Puig-owned, different parent)"
        ]
    }
];
