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
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import AnimatedNumber from '../components/AnimatedNumber';

// Memoized components para optimización
const SystemHealthCard = memo(({ icon: Icon, title, value, subtitle, progress, status, className = "" }) => (
  <Card className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 ${className}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30">
          <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${
          status === 'live' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
          status === 'secure' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
          status === 'compliant' ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' :
          'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
        }`}>
          {title}
        </div>
      </div>
      <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
        <AnimatedNumber 
          value={typeof value === 'string' ? parseFloat(value.replace(/[^\d.-]/g, '')) : value} 
          duration={800}
          decimals={typeof value === 'string' && value.includes('%') ? 1 : 0}
          suffix={typeof value === 'string' && value.includes('%') ? '%' : ''}
          className="font-mono"
        />
      </div>
      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{subtitle}</div>
      {progress && (
        <div className="mt-3 w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className={`h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ${progress}`}></div>
        </div>
      )}
    </CardContent>
  </Card>
));

const MetricCard = memo(({ metric, value, trend, status, threshold, icon: Icon }) => (
  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 group">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2">
        <Icon className="w-4 h-4 text-cyan-400" />
        <h4 className="text-sm text-gray-300 group-hover:text-white transition-colors">{metric}</h4>
      </div>
      <div className={`flex items-center text-xs font-semibold ${
        status === 'excellent' ? 'text-green-400' : 
        status === 'good' ? 'text-cyan-400' : 
        'text-gray-400'
      }`}>
        {trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
        {trend}
      </div>
    </div>
    <div className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
      <AnimatedNumber 
        value={value} 
        duration={600}
        decimals={0}
        className="font-mono"
      />
    </div>
    <div className="w-full bg-gray-700 rounded-full h-1.5">
      <div 
        className={`h-1.5 rounded-full transition-all duration-500 ${
          value >= threshold ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-gray-500 to-gray-400'
        }`}
        style={{ width: `${Math.min(100, (value / threshold) * 100)}%` }}
      ></div>
    </div>
  </div>
));

const AssetCard = memo(({ asset, index }) => {
  const getCategoryColor = (category) => {
    const colors = {
      strategic_minerals: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
      energy: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
      agriculture: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
      natural_resources: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
      environmental_esg: 'from-teal-500/20 to-green-500/20 border-teal-500/30',
      financial_instruments: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30',
      infrastructure: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
      social: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
      gemstones: 'from-rose-500/20 to-pink-500/20 border-rose-500/30'
    };
    return colors[category] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
  };

  return (
    <Card className={`bg-gradient-to-br ${getCategoryColor(asset.category)} border hover:scale-105 transition-all duration-300 group`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">{asset.symbol?.charAt(0)}</span>
          </div>
          <div className="text-xs text-gray-400 bg-black/30 px-2 py-1 rounded-full">
            {asset.unit}
          </div>
        </div>
        
        <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">{asset.name}</h4>
        <p className="text-xs text-gray-400 mb-3">{asset.symbol}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Price:</span>
            <span className="text-sm font-semibold text-white">
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
              (asset.change24h || asset.change) >= 0 ? 'text-green-400' : 'text-red-400'
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
            <span className="text-xs text-white">{asset.country}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

function ARCHTScan() {
  // Estados principales optimizados
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [realTimeData, setRealTimeData] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState('grid');
  const [showHiddenAssets, setShowHiddenAssets] = useState(false);

  // Datos del sistema mejorados
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

  // Cargar activos con manejo de errores
  const allAssets = useMemo(() => {
    try {
      return getAllAssets();
    } catch (error) {
      console.error('Error loading assets:', error);
      return [];
    }
  }, []);

  // Actualizar estadísticas del sistema
  useEffect(() => {
    if (allAssets.length > 0) {
      const totalVolume = allAssets.reduce((sum, asset) => sum + (asset.volume24h || 0), 0);
      systemHealth.totalAssets = allAssets.length;
      systemHealth.totalVolume = totalVolume;
    }
  }, [allAssets]);

  // Filtros y búsqueda optimizados
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

    // Ordenamiento
    assets.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return assets;
  }, [allAssets, searchTerm, selectedCategory, selectedCountry, sortBy, sortOrder]);

  // Paginación optimizada
  const paginatedAssets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAssets.slice(startIndex, endIndex);
  }, [filteredAssets, currentPage, itemsPerPage]);

  // Estadísticas calculadas
  const stats = useMemo(() => {
    const totalMarketCap = allAssets.reduce((sum, asset) => sum + (asset.marketCap || 0), 0);
    const totalVolume = allAssets.reduce((sum, asset) => sum + (asset.volume24h || 0), 0);
    const avgChange = allAssets.reduce((sum, asset) => sum + (asset.change24h || 0), 0) / allAssets.length;
    const categories = new Set(allAssets.map(asset => asset.category)).size;
    const countries = new Set(allAssets.map(asset => asset.country)).size;

    return {
      totalMarketCap: totalMarketCap / 1000000000, // En billones
      totalVolume: totalVolume / 1000000, // En millones
      avgChange,
      categories,
      countries,
      activeAssets: allAssets.filter(asset => (asset.change24h || 0) > 0).length
    };
  }, [allAssets]);

  // Handlers optimizados
  const handleRefreshData = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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

  const handleStopScan = useCallback(() => {
    setIsScanning(false);
    setScanProgress(0);
  }, []);

  // Datos para gráficos
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
      value: item.value / 1000000000, // En billones
      color: [
        '#06b6d4', '#10b981', '#f59e0b', '#ef4444', 
        '#8b5cf6', '#ec4899', '#f97316', '#84cc16'
      ][index % 8]
    }));
  }, [allAssets]);

  // Error boundary
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="bg-red-900/20 border border-red-500/30 max-w-md">
          <CardContent className="p-8 text-center">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h1 className="text-xl font-bold text-red-400 mb-4">Error Loading ARCHT SCAN</h1>
            <p className="text-gray-300 mb-6">{error}</p>
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
    <div className="bg-black text-white min-h-screen">
      {/* Sidebar Modal */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-gray-800 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">ARCHT SCAN</h2>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-white mb-3">Quick Stats</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Total Assets</span>
                      <span className="text-sm font-bold text-white">{stats.totalMarketCap.toFixed(1)}B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Categories</span>
                      <span className="text-sm font-bold text-cyan-400">{stats.categories}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Countries</span>
                      <span className="text-sm font-bold text-white">{stats.countries}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-sm font-semibold text-white mb-3">System Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Uptime</span>
                      <span className="text-sm font-bold text-green-400">{systemHealth.uptime}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Latency</span>
                      <span className="text-sm font-bold text-white">{systemHealth.latency}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">Compliance</span>
                      <span className="text-sm font-bold text-purple-400">{systemHealth.complianceScore}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Principal */}
      <div className="sticky top-16 z-30 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  ARCHT SCAN
                </h1>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${realTimeData ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {realTimeData ? 'Live Monitoring' : 'Paused'} • Advanced Asset Analysis
                  <span className="text-xs text-gray-500 ml-2">Last update: {systemHealth.lastUpdate}</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
              
              <Button
                variant={realTimeData ? "default" : "outline"}
                size="sm"
                onClick={() => setRealTimeData(!realTimeData)}
                className="hidden sm:flex items-center space-x-2"
              >
                {realTimeData ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{realTimeData ? 'Pause' : 'Resume'}</span>
              </Button>
              
              <Button
                variant={isScanning ? "destructive" : "default"}
                size="sm"
                onClick={isScanning ? handleStopScan : handleStartScan}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Health Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">System Health Overview</h2>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">All Systems Operational</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SystemHealthCard
              icon={Activity}
              title="Live"
              value={systemHealth.activeScans}
              subtitle="Active Scans"
              progress="w-4/5"
              status="live"
            />
            <SystemHealthCard
              icon={Shield}
              title="Secure"
              value={systemHealth.threatsDetected}
              subtitle="Threats Detected"
              progress="w-1/4"
              status="secure"
            />
            <SystemHealthCard
              icon={CheckCircle}
              title="Compliant"
              value={systemHealth.complianceScore}
              subtitle="Compliance Score"
              progress="w-5/6"
              status="compliant"
            />
            <SystemHealthCard
              icon={Cpu}
              title="System"
              value={systemHealth.latency}
              subtitle="Network Latency (ms)"
              progress="w-3/4"
              status="system"
            />
          </div>
        </div>

        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 border border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">Market Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      <AnimatedNumber value={stats.totalMarketCap} decimals={1} suffix="B" prefix="$" />
                    </div>
                    <div className="text-xs text-gray-400">Market Cap</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      <AnimatedNumber value={stats.totalVolume} decimals={1} suffix="M" prefix="$" />
                    </div>
                    <div className="text-xs text-gray-400">24h Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      <AnimatedNumber value={stats.activeAssets} />
                    </div>
                    <div className="text-xs text-gray-400">Active Assets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      <AnimatedNumber value={stats.countries} />
                    </div>
                    <div className="text-xs text-gray-400">Countries</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900/50 border border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">Asset Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
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
                      backgroundColor: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Scan Progress */}
        {isScanning && (
          <Card className="mb-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Asset Scanning in Progress</h3>
                    <p className="text-sm text-gray-400">Analyzing {allAssets.length} assets across {stats.categories} categories</p>
                  </div>
                </div>
                <span className="text-sm text-cyan-400 font-semibold">{scanProgress.toFixed(1)}% Complete</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-300 shadow-lg"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Controles de filtrado */}
        <Card className="mb-8 bg-gray-900/50 border border-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
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
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200"
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
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="flex-1"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="flex-1"
                >
                  Table
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden flex-1"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Stats
                </Button>
                <Button
                  variant={showHiddenAssets ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setShowHiddenAssets(!showHiddenAssets)}
                  className="hidden lg:flex items-center space-x-2"
                >
                  {showHiddenAssets ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  <span className="hidden xl:inline">Hidden</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400 mt-4">
              <span>Showing {paginatedAssets.length} of {filteredAssets.length} assets</span>
              <div className="flex items-center space-x-2">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-white text-xs focus:outline-none focus:border-cyan-500"
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
                  className="px-2"
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Asset Portfolio */}
        <Card className="bg-gray-900/50 border border-gray-800">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold text-white">Asset Portfolio</CardTitle>
              <div className="flex items-center space-x-2">
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
          <CardContent className="p-6">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 animate-pulse">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg mb-3"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedAssets.map((asset, index) => (
                  <AssetCard key={asset.id || asset.symbol} asset={asset} index={index} />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Asset</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Symbol</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">Price</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">Change</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-300">Volume</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-300">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedAssets.map((asset, index) => (
                      <tr key={asset.id || asset.symbol} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-4 text-sm text-white font-medium">{asset.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-300">{asset.symbol}</td>
                        <td className="py-3 px-4 text-right text-sm text-white font-mono">
                          <AnimatedNumber 
                            value={asset.currentPrice || asset.price} 
                            duration={400}
                            decimals={2}
                            prefix="$"
                          />
                        </td>
                        <td className={`py-3 px-4 text-right text-sm font-semibold ${
                          (asset.change24h || asset.change) >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {(asset.change24h || asset.change) >= 0 ? '+' : ''}{(asset.change24h || asset.change)?.toFixed(2)}%
                        </td>
                        <td className="py-3 px-4 text-right text-sm text-gray-300 font-mono">
                          <AnimatedNumber 
                            value={asset.volume24h || asset.volume || 0} 
                            duration={400}
                            decimals={1}
                            suffix="M"
                            prefix="$"
                          />
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-300">{asset.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {filteredAssets.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-400 mb-2">No assets found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}

            {/* Paginación mejorada */}
            {filteredAssets.length > itemsPerPage && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <div className="text-sm text-gray-400">
                  Page {currentPage} of {Math.ceil(filteredAssets.length / itemsPerPage)}
                </div>
                <div className="flex items-center space-x-2">
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
                          variant={currentPage === pageNum ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => setCurrentPage(pageNum)}
                          className="w-8 h-8 p-0"
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