import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

function Technology() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Technology Stack
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six-layer architecture providing sovereign-grade security, interoperability, and scalability for real-world asset tokenization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400">Quantum Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Military-grade NFC chips with quantum-resistant encryption and multi-signature validation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">AI Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                95%+ accuracy in asset validation using satellite data and predictive AI algorithms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-green-400">Interoperability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Native integration with 15+ blockchain networks and traditional banking systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Technology;


