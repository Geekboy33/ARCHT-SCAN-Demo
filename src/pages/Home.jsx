import React, { useState, useEffect, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, TrendingDown, Shield, Globe, Zap, BarChart3, Leaf,
  ChevronRight, Play, DollarSign, Activity, Users, CheckCircle,
  ArrowRight, Star, Award, Target, Lock, Cpu, Database
} from 'lucide-react';
import { ARCHT_INDICES, getAllAssets } from '../data/assets';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { useNotificationActions } from '../components/ui/NotificationSystem';
import Threads from '../components/Threads';

function Home() {
  const { showSuccess, showInfo, showWarning } = useNotificationActions();
  const [animatedStats, setAnimatedStats] = useState({
    tvl: 0,
    volume: 0,
    assets: 0,
    countries: 0
  });

  const [topAssets, setTopAssets] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Mostrar notificación de bienvenida
    setTimeout(() => {
      showSuccess('Welcome to ARCHT Protocol!', {
        title: 'Welcome',
        duration: 4000
      });
    }, 1000);

    // Mostrar notificación informativa
    setTimeout(() => {
      showInfo('Explore our tokenized assets and advanced analytics', {
        title: 'New Features',
        duration: 5000
      });
    }, 3000);
    
    // Animar estadísticas con suavizado avanzado
    const animateValue = (start, end, duration, setter) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing avanzado para animaciones suaves
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;
        setter(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    // Animar con valores decimales para TVL y Volume
    setTimeout(() => {
      animateValue(0, 12.4, 2000, (val) => setAnimatedStats(prev => ({...prev, tvl: val})));
      animateValue(0, 2.8, 2500, (val) => setAnimatedStats(prev => ({...prev, volume: val})));
      animateValue(0, 247, 1500, (val) => setAnimatedStats(prev => ({...prev, assets: Math.floor(val)})));
      animateValue(0, 8, 1800, (val) => setAnimatedStats(prev => ({...prev, countries: Math.floor(val)})));
    }, 500);

    // Obtener activos principales
    try {
      const assets = getAllAssets();
      const sortedAssets = [...assets]
        .filter(asset => asset.change24h !== undefined)
        .sort((a, b) => b.change24h - a.change24h)
        .slice(0, 5);
      setTopAssets(sortedAssets);
    } catch (error) {
      console.error('Error loading assets:', error);
      setTopAssets([]);
    }
  }, []);

  const keyFeatures = useMemo(() => [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sovereign Grade Security",
      description: "Military-grade NFC chips, quantum-resistant encryption, and multi-signature validation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Interoperability",
      description: "Native integration with 15+ blockchain networks and traditional banking systems",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Liquidity (T+0)",
      description: "Transform traditionally illiquid assets into instantly tradable digital tokens",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI-Powered Analytics",
      description: "95%+ accuracy in asset validation using satellite data and predictive AI",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Institutional Grade",
      description: "MiCA, FATF, Basel III compliant with automated regulatory reporting",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "ESG Transparency",
      description: "Complete traceability from extraction to consumption with real-time ESG metrics",
      color: "from-teal-500 to-green-500"
    }
  ], []);

  const trustMetrics = [
    { label: "Uptime", value: "99.99%", icon: <Activity className="w-5 h-5" /> },
    { label: "Security Score", value: "A+", icon: <Shield className="w-5 h-5" /> },
    { label: "Compliance", value: "100%", icon: <CheckCircle className="w-5 h-5" /> },
    { label: "Audits", value: "12+", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section con efectos avanzados */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo con gradientes dinámicos */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.1),transparent_50%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_70%)]"></div>
          
          {/* Efecto Threads 3D mejorado */}
          <div className="absolute inset-0 opacity-20">
            <Threads
              amplitude={1.2}
              distance={0.1}
              enableMouseInteraction={true}
              color={[0.024, 0.71, 0.83]}
            />
          </div>
        </div>

        <div className={`relative z-10 max-w-6xl mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge de estado */}
          <div className="mb-8">
            <span className="inline-block bg-gradient-to-r from-white/10 to-gray-300/10 text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Live on Mainnet • v2.1.0
              </div>
            </span>
          </div>
          
          {/* Título principal con efectos */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-fade-in-up tracking-tight font-display">
              ARCHT
            </h1>
          
          {/* Subtítulo con animación */}
          <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-slide-up font-light font-sans">
            Sovereign Digital Infrastructure for Real‑World Asset Tokenization
          </p>

          {/* Descripción adicional */}
          <p className="text-lg text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            Convert verified resources into programmable, tradable, and fully auditable digital assets. 
            Instant liquidity (T+0), MRV‑grade traceability, and institutional compliance by design.
          </p>

          {/* Botones de acción con efectos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-fade-in-up">
            <Button asChild size="xl" variant="gradient" className="group transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <Link to="/protocol">
                <span className="flex items-center">
                  Explore the Protocol 
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="group transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Link to="/onboarding">
                <span className="flex items-center">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> 
                  Request Government Onboarding
                </span>
              </Link>
            </Button>
          </div>

          {/* Métricas principales con efectos avanzados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
            <Card variant="glass" className="group hover:scale-105 transition-all duration-500 backdrop-blur-sm border-white/20 hover:border-white/40">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl">
                    <DollarSign className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="flex items-center text-white text-sm font-semibold bg-white/10 px-2 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +2.3%
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ${animatedStats.tvl.toFixed(1)}B
                </div>
                <div className="text-gray-400 text-sm font-medium">Total Value Locked</div>
              </CardContent>
            </Card>

            <Card variant="glass" className="group hover:scale-105 transition-all duration-500 backdrop-blur-sm border-white/20 hover:border-white/40">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl">
                    <Activity className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="text-white text-sm font-semibold bg-white/10 px-2 py-1 rounded-full">24h</div>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ${animatedStats.volume.toFixed(1)}B
                </div>
                <div className="text-gray-400 text-sm font-medium">Daily Volume</div>
              </CardContent>
            </Card>

            <Card variant="glass" className="group hover:scale-105 transition-all duration-500 backdrop-blur-sm border-white/20 hover:border-white/40">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl">
                    <Users className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="text-white text-sm font-semibold bg-white/10 px-2 py-1 rounded-full">Live</div>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {animatedStats.assets}
                </div>
                <div className="text-gray-400 text-sm font-medium">Active Assets</div>
              </CardContent>
            </Card>

            <Card variant="glass" className="group hover:scale-105 transition-all duration-500 backdrop-blur-sm border-white/20 hover:border-white/40">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl">
                    <Globe className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="text-white text-sm font-semibold bg-white/10 px-2 py-1 rounded-full">Global</div>
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {animatedStats.countries}
                </div>
                <div className="text-gray-400 text-sm font-medium">Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals mejorados */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-heading">
            Institutional-Grade Compliance & Interoperability
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Trusted by governments, institutions, and enterprises worldwide
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Compliance</h3>
                <p className="text-gray-300 mb-4">MiCA • FATF • Basel III • Travel Rule</p>
                <div className="flex justify-center gap-4 text-sm">
                  {trustMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-white font-semibold">{metric.value}</div>
                      <div className="text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Interoperability</h3>
                <p className="text-gray-300 mb-4">16+ major chains • L1/L2 • CBDC & banking rails</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-gray-800/50 rounded-lg p-2">
                    <div className="text-white font-semibold">16+</div>
                    <div className="text-gray-400">Blockchains</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-2">
                    <div className="text-white font-semibold">100%</div>
                    <div className="text-gray-400">Compatible</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Verification</h3>
                <p className="text-gray-300 mb-4">Satellite AI • LegalVault™ • NFC/IoT oracles • Third‑party audits</p>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Four Pillars mejorados */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Four Pillars of Sovereign Infrastructure
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-20 max-w-4xl mx-auto leading-relaxed">
            Core principles that enable universal liquidity with verifiable ESG and embedded compliance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-cyan-400 transition-all duration-500 group h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{feature.description}</p>
                  <div className="mt-6">
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-1000 group-hover:w-full`} 
                           style={{width: `${(index + 1) * 20}%`}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHT Indices Section mejorada */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            ARCHT Market Indices
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-center mb-20 max-w-4xl mx-auto">
            Real-time tracking of tokenized asset performance across mining, agriculture, energy, and carbon markets
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(ARCHT_INDICES).map(([key, index]) => (
              <Card key={key} className="bg-gradient-to-br from-black to-gray-900 border border-gray-800 hover:border-cyan-400 transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-white">{key}</CardTitle>
                      <p className="text-sm text-gray-400">{index.name}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      index.change24h >= 0 ? 'bg-white/10 text-white border border-white/20' : 'bg-gray-800/50 text-gray-400 border border-gray-600/30'
                    }`}>
                      {index.change24h >= 0 ? '+' : ''}{index.change24h}%
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {index.currentValue.toLocaleString()}
                  </div>
                  {index.composition && (
                    <div className="space-y-2">
                      {Object.entries(index.composition).map(([sector, percentage]) => (
                        <div key={sector} className="flex justify-between items-center">
                          <span className="capitalize text-gray-400 text-sm">{sector.replace(/([A-Z])/g, ' $1')}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full" 
                                   style={{width: `${percentage}%`}}></div>
                            </div>
                            <span className="text-white text-sm font-semibold">{percentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Highlights mejorados */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Brazil Pilot Impact
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-20 max-w-4xl mx-auto">
            Projected fiscal impact: +US$200B/year; 5‑year regional value creation &gt;US$1T
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                +US$200B
              </div>
              <div className="text-gray-300 text-lg">Annual Fiscal Impact</div>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full mx-auto"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                &gt;US$1T
              </div>
              <div className="text-gray-300 text-lg">5-Year Regional Value</div>
              <div className="mt-4 w-24 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full mx-auto"></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12 mb-20 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-white">ESG Impact</h3>
            <p className="text-gray-300 mb-8 text-lg">Real‑time MRV, fraud‑resistant certification, automated reporting</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-lg">CO₂ Avoided</div>
                <div className="text-gray-400">2.5M → 85M t</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-lg">Renewables Funded</div>
                <div className="text-gray-400">1.2 → 75 GW</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="text-white font-semibold text-lg">Forest Protection</div>
                <div className="text-gray-400">0.5M → 15M ha</div>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="px-12 py-6 text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <Link to="/assets/brazil">
              <span className="flex items-center">
                Explore Brazil Pilot
                <ArrowRight className="ml-2 w-6 h-6" />
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;