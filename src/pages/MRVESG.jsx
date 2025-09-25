import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, BarChart3, Shield, Globe, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function MRVESG() {
  const mrvPillars = [
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Monitoring",
      description: "Real-time data collection and analysis",
      details: ["IoT Sensors", "Satellite Imagery", "Blockchain Tracking", "AI Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Reporting",
      description: "Transparent and verifiable reporting",
      details: ["Automated Reports", "Regulatory Compliance", "Stakeholder Updates", "Public Dashboards"]
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Verification",
      description: "Third-party verification and validation",
      details: ["Independent Audits", "Certification Bodies", "Peer Review", "Blockchain Proof"]
    }
  ];

  const esgMetrics = [
    { category: "Environmental", score: 92, status: "Excellent", color: "from-green-500 to-green-600" },
    { category: "Social", score: 88, status: "Very Good", color: "from-blue-500 to-blue-600" },
    { category: "Governance", score: 95, status: "Excellent", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Button asChild variant="outline" className="mb-8">
              <Link to="/protocol">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Protocol
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              MRV/ESG
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive Monitoring, Reporting, and Verification system for Environmental, Social, and Governance metrics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-green-500/30">
                <span className="text-green-400 font-semibold">92% ESG Score</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30">
                <span className="text-blue-400 font-semibold">Real-time MRV</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Blockchain Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MRV Pillars */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">MRV Framework</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three-pillar approach to comprehensive environmental and social impact measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mrvPillars.map((pillar, index) => (
            <Card key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  {pillar.icon}
                  <h3 className="text-2xl font-semibold text-white mt-4 mb-2">{pillar.title}</h3>
                  <p className="text-gray-300">{pillar.description}</p>
                </div>
                
                <div className="space-y-3">
                  {pillar.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ESG Metrics */}
      <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">ESG Performance</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive Environmental, Social, and Governance metrics and scoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgMetrics.map((metric, index) => (
              <Card key={index} className="bg-black/50 border border-white/10">
                <CardContent className="p-8 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-white font-bold text-2xl">{metric.score}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{metric.category}</h3>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    metric.status === 'Excellent' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {metric.status}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Join the ESG Revolution</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the sustainable future with transparent, verifiable impact measurement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              View ESG Dashboard
            </Button>
            <Button variant="outline" size="lg">
              Download Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MRVESG;