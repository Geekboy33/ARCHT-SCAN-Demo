import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Eye, Heart, Shield, Globe, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "Military-grade security and quantum-resistant encryption in everything we build",
      color: "text-cyan-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Transparency",
      description: "Complete traceability and transparency across all tokenized assets",
      color: "text-white"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Institutional Excellence",
      description: "Built for governments, enterprises, and institutional-grade operations",
      color: "text-gray-300"
    }
  ];

  const team = [
    {
      role: "Protocol Development",
      description: "Core blockchain and tokenization infrastructure",
      members: "15+ Engineers"
    },
    {
      role: "Regulatory & Legal",
      description: "Global compliance and legal framework development",
      members: "8+ Specialists"
    },
    {
      role: "Business Development",
      description: "Government relations and enterprise partnerships",
      members: "12+ Professionals"
    }
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
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
            About ARCHT
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of real-world asset tokenization with sovereign-grade infrastructure and institutional compliance.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Sovereign Grade</span>
            </div>
            <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
              <span className="text-gray-300 font-semibold">Global Scale</span>
            </div>
            <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
              <span className="text-gray-400 font-semibold">Institutional</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-black/50 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl text-cyan-400">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To democratize access to real-world assets through secure, compliant, and liquid tokenization infrastructure that bridges physical and digital economies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-white/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  A world where every physical asset can be instantly tokenized, traded, and accessed globally with full transparency and sovereign control.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-gray-300/30 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300/10 to-gray-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-gray-300" />
                </div>
                <CardTitle className="text-2xl text-gray-300">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  Security, transparency, compliance, and innovation at the core of everything we build and deliver to our partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Values</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our development and partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`${value.color} mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto w-fit`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Team</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in blockchain, finance, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((department, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-4">{department.role}</h3>
                  <p className="text-gray-300 mb-4">{department.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{department.members}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of tokenized real-world assets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg">
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;