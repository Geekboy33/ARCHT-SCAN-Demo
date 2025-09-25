import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, Zap, Shield, Globe, ArrowRightLeft, Clock, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function SkyLinkBridge() {
  const supportedChains = [
    { name: "Ethereum", symbol: "ETH", status: "Active", tvl: "$2.1B", color: "from-white/10 to-gray-300/10" },
    { name: "Polygon", symbol: "MATIC", status: "Active", tvl: "$890M", color: "from-white/10 to-gray-300/10" },
    { name: "Arbitrum", symbol: "ARB", status: "Active", tvl: "$1.2B", color: "from-white/10 to-gray-300/10" },
    { name: "Optimism", symbol: "OP", status: "Active", tvl: "$650M", color: "from-white/10 to-gray-300/10" },
    { name: "Base", symbol: "BASE", status: "Active", tvl: "$420M", color: "from-white/10 to-gray-300/10" },
    { name: "Avalanche", symbol: "AVAX", status: "Active", tvl: "$380M", color: "from-white/10 to-gray-300/10" },
    { name: "BNB Chain", symbol: "BNB", status: "Active", tvl: "$290M", color: "from-white/10 to-gray-300/10" },
    { name: "Solana", symbol: "SOL", status: "Coming Soon", tvl: "TBD", color: "from-white/10 to-gray-300/10" }
  ];

  const bridgeFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Instant Cross-Chain",
      description: "Lightning-fast asset transfers between blockchains",
      details: ["Sub-second transfers", "Optimistic rollups", "State channels", "Atomic swaps"]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Security First",
      description: "Multi-signature security with decentralized validation",
      details: ["Multi-sig wallets", "Decentralized validators", "Audit trails", "Insurance coverage"]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Universal Compatibility",
      description: "Seamless integration with any EVM-compatible chain",
      details: ["EVM compatibility", "Custom bridges", "API integration", "SDK support"]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Low Cost",
      description: "Minimal fees with gas optimization",
      details: ["Gas optimization", "Batch transactions", "Fee sharing", "Cost transparency"]
    }
  ];

  const bridgeStats = [
    { label: "Total Value Locked", value: "$6.2B", change: "+12.5%" },
    { label: "Daily Volume", value: "$890M", change: "+8.3%" },
    { label: "Active Users", value: "45.2K", change: "+15.7%" },
    { label: "Supported Chains", value: "8", change: "+2" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/protocol">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Protocol
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SkyLink Bridge
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The most advanced cross-chain bridge for tokenized real-world assets, enabling seamless interoperability across all major blockchains.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">8 Chains</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30">
                <span className="text-blue-400 font-semibold">$6.2B TVL</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Sub-second</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bridge Stats */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridgeStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300 mb-2">{stat.label}</p>
                <div className="flex items-center justify-center space-x-2">
                  <ArrowRightLeft className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Supported Chains */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Supported Blockchains</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect and transfer assets across the most popular blockchain networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedChains.map((chain, index) => (
              <Card key={index} className={`bg-black/50 border ${
                chain.status === 'Active' ? 'border-green-500/30' : 'border-yellow-500/30'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${chain.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{chain.symbol}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      chain.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {chain.status}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{chain.name}</h3>
                  <p className="text-gray-400">TVL: {chain.tvl}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bridge Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Bridge Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced technology for secure, fast, and cost-effective cross-chain transfers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bridgeFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  {feature.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">How SkyLink Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simple, secure, and fast cross-chain asset transfers in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Connect Wallet</h3>
                <p className="text-gray-300">Connect your wallet and select the source blockchain</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Select Assets</h3>
                <p className="text-gray-300">Choose the assets and destination blockchain</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Transfer Complete</h3>
                <p className="text-gray-300">Assets are transferred securely and instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Security & Audits */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Security & Audits</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade security with regular audits and insurance coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black/50 border border-green-500/30">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Sig Security</h3>
              <p className="text-gray-300">Multi-signature wallet protection</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-blue-500/30">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous security monitoring</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-purple-500/30">
            <CardContent className="p-8 text-center">
              <LinkIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Audited Code</h3>
              <p className="text-gray-300">Regular security audits</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-pink-500/30">
            <CardContent className="p-8 text-center">
              <DollarSign className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Insurance Coverage</h3>
              <p className="text-gray-300">$100M insurance protection</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Start Bridging Assets</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of cross-chain interoperability with SkyLink Bridge.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Launch Bridge
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkyLinkBridge;