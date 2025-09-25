import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, TrendingUp, Globe, FileText, Users, Target, Activity } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Insights() {
  const insights = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Comprehensive market analysis and trend reports on tokenized asset performance",
      color: "text-cyan-400"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research Reports",
      description: "In-depth research on regulatory developments, technology trends, and market opportunities",
      color: "text-white"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "AI-powered insights and predictive analytics for informed decision making",
      color: "text-gray-300"
    }
  ];

  const marketData = [
    { metric: "Total Market Cap", value: "$12.4B", change: "+8.2%" },
    { metric: "Daily Volume", value: "$2.8B", change: "+12.5%" },
    { metric: "Active Assets", value: "247", change: "+15" },
    { metric: "Global Reach", value: "8 Countries", change: "+2" }
  ];

  const reports = [
    {
      title: "Q4 2024 Market Report",
      description: "Comprehensive analysis of tokenized asset performance",
      date: "December 2024",
      type: "Market Analysis"
    },
    {
      title: "Regulatory Landscape 2025",
      description: "Global regulatory developments and compliance updates",
      date: "January 2025",
      type: "Regulatory"
    },
    {
      title: "ESG Impact Assessment",
      description: "Environmental and social impact of tokenized assets",
      date: "November 2024",
      type: "ESG Report"
    },
    {
      title: "Technology Roadmap",
      description: "Technical developments and future innovations",
      date: "October 2024",
      type: "Technology"
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
              Market Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time analytics, market intelligence, and research insights on tokenized real-world assets.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Real-time Data</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">AI Analytics</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Global Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Market Intelligence</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced analytics and insights for tokenized real-world assets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`${insight.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {insight.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{insight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Market Data */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Market Data</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Key metrics and performance indicators for the tokenized asset ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketData.map((data, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{data.value}</h3>
                  <p className="text-gray-300 mb-2">{data.metric}</p>
                  <div className="text-cyan-400 font-semibold text-sm">{data.change}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Reports */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Research Reports</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Latest research and analysis on tokenized assets and market trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white">{report.title}</CardTitle>
                    <p className="text-gray-400 mt-2">{report.description}</p>
                  </div>
                  <div className="bg-gray-800/50 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-700">
                    {report.type}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{report.date}</span>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our research and insights to stay ahead of market trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Subscribe to Insights
            </Button>
            <Button variant="outline" size="lg">
              Request Custom Research
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insights;