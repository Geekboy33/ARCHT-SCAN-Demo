import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Layers, Database, Globe, Lock, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function ProtocolArchitecture() {
  const layers = [
    {
      id: 1,
      name: "Application Layer",
      icon: <Globe className="w-8 h-8 text-white" />,
      description: "User interfaces, dashboards, and client applications",
      features: ["Web Dashboard", "Mobile Apps", "API Clients", "Third-party Integrations"],
      color: "from-white/10 to-gray-300/10"
    },
    {
      id: 2,
      name: "Business Logic Layer",
      icon: <Zap className="w-8 h-8 text-white" />,
      description: "Core business rules, validation, and orchestration",
      features: ["Asset Management", "Trading Logic", "Risk Assessment", "Compliance Engine"],
      color: "from-white/10 to-gray-300/10"
    },
    {
      id: 3,
      name: "Service Layer",
      icon: <Layers className="w-8 h-8 text-white" />,
      description: "Microservices architecture for scalability",
      features: ["Asset Service", "Market Data Service", "User Service", "Notification Service"],
      color: "from-white/10 to-gray-300/10"
    },
    {
      id: 4,
      name: "Data Access Layer",
      icon: <Database className="w-8 h-8 text-white" />,
      description: "Data persistence and retrieval mechanisms",
      features: ["PostgreSQL", "Redis Cache", "File Storage", "Data Replication"],
      color: "from-white/10 to-gray-300/10"
    },
    {
      id: 5,
      name: "Blockchain Layer",
      icon: <Shield className="w-8 h-8 text-white" />,
      description: "Smart contracts and blockchain infrastructure",
      features: ["Ethereum", "Polygon", "Arbitrum", "Cross-chain Bridges"],
      color: "from-white/10 to-gray-300/10"
    },
    {
      id: 6,
      name: "Infrastructure Layer",
      icon: <Lock className="w-8 h-8 text-orange-400" />,
      description: "Security, monitoring, and deployment infrastructure",
      features: ["AWS/GCP", "Kubernetes", "Security Vaults", "Monitoring"],
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/protocol">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Protocol
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Protocol Architecture
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive 6-layer architecture designed for scalability, security, and interoperability in the tokenized real-world assets ecosystem.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">6 Layers</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Microservices</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Cross-chain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Architecture Layers</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each layer is designed with specific responsibilities and interfaces for optimal performance and maintainability.
          </p>
        </div>

        <div className="space-y-8">
          {layers.map((layer, index) => (
            <Card key={layer.id} className={`bg-gradient-to-r ${layer.color} border border-white/10 backdrop-blur-sm`}>
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    {layer.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-white">Layer {layer.id}</span>
                      <h3 className="text-2xl font-semibold text-white">{layer.name}</h3>
                    </div>
                    <p className="text-lg text-gray-300 mb-6">{layer.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {layer.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-black/30 px-4 py-3 rounded-lg border border-white/10">
                          <span className="text-white font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Detailed technical requirements and specifications for each layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-white/10">
              <CardHeader>
                <CardTitle className="text-cyan-400">Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sub-second response times</li>
                  <li>• 99.9% uptime SLA</li>
                  <li>• Auto-scaling capabilities</li>
                  <li>• Load balancing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-white/10">
              <CardHeader>
                <CardTitle className="text-blue-400">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• End-to-end encryption</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Role-based access control</li>
                  <li>• Audit logging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-white/10">
              <CardHeader>
                <CardTitle className="text-purple-400">Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li>• Horizontal scaling</li>
                  <li>• Database sharding</li>
                  <li>• CDN integration</li>
                  <li>• Microservices architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Diagram */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Integration Flow</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            How data flows through the architecture layers for optimal performance.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col space-y-4">
            {layers.map((layer, index) => (
              <div key={layer.id} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{layer.id}</span>
                </div>
                <div className="flex-1 bg-black/30 px-6 py-4 rounded-lg border border-white/10">
                  <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                  <p className="text-gray-400">{layer.description}</p>
                </div>
                {index < layers.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-blue-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our developer documentation and start building on the ARCHT Protocol.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              View Documentation
            </Button>
            <Button variant="outline" size="lg">
              Contact Developers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProtocolArchitecture;