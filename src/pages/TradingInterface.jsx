import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Shield, Zap, Target, Users, Activity } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function TradingInterface() {
  const tradingFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Order Management",
      description: "Professional order types including limit, market, and algorithmic trading strategies",
      color: "text-cyan-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Analytics",
      description: "Real-time risk assessment and portfolio analytics with ESG scoring and compliance monitoring",
      color: "text-white"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Live Market Data",
      description: "Real-time market data, price feeds, and fundamental analysis for informed trading decisions",
      color: "text-gray-300"
    }
  ];

  const orderTypes = [
    { type: "Market Order", description: "Execute immediately at current market price" },
    { type: "Limit Order", description: "Execute at specified price or better" },
    { type: "Stop Loss", description: "Automatic sell when price drops below threshold" },
    { type: "Take Profit", description: "Automatic sell when price reaches target" },
    { type: "Algorithmic", description: "AI-powered trading strategies" },
    { type: "Iceberg", description: "Large orders split into smaller chunks" }
  ];

  const analytics = [
    { metric: "Portfolio Value", value: "$2.4M", change: "+5.2%" },
    { metric: "Daily P&L", value: "+$12.5K", change: "+2.1%" },
    { metric: "Risk Score", value: "7.2/10", change: "Stable" },
    { metric: "ESG Score", value: "92/100", change: "+3" }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
              Trading Interface
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Professional-grade trading interface for tokenized real-world assets with advanced analytics and risk management.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Professional</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Real-time</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Risk Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Trading Features</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced trading tools designed for professional asset managers and institutional traders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tradingFeatures.map((feature, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Types */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Order Types</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive order management with advanced trading strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orderTypes.map((order, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{order.type}</h3>
                  <p className="text-gray-300 text-sm">{order.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Analytics */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Portfolio Analytics</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time portfolio performance and risk management metrics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {analytics.map((analytic, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{analytic.value}</h3>
                <p className="text-gray-300 mb-2">{analytic.metric}</p>
                <div className="text-cyan-400 font-semibold text-sm">{analytic.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Start Trading</h2>
          <p className="text-xl text-gray-300 mb-8">
            Access professional trading tools and start trading tokenized real-world assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Launch Trading Platform
            </Button>
            <Button variant="outline" size="lg">
              Request Demo Account
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TradingInterface;