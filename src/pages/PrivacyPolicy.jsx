import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Globe, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function PrivacyPolicy() {
  const privacyPrinciples = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Protection",
      description: "We implement industry-leading security measures to protect your personal information",
      color: "text-cyan-400"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear and transparent data collection and usage practices with full user control",
      color: "text-white"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "User Control",
      description: "You have complete control over your data with options to modify or delete at any time",
      color: "text-gray-300"
    }
  ];

  const dataTypes = [
    {
      category: "Personal Information",
      items: ["Name and contact details", "Professional information", "Account credentials", "Communication preferences"]
    },
    {
      category: "Usage Data",
      items: ["Platform interactions", "Feature usage patterns", "Performance metrics", "Error logs"]
    },
    {
      category: "Technical Data",
      items: ["IP address and location", "Device information", "Browser details", "Session data"]
    },
    {
      category: "Financial Data",
      items: ["Transaction history", "Asset holdings", "Trading patterns", "Compliance records"]
    }
  ];

  const userRights = [
    { right: "Access", description: "Request access to your personal data" },
    { right: "Rectification", description: "Correct inaccurate or incomplete data" },
    { right: "Erasure", description: "Request deletion of your personal data" },
    { right: "Portability", description: "Export your data in a structured format" },
    { right: "Restriction", description: "Limit processing of your data" },
    { right: "Objection", description: "Object to certain data processing activities" }
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Your privacy and data security are fundamental to our operations. Learn how we protect and manage your information.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">GDPR Compliant</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">SOC 2 Certified</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Privacy Principles</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Core principles that guide our approach to data privacy and protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${principle.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Data We Collect</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent overview of the types of data we collect and how we use them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dataTypes.map((type, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{type.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.items.map((item, itemIndex) => (
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
      </section>

      {/* User Rights */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Your Rights</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Under GDPR and other privacy regulations, you have specific rights regarding your personal data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{right.right}</h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Privacy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Privacy Questions?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our Data Protection Officer for any privacy-related questions or requests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg">
              Contact DPO
            </Button>
            <Button variant="outline" size="lg">
              Data Request Form
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;