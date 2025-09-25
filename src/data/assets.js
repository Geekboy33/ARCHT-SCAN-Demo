// Tokenizable Assets Catalog — Archetyp World Protocol
export const STRATEGIC_MINERALS = {
  AU: { name: "Gold", symbol: "AU", category: "strategic_minerals", unit: "oz" },
  AG: { name: "Silver", symbol: "AG", category: "strategic_minerals", unit: "oz" },
  PT: { name: "Platinum", symbol: "PT", category: "strategic_minerals", unit: "oz" },
  PD: { name: "Palladium", symbol: "PD", category: "strategic_minerals", unit: "oz" },
  CU: { name: "Copper", symbol: "CU", category: "strategic_minerals", unit: "ton" },
  NI: { name: "Nickel", symbol: "NI", category: "strategic_minerals", unit: "ton" },
  AL: { name: "Aluminum", symbol: "AL", category: "strategic_minerals", unit: "ton" },
  FE: { name: "Iron", symbol: "FE", category: "strategic_minerals", unit: "ton" },
  U: { name: "Uranium", symbol: "U", category: "strategic_minerals", unit: "lb" },
  COAL: { name: "Coal", symbol: "COAL", category: "strategic_minerals", unit: "ton" },
  REE: { name: "Rare Earth Elements", symbol: "REE", category: "strategic_minerals", unit: "kg" },
  LI: { name: "Lithium", symbol: "LI", category: "strategic_minerals", unit: "ton" },
  CO: { name: "Cobalt", symbol: "CO", category: "strategic_minerals", unit: "ton" },
  MG: { name: "Magnesium", symbol: "MG", category: "strategic_minerals", unit: "ton" },
  MN: { name: "Manganese", symbol: "MN", category: "strategic_minerals", unit: "ton" },
  TI: { name: "Titanium", symbol: "TI", category: "strategic_minerals", unit: "ton" }
};

export const ENERGY_ASSETS = {
  OIL: { name: "Crude Oil", symbol: "OIL", category: "energy", unit: "barrel" },
  LNG: { name: "Liquefied Natural Gas", symbol: "LNG", category: "energy", unit: "MMBtu" },
  H2G: { name: "Green Hydrogen", symbol: "H2G", category: "energy", unit: "kg" },
  H2B: { name: "Blue Hydrogen", symbol: "H2B", category: "energy", unit: "kg" },
  BIOF: { name: "Biofuels", symbol: "BIOF", category: "energy", unit: "gallon" },
  SOLAR: { name: "Solar Energy", symbol: "SOLAR", category: "energy", unit: "MWh" },
  WIND: { name: "Wind Energy", symbol: "WIND", category: "energy", unit: "MWh" },
  HYDRO: { name: "Hydropower", symbol: "HYDRO", category: "energy", unit: "MWh" }
};

export const AGRICULTURE_ASSETS = {
  SOY: { name: "Soybeans", symbol: "SOY", category: "agriculture", unit: "bushel" },
  CORN: { name: "Corn", symbol: "CORN", category: "agriculture", unit: "bushel" },
  WHEAT: { name: "Wheat", symbol: "WHEAT", category: "agriculture", unit: "bushel" },
  COFFEE: { name: "Coffee", symbol: "COFFEE", category: "agriculture", unit: "lb" },
  COCOA: { name: "Cocoa", symbol: "COCOA", category: "agriculture", unit: "ton" },
  SUGAR: { name: "Sugar", symbol: "SUGAR", category: "agriculture", unit: "lb" },
  RICE: { name: "Rice", symbol: "RICE", category: "agriculture", unit: "cwt" },
  COTTON: { name: "Cotton", symbol: "COTTON", category: "agriculture", unit: "lb" },
  BEEF: { name: "Cattle (Beef)", symbol: "BEEF", category: "agriculture", unit: "lb" },
  POULTRY: { name: "Poultry", symbol: "POULTRY", category: "agriculture", unit: "lb" },
  FISH: { name: "Fisheries / Aquaculture", symbol: "FISH", category: "agriculture", unit: "lb" },
  WOOD: { name: "Certified Wood", symbol: "WOOD", category: "agriculture", unit: "m³" },
  CELL: { name: "Cellulose", symbol: "CELL", category: "agriculture", unit: "ton" },
  PAPER: { name: "Paper", symbol: "PAPER", category: "agriculture", unit: "ton" }
};

export const NATURAL_RESOURCES = {
  WATER: { name: "Freshwater", symbol: "WATER", category: "natural_resources", unit: "m³" },
  FOREST: { name: "Forests", symbol: "FOREST", category: "natural_resources", unit: "hectare" },
  LAND: { name: "Agricultural Land", symbol: "LAND", category: "natural_resources", unit: "hectare" }
};

export const ENVIRONMENTAL_ESG = {
  CARBONC: { name: "Carbon Credits", symbol: "CARBONC", category: "environmental_esg", unit: "tCO₂" },
  WATERC: { name: "Water Credits", symbol: "WATERC", category: "environmental_esg", unit: "m³" },
  BIODIVC: { name: "Biodiversity Credits", symbol: "BIODIVC", category: "environmental_esg", unit: "credit" },
  REC: { name: "Renewable Energy Certificates", symbol: "REC", category: "environmental_esg", unit: "MWh" }
};

export const FINANCIAL_INSTRUMENTS = {
  OFFTK: { name: "Offtake Tokens", symbol: "OFFTK", category: "financial_instruments", unit: "token" },
  ROYL: { name: "Royalty Tokens", symbol: "ROYL", category: "financial_instruments", unit: "token" },
  WRT: { name: "Warehouse Receipt Tokens", symbol: "WRT", category: "financial_instruments", unit: "token" },
  SECUR: { name: "Hybrid Securitizations", symbol: "SECUR", category: "financial_instruments", unit: "token" }
};

export const INFRASTRUCTURE = {
  ROADC: { name: "Road Concessions", symbol: "ROADC", category: "infrastructure", unit: "km" },
  PORTC: { name: "Port Concessions", symbol: "PORTC", category: "infrastructure", unit: "concession" },
  AIRPC: { name: "Airport Concessions", symbol: "AIRPC", category: "infrastructure", unit: "concession" },
  RAILC: { name: "Railway Concessions", symbol: "RAILC", category: "infrastructure", unit: "km" },
  ENERGYC: { name: "Energy Infrastructure", symbol: "ENERGYC", category: "infrastructure", unit: "MW" },
  AGRICC: { name: "Agricultural Infrastructure", symbol: "AGRICC", category: "infrastructure", unit: "facility" }
};

export const SOCIAL = {
  SOCIAL: { name: "Social Token", symbol: "SOCIAL", category: "social", unit: "token" },
  IMPACT: { name: "Impact Tokens", symbol: "IMPACT", category: "social", unit: "token" }
};

export const GEMSTONES = {
  DIAM: { name: "Diamond", symbol: "DIAM", category: "gemstones", unit: "carat" },
  RUBY: { name: "Ruby", symbol: "RUBY", category: "gemstones", unit: "carat" },
  SAPP: { name: "Sapphire", symbol: "SAPP", category: "gemstones", unit: "carat" },
  EMER: { name: "Emerald", symbol: "EMER", category: "gemstones", unit: "carat" },
  AMET: { name: "Amethyst", symbol: "AMET", category: "gemstones", unit: "carat" },
  TOPA: { name: "Topaz", symbol: "TOPA", category: "gemstones", unit: "carat" },
  AQUA: { name: "Aquamarine", symbol: "AQUA", category: "gemstones", unit: "carat" },
  GARN: { name: "Garnet", symbol: "GARN", category: "gemstones", unit: "carat" },
  SPIN: { name: "Spinel", symbol: "SPIN", category: "gemstones", unit: "carat" },
  TURQ: { name: "Turquoise", symbol: "TURQ", category: "gemstones", unit: "carat" },
  OPAL: { name: "Opal", symbol: "OPAL", category: "gemstones", unit: "carat" },
  PEARL: { name: "Pearl", symbol: "PEARL", category: "gemstones", unit: "piece" },
  JADE: { name: "Jade", symbol: "JADE", category: "gemstones", unit: "carat" },
  ONYX: { name: "Onyx", symbol: "ONYX", category: "gemstones", unit: "carat" },
  TANZ: { name: "Tanzanite", symbol: "TANZ", category: "gemstones", unit: "carat" },
  TOUR: { name: "Tourmaline", symbol: "TOUR", category: "gemstones", unit: "carat" },
  CHRYS: { name: "Chrysoberyl", symbol: "CHRYS", category: "gemstones", unit: "carat" },
  CITR: { name: "Citrine", symbol: "CITR", category: "gemstones", unit: "carat" },
  PERI: { name: "Peridot", symbol: "PERI", category: "gemstones", unit: "carat" },
  ZIRC: { name: "Zircon", symbol: "ZIRC", category: "gemstones", unit: "carat" },
  MOR: { name: "Morganite", symbol: "MOR", category: "gemstones", unit: "carat" },
  KUNZ: { name: "Kunzite", symbol: "KUNZ", category: "gemstones", unit: "carat" }
};

// Función para generar datos simulados realistas para cada activo
const generateAssetData = (assetKey, assetInfo, country = 'Global') => {
  let basePrice, change24h;
  
  // Precios más realistas para gemas
  if (assetInfo.category === 'gemstones') {
    const gemPrices = {
      'DIAM': 5000 + Math.random() * 10000, // Diamantes: $5K-$15K por quilate
      'RUBY': 2000 + Math.random() * 8000,  // Rubíes: $2K-$10K por quilate
      'SAPP': 1500 + Math.random() * 6000,  // Zafiros: $1.5K-$7.5K por quilate
      'EMER': 1000 + Math.random() * 5000,  // Esmeraldas: $1K-$6K por quilate
      'TANZ': 800 + Math.random() * 3000,   // Tanzanita: $800-$3.8K por quilate
      'TOUR': 500 + Math.random() * 2000,  // Turmalina: $500-$2.5K por quilate
      'CHRYS': 400 + Math.random() * 1500, // Crisoberilo: $400-$1.9K por quilate
      'OPAL': 300 + Math.random() * 1200,  // Ópalo: $300-$1.5K por quilate
      'AMET': 50 + Math.random() * 200,    // Amatista: $50-$250 por quilate
      'CITR': 30 + Math.random() * 150,    // Citrino: $30-$180 por quilate
      'TOPA': 25 + Math.random() * 100,    // Topacio: $25-$125 por quilate
      'AQUA': 20 + Math.random() * 80,     // Aguamarina: $20-$100 por quilate
      'GARN': 15 + Math.random() * 60,     // Granate: $15-$75 por quilate
      'SPIN': 10 + Math.random() * 40,     // Espinela: $10-$50 por quilate
      'TURQ': 5 + Math.random() * 25,      // Turquesa: $5-$30 por quilate
      'ONYX': 3 + Math.random() * 15,      // Ónix: $3-$18 por quilate
      'JADE': 2 + Math.random() * 10,      // Jade: $2-$12 por quilate
      'PERI': 1 + Math.random() * 8,       // Peridoto: $1-$9 por quilate
      'ZIRC': 0.5 + Math.random() * 5,     // Zircón: $0.5-$5.5 por quilate
      'MOR': 0.3 + Math.random() * 3,      // Morganita: $0.3-$3.3 por quilate
      'KUNZ': 0.2 + Math.random() * 2,     // Kunzita: $0.2-$2.2 por quilate
      'PEARL': 100 + Math.random() * 500   // Perlas: $100-$600 por pieza
    };
    
    basePrice = gemPrices[assetKey] || (100 + Math.random() * 1000);
    change24h = (Math.random() - 0.5) * 5; // Cambios más pequeños para gemas
  } else {
    basePrice = Math.random() * 10000 + 100;
    change24h = (Math.random() - 0.5) * 10;
  }
  
  return {
    id: `${assetKey.toLowerCase()}_${country.toLowerCase()}`,
    symbol: assetKey,
    name: assetInfo.name,
    category: assetInfo.category,
    unit: assetInfo.unit,
    country: country,
    tokenized: true,
    currentPrice: basePrice,
    change24h: change24h,
    marketCap: Math.random() * 1000000000000 + 1000000000,
    volume24h: Math.random() * 1000000000 + 10000000,
    supply: Math.random() * 1000000000 + 1000000,
    lastUpdated: new Date().toISOString(),
    // Información adicional para gemas
    ...(assetInfo.category === 'gemstones' && {
      certification: ['GIA', 'IGI', 'CIBJO'][Math.floor(Math.random() * 3)],
      clarity: ['FL', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'][Math.floor(Math.random() * 7)],
      color: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'][Math.floor(Math.random() * 10)],
      cut: ['Excellent', 'Very Good', 'Good', 'Fair'][Math.floor(Math.random() * 4)]
    })
  };
};

// Generar datos para todos los activos estratégicos
const generateAllAssets = () => {
  const allAssets = [];
  const countries = ['Brazil', 'Chile', 'Argentina', 'UAE', 'Saudi Arabia', 'Australia', 'Canada', 'USA'];
  
  // Strategic Minerals
  Object.entries(STRATEGIC_MINERALS).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Energy Assets
  Object.entries(ENERGY_ASSETS).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Agriculture Assets
  Object.entries(AGRICULTURE_ASSETS).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Natural Resources
  Object.entries(NATURAL_RESOURCES).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Environmental ESG
  Object.entries(ENVIRONMENTAL_ESG).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Financial Instruments
  Object.entries(FINANCIAL_INSTRUMENTS).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Infrastructure
  Object.entries(INFRASTRUCTURE).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Social
  Object.entries(SOCIAL).forEach(([key, asset]) => {
    countries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  // Gemstones - países específicos para gemas
  const gemstoneCountries = ['Brazil', 'Colombia', 'South Africa', 'Tanzania', 'Myanmar', 'Sri Lanka', 'Thailand', 'Australia', 'USA', 'Canada'];
  Object.entries(GEMSTONES).forEach(([key, asset]) => {
    gemstoneCountries.forEach(country => {
      allAssets.push(generateAssetData(key, asset, country));
    });
  });
  
  return allAssets;
};

// Índices de mercado actualizados
export const ARCHT_INDICES = {
  SMI: {
    name: 'Strategic Minerals Index',
    symbol: 'SMI',
    composition: {
      preciousMetals: 25,
      baseMetals: 35,
      strategicMetals: 40
    },
    currentValue: 2847.8,
    change24h: 2.1,
    rebalancing: 'Quarterly',
    description: 'Comprehensive strategic minerals index'
  },
  EAI: {
    name: 'Energy Assets Index',
    symbol: 'EAI',
    composition: {
      renewable: 40,
      fossil: 30,
      hydrogen: 30
    },
    currentValue: 1856.3,
    change24h: -0.7,
    weighting: 'By energy transition impact',
    description: 'Energy transition and sustainability index'
  },
  AAI: {
    name: 'Agriculture Assets Index',
    symbol: 'AAI',
    composition: {
      grains: 40,
      proteins: 25,
      specialized: 35
    },
    currentValue: 1456.3,
    change24h: 1.2,
    weighting: 'By food security and export value',
    description: 'Agricultural commodity and food security index'
  },
  ESGI: {
    name: 'Environmental Social Governance Index',
    symbol: 'ESGI',
    composition: {
      carbonCredits: 40,
      biodiversity: 30,
      socialImpact: 30
    },
    currentValue: 612.6,
    change24h: 4.2,
    methodologies: ['VCS', 'Gold Standard', 'CDM', 'CCB'],
    description: 'ESG and sustainability impact index'
  },
  GSI: {
    name: 'Gemstones Index',
    symbol: 'GSI',
    composition: {
      precious: 40,
      semiPrecious: 35,
      rare: 25
    },
    currentValue: 2847.3,
    change24h: 1.9,
    certifications: ['GIA', 'IGI', 'CIBJO', 'GRS'],
    description: 'Certified gemstones and precious stones index'
  },
  IPRT: {
    name: 'Integrated Physical Resource Token Index',
    symbol: 'IPRT',
    description: 'Consolidated global index of all tokenizable asset categories',
    currentValue: 4156.9,
    change24h: 1.8,
    rebalancing: 'Monthly with complete transparency',
    composition: {
      strategicMinerals: 25,
      energy: 20,
      agriculture: 15,
      gemstones: 15,
      naturalResources: 8,
      environmentalESG: 8,
      infrastructure: 5,
      financialInstruments: 2,
      social: 2
    }
  }
};

// Función para obtener todos los activos
export const getAllAssets = () => {
  return generateAllAssets();
};

// Función para obtener activos por categoría
export const getAssetsByCategory = (category) => {
  const allAssets = getAllAssets();
  return allAssets.filter(asset => asset.category === category);
};

// Función para obtener activos por país
export const getAssetsByCountry = (country) => {
  const allAssets = getAllAssets();
  return allAssets.filter(asset => asset.country === country);
};

// Función para obtener activos por símbolo
export const getAssetsBySymbol = (symbol) => {
  const allAssets = getAllAssets();
  return allAssets.filter(asset => asset.symbol === symbol);
};

// Función para obtener estadísticas de categorías
export const getCategoryStats = () => {
  const allAssets = getAllAssets();
  const stats = {};
  
  allAssets.forEach(asset => {
    if (!stats[asset.category]) {
      stats[asset.category] = {
        count: 0,
        totalMarketCap: 0,
        avgChange24h: 0,
        countries: new Set()
      };
    }
    
    stats[asset.category].count++;
    stats[asset.category].totalMarketCap += asset.marketCap;
    stats[asset.category].avgChange24h += asset.change24h;
    stats[asset.category].countries.add(asset.country);
  });
  
  // Calcular promedios
  Object.keys(stats).forEach(category => {
    stats[category].avgChange24h = stats[category].avgChange24h / stats[category].count;
    stats[category].countries = Array.from(stats[category].countries);
  });
  
  return stats;
};
