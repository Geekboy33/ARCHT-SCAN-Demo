import React, { useState, useEffect, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, TrendingDown, Shield, Globe, Zap, BarChart3, Leaf,
  ChevronRight, Play, DollarSign, Activity, Users, CheckCircle,
  ArrowRight, Star, Award, Target, Lock, Cpu, Database
} from 'lucide-react';
import { ARCHT_INDICES, getAllAssets } from '../data/assets';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, MetricCard, FeatureCard } from '../components/ui/Card';
import { useNotificationActions } from '../components/ui/NotificationSystem';
import Threads from '../components/Threads';

function Home() {
  const { showSuccess, showInfo } = useNotificationActions();
  const [animatedStats, setAnimatedStats] = useState({
    tvl: 0,
    volume: 0,
    assets: 0,
    countries: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Welcome notifications
    setTimeout(() => {
      showSuccess('Welcome to ARCHT Protocol!', {
        title: 'Welcome',
        duration: 4000
      });
    }, 1000);

    setTimeout(() => {
      showInfo('Explore our tokenized assets and advanced analytics', {
        title: 'New Features',
        duration: 5000
      });
    }, 3000);
    
    // Animate statistics with professional easing
    const animateValue = (start, end, duration, setter) => {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Professional easing curve
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = start + (end - start) * easeOutQuart;
        setter(current);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    };

    setTimeout(() => {
      animateValue(0, 12.4, 2000, (val) => setAnimatedStats(prev => ({...prev, tvl: val})));
      animateValue(0, 2.8, 2500, (val) => setAnimatedStats(prev => ({...prev, volume: val})));
      animateValue(0, 247, 1500, (val) => setAnimatedStats(prev => ({...prev, assets: Math.floor(val)})));
      animateValue(0, 8, 1800, (val) => setAnimatedStats(prev => ({...prev, countries: Math.floor(val)})));
    }, 500);
  }, []);

  const keyFeatures = useMemo(() => [
    {
      icon: Shield,
      title: "Sovereign Grade Security",
      description: "Military-grade NFC chips, quantum-resistant encryption, and multi-signature validation",
      features: ["Quantum-resistant encryption", "Multi-signature validation", "Hardware security modules", "Zero-knowledge proofs"]
    },
    {
      icon: Globe,
      title: "Global Interoperability", 
      description: "Native integration with 15+ blockchain networks and traditional banking systems",
      features: ["15+ blockchain networks", "CBDC integration", "Traditional banking", "Cross-border payments"]
    },
    {
      icon: Zap,
      title: "Instant Liquidity (T+0)",
      description: "Transform traditionally illiquid assets into instantly tradable digital tokens",
      features: ["Sub-second settlement", "24/7 trading", "Global liquidity pools", "Automated market making"]
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "95%+ accuracy in asset validation using satellite data and predictive AI",
      features: ["Satellite monitoring", "Predictive analytics", "Risk assessment", "ESG scoring"]
    },
    {
      icon: TrendingUp,
      title: "Institutional Grade",
      description: "MiCA, FATF, Basel III compliant with automated regulatory reporting",
      features: ["MiCA compliance", "FATF standards", "Basel III ready", "Automated reporting"]
    },
    {
      icon: Leaf,
      title: "ESG Transparency",
      description: "Complete traceability from extraction to consumption with real-time ESG metrics",
      features: ["Real-time monitoring", "Carbon tracking", "Impact measurement", "Sustainability goals"]
    }
  ], []);

  const trustMetrics = [
    { label: "Uptime", value: "99.99%", icon: Activity },
    { label: "Security Score", value: "A+", icon: Shield },
    { label: "Compliance", value: "100%", icon: CheckCircle },
    { label: "Audits", value: "12+", icon: Award }
  ];

  return (
    <div className="relative overflow-hidden bg-primary">
      {/* Hero Section - Professional Grade */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Advanced Background System */}
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-mesh-subtle"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_60%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.02),transparent_60%)] animate-pulse"></div>
          
          {/* Enhanced Threads Effect */}
          <div className="absolute inset-0 opacity-30">
            <Threads
              amplitude={1.5}
              distance={0.12}
              enableMouseInteraction={true}
              color={[0.024, 0.71, 0.83]}
            />
          </div>
        </div>

        <div className={`relative z-10 container-professional text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Professional Status Badge */}
          <div className="mb-12 animate-fade-in-professional">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-md text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 shadow-xl">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse shadow-glow"></div>
              <span className="font-medium text-sm sm:text-base">Live on Mainnet • v2.1.0 • Institutional Grade</span>
            </div>
          </div>
          
          {/* Hero Title - Professional Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 sm:mb-12 animate-fade-in-professional animate-stagger-1 text-glow-professional bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            ARCHT
          </h1>
          
          {/* Professional Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 sm:mb-16 max-w-6xl mx-auto leading-relaxed animate-slide-up-professional animate-stagger-2 text-shadow-subtle px-4">
            Sovereign Digital Infrastructure for Real‑World Asset Tokenization
          </p>

          {/* Enhanced Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-16 sm:mb-20 max-w-5xl mx-auto leading-relaxed animate-fade-in-professional animate-stagger-3 px-4">
            Convert verified resources into programmable, tradable, and fully auditable digital assets. 
            Instant liquidity (T+0), MRV‑grade traceability, and institutional compliance by design.
          </p>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-16 sm:mb-24 animate-fade-in-professional animate-stagger-4 px-4">
            <Button asChild size="xl" variant="primary" elevation="floating" className="group">
              <Link to="/protocol">
                <span className="flex items-center">
                  Explore the Protocol 
                  <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" elevation="elevated" className="group">
              <Link to="/onboarding">
                <span className="flex items-center">
                  <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" /> 
                  Government Onboarding
                </span>
              </Link>
            </Button>
          </div>

          {/* Professional Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-24 animate-fade-in-professional animate-stagger-5 px-4">
            <MetricCard
              title="Total Value Locked"
              value={`$${animatedStats.tvl.toFixed(1)}B`}
              subtitle="Institutional assets under management"
              icon={DollarSign}
              trend={{ direction: 'up', value: '+2.3%' }}
            />

            <MetricCard
              title="Daily Volume"
              value={`$${animatedStats.volume.toFixed(1)}B`}
              subtitle="24-hour trading volume"
              icon={Activity}
              trend={{ direction: 'up', value: '+1.8%' }}
            />

            <MetricCard
              title="Active Assets"
              value={animatedStats.assets}
              subtitle="Tokenized real-world assets"
              icon={Users}
              trend={{ direction: 'up', value: '+15' }}
            />

            <MetricCard
              title="Global Reach"
              value={animatedStats.countries}
              subtitle="Countries with active nodes"
              icon={Globe}
              trend={{ direction: 'up', value: '+2' }}
            />
          </div>
        </div>
      </section>

      {/* Professional Trust Signals */}
      <section className="section-professional bg-secondary">
        <div className="container-professional">
          <div className="content-professional mb-20">
            <h2 className="text-title mb-6 text-glow-accent">
              Institutional-Grade Compliance & Interoperability
            </h2>
            <p className="text-subtitle max-w-4xl mx-auto px-4">
              Trusted by governments, institutions, and enterprises worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 px-4">
            <FeatureCard
              icon={Shield}
              title="Regulatory Compliance"
              description="Full compliance with MiCA, FATF, Basel III, and Travel Rule requirements with automated reporting and real-time monitoring."
              features={["MiCA • FATF • Basel III", "Automated reporting", "Real-time monitoring", "Audit trails"]}
            />

            <FeatureCard
              icon={Globe}
              title="Global Interoperability"
              description="Native integration with 16+ major blockchain networks, CBDC systems, and traditional banking infrastructure."
              features={["16+ blockchain networks", "CBDC integration", "Banking rails", "Cross-border payments"]}
            />

            <FeatureCard
              icon={CheckCircle}
              title="Asset Verification"
              description="Satellite AI validation, LegalVault™ certification, NFC/IoT oracles, and third-party audit integration."
              features={["Satellite AI validation", "LegalVault™ certification", "NFC/IoT oracles", "Third-party audits"]}
            />
          </div>

          {/* Professional Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
            {trustMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.label}
                value={metric.value}
                icon={metric.icon}
                className="animate-fade-in-professional"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Four Pillars */}
      <section className="section-professional bg-primary">
        <div className="container-professional">
          <div className="content-professional mb-20">
            <h2 className="text-title mb-6 text-glow-accent">
              Four Pillars of Sovereign Infrastructure
            </h2>
            <p className="text-subtitle max-w-5xl mx-auto px-4">
              Core principles that enable universal liquidity with verifiable ESG and embedded compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                features={feature.features}
                className="animate-fade-in-professional"
                style={{ animationDelay: `${index * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Professional ARCHT Indices */}
      <section className="section-professional bg-elevated">
        <div className="container-professional">
          <div className="content-professional mb-20">
            <h2 className="text-title mb-6 text-glow-accent">
              ARCHT Market Indices
            </h2>
            <p className="text-subtitle max-w-5xl mx-auto px-4">
              Real-time tracking of tokenized asset performance across mining, agriculture, energy, and carbon markets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {Object.entries(ARCHT_INDICES).map(([key, index], i) => (
              <Card key={key} variant="elevated" className="group animate-fade-in-professional" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardHeader spacing="loose">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle size="lg" className="text-white group-hover:text-cyan-300 transition-colors">
                        {key}
                      </CardTitle>
                      <p className="text-caption text-gray-400 mt-2">{index.name}</p>
                    </div>
                    <div className={`status-${index.change24h >= 0 ? 'live' : 'warning'}`}>
                      {index.change24h >= 0 ? '+' : ''}{index.change24h}%
                    </div>
                  </div>
                </CardHeader>
                <CardContent spacing="loose">
                  <div className="text-4xl font-bold mb-8 number-glow-professional text-cyan-400">
                    {index.currentValue.toLocaleString()}
                  </div>
                  {index.composition && (
                    <div className="space-y-3">
                      {Object.entries(index.composition).slice(0, 3).map(([sector, percentage]) => (
                        <div key={sector} className="flex justify-between items-center">
                          <span className="capitalize text-gray-400 text-sm">
                            {sector.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000" 
                                style={{width: `${percentage}%`}}
                              ></div>
                            </div>
                            <span className="text-white text-sm font-semibold w-8 text-right">
                              {percentage}%
                            </span>
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

      {/* Professional Impact Section */}
      <section className="section-professional bg-secondary">
        <div className="container-professional text-center">
          <div className="content-professional mb-20">
            <h2 className="text-title mb-6 text-glow-accent">
              Brazil Pilot Impact
            </h2>
            <p className="text-subtitle max-w-5xl mx-auto">
              Projected fiscal impact: +US$200B/year; 5‑year regional value creation >US$1T
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="text-center animate-fade-in-professional">
              <div className="text-6xl md:text-8xl font-black text-white mb-6 number-glow-professional">
                +US$200B
              </div>
              <div className="text-subtitle text-gray-300">Annual Fiscal Impact</div>
              <div className="mt-6 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto shadow-glow"></div>
            </div>
            <div className="text-center animate-fade-in-professional animate-stagger-2">
              <div className="text-6xl md:text-8xl font-black text-white mb-6 number-glow-professional">
                >US$1T
              </div>
              <div className="text-subtitle text-gray-300">5-Year Regional Value</div>
              <div className="mt-6 w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto shadow-glow"></div>
            </div>
          </div>

          {/* Professional ESG Impact Card */}
          <Card variant="elevated" className="max-w-5xl mx-auto mb-20 animate-scale-in-professional">
            <CardContent spacing="loose">
              <h3 className="text-2xl font-bold mb-8 text-white">ESG Impact Metrics</h3>
              <p className="text-gray-300 mb-12 text-lg">Real‑time MRV, fraud‑resistant certification, automated reporting</p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    <Leaf className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-white font-bold text-xl mb-2">CO₂ Avoided</div>
                  <div className="text-gray-400 font-mono">2.5M → 85M tons</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    <Zap className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-white font-bold text-xl mb-2">Renewables Funded</div>
                  <div className="text-gray-400 font-mono">1.2 → 75 GW</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                    <Globe className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-white font-bold text-xl mb-2">Forest Protection</div>
                  <div className="text-gray-400 font-mono">0.5M → 15M hectares</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button asChild size="xl" variant="primary" elevation="floating" className="animate-fade-in-professional animate-stagger-6">
            <Link to="/assets/brazil">
              <span className="flex items-center">
                Explore Brazil Pilot
                <ArrowRight className="ml-3 w-6 h-6" />
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Home;