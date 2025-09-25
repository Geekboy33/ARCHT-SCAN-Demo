import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe, Shield, TrendingUp, Users, Building2, BarChart3, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Governments() {
  const solutions = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fiscal Optimization",
      description: "Transform illiquid national assets into liquid digital tokens for enhanced fiscal management and economic growth",
      color: "text-cyan-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "ESG Compliance",
      description: "Complete traceability and ESG reporting for all tokenized assets with automated compliance monitoring",
      color: "text-white"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Economic Sovereignty",
      description: "Maintain control over national resources while enabling global market access and liquidity",
      color: "text-gray-300"
    }
  ];

  const benefits = [
    { title: "Revenue Increase", description: "Automated tax collection and reporting", metric: "+200%" },
    { title: "Market Access", description: "Global liquidity for national assets", metric: "15+ Networks" },
    { title: "ESG Transparency", description: "Real-time environmental monitoring", metric: "100% Traceable" },
    { title: "Job Creation", description: "Technology and finance sector growth", metric: "250K+ Jobs" }
  ];

  const sovereignFeatures = [
    {
      title: "National Asset Registry",
      description: "Comprehensive digital registry of all national assets",
      features: ["Mineral reserves", "Agricultural land", "Energy resources", "Infrastructure"]
    },
    {
      title: "CBDC Integration",
      description: "Seamless integration with central bank digital currencies",
      features: ["Real Digital (Brazil)", "Digital Yuan", "Digital Euro", "UAE Dirham"]
    },
    {
      title: "Regulatory Framework",
      description: "Customizable regulatory framework for each jurisdiction",
      features: ["Local compliance", "International standards", "Automated reporting", "Audit trails"]
    },
    {
      title: "Economic Analytics",
      description: "Advanced analytics for economic planning and optimization",
      features: ["GDP impact", "Trade balance", "Investment flows", "Risk assessment"]
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
              Government Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Sovereign-grade infrastructure for national asset tokenization, fiscal optimization, and economic sovereignty.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Sovereign Grade</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">National Scale</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">CBDC Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Solutions */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sovereign Solutions</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive infrastructure for national asset tokenization and economic sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
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
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Key Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Measurable economic impact through sovereign asset tokenization.
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

      {/* Sovereign Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Sovereign Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced features designed specifically for government and sovereign operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sovereignFeatures.map((feature, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardHeader>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                <p className="text-gray-400">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Government Use Cases</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-world applications across different government sectors and asset types.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready for Sovereign Tokenization?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing number of governments leveraging ARCHT Protocol for economic sovereignty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Request Government Onboarding
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Governments;