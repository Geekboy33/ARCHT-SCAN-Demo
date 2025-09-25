import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, TrendingUp, PieChart, Users, Shield, Zap, Target, Globe, Lock, Award, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Economics() {
  const tokenomics = [
    {
      name: "Total Supply",
      value: "10,000,000,000",
      description: "Fixed supply (hard cap) - Maximum ARCHT tokens that will ever exist"
    },
    {
      name: "Circulating Supply",
      value: "500,000,000",
      description: "TGE circulating supply (5%) for bootstrap liquidity and utilities"
    },
    {
      name: "Strategic Lock-up",
      value: "1,000,000,000",
      description: "10% locked for 6 months for initial stability"
    },
    {
      name: "Deflationary Target",
      value: "30%",
      description: "Projected cumulative supply reduction over 10 years"
    }
  ];

  const allocation = [
    {
      category: "Treasury & Ecosystem",
      percentage: "30%",
      amount: "3,000M",
      vesting: "Linear 36m",
      description: "Grants, BD, integrations"
    },
    {
      category: "Sovereign Vaults",
      percentage: "20%",
      amount: "2,000M",
      vesting: "Milestone-based",
      description: "Country-specific unlocks"
    },
    {
      category: "Strategic Partners",
      percentage: "20%",
      amount: "2,000M",
      vesting: "24-48m",
      description: "Milestone-based unlocks"
    },
    {
      category: "Liquidity & Market Making",
      percentage: "15%",
      amount: "1,500M",
      vesting: "Dynamic",
      description: "CEX/DEX pool provisioning"
    },
    {
      category: "Team (Core + Council)",
      percentage: "10%",
      amount: "1,000M",
      vesting: "12m cliff + 36-48m",
      description: "KPI-based unlocks"
    },
    {
      category: "Social/ESG Fund",
      percentage: "5%",
      amount: "500M",
      vesting: "Linear 60m",
      description: "Audited social programs"
    }
  ];

  const veARCHT = [
    {
      lockPeriod: "1 year",
      multiplier: "1.0×",
      apr: "4.0%",
      benefits: "Base governance and fee discounts"
    },
    {
      lockPeriod: "2 years",
      multiplier: "2.0×",
      apr: "5.0%",
      benefits: "Priority in primaries, whitelists"
    },
    {
      lockPeriod: "3 years",
      multiplier: "3.0×",
      apr: "5.5%",
      benefits: "Higher RFQ limits, premium data"
    },
    {
      lockPeriod: "4 years",
      multiplier: "4.0×",
      apr: "6.0%",
      benefits: "Maximum governance weight, rebates"
    }
  ];

  const geographicHalving = [
    { country: "Brazil", issuance: "500M", multiplier: "1×" },
    { country: "Argentina", issuance: "250M", multiplier: "0.5×" },
    { country: "Chile", issuance: "125M", multiplier: "0.25×" },
    { country: "Colombia", issuance: "62.5M", multiplier: "0.125×" },
    { country: "Peru", issuance: "31.25M", multiplier: "0.0625×" }
  ];

  const rwaTokenClasses = [
    {
      name: "Trading Tokens",
      description: "Spot liquidity for fungible commodities",
      feeRange: "0.10-0.25%"
    },
    {
      name: "Offtake Tokens",
      description: "Discounted forward contracts (3-24m)",
      feeRange: "0.3-0.8%"
    },
    {
      name: "Royalty Tokens",
      description: "Revenue-sharing instruments",
      feeRange: "0.5-1.2%"
    },
    {
      name: "WRT Tokens",
      description: "Tokenized, custodied inventory",
      feeRange: "Fixed/Variable"
    },
    {
      name: "ESG Tokens",
      description: "Impact-linked (carbon, water, biodiversity)",
      feeRange: "0.2-0.6%"
    }
  ];

  const deflationarySources = [
    {
      source: "Asset Tokenization Fees",
      percentage: "10%",
      description: "Primary issuance fees"
    },
    {
      source: "Trading Commissions",
      percentage: "15%",
      description: "Secondary trading fees"
    },
    {
      source: "Banking Services",
      percentage: "8%",
      description: "FX, credit, payments"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              ARCHT Tokenomics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Institutional-grade tokenomics with fixed supply, deflationary mechanics, and geographic halving mechanism for sustainable sovereign adoption.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">10B Fixed Supply</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Deflationary</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">veARCHT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Design Principles</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Core principles governing the ARCHT tokenomics model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tokenomics.map((item, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">{item.value}</h3>
                <h4 className="text-xl font-semibold text-white mb-4">{item.name}</h4>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Initial Allocation */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Initial Allocation & Vesting</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transparent allocation structure with milestone-based vesting schedules.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-black/50 border border-white/10 rounded-lg">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-white font-semibold">Category</th>
                  <th className="text-left p-6 text-white font-semibold">Percentage</th>
                  <th className="text-left p-6 text-white font-semibold">Amount (M ARCHT)</th>
                  <th className="text-left p-6 text-white font-semibold">Vesting</th>
                  <th className="text-left p-6 text-white font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {allocation.map((item, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="p-6 text-white font-semibold">{item.category}</td>
                    <td className="p-6 text-white">{item.percentage}</td>
                    <td className="p-6 text-white">{item.amount}</td>
                    <td className="p-6 text-white">{item.vesting}</td>
                    <td className="p-6 text-gray-300">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* veARCHT Staking */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">veARCHT Staking & Voting</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Time-weighted voting system with increasing rewards for longer lock periods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {veARCHT.map((tier, index) => (
            <Card key={index} className="bg-black/50 border border-white/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-xl">{tier.multiplier}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tier.lockPeriod}</h3>
                <div className="text-2xl font-bold text-white mb-4">{tier.apr}</div>
                <p className="text-gray-300 text-sm">{tier.benefits}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Geographic Halving */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Geographic Halving Mechanism</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fair and disciplined sovereign onboarding with halving issuance per country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {geographicHalving.map((country, index) => (
              <Card key={index} className="bg-black/50 border border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-4">🇧🇷</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{country.country}</h3>
                  <div className="text-xl font-bold text-white mb-2">{country.issuance}</div>
                  <div className="text-sm text-gray-400">{country.multiplier} multiplier</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* RWA Sub-Token Economy */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">RWA Sub-Token Economy</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Non-dilutive token classes for different asset types and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rwaTokenClasses.map((tokenClass, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tokenClass.name}</h3>
                <p className="text-gray-300 mb-4">{tokenClass.description}</p>
                <div className="bg-white/10 px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-white font-semibold">Fee: {tokenClass.feeRange}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deflationary Mechanics */}
      <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Deflationary & Value Accrual</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Buyback & burn sources creating deflationary pressure on ARCHT supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deflationarySources.map((source, index) => (
              <Card key={index} className="bg-black/50 border border-white/10">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{source.percentage}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{source.source}</h3>
                  <p className="text-gray-300">{source.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Value Drivers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Key Value Drivers</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Metrics that drive ARCHT value and ecosystem growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <BarChart3 className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">RWA TVL & Volumes</h3>
              <p className="text-gray-300">Total value locked and trading volumes</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Countries & Assets</h3>
              <p className="text-gray-300">Number of onboarded countries and listed assets</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <DollarSign className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Protocol Revenues</h3>
              <p className="text-gray-300">Tokenization, trading, banking, data fees</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Buyback/Burn Rate</h3>
              <p className="text-gray-300">Deflationary pressure and veARCHT APR</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <Award className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">ESG Impact</h3>
              <p className="text-gray-300">Carbon avoided, water preserved, jobs created</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Risk/Compliance</h3>
              <p className="text-gray-300">Incidents, audit pass rate, regulatory compliance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join the ARCHT Economy</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the institutional-grade tokenomics model with deflationary mechanics and sovereign adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Stake veARCHT
            </Button>
            <Button variant="outline" size="lg">
              View Whitepaper
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Economics;