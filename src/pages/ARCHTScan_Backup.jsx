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
    <div className="text-xs text-gray-400 mt-1">Threshold: {threshold}</div>
  </div>
));

const AlertItem = memo(({ alert, getAlertIcon }) => (
  <div className={`flex items-center justify-between p-3 rounded-lg border ${
    alert.resolved ? 'bg-gray-800/30 border-gray-700' : 'bg-gray-800/50 border-gray-600'
  } hover:bg-gray-800/70 transition-all duration-200`}>
    <div className="flex items-center space-x-3">
      {getAlertIcon(alert.type)}
      <div>
        <p className={`text-sm ${alert.resolved ? 'text-gray-400' : 'text-white'}`}>
          {alert.message}
        </p>
        <div className="flex items-center space-x-2 mt-1">
          <p className="text-xs text-gray-500">{alert.time}</p>
          <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
            {alert.category}
          </span>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span className={`text-xs px-2 py-1 rounded-full ${
        alert.severity === 'high' ? 'bg-red-900/50 text-red-400' :
        alert.severity === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
        'bg-blue-900/50 text-blue-400'
      }`}>
        {alert.severity}
      </span>
      {alert.resolved && <CheckCircle2 className="w-4 h-4 text-green-400" />}
    </div>
  </div>
));

const AssetCard = memo(({ asset }) => (
  <Card className="bg-gray-800 border border-gray-700 hover:border-white/20 transition-all duration-300 hover:bg-gray-800/90">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">{asset.name} ({asset.symbol})</h3>
        <span className={`text-sm font-medium ${asset.change > 0 ? 'text-white' : 'text-gray-400'}`}>
          {asset.change > 0 ? <ArrowUpRight className="inline w-4 h-4" /> : <ArrowDownRight className="inline w-4 h-4" />} {asset.change}%
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-2">{asset.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
      <div className="flex items-center justify-between text-sm text-gray-300 mb-2">
        <span>Price: <span className="font-semibold text-white">${asset.price.toFixed(2)}</span></span>
        <span>Volume: <span className="font-semibold text-white">${asset.volume.toFixed(2)}M</span></span>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>Region: <span className="font-medium text-gray-400">{asset.region}</span></span>
        <span>Country: <span className="font-medium text-gray-400">{asset.country}</span></span>
      </div>
      {asset.unit && (
        <div className="text-xs text-gray-500 mb-3">
          Unit: <span className="font-medium">{asset.unit}</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="sm" className="flex-1 mr-2" onClick={() => handleAssetSelect(asset)}>
          Analyze
        </Button>
        <Button variant="ghost" size="sm" onClick={() => handleAddToWatchlist(asset)}>
          <Star className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Eye className="w-4 h-4" />
        </Button>
      </div>
    </CardContent>
  </Card>
));

// Componente de predicciones ML
const MLPredictionCard = memo(({ asset, prediction, confidence, trend }) => (
  <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-white">ML Prediction</h4>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          trend === 'bullish' ? 'bg-green-900/50 text-green-400' :
          trend === 'bearish' ? 'bg-red-900/50 text-red-400' :
          'bg-gray-900/50 text-gray-400'
        }`}>
          {trend}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Predicted Price:</span>
          <span className="text-white font-semibold">${prediction.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm">Confidence:</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500"
                style={{ width: `${confidence * 100}%` }}
              ></div>
            </div>
            <span className="text-white text-sm font-medium">{(confidence * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
));

// Componente de análisis técnico
const TechnicalAnalysisCard = memo(({ asset, indicators }) => (
  <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
    <CardContent className="p-4">
      <h4 className="text-sm font-semibold text-white mb-3">Technical Analysis</h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">RSI:</span>
            <span className={`text-xs font-medium ${
              indicators.rsi > 70 ? 'text-red-400' :
              indicators.rsi < 30 ? 'text-green-400' :
              'text-white'
            }`}>
              {indicators.rsi.toFixed(1)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">MACD:</span>
            <span className={`text-xs font-medium ${
              indicators.macd > 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {indicators.macd.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">Support:</span>
            <span className="text-white text-xs font-medium">${indicators.support}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-xs">Resistance:</span>
            <span className="text-white text-xs font-medium">${indicators.resistance}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-xs">Bollinger:</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            indicators.bollinger === 'upper' ? 'bg-red-900/50 text-red-400' :
            indicators.bollinger === 'lower' ? 'bg-green-900/50 text-green-400' :
            'bg-gray-900/50 text-gray-400'
          }`}>
            {indicators.bollinger}
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
));

function ARCHTScan() {
  // Estados principales optimizados
  const [selectedTimeframe, setSelectedTimeframe] = useState('7D');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [realTimeData, setRealTimeData] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [expandedView, setExpandedView] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Estados avanzados para ML y análisis técnico
  const [mlPredictions, setMlPredictions] = useState({});
  const [technicalIndicators, setTechnicalIndicators] = useState({});
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [showAssetDetails, setShowAssetDetails] = useState(false);
  const [customDashboard, setCustomDashboard] = useState(false);
  const [dashboardLayout, setDashboardLayout] = useState('default');
  const [theme, setTheme] = useState('dark');
  const [notifications, setNotifications] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Estado del sistema optimizado
  const [systemHealth, setSystemHealth] = useState({
    status: 'excellent',
    uptime: '99.9%',
    latency: '12ms',
    throughput: '2.4M req/s',
    activeScans: 247,
    threatsDetected: 0,
    complianceScore: 98.7,
    lastUpdate: new Date().toLocaleTimeString()
  });

  // Datos estáticos optimizados (sin re-cálculo innecesario)
  const priceData = useMemo(() => [
    { time: '00:00', AMI: 1247, AAI: 856, ACI: 412, IPRT: 2156, volume: 2.4, alerts: 2, risk: 'low' },
    { time: '04:00', AMI: 1251, AAI: 851, ACI: 418, IPRT: 2162, volume: 2.8, alerts: 1, risk: 'low' },
    { time: '08:00', AMI: 1243, AAI: 863, ACI: 425, IPRT: 2148, volume: 3.2, alerts: 0, risk: 'low' },
    { time: '12:00', AMI: 1256, AAI: 847, ACI: 431, IPRT: 2171, volume: 4.1, alerts: 3, risk: 'medium' },
    { time: '16:00', AMI: 1249, AAI: 859, ACI: 428, IPRT: 2158, volume: 3.8, alerts: 1, risk: 'low' },
    { time: '20:00', AMI: 1253, AAI: 854, ACI: 435, IPRT: 2165, volume: 3.5, alerts: 0, risk: 'low' }
  ], []);

  const volumeData = useMemo(() => [
    { name: 'Strategic Minerals', value: 35, color: '#ffffff', change: '+2.3%', risk: 'low', compliance: 98 },
    { name: 'Energy', value: 25, color: '#e5e5e5', change: '+1.8%', risk: 'medium', compliance: 94 },
    { name: 'Agriculture', value: 20, color: '#a3a3a3', change: '+3.1%', risk: 'low', compliance: 97 },
    { name: 'ESG', value: 15, color: '#ffffff', change: '+4.2%', risk: 'low', compliance: 99 },
    { name: 'Other', value: 5, color: '#a3a3a3', change: '-0.5%', risk: 'high', compliance: 89 }
  ], []);

  const analysisData = useMemo(() => [
    { metric: 'Price Volatility', value: 12.4, trend: 'down', status: 'good', threshold: 15, icon: TrendingDown },
    { metric: 'Liquidity Score', value: 87.2, trend: 'up', status: 'excellent', threshold: 80, icon: TrendingUp },
    { metric: 'Risk Assessment', value: 23.1, trend: 'down', status: 'good', threshold: 30, icon: Shield },
    { metric: 'ESG Compliance', value: 94.8, trend: 'up', status: 'excellent', threshold: 90, icon: Leaf },
    { metric: 'Market Depth', value: 76.3, trend: 'up', status: 'good', threshold: 70, icon: BarChart3 },
    { metric: 'Correlation Index', value: 45.2, trend: 'down', status: 'good', threshold: 50, icon: Network }
  ], []);

  const systemAlerts = useMemo(() => [
    { id: 1, type: 'warning', message: 'High volatility detected in Energy sector', time: '2 min ago', severity: 'medium', resolved: false, category: 'Risk' },
    { id: 2, type: 'info', message: 'New asset tokenization completed', time: '5 min ago', severity: 'low', resolved: true, category: 'System' },
    { id: 3, type: 'success', message: 'ESG compliance verification passed', time: '8 min ago', severity: 'low', resolved: true, category: 'Compliance' },
    { id: 4, type: 'error', message: 'Network latency spike detected', time: '12 min ago', severity: 'high', resolved: false, category: 'Network' },
    { id: 5, type: 'info', message: 'Market depth analysis completed', time: '15 min ago', severity: 'low', resolved: true, category: 'Analysis' }
  ], []);

  // Cargar activos con manejo de errores mejorado
  const allAssets = useMemo(() => {
    // Datos completos de activos organizados por regiones
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

  // Filtros optimizados con debouncing, ordenamiento y paginación
  const filteredAssets = useMemo(() => {
    if (!allAssets.length) return [];
    
    let assets = allAssets;

    if (selectedCategory !== 'all') {
      assets = assets.filter(asset => asset.category === selectedCategory);
    }

    if (selectedRegion !== 'all') {
      assets = assets.filter(asset => asset.region === selectedRegion);
    }

    if (selectedCountry !== 'all') {
      assets = assets.filter(asset => asset.country === selectedCountry);
    }

    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      assets = assets.filter(asset =>
        asset.name.toLowerCase().includes(searchLower) ||
        asset.symbol.toLowerCase().includes(searchLower) ||
        asset.category.toLowerCase().includes(searchLower) ||
        asset.region.toLowerCase().includes(searchLower) ||
        asset.country.toLowerCase().includes(searchLower)
      );
    }

    // Ordenamiento
    assets.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'symbol':
          aValue = a.symbol.toLowerCase();
          bValue = b.symbol.toLowerCase();
          break;
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'volume':
          aValue = a.volume;
          bValue = b.volume;
          break;
        case 'change':
          aValue = a.change;
          bValue = b.change;
          break;
        case 'category':
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return assets;
  }, [allAssets, selectedCategory, selectedRegion, selectedCountry, searchTerm, sortBy, sortOrder]);

  // Paginación
  const paginatedAssets = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAssets.slice(startIndex, endIndex);
  }, [filteredAssets, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredAssets.length / itemsPerPage);

  // Datos de ML y análisis técnico
  const mlPredictionsData = useMemo(() => ({
    'AU': { prediction: 2100.50, confidence: 0.87, trend: 'bullish', timeframe: '7D' },
    'AG': { prediction: 26.25, confidence: 0.82, trend: 'bullish', timeframe: '7D' },
    'OIL': { prediction: 82.15, confidence: 0.75, trend: 'neutral', timeframe: '7D' },
    'SOY': { prediction: 13.45, confidence: 0.79, trend: 'bullish', timeframe: '7D' },
    'CARBON': { prediction: 48.75, confidence: 0.91, trend: 'bullish', timeframe: '7D' }
  }), []);

  const technicalIndicatorsData = useMemo(() => ({
    'AU': { rsi: 65.4, macd: 12.5, bollinger: 'upper', support: 2000, resistance: 2100 },
    'AG': { rsi: 58.2, macd: 2.1, bollinger: 'middle', support: 24, resistance: 26 },
    'OIL': { rsi: 45.8, macd: -1.2, bollinger: 'lower', support: 75, resistance: 82 },
    'SOY': { rsi: 72.1, macd: 0.8, bollinger: 'upper', support: 12, resistance: 14 },
    'CARBON': { rsi: 78.9, macd: 3.2, bollinger: 'upper', support: 45, resistance: 50 }
  }), []);

  const assetCategories = useMemo(() => {
    if (!allAssets.length) return ['all'];
    const categories = new Set(allAssets.map(asset => asset.category));
    return ['all', ...Array.from(categories)];
  }, [allAssets]);

  const assetRegions = useMemo(() => {
    if (!allAssets.length) return ['all'];
    const regions = new Set(allAssets.map(asset => asset.region));
    return ['all', ...Array.from(regions)];
  }, [allAssets]);

  const assetCountries = useMemo(() => {
    if (!allAssets.length) return ['all'];
    const countries = new Set(allAssets.map(asset => asset.country));
    return ['all', ...Array.from(countries)];
  }, [allAssets]);

  // Simulación de datos en tiempo real optimizada con throttling
  useEffect(() => {
    if (!realTimeData) return;

    const interval = setInterval(() => {
      setSystemHealth(prev => ({
        ...prev,
        latency: `${Math.floor(Math.random() * 20) + 5}ms`,
        throughput: `${(Math.random() * 0.5 + 2.0).toFixed(1)}M req/s`,
        activeScans: Math.max(200, Math.min(300, prev.activeScans + Math.floor(Math.random() * 3) - 1)),
        complianceScore: Math.max(95, Math.min(100, prev.complianceScore + (Math.random() * 2 - 1))),
        lastUpdate: new Date().toLocaleTimeString()
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [realTimeData]);

  // Simulación de progreso de escaneo optimizada
  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setIsScanning(false);
          return 0;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isScanning]);

  // Handlers optimizados con useCallback
  const handleRefreshData = useCallback(() => {
    setIsLoading(true);
    setError(null);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const handleStartScan = useCallback(() => {
    setIsScanning(true);
    setScanProgress(0);
  }, []);

  const handleExportData = useCallback(() => {
    try {
      const data = {
        timestamp: new Date().toISOString(),
        systemHealth,
        analysisData,
        filteredAssets: filteredAssets.slice(0, 20)
      };
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `archt-scan-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Export failed:', error);
      setError('Export failed');
    }
  }, [systemHealth, analysisData, filteredAssets]);

  const handleSort = useCallback((field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
    setCurrentPage(1); // Reset to first page when sorting
  }, [sortBy, sortOrder]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const handleItemsPerPageChange = useCallback((items) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to first page
  }, []);

  // Handlers avanzados
  const handleAssetSelect = useCallback((asset) => {
    setSelectedAsset(asset);
    setShowAssetDetails(true);
  }, []);

  const handleAddToWatchlist = useCallback((asset) => {
    setWatchlist(prev => [...prev.filter(item => item.symbol !== asset.symbol), asset]);
    setNotifications(prev => [...prev, {
      id: Date.now(),
      type: 'success',
      message: `${asset.name} added to watchlist`,
      timestamp: new Date().toISOString()
    }]);
  }, []);

  const handleRemoveFromWatchlist = useCallback((symbol) => {
    setWatchlist(prev => prev.filter(item => item.symbol !== symbol));
  }, []);

  const handleCreateAlert = useCallback((asset, condition, value) => {
    const newAlert = {
      id: Date.now(),
      asset: asset.symbol,
      condition,
      value,
      active: true,
      created: new Date().toISOString()
    };
    setAlerts(prev => [...prev, newAlert]);
  }, []);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }, [isFullscreen]);

  const handleToggleSidebar = useCallback(() => {
    setSidebarCollapsed(!sidebarCollapsed);
  }, [sidebarCollapsed]);

  // Componentes optimizados con memo
  const CustomTooltip = useCallback(({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 text-white text-sm">
        <p className="font-bold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }, []);

  const getAlertIcon = useCallback((type) => {
    const icons = {
      warning: <AlertTriangle className="w-4 h-4 text-yellow-400" />,
      error: <XCircle className="w-4 h-4 text-red-400" />,
      success: <CheckCircle2 className="w-4 h-4 text-green-400" />,
      info: <Info className="w-4 h-4 text-blue-400" />
    };
    return icons[type] || <AlertCircle className="w-4 h-4 text-gray-400" />;
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
    <div className="min-h-screen bg-black text-white overflow-auto">
      {/* Sidebar avanzado */}
      {!sidebarCollapsed && (
        <div className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">ARCHT SCAN Demo</h2>
              <Button variant="ghost" size="sm" onClick={handleToggleSidebar}>
                <XCircle className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Watchlist */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Watchlist ({watchlist.length})</h3>
              <div className="space-y-2">
                {watchlist.slice(0, 5).map(asset => (
                  <div key={asset.symbol} className="flex items-center justify-between p-2 bg-gray-800 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-white">{asset.symbol}</div>
                      <div className="text-xs text-gray-400">${asset.price.toFixed(2)}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className={`text-xs ${asset.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {asset.change > 0 ? '+' : ''}{asset.change}%
                      </span>
                      <Button variant="ghost" size="sm" onClick={() => handleRemoveFromWatchlist(asset.symbol)}>
                        <XCircle className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Alertas activas */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Active Alerts ({alerts.length})</h3>
              <div className="space-y-2">
                {alerts.slice(0, 3).map(alert => (
                  <div key={alert.id} className="p-2 bg-gray-800 rounded-lg">
                    <div className="text-xs text-white">{alert.asset}</div>
                    <div className="text-xs text-gray-400">{alert.condition} ${alert.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Configuración rápida */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Quick Settings</h3>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-gray-400 hover:text-white"
                  onClick={() => setCustomDashboard(!customDashboard)}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Custom Dashboard
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-gray-400 hover:text-white"
                  onClick={handleToggleFullscreen}
                >
                  <Maximize2 className="w-4 h-4 mr-2" />
                  Fullscreen
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-start text-gray-400 hover:text-white"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Theme: {theme}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header del ARCHT SCAN optimizado */}
      <div className={`sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-800 ${sidebarCollapsed ? '' : 'ml-80'}`}>
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
                  variant="ghost"
                  size="sm"
                  onClick={() => setRealTimeData(!realTimeData)}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                  title={realTimeData ? 'Pause monitoring' : 'Resume monitoring'}
                >
                  {realTimeData ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleStartScan}
                  disabled={isScanning}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                  title="Start deep scan"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedView(!expandedView)}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                  title={expandedView ? 'Minimize view' : 'Maximize view'}
                >
                  {expandedView ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>
              <Button variant="secondary" size="sm" onClick={handleRefreshData} disabled={isLoading}>
                {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                <span className="ml-2 hidden sm:inline">Refresh</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportData}>
                <Download className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Export</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
                <span className="ml-2 hidden sm:inline">Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Scan Progress optimizado */}
        {isScanning && (
          <Card className="mb-8 bg-gradient-to-r from-gray-900/50 to-black/50 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Deep Scan in Progress</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">{Math.round(scanProgress)}%</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">Analyzing asset integrity, compliance, and risk factors...</p>
            </CardContent>
          </Card>
        )}

        {/* Advanced Analytics optimizado */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Price Performance Chart */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-white font-heading">Real-Time Performance Analysis</CardTitle>
              <div className="flex space-x-2">
                {['1D', '7D', '1M', '3M', '1Y'].map(tf => (
                  <Button
                    key={tf}
                    variant={selectedTimeframe === tf ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setSelectedTimeframe(tf)}
                    className={selectedTimeframe === tf ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-gray-700'}
                  >
                    {tf}
                  </Button>
                ))}
              </div>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={priceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAMI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAAI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e5e5e5" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#e5e5e5" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorACI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a3a3a3" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#a3a3a3" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorIPRT" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#4b5563" />
                  <YAxis stroke="#4b5563" />
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area type="monotone" dataKey="AMI" stroke="#ffffff" fillOpacity={1} fill="url(#colorAMI)" name="ARCHT Minerals Index" />
                  <Area type="monotone" dataKey="AAI" stroke="#e5e5e5" fillOpacity={1} fill="url(#colorAAI)" name="ARCHT Agriculture Index" />
                  <Area type="monotone" dataKey="ACI" stroke="#a3a3a3" fillOpacity={1} fill="url(#colorACI)" name="ARCHT Carbon Index" />
                  <Area type="monotone" dataKey="IPRT" stroke="#ffffff" fillOpacity={1} fill="url(#colorIPRT)" name="ARCHT Infrastructure Index" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Risk Distribution */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white font-heading">Risk Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={volumeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {volumeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Metrics optimizado */}
        <Card className="mb-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white font-heading">Advanced Analytics Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisData.map((item, index) => (
                <MetricCard
                  key={index}
                  metric={item.metric}
                  value={item.value}
                  trend={item.trend}
                  status={item.status}
                  threshold={item.threshold}
                  icon={item.icon}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts optimizado */}
        <Card className="mb-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-white font-heading">System Alerts & Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <AlertItem
                  key={alert.id}
                  alert={alert}
                  getAlertIcon={getAlertIcon}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Asset Analysis Table optimizado */}
        <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/20 transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold text-white font-heading">Comprehensive Asset Analysis</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode(viewMode === 'grid' ? 'table' : 'grid')}
                className="text-gray-400 hover:bg-gray-700"
              >
                {viewMode === 'grid' ? <BarChart3 className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                <span className="ml-2 hidden sm:inline">{viewMode === 'grid' ? 'Table View' : 'Grid View'}</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="relative w-full sm:w-1/3">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-2/3 flex flex-wrap justify-end gap-2">
                {/* Filtros por categoría */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {assetCategories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={selectedCategory === category ? 'bg-white/10 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}
                    >
                      {category === 'all' ? 'All Categories' : category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Button>
                  ))}
                </div>
                
                {/* Filtros por región */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {assetRegions.map(region => (
                    <Button
                      key={region}
                      variant={selectedRegion === region ? 'default' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedRegion(region)}
                      className={selectedRegion === region ? 'bg-white/10 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}
                    >
                      {region === 'all' ? 'All Regions' : region}
                    </Button>
                  ))}
                </div>
                
                {/* Filtros por país */}
                <div className="flex flex-wrap gap-2">
                  {assetCountries.slice(0, 10).map(country => (
                    <Button
                      key={country}
                      variant={selectedCountry === country ? 'default' : 'secondary'}
                      size="sm"
                      onClick={() => setSelectedCountry(country)}
                      className={selectedCountry === country ? 'bg-white/10 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}
                    >
                      {country === 'all' ? 'All Countries' : country}
                    </Button>
                  ))}
                  {assetCountries.length > 10 && (
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      +{assetCountries.length - 10} more
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Controles de ordenamiento y paginación */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => handleSort(e.target.value)}
                    className="px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value="name">Name</option>
                    <option value="symbol">Symbol</option>
                    <option value="price">Price</option>
                    <option value="volume">Volume</option>
                    <option value="change">Change</option>
                    <option value="category">Category</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="text-gray-400 hover:text-white"
                  >
                    {sortOrder === 'asc' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">Items per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                    className="px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, filteredAssets.length)} of {filteredAssets.length} assets
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginatedAssets.map(asset => (
                  <div key={asset.symbol} className="space-y-3">
                    <AssetCard asset={asset} />
                    {/* ML Predictions */}
                    {mlPredictionsData[asset.symbol] && (
                      <MLPredictionCard 
                        asset={asset}
                        prediction={mlPredictionsData[asset.symbol].prediction}
                        confidence={mlPredictionsData[asset.symbol].confidence}
                        trend={mlPredictionsData[asset.symbol].trend}
                      />
                    )}
                    {/* Technical Analysis */}
                    {technicalIndicatorsData[asset.symbol] && (
                      <TechnicalAnalysisCard 
                        asset={asset}
                        indicators={technicalIndicatorsData[asset.symbol]}
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto custom-scrollbar">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('name')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Asset</span>
                          {sortBy === 'name' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('symbol')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Symbol</span>
                          {sortBy === 'symbol' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('category')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Category</span>
                          {sortBy === 'category' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('price')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Price</span>
                          {sortBy === 'price' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('volume')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Volume (24h)</span>
                          {sortBy === 'volume' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('change')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Change (24h)</span>
                          {sortBy === 'change' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('region')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Region</span>
                          {sortBy === 'region' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th 
                        className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer hover:text-white transition-colors"
                        onClick={() => handleSort('country')}
                      >
                        <div className="flex items-center space-x-1">
                          <span>Country</span>
                          {sortBy === 'country' && (
                            sortOrder === 'asc' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />
                          )}
                        </div>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Risk Score</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {paginatedAssets.map(asset => (
                      <tr key={asset.symbol} className="hover:bg-gray-800 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{asset.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{asset.symbol}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{asset.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${asset.price.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${asset.volume.toFixed(2)}M</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-semibold ${asset.change > 0 ? 'text-white' : 'text-gray-400'}`}>
                            {asset.change > 0 ? <ArrowUpRight className="inline w-4 h-4" /> : <ArrowDownRight className="inline w-4 h-4" />} {asset.change}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{asset.region}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{asset.country}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            asset.change > 5 ? 'bg-red-900/50 text-red-400' :
                            asset.change > 0 ? 'bg-green-900/50 text-green-400' :
                            'bg-gray-900/50 text-gray-400'
                          }`}>
                            {asset.change > 5 ? 'High' : asset.change > 0 ? 'Low' : 'Medium'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Analyze</Button>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Paginación */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="text-gray-400 hover:text-white disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'default' : 'ghost'}
                          size="sm"
                          onClick={() => handlePageChange(pageNum)}
                          className={currentPage === pageNum ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="text-gray-400 hover:text-white disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
                <div className="text-sm text-gray-400">
                  Page {currentPage} of {totalPages}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modal de detalles de activos */}
      {showAssetDetails && selectedAsset && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedAsset.name} ({selectedAsset.symbol})</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowAssetDetails(false)}>
                  <XCircle className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Información básica */}
                <Card className="bg-gray-800 border border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Asset Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current Price:</span>
                      <span className="text-white font-semibold">${selectedAsset.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">24h Change:</span>
                      <span className={`font-semibold ${selectedAsset.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {selectedAsset.change > 0 ? '+' : ''}{selectedAsset.change}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Volume:</span>
                      <span className="text-white font-semibold">${selectedAsset.volume.toFixed(2)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{selectedAsset.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                    </div>
                    {selectedAsset.unit && (
                      <div className="flex justify-between">
                        <span className="text-gray-400">Unit:</span>
                        <span className="text-white">{selectedAsset.unit}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* ML Prediction */}
                {mlPredictionsData[selectedAsset.symbol] && (
                  <MLPredictionCard 
                    asset={selectedAsset}
                    prediction={mlPredictionsData[selectedAsset.symbol].prediction}
                    confidence={mlPredictionsData[selectedAsset.symbol].confidence}
                    trend={mlPredictionsData[selectedAsset.symbol].trend}
                  />
                )}

                {/* Technical Analysis */}
                {technicalIndicatorsData[selectedAsset.symbol] && (
                  <TechnicalAnalysisCard 
                    asset={selectedAsset}
                    indicators={technicalIndicatorsData[selectedAsset.symbol]}
                  />
                )}
              </div>

              {/* Acciones */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-800">
                <div className="flex space-x-3">
                  <Button variant="outline" onClick={() => handleAddToWatchlist(selectedAsset)}>
                    <Star className="w-4 h-4 mr-2" />
                    Add to Watchlist
                  </Button>
                  <Button variant="outline" onClick={() => handleCreateAlert(selectedAsset, 'price_above', selectedAsset.price * 1.1)}>
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Create Alert
                  </Button>
                </div>
                <Button variant="secondary" onClick={() => setShowAssetDetails(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ARCHTScan;