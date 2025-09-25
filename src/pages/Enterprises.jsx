import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Zap, Shield, Globe, TrendingUp, Users, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Enterprises() {
  const solutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Asset Tokenization",
      description: "Convert physical assets into tradeable digital tokens with instant liquidity and global market access",
      color: "text-cyan-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Supply Chain Transparency",
      description: "End-to-end traceability and transparency across your entire supply chain with real-time monitoring",
      color: "text-white"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Compliance",
      description: "Automated regulatory compliance with MiCA, FATF, and Basel III standards built-in",
      color: "text-gray-300"
    }
  ];

  const benefits = [
    { title: "Instant Liquidity", description: "Transform illiquid assets into tradeable tokens", metric: "T+0 Settlement" },
    { title: "Global Access", description: "Access international markets and investors", metric: "15+ Networks" },
    { title: "Cost Reduction", description: "Reduce operational and compliance costs", metric: "Up to 70%" },
    { title: "ESG Reporting", description: "Automated ESG metrics and reporting", metric: "Real-time" }
  ];

  const useCases = [
    {
      industry: "Mining & Resources",
      description: "Tokenize mineral reserves and production output",
      examples: ["Gold reserves", "Copper production", "Rare earth elements"]
    },
    {
      industry: "Agriculture",
      description: "Tokenize agricultural products and land assets",
      examples: ["Crop yields", "Livestock", "Agricultural land"]
    },
    {
      industry: "Energy",
      description: "Tokenize renewable energy projects and carbon credits",
      examples: ["Solar farms", "Wind projects", "Carbon offsets"]
    },
    {
      industry: "Real Estate",
      description: "Tokenize commercial and industrial properties",
      examples: ["Office buildings", "Warehouses", "Industrial facilities"]
    }
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
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your physical assets into liquid digital tokens with institutional-grade security and compliance.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Enterprise Grade</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Global Scale</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Enterprise Solutions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions for enterprise asset tokenization and management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`${solution.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Key Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Measurable business value through asset tokenization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{benefit.description}</p>
                  <div className="text-cyan-400 font-bold">{benefit.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Industry Use Cases</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tokenization solutions across multiple industries and asset types.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">{useCase.industry}</CardTitle>
                <p className="text-gray-400">{useCase.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Transform Your Assets</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to tokenize your physical assets and unlock global liquidity?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enterprises;