// FairVein Brand Database — extracted from data.js for Chrome Extension
// 141 brands, optimized for fast matching

const FV_BRANDS = [
  // ESTÉE LAUDER COMPANIES
  { name: "MAC Cosmetics", aliases: ["mac", "m.a.c", "m.a.c."], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Fenty Beauty", "Rare Beauty", "Tower 28", "Mented Cosmetics"], minLen: 3 },
  { name: "Clinique", aliases: ["clinique"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["The Ordinary", "Versed", "Good Molecules", "Naturium"], minLen: 7 },
  { name: "Bobbi Brown", aliases: ["bobbi brown"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Jones Road Beauty", "Ilia Beauty", "RMS Beauty", "Kosas"], minLen: 5 },
  { name: "La Mer", aliases: ["la mer", "lamer"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Augustinus Bader", "Dr. Barbara Sturm", "Vintner's Daughter", "True Botanicals"], minLen: 5 },
  { name: "Tom Ford Beauty", aliases: ["tom ford"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Chanel Beauty", "Hermès Beauty", "Byredo", "Nars"], minLen: 8 },
  { name: "Too Faced", aliases: ["too faced", "toofaced"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["ColourPop", "BH Cosmetics", "Juvia's Place", "Milani"], minLen: 8 },
  { name: "Aveda", aliases: ["aveda"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Rahua", "Innersense", "Act+Acre", "Josh Rosebrook"], minLen: 5 },
  { name: "Bumble and bumble", aliases: ["bumble and bumble", "bumble", "bb hair"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Olaplex", "Amika", "Verb", "Briogeo"], minLen: 6 },
  { name: "Origins", aliases: ["origins"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Youth to the People", "Herbivore", "Biossance", "Cocokind"], minLen: 7 },
  { name: "Smashbox", aliases: ["smashbox"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["e.l.f.", "Morphe", "Makeup by Mario", "Danessa Myricks"], minLen: 8 },
  { name: "Estée Lauder", aliases: ["estee lauder", "estée lauder"], parent: "Estée Lauder Companies", boycotts: 3, boycottReasons: ["Palestine solidarity (BDS)", "Political spending ($2.5M)", "Epstein files connection"], alternatives: ["Chanel", "Shiseido", "Tatcha", "Summer Fridays"], minLen: 6 },

  // L'ORÉAL GROUP
  { name: "Maybelline", aliases: ["maybelline new york", "maybelline ny"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["e.l.f.", "Milani", "Wet n Wild", "ColourPop"], minLen: 9 },
  { name: "NYX", aliases: ["nyx cosmetics", "nyx professional makeup"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["ColourPop", "BH Cosmetics", "Makeup Revolution", "Profusion"], minLen: 3 },
  { name: "Urban Decay", aliases: ["ud", "urban decay cosmetics"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Melt Cosmetics", "Sugarpill", "Anastasia Beverly Hills", "Huda Beauty"], minLen: 2 },
  { name: "Lancôme", aliases: ["lancome"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Chanel", "Clarins", "Sisley Paris", "Clé de Peau"], minLen: 7 },
  { name: "Garnier", aliases: ["garnier fructis", "garnier skinactive"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Acure", "Andalou Naturals", "Alba Botanica", "Pacifica"], minLen: 7 },
  { name: "CeraVe", aliases: ["cerave"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Vanicream", "Versed", "Good Molecules", "The Inkey List"], minLen: 6 },
  { name: "La Roche-Posay", aliases: ["la roche posay", "laroche posay"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Avène", "Bioderma", "Eucerin", "Uriage"], minLen: 8 },
  { name: "Kiehl's", aliases: ["kiehls"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Aesop", "Le Labo", "Grown Alchemist", "Malin + Goetz"], minLen: 6 },
  { name: "Essie", aliases: ["essie nail polish"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Ella+Mila", "Zoya", "Lights Lacquer", "Cirque Colors"], minLen: 5 },
  { name: "Redken", aliases: ["redken 5th avenue"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Olaplex", "K18", "JVN Hair", "Amika"], minLen: 6 },
  { name: "Matrix", aliases: ["matrix essentials", "matrix haircare"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Verb", "IGK Hair", "Kristin Ess", "Pattern Beauty"], minLen: 6 },
  { name: "Giorgio Armani Beauty", aliases: ["armani beauty"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Chanel Beauty", "Guerlain", "Dior Beauty"], minLen: 6 },
  { name: "YSL Beauty", aliases: ["yves saint laurent beauty", "ysl beauté"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Chanel Beauty", "Guerlain", "Hermès Beauty", "Byredo"], minLen: 3 },
  { name: "Ralph Lauren Fragrances", aliases: ["ralph lauren polo", "ralph lauren romance"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Jo Malone", "Byredo", "Le Labo", "Diptyque"], minLen: 12 },
  { name: "Viktor & Rolf", aliases: ["viktor and rolf", "flowerbomb"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Maison Francis Kurkdjian", "Byredo", "Frederic Malle", "Serge Lutens"], minLen: 10 },
  { name: "Valentino", aliases: ["valentino beauty", "valentino fragrances"], parent: "L'Oréal", boycotts: 0, boycottReasons: [], alternatives: ["Gucci Beauty", "Hermès Beauty", "Chanel Beauty"], minLen: 9 },
  { name: "IT Cosmetics", aliases: ["it cosmetics", "it beauty"], parent: "L'Oréal", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Animal testing"], alternatives: ["Jones Road Beauty", "Ilia Beauty", "Kosas", "Tower 28"], minLen: 5 },

  // COTY
  { name: "CoverGirl", aliases: ["covergirl"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["e.l.f.", "Milani", "NYX", "Wet n Wild"], minLen: 9 },
  { name: "Rimmel", aliases: ["rimmel london"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["e.l.f.", "Makeup Revolution", "Catrice", "Essence"], minLen: 6 },
  { name: "Sally Hansen", aliases: ["sally hansen nails"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Zoya", "Ella+Mila", "Pacifica", "Lights Lacquer"], minLen: 11 },
  { name: "OPI", aliases: ["opi nail lacquer", "opi products"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Zoya", "Ella+Mila", "Cirque Colors", "ILNP"], minLen: 3 },
  { name: "Max Factor", aliases: ["maxfactor"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Makeup Revolution", "Catrice", "e.l.f.", "Milani"], minLen: 9 },
  { name: "Clairol", aliases: ["clairol hair color", "nice n easy"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Madison Reed", "dpHUE", "Overtone", "Arctic Fox"], minLen: 7 },
  { name: "Wella", aliases: ["wella professionals", "wella color"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Olaplex", "Oribe", "R+Co", "Virtue"], minLen: 5 },
  { name: "Adidas Fragrance", aliases: ["adidas cologne", "adidas body spray"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Every Man Jack", "Malin + Goetz"], minLen: 6 },
  { name: "Calvin Klein", aliases: ["ck one", "calvin klein fragrance"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Le Labo", "Byredo", "D.S. & Durga", "Commodity"], minLen: 2 },
  { name: "Chloé", aliases: ["chloe perfume", "chloe fragrance"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Byredo", "Le Labo", "Diptyque", "MFK"], minLen: 5 },
  { name: "Gucci Fragrance", aliases: ["gucci perfume", "gucci guilty", "gucci bloom"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Hermès", "Byredo", "MFK", "Tom Ford Private Blend"], minLen: 5 },
  { name: "Marc Jacobs Fragrance", aliases: ["marc jacobs daisy", "marc jacobs perfume"], parent: "Coty", boycotts: 0, boycottReasons: [], alternatives: ["Boy Smells", "D.S. & Durga", "Commodity", "Dedcool"], minLen: 11 },
  { name: "Burberry Beauty", aliases: ["burberry beauty", "burberry makeup", "burberry fragrance"], parent: "Coty", boycotts: 1, boycottReasons: ["Palestine solidarity (BDS)"], alternatives: ["Charlotte Tilbury", "Victoria Beckham Beauty", "Byredo", "Chanel Beauty"], minLen: 8 },
  { name: "Hugo Boss", aliases: ["hugo boss", "boss fragrance", "boss bottled"], parent: "Coty", boycotts: 1, boycottReasons: ["Palestine solidarity (BDS)"], alternatives: ["Byredo", "MFK", "Le Labo", "D.S. & Durga"], minLen: 4 },

  // UNILEVER
  { name: "Dove", aliases: ["dove soap", "dove body wash", "dove deodorant"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Native", "Schmidt's", "Dr. Bronner's"], minLen: 4 },
  { name: "Axe", aliases: ["lynx", "axe body spray"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Every Man Jack", "Duke Cannon", "Dr. Squatch"], minLen: 3 },
  { name: "TRESemmé", aliases: ["tresemme"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Kristin Ess", "Not Your Mother's", "Briogeo", "Verb"], minLen: 8 },
  { name: "Suave", aliases: ["suave professionals"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Acure", "Andalou Naturals", "Kristin Ess"], minLen: 5 },
  { name: "St. Ives", aliases: ["st ives apricot scrub", "st ives"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Acure", "Pacifica", "Alba Botanica", "Andalou"], minLen: 7 },
  { name: "Simple", aliases: ["simple skincare", "simple micellar water"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Versed", "Good Molecules", "Acure", "The Inkey List"], minLen: 6 },
  { name: "Vaseline", aliases: ["vaseline petroleum jelly"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Aquaphor", "Waxelene", "CeraVe Healing Ointment"], minLen: 8 },
  { name: "Pond's", aliases: ["ponds cream", "ponds clarant b3"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Olay", "Versed", "Good Molecules", "The Inkey List"], minLen: 5 },
  { name: "TIGI", aliases: ["bed head", "tigi bed head", "tigi catwalk"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Oribe", "R+Co", "Amika", "IGK Hair"], minLen: 4 },
  { name: "Clear", aliases: ["clear scalp", "clear anti-dandruff"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Briogeo Scalp Revival", "Act+Acre", "Jupiter"], minLen: 5 },
  { name: "Dermalogica", aliases: ["dermalogica skincare"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Dr. Dennis Gross", "Dr. Barbara Sturm", "Drunk Elephant", "Revision"], minLen: 11 },
  { name: "Tatcha", aliases: ["tatcha skincare"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["Omorovicza", "Biossance", "Allies of Skin", "Farmacy"], minLen: 6 },
  { name: "Paula's Choice", aliases: ["paulas choice"], parent: "Unilever", boycotts: 0, boycottReasons: [], alternatives: ["The Ordinary", "The Inkey List", "Good Molecules", "Naturium"], minLen: 6 },

  // FASHION — INDITEX
  { name: "Zara", aliases: ["zara home"], parent: "Inditex", boycotts: 1, boycottReasons: ["Uyghur forced labor"], alternatives: ["Everlane", "Reformation", "Kotn", "Pact"], minLen: 4 },
  { name: "Pull&Bear", aliases: ["pull and bear"], parent: "Inditex", boycotts: 0, boycottReasons: [], alternatives: ["Outerknown", "Tentree", "Prana", "United By Blue"], minLen: 9 },
  { name: "Massimo Dutti", aliases: [], parent: "Inditex", boycotts: 0, boycottReasons: [], alternatives: ["Cuyana", "Everlane", "Sezane", "Amour Vert"], minLen: 7 },
  { name: "Bershka", aliases: [], parent: "Inditex", boycotts: 0, boycottReasons: [], alternatives: ["Reformation", "Girlfriend Collective", "Pangaia", "Organic Basics"], minLen: 7 },
  { name: "Stradivarius", aliases: [], parent: "Inditex", boycotts: 0, boycottReasons: [], alternatives: ["Reformation", "Christy Dawn", "For Days", "Whimsy + Row"], minLen: 12 },
  { name: "Oysho", aliases: [], parent: "Inditex", boycotts: 0, boycottReasons: [], alternatives: ["Pact", "Boody", "Knickey", "Proclaim"], minLen: 5 },

  // H&M GROUP
  { name: "H&M", aliases: ["hennes and mauritz"], parent: "H&M Group", boycotts: 1, boycottReasons: ["Uyghur forced labor"], alternatives: ["Pact", "Kotn", "Everlane", "Quince"], minLen: 3 },
  { name: "COS", aliases: ["collection of style"], parent: "H&M Group", boycotts: 0, boycottReasons: [], alternatives: ["Everlane", "Cuyana", "Kotn", "Amour Vert"], minLen: 3 },
  { name: "& Other Stories", aliases: ["and other stories", "other stories"], parent: "H&M Group", boycotts: 0, boycottReasons: [], alternatives: ["Sezane", "Reformation", "Ganni", "Madewell"], minLen: 13 },
  { name: "Monki", aliases: [], parent: "H&M Group", boycotts: 0, boycottReasons: [], alternatives: ["Lucy & Yak", "Girlfriend Collective", "Reformation", "Wray"], minLen: 5 },
  { name: "Weekday", aliases: [], parent: "H&M Group", boycotts: 0, boycottReasons: [], alternatives: ["Nudie Jeans", "Outland Denim", "Reformation", "Boyish Jeans"], minLen: 7 },
  { name: "Arket", aliases: [], parent: "H&M Group", boycotts: 0, boycottReasons: [], alternatives: ["Cuyana", "Everlane", "Kotn", "Organic Basics"], minLen: 5 },

  // FAST RETAILING
  { name: "Uniqlo", aliases: [], parent: "Fast Retailing", boycotts: 1, boycottReasons: ["Uyghur forced labor"], alternatives: ["Pact", "Kotn", "Asket", "Entireworld"], minLen: 6 },
  { name: "GU", aliases: [], parent: "Fast Retailing", boycotts: 0, boycottReasons: [], alternatives: ["Pact", "Quince", "Everlane", "Kotn"], minLen: 2 },
  { name: "Theory", aliases: [], parent: "Fast Retailing", boycotts: 0, boycottReasons: [], alternatives: ["Cuyana", "Everlane", "Amour Vert", "Eileen Fisher"], minLen: 6 },
  { name: "Helmut Lang", aliases: [], parent: "Fast Retailing", boycotts: 0, boycottReasons: [], alternatives: ["Entireworld", "Baserange", "The Frankie Shop", "Tibi"], minLen: 11 },
  { name: "J Brand", aliases: [], parent: "Fast Retailing", boycotts: 0, boycottReasons: [], alternatives: ["Outland Denim", "Nudie Jeans", "Boyish Jeans", "Reformation Denim"], minLen: 7 },

  // GAP INC
  { name: "Gap", aliases: ["gap inc"], parent: "Gap Inc.", boycotts: 0, boycottReasons: [], alternatives: ["Everlane", "Pact", "Kotn", "Buck Mason"], minLen: 3 },
  { name: "Old Navy", aliases: [], parent: "Gap Inc.", boycotts: 0, boycottReasons: [], alternatives: ["Pact", "Quince", "Primary", "Hanna Andersson"], minLen: 8 },
  { name: "Banana Republic", aliases: [], parent: "Gap Inc.", boycotts: 0, boycottReasons: [], alternatives: ["Cuyana", "Everlane", "M.M.LaFleur", "Amour Vert"], minLen: 15 },
  { name: "Athleta", aliases: [], parent: "Gap Inc.", boycotts: 0, boycottReasons: [], alternatives: ["Girlfriend Collective", "Outdoor Voices", "Patagonia", "Oiselle"], minLen: 7 },

  // VF CORPORATION
  { name: "The North Face", aliases: ["north face", "tnf"], parent: "VF Corporation", boycotts: 1, boycottReasons: ["Uyghur forced labor"], alternatives: ["Patagonia", "Cotopaxi", "REI Co-op", "Arc'teryx"], minLen: 3 },
  { name: "Vans", aliases: [], parent: "VF Corporation", boycotts: 0, boycottReasons: [], alternatives: ["Cariuma", "Allbirds", "Thousand Fell", "Nisolo"], minLen: 4 },
  { name: "Timberland", aliases: [], parent: "VF Corporation", boycotts: 0, boycottReasons: [], alternatives: ["Nisolo", "Able", "Thursday Boot Co", "Danner"], minLen: 10 },
  { name: "Dickies", aliases: [], parent: "VF Corporation", boycotts: 0, boycottReasons: [], alternatives: ["Carhartt", "Dovetail Workwear", "Kirrin Finch", "Wildfang"], minLen: 7 },
  { name: "Supreme", aliases: [], parent: "VF Corporation", boycotts: 0, boycottReasons: [], alternatives: ["Noah", "Entireworld", "Patagonia", "Story Mfg"], minLen: 7 },
  { name: "Smartwool", aliases: [], parent: "VF Corporation", boycotts: 0, boycottReasons: [], alternatives: ["Darn Tough", "Icebreaker", "Woolly Clothing Co", "Tracksmith"], minLen: 9 },

  // NIKE
  { name: "Nike", aliases: ["nike sportswear", "nike shoes"], parent: "Nike Inc.", boycotts: 1, boycottReasons: ["Uyghur forced labor"], alternatives: ["Allbirds", "Cariuma", "Veja", "On Running"], minLen: 4 },
  { name: "Converse", aliases: ["converse chuck taylor", "chuck taylors"], parent: "Nike Inc.", boycotts: 0, boycottReasons: [], alternatives: ["Cariuma", "Veja", "SeaVees", "Thousand Fell"], minLen: 8 },
  { name: "Jordan Brand", aliases: ["air jordan", "jordan"], parent: "Nike Inc.", boycotts: 0, boycottReasons: [], alternatives: ["New Balance", "On Running", "Hoka", "Allbirds"], minLen: 6 },

  // ADIDAS
  { name: "Adidas", aliases: ["adidas originals", "adidas shoes"], parent: "Adidas AG", boycotts: 1, boycottReasons: ["Israel settlements sponsorship"], alternatives: ["Veja", "Allbirds", "Cariuma", "On Running"], minLen: 6 },
  { name: "Reebok", aliases: ["reebok shoes"], parent: "Adidas AG", boycotts: 0, boycottReasons: [], alternatives: ["New Balance", "Brooks", "On Running", "Hoka"], minLen: 6 },

  // LVMH FASHION
  { name: "Louis Vuitton", aliases: ["lv"], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["Cuyana", "Mansur Gavriel", "Métier", "Strathberry"], minLen: 2 },
  { name: "Dior", aliases: ["christian dior"], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["Chanel", "Hermès", "The Row", "Khaite"], minLen: 4 },
  { name: "Fendi", aliases: [], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["Mansur Gavriel", "The Row", "Métier", "Hunting Season"], minLen: 5 },
  { name: "Givenchy", aliases: [], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["The Row", "Gabriela Hearst", "Khaite", "Proenza Schouler"], minLen: 8 },
  { name: "Marc Jacobs", aliases: ["marc by marc jacobs"], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["Tory Burch", "Staud", "Mansur Gavriel", "Khaite"], minLen: 11 },
  { name: "Kenzo", aliases: [], parent: "LVMH", boycotts: 0, boycottReasons: [], alternatives: ["Ganni", "Stine Goya", "Ulla Johnson", "Farm Rio"], minLen: 5 },

  // LVMH BEAUTY
  { name: "Sephora", aliases: ["sephora collection"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Credo Beauty", "The Detox Market", "Thirteen Lune", "Follain"], minLen: 7 },
  { name: "Fenty Beauty", aliases: ["fenty skin", "fenty"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Rare Beauty", "Mented Cosmetics", "Danessa Myricks", "Range Beauty"], minLen: 5 },
  { name: "Benefit", aliases: ["benefit cosmetics"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Glossier", "Patrick Ta Beauty", "Saie", "Kosas"], minLen: 7 },
  { name: "Make Up For Ever", aliases: ["mufe", "makeup for ever"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Danessa Myricks", "Natasha Denona", "Viseart", "Mehron"], minLen: 4 },
  { name: "Givenchy Beauty", aliases: ["givenchy makeup", "givenchy fragrance", "givenchy perfume"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Charlotte Tilbury", "Chanel Beauty", "Hermès Beauty", "Westman Atelier"], minLen: 8 },
  { name: "Dior Beauty", aliases: ["dior makeup", "dior fragrance", "dior perfume", "dior lip"], parent: "LVMH", boycotts: 2, boycottReasons: ["Palestine solidarity (BDS)", "Trump association ($1M donation)"], alternatives: ["Chanel Beauty", "Hermès Beauty", "Augustinus Bader", "Westman Atelier"], minLen: 4 },

  // KERING
  { name: "Gucci", aliases: [], parent: "Kering", boycotts: 0, boycottReasons: [], alternatives: ["Chanel", "Hermès", "The Row", "Khaite"], minLen: 5 },
  { name: "Saint Laurent", aliases: ["ysl", "yves saint laurent"], parent: "Kering", boycotts: 0, boycottReasons: [], alternatives: ["The Row", "Khaite", "Totême", "Gabriela Hearst"], minLen: 3 },
  { name: "Balenciaga", aliases: [], parent: "Kering", boycotts: 0, boycottReasons: [], alternatives: ["Vetements", "Margiela", "Acne Studios", "Our Legacy"], minLen: 10 },
  { name: "Alexander McQueen", aliases: ["mcqueen"], parent: "Kering", boycotts: 0, boycottReasons: [], alternatives: ["Rick Owens", "Comme des Garçons", "Iris van Herpen", "Noir Kei Ninomiya"], minLen: 7 },
  { name: "Bottega Veneta", aliases: [], parent: "Kering", boycotts: 0, boycottReasons: [], alternatives: ["The Row", "Métier", "Hunting Season", "Mansur Gavriel"], minLen: 14 },

  // PVH
  { name: "Tommy Hilfiger", aliases: ["tommy"], parent: "PVH Corp", boycotts: 0, boycottReasons: [], alternatives: ["Gant", "Polo Ralph Lauren", "Buck Mason", "Todd Snyder"], minLen: 5 },
  { name: "Van Heusen", aliases: [], parent: "PVH Corp", boycotts: 0, boycottReasons: [], alternatives: ["Bonobos", "Ministry of Supply", "Buck Mason", "Suitsupply"], minLen: 10 },

  // OTHER
  { name: "Puma", aliases: ["puma shoes", "puma sportswear"], parent: "Puma SE", boycotts: 1, boycottReasons: ["Israel Football Association sponsorship"], alternatives: ["Veja", "Allbirds", "Cariuma", "New Balance"], minLen: 4 },

  // P&G
  { name: "Olay", aliases: ["olay regenerist", "olay total effects"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["The Ordinary", "Versed", "Naturium"], minLen: 4 },
  { name: "SK-II", aliases: ["skii", "sk2"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Tatcha", "Sulwhasoo", "Shiseido", "Drunk Elephant"], minLen: 3 },
  { name: "Pantene", aliases: ["pantene pro-v"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Briogeo", "Amika", "Kristin Ess", "Verb"], minLen: 7 },
  { name: "Head & Shoulders", aliases: ["head and shoulders"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Briogeo Scalp Revival", "Jupiter", "Act+Acre"], minLen: 4 },
  { name: "Herbal Essences", aliases: [], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Acure", "Pacifica", "Ethique"], minLen: 15 },
  { name: "Old Spice", aliases: [], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Dr. Squatch", "Every Man Jack", "Schmidt's"], minLen: 9 },
  { name: "Secret", aliases: ["secret clinical strength"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Lume", "Megababe", "Myro"], minLen: 6 },
  { name: "Native", aliases: ["native deodorant"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Schmidt's", "Type:A", "Routine", "Meow Meow Tweet"], minLen: 6 },
  { name: "Gillette", aliases: ["gillette fusion", "gillette mach3"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Harry's", "Billie", "Flamingo", "Supply"], minLen: 8 },
  { name: "Venus", aliases: ["gillette venus"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Billie", "Flamingo", "Athena Club", "Leaf Shave"], minLen: 5 },
  { name: "Braun", aliases: [], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Philips Norelco", "Panasonic", "Wahl", "Remington"], minLen: 5 },
  { name: "Crest", aliases: ["crest 3d white", "crest pro-health"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Davids", "Bite", "Tom's of Maine"], minLen: 5 },
  { name: "Oral-B", aliases: ["oral b"], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Philips Sonicare", "Quip", "Burst"], minLen: 5 },
  { name: "Aussie", aliases: [], parent: "Procter & Gamble", boycotts: 0, boycottReasons: [], alternatives: ["Not Your Mother's", "Verb", "Kristin Ess"], minLen: 6 },

  // SHISEIDO
  { name: "NARS", aliases: ["nars cosmetics"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Rare Beauty", "Mented Cosmetics", "Danessa Myricks", "Kosas"], minLen: 4 },
  { name: "Clé de Peau Beauté", aliases: ["cle de peau", "cdp"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["La Prairie", "Sisley Paris", "Chantecaille", "Augustinus Bader"], minLen: 3 },
  { name: "Drunk Elephant", aliases: [], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Youth to the People", "Biossance", "Versed", "Cocokind"], minLen: 14 },
  { name: "Dr. Dennis Gross Skincare", aliases: ["dr dennis gross", "dennis gross"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Paula's Choice", "The Ordinary", "SkinCeuticals", "Murad"], minLen: 5 },
  { name: "Laura Mercier", aliases: [], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Charlotte Tilbury", "Hourglass", "RMS Beauty", "Jones Road Beauty"], minLen: 13 },
  { name: "BareMinerals", aliases: ["bare minerals"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Ilia Beauty", "RMS Beauty", "Tower 28", "Kosas"], minLen: 12 },
  { name: "Narciso Rodriguez", aliases: [], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Le Labo", "Byredo", "Diptyque", "MFK"], minLen: 17 },
  { name: "Issey Miyake Parfums", aliases: ["issey miyake"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Comme des Garçons", "Byredo", "Aesop", "Diptyque"], minLen: 12 },
  { name: "Tory Burch", aliases: ["tory burch perfume"], parent: "Shiseido", boycotts: 0, boycottReasons: [], alternatives: ["Carolina Herrera", "Michael Kors", "Kate Spade"], minLen: 10 },
];

// Build search index for fast matching
const FV_SEARCH_INDEX = {};

// Short brand names that could match generic words — require context
const FV_SHORT_BRANDS = new Set(["mac", "gap", "cos", "gu", "lv", "ud", "ck", "axe", "nyx", "opi", "ysl", "cdp", "tnf", "mufe", "sk2"]);

FV_BRANDS.forEach((brand, idx) => {
  // Index the main name
  const key = brand.name.toLowerCase();
  FV_SEARCH_INDEX[key] = idx;
  
  // Index all aliases
  brand.aliases.forEach(alias => {
    FV_SEARCH_INDEX[alias.toLowerCase()] = idx;
  });
});
