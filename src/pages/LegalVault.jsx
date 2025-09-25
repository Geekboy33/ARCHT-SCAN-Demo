import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Scale, CheckCircle, Lock, Globe, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function LegalVault() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring across multiple jurisdictions",
      details: ["KYC/AML Verification", "Regulatory Reporting", "Compliance Dashboards", "Audit Trails"]
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Smart Contracts",
      description: "Legally binding smart contracts with traditional law integration",
      details: ["Legal Templates", "Automated Execution", "Dispute Resolution", "Contract Analytics"]
    },
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Jurisdictional Framework",
      description: "Multi-jurisdictional legal framework for global operations",
      details: ["Cross-border Compliance", "Legal Entity Management", "Tax Optimization", "Regulatory Mapping"]
    },
    {
      icon: <Lock className="w-8 h-8 text-white" />,
      title: "Data Protection",
      description: "GDPR, CCPA, and other privacy regulation compliance",
      details: ["Data Encryption", "Privacy Controls", "Consent Management", "Data Portability"]
    }
  ];

  const jurisdictions = [
    { name: "United States", flag: "🇺🇸", status: "Active", compliance: "SEC, CFTC, FinCEN" },
    { name: "European Union", flag: "🇪🇺", status: "Active", compliance: "MiCA, GDPR, ESMA" },
    { name: "United Kingdom", flag: "🇬🇧", status: "Active", compliance: "FCA, PRA, ICO" },
    { name: "Singapore", flag: "🇸🇬", status: "Active", compliance: "MAS, PDPA" },
    { name: "Japan", flag: "🇯🇵", status: "Active", compliance: "FSA, PPC" },
    { name: "Brazil", flag: "🇧🇷", status: "Pilot", compliance: "CVM, BACEN" },
    { name: "UAE", flag: "🇦🇪", status: "Pilot", compliance: "SCA, ADGM" },
    { name: "South Africa", flag: "🇿🇦", status: "Pilot", compliance: "FSCA, POPIA" }
  ];

  const legalServices = [
    {
      category: "Corporate Law",
      services: ["Entity Formation", "Governance Structures", "Board Management", "Shareholder Rights"]
    },
    {
      category: "Securities Law",
      services: ["Token Classification", "Offering Compliance", "Trading Regulations", "Disclosure Requirements"]
    },
    {
      category: "Tax Law",
      services: ["Tax Optimization", "Transfer Pricing", "Withholding Tax", "Reporting Obligations"]
    },
    {
      category: "Intellectual Property",
      services: ["Patent Protection", "Trademark Registration", "Copyright Management", "Trade Secrets"]
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
              <Link to="/protocol">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Protocol
              </Link>
            </Button>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              LegalVault™
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The world's first comprehensive legal framework for tokenized real-world assets, ensuring compliance across all jurisdictions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">8 Jurisdictions</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-3 rounded-full border border-blue-500/30">
                <span className="text-blue-400 font-semibold">100% Compliance</span>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-3 rounded-full border border-purple-500/30">
                <span className="text-purple-400 font-semibold">Smart Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Core Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal infrastructure for tokenized assets across multiple jurisdictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Jurisdictions Section */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Global Jurisdictions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Active compliance across major financial markets worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jurisdictions.map((jurisdiction, index) => (
              <Card key={index} className={`bg-black/50 border ${
                jurisdiction.status === 'Active' ? 'border-green-500/30' : 'border-yellow-500/30'
              }`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{jurisdiction.flag}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{jurisdiction.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                    jurisdiction.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {jurisdiction.status}
                  </div>
                  <p className="text-sm text-gray-400">{jurisdiction.compliance}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Services */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Legal Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive legal support across all aspects of tokenized assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {legalServices.map((service, index) => (
            <Card key={index} className="bg-gradient-to-b from-gray-900/50 to-gray-800/50 border border-white/10">
              <CardHeader>
                <CardTitle className="text-xl text-white">{service.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.services.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Compliance Dashboard */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Compliance Dashboard</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time monitoring of compliance status across all jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-green-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-300">Compliance Rate</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-blue-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">8</h3>
                <p className="text-gray-300">Active Jurisdictions</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-purple-500/30">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-300">Legal Support</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready for Legal Compliance?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Get started with LegalVault™ and ensure your tokenized assets are fully compliant.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="gradient" size="lg">
            Start Compliance Process
          </Button>
          <Button variant="outline" size="lg">
            Contact Legal Team
          </Button>
        </div>
      </section>
    </div>
  );
}

export default LegalVault;