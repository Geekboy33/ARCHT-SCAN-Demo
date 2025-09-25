import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Shield, Globe, Users, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function TermsOfService() {
  const termsCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Service Agreement",
      description: "Terms governing your use of ARCHT Protocol platform and services",
      color: "text-cyan-400"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Framework",
      description: "Legal obligations, rights, and responsibilities for all platform participants",
      color: "text-white"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Disclosure",
      description: "Important risk factors and disclaimers related to tokenized asset trading",
      color: "text-gray-300"
    }
  ];

  const keyTerms = [
    {
      section: "Platform Usage",
      terms: [
        "Authorized use of ARCHT Protocol services",
        "Account registration and verification requirements",
        "Prohibited activities and compliance obligations",
        "Service availability and maintenance windows"
      ]
    },
    {
      section: "Asset Tokenization",
      terms: [
        "Asset verification and validation processes",
        "Tokenization fees and service charges",
        "Custody and storage arrangements",
        "Transfer and trading restrictions"
      ]
    },
    {
      section: "Compliance & Regulatory",
      terms: [
        "KYC/AML verification requirements",
        "Regulatory reporting obligations",
        "Jurisdiction-specific compliance",
        "Audit and monitoring procedures"
      ]
    },
    {
      section: "Liability & Disclaimers",
      terms: [
        "Platform availability disclaimers",
        "Market risk acknowledgments",
        "Limitation of liability clauses",
        "Indemnification provisions"
      ]
    }
  ];

  const importantNotices = [
    {
      title: "Risk Warning",
      content: "Trading tokenized assets involves significant risk and may not be suitable for all investors.",
      type: "warning"
    },
    {
      title: "Regulatory Compliance",
      content: "Users must comply with all applicable laws and regulations in their jurisdiction.",
      type: "info"
    },
    {
      title: "Service Changes",
      content: "We reserve the right to modify these terms with appropriate notice to users.",
      type: "info"
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Legal terms and conditions governing the use of ARCHT Protocol platform and services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">Effective: Jan 2025</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">Version 2.1</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Categories */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Terms Overview</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Key categories of terms and conditions governing platform usage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {termsCategories.map((category, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Terms & Conditions</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Important terms and conditions organized by category for easy reference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyTerms.map((section, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{section.section}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.terms.map((term, termIndex) => (
                      <div key={termIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-gray-300">{term}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Important Notices</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Critical information and disclaimers for platform users.
            </p>
          </div>

          <div className="space-y-6">
            {importantNotices.map((notice, index) => (
              <Card key={index} className={`bg-black/50 border ${
                notice.type === 'warning' ? 'border-yellow-500/30' : 'border-gray-800'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className={`w-6 h-6 flex-shrink-0 mt-1 ${
                      notice.type === 'warning' ? 'text-yellow-400' : 'text-cyan-400'
                    }`} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{notice.title}</h3>
                      <p className="text-gray-300">{notice.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Legal */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Legal Questions?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our legal team for questions about these terms or legal compliance matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gradient" size="lg">
              Contact Legal Team
            </Button>
            <Button variant="outline" size="lg">
              Download Full Terms
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsOfService;