import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Satellite, Shield, Link as LinkIcon, Zap, Globe, BarChart3,
  ChevronRight, CheckCircle, ArrowRight, Layers, Cpu, Database
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Protocol() {
  const layers = [
    {
      number: 1,
      name: "Satellite Intelligence (AlphaEarth)",
      icon: <Satellite className="w-8 h-8" />,
      description: "SAR subsurface sensing; high‑res optical; hyperspectral; AI prediction",
      details: [
        "Mining reserves & extraction monitoring",
        "Crop yields & health assessment", 
        "Forestry biomass & deforestation tracking",
        "Renewable siting & infrastructure monitoring"
      ],
      color: "text-blue-400"
    },
    {
      number: 2,
      name: "LegalVault™",
      icon: <Shield className="w-8 h-8" />,
      description: "Converts NI 43‑101 / JORC / ISO / fair‑trade certifications to immutable on‑chain records",
      details: [
        "Anti‑forgery protection",
        "Instant due diligence",
        "Machine‑readable certificates",
        "Auditor signatures & time‑stamped ledgers"
      ],
      color: "text-green-400"
    },
    {
      number: 3,
      name: "Physical Link (NFC/IoT/Biometrics)",
      icon: <LinkIcon className="w-8 h-8" />,
      description: "EV2/EV3‑class NFC with AES‑256; tamper counters; IP68; 10‑year life",
      details: [
        "Device graph of sensors",
        "Biometric access for provenance",
        "Tamper‑proof hardware",
        "Long‑term durability"
      ],
      color: "text-purple-400"
    },
    {
      number: 4,
      name: "Advanced Tokenization & Privacy",
      icon: <Zap className="w-8 h-8" />,
      description: "Standards: ERC‑20 (fungible), ERC‑1155 (multi‑class), ERC‑721 (unique)",
      details: [
        "ZK proofs for privacy",
        "Selective disclosure",
        "Homomorphic computation",
        "Sensitive data protection"
      ],
      color: "text-yellow-400"
    },
    {
      number: 5,
      name: "Interoperability (SkyLink Bridge)",
      icon: <Globe className="w-8 h-8" />,
      description: "Native connectors to major L1/L2s (Ethereum, Solana, Polygon, Arbitrum, Optimism, Base, zkSync, Avalanche, BSC, Cosmos, Polkadot, Cardano, Chainlink, Fantom, Near)",
      details: [
        "3/5 multisig validators",
        "zk proofs for security",
        "Dynamic insurance pool",
        "Circuit breakers"
      ],
      color: "text-cyan-400"
    },
    {
      number: 6,
      name: "ARCHT Platform (Institutional Intelligence)",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Pro dashboards, indices, regulatory alerts, and ESG metrics with API access",
      details: [
        "Professional dashboards",
        "Real‑time indices",
        "Regulatory compliance alerts",
        "ESG metrics & reporting"
      ],
      color: "text-orange-400"
    }
  ];

  const keyOutcomes = [
    {
      title: "Universal Liquidity",
      description: "Collapses settlement from weeks to seconds",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Proactive Compliance", 
      description: "Brings end‑to‑end traceability and automated ESG",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Digital Sovereignty",
      description: "Opens institutional liquidity to resource economies",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-black to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent">
              What Archetyp Is
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              A modular, fail‑safe architecture that binds physical assets to digital markets through six integrated layers: 
              Satellite Intelligence, LegalVault™, Physical Link (NFC/biometric/IoT), Advanced Tokenization, 
              Interoperability (SkyLink Bridge), and the ARCHT Institutional Platform.
            </p>
          </div>

          {/* Key Outcomes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {keyOutcomes.map((outcome, index) => (
              <Card key={index} className="bg-black border border-gray-800 hover:border-cyan-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {outcome.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{outcome.title}</h3>
                  <p className="text-gray-300">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="xl" variant="gradient" className="group">
              <Link to="/protocol/architecture">
                See the 6‑Layer Architecture <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="group">
              <Link to="/protocol/mrv-esg">
                Review MRV/ESG Methods <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6-Layer Architecture Overview */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">6‑Layer Architecture</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Each layer builds upon the previous, creating a comprehensive system for physical-to-digital asset transformation
            </p>
          </div>

          <div className="space-y-8">
            {layers.map((layer, index) => (
              <Card key={index} className="bg-black border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-lg bg-gray-800 flex items-center justify-center ${layer.color}`}>
                        {layer.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-gray-400">Layer {layer.number}</span>
                        <h3 className="text-2xl font-bold text-white">{layer.name}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6 text-lg">{layer.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {layer.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The Archetyp Protocol transforms how physical assets interact with digital markets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Modular Architecture</h3>
                <p className="text-gray-300 leading-relaxed">
                  Each layer can be independently upgraded and scaled, ensuring long-term adaptability and resilience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Fail-Safe Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Multiple validation layers and redundancy systems ensure system integrity even under extreme conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Institutional Grade</h3>
                <p className="text-gray-300 leading-relaxed">
                  Built to meet the highest standards of security, compliance, and operational excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-black to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Dive deeper into each layer of the Archetyp Protocol and understand how it transforms physical assets into digital markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="gradient">
              <Link to="/protocol/architecture">
                Explore Architecture
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/platform">
                View Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Protocol;
