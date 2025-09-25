import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Shield, Zap, Leaf, CheckCircle, DollarSign, 
  Building2, Users, Target, Search, Filter, ChevronRight,
  TrendingUp, TrendingDown, Activity
} from 'lucide-react';
import { getAllAssets } from '../data/assets';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Assets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');

  const allAssets = useMemo(() => getAllAssets(), []);
  
  const filteredAssets = useMemo(() => {
    let filtered = allAssets;
    
    if (searchTerm) {
      filtered = filtered.filter(asset => 
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(asset => asset.category === selectedCategory);
    }
    
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(asset => asset.country === selectedCountry);
    }
    
    return filtered;
  }, [allAssets, searchTerm, selectedCategory, selectedCountry]);

  const categories = useMemo(() => {
    const cats = [...new Set(allAssets.map(asset => asset.category))];
    return ['all', ...cats];
  }, [allAssets]);

  const countries = useMemo(() => {
    const countries = [...new Set(allAssets.map(asset => asset.country))];
    return ['all', ...countries];
  }, [allAssets]);

  const getCategoryColor = (category) => {
    const colors = {
      strategic_minerals: 'bg-yellow-500/20 text-yellow-400',
      energy: 'bg-blue-500/20 text-blue-400',
      agriculture: 'bg-green-500/20 text-green-400',
      natural_resources: 'bg-emerald-500/20 text-emerald-400',
      environmental_esg: 'bg-teal-500/20 text-teal-400',
      financial_instruments: 'bg-purple-500/20 text-purple-400',
      infrastructure: 'bg-orange-500/20 text-orange-400',
      social: 'bg-pink-500/20 text-pink-400',
      gemstones: 'bg-rose-500/20 text-rose-400'
    };
    return colors[category] || 'bg-gray-600/20 text-gray-300';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      strategic_minerals: <Shield className="w-4 h-4" />,
      energy: <Zap className="w-4 h-4" />,
      agriculture: <Leaf className="w-4 h-4" />,
      natural_resources: <Globe className="w-4 h-4" />,
      environmental_esg: <CheckCircle className="w-4 h-4" />,
      financial_instruments: <DollarSign className="w-4 h-4" />,
      infrastructure: <Building2 className="w-4 h-4" />,
      social: <Users className="w-4 h-4" />,
      gemstones: <Target className="w-4 h-4" />
    };
    return icons[category] || <Activity className="w-4 h-4" />;
  };

  const assetCategories = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strategic Minerals",
      description: "Gold, silver, platinum, rare earth elements",
      count: allAssets.filter(a => a.category === 'strategic_minerals').length,
      color: "text-yellow-400"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy",
      description: "Oil, gas, renewable energy, carbon credits",
      count: allAssets.filter(a => a.category === 'energy').length,
      color: "text-blue-400"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Agriculture",
      description: "Grains, livestock, soft commodities",
      count: allAssets.filter(a => a.category === 'agriculture').length,
      color: "text-green-400"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "ESG Assets",
      description: "Environmental, social, governance assets",
      count: allAssets.filter(a => a.category === 'environmental_esg').length,
      color: "text-teal-400"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
              Tokenizable Assets • {allAssets.length} Assets
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
            Asset Catalog
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive catalog of tokenizable real-world assets across multiple categories and regions
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="xl" variant="gradient" className="group">
              <Link to="/assets/brazil">
                Brazil Pilot <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="group">
              <Link to="/dashboard">
                <Activity className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> Live Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Asset Categories</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Diverse range of tokenizable assets across multiple sectors
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assetCategories.map((category, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{category.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{category.count}</div>
                  <div className="text-gray-400 text-sm">Assets</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Search and Filter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">All Assets</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === 'all' ? 'All Countries' : country}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Assets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAssets.map((asset, index) => (
              <Card key={asset.id} className="bg-black border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{asset.symbol.charAt(0)}</span>
                    </div>
                    <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(asset.category)}`}>
                      {getCategoryIcon(asset.category)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1">{asset.symbol}</h3>
                  <p className="text-gray-400 text-sm mb-3">{asset.name}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-white font-medium">${asset.currentPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">24h Change:</span>
                      <div className={`flex items-center ${
                        asset.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {asset.change24h >= 0 ? (
                          <TrendingUp className="w-3 h-3 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 mr-1" />
                        )}
                        {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Country:</span>
                      <span className="text-white">{asset.country}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAssets.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No assets found matching your criteria</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Assets;