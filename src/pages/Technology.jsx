import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Shield, Globe, Zap, Layers, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Technology() {
  const techStack = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quantum Security",
      description: "Military-grade NFC chips with quantum-resistant encryption and multi-signature validation",
      color: "text-cyan-400"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Analytics",
      description: "95%+ accuracy in asset validation using satellite data and predictive AI algorithms",
      color: "text-white"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Interoperability",
      description: "Native integration with 15+ blockchain networks and traditional banking systems",
      color: "text-gray-300"
    }
  ];

  const architecture = [
    {
      layer: "Application Layer",
      description: "User interfaces and client applications",
      technologies: ["React", "TypeScript", "WebSocket", "PWA"]
    },
    {
      layer: "Business Logic",
      description: "Core protocol logic and smart contracts",
      technologies: ["Solidity", "Rust", "Go", "Node.js"]
    },
    {
      layer: "Data Layer",
      description: "Distributed storage and blockchain integration",
      technologies: ["IPFS", "PostgreSQL", "Redis", "Ethereum"]
    },
    {
      layer: "Infrastructure",
      description: "Cloud infrastructure and security",
      technologies: ["Kubernetes", "AWS", "Docker", "Terraform"]
    }
  ];

  const securityFeatures = [
    { title: "Quantum Resistance", description: "Post-quantum cryptography", status: "Active" },
    { title: "Multi-Signature", description: "Distributed key management", status: "Active" },
    { title: "Hardware Security", description: "Military-grade NFC chips", status: "Active" },
    { title: "Zero Knowledge", description: "Privacy-preserving proofs", status: "Active" }
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
              Technology Stack
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Six-layer architecture providing sovereign-grade security, interoperability, and scalability for real-world asset tokenization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">6 Layers</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Quantum Safe</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Technologies</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology stack designed for institutional-grade performance and security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`${tech.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                <p className="text-gray-300 leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Architecture Layers</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Modular architecture designed for scalability and maintainability.
            </p>
          </div>

          <div className="space-y-6">
            {architecture.map((layer, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{layer.layer}</h3>
                    <div className="flex gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="bg-gray-800/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300">{layer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Security Features</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Military-grade security protocols and quantum-resistant encryption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold border border-cyan-500/30">
                  {feature.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Explore Our Technology</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deeper into the technical architecture and security features of ARCHT Protocol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg">
              Technical Documentation
            </Button>
            <Button variant="outline" size="lg">
              Security Audit Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;