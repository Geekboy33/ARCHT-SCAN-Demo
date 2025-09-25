import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building2, Globe, Code, Shield, Zap, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Ecosystem() {
  const ecosystem = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Strategic Partners",
      description: "Strategic partnerships with governments, enterprises, and financial institutions worldwide",
      color: "text-cyan-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technology Integrators",
      description: "Technology integrators and service providers building solutions on ARCHT Protocol",
      color: "text-white"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Developer Community",
      description: "Active developer community contributing to open-source tools and integrations",
      color: "text-gray-300"
    }
  ];

  const partners = [
    { category: "Government Partners", count: "8", description: "Sovereign nations and regulatory bodies" },
    { category: "Enterprise Partners", count: "25+", description: "Fortune 500 companies and institutions" },
    { category: "Technology Partners", count: "15+", description: "Blockchain networks and infrastructure providers" },
    { category: "Financial Partners", count: "12+", description: "Banks, exchanges, and market makers" }
  ];

  const community = [
    { metric: "Active Developers", value: "2,500+", change: "+15%" },
    { metric: "GitHub Stars", value: "8.2K", change: "+22%" },
    { metric: "Community Members", value: "15K+", change: "+18%" },
    { metric: "Integrations", value: "45+", change: "+8" }
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
              ARCHT Ecosystem
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive ecosystem of partners, integrators, and developers building the future of real-world asset tokenization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Global Network</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">60+ Partners</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Ecosystem Components</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Key stakeholders and participants in the ARCHT Protocol ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ecosystem.map((component, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`${component.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {component.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{component.title}</h3>
                <p className="text-gray-300 leading-relaxed">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Partner Network */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Partner Network</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Growing network of strategic partners across multiple sectors and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{partner.count}</h3>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">{partner.category}</h4>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Metrics */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Community Metrics</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Growing developer and user community building on ARCHT Protocol.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {community.map((metric, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{metric.value}</h3>
                <p className="text-gray-300 mb-2">{metric.metric}</p>
                <div className="text-cyan-400 font-semibold text-sm">{metric.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join Our Ecosystem</h2>
          <p className="text-xl text-gray-300 mb-8">
            Become part of the growing ARCHT Protocol ecosystem and help shape the future of tokenized assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Become a Partner
            </Button>
            <Button variant="outline" size="lg">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ecosystem;