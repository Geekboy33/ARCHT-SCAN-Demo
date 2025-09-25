import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Globe, CheckCircle, Lock, Users, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Compliance() {
  const regulations = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "MiCA Compliance",
      description: "Full compliance with EU Markets in Crypto-Assets regulation for institutional-grade tokenization",
      status: "Active",
      color: "text-cyan-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "FATF Standards",
      description: "Anti-money laundering and counter-terrorism financing compliance with automated reporting",
      status: "Active",
      color: "text-white"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Basel III",
      description: "Banking regulation compliance with capital adequacy and liquidity requirements",
      status: "Active",
      color: "text-gray-300"
    }
  ];

  const complianceFeatures = [
    {
      title: "Automated KYC/AML",
      description: "Real-time identity verification and risk assessment",
      metrics: "99.7% accuracy"
    },
    {
      title: "Regulatory Reporting",
      description: "Automated compliance reporting across all jurisdictions",
      metrics: "24/7 monitoring"
    },
    {
      title: "Audit Trails",
      description: "Complete transaction history and compliance documentation",
      metrics: "100% coverage"
    },
    {
      title: "Risk Management",
      description: "Advanced risk assessment and mitigation protocols",
      metrics: "Real-time alerts"
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
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
              Compliance & Regulation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Automated compliance with global regulatory frameworks including MiCA, FATF, and Basel III standards.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">100% Compliant</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Global Standards</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Automated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Regulatory Framework</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive compliance across major financial jurisdictions worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${regulation.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {regulation.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{regulation.title}</h3>
                    <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/30">
                      {regulation.status}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{regulation.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Compliance Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced compliance tools and automated monitoring systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((feature, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  <div className="text-cyan-400 font-bold">{feature.metrics}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Standards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Global Standards</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Adherence to international standards and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black/50 border border-gray-800">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ISO 27001</h3>
              <p className="text-gray-300 text-sm">Information security management</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-gray-800">
            <CardContent className="p-6 text-center">
              <Lock className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Type II</h3>
              <p className="text-gray-300 text-sm">Security and availability controls</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-gray-800">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">GDPR</h3>
              <p className="text-gray-300 text-sm">Data protection and privacy</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-gray-800">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">PCI DSS</h3>
              <p className="text-gray-300 text-sm">Payment card industry standards</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ensure Your Compliance</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our comprehensive compliance framework and regulatory support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Start Compliance Assessment
            </Button>
            <Button variant="outline" size="lg">
              Contact Compliance Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Compliance;