import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Globe, TrendingUp, Shield, Leaf, Zap, 
  BarChart3, Users, Target, Award, CheckCircle, 
  DollarSign, Activity, Building2, Cpu, Database
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function BrazilPilot() {
  const keyBenefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Immediate Liquidity (T+0)",
      description: "For sectors traditionally settling in weeks or months"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fiscal Gains",
      description: "Through automated tax reporting and export efficiency"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global ESG Visibility",
      description: "With satellite-based monitoring"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "International Capital Access",
      description: "Without relying solely on foreign debt"
    }
  ];

  const assetCategories = [
    {
      category: "Mining Assets",
      assets: ["Iron", "Copper", "Lithium", "Niobium", "Rare Earths", "Diamonds"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      category: "Agricultural Assets", 
      assets: ["Soybeans", "Coffee", "Corn", "Sugarcane", "Cotton"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Water & Energy",
      assets: ["Amazon Basin", "Guarani Aquifer", "Green H₂ (Ceará, Bahia, Rio Grande do Sul)"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Environmental / ESG",
      assets: ["REDD+ Amazonia", "Atlantic Forest", "Cerrado"],
      color: "from-teal-500 to-green-500"
    },
    {
      category: "Sovereign Instruments",
      assets: ["Brazilian Treasury bonds (NTN-F, NTN-B, LTN, LFT)"],
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const roadmapPhases = [
    {
      phase: "Phase 1: Foundation",
      period: "Months 1-3",
      objectives: [
        "Government LoI agreements",
        "Brazil National Node deployment", 
        "Real Digital + UAEdt integration",
        "5 pilot assets tokenization"
      ],
      assets: "Iron, Soybeans, Amazon Water, Ceará Green H₂, REDD+ Amazonia",
      kpis: "US$25M volume, 2,500 users, 99% uptime"
    },
    {
      phase: "Phase 2: Expansion", 
      period: "Months 4-6",
      objectives: [
        "Add 10 new assets",
        "Institutional market makers (≥US$50M liquidity)",
        "Cross-border BRL ↔ UAEdt corridor"
      ],
      assets: "Copper, Lithium, Coffee, Sugarcane, Cotton, Guarani Aquifer, Bahia Green H₂, Cerrado Forest, NTN-B bonds, Diamonds",
      kpis: "US$75M daily volume, US$2.5B TVL, 45,000 users"
    },
    {
      phase: "Phase 3: Consolidation",
      period: "Months 7-12", 
      objectives: [
        "Complete asset portfolio",
        "NFC-WAY port deployment",
        "Royalty Tokens & Offtake contracts",
        "Regional expansion"
      ],
      assets: "Niobium, Rare Earths, Corn, Atlantic Forest, Rio Grande H₂",
      kpis: "US$5B TVL, 25,000+ users, spreads <0.4%"
    }
  ];

  const fiscalImpact = [
    { category: "Transaction taxes", revenue: "~US$2.5B" },
    { category: "Mining royalties", revenue: "~US$4.2B" },
    { category: "Export facilitation", revenue: "~US$1.8B" },
    { category: "Total Incremental Revenue", revenue: "~US$9.5B", highlight: true }
  ];

  const esgImpact = [
    { metric: "CO₂ Avoided", value: "2.5M tons", icon: <Leaf className="w-6 h-6 text-green-400" /> },
    { metric: "Forest Conserved", value: "500,000 hectares", icon: <Globe className="w-6 h-6 text-emerald-400" /> },
    { metric: "Renewable Capacity", value: "1.2GW financed", icon: <Zap className="w-6 h-6 text-blue-400" /> },
    { metric: "Carbon Credits", value: "1M tokenized", icon: <Award className="w-6 h-6 text-teal-400" /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <Button asChild variant="outline" className="mb-8">
            <Link to="/assets">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Assets
            </Link>
          </Button>
          
          <div className="mb-8">
            <span className="text-4xl">🇧🇷</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
            Brazil Pilot
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Brazil leads as the first sovereign pilot of Archetyp Protocol World, leveraging its unparalleled natural wealth, 
            agricultural leadership, and pioneering CBDC adoption (Real Digital).
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="xl" variant="gradient" className="group">
              <Link to="/protocol">
                Explore Protocol <ArrowLeft className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Key Benefits */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Benefits</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Strategic advantages of the Brazil Pilot implementation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brazil */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Brazil?</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Brazil represents the perfect laboratory for Archetyp's mission
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border border-gray-800 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center">
                  <Globe className="w-8 h-8 mr-3" />
                  Natural Resources Superpower
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Mining:</strong> Iron, niobium, copper, lithium, and rare earth reserves among world's largest</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Agriculture:</strong> Global leader in soybeans, coffee, sugarcane, corn, and cotton</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Energy:</strong> Amazon Basin water, Guarani Aquifer, ambitious green hydrogen projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Environmental:</strong> Amazon rainforest, Cerrado, Atlantic Forest critical for global climate</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-blue-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400 flex items-center">
                  <Cpu className="w-8 h-8 mr-3" />
                  Innovation Ready
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Financial leadership:</strong> Among first nations testing sovereign CBDC (Real Digital)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><strong>Perfect infrastructure</strong> for seamless integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pilot Scope */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pilot Scope</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive asset categories and implementation scale
          </p>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-cyan-400">Asset Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assetCategories.map((category, index) => (
                <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className={`text-xl bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.assets.map((asset, assetIndex) => (
                        <li key={assetIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                          {asset}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 text-center">Initial Scale</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold text-white mb-4">US$1B</div>
              <p className="text-lg text-gray-300 mb-6">in verified collateral validated by:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white">AlphaEarth</h4>
                  <p className="text-sm text-gray-400">Satellite AI</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white">LegalVault</h4>
                  <p className="text-sm text-gray-400">Certification</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white">NFC-WAY</h4>
                  <p className="text-sm text-gray-400">Physical anchoring</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Infrastructure</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Enterprise-grade infrastructure for sovereign asset tokenization
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400 flex items-center">
                  <Database className="w-6 h-6 mr-3" />
                  Brazil National Node
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Enterprise-grade data centers in São Paulo and Brasília</li>
                  <li>• Blockchain stack: Ethereum L2 + Polygon for scalability</li>
                  <li>• Multi-chain bridges for global liquidity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-blue-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-400 flex items-center">
                  <Activity className="w-6 h-6 mr-3" />
                  Integration Rails
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real Digital (CBDC-BRL) for domestic settlement</li>
                  <li>• UAEdt corridor for international payments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-400 flex items-center">
                  <Building2 className="w-6 h-6 mr-3" />
                  Government Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Receita Federal: Automated taxation</li>
                  <li>• ANM: Mining permits</li>
                  <li>• MAPA: Agriculture oversight</li>
                  <li>• IBAMA/MMA: Environmental monitoring</li>
                  <li>• SISCOMEX: NFC-WAY chips for real-time export tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-black/50 border border-gray-800 hover:border-purple-400 transition-all duration-300 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300">
                  <strong className="text-purple-400">Closed Loop Trust:</strong> From physical origin (satellite + NFC validated) 
                  to on-chain representation, tradable globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 12-Month Roadmap */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">12-Month Implementation Roadmap</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Phased approach to comprehensive sovereign asset tokenization
          </p>
          
          <div className="space-y-8">
            {roadmapPhases.map((phase, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-cyan-400">{phase.phase}</CardTitle>
                  <p className="text-lg text-gray-400">{phase.period}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Objectives</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Assets & KPIs</h4>
                      <div className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">Assets:</p>
                        <p className="text-gray-300">{phase.assets}</p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">KPIs:</p>
                        <p className="text-gray-300">{phase.kpis}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Economic & Social Impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Economic & Social Impact</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Projected fiscal and social benefits of the Brazil Pilot
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-black/50 border border-gray-800 hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">Year 1 Fiscal Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-300">Category</th>
                        <th className="text-right py-2 text-gray-300">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fiscalImpact.map((item, index) => (
                        <tr key={index} className={`border-b border-gray-800 ${item.highlight ? 'bg-green-500/10' : ''}`}>
                          <td className={`py-3 ${item.highlight ? 'font-bold text-white' : 'text-gray-300'}`}>
                            {item.category}
                          </td>
                          <td className={`py-3 text-right ${item.highlight ? 'font-bold text-green-400 text-xl' : 'text-gray-300'}`}>
                            {item.revenue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-blue-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400">Job Creation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-white mb-4">255,000</div>
                <p className="text-lg text-gray-300">
                  direct and indirect jobs across technology, finance, mining, agriculture, and services
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/50 border border-gray-800 hover:border-teal-400 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-teal-400 text-center">ESG Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {esgImpact.map((impact, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {impact.icon}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{impact.value}</div>
                    <div className="text-gray-300">{impact.metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Strategic Positioning */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Strategic Positioning</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Brazil's leadership in the global tokenization ecosystem
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-black/50 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">Brazil's Leadership</CardTitle>
                <p className="text-gray-400">By pilot completion, Brazil will be:</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    First LATAM sovereign with digital tokenization node
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    CBDC integration showcase with international liquidity
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    Regional anchor for Argentina, Chile, and broader LATAM corridor
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    Sovereign negotiating power with IMF, IDB, World Bank
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Global Significance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">For Governments</h4>
                    <p className="text-gray-300 text-sm">Proof that tokenization increases tax revenues and reduces debt dependency</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">For Investors</h4>
                    <p className="text-gray-300 text-sm">Access to previously illiquid, verified sovereign assets with full transparency</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">For Citizens</h4>
                    <p className="text-gray-300 text-sm">New job opportunities, ESG accountability, and enhanced financial inclusion</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">For the Planet</h4>
                    <p className="text-gray-300 text-sm">Measurable and auditable environmental impact with real-time monitoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform sovereign assets into the digital future.</h2>
          <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8">Brazil leads the way.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Join the Pilot
            </Button>
            <Button variant="outline" size="lg">
              Download Whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrazilPilot;