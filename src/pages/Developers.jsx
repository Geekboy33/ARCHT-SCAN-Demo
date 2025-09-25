import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Database, Zap, Globe, FileText, Terminal, Book } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Developers() {
  const developerTools = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "API Documentation",
      description: "Comprehensive REST and GraphQL APIs for asset management, trading, and compliance operations",
      color: "text-cyan-400"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "SDKs & Libraries",
      description: "Native SDKs for JavaScript, Python, Go, and Rust with TypeScript support and examples",
      color: "text-white"
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Developer Sandbox",
      description: "Test environment with simulated assets and transactions for development and testing",
      color: "text-gray-300"
    }
  ];

  const apiEndpoints = [
    { method: "GET", endpoint: "/api/v1/assets", description: "List all tokenized assets" },
    { method: "POST", endpoint: "/api/v1/assets/tokenize", description: "Tokenize a new asset" },
    { method: "GET", endpoint: "/api/v1/market/data", description: "Real-time market data" },
    { method: "POST", endpoint: "/api/v1/compliance/verify", description: "Verify compliance status" }
  ];

  const sdks = [
    { language: "JavaScript", version: "v2.1.0", downloads: "15K+" },
    { language: "Python", version: "v2.0.8", downloads: "8K+" },
    { language: "Go", version: "v1.9.2", downloads: "3K+" },
    { language: "Rust", version: "v1.5.1", downloads: "1K+" }
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
              Developer Resources
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Build on ARCHT Protocol with comprehensive APIs, SDKs, and developer tools for real-world asset tokenization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gradient-to-r from-white/10 to-gray-300/10 px-6 py-3 rounded-full border border-white/20">
                <span className="text-white font-semibold">REST & GraphQL</span>
              </div>
              <div className="bg-gradient-to-r from-gray-300/10 to-gray-500/10 px-6 py-3 rounded-full border border-gray-300/20">
                <span className="text-gray-300 font-semibold">4 SDKs</span>
              </div>
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-700/10 px-6 py-3 rounded-full border border-gray-500/20">
                <span className="text-gray-400 font-semibold">Sandbox</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Developer Tools</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build on the ARCHT Protocol ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {developerTools.map((tool, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800 hover:border-cyan-400 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className={`${tool.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">API Endpoints</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Key API endpoints for asset management and trading operations.
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <Card key={index} className="bg-black/50 border border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        endpoint.method === 'GET' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/20 text-white'
                      }`}>
                        {endpoint.method}
                      </div>
                      <code className="text-white font-mono">{endpoint.endpoint}</code>
                    </div>
                    <p className="text-gray-300">{endpoint.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">SDKs & Libraries</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Native SDKs for popular programming languages with comprehensive documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sdks.map((sdk, index) => (
            <Card key={index} className="bg-black/50 border border-gray-800">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">{sdk.language}</h3>
                <div className="text-cyan-400 font-mono text-sm mb-2">{sdk.version}</div>
                <div className="text-gray-400 text-sm">{sdk.downloads} downloads</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Getting Started</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick start guide to begin building on ARCHT Protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Get API Keys</h3>
                <p className="text-gray-300">Register for developer access and obtain your API credentials</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Install SDK</h3>
                <p className="text-gray-300">Choose your preferred language and install the ARCHT SDK</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border border-gray-800">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-300/10 to-gray-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Start Building</h3>
                <p className="text-gray-300">Use our sandbox environment to test and develop your application</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Start Building Today</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the developer community and build the future of tokenized real-world assets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg">
              Get API Access
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Developers;