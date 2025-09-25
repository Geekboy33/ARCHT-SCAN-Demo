import React, { useState, useMemo, useEffect, useCallback, memo } from 'react';
import { 
  LineChart, Line, AreaChart, Area, PieChart, Pie, 
  Cell, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Legend, BarChart, Bar
} from 'recharts';
import { 
  TrendingUp, TrendingDown, Activity, Shield, CheckCircle, Zap,
  Search, RefreshCw, Download, Settings, Users, BarChart3,
  ArrowUpRight, ArrowDownRight, AlertTriangle, AlertCircle, 
  CheckCircle2, XCircle, Info, Play, Pause, RotateCcw, Cpu,
  Database, Network, Layers, Monitor, Target, Leaf, Eye, EyeOff,
  Star, Award, Building2, Globe, DollarSign, Filter, Maximize2, 
  Minimize2, Menu, X
} from 'lucide-react';
import { getAllAssets } from '../data/assets';
import { Card, CardContent, CardHeader, CardTitle, MetricCard } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import AnimatedNumber from '../components/AnimatedNumber';

// Professional System Health Component
const SystemHealthCard = memo(({ icon: Icon, title, value, subtitle, progress, status, className = "" }) => (
  <MetricCard
    title={title}
    value={value}
    subtitle={subtitle}
    icon={Icon}
    trend={{ direction: 'up', value: progress }}
    className={`hover-professional ${className}`}
  />
));

// Professional Asset Card Component
const AssetCard = memo(({ asset, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      strategic_minerals: 'from-archetyp-500/10 to-archetyp-600/10 border-archetyp-500/20',
      energy: 'from-archetyp-400/10 to-archetyp-500/10 border-archetyp-400/20',
      agriculture: 'from-archetyp-300/10 to-archetyp-400/10 border-archetyp-300/20',
      natural_resources: 'from-archetyp-500/10 to-archetyp-600/10 border-archetyp-500/20',
      environmental_esg: 'from-archetyp-400/10 to-archetyp-500/10 border-archetyp-400/20',
      financial_instruments: 'from-archetyp-300/10 to-archetyp-400/10 border-archetyp-300/20',
      infrastructure: 'from-archetyp-500/10 to-archetyp-600/10 border-archetyp-500/20',
      social: 'from-archetyp-400/10 to-archetyp-500/10 border-archetyp-400/20',
      gemstones: 'from-archetyp-300/10 to-archetyp-400/10 border-archetyp-300/20'
    };
    return colors[category] || 'from-white/5 to-white/10 border-white/10';
  };

  return (
    <Card className={`bg-gradient-to-br ${getCategoryColor(asset.category)} border hover-professional group`}>
      <CardContent spacing="default">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-archetyp-500 to-archetyp-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
            <span className="text-white font-bold text-sm">{asset.symbol?.charAt(0)}</span>
          </div>
          <div className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            {asset.unit}
          </div>
        </div>
        
        <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {asset.name}
        </h4>
        <p className="text-xs text-gray-400 mb-4 font-mono">{asset.symbol}</p>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Price:</span>
            <span className="text-sm font-bold text-white number-professional">
              <AnimatedNumber 
                value={asset.currentPrice || asset.price} 
                duration={400}
                decimals={2}
                prefix="$"
                className="font-mono"
              />
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">24h:</span>
            <div className={`flex items-center text-sm font-semibold ${
              (asset.change24h || asset.change) >= 0 ? 'text-success-400' : 'text-error-400'
            }`}>
              {(asset.change24h || asset.change) >= 0 ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {(asset.change24h || asset.change) >= 0 ? '+' : ''}{(asset.change24h || asset.change)?.toFixed(1)}%
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Country:</span>
            <span className="text-xs text-white font-medium">{asset.country}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

function ARCHTScan() {
  // Professional state management
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [realTimeData, setRealTimeData] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState('grid');

  // Professional system health data
  const [systemHealth] = useState({
    activeScans: 247,
    threatsDetected: 3,
    complianceScore: 98.7,
    latency: 12,
    lastUpdate: new Date().toLocaleTimeString(),
    uptime: 99.99,
    totalAssets: 0,
    totalVolume: 0
  });

  // Load assets with error handling
  const allAssets = useMemo(() => {
    try {
      return getAllAssets();
    } catch (error) {
      console.error('Error loading assets:', error);
      return [];
    }
  }, []);

  // Professional filtering and search
  const filteredAssets = useMemo(() => {
    let assets = allAssets;

    if (searchTerm) {
      assets = assets.filter(asset => 
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      assets = assets.filter(asset => asset.category === selectedCategory);
    }

    if (selectedCountry !== 'all') {
      assets = assets.filter(asset => asset.country === selectedCountry);
    }

    // Professional sorting
    assets.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      return sortOrder === 'asc' ? 
        (aValue > bValue ? 1 : -1) : 
        (aValue < bValue ? 1 : -1);
    });

    return assets;
  }, [allAssets, searchTerm, selectedCategory, selectedCountry, sortBy, sortOrder]);

  // Professional pagination
  const paginatedAssets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAssets.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAssets, currentPage, itemsPerPage]);

  // Professional statistics
  const stats = useMemo(() => {
    const totalMarketCap = 10000000000; // Fixed 10B market cap
    const totalVolume = allAssets.reduce((sum, asset) => sum + (asset.volume24h || 0), 0);
    const avgChange = allAssets.reduce((sum, asset) => sum + (asset.change24h || 0), 0) / allAssets.length;
    const categories = new Set(allAssets.map(asset => asset.category)).size;
    const countries = new Set(allAssets.map(asset => asset.country)).size;

    return {
      totalMarketCap: totalMarketCap / 1000000000,
      totalVolume: totalVolume / 1000000,
      avgChange,
      categories,
      countries,
      activeAssets: allAssets.filter(asset => (asset.change24h || 0) > 0).length
    };
  }, [allAssets]);

  // Professional handlers
  const handleRefreshData = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => setIsLoading(false), 1200);
  }, []);

  const handleStartScan = useCallback(() => {
    setIsScanning(true);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  }, []);

  // Professional chart data
  const chartData = useMemo(() => {
    const categoryData = {};
    allAssets.forEach(asset => {
      const category = asset.category.replace(/_/g, ' ');
      if (!categoryData[category]) {
        categoryData[category] = { name: category, value: 0, count: 0 };
      }
      categoryData[category].value += asset.marketCap || 0;
      categoryData[category].count += 1;
    });

    return Object.values(categoryData).map((item, index) => ({
      ...item,
      value: item.value / 1000000000,
      color: '#06b6d4' // Professional single color
    }));
  }, [allAssets]);

  if (error) {
    return (
      <div className="min-h-screen bg-primary text-white flex items-center justify-center">
        <Card variant="elevated" className="max-w-md">
          <CardContent spacing="loose" className="text-center">
            <AlertCircle className="w-16 h-16 text-error-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-error-400 mb-4">Error Loading ARCHT SCAN</h1>
            <p className="text-gray-300 mb-8">{error}</p>
            <Button onClick={handleRefreshData} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Professional Header */}
      <div className="sticky top-20 z-30 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-professional">
        <div className="container-professional">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-gradient-to-r from-archetyp-400 to-archetyp-500 rounded-2xl flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  ARCHT SCAN Demo
                </h1>
                <p className="text-sm text-gray-400 flex items-center gap-3 mt-1">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${realTimeData ? 'bg-success-400' : 'bg-gray-400'}`}></div>
                  {realTimeData ? 'Live Monitoring' : 'Paused'} • Advanced Asset Analysis
                  <span className="text-xs text-gray-500 ml-4">
                    Last update: {systemHealth.lastUpdate}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant={realTimeData ? "accent" : "outline"}
                size="sm"
                onClick={() => setRealTimeData(!realTimeData)}
                className="hidden sm:flex items-center space-x-2"
              >
                {realTimeData ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{realTimeData ? 'Pause' : 'Resume'}</span>
              </Button>
              
              <Button
                variant={isScanning ? "destructive" : "primary"}
                size="sm"
                onClick={isScanning ? () => setIsScanning(false) : handleStartScan}
                className="flex items-center space-x-2"
              >
                {isScanning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="hidden sm:inline">{isScanning ? 'Stop' : 'Scan'}</span>
              </Button>
              
              <Button variant="ghost" size="sm" onClick={handleRefreshData} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-professional py-12 space-professional">
        {/* Professional System Health */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">System Health Overview</h2>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse shadow-glow"></div>
              <span className="text-sm text-success-400 font-semibold">All Systems Operational</span>
            </div>
          </div>
          
          <div className="grid-metrics">
            <SystemHealthCard
              icon={Activity}
              title="Active Scans"
              value={systemHealth.activeScans}
              subtitle="Real-time monitoring"
              progress="85%"
              status="live"
            />
            <SystemHealthCard
              icon={Shield}
              title="Security Status"
              value={systemHealth.threatsDetected}
              subtitle="Threats detected"
              progress="98%"
              status="secure"
            />
            <SystemHealthCard
              icon={CheckCircle}
              title="Compliance Score"
              value={`${systemHealth.complianceScore}%`}
              subtitle="Regulatory compliance"
              progress="99%"
              status="compliant"
            />
            <SystemHealthCard
              icon={Cpu}
              title="Network Latency"
              value={`${systemHealth.latency}ms`}
              subtitle="System performance"
              progress="92%"
              status="system"
            />
          </div>
        </div>

        {/* Professional Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card variant="elevated" className="h-full">
              <CardHeader>
                <CardTitle size="lg" className="text-white">Market Overview</CardTitle>
                <p className="text-caption text-gray-400">Real-time market statistics and performance metrics</p>
              </CardHeader>
              <CardContent>
                <div className="grid-metrics">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-archetyp-400 mb-2 number-professional">
                      <AnimatedNumber value={stats.totalMarketCap} decimals={1} suffix="B" prefix="$" />
                    </div>
                    <div className="text-caption text-gray-400">Market Cap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2 number-professional">
                      <AnimatedNumber value={stats.totalVolume} decimals={1} suffix="M" prefix="$" />
                    </div>
                    <div className="text-caption text-gray-400">24h Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success-400 mb-2 number-professional">
                      <AnimatedNumber value={stats.activeAssets} />
                    </div>
                    <div className="text-caption text-gray-400">Active Assets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-archetyp-400 mb-2 number-professional">
                      <AnimatedNumber value={stats.countries} />
                    </div>
                    <div className="text-caption text-gray-400">Countries</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="text-white">Asset Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    dataKey="count"
                    label={false}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [`${value} assets`, name]}
                    contentStyle={{
                      backgroundColor: '#000000',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      color: '#ffffff',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.7)'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Professional Scan Progress */}
        {isScanning && (
          <Card variant="accent" className="mb-12">
            <CardContent spacing="loose">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-archetyp-500/20 rounded-2xl flex items-center justify-center border border-archetyp-500/30">
                    <Activity className="w-6 h-6 text-archetyp-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Asset Scanning in Progress</h3>
                    <p className="text-sm text-gray-400">
                      Analyzing {allAssets.length} assets across {stats.categories} categories
                    </p>
                  </div>
                </div>
                <span className="text-lg text-archetyp-400 font-bold number-professional">
                  {scanProgress.toFixed(1)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-archetyp-400 to-archetyp-500 h-4 rounded-full transition-all duration-300 shadow-glow"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Professional Filter Controls */}
        <Card variant="elevated" className="mb-12">
          <CardContent spacing="loose">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-archetyp-500 focus:ring-2 focus:ring-archetyp-500/20 transition-all duration-200 backdrop-blur-sm"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-archetyp-500 focus:ring-2 focus:ring-archetyp-500/20 transition-all duration-200 backdrop-blur-sm"
              >
                <option value="all">All Categories</option>
                <option value="strategic_minerals">Strategic Minerals</option>
                <option value="energy">Energy</option>
                <option value="agriculture">Agriculture</option>
                <option value="natural_resources">Natural Resources</option>
                <option value="environmental_esg">Environmental ESG</option>
                <option value="financial_instruments">Financial Instruments</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="social">Social</option>
                <option value="gemstones">Gemstones</option>
              </select>

              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-archetyp-500 focus:ring-2 focus:ring-archetyp-500/20 transition-all duration-200 backdrop-blur-sm"
              >
                <option value="all">All Countries</option>
                <option value="Brazil">Brazil</option>
                <option value="Chile">Chile</option>
                <option value="Argentina">Argentina</option>
                <option value="UAE">UAE</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="flex-1"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="flex-1"
                >
                  Table
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Showing {paginatedAssets.length} of {filteredAssets.length} assets</span>
              <div className="flex items-center space-x-3">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-archetyp-500"
                >
                  <option value="name">Name</option>
                  <option value="currentPrice">Price</option>
                  <option value="change24h">Change</option>
                  <option value="volume24h">Volume</option>
                  <option value="marketCap">Market Cap</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-3"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Asset Portfolio */}
        <Card variant="elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle size="xl" className="text-white">Asset Portfolio</CardTitle>
                <p className="text-caption text-gray-400 mt-2">
                  Comprehensive view of all tokenized real-world assets
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent spacing="loose">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="loading-shimmer-professional rounded-2xl p-6 border border-white/5 h-48"></div>
                ))}
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {paginatedAssets.map((asset, index) => (
                  <AssetCard 
                    key={asset.id || asset.symbol} 
                    asset={asset} 
                    index={index}
                    className="animate-fade-in-professional"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto scrollbar-professional">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Asset</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Symbol</th>
                      <th className="text-right py-4 px-6 text-sm font-semibold text-gray-300">Price</th>
                      <th className="text-right py-4 px-6 text-sm font-semibold text-gray-300">Change</th>
                      <th className="text-right py-4 px-6 text-sm font-semibold text-gray-300">Volume</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedAssets.map((asset, index) => (
                      <tr key={asset.id || asset.symbol} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-6 text-sm text-white font-medium">{asset.name}</td>
                        <td className="py-4 px-6 text-sm text-gray-300 font-mono">{asset.symbol}</td>
                        <td className="py-4 px-6 text-right text-sm text-white font-mono">
                          <AnimatedNumber 
                            value={asset.currentPrice || asset.price} 
                            duration={400}
                            decimals={2}
                            prefix="$"
                          />
                        </td>
                        <td className={`py-4 px-6 text-right text-sm font-semibold ${
                          (asset.change24h || asset.change) >= 0 ? 'text-success-400' : 'text-error-400'
                        }`}>
                          {(asset.change24h || asset.change) >= 0 ? '+' : ''}{(asset.change24h || asset.change)?.toFixed(2)}%
                        </td>
                        <td className="py-4 px-6 text-right text-sm text-gray-300 font-mono">
                          <AnimatedNumber 
                            value={asset.volume24h || asset.volume || 0} 
                            duration={400}
                            decimals={1}
                            suffix="M"
                            prefix="$"
                          />
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-300">{asset.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {filteredAssets.length === 0 && !isLoading && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-400 mb-3">No assets found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}

            {/* Professional Pagination */}
            {filteredAssets.length > itemsPerPage && (
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-gray-400">
                  Page {currentPage} of {Math.ceil(filteredAssets.length / itemsPerPage)}
                </div>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, Math.ceil(filteredAssets.length / itemsPerPage)) }).map((_, index) => {
                      const pageNum = index + 1;
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'primary' : 'ghost'}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className="w-10 h-10 p-0"
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(Math.ceil(filteredAssets.length / itemsPerPage), prev + 1))}
                    disabled={currentPage === Math.ceil(filteredAssets.length / itemsPerPage)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ARCHTScan;