import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, TrendingUp, Globe, Zap, Shield, 
  ChevronRight, Play, Users, Building2, Target
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Platform() {
  const platformFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Professional Dashboards",
      description: "Real-time analytics and monitoring tools for institutional users",
      link: "/platform/dashboards"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Indices",
      description: "AMI, AAI, ACI, IPRT indices for comprehensive market tracking",
      link: "/platform/indices"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Data & API",
      description: "Enterprise-grade data feeds and API access",
      link: "/platform/data-api"
    }
  ];

  const stats = [
    { label: "Active Users", value: "15,000+", change: "+12%" },
    { label: "API Calls/Day", value: "2.4M", change: "+8%" },
    { label: "Data Points", value: "1.2B", change: "+15%" },
    { label: "Uptime", value: "99.9%", change: "Stable" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-auto">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.08),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-cyan-900/30 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-400/30">
              Enterprise Platform • v2.1.0
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-archetyp-400 via-archetyp-500 to-archetyp-600 bg-clip-text text-transparent tracking-tight">
            ARCHT Platform
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Institutional-grade tools for real-world asset tokenization, analytics, and compliance
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button asChild size="xl" variant="gradient" className="group">
              <Link to="/platform/dashboards">
                Explore Dashboards <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="group">
              <Link to="/platform/data-api">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> API Access
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" className="group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl md:text-4xl font-black text-archetyp-400 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-green-400 text-xs mt-1">{stat.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Platform Features</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive tools for institutional users and developers
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{feature.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>
                      Explore Feature <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Seamless Integration</h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Connect with existing systems and workflows
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black/50 border border-gray-800 hover:border-green-400 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-white">Enterprise Systems</h3>
                <p className="text-gray-300 text-sm">ERP, CRM, and legacy system integration</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-blue-400 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-white">API Access</h3>
                <p className="text-gray-300 text-sm">RESTful APIs and WebSocket feeds</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-purple-400 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-white">Security</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800 hover:border-orange-400 transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
                <p className="text-gray-300 text-sm">24/7 enterprise support and training</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Platform;