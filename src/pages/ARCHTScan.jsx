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
  Star, Award, Building2, Globe, DollarSign, Filter, Maximize2, Minimize2
} from 'lucide-react';
import AnimatedNumber from '../components/AnimatedNumber';

// Importaciones con manejo de errores
let getAllAssets;
try {
  const assetsModule = require('../data/assets');
  getAllAssets = assetsModule.getAllAssets;
} catch (error) {
  console.warn('Error loading assets module:', error);
  getAllAssets = () => [];
}

let Card, CardContent, CardHeader, CardTitle;
try {
  const cardModule = require('../components/ui/Card');
  Card = cardModule.Card;
  CardContent = cardModule.CardContent;
  CardHeader = cardModule.CardHeader;
  CardTitle = cardModule.CardTitle;
} catch (error) {
  console.warn('Error loading Card components:', error);
  // Fallback components
  Card = ({ children, className, ...props }) => <div className={`bg-gray-800 rounded-lg border border-gray-700 ${className || ''}`} {...props}>{children}</div>;
  CardContent = ({ children, className, ...props }) => <div className={`p-6 ${className || ''}`} {...props}>{children}</div>;
  CardHeader = ({ children, className, ...props }) => <div className={`p-6 pb-0 ${className || ''}`} {...props}>{children}</div>;
  CardTitle = ({ children, className, ...props }) => <h3 className={`text-lg font-semibold text-white ${className || ''}`} {...props}>{children}</h3>;
}

let Button;
try {
  const buttonModule = require('../components/ui/Button');
  Button = buttonModule.Button;
} catch (error) {
  console.warn('Error loading Button component:', error);
  Button = ({ children, className, onClick, disabled, variant, size, ...props }) => (
    <button 
      className={`px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// Memoized components para evitar re-renders innecesarios
const SystemHealthCard = memo(({ icon: Icon, title, value, subtitle, progress, status, className = "" }) => (
  <Card className={`bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300 group hover-lift ${className}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl animate-scale-in">
          <Icon className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
        </div>
        <div className="flex items-center text-hierarchy-6 text-contrast-high bg-white/10 px-2 py-1 rounded-full text-shadow-subtle">
          {status === 'live' && <TrendingUp className="w-4 h-4 mr-1" />}
          {title}
        </div>
      </div>
      <div className="text-hierarchy-1 text-glow-white text-contrast-high mb-2 group-hover:text-gray-300 transition-colors">
        <AnimatedNumber 
          value={typeof value === 'string' ? parseFloat(value.replace(/[^\d.-]/g, '')) : value} 
          duration={800}
          decimals={typeof value === 'string' && value.includes('%') ? 1 : 0}
          suffix={typeof value === 'string' && value.includes('%') ? '%' : ''}
          glow={true}
          scale={true}
        />
      </div>
      <div className="text-body-small text-contrast-medium group-hover:text-gray-300 transition-colors text-shadow-subtle">{subtitle}</div>
      <div className="mt-2 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ${progress}`}></div>
      </div>
    </CardContent>
  </Card>
));

const MetricCard = memo(({ metric, value, trend, status, threshold, icon: Icon }) => (
  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-white/20 transition-all duration-300 hover:bg-gray-800/70 hover-lift">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-2">
        <Icon className="w-4 h-4 text-gray-400" />
        <h4 className="text-body-small text-contrast-medium text-shadow-subtle">{metric}</h4>
      </div>
      <div className={`flex items-center text-caption ${status === 'excellent' ? 'text-green-400' : status === 'good' ? 'text-white' : 'text-gray-400'}`}>
        {trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
        {trend}
      </div>
    </div>
    <div className="text-hierarchy-4 text-glow-white text-contrast-high mb-1">
      <AnimatedNumber 
        value={value} 
        duration={600}
        decimals={0}
        glow={true}
        scale={true}
      />
    </div>
    <div className="w-full bg-gray-700 rounded-full h-1.5">
      <div 
        className={`h-1.5 rounded-full ${value >= threshold ? 'bg-gradient-to-r from-white to-gray-300' : 'bg-gradient-to-r from-gray-500 to-gray-400'}`}
        style={{ width: `${Math.min(100, (value / threshold) * 100)}%` }}
      ></div>
    </div>
  </div>
));

function ARCHTScan() {
  // Estados principales
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [realTimeData, setRealTimeData] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [viewMode, setViewMode] = useState('grid');

  // Datos del sistema
  const [systemHealth] = useState({
    activeScans: 247,
    threatsDetected: 3,
    complianceScore: 98.7,
    latency: '12ms',
    lastUpdate: new Date().toLocaleTimeString()
  });

  // Cargar activos con manejo de errores mejorado
  const allAssets = useMemo(() => {
    return [
      // STRATEGIC MINERALS
      { name: "Gold", symbol: "AU", category: "strategic_minerals", region: "Global", country: "Multiple", price: 2047.50, volume: 1.2, change: 2.3, unit: "oz" },
      { name: "Silver", symbol: "AG", category: "strategic_minerals", region: "Global", country: "Multiple", price: 24.75, volume: 0.856, change: 1.8, unit: "oz" },
      { name: "Platinum", symbol: "PT", category: "strategic_minerals", region: "Africa", country: "South Africa", price: 1050.30, volume: 0.234, change: 1.2, unit: "oz" },
      { name: "Palladium", symbol: "PD", category: "strategic_minerals", region: "Europe", country: "Russia", price: 1450.80, volume: 0.156, change: -0.8, unit: "oz" },
      { name: "Copper", symbol: "CU", category: "strategic_minerals", region: "LATAM", country: "Chile", price: 4.25, volume: 2.1, change: 3.1, unit: "ton" },
      { name: "Nickel", symbol: "NI", category: "strategic_minerals", region: "Asia", country: "Indonesia", price: 18.50, volume: 0.89, change: 2.7, unit: "ton" },
      { name: "Aluminum", symbol: "AL", category: "strategic_minerals", region: "Asia", country: "China", price: 2.15, volume: 3.2, change: 1.9, unit: "ton" },
      { name: "Iron", symbol: "FE", category: "strategic_minerals", region: "LATAM", country: "Brazil", price: 0.95, volume: 4.5, change: 0.8, unit: "ton" },
      { name: "Uranium", symbol: "U", category: "strategic_minerals", region: "Oceania", country: "Australia", price: 65.40, volume: 0.45, change: 4.2, unit: "lb" },
      { name: "Lithium", symbol: "LI", category: "strategic_minerals", region: "LATAM", country: "Chile", price: 18.50, volume: 1.8, change: 4.2, unit: "ton" },
      
      // ENERGY
      { name: "Crude Oil", symbol: "OIL", category: "energy", region: "Global", country: "Multiple", price: 78.45, volume: 12.5, change: 1.8, unit: "barrel" },
      { name: "Liquefied Natural Gas", symbol: "LNG", category: "energy", region: "Global", country: "Multiple", price: 3.25, volume: 8.9, change: 2.3, unit: "MMBtu" },
      { name: "Green Hydrogen", symbol: "H2G", category: "energy", region: "Europe", country: "Germany", price: 4.50, volume: 2.1, change: 5.2, unit: "kg" },
      { name: "Solar Energy", symbol: "SOLAR", category: "energy", region: "Asia", country: "China", price: 0.045, volume: 15.6, change: 4.8, unit: "MWh" },
      { name: "Wind Energy", symbol: "WIND", category: "energy", region: "Europe", country: "Denmark", price: 0.035, volume: 18.2, change: 3.9, unit: "MWh" },
      
      // AGRICULTURE
      { name: "Soybeans", symbol: "SOY", category: "agriculture", region: "LATAM", country: "Brazil", price: 12.85, volume: 6.8, change: 2.1, unit: "bushel" },
      { name: "Corn", symbol: "CORN", category: "agriculture", region: "North America", country: "USA", price: 6.45, volume: 8.9, change: 1.8, unit: "bushel" },
      { name: "Wheat", symbol: "WHEAT", category: "agriculture", region: "Europe", country: "Ukraine", price: 7.25, volume: 5.2, change: 3.2, unit: "bushel" },
      { name: "Coffee", symbol: "COFFEE", category: "agriculture", region: "LATAM", country: "Brazil", price: 2.15, volume: 3.4, change: 4.5, unit: "lb" },
      { name: "Cocoa", symbol: "COCOA", category: "agriculture", region: "Africa", country: "Ivory Coast", price: 3.25, volume: 1.8, change: 2.8, unit: "ton" },
      
      // NATURAL RESOURCES
      { name: "Freshwater", symbol: "WATER", category: "natural_resources", region: "Global", country: "Multiple", price: 0.0025, volume: 25.6, change: 5.8, unit: "m³" },
      { name: "Forests", symbol: "FOREST", category: "natural_resources", region: "Global", country: "Multiple", price: 85.50, volume: 3.2, change: 3.8, unit: "hectare" },
      { name: "Agricultural Land", symbol: "LAND", category: "natural_resources", region: "Global", country: "Multiple", price: 1250.75, volume: 2.8, change: 4.2, unit: "hectare" },
      
      // ENVIRONMENTAL ESG
      { name: "Carbon Credits", symbol: "CARBONC", category: "environmental_esg", region: "Global", country: "Multiple", price: 45.25, volume: 8.9, change: 6.2, unit: "ton CO2" },
      { name: "Water Credits", symbol: "WATERC", category: "environmental_esg", region: "Global", country: "Multiple", price: 25.50, volume: 3.2, change: 4.8, unit: "m³" },
      { name: "Biodiversity Credits", symbol: "BIODIVC", category: "environmental_esg", region: "Global", country: "Multiple", price: 125.80, volume: 2.1, change: 4.5, unit: "hectare" },
      
      // FINANCIAL INSTRUMENTS
      { name: "Offtake Tokens", symbol: "OFFTK", category: "financial_instruments", region: "Global", country: "Multiple", price: 125.50, volume: 8.9, change: 2.8, unit: "token" },
      { name: "Royalty Tokens", symbol: "ROYL", category: "financial_instruments", region: "Global", country: "Multiple", price: 85.25, volume: 6.2, change: 3.1, unit: "token" },
      { name: "Warehouse Receipt Tokens", symbol: "WRT", category: "financial_instruments", region: "Global", country: "Multiple", price: 95.75, volume: 4.8, change: 2.7, unit: "token" },
      
      // INFRASTRUCTURE
      { name: "Road Concessions", symbol: "ROADC", category: "infrastructure", region: "LATAM", country: "Brazil", price: 125.50, volume: 2.8, change: 2.1, unit: "km" },
      { name: "Port Concessions", symbol: "PORTC", category: "infrastructure", region: "Asia", country: "Singapore", price: 185.75, volume: 1.8, change: 3.2, unit: "port" },
      { name: "Airport Concessions", symbol: "AIRPC", category: "infrastructure", region: "Europe", country: "UK", price: 225.50, volume: 1.2, change: 2.8, unit: "airport" },
      
      // SOCIAL
      { name: "Social Token", symbol: "SOCIAL", category: "social", region: "Global", country: "Multiple", price: 1.25, volume: 15.6, change: 4.2, unit: "token" },
      { name: "Impact Tokens", symbol: "IMPACT", category: "social", region: "Global", country: "Multiple", price: 2.85, volume: 8.9, change: 3.8, unit: "token" },
      
      // GEMSTONES
      { name: "Diamond", symbol: "DIAM", category: "gemstones", region: "Africa", country: "Botswana", price: 2500.00, volume: 0.8, change: 2.5, unit: "carat" },
      { name: "Ruby", symbol: "RUBY", category: "gemstones", region: "Asia", country: "Myanmar", price: 8500.00, volume: 0.3, change: 4.2, unit: "carat" },
      { name: "Sapphire", symbol: "SAPP", category: "gemstones", region: "Asia", country: "Sri Lanka", price: 3200.00, volume: 0.5, change: 3.1, unit: "carat" },
      { name: "Emerald", symbol: "EMER", category: "gemstones", region: "LATAM", country: "Colombia", price: 4500.00, volume: 0.4, change: 3.8, unit: "carat" },
      { name: "Amethyst", symbol: "AMET", category: "gemstones", region: "LATAM", country: "Brazil", price: 125.50, volume: 2.1, change: 1.8, unit: "carat" },
      { name: "Topaz", symbol: "TOPA", category: "gemstones", region: "Asia", country: "Pakistan", price: 85.25, volume: 1.8, change: 2.3, unit: "carat" },
      { name: "Aquamarine", symbol: "AQUA", category: "gemstones", region: "LATAM", country: "Brazil", price: 185.75, volume: 1.2, change: 2.7, unit: "carat" },
      { name: "Garnet", symbol: "GARN", category: "gemstones", region: "Africa", country: "Tanzania", price: 45.50, volume: 3.2, change: 1.5, unit: "carat" },
      { name: "Opal", symbol: "OPAL", category: "gemstones", region: "Oceania", country: "Australia", price: 185.50, volume: 1.8, change: 3.2, unit: "carat" },
      { name: "Pearl", symbol: "PEARL", category: "gemstones", region: "Asia", country: "Japan", price: 95.25, volume: 2.5, change: 2.4, unit: "piece" },
      { name: "Jade", symbol: "JADE", category: "gemstones", region: "Asia", country: "Myanmar", price: 1250.00, volume: 0.8, change: 4.5, unit: "carat" },
      { name: "Tanzanite", symbol: "TANZ", category: "gemstones", region: "Africa", country: "Tanzania", price: 850.00, volume: 0.6, change: 3.8, unit: "carat" }
    ];
  }, []);

  // Filtros y búsqueda optimizados
  const filteredAssets = useMemo(() => {
    let assets = allAssets;

    // Filtro por búsqueda
    if (searchTerm) {
      assets = assets.filter(asset => 
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoría
    if (selectedCategory !== 'all') {
      assets = assets.filter(asset => asset.category === selectedCategory);
    }

    // Filtro por región
    if (selectedRegion !== 'all') {
      assets = assets.filter(asset => asset.region === selectedRegion);
    }

    // Filtro por país
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
  }, [allAssets, searchTerm, selectedCategory, selectedRegion, selectedCountry, sortBy, sortOrder]);

  // Paginación
  const paginatedAssets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAssets.slice(startIndex, endIndex);
  }, [filteredAssets, currentPage, itemsPerPage]);

  // Handlers optimizados con useCallback
  const handleRefreshData = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const handleToggleSidebar = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const handleStartScan = useCallback(() => {
    setIsScanning(true);
    setScanProgress(0);
  }, []);

  const handleStopScan = useCallback(() => {
    setIsScanning(false);
    setScanProgress(0);
  }, []);

  // Error boundary
  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error Loading ARCHT SCAN</h1>
          <p className="text-gray-400 mb-4">{error}</p>
          <Button onClick={handleRefreshData}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden pt-0">
      {/* Sidebar avanzado */}
      {!sidebarCollapsed && (
        <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 z-40 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">ARCHT SCAN Demo</h2>
              <Button variant="ghost" size="sm" onClick={handleToggleSidebar}>
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="space-y-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Total Assets</span>
                  <span className="text-lg font-bold text-white">{allAssets.length}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Active Scans</span>
                  <span className="text-lg font-bold text-green-400">{systemHealth.activeScans}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Compliance</span>
                  <span className="text-lg font-bold text-white">{systemHealth.complianceScore}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header del ARCHT SCAN optimizado */}
      <div className={`sticky top-16 z-30 bg-black/95 backdrop-blur-md border-b border-gray-800 ${sidebarCollapsed ? '' : 'ml-80'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleToggleSidebar} className="text-gray-400 hover:text-white">
                <BarChart3 className="w-5 h-5" />
              </Button>
              <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-hierarchy-2 font-display text-glow-white text-contrast-high animate-fade-in-up">
                  ARCHT SCAN Demo
                </h1>
                <p className="text-body-small text-contrast-medium flex items-center gap-2 animate-fade-in-up animate-delay-200">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${realTimeData ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                  {realTimeData ? 'Live Monitoring' : 'Paused'} • Advanced Asset Analysis
                  <span className="text-caption text-contrast-low ml-2">Last update: {systemHealth.lastUpdate}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Scan Controls optimizados */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={isScanning ? "destructive" : "default"}
                  size="sm"
                  onClick={isScanning ? handleStopScan : handleStartScan}
                  className="flex items-center space-x-2"
                >
                  {isScanning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isScanning ? 'Stop Scan' : 'Start Scan'}</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={handleRefreshData} disabled={isLoading}>
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${sidebarCollapsed ? '' : 'ml-80'} overflow-y-auto`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${sidebarCollapsed ? '' : 'ml-80'} min-h-screen`}>
        {/* System Health Overview optimizado */}
        <div className="mb-8">
          <h2 className="text-hierarchy-3 font-display text-glow-white text-contrast-high mb-6 animate-fade-in-up">
            System Health Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SystemHealthCard
              icon={Activity}
              title="Live"
              value={systemHealth.activeScans}
              subtitle="Active Scans"
              progress="w-4/5"
              status="live"
              className="animate-fade-in-up animate-delay-100"
            />
            <SystemHealthCard
              icon={Shield}
              title="Secure"
              value={systemHealth.threatsDetected}
              subtitle="Threats Detected"
              progress="w-1/4"
              status="secure"
              className="animate-fade-in-up animate-delay-200"
            />
            <SystemHealthCard
              icon={CheckCircle}
              title="Compliant"
              value={`${systemHealth.complianceScore.toFixed(1)}%`}
              subtitle="Compliance Score"
              progress="w-5/6"
              status="compliant"
              className="animate-fade-in-up animate-delay-300"
            />
            <SystemHealthCard
              icon={Cpu}
              title="System"
              value={systemHealth.latency}
              subtitle="Network Latency"
              progress="w-3/4"
              status="system"
              className="animate-fade-in-up animate-delay-400"
            />
          </div>
        </div>

        {/* Scan Progress optimizado */}
        {isScanning && (
          <Card className="mb-8 bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Asset Scanning in Progress</h3>
                <span className="text-sm text-gray-400">{scanProgress.toFixed(1)}% Complete</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">
                Scanning {allAssets.length} assets across {new Set(allAssets.map(a => a.category)).size} categories...
              </p>
            </CardContent>
          </Card>
        )}

        {/* Controles de filtrado y búsqueda */}
        <Card className="mb-8 bg-gray-900/50 border border-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/20"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white/20"
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
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-white/20"
              >
                <option value="all">All Regions</option>
                <option value="Global">Global</option>
                <option value="LATAM">LATAM</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
              </select>

              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'table' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('table')}
                >
                  Table
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Showing {paginatedAssets.length} of {filteredAssets.length} assets</span>
              <div className="flex items-center space-x-2">
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-white text-xs"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="change">Change</option>
                  <option value="volume">Volume</option>
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de activos */}
        <Card className="bg-gray-900/50 border border-gray-800">
          <CardContent className="p-6">
            <h3 className="text-hierarchy-4 font-display text-glow-white text-contrast-high mb-6">
              Asset Portfolio
            </h3>
            
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedAssets.map((asset, index) => (
                  <div
                    key={asset.symbol}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-white/20 transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-body-small text-contrast-high font-semibold">{asset.name}</h4>
                      <span className="text-caption text-contrast-low">{asset.symbol}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-caption text-contrast-medium">Price:</span>
                        <span className="text-body-small text-contrast-high font-semibold">
                          <AnimatedNumber 
                            value={asset.price} 
                            duration={400}
                            decimals={2}
                            prefix="$"
                          />
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-caption text-contrast-medium">Change:</span>
                        <span className={`text-body-small font-semibold ${asset.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.change > 0 ? '+' : ''}{asset.change}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-caption text-contrast-medium">Region:</span>
                        <span className="text-caption text-contrast-high">{asset.region}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-body-small text-contrast-medium">Asset</th>
                      <th className="text-left py-3 px-4 text-body-small text-contrast-medium">Symbol</th>
                      <th className="text-right py-3 px-4 text-body-small text-contrast-medium">Price</th>
                      <th className="text-right py-3 px-4 text-body-small text-contrast-medium">Change</th>
                      <th className="text-right py-3 px-4 text-body-small text-contrast-medium">Volume</th>
                      <th className="text-left py-3 px-4 text-body-small text-contrast-medium">Region</th>
                      <th className="text-left py-3 px-4 text-body-small text-contrast-medium">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedAssets.map((asset, index) => (
                      <tr key={asset.symbol} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-4 text-body-small text-contrast-high font-semibold">{asset.name}</td>
                        <td className="py-3 px-4 text-caption text-contrast-medium">{asset.symbol}</td>
                        <td className="py-3 px-4 text-right text-body-small text-contrast-high">
                          <AnimatedNumber 
                            value={asset.price} 
                            duration={400}
                            decimals={2}
                            prefix="$"
                          />
                        </td>
                        <td className={`py-3 px-4 text-right text-body-small font-semibold ${asset.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {asset.change > 0 ? '+' : ''}{asset.change}%
                        </td>
                        <td className="py-3 px-4 text-right text-body-small text-contrast-medium">
                          <AnimatedNumber 
                            value={asset.volume} 
                            duration={400}
                            decimals={2}
                            suffix="M"
                          />
                        </td>
                        <td className="py-3 px-4 text-caption text-contrast-medium">{asset.region}</td>
                        <td className="py-3 px-4 text-caption text-contrast-medium">{asset.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Paginación */}
            {filteredAssets.length > itemsPerPage && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <div className="text-caption text-contrast-medium">
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
