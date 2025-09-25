import React, { useState, useMemo } from 'react';
import { 
  STRATEGIC_MINERALS, 
  ENERGY_ASSETS, 
  AGRICULTURE_ASSETS, 
  NATURAL_RESOURCES,
  ENVIRONMENTAL_ESG,
  FINANCIAL_INSTRUMENTS,
  INFRASTRUCTURE,
  SOCIAL,
  GEMSTONES,
  getAllAssets,
  getCategoryStats
} from '../data/assets';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Globe, 
  Zap, 
  Leaf, 
  Droplets, 
  Building2, 
  Coins, 
  Users,
  Gem,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const CATEGORY_ICONS = {
  strategic_minerals: <TrendingUp className="w-5 h-5" />,
  energy: <Zap className="w-5 h-5" />,
  agriculture: <Leaf className="w-5 h-5" />,
  natural_resources: <Droplets className="w-5 h-5" />,
  environmental_esg: <Globe className="w-5 h-5" />,
  financial_instruments: <Coins className="w-5 h-5" />,
  infrastructure: <Building2 className="w-5 h-5" />,
  social: <Users className="w-5 h-5" />,
  gemstones: <Gem className="w-5 h-5" />
};

const CATEGORY_COLORS = {
  strategic_minerals: 'bg-archetyp-500/20 text-archetyp-400 border-archetyp-500/30',
  energy: 'bg-warning-500/20 text-warning-400 border-warning-500/30',
  agriculture: 'bg-success-500/20 text-success-400 border-success-500/30',
  natural_resources: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  environmental_esg: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  financial_instruments: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  infrastructure: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  social: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  gemstones: 'bg-rose-500/20 text-rose-400 border-rose-500/30'
};

function AssetCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});

  const allAssets = getAllAssets();
  const categoryStats = getCategoryStats();

  const countries = useMemo(() => {
    const countrySet = new Set(allAssets.map(asset => asset.country));
    return Array.from(countrySet).sort();
  }, [allAssets]);

  const filteredAssets = useMemo(() => {
    return allAssets.filter(asset => {
      const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || asset.category === selectedCategory;
      const matchesCountry = selectedCountry === 'all' || asset.country === selectedCountry;
      
      return matchesSearch && matchesCategory && matchesCountry;
    });
  }, [allAssets, searchTerm, selectedCategory, selectedCountry]);

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const renderCategorySection = (title, assets, categoryKey) => {
    const isExpanded = expandedCategories[categoryKey];
    const categoryAssets = Object.entries(assets);
    
    return (
      <Card key={categoryKey} className="mb-6">
        <CardHeader 
          className="cursor-pointer hover:bg-gray-700/50 transition-colors"
          onClick={() => toggleCategory(categoryKey)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${CATEGORY_COLORS[categoryKey]}`}>
                {CATEGORY_ICONS[categoryKey]}
              </div>
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <p className="text-sm text-gray-400">{categoryAssets.length} asset types</p>
              </div>
            </div>
            {isExpanded ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryAssets.map(([key, asset]) => (
                <div key={key} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-gray-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${CATEGORY_COLORS[categoryKey]}`}>
                      {key.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{key}</div>
                      <div className="text-xs text-gray-400">{asset.unit}</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">{asset.name}</div>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-archetyp-400 to-archetyp-600 bg-clip-text text-transparent">
            Tokenizable Assets Catalog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive catalog of all tokenizable real-world assets across strategic minerals, 
            energy, agriculture, natural resources, ESG, infrastructure, and social impact categories.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card className="bg-black border border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search assets by name or symbol..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-archetyp-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-archetyp-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="strategic_minerals">Strategic Minerals</option>
                    <option value="energy">Energy</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="gemstones">Gemstones</option>
                    <option value="natural_resources">Natural Resources</option>
                    <option value="environmental_esg">Environmental ESG</option>
                    <option value="financial_instruments">Financial Instruments</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="social">Social</option>
                  </select>
                  
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-archetyp-500"
                  >
                    <option value="all">All Countries</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Statistics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-archetyp-400">Category Overview</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(categoryStats).map(([category, stats]) => (
              <Card key={category} className="bg-black border border-gray-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${CATEGORY_COLORS[category]}`}>
                      {CATEGORY_ICONS[category]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </div>
                      <div className="text-xs text-gray-400">{stats.count} assets</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Avg Change: <span className={stats.avgChange24h >= 0 ? 'text-success-400' : 'text-error-400'}>
                      {stats.avgChange24h >= 0 ? '+' : ''}{stats.avgChange24h.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {stats.countries.length} countries
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Asset Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-archetyp-400">Asset Categories</h2>
          
          {renderCategorySection('Strategic Minerals', STRATEGIC_MINERALS, 'strategic_minerals')}
          {renderCategorySection('Energy Assets', ENERGY_ASSETS, 'energy')}
          {renderCategorySection('Agriculture Assets', AGRICULTURE_ASSETS, 'agriculture')}
          {renderCategorySection('Gemstones', GEMSTONES, 'gemstones')}
          {renderCategorySection('Natural Resources', NATURAL_RESOURCES, 'natural_resources')}
          {renderCategorySection('Environmental ESG', ENVIRONMENTAL_ESG, 'environmental_esg')}
          {renderCategorySection('Financial Instruments', FINANCIAL_INSTRUMENTS, 'financial_instruments')}
          {renderCategorySection('Infrastructure', INFRASTRUCTURE, 'infrastructure')}
          {renderCategorySection('Social Impact', SOCIAL, 'social')}
        </div>

        {/* Filtered Results */}
        {filteredAssets.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-archetyp-400">
              Live Assets ({filteredAssets.length} results)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredAssets.slice(0, 50).map((asset) => (
                <Card key={asset.id} className="bg-gray-800 border border-gray-700 hover:border-gray-600 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${CATEGORY_COLORS[asset.category]}`}>
                        {asset.symbol?.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{asset.symbol}</div>
                        <div className="text-sm text-gray-400">{asset.name}</div>
                        <div className="text-xs text-gray-500">{asset.country}</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-lg font-bold">${asset.currentPrice?.toLocaleString()}</div>
                      <div className={`text-sm font-semibold ${asset.change24h >= 0 ? 'text-success-400' : 'text-error-400'}`}>
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(1)}%
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      Market Cap: ${(asset.marketCap / 1000000000).toFixed(1)}B
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredAssets.length > 50 && (
              <div className="text-center mt-6">
                <Button variant="outline">
                  Load More ({filteredAssets.length - 50} remaining)
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AssetCatalog;
