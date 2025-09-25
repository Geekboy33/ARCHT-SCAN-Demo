import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Developers() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Developer Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build on ARCHT Protocol with comprehensive APIs, SDKs, and developer tools for real-world asset tokenization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-orange-400">API Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Comprehensive REST and GraphQL APIs for asset management, trading, and compliance operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">SDKs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Native SDKs for JavaScript, Python, Go, and Rust with TypeScript support and examples.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Sandbox</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Test environment with simulated assets and transactions for development and testing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Developers;


