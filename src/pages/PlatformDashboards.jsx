import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Users, Zap, Shield, Globe, Database } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function PlatformDashboards() {
  const dashboardFeatures = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Real-time Analytics",
      description: "Live market data and performance metrics",
      features: ["Live Price Feeds", "Volume Analysis", "Market Trends", "Performance Tracking"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking and optimization",
      features: ["Asset Allocation", "Risk Assessment", "Performance Metrics", "Rebalancing Tools"]
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "User Dashboards",
      description: "Personalized dashboards for different user types",
      features: ["Individual Investors", "Institutional Clients", "Asset Managers", "Regulatory Bodies"]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Customizable Views",
      description: "Flexible dashboard configuration and widgets",
      features: ["Drag & Drop", "Custom Widgets", "Saved Views", "Export Options"]
    }
  ];

  const dashboardTypes = [
    {
      name: "Asset Dashboard",
      description: "Comprehensive view of all tokenized assets",
      metrics: ["Price Performance", "Volume Analysis", "Market Cap", "ESG Scores"]
    },
    {
      name: "Portfolio Dashboard",
      description: "Personal portfolio tracking and management",
      metrics: ["Total Value", "Asset Allocation", "Performance", "Risk Metrics"]
    },
    {
      name: "Market Dashboard",
      description: "Global market overview and trends",
      metrics: ["Market Indices", "Sector Performance", "Geographic Analysis", "Trend Indicators"]
    },
    {
      name: "ESG Dashboard",
      description: "Environmental, Social, and Governance metrics",
      metrics: ["Carbon Footprint", "Social Impact", "Governance Score", "Sustainability Goals"]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/platform">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Platform
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Platform Dashboards
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional-grade dashboards and analytics for comprehensive asset management and market insights.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">Real-time Data</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30">
                <span className="text-blue-400 font-semibold">Customizable</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Multi-user</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Dashboard Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced analytics and visualization tools for comprehensive asset management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dashboardFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  {feature.icon}
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
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
      </div>

      {/* Dashboard Types */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Dashboard Types</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized dashboards for different use cases and user types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dashboardTypes.map((dashboard, index) => (
              <Card key={index} className="bg-black/50 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{dashboard.name}</CardTitle>
                  <p className="text-gray-400">{dashboard.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-300">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Technology Stack</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built with modern technologies for optimal performance and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">React</h3>
              <p className="text-gray-400">Modern UI framework</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WebSocket</h3>
              <p className="text-gray-400">Real-time data streaming</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">D3.js</h3>
              <p className="text-gray-400">Advanced visualizations</p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border border-white/10">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cloud</h3>
              <p className="text-gray-400">Scalable infrastructure</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Access Your Dashboard</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with professional-grade analytics and portfolio management tools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Launch Dashboard
            </Button>
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformDashboards;